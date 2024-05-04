import type { CareerProfiler } from '@/types/CareerProfiler';
import { shuffleArray } from '@/utils/shuffleArray';
import { type ScoresKeys, scores } from './scores';
import { statements } from './statements';
import { opinions } from './opinions';

const careerProfilerData: CareerProfiler = statements.map((statement, questionIndex) => {
  const answers = opinions.map((opinion, opinionIndex) => {
    const careerScores = (Object.keys(scores) as ScoresKeys).map((career) => ({
      career,
      score: scores[career][questionIndex][opinionIndex],
    }));
    return { opinion, careerScores };
  });
  return { answers, statement, id: crypto.randomUUID() };
});

export const careerProfiler = shuffleArray(careerProfilerData);
