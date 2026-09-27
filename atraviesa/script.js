document.addEventListener('DOMContentLoaded', () => {

    const isMobile = window.matchMedia("(max-width: 900px)").matches;
    const ROWS = isMobile ? 8 : 3;
    const COLS = isMobile ? 3 : 8;
    const TOTAL_CARDS = ROWS * COLS;
    const JOKERS = { advance: 2, lose: 3 };
    const CARDS_WITH_QUESTIONS = TOTAL_CARDS - (JOKERS.advance + JOKERS.lose);

    let playerName = "";
    let currentLevel = 0;
    let cardsData = [];
    let activeCard = null;
    let boardLocked = false;

    // Elementos DOM
    const gameBoard = document.getElementById('game-board');
    const startModal = document.getElementById('start-modal');
    const playerNameInput = document.getElementById('player-name-input');
    const startGameBtn = document.getElementById('start-game-btn');
    
    const questionModal = document.getElementById('question-modal');
    const questionText = document.getElementById('question-text');
    const answerOptions = document.getElementById('answer-options');
    const submitBtn = document.getElementById('submit-answer');
    const feedbackText = document.getElementById('feedback-text');

    const certModal = document.getElementById('certificate-modal');
    const certPlayerName = document.getElementById('cert-player-name');
    const certDate = document.getElementById('cert-date');
    const printCertBtn = document.getElementById('print-cert-btn');
    const restartGameBtn = document.getElementById('restart-game-btn');

    const openInstructionsBtn = document.getElementById('open-instructions-btn');
    const closeInstructionsBtn = document.getElementById('close-instructions-btn');
    const instructionsModal = document.getElementById('instructions-modal');

    if (openInstructionsBtn && instructionsModal) {
        openInstructionsBtn.addEventListener('click', () => {
            instructionsModal.classList.remove('modal-hidden');
            if (window.MathJax) {
                MathJax.typesetPromise([instructionsModal]);
            }
        });
    }

    if (closeInstructionsBtn && instructionsModal) {
        closeInstructionsBtn.addEventListener('click', () => {
            instructionsModal.classList.add('modal-hidden');
        });
    }

    // SVG Estilo Tech/Brain para jóvenes de 15 años
    const cardIconSvgHTML = `
        <svg class="tech-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#38bdf8" stroke-width="4" stroke-dasharray="6, 4"/>
            <path d="M 35,40 Q 50,25 65,40 Q 75,55 60,70 Q 50,78 40,70 Q 25,55 35,40 Z" fill="none" stroke="#38bdf8" stroke-width="4"/>
            <circle cx="50" cy="48" r="8" fill="#38bdf8"/>
            <line x1="50" y1="20" x2="50" y2="30" stroke="#38bdf8" stroke-width="3"/>
            <line x1="50" y1="70" x2="50" y2="80" stroke="#38bdf8" stroke-width="3"/>
        </svg>
    `;

    // Audio mediante Web Audio API
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    function playTone(freq, type, duration) {
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    }

    function playSoundEffect(type) {
        switch (type) {
            case 'flip':
                playTone(520, 'sine', 0.06);
                break;
            case 'correct':
                playTone(587.33, 'triangle', 0.12);
                setTimeout(() => playTone(880, 'triangle', 0.2), 100);
                break;
            case 'incorrect':
                playTone(200, 'sawtooth', 0.15);
                setTimeout(() => playTone(150, 'sawtooth', 0.22), 150);
                break;
            case 'win':
                [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
                    setTimeout(() => playTone(freq, 'sine', 0.22), idx * 110);
                });
                break;
            case 'lose':
                [260, 220, 180, 130].forEach((freq, idx) => {
                    setTimeout(() => playTone(freq, 'sawtooth', 0.18), idx * 100);
                });
                break;
        }
    }

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    startGameBtn.addEventListener('click', () => {
        const val = playerNameInput.value.trim();
        if (val === '') {
            alert('Ingresa tu nombre completo para continuar.');
            return;
        }
        playerName = val;
        startModal.classList.add('modal-hidden');
        initGame();
    });

    function initGame() {
        currentLevel = 0;
        boardLocked = false;
        gameBoard.innerHTML = '';

        let tempQuestions = shuffle([...questionBank]);
        let questionsForGame = tempQuestions.slice(0, CARDS_WITH_QUESTIONS);

        const cardAssignments = [];
        for (let i = 0; i < JOKERS.advance; i++) cardAssignments.push({ type: 'joker', joker: 'advance' });
        for (let i = 0; i < JOKERS.lose; i++) cardAssignments.push({ type: 'joker', joker: 'lose' });
        
        questionsForGame.forEach(question => {
            cardAssignments.push({ type: 'question', data: question });
        });
        
        cardsData = shuffle(cardAssignments);

        for (let i = 0; i < TOTAL_CARDS; i++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.index = i;
            
            card.innerHTML = `
                <div class="card-face card-front">
                    ${cardIconSvgHTML}
                </div>
                <div class="card-face card-back"></div>
            `;
            
            card.addEventListener('click', handleCardClick);
            gameBoard.appendChild(card);
        }

        updateActiveLevelStatus();
    }

    function updateActiveLevelStatus() {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
            const index = parseInt(card.dataset.index);
            const cardLevel = isMobile ? Math.floor(index / COLS) : (index % COLS);
            
            if (cardLevel === currentLevel && !card.classList.contains('incorrect-answered')) {
                card.classList.remove('disabled');
            } else {
                card.classList.add('disabled');
            }
        });
    }

    function handleCardClick(event) {
        if (boardLocked) return;
        const card = event.currentTarget;
        if (card.classList.contains('disabled')) return;
        
        playSoundEffect('flip');
        boardLocked = true;
        card.classList.add('flipped');
        activeCard = card;
        
        const index = parseInt(card.dataset.index);
        const cardInfo = cardsData[index];
        const backFace = card.querySelector('.card-back');

        setTimeout(() => {
            if (cardInfo.type === 'question') {
                backFace.textContent = '🧠';
                showQuestion(cardInfo.data);
            } else if (cardInfo.type === 'joker') {
                if (cardInfo.joker === 'advance') {
                    backFace.innerHTML = '🚀<br>Impulso de Fase';
                    backFace.classList.add('correct');
                    playSoundEffect('correct');
                    setTimeout(advanceLevel, 1200);
                } else {
                    playSoundEffect('lose');
                    backFace.innerHTML = '☠️<br>Reinicio';
                    backFace.classList.add('incorrect');
                    setTimeout(initGame, 1800);
                }
            }
        }, 600);
    }

    function showQuestion(questionData) {
        questionText.textContent = questionData.question;
        answerOptions.innerHTML = '';
        feedbackText.textContent = '';

        questionData.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.dataset.answer = option;
            button.addEventListener('click', () => {
                document.querySelectorAll('#answer-options button').forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
            });
            answerOptions.appendChild(button);
        });
        
        submitBtn.onclick = () => checkAnswer(questionData.answer);
        questionModal.classList.remove('modal-hidden');

        if (window.MathJax) {
            MathJax.typesetPromise([questionModal]);
        }
    }

    function checkAnswer(correctAnswer) {
        const selectedButton = document.querySelector('#answer-options .selected');
        if (!selectedButton) {
            feedbackText.textContent = 'Selecciona una alternativa.';
            return;
        }

        questionModal.classList.add('modal-hidden');
        const backFace = activeCard.querySelector('.card-back');

        if (selectedButton.dataset.answer === correctAnswer) {
            playSoundEffect('correct');
            backFace.innerHTML = '✅<br>Correcto';
            backFace.classList.add('correct');
            setTimeout(advanceLevel, 1000);
        } else {
            playSoundEffect('incorrect');
            backFace.innerHTML = '❌<br>Incorrecto';
            backFace.classList.add('incorrect');
            activeCard.classList.add('disabled', 'incorrect-answered');
            boardLocked = false;
        }
    }

    function advanceLevel() {
        document.querySelectorAll('.card').forEach((card) => {
            const index = parseInt(card.dataset.index);
            const cardLevel = isMobile ? Math.floor(index / COLS) : (index % COLS);
            if (cardLevel === currentLevel) {
                card.classList.add('disabled');
            }
        });

        currentLevel++;
        const winCondition = isMobile ? ROWS : COLS;

        if (currentLevel >= winCondition) {
            playSoundEffect('win');
            setTimeout(showCertificate, 500);
        } else {
            updateActiveLevelStatus();
            boardLocked = false;
        }
    }

    function showCertificate() {
        certPlayerName.textContent = playerName;
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        certDate.textContent = new Date().toLocaleDateString('es-ES', options);
        certModal.classList.remove('modal-hidden');
    }

    printCertBtn.addEventListener('click', () => {
        window.print();
    });

    restartGameBtn.addEventListener('click', () => {
        certModal.classList.add('modal-hidden');
        initGame();
    });
});