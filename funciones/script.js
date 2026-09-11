let board, grafico;
let jugadorSeleccionado = null;
let grupoSeleccionado = null;
let apiUrlActual = null;

// Inicializar selección (Basado en tu com5A)
const groupSelect = document.getElementById('group-select');
const playerSelect = document.getElementById('player-select');
const btnIniciar = document.getElementById('iniciar-analisis-btn');

groupSelect.addEventListener('change', async (e) => {
    grupoSeleccionado = e.target.value;
    if (grupoSeleccionado) {
        const [nombres, url] = await GoogleSheet.obtenerNombres(grupoSeleccionado);
        apiUrlActual = url;
        playerSelect.innerHTML = '<option value="">-- Selecciona tu nombre --</option>';
        nombres.forEach(n => {
            let opt = document.createElement('option');
            opt.value = n; opt.textContent = n;
            playerSelect.appendChild(opt);
        });
        playerSelect.disabled = false;
    }
});

playerSelect.addEventListener('change', (e) => {
    jugadorSeleccionado = e.target.value;
    btnIniciar.disabled = !jugadorSeleccionado;
});

btnIniciar.addEventListener('click', () => {
    document.getElementById('seleccion-jugador-contenedor').style.display = 'none';
    document.getElementById('programa-contenedor').style.display = 'block';
    document.getElementById('nombre-estudiante-display').textContent = jugadorSeleccionado;
    initBoard();
});

function initBoard() {
    board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-10, 10, 10, -10], axis: true});
}

async function graficarFuncion() {
    const fStr = document.getElementById('input-funcion').value;
    if (grafico) board.removeObject(grafico);
    
    grafico = board.create('functiongraph', [x => eval(fStr.replace(/x/g, `(${x})`).replace(/\^/g, '**')), -10, 10]);
    
    // Simulación de "Puntaje" por éxito en la gráfica
    enviarNota(5.0); // Envía un 5.0 al profesor al graficar con éxito
}

async function enviarNota(nota) {
    const datos = {
        nombre: jugadorSeleccionado,
        grupo: grupoSeleccionado,
        puntaje: nota,
        juego: "Analizador_Funciones"
    };
    const r = await GoogleSheet.guardarResultado(apiUrlActual, datos);
    console.log(r.message);
}