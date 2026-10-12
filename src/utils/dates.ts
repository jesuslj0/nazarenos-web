const formatter = new Intl.DateTimeFormat('es-ES', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

const parts = new Intl.DateTimeFormat('es-ES', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

const toDate = (iso: string) => new Date(`${iso}T00:00:00Z`);

export const formatDate = (iso: string) => formatter.format(toDate(iso));

export function dateParts(iso: string) {
  const map = Object.fromEntries(
    parts.formatToParts(toDate(iso)).map((p) => [p.type, p.value]),
  );
  return { day: map.day, month: map.month.replace('.', ''), year: map.year };
}

/** Un evento sin fecha confirmada se considera próximo. */
export function isUpcoming(iso: string | null, today = new Date()) {
  if (!iso) return true;
  return toDate(iso).getTime() >= Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
}
