import { calculateWinningCareer } from '@/utils/calculateWinningCareer';
import { generateCareerURLSlug } from '@/utils/generateCareerURLSlug';
import type { CareerScore, Opinion } from '@/types/CareerProfiler';
import type { CurrentAnswers } from '@/types/CurrentAnswers';
import { careerProfiler } from '@/data/careerProfiler';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

const STATEMENTS_PER_SLICE = 1;

export const useCareerProfiler = () => {
  const [careerProfilerSlice, setCareerProfilerSlice] = useState({ start: 0, end: STATEMENTS_PER_SLICE });
  const [currentAnswers, setCurrentAnswers] = useState<CurrentAnswers>({});
  const navigate = useNavigate();

  const statements = careerProfiler.slice(careerProfilerSlice.start, careerProfilerSlice.end);
  const answeredStatementsAmount = Object.keys(currentAnswers).length;
  const statementsAmount = careerProfiler.length;

  const handleGoToPreviousSlice = () => {
    setCareerProfilerSlice((slices) => {
      if (slices.start === 0) return { ...slices };
      return { end: slices.end - STATEMENTS_PER_SLICE, start: slices.start - STATEMENTS_PER_SLICE };
    });
  };

  const handleGoToNextSlice = () => {
    setCareerProfilerSlice((slices) => {
      if (slices.end === careerProfiler.length) return { ...slices };
      return { end: slices.end + STATEMENTS_PER_SLICE, start: slices.start + STATEMENTS_PER_SLICE };
    });
  };

  const handleUpdateAnswers = (id: string, opinion: Opinion, scores: CareerScore[]) => {
    setCurrentAnswers((answers) => ({ ...answers, [id]: { opinion, scores } }));
  };

  const handleCalculateResults = () => {
    const career = calculateWinningCareer(currentAnswers);
    navigate({ to: `/curso/${generateCareerURLSlug(career)}` });
  };

  return {
    statements,
    currentAnswers,
    isCareerProfilerComplete: answeredStatementsAmount === statementsAmount,
    handleUpdateAnswers,
    handleGoToNextSlice,
    handleCalculateResults,
    handleGoToPreviousSlice,
  };
};
