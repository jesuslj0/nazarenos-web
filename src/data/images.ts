import type { ImageMetadata } from 'astro';

import escudoAgrupacion from '../assets/images/agrupacion/escudo-agrupacion.jpeg';
import estandarte from '../assets/images/agrupacion/estandarte.jpeg';
import actoSevilla from '../assets/images/agrupacion/acto-sevilla.jpeg';
import capillaGranPoder from '../assets/images/agrupacion/capilla-gran-poder.jpeg';
import capillaSevillaAerea from '../assets/images/agrupacion/capilla-sevilla-aerea.jpeg';
import presentacionTrajeGala from '../assets/images/agrupacion/presentacion-traje-gala.jpg';
import escudoHermandad from '../assets/images/hermandad/escudo-hermandad.png';
import imagenNazareno from '../assets/images/hermandad/titulares/imagen-nazareno.jpg';
import imagenPiedad from '../assets/images/hermandad/titulares/imagen-piedad.jpg';
import imagenResucitado from '../assets/images/hermandad/titulares/imagen-resucitado.jpg';
import procesionNazareno from '../assets/images/hero/procesion-nazareno.jpg';

export const images = {
  escudoAgrupacion,
  estandarte,
  actoSevilla,
  capillaGranPoder,
  capillaSevillaAerea,
  presentacionTrajeGala,
  escudoHermandad,
  imagenNazareno,
  imagenPiedad,
  imagenResucitado,
  procesionNazareno,
} satisfies Record<string, ImageMetadata>;
