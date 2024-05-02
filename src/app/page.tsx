'use client';

import { useCareerProfiler } from '@/hooks/useCareerProfiler';
import { useMounted } from '@/hooks/useMounted';
import { Fragment } from 'react';

import styles from './page.module.css';

export default function Home() {
  const {
    currentAnswers,
    currentQuestions,
    isQuestionnaireComplete,
    handleGoToNextSlice,
    handleGoToPreviousSlice,
    handleCalculateResults,
    handleSetCurrentAnswers,
  } = useCareerProfiler();

  const { isMounted } = useMounted();

  return (
    <main className={styles.main}>
      {isMounted &&
        currentQuestions.map(({ id, question, answers }) => {
          return (
            <Fragment key={question}>
              <p>{question}</p>
              <div style={{ display: 'flex', gap: '2rem' }}>
                {answers.map(({ opinion, careerScores }) => {
                  const isCurrentButtonSelected =
                    currentAnswers[id] && currentAnswers[id].opinion === opinion;

                  return (
                    <button
                      key={opinion}
                      style={{ color: isCurrentButtonSelected ? 'red' : 'white' }}
                      onClick={() => handleSetCurrentAnswers(id, opinion, careerScores)}
                    >
                      {opinion}
                    </button>
                  );
                })}
              </div>
            </Fragment>
          );
        })}
      {isQuestionnaireComplete && <button onClick={handleCalculateResults}>Calcular</button>}
      <button onClick={handleGoToPreviousSlice}>Voltar</button>
      <button onClick={handleGoToNextSlice}>Proximo</button>
    </main>
  );
}
