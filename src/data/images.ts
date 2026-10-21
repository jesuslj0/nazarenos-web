import type { ImageMetadata } from 'astro';

import escudoAgrupacion from '../assets/images/agrupacion/escudo-agrupacion.jpeg';
import estandarte from '../assets/images/agrupacion/estandarte.jpeg';
import actoCampoCriptana from '../assets/images/agrupacion/acto-campo-criptana.jpeg';
import actoCampoCriptana2 from '../assets/images/agrupacion/acto-campo-criptana2.jpeg';
import actoSevilla from '../assets/images/agrupacion/acto-sevilla.jpeg';
import capillaGranPoder from '../assets/images/agrupacion/capilla-gran-poder.jpeg';
import capillaSevillaAerea from '../assets/images/agrupacion/capilla-sevilla-aerea.jpeg';
import presentacionTrajeGala from '../assets/images/agrupacion/presentacion-traje-gala.jpg';
import instrumentoBombo from '../assets/images/agrupacion/formacion/bombo.png';
import instrumentoCaja from '../assets/images/agrupacion/formacion/caja.png';
import instrumentoTambor from '../assets/images/agrupacion/formacion/tambor.png';
import instrumentoPlatillos from '../assets/images/agrupacion/formacion/platillos.png';
import instrumentoCorneta from '../assets/images/agrupacion/formacion/corneta.png';
import instrumentoCornetaPistones from '../assets/images/agrupacion/formacion/corneta-pistones.png';
import instrumentoCornetaPlata from '../assets/images/agrupacion/formacion/corneta-plata.png';
import instrumentoFliscorno from '../assets/images/agrupacion/formacion/fliscorno.png';
import instrumentoDirector from '../assets/images/agrupacion/formacion/director-musical.png';
import golpeadorMaza from '../assets/images/agrupacion/formacion/maza.png';
import golpeadorPalillo from '../assets/images/agrupacion/formacion/palillo.png';
import instrumentoTuba from '../assets/images/agrupacion/formacion/tuba.png';
import instrumentoTrombon from '../assets/images/agrupacion/formacion/trombon.png';
import instrumentoTrombonPistones from '../assets/images/agrupacion/formacion/trombon-pistones.png';
import instrumentoTrompeta from '../assets/images/agrupacion/formacion/trompeta.png';
import conciertoValencia from '../assets/images/hermandad/concierto-valencia.jpeg';
import costaleros from '../assets/images/hermandad/costaleros.jpeg';
import domingoRamosTorredonjimeno from '../assets/images/hermandad/domingo-ramos-torredonjimeno.jpeg';
import escudoHermandad from '../assets/images/hermandad/escudo-hermandad.png';
import fotoComidaCordero from '../assets/images/hermandad/foto-comida-cordero.jpeg';
import fotoFamilia from '../assets/images/hermandad/foto-familia.jpeg';
import llegadaPlazaProcesion from '../assets/images/hermandad/llegada-plaza-procesion.jpeg';
import pasoDesdeAbajo from '../assets/images/hermandad/paso-desde-abajo.jpeg';
import procesionCalleMayor from '../assets/images/hermandad/procesion-calle-mayor.jpeg';
import imagenNazareno from '../assets/images/hermandad/titulares/imagen-nazareno.jpg';
import imagenPiedad from '../assets/images/hermandad/titulares/imagen-piedad.jpg';
import imagenPiedad2 from '../assets/images/hermandad/titulares/imagen-piedad2.jpeg';
import imagenResucitado from '../assets/images/hermandad/titulares/imagen-resucitado.jpg';
import procesionNazareno from '../assets/images/hero/procesion-nazareno.jpg';

export const images = {
  escudoAgrupacion,
  estandarte,
  actoCampoCriptana,
  actoCampoCriptana2,
  actoSevilla,
  capillaGranPoder,
  capillaSevillaAerea,
  presentacionTrajeGala,
  conciertoValencia,
  costaleros,
  domingoRamosTorredonjimeno,
  escudoHermandad,
  fotoComidaCordero,
  fotoFamilia,
  llegadaPlazaProcesion,
  pasoDesdeAbajo,
  procesionCalleMayor,
  imagenNazareno,
  imagenPiedad,
  imagenPiedad2,
  imagenResucitado,
  procesionNazareno,
} satisfies Record<string, ImageMetadata>;

export const instrumentos = {
  bombo: instrumentoBombo,
  caja: instrumentoCaja,
  tambor: instrumentoTambor,
  platillos: instrumentoPlatillos,
  corneta: instrumentoCorneta,
  cornetaPlata: instrumentoCornetaPlata,
  cornetaPistones: instrumentoCornetaPistones,
  fliscorno: instrumentoFliscorno,
  tuba: instrumentoTuba,
  director: instrumentoDirector,
  palillo: golpeadorPalillo,
  maza: golpeadorMaza,
  trombon: instrumentoTrombon,
  trombonPistones: instrumentoTrombonPistones,
  trompeta: instrumentoTrompeta,
} satisfies Record<string, ImageMetadata>;
