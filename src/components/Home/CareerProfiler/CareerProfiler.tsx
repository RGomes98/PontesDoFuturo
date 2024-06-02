import { useCareerProfiler } from '@/hooks/useCareerProfiler';
import { Tooltip } from '@/components/Tooltip/Tooltip';
import type { Opinion } from '@/types/CareerProfiler';
import { Fragment } from 'react/jsx-runtime';

import LogoDissatisfied from '@/assets/logos/svgs/logo-dissatisfied.svg?react';
import LogoSatisfied from '@/assets/logos/svgs/logo-satisfied.svg?react';
import LogoNeutral from '@/assets/logos/svgs/logo-neutral.svg?react';
import LogoLoading from '@/assets/logos/svgs/logo-loading.svg?react';
import LogoHappy from '@/assets/logos/svgs/logo-happy.svg?react';
import logoVertical from '@/assets/logos/pngs/logo-vertical.png';
import LogoInfo from '@/assets/logos/svgs/logo-info.svg?react';
import logoSymbol from '@/assets/logos/pngs/logo-symbol.png';
import LogoBad from '@/assets/logos/svgs/logo-bad.svg?react';
import Waves from '@/assets/images/svgs/waves.svg?react';
import styles from './CareerProfiler.module.scss';

type CareerProfilerHeading = {
  currentStatement: number;
  statementsAmount: number;
};

type Statement = {
  statement: string;
  children: React.ReactNode;
};

type Answer = {
  opinion: Opinion;
  isCurrentAnswerActive: boolean;
  handleUpdateAnswer: () => void;
};

type CareerProfilerControlButtons = {
  currentStatement: number;
  statementsAmount: number;
  isCareerProfilerComplete: boolean;
  handleGoToNextSlice: () => void;
  handleGoToPreviousSlice: () => void;
  handleCalculateResults: () => Promise<void>;
};

type CareerProfilerInitilState = {
  startCareerProfiler: () => void;
};

export const CareerProfiler = () => {
  const {
    statements,
    currentAnswers,
    currentStatement,
    statementsAmount,
    isCareerProfileActive,
    isCareerProfilerComplete,
    isCareerProfilerResultLoading,
    handleUpdateAnswers,
    startCareerProfiler,
    handleGoToNextSlice,
    handleCalculateResults,
    handleGoToPreviousSlice,
  } = useCareerProfiler();

  return (
    <section id='teste-vocacional' className={styles.container}>
      <span className={styles.mainHeading}>
        <span className={styles.headingText}>Teste Vocacional</span>{' '}
        <Tooltip content='Por favor, esteja ciente de que este teste vocacional não foi desenvolvido com base em uma metodologia profissionalmente reconhecida e pode não fornecer uma análise completa. Use-o como uma ferramenta inicial para explorar suas opções educacionais.'>
          <LogoInfo className={styles.logoInfo} />
        </Tooltip>
      </span>
      <div className={styles.careerProfilerWrapper}>
        {isCareerProfilerResultLoading && <CareerProfilerLoadingState />}
        {isCareerProfileActive ? (
          <div className={styles.careerProfiler}>
            <CareerProfilerHeading currentStatement={currentStatement} statementsAmount={statementsAmount} />
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
            <CareerProfilerControlButtons
              currentStatement={currentStatement}
              statementsAmount={statementsAmount}
              handleGoToNextSlice={handleGoToNextSlice}
              handleCalculateResults={handleCalculateResults}
              handleGoToPreviousSlice={handleGoToPreviousSlice}
              isCareerProfilerComplete={isCareerProfilerComplete}
            />
          </div>
        ) : (
          <CareerProfilerInitialState startCareerProfiler={startCareerProfiler} />
        )}
      </div>
      <Waves className={styles.waves} />
    </section>
  );
};

const CareerProfilerLoadingState = () => {
  return (
    <div className={styles.loadingContainer}>
      <img className={styles.logoVertical} src={logoVertical} alt='logo-vertical' />
      <span className={styles.loadingHeading}>Gerando Resultado</span>
      <LogoLoading className={styles.loadingLogo} />
    </div>
  );
};

const CareerProfilerHeading = ({ currentStatement, statementsAmount }: CareerProfilerHeading) => {
  return (
    <div className={styles.progressWrapper}>
      <span className={styles.currentStatement}>
        {currentStatement}/{statementsAmount}
      </span>
      <span className={styles.careerProfilerProgress}>
        <span
          className={styles.progressBar}
          style={{ width: `${Math.ceil(currentStatement * (100 / statementsAmount))}%` }}
        ></span>
      </span>
    </div>
  );
};

export const Statement = ({ statement, children }: Statement) => {
  return (
    <div className={styles.statementWrapper}>
      <p className={styles.statement}>{statement}</p>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
};

export const Answer = ({ opinion, isCurrentAnswerActive, handleUpdateAnswer }: Answer) => {
  const captionLogos: Record<Opinion, React.ReactNode> = {
    'strongly-disagree': <LogoBad className={styles.logoCaption} />,
    'heavily-agree': <LogoHappy className={styles.logoCaption} />,
    neutral: <LogoNeutral className={styles.logoCaption} />,
    disagree: <LogoDissatisfied className={styles.logoCaption} />,
    agree: <LogoSatisfied className={styles.logoCaption} />,
  };

  return (
    <li className={styles.item}>
      <button
        className={styles.answer}
        onClick={handleUpdateAnswer}
        data-active={isCurrentAnswerActive}
      ></button>
      {captionLogos[opinion]}
    </li>
  );
};

const CareerProfilerControlButtons = ({
  currentStatement,
  statementsAmount,
  isCareerProfilerComplete,
  handleGoToNextSlice,
  handleCalculateResults,
  handleGoToPreviousSlice,
}: CareerProfilerControlButtons) => {
  return (
    <div className={styles.controlButtonsWrapper}>
      {currentStatement > 1 && (
        <button className={styles.previousButton} onClick={handleGoToPreviousSlice}>
          Anterior
        </button>
      )}{' '}
      {isCareerProfilerComplete && (
        <button className={styles.finishButton} onClick={handleCalculateResults}>
          Finalizar!
        </button>
      )}
      {currentStatement < statementsAmount && (
        <button className={styles.nextButton} onClick={handleGoToNextSlice}>
          Próximo
        </button>
      )}
    </div>
  );
};

const CareerProfilerInitialState = ({ startCareerProfiler }: CareerProfilerInitilState) => {
  return (
    <Fragment>
      <div className={styles.headingWrapper}>
        <img className={styles.logoSymbol} src={logoSymbol} alt='logo-horizontal' />
        <span className={styles.startHeading}>Reponda com atenção e seja sincero!</span>
        <p className={styles.startText}>
          Nosso teste vocacional visa compreender suas preferências, desafios e personalidade, ajudando a
          orientar sua escolha universitária.
        </p>
      </div>
      <button className={styles.startButton} onClick={startCareerProfiler}>
        Começar!
      </button>
    </Fragment>
  );
};
