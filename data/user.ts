// src/data/user.ts

export interface User {
  id: string;
  name: string;
  avatar: string;
  startedSimulations: number;
  completedSimulations: number;
  averageScore: number;
  streakDays: number;
  careerActivationRate: number;
}

export const mockUser: User = {
  id: 'u001',
  name: 'Quang Tung',
  avatar: '/Tung.jpg',
  startedSimulations: 5,
  completedSimulations: 3,
  averageScore: 78,
  streakDays: 4,
  careerActivationRate: 68,
};
