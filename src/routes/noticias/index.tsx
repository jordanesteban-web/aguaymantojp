import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/SectionTitle";
import { NewsCard } from "@/components/cards";
import { MayoristasSection, PageHero } from "@/components/sections";
import { news, newsCategories } from "@/data/news";
import heroImg from "@/assets/hero-2.jpg";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Noticias y actualidad | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Novedades de la empresa y contenidos sobre el cultivo del aguaymanto, la agricultura peruana y el mercado del aguaymanto.",
      },
      { property: "og:title", content: "Noticias y actualidad | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Noticias de la empresa, agricultura, aguaymanto, mercado, eventos y producción.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Noticias,
});

function Noticias() {
  return (
    <>
      <PageHero
        eyebrow="Noticias"
        title="Noticias y actualidad"
        description="Publicaciones sobre nuestra empresa, el aguaymanto y la agricultura peruana."
        image={heroImg}
        alt="Plantación de aguaymanto en la sierra del Perú"
      />

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Blog corporativo" title="Últimas publicaciones" />
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Categorías">
            {newsCategories.map((category) => (
              <li
                key={category}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {category}
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((post, i) => (
              <NewsCard key={post.slug} post={post} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <MayoristasSection />
    </>
  );
}
