'use client';

import { useTheme } from '@/context/ThemeContext';
import { cnTheme } from '@/lib/utils';
import type { Simulation } from '@/data/simulations';
import { useSimulationDetail } from '@/context/SimulationDetailContext';

export function SimulationCard({ sim }: { sim: Simulation }) {
  const { theme } = useTheme();
  const { openDetail } = useSimulationDetail();

  return (
    <div
      onClick={() => openDetail(sim)}
      className={cnTheme(
        'cursor-pointer rounded-lg p-4 transition border active:scale-[0.98]',
        theme.card.bg,
        theme.card.shadow,
        theme.card.hover,
        theme.border.base
      )}
    >
      <h3 className={cnTheme('text-base font-semibold', theme.text.main)}>
        {sim.title}
      </h3>

      <p className={cnTheme('text-sm mt-1', theme.text.sub)}>
        {sim.company} • {sim.role}
      </p>

      <p className={cnTheme('mt-1 text-xs', theme.text.muted)}>
        Độ khó: {sim.difficulty}
      </p>

      <p className={cnTheme('mt-1 text-xs', theme.text.muted)}>
        Lần hoạt động gần nhất: {sim.lastActivity}
      </p>

      <div className={cnTheme('mt-3 h-2 w-full rounded', theme.progress.track)}>
        <div
          className={cnTheme('h-2 rounded transition-all', theme.progress.bar)}
          style={{ width: `${sim.progress}%` }}
        />
      </div>

      <p className={cnTheme('mt-1 text-xs', theme.text.muted)}>
        Tiến độ: {sim.progress}%
      </p>
    </div>
  );
}
