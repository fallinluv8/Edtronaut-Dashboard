import { useRecommendations } from '@/app/dashboard/_hooks/recommend/useRecommendations';
import { mockSkills } from '@/data/skill';
import { mockSimulations } from '@/data/simulations';

describe('useRecommendations', () => {
  it('finds the weakest skill correctly', () => {
    const { weakestSkill } = useRecommendations();

    const expected = mockSkills.reduce((min, s) =>
      s.score < min.score ? s : min
    );

    expect(weakestSkill.id).toBe(expected.id);
    expect(weakestSkill.score).toBe(expected.score);
  });

  it('returns recommendations related to the weakest skill', () => {
    const { weakestSkill, recommendations } = useRecommendations();

    expect(
      recommendations.every((r) => {
        const sim = mockSimulations.find((s) => s.id === r.id);
        return sim?.skills.includes(weakestSkill.id);
      })
    ).toBe(true);
  });

  it('limits recommendations to maximum 3 results', () => {
    const { recommendations } = useRecommendations();
    expect(recommendations.length).toBeLessThanOrEqual(3);
  });
});
