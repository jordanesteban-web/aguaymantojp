import { Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { formatDate, type NewsPost } from "@/data/news";
import type { Product } from "@/data/products";
import type { Service } from "@/data/services";
import { whatsappLink } from "@/config/site";

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.alt}
            width={1200}
            height={912}
            loading="lazy"
            className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl text-brand">{product.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
          {product.caracteristicas?.length ? (
            <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
              {product.caracteristicas.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Icons.Check className="mt-0.5 size-4 shrink-0 text-leaf" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
            {product.presentacion ? (
              <div>
                <dt className="font-semibold text-foreground/70">Presentación</dt>
                <dd>{product.presentacion}</dd>
              </div>
            ) : null}
            {product.peso ? (
              <div>
                <dt className="font-semibold text-foreground/70">Peso</dt>
                <dd>{product.peso}</dd>
              </div>
            ) : null}
            {product.disponibilidad ? (
              <div>
                <dt className="font-semibold text-foreground/70">Disponibilidad</dt>
                <dd>{product.disponibilidad}</dd>
              </div>
            ) : null}
            {product.precio ? (
              <div>
                <dt className="font-semibold text-foreground/70">Precio</dt>
                <dd>{product.precio}</dd>
              </div>
            ) : null}
          </dl>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button asChild variant="brand">
              <Link to="/contacto" search={{ producto: product.slug }}>
                {product.cta}
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a
                href={whatsappLink(
                  `Hola, quisiera información sobre ${product.name} (aguaymanto).`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  const Icon = Icons[service.icon] as Icons.LucideIcon;
  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:border-leaf/40 hover:shadow-[var(--shadow-card)]">
        <span className="flex size-12 items-center justify-center rounded-lg bg-secondary text-brand">
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-lg text-brand">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <Link
          to="/contacto"
          search={{ asunto: service.title }}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf transition-colors hover:text-brand"
        >
          Consultar <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </Reveal>
  );
}

export function ValueCard({
  title,
  text,
  index = 0,
}: {
  title: string;
  text: string;
  index?: number;
}) {
  return (
    <Reveal as="li" delay={index * 70} className="h-full">
      <div className="h-full rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-colors hover:border-gold/60">
        <span className="font-display text-sm text-gold">0{index + 1}</span>
        <h3 className="mt-2 text-lg text-brand">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </Reveal>
  );
}

export function NewsCard({ post, delay = 0 }: { post: NewsPost; delay?: number }) {
  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
        <img
          src={post.image}
          alt={post.alt}
          loading="lazy"
          className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-brand">
              {post.category}
            </span>
            <time dateTime={post.date} className="text-muted-foreground">
              {formatDate(post.date)}
            </time>
          </div>
          <h3 className="mt-4 text-lg leading-snug text-brand">{post.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <Link
            to="/noticias/$slug"
            params={{ slug: post.slug }}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf transition-colors hover:text-brand"
          >
            Leer más <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
