import type { CareerScore, TotalScore } from '@/types/CareerProfiler';
import type { CurrentAnswers } from '@/types/CurrentAnswers';
import { shuffleArray } from './shuffleArray';

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
      return careerScoreA - careerScoreB;
    })
    .reduce<TotalScore[]>((evenScores, score) => {
      const lastCareerScore = Object.values(evenScores[evenScores.length - 1])[0];
      const currentCareerScore = Object.values(score)[0];
      const isScoresTied = lastCareerScore === currentCareerScore;
      if (!evenScores.length || isScoresTied) evenScores.push(score);
      return evenScores;
    }, []);

  return shuffleArray(winningCareers)[0];
};
