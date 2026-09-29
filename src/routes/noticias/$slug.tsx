import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/cards";
import { SectionTitle } from "@/components/SectionTitle";
import { formatDate, news } from "@/data/news";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const post = news.find((item) => item.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    return {
      meta: post
        ? [
            { title: `${post.title} | Noticias | Aguaymanto Perú` },
            { name: "description", content: post.excerpt },
            { property: "og:title", content: post.title },
            { property: "og:description", content: post.excerpt },
            { property: "og:type", content: "article" },
            { name: "twitter:card", content: "summary_large_image" },
          ]
        : [],
    };
  },
  component: NoticiaDetalle,
});

function NoticiaDetalle() {
  const { post } = Route.useLoaderData();
  const relacionadas = news.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="bg-secondary/60 pt-12 pb-10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Link
              to="/noticias"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-leaf hover:text-brand"
            >
              <ArrowLeft className="size-4" aria-hidden="true" /> Volver a noticias
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full bg-card px-3 py-1 font-semibold text-brand">
                {post.category}
              </span>
              <time dateTime={post.date} className="text-muted-foreground">
                {formatDate(post.date)}
              </time>
              <span className="text-muted-foreground">Por {post.author}</span>
            </div>
            <h1 className="mt-4 font-display text-3xl leading-tight text-brand sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <img
            src={post.image}
            alt={post.alt}
            width={1920}
            height={1088}
            className="aspect-16/9 w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
          />
          <div className="mx-auto mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-foreground/85">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {post.gallery?.length ? (
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {post.gallery.map((image) => (
                <li key={image.src}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="aspect-4/3 w-full rounded-xl object-cover"
                  />
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-12 rounded-2xl gradient-brand p-8 text-brand-foreground">
            <h2 className="text-2xl text-brand-foreground">¿Te interesa nuestro aguaymanto?</h2>
            <p className="mt-3 text-sm text-brand-foreground/85">
              Escríbenos y te ayudamos a elegir la presentación adecuada para tu negocio.
            </p>
            <Button asChild variant="cta" size="lg" className="mt-6">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
          </div>
        </div>
      </article>

      <section className="bg-secondary/60 section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Seguir leyendo" title="Noticias relacionadas" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {relacionadas.map((item, i) => (
              <NewsCard key={item.slug} post={item} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
