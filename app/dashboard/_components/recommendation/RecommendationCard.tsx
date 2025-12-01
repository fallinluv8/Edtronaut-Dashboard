'use client';

import { cnTheme } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';

export interface RecommendationItem {
  id: string;
  title: string;
  description: string;
  type: 'job' | 'simulation';
  reason?: string;
}
export function RecommendationCard({ rec }: { rec: RecommendationItem }) {
  const { theme } = useTheme();

  const badgeStyle =
    rec.type === 'job'
      ? 'bg-blue-500/15 text-blue-700 dark:text-blue-300'
      : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300';

  return (
    <div
      role='button'
      className={cnTheme(
        'rounded-lg p-3 border transition cursor-pointer',
        'hover:shadow-sm hover:-translate-y-0.5',
        theme.card.bg,
        theme.card.shadow,
        theme.card.hover,
        theme.border.base
      )}
    >
      <p className={cnTheme('text-sm font-semibold', theme.text.main)}>
        {rec.title}
      </p>
      <p className={cnTheme('text-xs mt-1', theme.text.sub)}>
        {rec.description}
      </p>
      {rec.reason && (
        <p
          className={cnTheme(
            'text-[11px] mt-1 italic leading-snug',
            theme.text.muted
          )}
        >
          Vì sao gợi ý: {rec.reason}
        </p>
      )}
      <span
        className={cnTheme(
          'inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full font-medium',
          badgeStyle
        )}
      >
        {rec.type === 'job' ? 'Công việc' : 'Mô phỏng'}
      </span>
    </div>
  );
}
