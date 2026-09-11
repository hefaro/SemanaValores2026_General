/**
 * Banco de preguntas: Estadística y Cultura General
 * Aplica gráficos de tendencia, dispersión, regresión y distribuciones.
 * Compatible con Chart.js e index.html
 */
const BANCO_PREGUNTAS = [
    {
        titulo: "Tendencia Global: La gráfica muestra el crecimiento de la población mundial (en miles de millones). ¿Qué tipo de tendencia describe el período 1950-2020?",
        opciones: ["Decreciente lineal", "Crecimiento constante positivo", "Tendencia exponencial / rápida", "Comportamiento oscilatorio"],
        correcta: "Tendencia exponencial / rápida",
        tipoGrafico: 'line',
        datos: [[1950, 2.5], [1970, 3.7], [1990, 5.3], [2010, 6.9], [2020, 7.8]],
        ejeX: "Año", ejeY: "Población (Miles de mill.)"
    },
    {
        titulo: "Regresión Lineal: Se analiza la relación entre horas de estudio (X) y calificación en exámenes (Y). ¿Qué indica la recta de ajuste?",
        opciones: ["A mayor estudio, menor nota", "Correlación positiva: a más horas, mayor nota", "No existe relación entre variables", "La nota es independiente del tiempo"],
        correcta: "Correlación positiva: a más horas, mayor nota",
        tipoGrafico: 'line',
        datos: [[1, 2.0], [2, 2.8], [3, 3.5], [4, 4.2], [5, 4.8]],
        ejeX: "Horas de Estudio", ejeY: "Calificación (0-5)"
    },
    {
        titulo: "Dispersión Geográfica: Altura sobre el nivel del mar vs. Temperatura promedio (°C). ¿Cómo es la correlación observada?",
        opciones: ["Positiva fuerte", "Negativa: a mayor altitud, menor temperatura", "Nula o aleatoria", "Constante"],
        correcta: "Negativa: a mayor altitud, menor temperatura",
        tipoGrafico: 'line',
        datos: [[0, 30], [1000, 24], [2000, 18], [3000, 12], [4000, 6]],
        ejeX: "Altitud (m.s.n.m.)", ejeY: "Temperatura (°C)"
    },
    {
        titulo: "Estadística Poblacional: Según la pirámide / distribución por edades de un país desarrollado, ¿qué grupo etario predomina?",
        opciones: ["Infantes (0-14 años)", "Adultos jóvenes y mayores (30-60 años)", "Ancianos mayores de 90 años", "Todos los grupos son idénticos"],
        correcta: "Adultos jóvenes y mayores (30-60 años)",
        tipoGrafico: 'bar',
        datos: [["0-14", 15], ["15-29", 18], ["30-44", 24], ["45-59", 23], ["60+", 20]],
        ejeX: "Rango de Edad", ejeY: "% de Población"
    },
    {
        titulo: "Serie de Tiempo: Producción de café en Colombia (millones de sacos). ¿Entre qué años se registró la mayor caída?",
        opciones: ["2018 - 2019", "2019 - 2020", "2020 - 2021", "2021 - 2022"],
        correcta: "2020 - 2021",
        tipoGrafico: 'line',
        datos: [[2018, 13.5], [2019, 14.8], [2020, 13.9], [2021, 12.6], [2022, 11.1]],
        ejeX: "Año", ejeY: "Sacos (Millones)"
    },
    {
        titulo: "Salud Pública: Tasa de vacunación (%) vs. Casos reportados de una enfermedad. ¿Qué patrón muestra la curva?",
        opciones: ["Correlación inversa (a mayor vacunación, menos casos)", "Correlación directa", "Sin relación aparente", "Crecimiento exponencial de contagios"],
        correcta: "Correlación inversa (a mayor vacunación, menos casos)",
        tipoGrafico: 'areaspline',
        datos: [[20, 850], [40, 600], [60, 250], [80, 80], [95, 10]],
        ejeX: "% Cobertura Vacunación", ejeY: "Casos por 100k hab."
    },
    {
        titulo: "Medidas de Tendencia: Distribución del ingreso mensual en una muestra de trabajadores. La forma asimétrica indica que:",
        opciones: ["La mediana es mayor que la media", "La mayoría de datos se concentran en ingresos bajos con pocos ingresos muy altos", "Todos ganan lo mismo", "Es una distribución normal perfecta"],
        correcta: "La mayoría de datos se concentran en ingresos bajos con pocos ingresos muy altos",
        tipoGrafico: 'bar',
        datos: [["1 SMMLV", 50], ["2 SMMLV", 25], ["3 SMMLV", 12], ["4 SMMLV", 8], ["5+ SMMLV", 5]],
        ejeX: "Rango Salarial", ejeY: "N° de Personas (%)"
    },
    {
        titulo: "Tecnología: Usuarios activos globales de Internet (en miles de millones). ¿Qué tendencia se observa entre 2010 y 2024?",
        opciones: ["Decreciente", "Estable / Estancada", "Crecimiento continuo positivo", "Caída drástica"],
        correcta: "Crecimiento continuo positivo",
        tipoGrafico: 'line',
        datos: [[2010, 2.0], [2014, 2.9], [2018, 3.9], [2022, 5.0], [2024, 5.4]],
        ejeX: "Año", ejeY: "Usuarios (Miles de mill.)"
    },
    {
        titulo: "Análisis de Dispersión: Edad del vehículo vs. Precio de reventa (en millones). La recta de regresión sugiere que el vehículo:",
        opciones: ["Aumenta de valor con el tiempo", "Se deprecia (pierde valor) linealmente con los años", "Conserva un precio fijo", "Vale el doble cada 2 años"],
        correcta: "Se deprecia (pierde valor) linealmente con los años",
        tipoGrafico: 'line',
        datos: [[0, 60], [2, 48], [4, 38], [6, 28], [8, 18]],
        ejeX: "Años de Uso", ejeY: "Valor (Millones $)"
    },
    {
        titulo: "Medio Ambiente: Emisiones globales de CO2 (Gigatóneladas). ¿Cuál fue el valor aproximado alcanzado en el último punto medido?",
        opciones: ["25 Gt", "30 Gt", "37 Gt", "50 Gt"],
        correcta: "37 Gt",
        tipoGrafico: 'areaspline',
        datos: [[1990, 22.7], [2000, 25.2], [2010, 33.1], [2020, 34.8], [2023, 37.5]],
        ejeX: "Año", ejeY: "Emisiones CO2 (Gt)"
    }
];