export interface EventItem {
  id: string;
  title: string;
  /** Fecha ISO (AAAA-MM-DD). `null` si aún no está confirmada. */
  date: string | null;
  place: string;
  description: string;
  /** `true` para contenido de ejemplo que debe sustituirse por información real. */
  provisional?: boolean;
}

/** Para añadir un evento basta con agregar un elemento a esta lista. */
export const events: EventItem[] = [
  {
    id: 'estacion-de-penitencia',
    title: 'Estación de penitencia de Semana Santa',
    date: null,
    place: '[Pendiente: itinerario y lugar de salida]',
    description:
      '[Pendiente: confirmar fecha, horario y descripción del acto antes de publicar.]',
    provisional: true,
  },
  {
    id: 'concierto-de-ejemplo',
    title: 'Concierto de la agrupación musical',
    date: null,
    place: '[Pendiente: lugar]',
    description:
      '[Pendiente: evento de ejemplo para comprobar el diseño. Sustituir por la actividad real.]',
    provisional: true,
  },
  {
    id: 'presentacion-nuevos-uniformes',
    title: 'Presentación de nuevos uniformes',
    date: '2023-03-10',
    place: '[Pendiente: lugar]',
    description: 'Presentación de los nuevos uniformes de la Agrupación Musical.',
  },
];
