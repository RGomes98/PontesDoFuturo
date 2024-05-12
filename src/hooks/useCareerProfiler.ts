import { calculateWinningCareer } from '@/utils/calculateWinningCareer';
import { generateCareerURLSlug } from '@/utils/generateCareerURLSlug';
import type { CareerScore, Opinion } from '@/types/CareerProfiler';
import type { CurrentAnswers } from '@/types/CurrentAnswers';
import { careerProfiler } from '@/data/careerProfiler';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useCareerProfiler = () => {
  const [careerProfilerSlice, setCareerProfilerSlice] = useState({ start: 0, end: 5 });
  const [currentAnswers, setCurrentAnswers] = useState<CurrentAnswers>({});
  const { replace } = useRouter();

  const statements = careerProfiler.slice(careerProfilerSlice.start, careerProfilerSlice.end);
  const answeredStatementsAmount = Object.keys(currentAnswers).length;
  const statementsAmount = careerProfiler.length;
  const STATEMENTS_PER_SLICE = 5;

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
    replace(`/curso/${generateCareerURLSlug(career)}`);
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
