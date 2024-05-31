import { CareerMenu } from '../CareerMenu/CareerMenu';

import styles from './NavigationLinks.module.scss';

export const NavigationLinks = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a href='#' className={styles.link}>
          Sobre Nós
        </a>
      </li>
      <CareerMenu />
      <li className={styles.item}>
        <a href='#' className={styles.link}>
          Encontre seu Caminho
        </a>
      </li>
    </ul>
  );
};
