import type { TotalScore } from '@/types/CareerProfiler';

export const isScoresTied = (currentScore: TotalScore, evenScores: TotalScore[]) => {
  const lastCareerScore = Object.values(evenScores[evenScores.length - 1])[0];
  const currentCareerScore = Object.values(currentScore)[0];
  return lastCareerScore === currentCareerScore;
};
