import { CareerMenu } from '../CareerMenu/CareerMenu';
import { Link } from '@tanstack/react-router';

import styles from './NavigationLinks.module.scss';

export const NavigationLinks = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link to='/' hash='sobre-nos' className={styles.link}>
          Sobre Nós
        </Link>
      </li>
      <CareerMenu />
      <li className={styles.item}>
        <Link to='/' hash='teste-vocacional' className={styles.link}>
          Encontre seu Caminho
        </Link>
      </li>
    </ul>
  );
};
