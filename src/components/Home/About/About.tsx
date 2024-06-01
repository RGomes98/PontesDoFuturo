import MedicineFigure from '@/assets/images/svgs/medicineFigure.svg?react';
import LogoArrowDown from '@/assets/logos/svgs/logo-arrow-down.svg?react';
import LogoInstagram from '@/assets/logos/svgs/logo-instagram.svg?react';
import styles from './About.module.scss';

import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useState } from 'react';

export const About = () => {
  const [isSocialLinksMenuActive, setIsSocialLinksMenuActive] = useState(false);
  const { innerRef, triggerRef } = useOutsideClick<HTMLUListElement, HTMLButtonElement>(() => {
    setIsSocialLinksMenuActive(false);
  });

  function socialLinksMenuToggle() {
    setIsSocialLinksMenuActive((current) => !current);
  }

  return (
    <section id='sobre-nos' className={styles.container}>
      <div className={styles.headingWrapper}>
        <span className={styles.heading}>
          Sobre Nós{' '}
          <button className={styles.socialButton} ref={triggerRef} onClick={socialLinksMenuToggle}>
            <span className={styles.buttonText}>Siga-nos</span>
            <LogoArrowDown className={styles.logoArrow} data-active={isSocialLinksMenuActive} />
            {isSocialLinksMenuActive && (
              <ul className={styles.list} ref={innerRef}>
                <li className={styles.item}>
                  <a className={styles.link} href='https://www.instagram.com/medvr.79'>
                    <LogoInstagram className={styles.logoInstagram} />{' '}
                    <span className={styles.linkText}>MEDVR</span>
                  </a>
                </li>
                <li className={styles.item}>
                  <a className={styles.link} href='https://www.instagram.com/pontesdofuturo.unifoa'>
                    <LogoInstagram className={styles.logoInstagram} />{' '}
                    <span className={styles.linkText}>Pontes do Futuro</span>
                  </a>
                </li>
              </ul>
            )}
          </button>
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
