'use client';

import { mockDailyActivity } from '@/data/activity';
import { parseISO, getDay } from 'date-fns';
import { cn, cnTheme } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';
import { groupByWeek } from '@/lib/activity';
import { getHeatmapColor } from '@/const/color';

const WEEK_LABELS = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

const DAY_ORDER_MAP: Record<number, number> = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  0: 6,
};

export default function ActivityHeatmap() {
  const { theme } = useTheme();
  const grouped = groupByWeek(mockDailyActivity);

  return (
    <div
      className={cnTheme(
        'p-4 rounded-xl border shadow-sm transition',
        theme.card.bg,
        theme.card.shadow,
        theme.border.base
      )}
    >
      <h2
        className={cnTheme(
          'font-semibold mb-4 text-lg text-center',
          theme.text.header
        )}
      >
        Mức độ hoạt động
      </h2>
      <div className='w-full flex items-start justify-center gap-20'>
        <div className='hidden md:flex items-center justify-center w-32'>
          <img
            src='/edtronaut.png'
            alt='Edtronaut'
            className='w-20 h-20 opacity-80 animate-pulse'
          />
        </div>
        <div className='flex gap-2 items-start'>
          <div className='flex flex-col gap-1'>
            {WEEK_LABELS.map((label) => (
              <div
                key={label}
                className={cnTheme(
                  'text-[10px] h-4 flex items-center justify-center w-6',
                  theme.text.sub
                )}
              >
                {label}
              </div>
            ))}
          </div>
          <div className='flex gap-1 overflow-x-auto pb-2'>
            {Object.values(grouped).map((week, weekIndex) => (
              <div key={weekIndex} className='flex flex-col gap-1'>
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const item = week.find((d) => {
                    const realIndex = DAY_ORDER_MAP[getDay(parseISO(d.date))];
                    return realIndex === dayIndex;
                  });

                  return (
                    <div
                      key={dayIndex}
                      className={cn(
                        'w-4 h-4 rounded-sm transition',
                        getHeatmapColor(item?.minutes ?? 0)
                      )}
                      title={
                        item
                          ? `${item.date} — ${item.minutes} phút`
                          : 'Không học'
                      }
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className='hidden md:flex items-center justify-center w-32'>
          <img
            src='/edtronaut.png'
            alt='Edtronaut'
            className='w-20 h-20 opacity-80 animate-pulse'
          />
        </div>
      </div>
    </div>
  );
}
