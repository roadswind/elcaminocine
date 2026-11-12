# EL CAMINO CINE — sitio web

Sitio estático bilingüe (ES/EN) hecho con [Astro](https://astro.build). Incluye la sala de proyección instalable como app (PWA) y un panel de contenido en `/admin/`.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Cloudflare Pages

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Variables de entorno: `NODE_VERSION=22` y `SITE_URL=https://tu-dominio.com`

## Contenido

| Qué | Dónde |
| --- | --- |
| Películas y series | `src/content/films/*.json` |
| Contacto y cifras de incentivos | `src/data/settings.json` |
| Tienda | `src/data/products.json` |
| Manifiesto y equipo | `src/data/team.json` |
| Frames (`frame-01-800/1600/2560.webp`), póster, BTS | `public/media/<slug>/` |
| Descargables de prensa | `public/press/<slug>/` |

Todo lo anterior también se edita desde `/admin/` (Sveltia CMS, acceso con token de GitHub).

Las cifras de incentivos provienen de la Comisión Fílmica Colombia y se actualizan cada año: revisa `settings.json → incentives`.

## Tipografías

ECC Display (derivada de Vina Sans, OFL), Newsreader e IBM Plex Mono.
