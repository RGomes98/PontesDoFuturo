import logoVertical from '@/assets/logos/pngs/logo-horizontal.png';
import logoUnifoa from '@/assets/logos/pngs/logo-unifoa.png';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightWrapper}>
        <ul className={styles.logoWrapper}>
          <li className={styles.logoItem}>
            <a className={styles.logoLink} href='https://www.unifoa.edu.br/'>
              <img className={styles.logoUnifoa} src={logoUnifoa} alt='logo-unifoa' />
            </a>
          </li>
          <li className={styles.logoItem}>
            <a className={styles.logoLink} href='https://www.instagram.com/pontesdofuturo.unifoa'>
              <img className={styles.logoHorizontal} src={logoVertical} alt='logo-horizontal' />
            </a>
          </li>
        </ul>
        <span className={styles.copyrightText}>
          Copyright © {new Date().getFullYear()} - UniFOA | Todos os direitos reservados à Fundação Oswaldo
          Aranha
        </span>
      </div>
    </footer>
  );
};
