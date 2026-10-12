import type { ImageMetadata } from 'astro';
import { images } from './images';

export interface Titular {
  slug: string;
  name: string;
  title: string;
  paragraphs: string[];
  image: ImageMetadata;
  imageAlt: string;
}

export const titularesIntro =
  'La Hermandad de Nuestro Padre Jesús Nazareno custodia y rinde culto a tres imágenes que representan momentos esenciales del misterio pascual de Cristo. En torno a ellas gira la vida espiritual de nuestra corporación y la devoción de generaciones de hermanos y fieles de El Bonillo.';

export const titularesCierre =
  'Las imágenes de Nuestro Padre Jesús Nazareno, Nuestra Señora de la Piedad y Jesús Resucitado constituyen el corazón espiritual de nuestra Hermandad. En ellas se resume el misterio de la Pasión, Muerte y Resurrección de Jesucristo, fundamento de nuestra fe y motivo de nuestra existencia como comunidad cristiana.';

export const titulares: Titular[] = [
  {
    slug: 'nazareno',
    name: 'Nuestro Padre Jesús Nazareno',
    title: 'Titular principal',
    paragraphs: [
      'Nuestro Padre Jesús Nazareno es el Titular principal de la Hermandad y el centro de la devoción que, desde 1782, ha reunido a miles de bonilleros bajo su mirada misericordiosa.',
      'Representa a Cristo cargando con la Cruz camino del Calvario, imagen de sacrificio, entrega y redención. Su presencia ha acompañado a numerosas generaciones, convirtiéndose en uno de los símbolos más queridos y representativos de la fe de nuestro pueblo.',
    ],
    image: images.imagenNazareno,
    imageAlt:
      'Imagen de Nuestro Padre Jesús Nazareno con túnica morada bordada en oro, abrazado a la cruz y flanqueado por flores amarillas.',
  },
  {
    slug: 'piedad',
    name: 'Nuestra Señora de la Piedad',
    title: 'Advocación mariana',
    paragraphs: [
      'Nuestra Señora de la Piedad contempla el dolor más profundo de una madre que sostiene en sus brazos el cuerpo sin vida de su Hijo.',
      'Esta advocación nos recuerda el amor incondicional, la fortaleza ante la adversidad y la esperanza que brota incluso en los momentos más difíciles. Bajo su mirada maternal, los hermanos encuentran consuelo, protección y ejemplo de fe.',
    ],
    image: images.imagenPiedad,
    imageAlt:
      'Grupo escultórico de la Piedad: la Virgen sostiene a Cristo yacente sobre un paso de madera tallada con flores amarillas y moradas.',
  },
  {
    slug: 'resucitado',
    name: 'Jesús Resucitado',
    title: 'La alegría de la Pascua',
    paragraphs: [
      'Con Jesús Resucitado culmina el mensaje de la Semana Santa. Tras la Pasión y la Muerte, la Resurrección nos anuncia la victoria definitiva de Cristo sobre el pecado y la muerte.',
      'Su imagen representa la alegría de la Pascua y la certeza de la esperanza cristiana. Es el recordatorio de que la luz siempre vence a la oscuridad y de que la fe encuentra su plenitud en la Resurrección del Señor.',
    ],
    image: images.imagenResucitado,
    imageAlt:
      'Paso de Jesús Resucitado con el estandarte de la cruz, sostenido por portadores con guantes blancos bajo un cielo azul.',
  },
];
