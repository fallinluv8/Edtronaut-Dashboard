'use client';

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { mockSkills } from '@/data/skill';

interface SkillChartBarProps {
  selectedSkill: string | null;
  onSelectSkill: (skill: string) => void;
}

const sorted = [...mockSkills].sort((a, b) => b.score - a.score);

export function SkillChartBar({
  selectedSkill,
  onSelectSkill,
}: SkillChartBarProps) {
  return (
    <div className='w-full min-h-[300px] h-72 overflow-hidden rounded-lg'>
      <ResponsiveContainer>
        <BarChart
          data={sorted}
          margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
        >
          <XAxis
            dataKey='name'
            stroke='#64748b'
            tick={{ fontSize: 11 }}
            tickLine={false}
          />
          <YAxis
            domain={[0, 100]}
            stroke='#64748b'
            tick={{ fontSize: 11 }}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: 'rgba(0,0,0,0.06)' }}
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '8px 12px',
              color: '#1e293b',
              boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
            }}
            labelStyle={{
              fontWeight: 600,
              color: '#0f172a',
              marginBottom: 4,
            }}
            itemStyle={{
              fontSize: 12,
            }}
          />
          <Bar dataKey='score' radius={[6, 6, 0, 0]}>
            {sorted.map((skill) => (
              <Cell
                key={skill.id}
                cursor='pointer'
                fill={
                  selectedSkill === skill.id ? '#10b981' : 'url(#barGradient)'
                }
                onClick={() => onSelectSkill(skill.id)}
              />
            ))}
          </Bar>
          <defs>
            <linearGradient id='barGradient' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#34d399' />
              <stop offset='95%' stopColor='#10b981' />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
