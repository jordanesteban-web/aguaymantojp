import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSlider } from "@/components/HeroSlider";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { Gallery } from "@/components/Gallery";
import { FAQAccordion } from "@/components/FAQAccordion";
import { NewsCard, ProductCard, ServiceCard } from "@/components/cards";
import { CalidadSection, MayoristasSection, PorQueElegirnos } from "@/components/sections";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { news } from "@/data/news";
import campo from "@/assets/hero-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aguaymanto Perú | Producción y venta de aguaymanto peruano" },
      {
        name: "description",
        content:
          "Producimos y comercializamos aguaymanto peruano seleccionado. Venta al por mayor, atención a restaurantes, tiendas y distribuidores. Solicita tu cotización.",
      },
      { property: "og:title", content: "Aguaymanto Perú | Aguaymanto peruano seleccionado" },
      {
        property: "og:description",
        content:
          "Calidad y compromiso desde el campo peruano: aguaymanto fresco para clientes particulares, comerciales y mayoristas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSlider />

      {/* Sobre nosotros */}
      <section className="section-y">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <SectionTitle
            eyebrow="Sobre nosotros"
            title="Comprometidos con la calidad del aguaymanto peruano"
            description="Somos una empresa dedicada a la producción y comercialización de aguaymanto, comprometida con ofrecer productos de calidad y construir relaciones comerciales duraderas con nuestros clientes."
          >
            <Button asChild variant="brand" size="lg" className="mt-7">
              <Link to="/quienes-somos">Conoce quiénes somos</Link>
            </Button>
          </SectionTitle>

          <Reveal delay={120} className="relative">
            <img
              src={campo}
              alt="Cultivo de aguaymanto en el campo peruano con montañas al fondo"
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-4/3 w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
            />
            <div className="absolute -bottom-6 -left-4 hidden rounded-xl bg-card p-5 shadow-[var(--shadow-card)] sm:block">
              <p className="font-display text-2xl text-brand">100% peruano</p>
              <p className="text-xs text-muted-foreground">Origen en el campo nacional</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Productos */}
      <section className="bg-secondary/60 section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Nuestros productos"
            title="Aguaymanto seleccionado para cada tipo de cliente"
            description="Conoce nuestras principales líneas de producto y consúltanos por la presentación que necesitas."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <ProductCard key={product.slug} product={product} delay={i * 100} />
            ))}
          </div>
          <Reveal delay={200} className="mt-10">
            <Link
              to="/productos"
              className="inline-flex items-center gap-2 font-semibold text-leaf transition-colors hover:text-brand"
            >
              Ver todos los productos <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CalidadSection />

      {/* Servicios */}
      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Nuestros servicios"
            title="Acompañamos a nuestros clientes en cada pedido"
            description="Desde la venta directa hasta la atención de pedidos mayoristas y personalizados."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.slug} service={service} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <MayoristasSection />
      <PorQueElegirnos />

      {/* Galería */}
      <section className="bg-secondary/60 section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Galería"
            title="Nuestro trabajo, del campo al empaque"
            description="Campos, plantaciones, cosecha, selección, empaque y producto terminado."
          />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Noticias"
            title="Noticias y actualidad"
            description="Novedades de la empresa y contenidos sobre el aguaymanto y la agricultura peruana."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {news.map((post, i) => (
              <NewsCard key={post.slug} post={post} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/60 section-y">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas antes de tu pedido"
            description="Si tu consulta no aparece aquí, escríbenos por WhatsApp o mediante el formulario de contacto."
          >
            <Button asChild variant="cta" size="lg" className="mt-7">
              <Link to="/contacto">Contactarnos</Link>
            </Button>
          </SectionTitle>
          <Reveal delay={120}>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>
    </>
  );
}
