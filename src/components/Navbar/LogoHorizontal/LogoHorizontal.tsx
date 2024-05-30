import logoHorizontal from '../../../assets/logos/pngs/logo-horizontal.png';
import styles from './LogoHorizontal.module.scss';

export const LogoHorizontal = () => {
  return <img src={logoHorizontal} alt='logo-horizontal' className={styles.logo} />;
};
