import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cambia SITE_URL en Cloudflare Pages (variable de entorno) cuando conectes el dominio.
export default defineConfig({
  site: process.env.SITE_URL || 'https://elcaminocine.pages.dev',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
