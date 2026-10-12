# Web de la Hermandad de Nuestro Padre Jesús Nazareno

Sitio estático con Astro 7, TypeScript y Tailwind CSS 4. Contexto del proyecto: `PROJECT_CONTEXT.md`; normas de trabajo: `CLAUDE.md`.

## Comandos

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run check    # comprobación de tipos (astro check)
npm run build    # genera dist/
npm run preview  # sirve dist/ localmente
```

Variable opcional `SITE_URL` (ver `.env.example`): dominio público para canonical, Open Graph y sitemap.

## Editar contenido

Todo el contenido vive en `src/data/`, separado de las plantillas.

- `news.ts`: añadir un objeto a la lista crea la noticia, su ficha en `/actualidad/` y su página `/actualidad/<slug>/`.
- `events.ts`: añadir un objeto crea el evento. Con `date: null` aparece como «Fecha por confirmar». Los eventos con fecha pasada pasan a «Finalizados» en cada compilación.
- `site.ts`: navegación, redes sociales y datos de contacto (`null` = pendiente).
- `titulares.ts`, `historia.ts`, `galeria.ts`: titulares, hitos, repertorio y galería.
- `images.ts`: registro de las imágenes de `src/assets/images/`. Una imagen nueva se coloca en esa carpeta y se registra aquí.

Los textos del tipo `[Pendiente: …]` se resaltan automáticamente en la web para localizar lo que falta. `provisional: true` marca noticias y eventos de ejemplo con una etiqueta visible.
