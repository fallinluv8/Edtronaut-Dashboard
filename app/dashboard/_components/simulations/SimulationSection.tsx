'use client';

import { useTheme } from '@/context/ThemeContext';
import { cnTheme } from '@/lib/utils';
import type { Simulation } from '@/data/simulations';

import {
  SIMULATION_GROUPS,
  useSimulationFilter,
} from '@/app/dashboard/_hooks/simulations/useSimulationFilter';

import { SimulationGroup } from './SimulationGroup';
import { useSimulationAccordion } from '@/app/dashboard/_hooks/simulations/useSimulationAccordion';

interface Props {
  inProgress: Simulation[];
  completed: Simulation[];
  notStarted: Simulation[];
  selectedSkill: string | null;
  onClearSkill: () => void;
}

export function SimulationSection({
  inProgress,
  completed,
  notStarted,
  selectedSkill,
  onClearSkill,
}: Props) {
  const { theme } = useTheme();
  const { filtered } = useSimulationFilter({
    inProgress,
    completed,
    notStarted,
    selectedSkill,
  });

  const { openGroups, toggle } = useSimulationAccordion();

  return (
    <section
      className={cnTheme(
        'rounded-xl p-4 md:p-6 transition border',
        theme.card.bg,
        theme.card.shadow,
        theme.border.base
      )}
    >
      <div className='mb-4 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <h2 className={cnTheme('text-lg font-semibold', theme.text.header)}>
            Simulation của bạn
          </h2>

          {selectedSkill && (
            <button
              onClick={onClearSkill}
              className='text-xs text-blue-500 underline'
            >
              Xóa lọc ({selectedSkill})
            </button>
          )}
        </div>

        <p className={cnTheme('text-xs', theme.text.sub)}>
          (Đang làm / Hoàn thành / Chưa bắt đầu)
        </p>
      </div>

      <div className='space-y-6'>
        {SIMULATION_GROUPS.map((group) => (
          <SimulationGroup
            key={group.key}
            title={group.title}
            sims={filtered[group.key]}
            isOpen={openGroups[group.key]}
            onToggle={() => toggle(group.key)}
          />
        ))}
      </div>
    </section>
  );
}
