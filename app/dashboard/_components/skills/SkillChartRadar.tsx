'use client';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { useTheme } from '@/context/ThemeContext';
import { mockSkills } from '@/data/skill';

interface SkillChartRadarProps {
  selectedSkill: string | null;
  onSelectSkill: (skill: string) => void;
}

export function SkillChartRadar({
  selectedSkill,
  onSelectSkill,
}: SkillChartRadarProps) {
  const { theme } = useTheme();
  const nameToId: Record<string, string> = Object.fromEntries(
    mockSkills.map((s) => [s.name, s.id])
  );

  const handleClick = (e: any) => {
    if (e?.activeLabel) {
      const id = nameToId[e.activeLabel]; //
      if (id) onSelectSkill(id);
    }
  };

  return (
    <div className='w-full h-80'>
      <ResponsiveContainer>
        <RadarChart data={mockSkills} onClick={handleClick}>
          <PolarGrid stroke='#334155' strokeOpacity={0.6} />

          <PolarAngleAxis
            dataKey='name'
            stroke='#94a3b8'
            tick={{ fontSize: 12 }}
          />

          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            stroke='#475569'
            tick={{ fontSize: 10 }}
          />

          <Radar
            name='Skills'
            dataKey='score'
            stroke='#10b981'
            strokeWidth={3}
            fill='url(#radarGradient)'
            fillOpacity={0.5}
          />

          <defs>
            <linearGradient id='radarGradient' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='#34d399' />
              <stop offset='100%' stopColor='#10b981' />
            </linearGradient>
          </defs>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
