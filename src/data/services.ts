/** Servicios de la empresa. Los iconos son nombres de lucide-react. */
export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: "ShoppingBasket" | "Boxes" | "UtensilsCrossed" | "Store" | "ClipboardList" | "Handshake";
};

export const services: Service[] = [
  {
    slug: "venta-de-aguaymanto",
    title: "Venta de aguaymanto",
    description: "Venta de producto para clientes particulares y comerciales.",
    icon: "ShoppingBasket",
  },
  {
    slug: "venta-al-por-mayor",
    title: "Venta al por mayor",
    description: "Atención de pedidos de mayor volumen.",
    icon: "Boxes",
  },
  {
    slug: "atencion-a-restaurantes",
    title: "Atención a restaurantes",
    description:
      "Provisión de producto para restaurantes, hoteles, cafeterías y negocios gastronómicos.",
    icon: "UtensilsCrossed",
  },
  {
    slug: "tiendas-y-distribuidores",
    title: "Atención a tiendas y distribuidores",
    description: "Opciones comerciales para negocios que desean incorporar aguaymanto a su oferta.",
    icon: "Store",
  },
  {
    slug: "pedidos-personalizados",
    title: "Pedidos personalizados",
    description: "Evaluación de requerimientos específicos según producto, volumen y disponibilidad.",
    icon: "ClipboardList",
  },
  {
    slug: "asesoria-comercial",
    title: "Asesoría comercial",
    description: "Atención personalizada para ayudar al cliente a elegir la presentación adecuada.",
    icon: "Handshake",
  },
];
