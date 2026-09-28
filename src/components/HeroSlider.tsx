import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

type Slide = {
  image: string;
  alt: string;
  title: string;
  text?: string;
  actions: { label: string; to: string; variant: "cta" | "onDark" }[];
};

const slides: Slide[] = [
  {
    image: hero1,
    alt: "Canasta con aguaymanto fresco recién cosechado frente a un campo de cultivo peruano",
    title: "Aguaymanto peruano, calidad que nace en nuestra tierra",
    text: "Producimos y comercializamos aguaymanto seleccionado, llevando el sabor y la calidad del campo peruano a nuestros clientes.",
    actions: [
      { label: "Conocer nuestros productos", to: "/productos", variant: "cta" },
      { label: "Solicitar cotización", to: "/contacto", variant: "onDark" },
    ],
  },
  {
    image: hero2,
    alt: "Plantación de aguaymanto en la sierra peruana con montañas al fondo",
    title: "Del campo peruano a nuevos mercados",
    text: "Trabajamos para ofrecer productos agrícolas de calidad, con compromiso, responsabilidad y visión de crecimiento.",
    actions: [{ label: "Conoce nuestra empresa", to: "/quienes-somos", variant: "cta" }],
  },
  {
    image: hero3,
    alt: "Trabajadores seleccionando aguaymanto fresco sobre mesa de acero inoxidable",
    title: "Natural, versátil y de excelente calidad",
    actions: [{ label: "Ver productos", to: "/productos", variant: "cta" }],
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => window.clearInterval(id);
  }, [paused, index]);

  return (
    <section
      aria-label="Presentación de la empresa"
      className="relative isolate min-h-[88svh] overflow-hidden bg-brand-deep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={cn(
              "size-full object-cover transition-transform duration-[8000ms] ease-out",
              i === index ? "scale-105" : "scale-100",
            )}
          />
          <div className="absolute inset-0 overlay-hero" />
        </div>
      ))}

      <div className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="eyebrow text-gold-light">
            <span className="h-px w-8 bg-gold-light/70" aria-hidden="true" />
            Aguaymanto del Perú
          </span>
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className={cn(
                "transition-all duration-700",
                i === index
                  ? "block translate-y-0 opacity-100"
                  : "pointer-events-none hidden translate-y-4 opacity-0",
              )}
            >
              <h1 className="mt-4 font-display text-4xl leading-[1.08] text-brand-foreground sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              {slide.text ? (
                <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-foreground/85 sm:text-lg">
                  {slide.text}
                </p>
              ) : null}
              <div className="mt-8 flex flex-wrap gap-3">
                {slide.actions.map((action) => (
                  <Button key={action.label} asChild variant={action.variant} size="lg">
                    <Link to={action.to}>{action.label}</Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4">
          <div className="flex gap-2" role="tablist" aria-label="Seleccionar diapositiva">
            {slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Diapositiva ${i + 1}`}
                onClick={() => go(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index
                    ? "w-10 bg-gold"
                    : "w-5 bg-brand-foreground/40 hover:bg-brand-foreground/70",
                )}
              />
            ))}
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="onDark" size="icon" aria-label="Anterior" onClick={() => go(index - 1)}>
              <ChevronLeft />
            </Button>
            <Button variant="onDark" size="icon" aria-label="Siguiente" onClick={() => go(index + 1)}>
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
