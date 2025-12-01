import type { Simulation } from '@/data/simulations';

export const SIMULATION_GROUPS = [
  { title: 'Đang làm', key: 'inProgress' },
  { title: 'Đã hoàn thành', key: 'completed' },
  { title: 'Chưa bắt đầu', key: 'notStarted' },
] as const;

type GroupKey = (typeof SIMULATION_GROUPS)[number]['key'];

interface UseSimulationFilterProps {
  inProgress: Simulation[];
  completed: Simulation[];
  notStarted: Simulation[];
  selectedSkill: string | null;
}

export function useSimulationFilter({
  inProgress,
  completed,
  notStarted,
  selectedSkill,
}: UseSimulationFilterProps) {
  const dataMap: Record<GroupKey, Simulation[]> = {
    inProgress,
    completed,
    notStarted,
  };

  const applyFilter = (items: Simulation[]) =>
    selectedSkill
      ? items.filter((s) => s.skills.includes(selectedSkill))
      : items;

  const filtered = {
    inProgress: applyFilter(dataMap.inProgress),
    completed: applyFilter(dataMap.completed),
    notStarted: applyFilter(dataMap.notStarted),
  };

  return { filtered };
}
