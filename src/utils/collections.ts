import { events, type EventItem } from '../data/events';
import { news, type NewsItem } from '../data/news';
import { isUpcoming } from './dates';

export const sortedNews = (): NewsItem[] =>
  [...news].sort((a, b) => b.date.localeCompare(a.date));

export function splitEvents(today = new Date()) {
  const upcoming = events
    .filter((e) => isUpcoming(e.date, today))
    .sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return a.date.localeCompare(b.date);
    });
  const past = events
    .filter((e) => !isUpcoming(e.date, today))
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
  return { upcoming, past } satisfies Record<string, EventItem[]>;
}
