// Banco de preguntas con expresiones en LaTeX para el Desafío Matemático Galáctico
const questionBank = [
    // --- CIENCIAS NATURALES Y FÍSICA ---
    { 
        question: "Un automóvil viaja en línea recta y su posición en función del tiempo está dada por $x(t) = 3t^2 - 12t + 5$. ¿En qué instante $t$ (en segundos) el automóvil se detiene momentáneamente (velocidad cero)?", 
        options: ["$t = 1$", "$t = 2$", "$t = 3$", "$t = 4$"], 
        answer: "$t = 2$" 
    },
    { 
        question: "Si se duplica la distancia absoluta entre dos cargas eléctricas puntuales, la fuerza electrostática entre ellas según la ley de Coulomb se:", 
        options: ["Reduce a la mitad", "Se reduce a la cuarta parte", "Se duplica", "Se cuatriplica"], 
        answer: "Se reduce a la cuarta parte" 
    },
    { 
        question: "En una reacción química en equilibrio, si se aumenta la presión total de un sistema gaseoso, el equilibrio se desplazará hacia:", 
        options: ["El lado con mayor número de moles de gas", "El lado con menor número de moles de gas", "No sufre alteración", "Se neutraliza la temperatura"], 
        answer: "El lado con menor número de moles de gas" 
    },
    { 
        question: "Un proyectil es lanzado con un ángulo de elevación de $45^\\circ$ respecto al suelo horizontal. Despreciando la resistencia del aire, ¿qué relación hay entre el alcance horizontal máximo y la altura máxima alcanzada?", 
        options: ["La altura máxima es igual al alcance", "El alcance es cuatro veces la altura máxima", "El alcance es el doble de la altura máxima", "La altura máxima es el doble del alcance"], 
        answer: "El alcance es cuatro veces la altura máxima" 
    },
    { 
        question: "El pH de una disolución acuosa es $3$. Si se diluye esta disolución añadiendo agua destilada hasta que su concentración de iones hidrógeno disminuye a la décima parte, su nuevo pH será:", 
        options: ["$2$", "$3.1$", "$4$", "$30$"], 
        answer: "$4$" 
    },
    { 
        question: "¿Cuál es la aceleración centrípeta de un objeto que describe una trayectoria circular de radio $2\\text{ m}$ con una rapidez constante de $4\\text{ m/s}$?", 
        options: ["$2\\text{ m/s}^2$", "$4\\text{ m/s}^2$", "$8\\text{ m/s}^2$", "$16\\text{ m/s}^2$"], 
        answer: "$8\\text{ m/s}^2$" 
    },
    { 
        question: "Un bloque de hielo flota en un vaso lleno de agua hasta el borde. Al derretirse completamente el hielo, el nivel del agua en el vaso:", 
        options: ["Aumenta", "Disminuye", "Permanece exactamente igual", "Desborda inmediatamente antes de terminar de fundirse"], 
        answer: "Permanece exactamente igual" 
    },
    { 
        question: "En un circuito en serie compuesto por tres resistencias diferentes conectadas a una fuente de voltaje:", 
        options: ["La corriente es diferente en cada resistencia", "La caída de voltaje es mayor en la resistencia de menor valor", "La resistencia total es menor que la menor de las resistencias individuales", "La resistencia equivalente es la suma aritmética de las resistencias"], 
        answer: "La resistencia equivalente es la suma aritmética de las resistencias" 
    },
    { 
        question: "Si la configuración electrónica externa de un átomo neutro termina en $p^5$, dicho elemento pertenece con mayor probabilidad al grupo de los:", 
        options: ["Metales alcalinos", "Gases nobles", "Halógenos", "Metales de transición"], 
        answer: "Halógenos" 
    },
    { 
        question: "Una onda mecánica viaja por una cuerda tensa. Si se duplica su frecuencia manteniendo constante la tensión y la densidad lineal de la cuerda, su longitud de onda:", 
        options: ["Se duplica", "Se reduce a la mitad", "Se cuadruplica", "Permanece constante"], 
        answer: "Se reduce a la mitad" 
    },

    // --- MATEMÁTICAS Y RAZONAMIENTO ANALÍTICO ---
    { 
        question: "Si la función de costo total de fabricar $x$ unidades de un producto es $C(x) = 500 + 20x + 0.1x^2$, ¿cuál es el costo marginal cuando $x = 50$?", 
        options: ["$20$", "$30$", "$50$", "$100$"], 
        answer: "$30$" 
    },
    { 
        question: "¿Cuál es el valor del límite $\\lim_{x \\to 0} \\frac{\\operatorname{sen}(3x)}{x}$?", 
        options: ["$0$", "$1$", "$3$", "No existe"], 
        answer: "$3$" 
    },
    { 
        question: "Si lanzamos dos dados legales de 6 caras simultáneamente, ¿cuál es la probabilidad de que la suma de sus caras sea igual a $8$?", 
        options: ["$\\frac{5}{36}$", "$\\frac{1}{9}$", "$\\frac{1}{6}$", "$\\frac{7}{36}$"], 
        answer: "$\\frac{5}{36}$" 
    },
    { 
        question: "¿Cuántas diagonales se pueden trazar en total en un polígono regular de $10$ lados (deecágono)?", 
        options: ["$35$", "$45$", "$90$", "$20$"], 
        answer: "$35$" 
    },
    { 
        question: "Si el logaritmo en base $2$ de un número $x$ es igual a $5$ (es decir, $\\log_2(x) = 5$), ¿cuánto vale $\\log_2(4x)$?", 
        options: ["$7$", "$10$", "$20$", "$25$"], 
        answer: "$7$" 
    },
    { 
        question: "Dada la función cuadrática $f(x) = -x^2 + 6x - 8$, las coordenadas del vértice de su parábola son:", 
        options: ["$(3, 1)$", "$(-3, -1)$", "$(3, -1)$", "$(-3, 1)$"], 
        answer: "$(3, 1)$" 
    },
    { 
        question: "En una progresión aritmética, el primer término es $3$ y la diferencia común es $4$. ¿Cuál es el valor del término número $20$?", 
        options: ["$79$", "$83$", "$81$", "$76$"], 
        answer: "$79$" 
    },
    { 
        question: "Si la suma de los primeros $n$ términos de una progresión geométrica de razón $r = 2$ es $381$ y el primer término es $3$, ¿cuántos términos ($n$) tiene dicha progresión?", 
        options: ["$5$", "$6$", "$7$", "$8$"], 
        answer: "$7$" 
    },
    { 
        question: "¿Cuál es la derivada de la función $f(x) = e^{2x} \\cdot \\ln(x)$ evaluada aplicando la regla del producto?", 
        options: ["$2e^{2x}\\ln(x) + \\frac{e^{2x}}{x}$", "$e^{2x}\\ln(x) + \\frac{1}{x}$", "$2e^{2x}\\ln(x)$", "$\\frac{2e^{2x}}{x}$"], 
        answer: "$2e^{2x}\\ln(x) + \\frac{e^{2x}}{x}$" 
    },
    { 
        question: "Halla el valor de la integral indefinida $\\int 6x^2 \\, dx$.", 
        options: ["$12x + C$", "$2x^3 + C$", "$3x^3 + C$", "$6x^3 + C$"], 
        answer: "$2x^3 + C$" 
    },

    // --- LÓGICA, ESTADÍSTICA Y PROBABILIDAD AVANZADA ---
    { 
        question: "En un conjunto de datos poblacionales, la media es $50$ y la desviación estándar es $0$. Esto implica necesariamente que:", 
        options: ["Todos los datos son iguales a $50$", "Hay un error en el cálculo", "La distribución es simétrica", "La mediana es cero"], 
        answer: "Todos los datos son iguales a $50$" 
    },
    { 
        question: "Si se selecciona al azar un comité de $3$ personas a partir de un grupo de $6$ hombres y $4$ mujeres, ¿cuál es la probabilidad de que el comité esté conformado exactamente por $2$ hombres y $1$ mujer?", 
        options: ["$\\frac{1}{2}$", "$\\frac{1}{3}$", "$\\frac{3}{10}$", "$\\frac{1}{5}$"], 
        answer: "$\\frac{1}{2}$" 
    },
    { 
        question: "Si la proposición compuesta $(P \\to Q)$ es falsa en lógica formal, entonces los valores de verdad de las proposiciones simples $P$ y $Q$ son, respectivamente:", 
        options: ["Verdadero y Verdadero", "Verdadero y Falso", "Falso y Verdadero", "Falso y Falso"], 
        answer: "Verdadero y Falso" 
    },
    { 
        question: "En una encuesta a $100$ estudiantes, $60$ leen matemáticas, $40$ leen física y $20$ leen ambas materias. ¿Cuántos estudiantes no leen ninguna de las dos materias?", 
        options: ["$0$", "$10$", "$20$", "$30$"], 
        answer: "$20$" 
    },
    { 
        question: "¿De cuántas formas diferentes se pueden ordenar las letras de la palabra 'CASA'?", 
        options: ["$24$", "$12$", "$6$", "$4$"], 
        answer: "$12$" 
    },
    { 
        question: "Si la media aritmética de cinco números es $20$ y se añade un sexto número igual a $32$, ¿cuál es la nueva media aritmética del conjunto de seis números?", 
        options: ["$21$", "$22$", "$24$", "$25$"], 
        answer: "$22$" 
    },
    { 
        question: "Si la varianza de un conjunto de datos es $16$, ¿cuánto vale su desviación estándar y su coeficiente de variación si la media es $20$?", 
        options: ["Desviación $4$; Coeficiente $20\\%$", "Desviación $4$; Coeficiente $40\\%$", "Desviación $8$; Coeficiente $10\\%$", "Desviación $16$; Coeficiente $80\\%$"], 
        answer: "Desviación $4$; Coeficiente $20\\%$" 
    },
    { 
        question: "Al negar la proposición 'Todos los estudiantes aprobaron el examen de cálculo', se obtiene correctamente:", 
        options: ["Ningún estudiante aprobó el examen", "Al menos un estudiante no aprobó el examen", "Todos los estudiantes reprobaron el examen", "Algunos estudiantes aprobaron el examen"], 
        answer: "Al menos un estudiante no aprobó el examen" 
    },
    { 
        question: "En una urna hay $3$ bolas rojas y $2$ bolas negras. Si se extraen dos bolas consecutivamente sin reemplazo, ¿cuál es la probabilidad de que ambas sean de color rojo?", 
        options: ["$\\frac{9}{25}$", "$\\frac{3}{10}$", "$\\frac{6}{25}$", "$\\frac{2}{5}$"], 
        answer: "$\\frac{3}{10}$" 
    },
    { 
        question: "Si el determinante de una matriz cuadrada $2 \\times 2$ es igual a $5$, ¿cuánto vale el determinante de la matriz multiplicada por un escalar $3$ ($|3A|$)?", 
        options: ["$15$", "$25$", "$45$", "$135$"], 
        answer: "$45$" 
    },

    // --- GEOMETRÍA ANALÍTICA Y TRIGONOMETRÍA ---
    { 
        question: "¿Cuál es la ecuación general de la circunferencia cuyo centro está en el origen $(0,0)$ y su radio mide $r = 5$?", 
        options: ["$x^2 + y^2 = 5$", "$x^2 + y^2 = 25$", "$(x-5)^2 + (y-5)^2 = 25$", "$x^2 - y^2 = 25$"], 
        answer: "$x^2 + y^2 = 25$" 
    },
    { 
        question: "La excentricidad de una circunferencia en geometría analítica es siempre igual a:", 
        options: ["$0$", "$1$", "Menor que $1$", "Mayor que $1$"], 
        answer: "$0$" 
    },
    { 
        question: "¿Cuál es la pendiente de cualquier recta que sea perpendicular a la recta cuya ecuación es $2x - 4y + 7 = 0$?", 
        options: ["$2$", "$-2$", "$1/2$", "$-1/2$"], 
        answer: "$-2$" 
    },
    { 
        question: "En un triángulo rectángulo, los catetos miden $6\\text{ cm}$ y $8\\text{ cm}$. ¿Cuál es el valor del seno del ángulo menor opuesto al cateto de $6\\text{ cm}$?", 
        options: ["$3/5$", "$4/5$", "$3/4$", "$4/3$"], 
        answer: "$3/5$" 
    },
    { 
        question: "¿Cuál es la longitud del semieje mayor de una elipse cuya ecuación canónica es $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$?", 
        options: ["$3$", "$4$", "$5$", "$25$"], 
        answer: "$5$" 
    },
    { 
        question: "La distancia geométrica entre los puntos coordenados $P_1(1, 2)$ y $P_2(4, 6)$ en el plano cartesiano es:", 
        options: ["$3$", "$4$", "$5$", "$7$"], 
        answer: "$5$" 
    },
    { 
        question: "Simplifica la identidad trigonométrica fundamental: $\\operatorname{sen}^2(\\theta) + \\cos^2(\\theta)$:", 
        options: ["$0$", "$1$", "$\\tan(\\theta)$", "$2$"], 
        answer: "$1$" 
    },
    { 
        question: "¿Cuál es el periodo fundamental de la función trigonométrica $f(x) = 3 \\operatorname{sen}(2x)$?", 
        options: ["$\\pi$", "$2\\pi$", "$4\\pi$", "$\\pi/2$"], 
        answer: "$\\pi$" 
    },
    { 
        question: "Las coordenadas del foco de la parábola dada por la ecuación $y^2 = 12x$ son:", 
        options: ["$(3, 0)$", "$(-3, 0)$", "$(0, 3)$", "$(6, 0)$"], 
        answer: "$(3, 0)$" 
    },
    { 
        question: "Si el ángulo de elevación con el que se observa la cúspide de un poste desde el suelo a una distancia de $10\\text{ m}$ es de $45^\\circ$, ¿cuál es la altura del poste?", 
        options: ["$5\\text{ m}$", "$10\\text{ m}$", "$10\\sqrt{2}\\text{ m}$", "$20\\text{ m}$"], 
        answer: "$10\\text{ m}$" 
    },

    // --- PENSAMIENTO CRÍTICO, ECONOMÍA BÁSICA Y LECTURA MATEMÁTICA ---
    { 
        question: "Si el precio de un artículo aumenta un $20\\%$ y luego disminuye un $20\\%$ sobre el nuevo precio, en comparación con el precio original, el artículo:", 
        options: ["Quedó exactamente al mismo precio", "Costará un $4\\%$ más caro", "Costará un $4\\%$ más barato", "Costará un $20\\%$ más barato"], 
        answer: "Costará un $4\\%$ más barato" 
    },
    { 
        question: "Tres obreros construyen un muro pequeño en $6$ horas. ¿Cuántas horas tardarían seis obreros trabajando al mismo ritmo constante?", 
        options: ["$12$ horas", "$3$ horas", "$4$ horas", "$2$ horas"], 
        answer: "$3$ horas" 
    },
    { 
        question: "Un grifo llena un estanque en $4$ horas y un desagüe lo vacía por completo en $6$ horas. Si ambos se abren al mismo tiempo con el estanque vacío, ¿en cuánto tiempo se llenará el estanque?", 
        options: ["$10$ horas", "$12$ horas", "$5$ horas", "$2$ horas"], 
        answer: "$12$ horas" 
    },
    { 
        question: "Si un capital de $\$1.000$ dólares se inviste a una tasa de interés compuesto anual del $10\\%$, ¿cuál será aproximadamente el capital total al cabo de $2$ años?", 
        options: ["$\$1.200$", "$\$1.210$", "$\$1.100$", "$\$1.220$"], 
        answer: "$\$1.210$" 
    },
    { 
        question: "En un mapa a escala $1:50.000$, la distancia medida entre dos ciudades es de $4\\text{ cm}$. ¿Cuál es la distancia real en kilómetros entre ambas ciudades?", 
        options: ["$2\\text{ km}$", "$4\\text{ km}$", "$20\\text{ km}$", "$200\\text{ km}$"], 
        answer: "$2\\text{ km}$" 
    },
    { 
        question: "Si la razón geométrica entre dos números es $\\frac{3}{5}$ y su suma es $64$, ¿cuál es el valor del número mayor?", 
        options: ["$24$", "$40$", "$48$", "$32$"], 
        answer: "$40$" 
    },
    { 
        question: "Un comerciante mezcla $30\\text{ kg}$ de café de $\$4$ dólares el kilo con $20\\text{ kg}$ de café de $\$6$ dólares el kilo. ¿Cuál es el precio medio por kilogramo de la mezcla resultante?", 
        options: ["$\$4.50$", "$\$4.80$", "$\$5.00$", "$\$5.20$"], 
        answer: "$\$4.80$" 
    },
    { 
        question: "Si una máquina produce $100$ piezas defectuosas de cada $5000$ fabricadas, ¿qué porcentaje de piezas salen defectuosas?", 
        options: ["$0.2\\%$", "$2\\%$", "$0.5\\%$", "$5\\%$"], 
        answer: "$2\\%$" 
    },
    { 
        question: "Si un reloj marca las $3:15$, ¿cuál es el ángulo geométrico exacto formado entre la manecilla de las horas y el minutero?", 
        options: ["$0^\\circ$", "$7.5^\\circ$", "$22.5^\\circ$", "$30^\\circ$"], 
        answer: "$7.5^\\circ$" 
    },
    { 
        question: "Si se incrementa el radio de un cilindro circular recto en un $100\\%$ manteniendo su altura constante, el volumen del cilindro se multiplica por:", 
        options: ["$2$", "$3$", "$4$", "$8$"], 
        answer: "$4$ (Cuatro veces)" 
    }
];