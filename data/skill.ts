export interface Skill {
  id: string;
  name: string;
  score: number;
}

export const mockSkills: Skill[] = [
  { id: 'data', name: 'Data Analysis', score: 65 },
  { id: 'communication', name: 'Communication', score: 80 },
  { id: 'analysis', name: 'Problem Solving', score: 55 },
  { id: 'marketing', name: 'Marketing Knowledge', score: 30 },
];
