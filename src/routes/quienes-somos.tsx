import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Leaf, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { ValueCard } from "@/components/cards";
import { Gallery } from "@/components/Gallery";
import { MayoristasSection, PageHero } from "@/components/sections";
import { compromiso, historia, mision, valores, vision } from "@/data/company";
import heroImg from "@/assets/hero-3.jpg";
import empresaImg from "@/assets/hero-1.jpg";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes somos | Empresa peruana de aguaymanto" },
      {
        name: "description",
        content:
          "Conoce nuestra empresa, historia, misión, visión, valores y compromiso con la calidad del aguaymanto peruano.",
      },
      { property: "og:title", content: "Quiénes somos | Aguaymanto Perú" },
      {
        property: "og:description",
        content:
          "Una empresa con raíces en el campo peruano: misión, visión, valores y compromiso con la calidad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuienesSomos,
});

function QuienesSomos() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una empresa con raíces en el campo peruano"
        description="Producimos y comercializamos aguaymanto con una forma de trabajo simple: producto bien seleccionado, atención clara y compromisos que se cumplen."
        image={heroImg}
        alt="Equipo de trabajo seleccionando aguaymanto fresco"
      />

      {/* Nuestra empresa */}
      <section id="nuestra-empresa" className="section-y">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <img
              src={empresaImg}
              alt="Aguaymanto recién cosechado en canasta frente a un campo de cultivo"
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-4/3 w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
            />
          </Reveal>
          <SectionTitle eyebrow="Nuestra empresa" title="Producto, personas y confianza">
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Somos una empresa peruana dedicada a la producción, comercialización y venta de
                aguaymanto. Nuestro trabajo se concentra en ofrecer un fruto bien seleccionado y en
                mantener una comunicación clara con cada cliente.
              </p>
              <p>
                Comercializamos aguaymanto fresco y presentaciones orientadas a clientes
                comerciales. Atendemos a clientes particulares, restaurantes, hoteles, cafeterías,
                tiendas, distribuidores y empresas que requieren producto de manera recurrente.
              </p>
              <p>
                Nos diferencia el cuidado en la selección, la atención personalizada y el compromiso
                con lo que ofrecemos. La calidad no es una promesa aislada: es la forma en la que
                trabajamos cada pedido.
              </p>
            </div>
            <Button asChild variant="brand" size="lg" className="mt-7">
              <Link to="/productos">Ver nuestros productos</Link>
            </Button>
          </SectionTitle>
        </div>
      </section>

      {/* Historia */}
      <section id="nuestra-historia" className="bg-secondary/60 section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Trayectoria"
            title="Nuestra historia"
            description="Estos contenidos son iniciales y serán reemplazados por la historia real de la empresa."
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {historia.map((item, i) => (
              <Reveal as="li" key={item.step} delay={i * 90}>
                <div className="relative h-full rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                  <span className="font-display text-3xl text-gold">{item.step}</span>
                  <h3 className="mt-2 text-lg text-brand">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="section-y">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <article
              id="mision"
              className="h-full rounded-2xl gradient-brand p-8 text-brand-foreground shadow-[var(--shadow-card)]"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-brand-foreground/10 text-gold-light">
                <Target className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-2xl text-brand-foreground">Nuestra Misión</h2>
              <p className="mt-4 text-base leading-relaxed text-brand-foreground/85">{mision}</p>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article
              id="vision"
              className="h-full rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-leaf">
                <Compass className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-2xl text-brand">Nuestra Visión</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{vision}</p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="bg-secondary/60 section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle align="center" eyebrow="Cultura" title="Nuestros valores" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((valor, i) => (
              <ValueCard key={valor.title} title={valor.title} text={valor.text} index={i} />
            ))}
          </ul>
        </div>
      </section>

      {/* Compromiso */}
      <section id="compromiso" className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Nuestro compromiso"
            title="Tres pilares que guían nuestro trabajo"
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {compromiso.map((pilar, i) => (
              <Reveal as="li" key={pilar.title} delay={i * 90}>
                <div className="h-full rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
                  <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-leaf">
                    <Leaf className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg text-brand">{pilar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pilar.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Galería */}
      <section className="bg-secondary/60 section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Galería" title="Nuestro día a día" />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      <MayoristasSection />
    </>
  );
}
