import fresco from "@/assets/producto-fresco.jpg";
import distribucion from "@/assets/producto-distribucion.jpg";
import especial from "@/assets/producto-especial.jpg";

/**
 * Catálogo de productos. Añade nuevos productos agregando objetos a este arreglo.
 * Los campos opcionales (presentacion, peso, disponibilidad, precio, caracteristicas,
 * fichaTecnica) se muestran solo si tienen valor.
 */
export type Product = {
  slug: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  cta: string;
  presentacion?: string;
  peso?: string;
  disponibilidad?: string;
  precio?: string;
  caracteristicas?: string[];
  fichaTecnica?: string;
};

export const products: Product[] = [
  {
    slug: "aguaymanto-fresco",
    name: "Aguaymanto fresco",
    description:
      "Fruto seleccionado cuidadosamente para conservar su presentación, sabor y frescura.",
    image: fresco,
    alt: "Aguaymanto fresco con cáliz abierto sobre tela de lino",
    cta: "Solicitar información",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    caracteristicas: ["Selección manual del fruto", "Cuidado en el manejo post cosecha"],
  },
  {
    slug: "aguaymanto-distribucion",
    name: "Aguaymanto para distribución",
    description: "Presentaciones orientadas a clientes comerciales y distribuidores.",
    image: distribucion,
    alt: "Jabas y cajas con aguaymanto listas para distribución",
    cta: "Consultar",
    presentacion: "[PRESENTACIÓN]",
    disponibilidad: "[DISPONIBILIDAD]",
    caracteristicas: ["Pedidos por volumen", "Coordinación de entregas"],
  },
  {
    slug: "presentaciones-especiales",
    name: "Presentaciones especiales",
    description: "Opciones de acuerdo con las necesidades del cliente y disponibilidad.",
    image: especial,
    alt: "Empaques de aguaymanto en distintas presentaciones sobre mesa de madera",
    cta: "Consultar presentación",
    presentacion: "[PRESENTACIÓN]",
    disponibilidad: "[DISPONIBILIDAD]",
    caracteristicas: ["Empaques según requerimiento", "Evaluación caso por caso"],
  },
];
