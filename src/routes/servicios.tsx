import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/cards";
import { MayoristasSection, PageHero, PorQueElegirnos } from "@/components/sections";
import { services } from "@/data/services";
import heroImg from "@/assets/hero-3.jpg";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | Venta de aguaymanto al por mayor y a empresas" },
      {
        name: "description",
        content:
          "Venta de aguaymanto para clientes particulares y comerciales, venta al por mayor, atención a restaurantes, tiendas y distribuidores, pedidos personalizados y asesoría comercial.",
      },
      { property: "og:title", content: "Nuestros servicios | Aguaymanto Perú" },
      {
        property: "og:description",
        content:
          "Atendemos pedidos mayoristas, restaurantes, tiendas, distribuidores y requerimientos personalizados de aguaymanto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros servicios"
        title="Soluciones comerciales alrededor del aguaymanto"
        description="Atendemos desde consultas individuales hasta requerimientos comerciales recurrentes, con acompañamiento en cada pedido."
        image={heroImg}
        alt="Trabajadores seleccionando aguaymanto en la planta de empaque"
      />

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Qué ofrecemos"
            title="Servicios pensados para cada tipo de cliente"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div key={service.slug} id={service.slug}>
                <ServiceCard service={service} delay={i * 80} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <PorQueElegirnos />
      <MayoristasSection />
    </>
  );
}
