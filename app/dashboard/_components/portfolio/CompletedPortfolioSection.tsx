'use client';

import { cnTheme } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';
import type { Simulation } from '@/data/simulations';
import { useToast } from '@/components/ui/ToastProvider';

interface Props {
  completed: Simulation[];
}

export function CompletedPortfolioSection({ completed }: Props) {
  const { theme, themeName } = useTheme();
  const { showToast } = useToast();

  const handleDownload = (title: string) => {
    showToast(`Đã tải chứng chỉ: ${title}`, 'success');
  };

  const handleShare = (title: string) => {
    showToast(`Đã chia sẻ lên LinkedIn: ${title}`, 'success');
  };

  return (
    <section
      className={cnTheme(
        'rounded-xl p-4 md:p-6 transition border',
        theme.card.bg,
        theme.card.shadow,
        theme.border.base
      )}
    >
      <h2 className={cnTheme('text-lg font-semibold mb-4', theme.text.header)}>
        Portfolio của bạn
      </h2>

      {completed.length === 0 ? (
        <p className={cnTheme('text-xs', theme.text.sub)}>
          Bạn chưa hoàn thành mô phỏng nào.
        </p>
      ) : (
        <div className='space-y-4'>
          {completed.map((sim) => (
            <div
              key={sim.id}
              className={cnTheme(
                'p-3 rounded-lg border flex items-center justify-between',
                theme.card.bg,
                theme.card.shadow,
                theme.card.hover,
                theme.border.base
              )}
            >
              <div>
                <p
                  className={cnTheme('text-sm font-semibold', theme.text.main)}
                >
                  {sim.title}
                </p>
                <p className={cnTheme('text-xs mt-1', theme.text.sub)}>
                  {sim.company} • {sim.role}
                </p>
              </div>

              <div className='flex gap-2'>
                <button
                  onClick={() => handleDownload(sim.title)}
                  className={cnTheme(
                    'text-xs px-3 py-1 rounded transition',
                    themeName === 'dark'
                      ? 'bg-slate-700 text-white hover:bg-slate-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  )}
                >
                  Tải chứng chỉ
                </button>

                <button
                  onClick={() => handleShare(sim.title)}
                  className={cnTheme(
                    'text-xs px-3 py-1 rounded transition',
                    'bg-blue-500 text-white hover:bg-blue-600'
                  )}
                >
                  Chia sẻ LinkedIn
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
