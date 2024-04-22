import type { CurrentAnswers } from '@/types/CurrentAnswers';
import type { CareerScore } from '@/types/Questions';

export const calculateWinningCareer = (currentAnswers: CurrentAnswers) => {
  const careerScores = Object.keys(currentAnswers).reduce<CareerScore[]>((arr, id) => {
    const scores = currentAnswers[id].scores.map((score) => score);
    arr.push(...scores);
    return arr;
  }, []);

  const totalScoresByCareer = careerScores.reduce<Record<string, number>>((obj, { career, score }) => {
    if (!obj[career]) obj[career] = 0;
    obj[career] += score;
    return obj;
  }, {});

  const winningCareer = Object.keys(totalScoresByCareer).reduce<{ career: string; score: number }>(
    (winningCareer, career) => {
      if (winningCareer.score < totalScoresByCareer[career]) {
        winningCareer.career = career;
        winningCareer.score = totalScoresByCareer[career];
      }
      return winningCareer;
    },
    { career: '', score: 0 }
  );

  return winningCareer;
};
