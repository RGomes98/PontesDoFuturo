import logoUnifoa from '@/assets/logos/pngs/logo-unifoa.png';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightWrapper}>
        <img className={styles.logoUnifoa} src={logoUnifoa} alt='logo-unifoa' />
        <span className={styles.copyrightText}>
          Copyright © {new Date().getFullYear()} - UniFOA | Todos os direitos reservados à Fundação Oswaldo
          Aranha
        </span>
      </div>
    </footer>
  );
};
