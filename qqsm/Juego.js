// Declaración de Sonidos
const audioInicio = new Audio('recursos/inicio_juego.mp3');
const audioRespuestaCorrecta = new Audio('recursos/respuesta_correcta.mp3');
const audioRespuestaIncorrecta = new Audio('recursos/respuesta_incorrecta.mp3');
const audioVictoria = new Audio('recursos/victoria_final.mp3');
const audioComodin5050 = new Audio('recursos/comodin_5050.mp3');

// Función auxiliar para reproducir audios de forma segura y sin fallos de estado
function reproducirAudio(audioObjeto) {
    if (!audioObjeto) return;
    audioObjeto.pause();
    audioObjeto.currentTime = 0;
    audioObjeto.play().catch(error => {
        console.log("Reproducción de audio prevenida o fallida:", error);
    });
}

class JuegoMillonario {
    constructor(banco, config) {
        this.bancoDePreguntas = banco;
        this.config = config;

        this.state = {
            preguntas: [],
            preguntaActualIndex: 0,
            juegoActivo: false,
            dineroGanado: 0,
            tiempoInicio: null,
            jugadorSeleccionado: null,
            timerInterval: null,
            tiempoRestante: config.TIEMPO_LIMITE,
            comodinesUsados: { '5050': false }
        };

        this.dom = {
            seleccionContenedor: document.getElementById('seleccion-jugador-contenedor'),
            nombreInput: document.getElementById('nombre-jugador'),
            iniciarJuegoBoton: document.getElementById('iniciar-juego-btn-seleccion'),
            gameContenedor: document.querySelector('.contenedor-juego'),
            preguntaTexto: document.getElementById('pregunta-texto'),
            opciones: Array.from(document.getElementsByClassName('opcion')),
            marcadorLista: document.getElementById('marcador-lista'),
            comodin5050Boton: document.getElementById('comodin-5050'),
            gameStatusElement: document.getElementById('game-status-mensaje'),
            timerDisplay: document.getElementById('timer-display'),
            timerContenedor: document.getElementById('timer-contenedor'),
            premioActualDisplay: document.getElementById('premio-actual')
        };

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.dom.nombreInput.addEventListener('input', this.handleNombreInput.bind(this));
        this.dom.iniciarJuegoBoton.addEventListener('click', this.iniciarJuego.bind(this));
        this.dom.opciones.forEach(btn => {
            btn.addEventListener('click', (e) => this.comprobarRespuesta(e.target));
        });
        this.dom.comodin5050Boton.addEventListener('click', this.usarComodin5050.bind(this));
    }

    handleNombreInput(e) {
        this.dom.iniciarJuegoBoton.disabled = e.target.value.trim().length === 0;
    }

    seleccionarPreguntasAlAzar() {
        const mezclado = [...this.bancoDePreguntas];
        for (let i = mezclado.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mezclado[i], mezclado[j]] = [mezclado[j], mezclado[i]];
        }
        const seleccionadas = mezclado.slice(0, this.config.NUM_PREGUNTAS);
        return seleccionadas.map((pregunta, index) => ({
            ...pregunta,
            nivel: index + 1,
            premio: (index + 1) * this.config.BASE_PREMIO
        }));
    }

    desbloquearAudioMovil() {
        const listaAudios = [audioInicio, audioRespuestaCorrecta, audioRespuestaIncorrecta, audioVictoria, audioComodin5050];
        listaAudios.forEach(audio => {
            audio.play().then(() => {
                audio.pause();
                audio.currentTime = 0;
            }).catch(() => {});
        });
    }

    iniciarJuego() {
        this.state.jugadorSeleccionado = this.dom.nombreInput.value.trim();
        if (!this.state.jugadorSeleccionado) return;

        this.desbloquearAudioMovil();

        this.state.preguntas = this.seleccionarPreguntasAlAzar();
        this.state.preguntaActualIndex = 0;
        this.state.dineroGanado = 0;
        this.state.tiempoInicio = new Date();
        this.state.juegoActivo = true;
        this.state.comodinesUsados = { '5050': false };

        this.dom.seleccionContenedor.style.display = 'none';
        this.dom.gameContenedor.style.display = 'flex';
        this.dom.gameStatusElement.textContent = '';
        this.dom.comodin5050Boton.disabled = false;

        this.cargarPregunta();
        this.actualizarMarcador();
    }

    startTimer() {
        if (this.state.timerInterval) clearInterval(this.state.timerInterval);
        this.state.tiempoRestante = this.config.TIEMPO_LIMITE;
        this.dom.timerDisplay.textContent = this.state.tiempoRestante;
        this.dom.timerContenedor.classList.remove('advertencia');

        this.state.timerInterval = setInterval(() => {
            this.state.tiempoRestante--;
            this.dom.timerDisplay.textContent = this.state.tiempoRestante;

            if (this.state.tiempoRestante <= 10) {
                this.dom.timerContenedor.classList.add('advertencia');
            }

            if (this.state.tiempoRestante <= 0) {
                this.stopTimer();
                this.dom.opciones.forEach(btn => btn.disabled = true);
                audioInicio.pause();
                this.finalizarJuego('perdida_tiempo');
            }
        }, 1000);
    }

    stopTimer() {
        if (this.state.timerInterval) clearInterval(this.state.timerInterval);
        this.dom.timerContenedor.classList.remove('advertencia');
    }

    cargarPregunta() {
        if (!this.state.juegoActivo || this.state.preguntaActualIndex >= this.state.preguntas.length) return;

        const preguntaData = this.state.preguntas[this.state.preguntaActualIndex];
        this.dom.preguntaTexto.textContent = `${preguntaData.nivel}. ${preguntaData.pregunta}`;

        const opcionesMezcladas = [...preguntaData.opciones];
        for (let i = opcionesMezcladas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opcionesMezcladas[i], opcionesMezcladas[j]] = [opcionesMezcladas[j], opcionesMezcladas[i]];
        }

        const letras = ['A', 'B', 'C', 'D'];
        this.dom.opciones.forEach((btn, index) => {
            const opcionTexto = opcionesMezcladas[index];
            const letra = letras[index];

            btn.setAttribute('data-source', opcionTexto);
            btn.textContent = `${letra}: ${opcionTexto}`; 
            btn.disabled = false;
            btn.classList.remove('correcta', 'incorrecta');
        });

        this.actualizarMarcador();
        
        if (window.MathJax) {
            window.MathJax.typesetPromise([this.dom.preguntaTexto, ...this.dom.opciones]);
        }

        reproducirAudio(audioInicio);
        this.startTimer();
    }

    actualizarMarcador() {
        this.dom.marcadorLista.innerHTML = '';
        const preguntas = this.state.preguntas;

        preguntas.slice().reverse().forEach((p, index) => {
            const li = document.createElement('li');
            li.textContent = `${p.nivel}. $${p.premio.toLocaleString()}`;
            const marcadorIndex = preguntas.length - 1 - index;

            if (marcadorIndex === this.state.preguntaActualIndex) li.classList.add('nivel-actual');
            if (marcadorIndex < this.state.preguntaActualIndex) li.classList.add('nivel-superado');
            
            this.dom.marcadorLista.appendChild(li);
        });

        const premio = preguntas[this.state.preguntaActualIndex] ? preguntas[this.state.preguntaActualIndex].premio : this.state.dineroGanado;
        this.dom.premioActualDisplay.textContent = `$${premio.toLocaleString()}`;
    }

    async comprobarRespuesta(opcionSeleccionada) {
        if (!this.state.juegoActivo) return;

        this.stopTimer(); 
        audioInicio.pause();
        audioInicio.currentTime = 0;
        this.state.juegoActivo = false;
        this.dom.opciones.forEach(btn => btn.disabled = true);

        const preguntaData = this.state.preguntas[this.state.preguntaActualIndex];
        const respuestaSeleccionadaSource = opcionSeleccionada.getAttribute('data-source');
        const respuestaCorrectaSource = preguntaData.respuestaCorrecta;

        if (respuestaSeleccionadaSource === respuestaCorrectaSource) {
            opcionSeleccionada.classList.add('correcta');
            this.state.dineroGanado = preguntaData.premio;
            reproducirAudio(audioRespuestaCorrecta);

            if (this.state.preguntaActualIndex === this.state.preguntas.length - 1) {
                setTimeout(() => this.finalizarJuego('victoria'), 2000);
                return;
            }

            this.state.preguntaActualIndex++;
            setTimeout(() => {
                this.state.juegoActivo = true;
                this.cargarPregunta();
            }, 2000);

        } else {
            opcionSeleccionada.classList.add('incorrecta');
            const botonCorrecto = this.dom.opciones.find(btn => btn.getAttribute('data-source') === respuestaCorrectaSource);
            if (botonCorrecto) botonCorrecto.classList.add('correcta');

            reproducirAudio(audioRespuestaIncorrecta);
            setTimeout(() => this.finalizarJuego('perdida'), 3000);
        }
    }

    finalizarJuego(razon) {
        this.stopTimer();
        this.state.juegoActivo = false;
        
        audioInicio.pause();
        audioRespuestaCorrecta.pause();

        let mensajeFinal = "";
        let preguntasCorrectas = this.state.preguntaActualIndex;
        
        if (razon === 'victoria') {
            preguntasCorrectas = this.config.NUM_PREGUNTAS;
            mensajeFinal = `¡VICTORIA! ¡Excelente trabajo!`;
            reproducirAudio(audioVictoria);
        } else if (razon === 'perdida_tiempo') {
            mensajeFinal = `¡Tiempo Agotado!`;
            reproducirAudio(audioRespuestaIncorrecta);
        } else {
            mensajeFinal = `¡Juego Terminado!`;
        }

        let notaCalculada = (preguntasCorrectas / this.config.NUM_PREGUNTAS) * 5.0;
        let notaFormateada = notaCalculada.toFixed(1);

        this.dom.opciones.forEach(btn => btn.disabled = true);
        this.dom.comodin5050Boton.disabled = true;
        this.dom.preguntaTexto.innerHTML = `<h2>${mensajeFinal}</h2><p>Nota obtenida: ${notaFormateada}</p>`;
        this.dom.gameStatusElement.textContent = "Generando diploma...";

        setTimeout(() => {
            const fecha = new Date().toLocaleString('es-CO', { dateStyle: 'short', timeStyle: 'short' });
            
            const params = new URLSearchParams({
                nombre: this.state.jugadorSeleccionado,
                juego: "El Millonario - Repaso General",
                puntaje: notaFormateada,
                fecha: fecha
            });

            window.location.href = `diploma.html?${params.toString()}`;
        }, 4000);
    }

    usarComodin5050() {
        if (!this.state.juegoActivo || this.state.comodinesUsados['5050']) return;
        reproducirAudio(audioComodin5050);

        const preguntaData = this.state.preguntas[this.state.preguntaActualIndex];
        const opciones = this.dom.opciones;
        
        const indiceCorrecto = opciones.findIndex(btn => btn.getAttribute('data-source') === preguntaData.respuestaCorrecta);
        let indicesAExcluir = [indiceCorrecto]; 
        let count = 0;
        
        const getRandomIncorrectIndex = (excludeIndices) => {
            let index;
            do {
                index = Math.floor(Math.random() * opciones.length);
            } while (excludeIndices.includes(index));
            return index;
        };

        while (count < 2) {
            const randomIndex = getRandomIncorrectIndex(indicesAExcluir);
            const btn = opciones[randomIndex];
            if (!btn.disabled && !indicesAExcluir.includes(randomIndex)) {
                btn.disabled = true;
                btn.textContent = `X: Opción Eliminada`;
                indicesAExcluir.push(randomIndex);
                count++;
            }
        }

        this.state.comodinesUsados['5050'] = true;
        this.dom.comodin5050Boton.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof GAME_CONFIG !== 'undefined' && typeof bancoDePreguntas !== 'undefined') {
        window.juegoMillonario = new JuegoMillonario(bancoDePreguntas, GAME_CONFIG);
    } else {
        console.error("Error al inicializar: Archivos de configuración o preguntas faltantes.");
    }
});