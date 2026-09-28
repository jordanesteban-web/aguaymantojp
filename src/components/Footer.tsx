import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Music2, Phone } from "lucide-react";
import { navItems, site, whatsappLink } from "@/config/site";

export function Footer() {
  const socials = [
    { label: "Facebook", href: site.social.facebook, Icon: Facebook },
    { label: "Instagram", href: site.social.instagram, Icon: Instagram },
    { label: "TikTok", href: site.social.tiktok, Icon: Music2 },
    { label: "LinkedIn", href: site.social.linkedin, Icon: Linkedin },
  ];

  return (
    <footer className="gradient-brand text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="font-display text-xl text-brand-foreground">{site.company.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-brand-foreground/75">
            {site.company.tagline}
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-brand-foreground/25 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h4 className="text-sm font-semibold tracking-[0.18em] text-gold-light uppercase">
            Enlaces
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-brand-foreground/80 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="text-sm font-semibold tracking-[0.18em] text-gold-light uppercase">
            Información
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-brand-foreground/80">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-gold"
              >
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                WhatsApp: {site.contact.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {site.contact.phone}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {site.contact.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {site.contact.address}, {site.contact.city}
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {site.contact.schedule}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-[0.18em] text-gold-light uppercase">
            ¿Buscas un proveedor?
          </h4>
          <p className="mt-4 text-sm text-brand-foreground/80">
            Atendemos consultas comerciales de restaurantes, tiendas, distribuidores y empresas.
          </p>
          <Link
            to="/contacto"
            className="mt-5 inline-flex items-center justify-center rounded-md gradient-gold px-5 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
          >
            Solicitar cotización
          </Link>
        </div>
      </div>

      <div className="border-t border-brand-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-brand-foreground/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 {site.company.name}. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <Link to="/politica-de-privacidad" className="hover:text-gold">
              Política de privacidad
            </Link>
            <Link to="/terminos-y-condiciones" className="hover:text-gold">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
