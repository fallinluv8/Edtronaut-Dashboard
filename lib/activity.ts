import { parseISO, format } from 'date-fns';
import type { DailyActivity } from '@/data/activity';

export function groupByWeek(data: DailyActivity[]) {
  const weeks: Record<number, DailyActivity[]> = {};

  data.forEach((item) => {
    const date = parseISO(item.date);
    const week = parseInt(format(date, 'I')); // tuần ISO

    if (!weeks[week]) weeks[week] = [];
    weeks[week].push(item);
  });

  return weeks;
}
