'use client';

import { cnTheme } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';

export function KpiCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  const { theme } = useTheme();

  return (
    <div
      className={cnTheme(
        'flex flex-col justify-between rounded-lg border p-4 transition',
        'min-h-[92px]',
        theme.card.bg,
        theme.border.base,
        theme.card.shadow,
        theme.card.hover
      )}
    >
      <p className={cnTheme('text-[13px] leading-tight', theme.text.sub)}>
        {label}
      </p>

      <p className={cnTheme('text-xl font-semibold mt-1', theme.text.main)}>
        {value}
      </p>
    </div>
  );
}
