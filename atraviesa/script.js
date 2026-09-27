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

    // Referencias y control del Modal de Instrucciones
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

    // Plantilla SVG para la abejita en la cara superior
    const beeSvgHTML = `
        <svg class="bee-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <!-- Alas -->
            <ellipse cx="35" cy="30" rx="15" ry="25" fill="#e0f7fa" stroke="#333" stroke-width="3" transform="rotate(-30 35 30)"/>
            <ellipse cx="65" cy="30" rx="15" ry="25" fill="#e0f7fa" stroke="#333" stroke-width="3" transform="rotate(30 65 30)"/>
            <!-- Cuerpo de la abeja -->
            <ellipse cx="50" cy="55" rx="30" ry="35" fill="#f1c40f" stroke="#333" stroke-width="4"/>
            <!-- Franjas negras -->
            <path d="M 23,45 Q 50,52 77,45" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
            <path d="M 21,60 Q 50,68 79,60" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
            <!-- Ojos -->
            <circle cx="40" cy="35" r="4" fill="#333"/>
            <circle cx="60" cy="35" r="4" fill="#333"/>
            <!-- Sonrisa -->
            <path d="M 42,42 Q 50,48 58,42" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round"/>
        </svg>
    `;

    // Sonidos mediante Web Audio API
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    function playTone(freq, type, duration) {
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    }

    function playSoundEffect(type) {
        switch (type) {
            case 'flip':
                playTone(400, 'sine', 0.08);
                break;
            case 'correct':
                playTone(523.25, 'triangle', 0.15);
                setTimeout(() => playTone(659.25, 'triangle', 0.2), 120);
                break;
            case 'incorrect':
                playTone(220, 'sawtooth', 0.18);
                setTimeout(() => playTone(180, 'sawtooth', 0.25), 180);
                break;
            case 'win':
                [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
                    setTimeout(() => playTone(freq, 'sine', 0.25), idx * 130);
                });
                break;
            case 'lose':
                [300, 250, 200, 150].forEach((freq, idx) => {
                    setTimeout(() => playTone(freq, 'sawtooth', 0.2), idx * 110);
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
            alert('Por favor, ingresa tu nombre.');
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
                    ${beeSvgHTML}
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
                backFace.textContent = '🤔';
                showQuestion(cardInfo.data);
            } else if (cardInfo.type === 'joker') {
                if (cardInfo.joker === 'advance') {
                    backFace.innerHTML = '🚀<br>¡Avanzas!';
                    backFace.classList.add('correct');
                    playSoundEffect('correct');
                    setTimeout(advanceLevel, 1200);
                } else {
                    playSoundEffect('lose');
                    backFace.innerHTML = '☠️<br>¡Reinicia!';
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
            feedbackText.textContent = 'Por favor, selecciona una respuesta.';
            return;
        }

        questionModal.classList.add('modal-hidden');
        const backFace = activeCard.querySelector('.card-back');

        if (selectedButton.dataset.answer === correctAnswer) {
            playSoundEffect('correct');
            backFace.innerHTML = '✅<br>¡Correcto!';
            backFace.classList.add('correct');
            setTimeout(advanceLevel, 1000);
        } else {
            playSoundEffect('incorrect');
            backFace.innerHTML = '❌<br>¡Incorrecto!';
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