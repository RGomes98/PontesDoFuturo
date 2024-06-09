import { useStarryNightSection } from '@/hooks/useStarryNightSection';
import { useCarousel } from '@/hooks/useCarousel';
import type { Path } from '@/data/careers';

import LogoArrowBackward from '@/assets/logos/svgs/logo-arrow-backward.svg?react';
import LogoArrowFoward from '@/assets/logos/svgs/logo-arrow-foward.svg?react';
import Waves from '@/assets/images/svgs/waves.svg?react';
import styles from './CareerPaths.module.scss';

export const CareerPaths = ({ paths }: { paths: Path[] }) => {
  const { containerRef } = useStarryNightSection({
    starsAmount: 45,
    starClassName: styles.star,
    shootingStarMaximumInterval: 8000,
    starTwinkleClassName: styles.starTwinkle,
    shootingStarClassName: styles.shootingStar,
  });

  const { carouselRef, currentSlideIndex, scrollToSlide, carouselControls } = useCarousel();

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={styles.mainWrapper}>
        <span className={styles.mainHeading}>Áreas de Atuação</span>
        <ul className={styles.list} ref={carouselRef}>
          {paths.map(({ pathName, pathSummary }) => (
            <li key={pathName} className={styles.item}>
              <span className={styles.itemHeading}>{pathName}</span>
              <p className={styles.itemText}>{pathSummary}</p>
            </li>
          ))}
        </ul>
        <button className={styles.fowardButton} onClick={() => carouselControls('previous')}>
          <LogoArrowBackward className={styles.logoArrow} />
        </button>
        <button className={styles.backwardButton} onClick={() => carouselControls('next')}>
          <LogoArrowFoward className={styles.logoArrow} />
        </button>
        <div className={styles.guideSelector}>
          {Array.from({ length: paths.length })
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
      <Waves className={styles.waves} />
    </section>
  );
};
