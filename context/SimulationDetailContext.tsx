'use client';

import { createContext, useContext, useState } from 'react';
import type { Simulation } from '@/data/simulations';

interface SimulationDetailContextType {
  selected: Simulation | null;
  openDetail: (sim: Simulation) => void;
  closeDetail: () => void;
}

const SimulationDetailContext = createContext<
  SimulationDetailContextType | undefined
>(undefined);

export function SimulationDetailProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selected, setSelected] = useState<Simulation | null>(null);

  const openDetail = (sim: Simulation) => setSelected(sim);
  const closeDetail = () => setSelected(null);

  return (
    <SimulationDetailContext.Provider
      value={{ selected, openDetail, closeDetail }}
    >
      {children}
    </SimulationDetailContext.Provider>
  );
}

export function useSimulationDetail() {
  const context = useContext(SimulationDetailContext);
  if (!context) {
    throw new Error(
      'useSimulationDetail must be used inside SimulationDetailProvider'
    );
  }
  return context;
}
