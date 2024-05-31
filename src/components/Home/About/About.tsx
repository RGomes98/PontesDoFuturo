import MedicineFigure from '@/assets/images/svgs/medicineFigure.svg?react';
import LogoInstagram from '@/assets/logos/svgs/logo-instagram.svg?react';
import styles from './About.module.scss';

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.headingWrapper}>
        <span className={styles.heading}>
          Sobre Nós{' '}
          <a className={styles.link} href='https://www.instagram.com/medvr.79'>
            <LogoInstagram className={styles.logoInstagram} />
          </a>
        </span>
        <p className={styles.text}>
          Somos acadêmicos de Medicina do UniFOA, em um projeto de expandir seus sonhos e mostrar como
          realizá-los. Estamos aqui para te acompanhar nessa jornada e tirar todas as dúvidas.
        </p>
      </div>
      <MedicineFigure className={styles.medicineFigure} />
    </section>
  );
};
