'use client';

import { useSimulationDetail } from '@/context/SimulationDetailContext';
import { cnTheme } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';
import { X } from 'lucide-react';

export function SimulationDetailPanel() {
  const { selected, closeDetail } = useSimulationDetail();
  const { theme } = useTheme();

  const isOpen = !!selected;

  return (
    <>
      {isOpen && (
        <div
          onClick={closeDetail}
          className='fixed inset-0 bg-black/40 z-40 animate-fade'
        />
      )}
      <div
        className={cnTheme(
          'fixed top-0 right-0 h-full w-[360px] max-w-full z-50 transform transition-transform duration-300 border-l',
          theme.card.bg,
          theme.border.base,
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className='flex items-center justify-between p-4 border-b'>
          <h2 className={cnTheme('text-lg font-semibold', theme.text.header)}>
            Chi tiết Simulation
          </h2>

          <button
            onClick={closeDetail}
            className={cnTheme(
              'p-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700 transition',
              theme.text.main
            )}
          >
            <X size={20} />
          </button>
        </div>
        {!selected ? (
          <p className='p-4 text-sm text-gray-500'>Không có dữ liệu.</p>
        ) : (
          <div className='p-4 space-y-4'>
            <h3 className={cnTheme('text-xl font-bold', theme.text.main)}>
              {selected.title}
            </h3>
            <p className={cnTheme('text-sm', theme.text.sub)}>
              {selected.company} • {selected.role}
            </p>

            <p className={cnTheme('text-sm', theme.text.muted)}>
              Độ khó: {selected.difficulty}
            </p>

            <p className={cnTheme('text-sm', theme.text.muted)}>
              Lần hoạt động gần nhất: {selected.lastActivity}
            </p>

            <div>
              <p className={cnTheme('text-sm mb-1', theme.text.sub)}>Tiến độ</p>
              <div
                className={cnTheme('h-2 rounded w-full', theme.progress.track)}
              >
                <div
                  className={cnTheme('h-2 rounded', theme.progress.bar)}
                  style={{ width: `${selected.progress}%` }}
                />
              </div>
              <p className={cnTheme('text-xs mt-1', theme.text.muted)}>
                {selected.progress}%
              </p>
            </div>

            <button
              className={cnTheme(
                'w-full mt-4 py-2 rounded-lg text-sm font-medium transition',
                theme.button.main
              )}
            >
              Tiếp tục mô phỏng
            </button>
          </div>
        )}
      </div>
    </>
  );
}
