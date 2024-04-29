'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { useCareerProfiler } from '@/hooks/useCareerProfiler';
import { Fragment } from 'react';

export default function Home() {
  const {
    currentAnswers,
    currentQuestions,
    isQuestionnaireComplete,
    handleGoToNextSlice,
    handleGoToNextPrevious,
    handleCalculateResults,
    handleSetCurrentAnswers,
  } = useCareerProfiler();

  return (
    <main className={styles.main}>
      {currentQuestions.map(({ id, question, answers }) => {
        return (
          <Fragment key={question}>
            <p>{question}</p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              {answers.map(({ opinion, careerScores }) => {
                const isCurrentButtonSelected = currentAnswers[id] && currentAnswers[id].opinion === opinion;

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
      <button onClick={handleGoToNextPrevious}>Voltar</button>
      <button onClick={handleGoToNextSlice}>Proximo</button>
    </main>
  );
}
