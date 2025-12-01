export type SimulationStatus = 'in-progress' | 'completed' | 'not-started';

export interface Simulation {
  id: string;
  title: string;
  company: string;
  role: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  lastActivity: string;
  progress: number;
  status: SimulationStatus;
  skills: string[];
}

export const mockSimulations: Simulation[] = [
  {
    id: 'sim001',
    title: 'AI Product Manager Simulation',
    company: 'OpenAI',
    role: 'AI Product Manager',
    difficulty: 'Intermediate',
    lastActivity: '2025-02-20',
    progress: 70,
    status: 'in-progress',
    skills: ['data', 'communication', 'analysis'],
  },
  {
    id: 'sim002',
    title: 'Marketing Campaign Simulation',
    company: 'Shopee',
    role: 'Digital Marketing Executive',
    difficulty: 'Beginner',
    lastActivity: '2025-02-18',
    progress: 100,
    status: 'completed',
    skills: ['marketing', 'communication'],
  },
  {
    id: 'sim003',
    title: 'Data Analyst Simulation',
    company: 'Grab',
    role: 'Data Analyst',
    difficulty: 'Intermediate',
    lastActivity: '2025-02-10',
    progress: 0,
    status: 'not-started',
    skills: ['data', 'analysis'],
  },
];
