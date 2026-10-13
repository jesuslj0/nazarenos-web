import type { ImageMetadata } from 'astro';
import { images } from './images';

export interface Actuacion {
  photos: { image: ImageMetadata; alt: string; class?: string }[];
  title: string;
  place?: string;
  when?: string;
  details: string[];
}

export const actuaciones: Actuacion[] = [
  {
    photos: [
      {
        image: images.actoCampoCriptana,
        alt: 'Vista desde un palco del escenario del Teatro Cervantes: decenas de músicos de uniforme negro con detalles morados interpretan ante un telón rojo, con dos estandartes a la derecha.',
      },
      {
        image: images.actoCampoCriptana2,
        alt: 'La agrupación interpretando sobre el escenario a oscuras del teatro, con las trompetas en primera fila, una tuba a la derecha y el estandarte al fondo.',
        class: 'brightness-[1.3]',
      },
    ],
    title: 'Acto conjunto con la A. M. Nuestro Padre Jesús Nazareno de Campo de Criptana',
    place: 'Teatro Cervantes, Campo de Criptana (Ciudad Real)',
    when: '15 de noviembre de 2025',
    details: [],
  },
  {
    photos: [
      {
        image: images.domingoRamosTorredonjimeno,
        alt: 'Paso de la Entrada Triunfal de Jesús en Jerusalén: Cristo sobre la borriquilla junto a un apóstol y una palmera, sobre un trono dorado con flores naranjas y blancas, con los músicos de la agrupación de espaldas en primer término.',
      },
    ],
    title: 'Domingo de Ramos en Torredonjimeno',
    place: 'Torredonjimeno (Jaén)',
    when: 'Domingo de Ramos',
    details: [
      'Cofradía de la Entrada Triunfal de Jesús en Jerusalén «La Mulica».',
      'Acompañamiento musical: la cruz de guía, con la Banda de TT. CC. Lágrimas de María de Churriana (Málaga); el paso, con la Agrupación Musical Nuestro Padre Jesús Nazareno de El Bonillo (Albacete).',
    ],
  },
  {
    photos: [
      {
        image: images.conciertoValencia,
        alt: 'La agrupación con uniforme morado y cordones dorados interpretando al aire libre sobre un escenario, con trompetas, bombardinos y cajas, bajo los árboles de una plaza.',
      },
    ],
    title: 'Concierto en Valencia',
    details: [],
  },
];
