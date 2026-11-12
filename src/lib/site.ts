import settings from '../data/settings.json';

export type Lang = 'es' | 'en';

const modules = import.meta.glob('../content/films/*.json', { eager: true });
export const films: any[] = Object.values(modules)
  .map((m: any) => m.default ?? m)
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

export const routes = {
  es: { home: '/', films: '/peliculas/', watch: '/sala/', shop: '/tienda/', producers: '/productores/', about: '/nosotros/', press: 'prensa' },
  en: { home: '/en/', films: '/en/films/', watch: '/en/screening-room/', shop: '/en/shop/', producers: '/en/producers/', about: '/en/about/', press: 'press' },
} as const;

export const filmPath = (lang: Lang, slug: string) => `${routes[lang].films}${slug}/`;
export const pressPath = (lang: Lang, slug: string) => `${filmPath(lang, slug)}${routes[lang].press}/`;

export const ui = {
  es: {
    films: 'Películas', watch: 'Sala', shop: 'Tienda', producers: 'Para productores', producersShort: 'Productores', about: 'Nosotros', home: 'Inicio',
    tagline: 'Productora de cine · Colombia',
    format: { largometraje: 'Largometraje', cortometraje: 'Cortometraje', serie: 'Serie' },
    formatPlural: { largometraje: 'Largometrajes', cortometraje: 'Cortometrajes', serie: 'Series' },
    kind: { ficcion: 'Ficción', documental: 'Documental' },
    status: { estreno: 'Estreno', desarrollo: 'En desarrollo', produccion: 'En producción', postproduccion: 'En postproducción', disponible: 'Disponible' },
    viewFilm: 'Ver la película', viewProject: 'Conocer el proyecto', all: 'Todo', allFilms: 'Todas las películas y series',
    noResults: 'Todavía no hay proyectos en esta categoría. El camino sigue.',
    trailer: 'Tráiler', trailerSoon: 'Tráiler próximamente', playTrailer: 'Reproducir tráiler',
    synopsis: 'Sinopsis', credits: 'Créditos', specs: 'Ficha técnica', frames: 'Frames', bts: 'Detrás de cámaras', note: 'Nota del productor',
    press: 'Prensa', pressKit: 'Material de prensa', pressIntro: 'Material de uso libre para prensa, festivales y programadores. Por favor acredita a EL CAMINO CINE.',
    download: 'Descargar', downloads: 'Descargables', backToFilm: 'Volver a la película',
    watchFilm: 'Ver película', watchSoon: 'Estreno próximamente', notify: 'Avísame del estreno',
    support: 'Apoya este proyecto', collaborate: 'Colabora', supportLead: 'Este proyecto está en desarrollo. Buscamos coproductores, financiación y aliados.',
    next: 'Siguiente proyecto', detailsSoon: 'Más detalles próximamente.',
    contact: 'Contacto', write: 'Escríbenos', coffee: 'Tomémonos un café y hablemos.',
    rights: 'Todos los derechos reservados.', madeIn: 'Hecho en Colombia.',
    install: 'Instalar la app', skip: 'Saltar al contenido', menu: 'Navegación principal', langSwitch: 'English', prev: 'Anterior', nextSlide: 'Siguiente',
  },
  en: {
    films: 'Films', watch: 'Screening room', shop: 'Shop', producers: 'For producers', producersShort: 'Producers', about: 'About', home: 'Home',
    tagline: 'Film production company · Colombia',
    format: { largometraje: 'Feature film', cortometraje: 'Short film', serie: 'Series' },
    formatPlural: { largometraje: 'Feature films', cortometraje: 'Short films', serie: 'Series' },
    kind: { ficcion: 'Fiction', documental: 'Documentary' },
    status: { estreno: 'Premiere', desarrollo: 'In development', produccion: 'In production', postproduccion: 'In post-production', disponible: 'Available' },
    viewFilm: 'View the film', viewProject: 'Discover the project', all: 'All', allFilms: 'All films and series',
    noResults: 'No projects in this category yet. The road goes on.',
    trailer: 'Trailer', trailerSoon: 'Trailer coming soon', playTrailer: 'Play trailer',
    synopsis: 'Synopsis', credits: 'Credits', specs: 'Technical details', frames: 'Frames', bts: 'Behind the scenes', note: 'Producer’s note',
    press: 'Press', pressKit: 'Press materials', pressIntro: 'Free-use materials for press, festivals and programmers. Please credit EL CAMINO CINE.',
    download: 'Download', downloads: 'Downloads', backToFilm: 'Back to the film',
    watchFilm: 'Watch the film', watchSoon: 'Premiering soon', notify: 'Notify me at release',
    support: 'Support this project', collaborate: 'Collaborate', supportLead: 'This project is in development. We are looking for co-producers, financing and partners.',
    next: 'Next project', detailsSoon: 'More details coming soon.',
    contact: 'Contact', write: 'Write to us', coffee: 'Let’s grab a coffee and talk.',
    rights: 'All rights reserved.', madeIn: 'Made in Colombia.',
    install: 'Install the app', skip: 'Skip to content', menu: 'Main navigation', langSwitch: 'Español', prev: 'Previous', nextSlide: 'Next',
  },
} as const;

export const mailto = (subject: string) =>
  settings.email ? `mailto:${settings.email}?subject=${encodeURIComponent(subject)}` : '';

export const frameSrc = (slug: string, n: number, w = 1600) =>
  `/media/${slug}/frame-${String(n).padStart(2, '0')}-${w}.webp`;
export const frameSet = (slug: string, n: number) =>
  [800, 1600, 2560].map((w) => `${frameSrc(slug, n, w)} ${w}w`).join(', ');

export { settings };
