import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/SectionTitle";
import { ProductCard } from "@/components/cards";
import { CalidadSection, MayoristasSection, PageHero } from "@/components/sections";
import { products } from "@/data/products";
import heroImg from "@/assets/producto-distribucion.jpg";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos | Aguaymanto fresco y presentaciones comerciales" },
      {
        name: "description",
        content:
          "Catálogo de aguaymanto peruano: fruto fresco seleccionado, presentaciones para distribución y opciones especiales según requerimiento del cliente.",
      },
      { property: "og:title", content: "Nuestros productos | Aguaymanto Perú" },
      {
        property: "og:description",
        content:
          "Aguaymanto fresco, presentaciones para distribuidores y opciones especiales. Consulta disponibilidad y cotización.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Productos,
});

function Productos() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros productos"
        title="Aguaymanto peruano, seleccionado y listo para su destino"
        description="Cada línea de producto se adapta al tipo de cliente: consumo directo, distribución comercial o presentaciones especiales."
        image={heroImg}
        alt="Jabas y cajas con aguaymanto listas para distribución"
      />

      <section id="catalogo" className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Catálogo"
            title="Presentaciones disponibles"
            description="La disponibilidad y las presentaciones se confirman al momento de la cotización."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <ProductCard key={product.slug} product={product} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <CalidadSection />
      <MayoristasSection />
    </>
  );
}
