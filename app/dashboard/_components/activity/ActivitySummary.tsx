'use client';

import { mockDailyActivity } from '@/data/activity';
import { getActivityStats } from '@/lib/activityStats';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';

export default function ActivitySummary() {
  const stats = getActivityStats(mockDailyActivity);
  const { theme } = useTheme();

  const items = [
    {
      label: 'Tổng phút học',
      value: stats.totalMinutes + ' phút',
    },
    {
      label: 'Ngày học',
      value: stats.activeDays,
    },
    {
      label: 'Streak',
      value: stats.streak + ' ngày',
    },
    {
      label: 'Trung bình/ngày',
      value: stats.avgMinutes + ' phút',
    },
  ];

  return (
    <div
      className={cn(
        'rounded-xl p-4 border shadow-sm grid grid-cols-2 md:grid-cols-4 gap-4',
        theme.card.bg,
        theme.border.base
      )}
    >
      {items.map((item, i) => (
        <div key={i} className='text-center'>
          <p className={cn('text-xs', theme.text.sub)}>{item.label}</p>
          <p className={cn('text-lg font-semibold', theme.text.header)}>
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
