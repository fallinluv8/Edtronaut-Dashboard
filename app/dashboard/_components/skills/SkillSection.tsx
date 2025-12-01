'use client';

import { useTheme } from '@/context/ThemeContext';
import { cnTheme } from '@/lib/utils';
import { SkillChartRadar } from './SkillChartRadar';
import { SkillChartBar } from './SkillChartBar';
import { useState } from 'react';

const TABS = [
  { key: 'radar', label: 'Biểu đồ Radar' },
  { key: 'bar', label: 'Biểu đồ Cột' },
] as const;
interface SkillSectionProps {
  selectedSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
}
export function SkillSection({
  selectedSkill,
  onSelectSkill,
}: SkillSectionProps) {
  const { theme } = useTheme();
  const [tab, setTab] = useState<'radar' | 'bar'>('radar');
  return (
    <section
      className={cnTheme(
        'rounded-xl p-4 md:p-6 transition border',
        theme.card.bg,
        theme.card.shadow,
        theme.border.base
      )}
    >
      <div className='mb-4 flex items-center justify-between gap-2'>
        <h2 className={cnTheme('text-lg font-semibold', theme.text.header)}>
          Kỹ năng đã tích lũy
        </h2>
        {selectedSkill && (
          <button
            onClick={() => onSelectSkill(null)}
            className={cnTheme(
              'text-xs underline font-medium cursor-pointer',
              theme.text.sub,
              'hover:opacity-80'
            )}
          >
            Bỏ lọc ({selectedSkill})
          </button>
        )}
      </div>
      <div className='flex gap-2 mb-4'>
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={cnTheme(
              'px-3 py-1 rounded-lg text-xs font-medium transition border whitespace-nowrap',
              tab === t.key
                ? 'bg-emerald-500 text-white border-emerald-600'
                : `${theme.bg.soft} ${theme.border.base} ${theme.text.sub} hover:opacity-80`
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tab === 'radar' ? (
        <SkillChartRadar
          selectedSkill={selectedSkill}
          onSelectSkill={onSelectSkill}
        />
      ) : (
        <SkillChartBar
          selectedSkill={selectedSkill}
          onSelectSkill={onSelectSkill}
        />
      )}
    </section>
  );
}
