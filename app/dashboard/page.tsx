'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { cnTheme } from '@/lib/utils';

import { mockSimulations } from '@/data/simulations';

import { HeaderSnapshot } from './_components/header/HeaderSnapshot';
import { SimulationSection } from './_components/simulations/SimulationSection';
import { SkillSection } from './_components/skills/SkillSection';
import { RecommendationSection } from './_components/recommendation/RecommendationSection';
import ActivitySummary from './_components/activity/ActivitySummary';
import ActivityHeatmap from './_components/activity/ActivityHeatmap';

import { CompletedPortfolioSection } from './_components/portfolio/CompletedPortfolioSection';
import { SimulationDetailPanel } from './_components/simulations/SimulationDetailPanel';

export default function DashboardPage() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const { theme } = useTheme();

  const inProgress = mockSimulations.filter(
    (s) =>
      s.status === 'in-progress' &&
      (selectedSkill ? s.skills.includes(selectedSkill) : true)
  );

  const completed = mockSimulations.filter(
    (s) =>
      s.status === 'completed' &&
      (selectedSkill ? s.skills.includes(selectedSkill) : true)
  );

  const notStarted = mockSimulations.filter(
    (s) =>
      s.status === 'not-started' &&
      (selectedSkill ? s.skills.includes(selectedSkill) : true)
  );
  return (
    <main
      className={cnTheme(
        'min-h-screen transition-colors duration-300',
        theme.bg.main,
        theme.text.main
      )}
    >
      <div
        className={cnTheme(
          'mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 py-8 lg:px-8',
          theme.text.main
        )}
      >
        <HeaderSnapshot />
        <div className='grid flex-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]'>
          <div
            className='flex flex-col gap-6 overflow-y-auto pr-2'
            style={{ height: 'calc(100vh - 140px)' }}
          >
            <ActivitySummary />
            <ActivityHeatmap />

            <SimulationSection
              inProgress={inProgress}
              completed={completed}
              notStarted={notStarted}
              selectedSkill={selectedSkill}
              onClearSkill={() => setSelectedSkill(null)}
            />

            <SkillSection
              selectedSkill={selectedSkill}
              onSelectSkill={(skill) =>
                setSelectedSkill(skill === selectedSkill ? null : skill)
              }
            />
            <CompletedPortfolioSection completed={completed} />
          </div>
          <div className='h-fit sticky top-4'>
            <RecommendationSection />
          </div>
        </div>
        <SimulationDetailPanel />
      </div>
    </main>
  );
}
