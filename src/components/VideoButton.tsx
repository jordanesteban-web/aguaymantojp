import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import { site } from "@/config/site";

/** Botón que abre un video de YouTube a pantalla completa. */
export function VideoButton({ onOpenChange }: { onOpenChange?: (open: boolean) => void }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    onOpenChange?.(open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group mt-6 inline-flex items-center gap-3 text-brand-foreground focus-visible:outline-none"
      >
        <span className="relative flex size-14 items-center justify-center rounded-full gradient-gold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform group-hover:scale-110 group-focus-visible:ring-2 group-focus-visible:ring-gold-light">
          <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" aria-hidden="true" />
          <Play className="relative ml-0.5 size-6 fill-current" aria-hidden="true" />
        </span>
        <span className="text-left">
          <span className="block text-sm font-semibold">Ver video</span>
          <span className="block text-xs text-brand-foreground/75">Conoce el aguaymanto peruano</span>
        </span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video sobre el aguaymanto"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-deep/95 p-0 sm:p-6"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar video"
            autoFocus
            className="absolute top-4 right-4 z-10 flex size-11 items-center justify-center rounded-full bg-background text-foreground shadow-[var(--shadow-card)]"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          <div className="aspect-video w-full max-w-[min(100vw,177.78svh)]" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="size-full"
              src={`https://www.youtube-nocookie.com/embed/${site.videoYoutubeId}?autoplay=1&rel=0`}
              title="Video sobre el aguaymanto"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
