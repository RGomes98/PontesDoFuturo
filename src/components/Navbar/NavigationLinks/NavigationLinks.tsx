import { CareerMenu } from '../CareerMenu/CareerMenu';
import { Link } from '@tanstack/react-router';
import { useStore } from '@/lib/store';

import styles from './NavigationLinks.module.scss';

export const NavigationLinks = () => {
  const { setIsMobileMenuActive } = useStore();

  function handleCloseMobileMenu() {
    setIsMobileMenuActive(false);
  }

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link to='/' hash='sobre-nos' onClick={handleCloseMobileMenu} className={styles.link}>
          Sobre Nós
        </Link>
      </li>
      <CareerMenu />
      <li className={styles.item}>
        <Link to='/' hash='teste-vocacional' onClick={handleCloseMobileMenu} className={styles.link}>
          Encontre seu Caminho
        </Link>
      </li>
    </ul>
  );
};
