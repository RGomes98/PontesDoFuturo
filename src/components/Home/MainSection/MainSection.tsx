import FriendsFigure from '@/assets/images/svgs/friendsFigure.svg?react';
import logoVertical from '@/assets/logos/pngs/logo-vertical.png';
import logoUnifoa from '@/assets/logos/pngs/logo-unifoa.png';
import Waves from '@/assets/images/svgs/waves.svg?react';
import styles from './MainSection.module.scss';

export const MainSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.figureWrapper}>
        <h1 className={styles.heading}>Qual é o Caminho até o seu Sonho?</h1>
        <FriendsFigure className={styles.figure} />
      </div>
      <div className={styles.mainWrapper}>
        <div className={styles.logoWrapper}>
          <img className={styles.logoVertical} src={logoVertical} alt='logo-vertical' />
          <span className={styles.logoText}>O guia das oportunidades!</span>
        </div>
        <img src={logoUnifoa} alt='logo-unifoa' className={styles.logoUnifoa} />
      </div>
      <Waves className={styles.waves} />
    </section>
  );
};
