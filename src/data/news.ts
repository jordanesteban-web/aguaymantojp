import mercado from "@/assets/hero-1.jpg";
import cultivo from "@/assets/hero-2.jpg";
import calidad from "@/assets/hero-3.jpg";

/** Noticias de ejemplo. Edita o elimina libremente estos artículos. */
export type NewsPost = {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  author: string;
  excerpt: string;
  image: string;
  alt: string;
  content: string[];
  gallery?: { src: string; alt: string }[];
};

export const news: NewsPost[] = [
  {
    slug: "aguaymanto-peruano-nuevos-mercados",
    title: "El aguaymanto peruano y su presencia en nuevos mercados",
    category: "Mercado",
    date: "2026-08-18",
    author: "[AUTOR]",
    excerpt:
      "El interés por el aguaymanto continúa creciendo entre compradores que buscan frutos naturales con buena presentación.",
    image: mercado,
    alt: "Canasta con aguaymanto fresco en un campo de cultivo peruano",
    content: [
      "El aguaymanto es un fruto originario de la región andina que ha ganado presencia comercial gracias a su sabor característico y su versatilidad en la gastronomía.",
      "Desde nuestra empresa acompañamos a clientes que buscan producto seleccionado y una atención clara sobre presentaciones, volúmenes y disponibilidad.",
      "Este contenido es un texto de ejemplo y puede editarse o reemplazarse por información propia de la empresa.",
    ],
  },
  {
    slug: "conoce-el-cultivo-del-aguaymanto",
    title: "Conoce más sobre el cultivo del aguaymanto",
    category: "Agricultura",
    date: "2026-07-02",
    author: "[AUTOR]",
    excerpt:
      "El manejo del cultivo influye directamente en la calidad del fruto que llega al cliente final.",
    image: cultivo,
    alt: "Plantación de aguaymanto en los andes peruanos al amanecer",
    content: [
      "El cultivo del aguaymanto requiere atención constante en el manejo de la planta, la cosecha y el traslado del fruto.",
      "Un manejo cuidadoso permite conservar la presentación del cáliz y la frescura del fruto durante más tiempo.",
      "Este contenido es un texto de ejemplo y puede editarse o reemplazarse por información propia de la empresa.",
    ],
  },
  {
    slug: "apuesta-por-la-calidad",
    title: "Nuestra apuesta por la calidad y la producción responsable",
    category: "Noticias de la empresa",
    date: "2026-05-20",
    author: "[AUTOR]",
    excerpt:
      "Trabajamos en procesos de selección y empaque orientados a mantener un estándar consistente.",
    image: calidad,
    alt: "Equipo de trabajo seleccionando aguaymanto en mesa de acero inoxidable",
    content: [
      "La calidad es el eje de nuestro trabajo: se define en el campo, se cuida en la selección y se confirma en el empaque.",
      "Además, promovemos prácticas responsables con el entorno y con las personas que forman parte de nuestras operaciones.",
      "Este contenido es un texto de ejemplo y puede editarse o reemplazarse por información propia de la empresa.",
    ],
  },
];

export const newsCategories = [
  "Noticias de la empresa",
  "Agricultura",
  "Aguaymanto",
  "Mercado",
  "Eventos",
  "Innovación",
  "Producción",
];

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
