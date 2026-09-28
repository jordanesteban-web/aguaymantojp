import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import fresco from "@/assets/producto-fresco.jpg";
import distribucion from "@/assets/producto-distribucion.jpg";
import especial from "@/assets/producto-especial.jpg";

const images = [
  { src: hero1, alt: "Aguaymanto cosechado en canasta frente a un campo de cultivo" },
  { src: hero2, alt: "Plantación de aguaymanto con montañas andinas al fondo" },
  { src: fresco, alt: "Aguaymanto fresco seleccionado con su cáliz" },
  { src: hero3, alt: "Equipo de trabajo seleccionando aguaymanto" },
  { src: distribucion, alt: "Jabas y cajas con aguaymanto listas para distribución" },
  { src: especial, alt: "Presentaciones de aguaymanto en distintos empaques" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {images.map((image, i) => (
          <li
            key={image.alt}
            className={cn(
              "group",
              i === 0 && "lg:col-span-2 lg:row-span-2",
              i === 3 && "sm:col-span-2 lg:col-span-2",
            )}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className="block size-full overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
              aria-label={`Ampliar imagen: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={cn(
                  "size-full object-cover transition-transform duration-700 group-hover:scale-105",
                  i === 0 ? "aspect-4/3 lg:h-full" : "aspect-4/3",
                )}
              />
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none [&>button]:hidden">
          {active !== null ? (
            <figure className="relative">
              <DialogTitle className="sr-only">{images[active]!.alt}</DialogTitle>
              <img
                src={images[active]!.src}
                alt={images[active]!.alt}
                className="max-h-[80svh] w-full rounded-xl object-contain"
              />
              <figcaption className="mt-3 text-center text-sm text-brand-foreground/90">
                {images[active]!.alt}
              </figcaption>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Cerrar imagen"
                className="absolute -top-3 -right-3 flex size-9 items-center justify-center rounded-full bg-background text-foreground shadow-[var(--shadow-card)]"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </figure>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
