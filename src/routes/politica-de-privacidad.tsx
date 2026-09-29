import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Información sobre el tratamiento de los datos personales que se envían a través de nuestros canales de contacto.",
      },
      { property: "og:title", content: "Política de privacidad | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Cómo tratamos los datos que nos envías a través del formulario de contacto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl text-brand sm:text-4xl">Política de privacidad</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Documento provisional. Debe revisarse y completarse con la información legal definitiva de{" "}
        {site.company.name}.
      </p>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/85">
        <p>
          Los datos que nos proporcionas mediante el formulario de contacto o nuestros canales de
          atención se utilizan únicamente para responder tu consulta y gestionar la relación
          comercial.
        </p>
        <h2 className="pt-4 text-xl text-brand">Datos que recopilamos</h2>
        <p>
          Nombre, empresa, correo electrónico, teléfono, ciudad, tipo de cliente, producto de interés
          y el contenido del mensaje que decidas enviarnos.
        </p>
        <h2 className="pt-4 text-xl text-brand">Conservación y uso</h2>
        <p>
          Conservamos la información durante el tiempo necesario para atender la consulta y cumplir
          con obligaciones comerciales. No comercializamos los datos con terceros.
        </p>
        <h2 className="pt-4 text-xl text-brand">Derechos del titular</h2>
        <p>
          Puedes solicitar el acceso, la actualización o la eliminación de tus datos escribiéndonos a{" "}
          {site.contact.email}.
        </p>
      </div>
    </article>
  );
}
