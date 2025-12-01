'use client';

import { cnTheme } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';
import { SimulationCard } from './SimulationCard';
import type { Simulation } from '@/data/simulations';

interface Props {
  title: string;
  sims: Simulation[];
  isOpen: boolean;
  onToggle: () => void;
}

export function SimulationGroup({ title, sims, isOpen, onToggle }: Props) {
  const { theme, themeName } = useTheme();
  const count = sims.length;

  return (
    <div>
      <button
        className='flex items-center justify-between w-full mb-2'
        onClick={onToggle}
      >
        <div className='flex items-center gap-2'>
          <h3
            className={cnTheme(
              'text-sm font-semibold',
              themeName === 'dark' ? 'text-emerald-300' : 'text-emerald-600'
            )}
          >
            {title}
          </h3>

          <span
            className={cnTheme(
              'text-xs px-2 py-px rounded-full',
              themeName === 'dark'
                ? 'bg-slate-700 text-slate-300'
                : 'bg-gray-200 text-gray-700'
            )}
          >
            {count}
          </span>
        </div>

        <span
          className={cnTheme(
            'text-lg select-none transition-transform',
            theme.text.sub,
            isOpen ? 'rotate-90' : ''
          )}
        >
          ›
        </span>
      </button>

      {isOpen && (
        <>
          {count === 0 ? (
            <p className={cnTheme('text-xs', theme.text.muted)}>
              Không có simulation nào.
            </p>
          ) : (
            <div className='space-y-3'>
              {sims.map((sim) => (
                <SimulationCard key={sim.id} sim={sim} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
