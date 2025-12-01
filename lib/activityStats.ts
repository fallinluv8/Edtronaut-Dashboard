import { parseISO, differenceInDays, isSameDay } from 'date-fns';
import type { DailyActivity } from '@/data/activity';

export function getActivityStats(data: DailyActivity[]) {
  if (!data.length) {
    return {
      totalMinutes: 0,
      activeDays: 0,
      streak: 0,
      avgMinutes: 0,
      lastActive: null,
    };
  }

  let totalMinutes = 0;
  let activeDays = 0;

  const sorted = [...data].sort(
    (a, b) => parseISO(b.date).getTime() - parseISO(a.date).getTime()
  );

  const today = new Date();
  let streak = 0;

  sorted.forEach((item) => {
    totalMinutes += item.minutes;
    if (item.minutes > 0) activeDays++;
  });

  for (let i = 0; i < sorted.length; i++) {
    const date = parseISO(sorted[i].date);
    const diff = differenceInDays(today, date);

    if (diff === streak && sorted[i].minutes > 0) {
      streak++;
    } else if (diff > streak) {
      break;
    }
  }

  const avgMinutes = Math.round(totalMinutes / activeDays);

  return {
    totalMinutes,
    activeDays,
    streak,
    avgMinutes,
    lastActive: sorted[0].date,
  };
}
