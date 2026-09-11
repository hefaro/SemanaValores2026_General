// Banco de preguntas adaptado: Cultura general de bachillerato, conceptos fundamentales, análisis y razonamiento
const questionBank = [
    // --- CIENCIAS NATURALES Y MEDIO AMBIENTE ---
    { 
        question: "Las plantas se ven de color verde principalmente debido a un pigmento llamado clorofila. ¿Cuál es la función principal de este pigmento en la naturaleza?", 
        options: ["Absorber la luz solar para realizar la fotosíntesis", "Repeler a los insectos herbívoros", "Darle buen olor a las hojas", "Proteger a la planta del frío extremo"], 
        answer: "Absorber la luz solar para realizar la fotosíntesis" 
    },
    { 
        question: "Si un objeto flota en un recipiente con agua, ¿qué relación existe entre la densidad de ese objeto y la densidad del agua?", 
        options: ["La densidad del objeto es mayor que la del agua", "La densidad del objeto es menor que la del agua", "Tienen exactamente la misma densidad", "El objeto no tiene densidad"], 
        answer: "La densidad del objeto es menor que la del agua" 
    },
    { 
        question: "¿Cuál es el fenómeno físico responsable de que en la Tierra experimentemos los ciclos de los días y las noches?", 
        options: ["La rotación de la Tierra sobre su propio eje", "La traslación de la Tierra alrededor del Sol", "La inclinación del eje terrestre", "Las fases de la Luna"], 
        answer: "La rotación de la Tierra sobre su propio eje" 
    },
    { 
        question: "En los seres humanos, ¿cuál es la función principal del sistema respiratorio?", 
        options: ["Bombear la sangre por todo el cuerpo", "Transformar los alimentos en energía química", "Intercambiar gases: absorber oxígeno y expulsar dióxido de carbono", "Filtrar los desechos líquidos de la sangre"], 
        answer: "Intercambiar gases: absorber oxígeno y expulsar dióxido de carbono" 
    },
    { 
        question: "¿Cómo se le llama al estado de la materia que cuenta con un volumen definido pero adopta la forma del recipiente que lo contiene (como el agua o los jugos)?", 
        options: ["Estado sólido", "Estado líquido", "Estado gaseoso", "Estado plasmático"], 
        answer: "Estado líquido" 
    },
    { 
        question: "¿Por qué se consideran a la energía solar y a la energía eólica como fuentes de energía renovables?", 
        options: ["Porque se agotan muy rápido al usarlas", "Porque provienen de recursos naturales que se regeneran constantemente", "Porque solo funcionan durante la noche", "Porque contaminan más que el carbón"], 
        answer: "Porque provienen de recursos naturales que se regeneran constantemente" 
    },
    { 
        question: "Cuando un ecosistema sufre una alteración leve y es capaz de recuperarse y volver a su equilibrio natural, se dice que el ecosistema posee:", 
        options: ["Fragilidad extrema", "Resiliencia ambiental", "Incapacidad de cambio", "Agotamiento total"], 
        answer: "Resiliencia ambiental" 
    },
    { 
        question: "¿Cuál de las siguientes opciones describe mejor qué es una célula en los seres vivos?", 
        options: ["Un órgano encargado de la digestión", "La unidad estructural y funcional básica de todo ser vivo", "Una molécula de agua compleja", "Un tejido que forma los huesos"], 
        answer: "La unidad estructural y funcional básica de todo ser vivo" 
    },

    // --- MATEMÁTICAS PRÁCTICAS Y RAZONAMIENTO LÓGICO ---
    { 
        question: "Si un triángulo tiene sus tres ángulos internos iguales (de $60^\\circ$ cada uno), ¿cómo se le clasifica por la medida de sus ángulos y lados?", 
        options: ["Triángulo rectángulo y escaleno", "Triángulo equilátero y equiángulo", "Triángulo obtusángulo y isósceles", "Triángulo escaleno y rectángulo"], 
        answer: "Triángulo equilátero y equiángulo" 
    },
    { 
        question: "El concepto matemático de 'porcentaje' siempre se calcula tomando como referencia base un total de:", 
        options: ["10", "50", "100", "1000"], 
        answer: "100" 
    },
    { 
        question: "Si duplicas la longitud de los lados de un cuadrado, ¿qué le ocurre de manera directa al perímetro de dicha figura?", 
        options: ["Se reduce a la mitad", "Se duplica", "Se cuatriplica", "Permanece exactamente igual"], 
        answer: "Se duplica" 
    },
    { 
        question: "En un conjunto de datos estadísticos ordenados de menor a mayor, ¿qué representa la 'mediana'?", 
        options: ["El valor que más se repite", "El valor que se encuentra exactamente en el centro", "El promedio de todos los datos sumados", "La diferencia entre el valor mayor y el menor"], 
        answer: "El valor que se encuentra exactamente en el centro" 
    },
    { 
        question: "Si dos líneas rectas dibujadas en un plano nunca se cruzan por más que se prolonguen y siempre mantienen la misma distancia entre ellas, se llaman:", 
        options: ["Líneas perpendiculares", "Líneas paralelas", "Líneas secantes", "Líneas diagonales"], 
        answer: "Líneas paralelas" 
    },
    { 
        question: "Si un artículo cuesta $50.000 pesos y tiene un descuento del $20\\%$, ¿cuánto dinero se le descuenta al precio original?", 
        options: ["$5.000$ pesos", "$10.000$ pesos", "$20.000$ pesos", "$25.000$ pesos"], 
        answer: "$10.000$ pesos" 
    },
    { 
        question: "¿Qué representa una razón o proporción en la vida cotidiana al comparar dos cantidades?", 
        options: ["Una operación prohibida por la ley", "Una comparación numérica de cuántas veces cabe una cantidad en otra", "El área total de un terreno plano", "Un error de medición"], 
        answer: "Una comparación numérica de cuántas veces cabe una cantidad en otra" 
    },
    { 
        question: "Si lanzas una moneda legal al aire, ¿cuál es el análisis lógico de la probabilidad de obtener 'cara' en ese único lanzamiento?", 
        options: ["Es imposible", "Es seguro al 100%", "Es una probabilidad de 1 entre 2 (o 50%)", "Depende de la fuerza del lanzamiento"], 
        answer: "Es una probabilidad de 1 entre 2 (o 50%)" 
    },

    // --- CIENCIAS SOCIALES, HISTORIA Y GEOGRAFÍA ---
    { 
        question: "¿En qué continente se encuentra localizado nuestro país, Colombia?", 
        options: ["América del Norte", "América del Sur", "Europa Occidental", "África Central"], 
        answer: "América del Sur" 
    },
    { 
        question: "¿Qué significa fundamentalmente que un país viva bajo un sistema de gobierno democrático?", 
        options: ["Que el poder y las decisiones recogen la participación y la voluntad del pueblo", "Que una sola persona toma todas las leyes sin consultar", "Que no existen normas de convivencia", "Que la economía está prohibida"], 
        answer: "Que el poder y las decisiones recogen la participación y la voluntad del pueblo" 
    },
    { 
        question: "Durante el proceso de independencia de Colombia a principios del siglo XIX, ¿cuál era el objetivo principal de los criollos patriotas?", 
        options: ["Independizarse del dominio y control del Imperio Español", "Convertirse en una colonia de otro país europeo", "Eliminar por completo el idioma español", "Viajar hacia el continente asiático"], 
        answer: "Independizarse del dominio y control del Imperio Español" 
    },
    { 
        question: "¿Por qué es tan importante para la vida humana cuidar las fuentes de agua dulce (ríos, páramos y quebradas)?", 
        options: ["Porque el agua dulce es un recurso limitado y vital para la supervivencia", "Porque el agua nunca se puede contaminar", "Porque el agua del mar sirve para tomar directamente sin tratar", "Porque el agua no tiene ninguna utilidad biológica"], 
        answer: "Porque el agua dulce es un recurso limitado y vital para la supervivencia" 
    },
    { 
        question: "¿Qué estudia principalmente la disciplina de la geografía humana?", 
        options: ["Unicamente las rocas y los minerales del subsuelo", "La relación y distribución de las poblaciones humanas con su territorio y entorno", "El movimiento de las estrellas lejanas", "La composición química de los océanos"], 
        answer: "La relación y distribución de las poblaciones humanas con su territorio y entorno" 
    },
    { 
        question: "¿Cuál es la función principal de la Constitución Política en un Estado?", 
        options: ["Establecer las normas fundamentales, los derechos y los deberes de los ciudadanos", "Indicar qué ropa se debe usar cada día", "Fijar los precios de los alimentos en el mercado", "Organizar campeonatos de fútbol escolares"], 
        answer: "Establecer las normas fundamentales, los derechos y los deberes de los ciudadanos" 
    },
    { 
        question: "¿Qué representa la diversidad cultural en una sociedad como la colombiana?", 
        options: ["Un problema que se debe destruir", "Una riqueza de tradiciones, saberes, etnias y expresiones que nos enriquece como nación", "Una norma obligatoria de vestimenta", "Un obstáculo para el desarrollo tecnológico"], 
        answer: "Una riqueza de tradiciones, saberes, etnias y expresiones que nos enriquece como nación" 
    },
    { 
        question: "¿Cuál fue el papel histórico de los Derechos Humanos tras los acontecimientos del siglo XX?", 
        options: ["Proteger la dignidad de todas las personas sin importar su raza, género u origen", "Garantizar privilegios exclusivos para los gobernantes", "Permitir la discriminación en las escuelas", "Eliminar las leyes en los países"], 
        answer: "Proteger la dignidad de todas las personas sin importar su raza, género u origen" 
    },

    // --- LENGUAJE, ARGUMENTACIÓN Y PENSAMIENTO CRÍTICO ---
    { 
        question: "Cuando estás redactando un texto argumentativo, ¿cuál es el propósito principal de presentar argumentos sólidos?", 
        options: ["Confundir al lector con palabras difíciles", "Defender un punto de vista o tesis respaldándolo con razones lógicas", "Contar una historia fantástica de ciencia ficción", "Describir el color de un objeto sin opinar"], 
        answer: "Defender un punto de vista o tesis respaldándolo con razones lógicas" 
    },
    { 
        question: "¿Cuál es la diferencia fundamental entre un hecho comprobable y una opinión personal?", 
        options: ["El hecho se puede verificar con pruebas reales; la opinión es una creencia o punto de vista subjetivo", "No existe ninguna diferencia entre ambos", "La opinión siempre es verdadera y el hecho es falso", "El hecho cambia dependiendo de quién lo mire"], 
        answer: "El hecho se puede verificar con pruebas reales; la opinión es una creencia o punto de vista subjetivo" 
    },
    { 
        question: "En literatura, ¿qué figura retórica o recurso se utiliza cuando se comparan dos cosas de forma directa diciendo que una *es* la otra (por ejemplo: 'tus ojos son dos luceros')?", 
        options: ["Una metáfora", "Una suma aritmética", "Una pregunta sin respuesta", "Una instrucción técnica"], 
        answer: "Una metáfora" 
    },
    { 
        question: "Si recibes una noticia o información sorprendente a través de las redes sociales sin identificar autor ni fuente confiable, ¿qué actitud demuestra mejor el pensamiento crítico?", 
        options: ["Creerla de inmediato y compartirla con todos", "Investigar y contrastar la información en fuentes formales antes de darla por cierta", "Borrar el celular por seguridad", "Pensar que todo lo escrito en internet es mentira absoluta"], 
        answer: "Investigar y contrastar la información en fuentes formales antes de darla por cierta" 
    },
    { 
        question: "¿Cuál es la utilidad principal de utilizar conectores lógicos (como *sin embargo*, *por lo tanto*, *en consecuencia*) al escribir un texto?", 
        options: ["Hacer que el texto sea más largo y aburrido", "Ayudar a que las ideas tengan ilación, cohesión y claridad para el lector", "Ocultar errores de ortografía", "Cambiar de idioma repentinamente"], 
        answer: "Ayudar a que las ideas tengan ilación, cohesión y claridad para el lector" 
    },
    { 
        question: "En una mesa de debate o discusión escolar, ¿cuál es la mejor actitud para llegar a acuerdos ante opiniones diferentes?", 
        options: ["Gritar más fuerte que los demás compañeros", "Escuchar con respeto los argumentos ajenos y exponer los propios con razones", "Abandonar el salón de clases", "Imponer la fuerza física"], 
        answer: "Escuchar con respeto los argumentos ajenos y exponer los propios con razones" 
    },
    { 
        question: "Si te piden identificar la idea principal de un párrafo de lectura, debes buscar:", 
        options: ["El detalle más insignificante y corto", "El concepto central o mensaje fundamental que el autor quiere comunicar", "La última palabra de la oración", "Las faltas de ortografía del texto"], 
        answer: "El concepto central o mensaje fundamental que el autor quiere comunicar" 
    },
    { 
        question: "¿Por qué es importante leer de manera comprensiva y no solo decodificar palabras mecánicamente?", 
        options: ["Porque la comprensión permite analizar, interpretar y aplicar el conocimiento a situaciones reales", "Porque es un requisito para gastar menos papel", "Porque la lectura mecánica quita tiempo de descanso", "Porque las palabras pierden significado al leerlas rápido"], 
        answer: "Porque la comprensión permite analizar, interpretar y aplicar el conocimiento a situaciones reales" 
    }
];