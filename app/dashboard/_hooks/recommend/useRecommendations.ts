import { mockSkills } from '@/data/skill';
import { mockSimulations } from '@/data/simulations';
import { mockRecommendations } from '@/data/recommendations';
import type { RecommendationItem } from '@/app/dashboard/_components/recommendation/RecommendationCard';

export function useRecommendations() {
  const weakestSkill = mockSkills.reduce((min, s) =>
    s.score < min.score ? s : min
  );

  const relatedSimulations = mockSimulations.filter((sim) =>
    sim.skills.includes(weakestSkill.id)
  );

  const relatedExtra = mockRecommendations.filter(
    (rec) => Array.isArray(rec.skills) && rec.skills.includes(weakestSkill.id)
  );

  const simItems: RecommendationItem[] = relatedSimulations.map((sim) => ({
    id: `sim-${sim.id}`,
    title: sim.title,
    description: `${sim.company} • ${sim.role}`,
    type: 'simulation',
    reason: `Giúp bạn tăng cường kỹ năng ${weakestSkill.name}.`,
  }));

  const extraItems: RecommendationItem[] = relatedExtra.map((rec) => ({
    id: `extra-${rec.id}`,
    title: rec.title,
    description: rec.description,
    type: rec.type,
    reason:
      rec.type === 'job'
        ? `Công việc yêu cầu kỹ năng ${weakestSkill.name}.`
        : `Mô phỏng giúp cải thiện ${weakestSkill.name}.`,
  }));

  const combined = [...simItems, ...extraItems].slice(0, 5);

  return {
    weakestSkill,
    recommendations: combined,
  };
}
