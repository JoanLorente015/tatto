/* =========================================================
   CONTENIDO · Todo el texto de la web se cambia aquí.
   No hace falta tocar los archivos .html
   ========================================================= */
const CONFIG = {
  nombre: "Moonlighting Studio",
  titular: "Tinta que cuenta tu historia.",
  subtitulo: "Tatuajes personalizados, cover-ups y piercing con cita previa. Material de un solo uso y cuidado profesional en cada sesión.",

  telefono: "+34 623 766 219",
  whatsapp: "34623766219",              // solo números, con prefijo de país y sin +
  direccion: "Ronda del Guinardó, 27, Horta-Guinardó, 08024 Barcelona",
  mapaUrl: "https://maps.app.goo.gl/qFGqzYEK3znrC1CE7",

  redes: [
    { nombre: "Instagram", url: "https://www.instagram.com/moonlighting_studio?stkn=Z2ZrdGxiYm4wYWkx" },
  ],

  /* Menú: para quitar o añadir una página, edita esta lista */
  menu: [
    { texto: "Inicio",    archivo: "index.html" },
    { texto: "Servicios", archivo: "servicios.html" },
    { texto: "Artistas",  archivo: "equipo.html" },
    { texto: "Trabajos",  archivo: "galeria.html" },
    { texto: "Contacto",  archivo: "contacto.html" }
  ],
  botonReserva: { texto: "Pedir cita", archivo: "reservar.html" },

  servicios: [
    { nombre: "Tatuaje pequeño",       detalle: "Hasta 5 cm · Minimalista, letras, símbolos", precio: "desde 60 €" },
    { nombre: "Tatuaje mediano",       detalle: "Hasta 15 cm · Una sola sesión",              precio: "desde 150 €" },
    { nombre: "Pieza grande",          detalle: "Manga, espalda, pecho · Por sesiones",       precio: "desde 90 €/h" },
    { nombre: "Cover-up",              detalle: "Cubrimos o reformamos un tatuaje antiguo",   precio: "presupuesto" },
    { nombre: "Retoque",               detalle: "Gratis dentro de los 60 días posteriores",   precio: "0 €" },
    { nombre: "Piercing",              detalle: "Joyería de titanio incluida",                precio: "desde 30 €" }
  ],

  pasos: [
    { titulo: "Cuéntanos tu idea", texto: "Nos escribes con tu idea, la zona y el tamaño. Te respondemos con presupuesto." },
    { titulo: "Diseñamos contigo", texto: "Preparamos el diseño y lo ajustamos hasta que te encaje." },
    { titulo: "Sesión",            texto: "Material estéril de un solo uso y un ambiente tranquilo." },
    { titulo: "Cuidados",          texto: "Te damos instrucciones claras para que cicatrice perfecto." }
  ],

  equipo: [
    { nombre: "Nombre Apellido", cargo: "Fundador · Tradicional y blackwork", foto: "" },   // foto: "foto1.jpg"
    { nombre: "Nombre Apellido", cargo: "Realismo y fine line",              foto: "" },
    { nombre: "Nombre Apellido", cargo: "Piercing",                          foto: "" }
  ],

  galeria: [   //Si está vacío se muestran recuadros de ejemplo.
    "img/trabajo2.png",
    "img/trabajo3.png",
    "img/trabajo4.png"
  ],

  opiniones: [
    { texto: "Un sitio de 10. Muy profesionales, el estudio está impecable y el trato es excelente; te hacen sentir muy cómodo y te explican todo con detalle. Me hice dos piercings y el resultado quedó genial. Sin duda, un lugar totalmente recomendable.💗",             autor: "Lucia López" },
    { texto: "Increíble lugar para ir a tatuarse o hacerse algunos de sus servicios de piercing y gemz. Los dueños del local son personas muy agradables y con muy alto criterio de lo que hacen además muy profesionales,  el local está increíblemente decorado con una estética retro increíble. Sin duda muy recomendado 🤜🏼💥🤛🏼",             autor: "Fernando de armas" },
    { texto: "100% recomendable ! desde que hablé con ellos vi que estábamos en sintonía . Paul me ha hechos dos tattoos brutales y de pasó Camille ha decorado mi sonrisa. Gracias chicos, sois totales ! por cierto … el local es lo mas ! sin duda nos veremos pronto !", autor: "Aurora Moreno" }
  ],

  horario: [
    ["Lunes",            "Cerrado"],
    ["Martes a viernes", "11:00 – 20:00"],
    ["Sábado",           "11:00 – 18:00"],
    ["Domingo",          "Cerrado"]
  ]
};
