import { useEnrollGuideSlider } from '@/hooks/useEnrollGuideSlider';

import LogoArrowBackward from '@/assets/logos/svgs/logo-arrow-backward.svg?react';
import LogoArrowFoward from '@/assets/logos/svgs/logo-arrow-foward.svg?react';
import LogoHelp from '@/assets/logos/svgs/logo-help.svg?react';
import styles from './EnrollGuide.module.scss';

export const EnrollGuide = () => {
  const {
    enrollGuideContent,
    currentGuideIndex,
    enrollGuideCount,
    setCurrentGuideIndex,
    handleUpdateGuideIndex,
  } = useEnrollGuideSlider();

  return (
    <section className={styles.container}>
      <span className={styles.mainHeading}>Conheça alguns Modelos Educacionais</span>
      <ul className={styles.list}>
        {enrollGuideContent.map(({ title, content, help }) => {
          const helpButton = help && (
            <a href={help} className={styles.helpLink}>
              <LogoHelp className={styles.logoHelp} />
            </a>
          );

          return (
            <li className={styles.item} key={title} style={{ translate: `${-100 * currentGuideIndex}%` }}>
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
        <div className={styles.guideSelector}>
          {Array.from({ length: enrollGuideCount })
            .map((_, index) => index)
            .map((currentIndex) => (
              <button
                className={styles.selectButton}
                data-active={currentIndex === currentGuideIndex}
                onClick={() => setCurrentGuideIndex(currentIndex)}
              ></button>
            ))}
        </div>
      </ul>
    </section>
  );
};
