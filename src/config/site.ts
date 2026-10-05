/**
 * Configuración central del sitio.
 * Edita aquí los datos de la empresa: todo el sitio los toma de este archivo.
 * Los valores entre [corchetes] son placeholders pendientes de confirmación.
 */

export const site = {
  company: {
    name: "[NOMBRE DE LA EMPRESA]",
    brand: "AGUAYMANTO PERÚ",
    tagline: "Calidad y compromiso desde el campo peruano.",
    shortDescription:
      "Producción y comercialización de aguaymanto peruano seleccionado para clientes particulares, restaurantes, tiendas, distribuidores y compradores mayoristas.",
  },
  contact: {
    whatsapp: "51999999999", // [WHATSAPP] solo dígitos, con código de país
    whatsappDisplay: "[WHATSAPP]",
    phone: "[TELÉFONO]",
    phoneHref: "tel:+51999999999",
    email: "[CORREO]",
    address: "[DIRECCIÓN]",
    city: "[CIUDAD]",
    schedule: "[HORARIO DE ATENCIÓN]",
  },
  whatsappMessage:
    "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.",
  // Video del banner (ID de YouTube). Reemplazar por el video institucional.
  videoYoutubeId: "Q9hFoMARo3A",

  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    linkedin: "#",
  },
} as const;

export const whatsappLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const navItems = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "Productos", to: "/productos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Noticias", to: "/noticias" },
  { label: "Contacto", to: "/contacto" },
] as const;
