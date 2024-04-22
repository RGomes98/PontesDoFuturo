import { calculateWinningCareer } from '@/utils/calculateWinningCareer';
import type { CareerScore, Opinion } from '@/types/Questions';
import type { CurrentAnswers } from '@/types/CurrentAnswers';
import { questions } from '@/data/questions';
import { useState } from 'react';

export const useCareerProfiler = () => {
  const [currentQuestionSlice, setCurrentQuestionSlice] = useState({ sliceStart: 0, sliceEnd: 5 });
  const [currentAnswers, setCurrentAnswers] = useState<CurrentAnswers>({});

  const currentQuestions = questions.slice(currentQuestionSlice.sliceStart, currentQuestionSlice.sliceEnd);
  const isQuestionnaireComplete = Object.keys(currentAnswers).length === questions.length;
  const QUESTIONS_PER_SLICE = 5;

  const handleGoToNextSlice = () => {
    setCurrentQuestionSlice((prev) => {
      if (prev.sliceEnd === questions.length) return { ...prev };

      return {
        sliceEnd: prev.sliceEnd + QUESTIONS_PER_SLICE,
        sliceStart: prev.sliceStart + QUESTIONS_PER_SLICE,
      };
    });
  };

  const handleGoToNextPrevious = () => {
    setCurrentQuestionSlice((prev) => {
      if (prev.sliceStart === 0) return { ...prev };

      return {
        sliceEnd: prev.sliceEnd - QUESTIONS_PER_SLICE,
        sliceStart: prev.sliceStart - QUESTIONS_PER_SLICE,
      };
    });
  };

  const handleSetCurrentAnswers = (id: string, opinion: Opinion, scores: CareerScore[]) => {
    setCurrentAnswers((prev) => ({ ...prev, [id]: { opinion, scores } }));
  };

  const handleCalculateResults = () => {
    const winningCareer = calculateWinningCareer(currentAnswers);
  };

  return {
    currentAnswers,
    currentQuestions,
    isQuestionnaireComplete,
    handleGoToNextSlice,
    handleGoToNextPrevious,
    handleCalculateResults,
    handleSetCurrentAnswers,
  };
};
