import type { ImageMetadata } from 'astro';
import { images } from './images';

export interface GalleryItem {
  image: ImageMetadata;
  alt: string;
  caption: string;
  group: 'hermandad' | 'agrupacion';
}

export const gallery: GalleryItem[] = [
  {
    image: images.procesionNazareno,
    alt: 'Procesión nocturna de Nuestro Padre Jesús Nazareno en la plaza, con nazarenos morados y el paso iluminado.',
    caption: 'Procesión de Nuestro Padre Jesús Nazareno',
    group: 'hermandad',
  },
  {
    image: images.imagenNazareno,
    alt: 'Nuestro Padre Jesús Nazareno con túnica morada bordada en oro.',
    caption: 'Nuestro Padre Jesús Nazareno',
    group: 'hermandad',
  },
  {
    image: images.imagenResucitado,
    alt: 'Paso de Jesús Resucitado con el estandarte de la cruz.',
    caption: 'Jesús Resucitado',
    group: 'hermandad',
  },
  {
    image: images.imagenPiedad,
    alt: 'Grupo escultórico de Nuestra Señora de la Piedad sobre su paso.',
    caption: 'Nuestra Señora de la Piedad',
    group: 'hermandad',
  },
  {
    image: images.fotoComidaCordero,
    alt: 'Numerosos hermanos y familias posando juntos en el local de la hermandad, con dos tartas decoradas con fotografías de imágenes sobre la mesa.',
    caption: 'Comida del cordero',
    group: 'hermandad',
  },
  {
    image: images.llegadaPlazaProcesion,
    alt: 'El paso de Nuestro Padre Jesús Nazareno, visto de espaldas, avanza junto a la torre de la iglesia y el edificio del teatro bajo un cielo azul, entre portadores con túnica morada.',
    caption: 'Llegada a la plaza Mayor en la procesión del Abrazo',
    group: 'hermandad',
  },
  {
    image: images.pasoDesdeAbajo,
    alt: 'Nuestro Padre Jesús Nazareno con túnica morada bordada en oro y la cruz al hombro, visto desde abajo sobre su paso de claveles rojos y un farol dorado.',
    caption: 'Nuestro Padre Jesús Nazareno sobre su paso',
    group: 'hermandad',
  },
  {
    image: images.procesionCalleMayor,
    alt: 'El paso de Nuestro Padre Jesús Nazareno avanza por una calle a hombros de portadores con túnica morada y guantes blancos, con claveles rojos y faroles dorados.',
    caption: 'Procesión por la calle Mayor',
    group: 'hermandad',
  },
  {
    image: images.capillaGranPoder,
    alt: 'La agrupación musical al completo ante el retablo dorado del templo.',
    caption: 'La agrupación en la capilla del Gran Poder',
    group: 'agrupacion',
  },
  {
    image: images.actoSevilla,
    alt: 'La agrupación interpretando al aire libre, vista desde detrás del director.',
    caption: 'La agrupación en plena interpretación',
    group: 'agrupacion',
  },
  {
    image: images.capillaSevillaAerea,
    alt: 'Vista cenital de la agrupación interpretando en una iglesia ante el público.',
    caption: 'Concierto en el interior de un templo',
    group: 'agrupacion',
  },
  {
    image: images.presentacionTrajeGala,
    alt: 'Fotografía de grupo de la agrupación con el traje de gala y los tambores en primer término.',
    caption: 'Presentación de nuevos uniformes, 10 de marzo de 2023',
    group: 'agrupacion',
  },
  {
    image: images.estandarte,
    alt: 'Estandarte de terciopelo morado con el monograma HJN y bordados en oro.',
    caption: 'Estandarte de la agrupación',
    group: 'agrupacion',
  },
];

export interface ArchivoItem {
  when: string;
  title: string;
  description: string;
}

/** Referencias documentales mencionadas en la reseña histórica. */
export const archivo: ArchivoItem[] = [
  {
    when: '1957',
    title: 'Acta sobre el paso de Jesús de Medinaceli',
    description: 'Documento que acredita el paso de Jesús de Medinaceli como propiedad de la hermandad.',
  },
  {
    when: '2007',
    title: '«225 años caminando con el Nazareno»',
    description: 'Libro de Ramón Fernández Chillerón sobre la historia y la idiosincrasia de la hermandad.',
  },
  {
    when: '2012',
    title: 'Disco compacto «A tus pies, mi Nazareno»',
    description: 'Primera grabación de la agrupación, con la marcha que le da nombre y otras como «Judería Sevillana», «¡Oh, bendita estrella!», «¡A la Gloria!» y «Costaleros del Amor».',
  },
  {
    when: '2015',
    title: '«Sones de Música Cofrade – Semana Santa El Bonillo»',
    description: 'Trabajo discográfico editado por el Excmo. Ayuntamiento de El Bonillo, con participación de la agrupación.',
  },
];
