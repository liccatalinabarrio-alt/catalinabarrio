/* ============================================================
   DATOS DEL SITIO — Lic. Catalina Barrio
   Para sumar contenido nuevo, agregá un objeto más a la lista
   correspondiente. No hace falta tocar el HTML ni el CSS.
   ============================================================ */

// ---- ESCUDO DEL CLUB (aparece a la izquierda de la foto del hero) ----
// dejá "" si todavía no tenés la imagen del escudo
const CLUB_SHIELD = "";

// ---- JUGADORAS (carrusel "Jugadoras que potencian su mente") ----
// foto: dejá "" para usar el placeholder
// afiliaciones: lista de { nombre, escudo } — un item por club/selección.
//   escudo: "" si todavía no tenés esa imagen (se muestra el nombre igual, sin escudo)
// Orden: primero las que juegan en alguna selección, después el resto.
const JUGADORAS = [
  {
    nombre: "Annika Paz",
    posicion: "",
    pais: "IT",
    foto: "annikapaz.png",
    afiliaciones: [
      { nombre: "Inter de Milán", escudo: "inter-annika.png" },
      { nombre: "Selección Femenina Argentina", escudo: "annika.afa.png" },
    ],
  },
  {
    nombre: "Maricel Pereyra",
    posicion: "",
    pais: "BR",
    foto: "maricel.png",
    afiliaciones: [
      { nombre: "São Paulo", escudo: "saopablo.png" },
      { nombre: "Selección Femenina Argentina", escudo: "annika.afa.png" },
    ],
  },
  {
    nombre: "Agustina Sánchez",
    posicion: "",
    pais: "AR",
    foto: "agussanchez.png",
    afiliaciones: [
      { nombre: "Belgrano de Córdoba", escudo: "belgranoescudo.png" },
      { nombre: "Selección Femenina Uruguaya", escudo: "uruguayescudo.png" },
    ],
  },
  {
    nombre: "Carolina Ceniza",
    posicion: "",
    pais: "AR",
    foto: "caroceniza.png",
    afiliaciones: [
      { nombre: "River Plate", escudo: "riverescudo.png" },
      { nombre: "Selección Femenina Argentina", escudo: "annika.afa.png" },
    ],
  },
  {
    nombre: "Vaitiare Pardo",
    posicion: "",
    pais: "CL",
    foto: "vaitiareprado.png",
    afiliaciones: [
      { nombre: "Universidad Católica", escudo: "uca.png" },
      { nombre: "Selección Femenina de Chile", escudo: "chile-fedefutbol.png" },
    ],
  },
  {
    nombre: "Luciana Gómez",
    posicion: "",
    pais: "AR",
    foto: "lugomez.png",
    afiliaciones: [
      { nombre: "Belgrano de Córdoba", escudo: "belgranoescudo.png" },
      { nombre: "Selección Femenina Uruguaya", escudo: "uruguayescudo.png" },
    ],
  },
  {
    nombre: "Oriana López",
    posicion: "",
    pais: "AR",
    foto: "orilopez.png",
    afiliaciones: [
      { nombre: "Club Atlético Huracán", escudo: "huracan.png" },
      { nombre: "Selección Femenina Argentina", escudo: "annika.afa.png" },
    ],
  },
  {
    nombre: "Magalí Natta",
    posicion: "",
    pais: "AR",
    foto: "natta.png",
    afiliaciones: [
      { nombre: "River Plate", escudo: "riverescudo.png" },
    ],
  },
  {
    nombre: "Catalina Dos Reis",
    posicion: "",
    pais: "AR",
    foto: "catadosreis.png",
    afiliaciones: [
      { nombre: "Talleres de Córdoba", escudo: "talleres.png" },
    ],
  },
  {
    nombre: "Belén Taborda",
    posicion: "",
    pais: "IT",
    foto: "taborda.png",
    afiliaciones: [
      { nombre: "Donna Roma", escudo: "donnaroma.png" },
    ],
  },
  {
    nombre: "Delfina Pafundi",
    posicion: "",
    pais: "AR",
    foto: "paffundi.png",
    afiliaciones: [
      { nombre: "San Lorenzo de Almagro", escudo: "casla.png" },
    ],
  },
  {
    nombre: "Renatta Barletta",
    posicion: "",
    pais: "AR",
    foto: "barletta.png",
    afiliaciones: [
      { nombre: "River Plate", escudo: "riverescudo.png" },
    ],
  },
  {
    nombre: "Victoria Arrieto",
    posicion: "",
    pais: "AR",
    foto: "coloarrieto.png",
    afiliaciones: [
      { nombre: "Belgrano de Córdoba", escudo: "belgranoescudo.png" },
    ],
  },
  {
    nombre: "Micaela Bulacio",
    posicion: "",
    pais: "AR",
    foto: "bulacio.png",
    afiliaciones: [
      { nombre: "Belgrano de Córdoba", escudo: "belgranoescudo.png" },
    ],
  },
  {
    nombre: "Constanza Pacheco",
    posicion: "",
    pais: "AR",
    foto: "cotypacheco.png",
    afiliaciones: [
      { nombre: "River Plate", escudo: "riverescudo.png" },
    ],
  },
  {
    nombre: "Jazmín Acetelgaray",
    posicion: "",
    pais: "AR",
    foto: "acetelgaray.png",
    afiliaciones: [
      { nombre: "Club Atlético Huracán", escudo: "huracan.png" },
    ],
  },
  {
    nombre: "Lourdes González",
    posicion: "",
    pais: "AR",
    foto: "lourdesg.png",
    afiliaciones: [
      { nombre: "San Lorenzo de Almagro", escudo: "casla.png" },
    ],
  },
  {
    nombre: "Albertina Sandoval",
    posicion: "",
    pais: "AR",
    foto: "albertina.png",
    afiliaciones: [
      { nombre: "Boca Juniors", escudo: "bocaescudo.png" },
    ],
  },
  {
    nombre: "Delfina Zaputovich",
    posicion: "",
    pais: "AR",
    foto: "zaputobich.png",
    afiliaciones: [
      { nombre: "River Plate", escudo: "riverescudo.png" },
    ],
  },
  {
    nombre: "Ara Saleme",
    posicion: "",
    pais: "AR",
    foto: "saleme.png",
    afiliaciones: [
      { nombre: "River Plate", escudo: "riverescudo.png" },
    ],
  },
  {
    nombre: "Martina Schmidt",
    posicion: "",
    pais: "US",
    foto: "smith.png",
    afiliaciones: [
      { nombre: "Monroe University", escudo: "" },
    ],
  },
  {
    nombre: "Catalina Riccomini",
    posicion: "",
    pais: "AR",
    foto: "cattari.png",
    afiliaciones: [
      { nombre: "Vélez Sarsfield", escudo: "velezescudo.png" },
    ],
  },
  {
    nombre: "Carol Pascal",
    posicion: "",
    pais: "AR",
    foto: "pascal.png",
    afiliaciones: [
      { nombre: "River Plate", escudo: "riverescudo.png" },
    ],
  },
  {
    nombre: "Pía Álvarez",
    posicion: "",
    pais: "AR",
    foto: "piaalvarez.png",
    afiliaciones: [
      { nombre: "Club Atlético Independiente", escudo: "caiescudo.png" },
    ],
  },
];

// ---- Tarjeta final del carrusel, invitando a sumarse ----
const CTA_JUGADORAS = {
  titulo: "¿Querés ser la próxima?",
  whatsapp: "https://wa.me/541156145694",
};

// ---- TESTIMONIOS ----
// foto: dejá "" para usar el círculo vacío (placeholder)
const TESTIMONIOS = [
  {
    nombre: "Delfina Zaputovich",
    club: "Reserva River Plate",
    foto: "testimoniorenata.png",
    texto: "Trabajo con Cata hace 3 años, y desde el primer momento me ayudó a mejorar mi rendimiento deportivo trabajando diferentes aspectos como la frustración y la confianza que estaban influyendo en mi forma de jugar y entrenar.",
  },
  {
    nombre: "Carolina Ceniza",
    club: "Primera River Plate",
    foto: "carotestimonio.png",
    texto: "Hace 4 años que trabajo con Cata en mi proceso deportivo y fue una experiencia muy valiosa. La psicología deportiva me ayudó a crecer tanto dentro como fuera de la cancha, a disfrutar más del camino, ser más consciente de mis objetivos y desarrollar herramientas que hoy considero una verdadera ventaja en mi rendimiento. Estoy muy agradecida por todo lo aprendido y por la conexión que logré con mis propósitos y metas.",
  },
  {
    nombre: "Agustina Sánchez",
    club: "Primera Belgrano de Córdoba y Selección Uruguaya",
    foto: "testimonioagus.png",
    texto: "Había muchas cosas que me limitaban a la hora de jugar o entrenar, cada día se me hacía muy pesado y difícil de sobrellevar con muchos pensamientos negativos que impedían que yo pueda disfrutar de jugar o entrenar. Tengo la suerte de trabajar con Cata y ella me ayudó en cada paso, a encontrar el por qué de las cosas y entenderlo para después trabajarlo y deje de ser un problema y sea algo por lo que solo tengo que pasar. Hoy en día puedo tranquilamente decir que disfruto de lo que hago en cada momento y tengo las herramientas necesarias para enfrentar cada situación que se me presente; volví a ser feliz jugando.",
  },
  {
    nombre: "Renata Barletta",
    club: "Primera River Plate",
    foto: "renata.png",
    texto: "Había cosas inconscientes que de cierta manera las traje al consciente con lesiones o mal rendimiento, Cata me ayudó a trabajar esos pensamientos y las creencias que yo misma me creaba. Elegí a Cata hace ya casi tres años y noto muchos cambios tanto adentro como afuera de la cancha. Hoy en día puedo decir que sé de lo que soy capaz y más conectada conmigo misma.",
  },
  {
    nombre: "Constanza Pacheco",
    club: "Primera River Plate",
    foto: "cotytestimonio.png",
    texto: "En estos años trabajando con Cata aprendí a ser mucho más consciente, además de generar muchas herramientas que me potenciaron muchísimo dentro de la cancha, desde la confianza y el autoconocimiento. También trabajando mi identidad, desmintiendo creencias y autoexigencias, que me permiten vivir todo esto de una manera mucho más sana y linda tanto dentro como fuera de la cancha.",
  },
];

// ---- SOBRE MÍ / QUIÉN SOY ----
const CONTACTO_PERSONAL = {
  whatsapp: "1156145694",
  instagram: "@lic.catalinabarrio",
  mail: "lic.catalinabarrio@gmail.com",
};

const ESTUDIOS = [
  "Licenciatura en Psicología — Universidad del Salvador, 2018 a 2022 | MN: 79374",
  "Participación en la Clínica de Psicología deportiva para Psicólogos “Saliendo a la cancha”, German Diorno",
  "Diplomatura en coaching deportivo — UTN",
  "Posgrado de Psicología aplicada al deporte y actividad física — APDA, 2024-2025",
];

// Escudos grandes de los clubes en los que trabajó (Quién soy)
const CLUBES_GRANDES = [
  { club: "Club Atlético Platense", escudo: "platense.png" },
  { club: "San Lorenzo de Almagro", escudo: "casla.png" },
];

const CERTIFICACIONES = [
  "Curso Psicología deportiva — Ácumen Sports",
  "Curso Mentality — Ácumen Sports",
  "Clínica de Psicología deportiva para Psicólogos “Saliendo a la cancha” — German Diorno",
  "Cómo construir un equipo exitoso — Cesar Palmieri",
  "La planificación psicológica en deportes de equipo — Cesar Palmieri",
  "Psicología y fútbol — Cesar Palmieri",
  "Rendir bajo presión — Cesar Palmieri",
  "Romper la racha negativa — Cesar Palmieri",
  "Entrenar la toma de decisiones — Cesar Palmieri",
];

const EXPERIENCIA = [
  "Psicóloga deportiva — Acumen Sports",
  "Psicóloga deportiva — Marangoni",
  "Psicóloga deportiva — Sportas",
  "Sesiones virtuales/presenciales con deportistas de alto rendimiento de fútbol",
  "Psicóloga deportiva — Club Atlético Platense, Primera División Femenina",
  "Psicóloga deportiva — Club Atlético San Lorenzo de Almagro, Primera División Femenina",
];

// ---- CAMISETAS (galería "Gratitud en la cancha") — lugar para 8 ----
// imagen: dejá "" para que aparezca como espacio vacío, listo para cargar
const CAMISETAS = [
  { imagen: "paffundicamiseta.png", jugadora: "Pafundi", club: "San Lorenzo" },
  { imagen: "nattacamiseta.png", jugadora: "Natta", club: "River" },
  { imagen: "annikacamiseta.png", jugadora: "Annika", club: "Inter Milán" },
  { imagen: "aguscamiseta.png", jugadora: "Agus", club: "Belgrano" },
];

// ---- PROGRAMAS (burbujas de servicios) ----
// El botón de cada programa abre WhatsApp al número de Cata (CONTACTO_PERSONAL.whatsapp)
// con un mensaje pre-cargado que incluye el nombre del programa (ver renderProgramas en main.js).
const PROGRAMAS = [
  {
    nombre: "Punto de Quiebre",
    segmento: "Argentinas de primera",
    color: "azul",
    duracion: "3 meses",
    publico: "Para jugadoras profesionales de primera o reserva/primera que sienten que algo las está frenando —<strong>bloqueo mental, inseguridad, presión</strong>— y buscan <strong>un cambio real</strong>, no charlas motivacionales sueltas.",
  },
  {
    nombre: "Sin Vuelta Atrás",
    segmento: "Jugadoras del exterior",
    color: "dorado",
    duracion: "3 meses",
    publico: "Para jugadoras profesionales o semi-profesionales <strong>fuera de Argentina</strong> (España, Italia, Brasil, Uruguay, Chile, entre otros) que ya identificaron que necesitan trabajar lo mental porque <strong>les está influyendo en su rendimiento</strong>.",
  },
  {
    nombre: "Mente Fría",
    segmento: "Inferiores · Juveniles · Amateurs",
    color: "verde",
    duracion: "3 meses",
    publico: "Para jugadoras <strong>amateurs o de inferiores</strong> (categorías juveniles) que están formándose y necesitan <strong>herramientas mentales desde la base</strong>: manejo de la presión, confianza, relación con el error.",
  },
];
