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
      { nombre: "Selección Femenina Argentina", escudo: "annika_afa.png" },
    ],
  },
  {
    nombre: "Maricel Pereyra",
    posicion: "",
    pais: "BR",
    foto: "maricel.png",
    afiliaciones: [
      { nombre: "São Paulo", escudo: "saopablo.png" },
      { nombre: "Selección Femenina Argentina", escudo: "annika_afa.png" },
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
      { nombre: "Selección Femenina Argentina", escudo: "annika_afa.png" },
    ],
  },
  {
    nombre: "Vaitiare Prado",
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
];

// ---- Tarjeta final del carrusel, invitando a sumarse ----
const CTA_JUGADORAS = {
  titulo: "¿Querés ser la próxima?",
  whatsapp: "https://wa.me/5491100000000",
};

// ---- TESTIMONIOS ----
// foto: dejá "" para usar el círculo vacío (placeholder)
const TESTIMONIOS = [
  {
    texto: "Había cosas inconscientes que de cierta manera las traje al consciente con lesiones o mal rendimiento, Cata me ayudó a trabajar esos pensamientos y las creencias que yo misma me creaba.",
    autor: "Jugadora de Primera División",
    foto: "",
  },
  {
    texto: "Había muchas cosas que me limitaban a la hora de jugar o entrenar, cada día se me hacía muy pesado y difícil de sobrellevar con muchos pensamientos negativos que impedían que yo pueda disfrutar de jugar o entrenar. Tengo la suerte de trabajar con Cata y ella me ayudó en cada paso.",
    autor: "Jugadora de Primera División",
    foto: "",
  },
  {
    texto: "Hace 4 años que trabajo con Cata en mi proceso deportivo y fue una experiencia muy valiosa. La psicología deportiva me ayudó a crecer tanto dentro como fuera de la cancha, a disfrutar más del camino, ser más consciente de mis objetivos.",
    autor: "Jugadora de Primera División",
    foto: "",
  },
  {
    texto: "[Espacio para el 4to testimonio — pasame el texto real y lo cargo acá]",
    autor: "Jugadora de Primera División",
    foto: "",
  },
  {
    texto: "[Espacio para el 5to testimonio — pasame el texto real y lo cargo acá]",
    autor: "Jugadora de Primera División",
    foto: "",
  },
  {
    texto: "[Espacio para el 6to testimonio — pasame el texto real y lo cargo acá]",
    autor: "Jugadora de Primera División",
    foto: "",
  },
];

// ---- CLUBES CON LOS QUE TRABAJÓ (4 escudos junto a la foto en "Quién soy") ----
const CLUBES_TRABAJADOS = [
  { club: "Club 1", escudo: "" },
  { club: "Club 2", escudo: "" },
  { club: "Club 3", escudo: "" },
  { club: "Club 4", escudo: "" },
];

// ---- CAMISETAS (galería "Gratitud en la cancha") — lugar para 8 ----
// imagen: dejá "" para que aparezca como espacio vacío, listo para cargar
const CAMISETAS = [
  { imagen: "camiseta-pafundi.png", jugadora: "Pafundi", club: "San Lorenzo" },
  { imagen: "", jugadora: "", club: "" },
  { imagen: "", jugadora: "", club: "" },
  { imagen: "", jugadora: "", club: "" },
  { imagen: "", jugadora: "", club: "" },
  { imagen: "", jugadora: "", club: "" },
  { imagen: "", jugadora: "", club: "" },
  { imagen: "", jugadora: "", club: "" },
];

// ---- PROGRAMAS (burbujas de servicios) ----
const PROGRAMAS = [
  { titulo: "Programa 01", subtitulo: "Acompañamiento individual", whatsapp: "https://wa.me/5491100000000" },
  { titulo: "Programa 02", subtitulo: "Proceso a mediano plazo", whatsapp: "https://wa.me/5491100000000" },
  { titulo: "Programa 03", subtitulo: "Seguimiento integral", whatsapp: "https://wa.me/5491100000000" },
];
