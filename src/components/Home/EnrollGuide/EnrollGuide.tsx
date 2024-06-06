import { useCarousel } from '@/hooks/useCarousel';
import { enrollGuide } from '@/data/enrollGuide';

import LogoArrowBackward from '@/assets/logos/svgs/logo-arrow-backward.svg?react';
import LogoArrowFoward from '@/assets/logos/svgs/logo-arrow-foward.svg?react';
import FloatingBalloon from '@/assets/images/svgs/floatingBalloon.svg?react';
import LogoHelp from '@/assets/logos/svgs/logo-help.svg?react';
import styles from './EnrollGuide.module.scss';

export const EnrollGuide = () => {
  const { carouselRef, currentSlideIndex, scrollToSlide, carouselControls } = useCarousel();

  return (
    <section className={styles.container}>
      <FloatingBalloon className={styles.floatingBalloon} />
      <span className={styles.mainHeading}>Conheça alguns Modelos Educacionais</span>
      <div className={styles.listWrapper}>
        <ul className={styles.list} ref={carouselRef}>
          {enrollGuide.map(({ title, content, help }) => {
            const helpButton = help && (
              <a className={styles.helpLink} href={help}>
                <LogoHelp className={styles.logoHelp} />
              </a>
            );

            return (
              <li key={title} className={styles.item}>
                <span className={styles.itemHeading}>
                  {title} {helpButton}
                </span>
                <p className={styles.itemText}>{content}</p>
              </li>
            );
          })}
        </ul>
        <button className={styles.fowardButton} onClick={() => carouselControls('previous')}>
          <LogoArrowBackward className={styles.logoArrow} />
        </button>
        <button className={styles.backwardButton} onClick={() => carouselControls('next')}>
          <LogoArrowFoward className={styles.logoArrow} />
        </button>
        <div className={styles.guideSelector}>
          {Array.from({ length: enrollGuide.length })
            .map((_, index) => index)
            .map((currentIndex, index) => (
              <button
                key={index}
                className={styles.selectButton}
                onClick={() => scrollToSlide(currentIndex)}
                data-active={currentIndex === currentSlideIndex}
              ></button>
            ))}
        </div>
      </div>
    </section>
  );
};
