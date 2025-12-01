import { mockSimulations } from '@/data/simulations';

function filterBySkill(skill: string | null) {
  if (!skill) return mockSimulations;
  return mockSimulations.filter((sim) => sim.skills.includes(skill));
}

describe('Simulation filtering logic', () => {
  it('returns all simulations when no skill is selected', () => {
    const result = filterBySkill(null);
    expect(result.length).toBe(mockSimulations.length);
  });

  it("filters simulations correctly by skill 'analysis'", () => {
    const result = filterBySkill('analysis');

    expect(result.every((sim) => sim.skills.includes('analysis'))).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it('returns empty array when no simulation matches the selected skill', () => {
    const result = filterBySkill('non-existing-skill');
    expect(result.length).toBe(0);
  });
});
