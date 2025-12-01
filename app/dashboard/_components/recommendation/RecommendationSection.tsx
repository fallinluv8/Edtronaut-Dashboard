'use client';

import { useTheme } from '@/context/ThemeContext';
import { cnTheme } from '@/lib/utils';

import { RecommendationCard } from './RecommendationCard';
import { useRecommendations } from '@/app/dashboard/_hooks/recommend/useRecommendations';

export function RecommendationSection() {
  const { theme } = useTheme();
  const { weakestSkill, recommendations } = useRecommendations();

  return (
    <aside
      className={cnTheme(
        'rounded-xl p-4 md:p-6 transition border h-fit',
        theme.card.bg,
        theme.card.shadow,
        theme.border.base
      )}
    >
      <h2 className={cnTheme('mb-2 text-lg font-semibold', theme.text.header)}>
        Gợi ý bước tiếp theo
      </h2>

      {weakestSkill && (
        <p className={cnTheme('mb-4 text-xs', theme.text.sub)}>
          Dựa trên kỹ năng yếu nhất của bạn:
          <span className='font-medium text-emerald-500 ml-1'>
            {weakestSkill.name}
          </span>
        </p>
      )}

      <div className='space-y-3'>
        {recommendations.length > 0 ? (
          recommendations.map((rec) => (
            <RecommendationCard key={rec.id} rec={rec} />
          ))
        ) : (
          <p className={cnTheme('text-xs', theme.text.sub)}>
            Không có gợi ý nào phù hợp.
          </p>
        )}
      </div>
    </aside>
  );
}
