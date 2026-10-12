import type { ImageMetadata } from 'astro';
import { images } from './images';

export interface NewsItem {
  slug: string;
  /** Fecha ISO (AAAA-MM-DD). */
  date: string;
  title: string;
  summary: string;
  /** Un párrafo por elemento. */
  body: string[];
  image?: ImageMetadata;
  imageAlt?: string;
  /** `true` para contenido de ejemplo que debe sustituirse por información real. */
  provisional?: boolean;
}

/** Para añadir una noticia basta con agregar un elemento a esta lista. */
export const news: NewsItem[] = [
  {
    slug: 'presentacion-nuevos-uniformes',
    date: '2023-03-10',
    title: 'Presentación de los nuevos uniformes de la agrupación',
    summary:
      'El 10 de marzo de 2023 la Agrupación Musical presentó sus nuevos uniformes.',
    body: [
      'El 10 de marzo de 2023 tuvo lugar la presentación de los nuevos uniformes de la Agrupación Musical Nuestro Padre Jesús Nazareno.',
      '[Pendiente: detalles del acto, lugar, participantes y valoración de la hermandad.]',
    ],
    image: images.presentacionTrajeGala,
    imageAlt:
      'Fotografía de grupo de la agrupación musical con los nuevos uniformes, con los tambores en primer término y un retablo dorado al fondo.',
  },
  {
    slug: 'noticia-de-ejemplo-actividad-agrupacion',
    date: '2026-09-20',
    title: 'Noticia de ejemplo: actividad de la agrupación',
    summary:
      'Texto provisional que muestra cómo se presentará una noticia sobre la actividad musical.',
    body: [
      '[Pendiente: redactar la noticia real. Este texto es solo un ejemplo para comprobar el diseño del listado y de la página de detalle.]',
      'Para publicar una noticia nueva basta con añadir un elemento al archivo src/data/news.ts.',
    ],
    image: images.actoSevilla,
    imageAlt: 'La agrupación musical interpretando ante su director, con instrumentos de metal y el estandarte a la derecha.',
    provisional: true,
  },
  {
    slug: 'noticia-de-ejemplo-vida-de-hermandad',
    date: '2026-06-15',
    title: 'Noticia de ejemplo: vida de hermandad',
    summary:
      'Texto provisional que muestra cómo se presentará una noticia de la hermandad.',
    body: [
      '[Pendiente: redactar la noticia real. Este texto es solo un ejemplo para comprobar el diseño del listado y de la página de detalle.]',
    ],
    image: images.procesionNazareno,
    imageAlt: 'Procesión nocturna de Nuestro Padre Jesús Nazareno por la plaza, con nazarenos morados y el paso iluminado.',
    provisional: true,
  },
];
