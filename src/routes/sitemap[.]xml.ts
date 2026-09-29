import { createFileRoute } from "@tanstack/react-router";
import { news } from "@/data/news";

const paths = [
  "/",
  "/quienes-somos",
  "/productos",
  "/servicios",
  "/noticias",
  "/contacto",
  "/politica-de-privacidad",
  "/terminos-y-condiciones",
  ...news.map((post) => `/noticias/${post.slug}`),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) =>
      `  <url><loc>${origin}${path}</loc><changefreq>monthly</changefreq><priority>${path === "/" ? "1.0" : "0.7"}</priority></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(body, {
          headers: { "content-type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
