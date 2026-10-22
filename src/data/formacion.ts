import type { ImageMetadata } from 'astro';
import { instrumentos } from './images';

export interface Instrumento {
  nombre: string;
  plural: string;
  image: ImageMetadata;
  /** Golpeador que anima el instrumento al pasar el cursor. */
  golpeador?: 'palillos' | 'maza';
  /** Instrumento con el que comparte leyenda y filtro (misma familia, otra imagen). */
  grupo?: string;
  /** El instrumento vibra al pasar el cursor (platillos). */
  vibra?: boolean;
}

export interface Integrante {
  nombre: string;
  instrumento: InstrumentoId;
}

export const instrumentosFormacion = {
  bombo: { nombre: 'Bombo', plural: 'Bombos', image: instrumentos.bombo, golpeador: 'maza' },
  caja: { nombre: 'Caja', plural: 'Cajas', image: instrumentos.caja, golpeador: 'palillos' },
  tambor: { nombre: 'Tambor', plural: 'Tambores', image: instrumentos.tambor, golpeador: 'palillos' },
  platillos: { nombre: 'Platillos', plural: 'Platillos', image: instrumentos.platillos, vibra: true },
  corneta: { nombre: 'Corneta', plural: 'Cornetas', image: instrumentos.corneta },
  cornetaPlata: { nombre: 'Corneta', plural: 'Cornetas', image: instrumentos.cornetaPlata, grupo: 'corneta' },
  tuba: { nombre: 'Tuba', plural: 'Tubas', image: instrumentos.tuba },
  trombon: { nombre: 'Trombón de varas', plural: 'Trombones de varas', image: instrumentos.trombon },
  trombonPistones: { nombre: 'Trombón de pistones', plural: 'Trombones de pistones', image: instrumentos.trombonPistones },
  cornetaPistones: { nombre: 'Corneta de pistones', plural: 'Cornetas de pistones', image: instrumentos.cornetaPistones },
  fliscorno: { nombre: 'Fliscorno', plural: 'Fliscornos', image: instrumentos.fliscorno },
  trompeta: { nombre: 'Trompeta', plural: 'Trompetas', image: instrumentos.trompeta },
  director: { nombre: 'Director musical', plural: 'Dirección', image: instrumentos.director },
} satisfies Record<string, Instrumento>;

export type InstrumentoId = keyof typeof instrumentosFormacion;

const de = (instrumento: InstrumentoId, ...nombres: string[]): Integrante[] =>
  nombres.map((nombre) => ({ nombre, instrumento }));

export interface Seccion {
  nombre: string;
  filas: Integrante[][];
  /** Se muestra sobre un atril individual en lugar de una grada completa. */
  atril?: boolean;
}

/** Formación actual (basada en src/docs/Formación Certamen 2026.pdf), por secciones y de delante hacia atrás. */
export const formacion: Seccion[] = [
  { nombre: 'Dirección', atril: true, filas: [de('director', 'Jesús Ángel')] },
  {
    nombre: 'Trompetas',
    filas: [
      de('trompeta', 'Marcos', 'Emmanuel', 'Carlos', 'Adrián', 'Juan Antonio', 'Alex', 'Marina C.', 'Evami', 'Marina A.'),
      de('trompeta', 'Luismi', 'Maite', 'Carmen', 'Lucía', 'Ainoa', 'Adolfo', 'María', 'Vera', 'Marta', 'Nazaret', 'Ana'),
    ],
  },
  {
    nombre: 'Armonía',
    filas: [
      [
        ...de('cornetaPistones', 'Pedrín', 'Manolín', 'Alejo', 'Pedro L.'),
        ...de('fliscorno', 'Enrique', 'Elsa', 'Olga', 'Alvaro', 'Mª José', 'Rosa'),
      ],
    ],
  },
  {
    nombre: 'Bajos',
    filas: [
      [
        ...de('tuba', 'Antonio'),
        ...de('trombon', 'Iván', 'J. Carlos', 'Pablo'),
        ...de('trombonPistones', 'Zaida', 'Abraham', 'Carmelo', 'Nacho'),
      ],
    ],
  },
  {
    nombre: 'Cornetas',
    filas: [
      [
        ...de('corneta', 'Alberto', 'Jesús', 'Manuel A.'),
        ...de('cornetaPlata', 'Rafa', 'Daniel', 'Sergio'),
        ...de('corneta', 'Hugo', 'Miguel', 'Manuel'),
      ],
    ],
  },
  {
    nombre: 'Percusión',
    filas: [
      [...de('tambor', 'Prisci', 'María M.'), ...de('platillos', 'Felipe'), ...de('caja', 'Antonio', 'Pedro Jr.')],
      de('tambor', 'Mani', 'Mani Jr.', 'Manuel', 'Ariadna', 'Álvaro', 'José Luis', 'Iván', 'Jesús Alc.'),
      de('bombo', 'Luis A.', 'Samuel', 'Juan Antonio'),
    ],
  },
];
