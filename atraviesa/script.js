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
    const playerStatus = document.getElementById('player-status');
    const displayName = document.getElementById('display-name');
    
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
                playTone(500, 'sine', 0.08);
                break;
            case 'correct':
                playTone(587.33, 'triangle', 0.12);
                setTimeout(() => playTone(880, 'triangle', 0.2), 100);
                break;
            case 'incorrect':
                playTone(160, 'sawtooth', 0.2);
                break;
            case 'win':
                [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
                    setTimeout(() => playTone(freq, 'sine', 0.2), idx * 110);
                });
                break;
            case 'lose':
                [250, 200, 150].forEach((freq, idx) => {
                    setTimeout(() => playTone(freq, 'sawtooth', 0.2), idx * 100);
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
            alert('Por favor, ingresa tu nombre de cadete.');
            return;
        }
        playerName = val;
        displayName.textContent = playerName;
        playerStatus.classList.remove('player-status-hidden');
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
                    <span class="card-icon">🪐</span>
                    <span class="card-number">#${i + 1}</span>
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
        
        boardLocked = true;
        activeCard = card;
        
        const index = parseInt(card.dataset.index);
        const cardInfo = cardsData[index];
        const backFace = card.querySelector('.card-back');

        // 1. Asignamos el contenido y estilos al reverso con anticipación
        if (cardInfo.type === 'question') {
            backFace.textContent = '⚡';
        } else if (cardInfo.type === 'joker') {
            if (cardInfo.joker === 'advance') {
                backFace.innerHTML = '🚀<br><small>¡Hiperespacio!</small>';
                backFace.classList.add('correct');
            } else {
                backFace.innerHTML = '☄️<br><small>¡Agujero Negro!</small>';
                backFace.classList.add('incorrect');
            }
        }

        // 2. Damos un respiro al navegador mediante requestAnimationFrame para asegurar una transición fluida
        requestAnimationFrame(() => {
            playSoundEffect('flip');
            card.classList.add('flipped');
        });

        // 3. Esperamos a que termine de girar la tarjeta (600ms) para ejecutar la lógica
        setTimeout(() => {
            if (cardInfo.type === 'question') {
                showQuestion(cardInfo.data);
            } else if (cardInfo.joker === 'advance') {
                playSoundEffect('correct');
                setTimeout(advanceLevel, 600);
            } else {
backFace.innerHTML = '☄️<br><small>¡Agujero Negro!</small>';
backFace.classList.add('incorrect');
void card.offsetWidth;
card.classList.add('flipped');
                playSoundEffect('lose');
                // Pausa exacta de 3 segundos para leer el Agujero Negro antes del reinicio
                setTimeout(initGame, 3000); 
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

        // Reprocesar expresiones LaTeX en el modal con MathJax
        if (window.MathJax) {
            MathJax.typesetPromise([questionModal]);
        }
    }

    function checkAnswer(correctAnswer) {
        const selectedButton = document.querySelector('#answer-options .selected');
        if (!selectedButton) {
            feedbackText.textContent = '¡Selecciona una coordenada de respuesta!';
            return;
        }

        questionModal.classList.add('modal-hidden');
        const backFace = activeCard.querySelector('.card-back');

        if (selectedButton.dataset.answer === correctAnswer) {
            playSoundEffect('correct');
            backFace.innerHTML = '✨<br><small>¡Impacto Exacto!</small>';
            backFace.classList.add('correct');
            setTimeout(advanceLevel, 1000);
        } else {
            playSoundEffect('incorrect');
            backFace.innerHTML = '💥<br><small>¡Desviado!</small>';
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