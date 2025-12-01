import { useState } from 'react';

export function useSimulationAccordion() {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    inProgress: true,
    completed: false,
    notStarted: false,
  });

  const toggle = (key: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return { openGroups, toggle };
}
