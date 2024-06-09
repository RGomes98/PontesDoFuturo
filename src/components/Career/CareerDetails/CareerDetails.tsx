import { useCareerImageComponent } from '@/hooks/useCareerImageComponent';
import { generateCareerURLSlug } from '@/utils/generateCareerURLSlug';
import type { CareersDetails } from '@/data/careers';

import LogoLink from '@/assets/logos/svgs/logo-link.svg?react';
import styles from './CareerDetails.module.scss';

export const CareerDetails = ({ career }: { career: CareersDetails[string] }) => {
  const { careerImage } = useCareerImageComponent(career.name, styles.careerImage);
  const isCareerNameTooBig = career.name.length >= 12;

  return (
    <section className={styles.container}>
      <div className={styles.headingWrapper}>
        <div className={styles.mainHeading} data-big-heading={isCareerNameTooBig}>
          <div className={styles.heading} data-big-heading={isCareerNameTooBig}>
            <span className={styles.headingText}>{career.name}</span>
            <a
              target='_blank'
              className={styles.link}
              rel='noopener noreferrer'
              href={`https://www.unifoa.edu.br/graduacao/${generateCareerURLSlug(career.name)}`}
            >
              Saiba mais <LogoLink className={styles.logo} />
            </a>
          </div>
          <span className={styles.summary}>{career.summary}</span>
        </div>
        <p className={styles.text}>{career.description}</p>
      </div>
      {careerImage}
    </section>
  );
};
