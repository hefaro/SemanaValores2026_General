/**
 * Banco ampliado de preguntas multidisciplinares de Cultura General para Grado 11°.
 * Asignaturas: Matemáticas, Estadística, Geografía, Historia, Constitución, Ambiental y Ciencias.
 * Compatible con MathJax y la estructura de El Millonario.
 */

const bancoDePreguntas = [
    // ==========================================
    // 1. MATEMÁTICAS (5 Preguntas)
    // ==========================================
    {
        pregunta: "MATEMÁTICAS: Dada la función $f(x) = \\frac{2x - 4}{x - 3}$, ¿cuál es el dominio de la función en el conjunto de los números reales?",
        opciones: [
            "$\\mathbb{R} \\setminus \\{3\\}$",
            "$\\mathbb{R} \\setminus \\{2\\}$",
            "$\\mathbb{R} \\setminus \\{-3\\}$",
            "Todos los números reales $\\mathbb{R}$"
        ],
        respuestaCorrecta: "$\\mathbb{R} \\setminus \\{3\\}$"
    },
    {
        pregunta: "MATEMÁTICAS: Si la derivada de una función de posición $s(t)$ representa la velocidad $v(t)$, ¿qué representa la segunda derivada $s''(t)$?",
        opciones: [
            "La aceleración instantánea",
            "La distancia total recorrida",
            "El tiempo empleado en el trayecto",
            "La velocidad media"
        ],
        respuestaCorrecta: "La aceleración instantánea"
    },
    {
        pregunta: "MATEMÁTICAS: ¿Cuál es el límite de la función $f(x) = \\frac{x^2 - 9}{x - 3}$ cuando $x$ tiende a $3$?",
        opciones: [
            "$6$",
            "$0$",
            "$3$",
            "No existe (indeterminación insalvable)"
        ],
        respuestaCorrecta: "$6$"
    },
    {
        pregunta: "MATEMÁTICAS: ¿Cuál es la solución para $x$ en la ecuación exponencial $2^{x+1} = 16$?",
        opciones: [
            "$x = 3$",
            "$x = 4$",
            "$x = 2$",
            "$x = 8$"
        ],
        respuestaCorrecta: "$x = 3$"
    },
    {
        pregunta: "MATEMÁTICAS: En un triángulo rectángulo, si el cateto opuesto a un ángulo $\\theta$ mide $3\\text{ cm}$ y la hipotenusa mide $5\\text{ cm}$, ¿cuál es el valor de $\\cos(\\theta)$?",
        opciones: [
            "$\\frac{4}{5}$",
            "$\\frac{3}{5}$",
            "$\\frac{3}{4}$",
            "$\\frac{5}{3}$"
        ],
        respuestaCorrecta: "$\\frac{4}{5}$"
    },

    // ==========================================
    // 2. ESTADÍSTICA (5 Preguntas)
    // ==========================================
    {
        pregunta: "ESTADÍSTICA: Un conjunto de datos de un examen tiene una media de 75 puntos y una desviación estándar de 0. ¿Qué se concluye sobre las notas?",
        opciones: [
            "Todos los estudiantes obtuvieron exactamente 75 puntos",
            "La mitad sacó 0 y la otra mitad sacó 100",
            "La nota máxima fue 75 y la mínima 0",
            "Los datos siguen una distribución normal perfecta"
        ],
        respuestaCorrecta: "Todos los estudiantes obtuvieron exactamente 75 puntos"
    },
    {
        pregunta: "ESTADÍSTICA: En una bolsa hay 4 bolas rojas y 6 azules. Si se extraen dos bolas consecutivamente sin reemplazo, ¿cuál es la probabilidad de que ambas sean rojas?",
        opciones: [
            "$\\frac{2}{15}$",
            "$\\frac{4}{25}$",
            "$\\frac{2}{5}$",
            "$\\frac{1}{6}$"
        ],
        respuestaCorrecta: "$\\frac{2}{15}$"
    },
    {
        pregunta: "ESTADÍSTICA: En un diagrama de dispersión entre 'Horas de estudio' (X) y 'Calificación' (Y), se observa una recta con pendiente positiva. Esto indica:",
        opciones: [
            "Correlación positiva: a más horas de estudio, mayor calificación",
            "Correlación negativa: a más horas de estudio, menor calificación",
            "Independencia total entre las dos variables",
            "Error de sesgo en el muestreo recopilado"
        ],
        respuestaCorrecta: "Correlación positiva: a más horas de estudio, mayor calificación"
    },
    {
        pregunta: "ESTADÍSTICA: En una distribución de salarios fuertemente sesgada a la derecha (con unos pocos sueldos millonarios), ¿qué medida representa mejor el centro?",
        opciones: [
            "La Mediana",
            "La Media aritmética",
            "El Rango intercuartílico",
            "La Varianza muestra"
        ],
        respuestaCorrecta: "La Mediana"
    },
    {
        pregunta: "ESTADÍSTICA: Si lanzamos un dado honesto de 6 caras al aire 3 veces consecutivas, ¿cuál es la probabilidad de obtener tres números '6' seguidos?",
        opciones: [
            "$\\frac{1}{216}$",
            "$\\frac{1}{18}$",
            "$\\frac{1}{36}$",
            "$\\frac{1}{6}$"
        ],
        respuestaCorrecta: "$\\frac{1}{216}$"
    },

    // ==========================================
    // 3. GEOGRAFÍA (5 Preguntas)
    // ==========================================
    {
        pregunta: "GEOGRAFÍA: ¿Qué caracteriza la teoría geopolítica del 'Centro-Periferia' en la economía mundial actual?",
        opciones: [
            "Concentración de alto valor tecnológico en el centro y exportación de materias primas en la periferia",
            "La distribución equitativa del desarrollo industrial entre todos los continentes",
            "El dominio comercial exclusivo de las naciones insulares sobre los continentes",
            "La migración masiva del sector financiero global hacia los países en desarrollo"
        ],
        respuestaCorrecta: "Concentración de alto valor tecnológico en el centro y exportación de materias primas en la periferia"
    },
    {
        pregunta: "GEOGRAFÍA: ¿Cómo influye la cordillera de los Andes en el clima y la biodiversidad de Colombia?",
        opciones: [
            "Genera una gran variedad de pisos térmicos y microclimas a lo largo del territorio",
            "Bloquea por completo el ingreso de vientos y lluvias desde los dos océanos",
            "Homogeneiza las temperaturas en todo el país a un solo clima cálido",
            "Impide la formación de cuencas hidrográficas de gran tamaño"
        ],
        respuestaCorrecta: "Genera una gran variedad de pisos térmicos y microclimas a lo largo del territorio"
    },
    {
        pregunta: "GEOGRAFÍA: ¿Qué fenómeno demográfico ocurre cuando la tasa de natalidad disminuye progresivamente y la esperanza de vida aumenta?",
        opciones: [
            "Envejecimiento de la pirámide poblacional",
            "Explosión demográfica juvenil",
            "Aumento de la tasa de mortalidad infantil",
            "Crecimiento exponencial de la población rural"
        ],
        respuestaCorrecta: "Envejecimiento de la pirámide poblacional"
    },
    {
        pregunta: "GEOGRAFÍA: ¿Cuál es la capa de la atmósfera donde ocurren la mayoría de los fenómenos meteorológicos (lluvias, vientos y nubes)?",
        opciones: [
            "Troposfera",
            "Estratosfera",
            "Termosfera",
            "Exosfera"
        ],
        respuestaCorrecta: "Troposfera"
    },
    {
        pregunta: "GEOGRAFÍA: El proceso de rápida expansión urbana no planificada sobre suelos agrícolas circundantes se conoce como:",
        opciones: [
            "Conurbación o conurbado urbano",
            "Desertificación climática",
            "Gentrificación rural",
            "Sucesión ecológica"
        ],
        respuestaCorrecta: "Conurbación o conurbado urbano"
    },

    // ==========================================
    // 4. HISTORIA (5 Preguntas)
    // ==========================================
    {
        pregunta: "HISTORIA: ¿Cuál fue uno de los principales detonantes que aceleró el periodo conocido como 'La Violencia' en Colombia a mediados del siglo XX?",
        opciones: [
            "El asesinato del líder liberal Jorge Eliécer Gaitán en 1948",
            "La promulgación de la Constitución Política de 1886",
            "La Separación de Panamá en 1903",
            "El inicio de la Guerra de los Mil Días"
        ],
        respuestaCorrecta: "El asesinato del líder liberal Jorge Eliécer Gaitán en 1948"
    },
    {
        pregunta: "HISTORIA: ¿Qué acontecimiento mundial marcó el inicio del periodo histórico conocido como la 'Guerra Fría'?",
        opciones: [
            "El fin de la Segunda Guerra Mundial y la división ideológica entre EE. UU. y la URSS",
            "La Revolución Francesa y la caída de la monarquía",
            "La caída del Muro de Berlín en 1989",
            "El estallido de la Primera Guerra Mundial en 1914"
        ],
        respuestaCorrecta: "El fin de la Segunda Guerra Mundial y la división ideológica entre EE. UU. y la URSS"
    },
    {
        pregunta: "HISTORIA: El pacto político en Colombia que alternó la presidencia entre los partidos Liberal y Conservador entre 1958 y 1974 se denominó:",
        opciones: [
            "Frente Nacional",
            "Patria Boba",
            "Regeneración",
            "Unión Patriótica"
        ],
        respuestaCorrecta: "Frente Nacional"
    },
    {
        pregunta: "HISTORIA: La Primera Revolución Industrial iniciada en Gran Bretaña en el siglo XVIII transformó la producción principalmente debido a:",
        opciones: [
            "La mecanización del trabajo mediante el uso de la máquina de vapor",
            "La invención del microprocesador y las telecomunicaciones",
            "El descubrimiento de las rutas comerciales hacia América",
            "La abolición total de los impuestos al comercio exterior"
        ],
        respuestaCorrecta: "La mecanización del trabajo mediante el uso de la máquina de vapor"
    },
    {
        pregunta: "HISTORIA: ¿Qué documento histórico de 1789 proclamó los principios de 'Libertad, Igualdad y Fraternidad' sentando las bases del Estado moderno?",
        opciones: [
            "La Declaración de los Derechos del Hombre y del Ciudadano",
            "La Carta Magna inglesa de 1215",
            "El Tratado de Versalles",
            "El Código de Hammurabi"
        ],
        respuestaCorrecta: "La Declaración de los Derechos del Hombre y del Ciudadano"
    },

    // ==========================================
    // 5. CONSTITUCIÓN Y CIUDADANÍA (5 Preguntas)
    // ==========================================
    {
        pregunta: "CONSTITUCIÓN: En Colombia, según la Carta de 1991, el mecanismo de participación ciudadana para aprobar o rechazar un texto normativo es:",
        opciones: [
            "El Referendo",
            "La Acción de Tutela",
            "El Cabildo Abierto",
            "La Iniciativa Popular"
        ],
        respuestaCorrecta: "El Referendo"
    },
    {
        pregunta: "CONSTITUCIÓN: Si un ciudadano considera que se está vulnerando un derecho fundamental de forma inminente, ¿qué mecanismo puede interponer?",
        opciones: [
            "Acción de Tutela",
            "Habeas Corpus",
            "Acción Popular",
            "Derecho de Petición de Información"
        ],
        respuestaCorrecta: "Acción de Tutela"
    },
    {
        pregunta: "CONSTITUCIÓN: ¿Cuál es la principal función de la Rama Legislativa del poder público en el Estado colombiano?",
        opciones: [
            "Elaborar las leyes y reformar la Constitución Política",
            "Administrar la justicia y sancionar los delitos Penales",
            "Dirigir las relaciones internacionales y el ejército",
            "Vigilar la gestión fiscal y presupuestal del gobierno"
        ],
        respuestaCorrecta: "Elaborar las leyes y reformar la Constitución Política"
    },
    {
        pregunta: "CONSTITUCIÓN: El derecho que protege a una persona contra detenciones arbitrarias y exige su presentación ante un juez en máximo 36 horas es:",
        opciones: [
            "Habeas Corpus",
            "Habeas Data",
            "Acción de Cumplimiento",
            "Voto Programático"
        ],
        respuestaCorrecta: "Habeas Corpus"
    },
    {
        pregunta: "CONSTITUCIÓN: ¿Qué entidad del Estado colombiano tiene como función principal ejercer el control fiscal sobre la gestión de los recursos públicos?",
        opciones: [
            "La Contraloría General de la República",
            "La Procuraduría General de la Nación",
            "La Defensoría del Pueblo",
            "La Fiscalía General de la Nación"
        ],
        respuestaCorrecta: "La Contraloría General de la República"
    },

    // ==========================================
    // 6. EDUCACIÓN AMBIENTAL (5 Preguntas)
    // ==========================================
    {
        pregunta: "AMBIENTAL: ¿Cuál de las siguientes dinámicas humanas contribuye directamente al aumento del efecto invernadero y al calentamiento global?",
        opciones: [
            "Deforestación masiva y quema de combustibles fósiles",
            "Reforestación con especies arbóreas nativas",
            "Implementación de plantas eólicas y fotovoltaicas",
            "Tratamiento adecuado de aguas residuales urbanas"
        ],
        respuestaCorrecta: "Deforestación masiva y quema de combustibles fósiles"
    },
    {
        pregunta: "AMBIENTAL: El fenómeno de 'eutrofización' en ríos o lagos es provocado principalmente por:",
        opciones: [
            "Exceso de nutrientes (nitrógeno y fósforo) provenientes de fertilizantes y aguas residuales",
            "Aumento en la concentración de salinidad en el agua continental",
            "La pesca indiscriminada de peces carnívoros nativos",
            "La disminución de radiación solar en los meses de invierno"
        ],
        respuestaCorrecta: "Exceso de nutrientes (nitrógeno y fósforo) provenientes de fertilizantes y aguas residuales"
    },
    {
        pregunta: "AMBIENTAL: ¿Qué mide la 'Huella Ecológica' de una población humana?",
        opciones: [
            "La superficie de tierra y agua requerida para producir los recursos que consume y absorber sus residuos",
            "El número total de especies endémicas amenazadas en una reserva",
            "El volumen total de agua de lluvia recolectado en una cuenca",
            "La cantidad de árboles plantados en sectores urbanos por año"
        ],
        respuestaCorrecta: "La superficie de tierra y agua requerida para producir los recursos que consume y absorber sus residuos"
    },
    {
        pregunta: "AMBIENTAL: La acumulación progresiva de contaminantes tóxicos (como el mercurio) en los tejidos de organismos a lo largo de la red trófica se denomina:",
        opciones: [
            "Bioacumulación o biomagnificación",
            "Biodegradación",
            "Sucesión ecológica primaria",
            "Fotosíntesis sintética"
        ],
        respuestaCorrecta: "Bioacumulación o biomagnificación"
    },
    {
        pregunta: "AMBIENTAL: El objetivo central del principio de 'Desarrollo Sostenible' es:",
        opciones: [
            "Satisfacer las necesidades actuales sin comprometer los recursos de las futuras generaciones",
            "Detener por completo toda la actividad industrial mundial",
            "Priorizar el crecimiento económico inmediato sobre la conservación",
            "Aumentar el consumo de carbón con filtros de emisiones"
        ],
        respuestaCorrecta: "Satisfacer las necesidades actuales sin comprometer los recursos de las futuras generaciones"
    },

    // ==========================================
    // 7. CIENCIAS NATURALES (FÍSICA Y QUÍMICA) (5 Preguntas)
    // ==========================================
    {
        pregunta: "CIENCIAS: Durante la fotosíntesis, las plantas transforman la energía solar en energía química al convertir $CO_2$ y agua en:",
        opciones: [
            "Glucosa y oxígeno ($O_2$)",
            "Proteínas y nitrógeno ($N_2$)",
            "Metano ($CH_4$) y dióxido de carbono",
            "Ácido láctico y ATP únicamente"
        ],
        respuestaCorrecta: "Glucosa y oxígeno ($O_2$)"
    },
    {
        pregunta: "CIENCIAS: Según la Ley de Gravitación Universal de Newton, si la distancia entre dos cuerpos se duplica, la fuerza de atracción gravitacional entre ellos:",
        opciones: [
            "Se reduce a la cuarta parte",
            "Se reduce a la mitad",
            "Se duplica exactamente",
            "Permanecerá totalmente constante"
        ],
        respuestaCorrecta: "Se reduce a la cuarta parte"
    },
    {
        pregunta: "CIENCIAS: ¿Qué sucede con el pH de una solución acuosa neutra ($pH = 7$) si se le agrega una sustancia alcalina o básica?",
        opciones: [
            "El pH aumenta por encima de 7",
            "El pH disminuye por debajo de 7",
            "El pH se mantiene fijo en 7",
            "El pH cae inmediatamente a 0"
        ],
        respuestaCorrecta: "El pH aumenta por encima de 7"
    },
    {
        pregunta: "CIENCIAS: En la tabla periódica, los elementos del mismo grupo o columna se caracterizan por presentar:",
        opciones: [
            "El mismo número de electrones en su último nivel de energía (valencia)",
            "La misma cantidad total de protones dentro del núcleo",
            "El mismo número de niveles o capas de energía ocupados",
            "Masa atómica idéntica"
        ],
        respuestaCorrecta: "El mismo número de electrones en su último nivel de energía (valencia)"
    },
    {
        pregunta: "CIENCIAS: El cambio de dirección que experimenta un rayo de luz al pasar del aire al agua debido a la diferencia de densidad se llama:",
        opciones: [
            "Refracción",
            "Reflexión",
            "Difracción",
            "Polarización"
        ],
        respuestaCorrecta: "Refracción"
    }
];