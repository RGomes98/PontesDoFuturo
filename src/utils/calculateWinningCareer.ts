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

  const winningCareer = Object.keys(totalScoresByCareer)
    .map((key) => {
      return { [key]: totalScoresByCareer[key] };
    })
    .sort((a, b) => {
      return Object.values(b)[0] - Object.values(a)[0];
    })
    .reduce<Record<string, number>[]>((b, a) => {
      if (!b.length || Object.values(b[b.length - 1])[0] === Object.values(a)[0]) b.push(a);
      return b;
    }, [])
    .sort(() => Math.random() - 0.5)[0];

  return winningCareer;
};
