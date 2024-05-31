import { useCareerProfiler } from '@/hooks/useCareerProfiler';
import { Statement } from './Statement';
import { Answer } from './Answer';
import { Fragment } from 'react';

export const CareerProfiler = () => {
  const {
    statements,
    currentAnswers,
    isCareerProfilerComplete,
    isCareerProfilerResultLoading,
    handleUpdateAnswers,
    handleGoToNextSlice,
    handleCalculateResults,
    handleGoToPreviousSlice,
  } = useCareerProfiler();

  if (isCareerProfilerResultLoading) return <h1>Gerando Resultado...</h1>;

  return (
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
  );
};
