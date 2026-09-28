import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems, site } from "@/config/site";
import { cn } from "@/lib/utils";

function BrandMark() {
  return (
    <span
      className="flex size-10 shrink-0 items-center justify-center rounded-full gradient-gold shadow-[var(--shadow-gold)]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="size-6" fill="none">
        <path
          d="M12 21c-3.3 0-6-2.6-6-5.9C6 11.8 12 8 12 8s6 3.8 6 7.1c0 3.3-2.7 5.9-6 5.9Z"
          fill="oklch(0.2919 0.0508 152.16)"
          fillOpacity="0.9"
        />
        <path
          d="M12 8C10.5 5.5 8 4 5 3.5 5.5 6.5 7.5 8.6 10 9.3"
          stroke="oklch(0.2919 0.0508 152.16)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/95 shadow-[var(--shadow-soft)] backdrop-blur-md"
          : "border-b border-transparent bg-background",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3 py-3 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          aria-label={`${site.company.brand} — inicio`}
        >
          <BrandMark />
          <span className="leading-none">
            <span className="block font-display text-base font-semibold tracking-tight text-brand sm:text-lg">
              AGUAYMANTO PERÚ
            </span>
            <span className="mt-0.5 block text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
              Producción y comercialización
            </span>
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none [&.active]:text-brand [&.active]:underline [&.active]:decoration-gold [&.active]:decoration-2 [&.active]:underline-offset-8"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Button asChild variant="cta" size="default" className="hidden sm:inline-flex">
            <Link to="/contacto">Solicitar cotización</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Abrir menú">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm bg-background">
              <SheetTitle className="font-display text-brand">AGUAYMANTO PERÚ</SheetTitle>
              <nav aria-label="Navegación móvil" className="mt-6">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-brand [&.active]:bg-secondary [&.active]:text-brand"
                        activeOptions={{ exact: item.to === "/" }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-6 space-y-3">
                <Button asChild variant="cta" size="lg" className="w-full">
                  <Link to="/contacto" onClick={() => setOpen(false)}>
                    Solicitar cotización
                  </Link>
                </Button>
                <a
                  href={site.contact.phoneHref}
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                >
                  <Phone className="size-4" aria-hidden="true" /> {site.contact.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
