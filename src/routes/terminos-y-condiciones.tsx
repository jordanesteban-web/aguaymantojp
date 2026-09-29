import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Condiciones de uso del sitio web y alcance de la información publicada sobre productos y cotizaciones de aguaymanto.",
      },
      { property: "og:title", content: "Términos y condiciones | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Condiciones de uso del sitio y alcance de la información publicada.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl text-brand sm:text-4xl">Términos y condiciones</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Documento provisional. Debe revisarse y completarse con la información legal definitiva de{" "}
        {site.company.name}.
      </p>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/85">
        <h2 className="text-xl text-brand">Uso del sitio</h2>
        <p>
          El contenido de este sitio tiene carácter informativo y comercial. Su uso implica la
          aceptación de estas condiciones.
        </p>
        <h2 className="pt-4 text-xl text-brand">Información de productos</h2>
        <p>
          Las descripciones, presentaciones y disponibilidad son referenciales y se confirman en cada
          cotización. Las imágenes son ilustrativas.
        </p>
        <h2 className="pt-4 text-xl text-brand">Cotizaciones y pedidos</h2>
        <p>
          Las consultas enviadas mediante el formulario no constituyen un pedido en firme. Las
          condiciones comerciales se acuerdan con cada cliente.
        </p>
        <h2 className="pt-4 text-xl text-brand">Contacto</h2>
        <p>Para cualquier consulta sobre estos términos, escríbenos a {site.contact.email}.</p>
      </div>
    </article>
  );
}
