import { Statement } from '@/components/CareerProfiler/Statement';
import { useCareerProfiler } from '@/hooks/useCareerProfiler';
import { Answer } from '@/components/CareerProfiler/Answer';
import { useMounted } from '@/hooks/useMounted';
import { Fragment } from 'react';

export const CareerProfiler = () => {
  const { isMounted } = useMounted();

  const {
    statements,
    currentAnswers,
    isCareerProfilerComplete,
    handleUpdateAnswers,
    handleGoToNextSlice,
    handleCalculateResults,
    handleGoToPreviousSlice,
  } = useCareerProfiler();

  return (
    isMounted && (
      <Fragment>
        {statements.map(({ id, statement, answers }) => {
          return (
            <Statement key={id} statement={statement}>
              {answers.map(({ opinion, careerScores }) => {
                return (
                  <Answer
                    key={opinion}
                    opinion={opinion}
                    isCurrentAnswerActive={currentAnswers[id]?.opinion === opinion}
                    handleUpdateAnswer={() => handleUpdateAnswers(id, opinion, careerScores)}
                  />
                );
              })}
            </Statement>
          );
        })}
        {isCareerProfilerComplete && <button onClick={handleCalculateResults}>Finalizar</button>}
        <button onClick={handleGoToPreviousSlice}>Voltar</button>
        <button onClick={handleGoToNextSlice}>Avançar</button>
      </Fragment>
    )
  );
};
