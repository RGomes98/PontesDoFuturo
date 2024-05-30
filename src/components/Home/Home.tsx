// import { CareerProfiler } from '../CareerProfiler/CareerProfiler';
// import { EnrollGuide } from './EnrollGuide/EnrollGuide';
// import { About } from './About/About';

import { MainSection } from './MainSection/MainSection';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.container}>
      <MainSection />
      {/* <About /> */}
      {/* <CareerProfiler /> */}
      {/* <EnrollGuide /> */}
    </div>
  );
};
