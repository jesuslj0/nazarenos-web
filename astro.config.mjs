import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: sustituir por el dominio definitivo cuando exista (afecta a canonical, Open Graph y sitemap).
const site = process.env.SITE_URL ?? 'https://hermandad-nazareno.example';

export default defineConfig({
  site,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
