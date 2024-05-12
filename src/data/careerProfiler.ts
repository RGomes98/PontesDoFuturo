import type { Career, CareerProfiler } from '@/types/CareerProfiler';
import { shuffleArray } from '@/utils/shuffleArray';
import { statements } from './statements';
import { opinions } from './opinions';
import { scores } from './scores';

const careerProfilerData: CareerProfiler = statements.map((statement, statementIndex) => {
  const answers = opinions.map((opinion, opinionIndex) => {
    const careerScores = (Object.keys(scores) as Career[]).map((career) => ({
      career,
      score: scores[career][statementIndex][opinionIndex],
    }));
    return { opinion, careerScores };
  });
  return { answers, statement, id: crypto.randomUUID() };
});

export const careerProfiler = shuffleArray(careerProfilerData);
