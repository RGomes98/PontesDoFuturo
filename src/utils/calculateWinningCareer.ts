import type { CareerScore, TotalScore } from '@/types/CareerProfiler';
import type { CurrentAnswers } from '@/types/CurrentAnswers';
import { shuffleArray } from './shuffleArray';
import { isScoresTied } from './isScoresTied';

export const calculateWinningCareer = (currentAnswers: CurrentAnswers) => {
  const careersScores = Object.keys(currentAnswers).reduce<CareerScore[]>((careersScores, answerId) => {
    const score = currentAnswers[answerId].scores.map((score) => score);
    careersScores.push(...score);
    return careersScores;
  }, []);

  const careersTotalScores = careersScores.reduce<TotalScore>((careersTotalScores, { career, score }) => {
    if (!careersTotalScores[career]) careersTotalScores[career] = 0;
    careersTotalScores[career] += score;
    return careersTotalScores;
  }, {});

  const winningCareers = Object.keys(careersTotalScores)
    .map((careerKey) => {
      return { [careerKey]: careersTotalScores[careerKey] };
    })
    .sort((scoreA, scoreB) => {
      const careerScoreA = Object.values(scoreA)[0];
      const careerScoreB = Object.values(scoreB)[0];
      return careerScoreB - careerScoreA;
    })
    .reduce<TotalScore[]>((evenScores, score) => {
      if (!evenScores.length || isScoresTied(score, evenScores)) evenScores.push(score);
      return evenScores;
    }, []);

  return Object.keys(shuffleArray(winningCareers)[0])[0];
};
