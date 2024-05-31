import { CareerProfiler } from './CareerProfiler/CareerProfiler';
import { EnrollGuide } from './EnrollGuide/EnrollGuide';
import { MainSection } from './MainSection/MainSection';
import { Reasons } from './Reasons/Reasons';
import { About } from './About/About';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.container}>
      <MainSection />
      <About />
      <Reasons />
      <EnrollGuide />
      <CareerProfiler />
    </div>
  );
};
