import { useEnrollGuideSlider } from '@/hooks/useEnrollGuideSlider';

import LogoArrowBackward from '@/assets/logos/svgs/logo-arrow-backward.svg?react';
import LogoArrowFoward from '@/assets/logos/svgs/logo-arrow-foward.svg?react';
import FloatingBalloon from '@/assets/images/svgs/floatingBalloon.svg?react';
import LogoHelp from '@/assets/logos/svgs/logo-help.svg?react';
import styles from './EnrollGuide.module.scss';

export const EnrollGuide = () => {
  const {
    enrollGuideCount,
    currentGuideIndex,
    enrollGuideContent,
    setCurrentGuideIndex,
    handleUpdateGuideIndex,
  } = useEnrollGuideSlider();

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
                className={styles.item}
                data-large-content={isContentTooLarge}
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
