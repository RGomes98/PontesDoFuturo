import { useCareerImageComponent } from '@/hooks/useCareerImageComponent';
import type { CareersDetails } from '@/data/careers';

import styles from './CareerDetails.module.scss';

export const CareerDetails = ({ career }: { career: CareersDetails[string] }) => {
  const { careerImage } = useCareerImageComponent(career.name, styles.careerImage);

  return (
    <section className={styles.container}>
      <div className={styles.headingWrapper}>
        <div className={styles.mainHeading}>
          <span className={styles.headingText}>{career.name}</span>
          <span className={styles.summary}>{career.summary}</span>
        </div>
        <p className={styles.text}>{career.description}</p>
      </div>
      {careerImage}
    </section>
  );
};
