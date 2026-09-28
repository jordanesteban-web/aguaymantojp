import { Link } from "@tanstack/react-router";
import { Award, Check, Leaf, Sparkles, Truck, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import { atributosCalidad, razones } from "@/data/company";

/** Sección orientada a clientes mayoristas y empresas. */
export function MayoristasSection() {
  const puntos = [
    { title: "Pedidos por volumen", Icon: Truck },
    { title: "Atención personalizada", Icon: UsersRound },
    { title: "Presentaciones comerciales", Icon: Sparkles },
    { title: "Coordinación de entregas", Icon: Truck },
    { title: "Cotizaciones", Icon: Award },
  ];

  return (
    <section className="gradient-brand section-y text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <SectionTitle
          onDark
          eyebrow="Clientes mayoristas"
          title="¿Buscas un proveedor de aguaymanto?"
          description="Atendemos consultas comerciales de restaurantes, tiendas, distribuidores, empresas y otros negocios que requieren aguaymanto."
        >
          <Button asChild variant="cta" size="lg" className="mt-7">
            <Link to="/contacto">Solicitar cotización</Link>
          </Button>
        </SectionTitle>

        <Reveal delay={120}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {puntos.map(({ title, Icon }) => (
              <li
                key={title}
                className="flex items-center gap-3 rounded-lg border border-brand-foreground/15 bg-brand-foreground/5 p-4 text-sm font-medium"
              >
                <Icon className="size-5 shrink-0 text-gold-light" aria-hidden="true" />
                {title}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/** ¿Por qué elegirnos? */
export function PorQueElegirnos() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          align="center"
          eyebrow="¿Por qué elegirnos?"
          title="Razones para trabajar con nosotros"
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {razones.map((razon, i) => (
            <Reveal as="li" key={razon.title} delay={i * 80} className="h-full">
              <div className="h-full rounded-xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1">
                <span className="mx-auto flex size-11 items-center justify-center rounded-full bg-secondary text-leaf">
                  <Leaf className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base text-brand">{razon.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{razon.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Calidad que se nota */
export function CalidadSection() {
  return (
    <section id="calidad" className="bg-secondary/60 section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Calidad"
          title="Calidad que se nota"
          description="Cuidamos cada etapa del proceso para que el producto llegue en las mejores condiciones posibles."
        />
        <ul className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {atributosCalidad.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 70}>
              <div className="flex gap-4 border-l-2 border-gold/60 pl-4">
                <Check className="mt-1 size-5 shrink-0 text-leaf" aria-hidden="true" />
                <div>
                  <h3 className="text-base text-brand">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
        <p className="mt-10 max-w-3xl text-xs text-muted-foreground">
          La información sobre trazabilidad, certificaciones y controles específicos se incorporará
          una vez confirmada por la empresa.
        </p>
      </div>
    </section>
  );
}

/** Encabezado interno de páginas */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 size-full object-cover"
        width={1920}
        height={1088}
      />
      <div className="absolute inset-0 overlay-hero" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <span className="eyebrow text-gold-light">
          <span className="h-px w-8 bg-gold-light/70" aria-hidden="true" />
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-brand-foreground sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-foreground/85">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
