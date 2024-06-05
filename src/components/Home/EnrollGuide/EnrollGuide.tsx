import { useEnrollGuideSlider } from '@/hooks/useEnrollGuideSlider';

import LogoArrowBackward from '@/assets/logos/svgs/logo-arrow-backward.svg?react';
import LogoArrowFoward from '@/assets/logos/svgs/logo-arrow-foward.svg?react';
import FloatingBalloon from '@/assets/images/svgs/floatingBalloon.svg?react';
import LogoHelp from '@/assets/logos/svgs/logo-help.svg?react';
import styles from './EnrollGuide.module.scss';
import { useState, TouchEvent } from 'react';

export const EnrollGuide = () => {
  const {
    enrollGuideCount,
    currentGuideIndex,
    enrollGuideContent,
    setCurrentGuideIndex,
    handleUpdateGuideIndex,
  } = useEnrollGuideSlider();

  const [startPosition, setStartPosition] = useState({ x: 0});

  const resetPositions = () => {
    setStartPosition({x: 0});
  }

  const handleStartTouchPosition = (e: TouchEvent) => {
    setStartPosition({x: e.touches[0].clientX});
  }

  const move = (distance: number) => {
    if (distance > 100) {
      handleUpdateGuideIndex(+1);
      resetPositions();
    }

    if (distance < -100) {
      handleUpdateGuideIndex(-1)
      resetPositions();
    }
  }

  const calculateTouchDistanceMoved = (endX: number) => {
    const distance = startPosition.x - endX;
    move(distance);
  };

  const handleEndTouchPosition = (e: TouchEvent) => {
    calculateTouchDistanceMoved(e.changedTouches[0].clientX);
  }

  const isContentTooLarge = enrollGuideContent[currentGuideIndex].content.length > 800;

  return (
    <section className={styles.container}>
      <FloatingBalloon className={styles.floatingBalloon} />
      <span className={styles.mainHeading}>Conheça alguns Modelos Educacionais</span>
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          {enrollGuideContent.map(({ title, content, help }) => {
            const helpButton = help && (
              <a href={help} className={styles.helpLink}>
                <LogoHelp className={styles.logoHelp} />
              </a>
            );

            return (
              <li
                key={title}
                // ref={liRef}
                className={styles.item}
                data-large-content={isContentTooLarge}
                onTouchStart={handleStartTouchPosition}    
                onTouchEnd={handleEndTouchPosition}
                style={{ translate: `${-100 * currentGuideIndex}%` }}
              >
                <span className={styles.itemHeading}>
                  {title} {helpButton}
                </span>
                <p className={styles.itemText}>{content}</p>
              </li>
            );
          })}
          <button className={styles.fowardButton} onClick={() => handleUpdateGuideIndex(-1)}>
            <LogoArrowBackward className={styles.logoArrow} />
          </button>
          <button className={styles.backwardButton} onClick={() => handleUpdateGuideIndex(+1)}>
            <LogoArrowFoward className={styles.logoArrow} />
          </button>
        </ul>
        <div className={styles.guideSelector} data-large-content={isContentTooLarge}>
          {Array.from({ length: enrollGuideCount })
            .map((_, index) => index)
            .map((currentIndex, index) => (
              <button
                key={index}
                className={styles.selectButton}
                data-active={currentIndex === currentGuideIndex}
                onClick={() => setCurrentGuideIndex(currentIndex)}
              ></button>
            ))}
        </div>
      </div>
    </section>
  );
};
