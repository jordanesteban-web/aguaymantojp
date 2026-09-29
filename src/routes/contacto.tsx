import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { z } from "zod";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { PageHero } from "@/components/sections";
import { site, whatsappLink } from "@/config/site";
import heroImg from "@/assets/producto-fresco.jpg";

const searchSchema = z.object({
  producto: z.string().optional(),
  asunto: z.string().optional(),
});

export const Route = createFileRoute("/contacto")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Contacto | Solicita tu cotización de aguaymanto" },
      {
        name: "description",
        content:
          "Contáctanos por WhatsApp, teléfono, correo o formulario para consultar precios, presentaciones y disponibilidad de aguaymanto peruano.",
      },
      { property: "og:title", content: "Contacto | Aguaymanto Perú" },
      {
        property: "og:description",
        content:
          "Estamos aquí para atenderte: consultas comerciales, pedidos mayoristas y cotizaciones de aguaymanto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const { producto, asunto } = Route.useSearch();

  const datos = [
    {
      label: "WhatsApp",
      value: site.contact.whatsappDisplay,
      href: whatsappLink(),
      Icon: MessageCircle,
      external: true,
    },
    { label: "Teléfono", value: site.contact.phone, href: site.contact.phoneHref, Icon: Phone },
    { label: "Correo electrónico", value: site.contact.email, Icon: Mail },
    {
      label: "Dirección",
      value: `${site.contact.address}, ${site.contact.city}`,
      Icon: MapPin,
    },
    { label: "Horario de atención", value: site.contact.schedule, Icon: Clock },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos aquí para atenderte"
        description="Si deseas conocer nuestros productos, solicitar una cotización o conversar sobre una oportunidad comercial, contáctanos."
        image={heroImg}
        alt="Aguaymanto fresco seleccionado"
      />

      <section className="section-y">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <Reveal>
            <h2 className="text-2xl text-brand">Datos de contacto</h2>
            <ul className="mt-6 space-y-4">
              {datos.map(({ label, value, href, Icon, external }) => (
                <li key={label} className="flex gap-4 rounded-xl border border-border bg-card p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-leaf">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-brand hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-brand">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Los datos entre corchetes son provisionales y deben reemplazarse por la información
              real de la empresa.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="text-2xl text-brand">Envíanos tu consulta</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Completa el formulario y nos comunicaremos contigo a la brevedad.
            </p>
            <div className="mt-6">
              <ContactForm defaultProducto={producto} defaultAsunto={asunto} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 section-y">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Antes de escribirnos, quizá esto te ayude"
          />
          <Reveal delay={120}>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>
    </>
  );
}
