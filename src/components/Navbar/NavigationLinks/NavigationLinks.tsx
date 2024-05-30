import styles from './NavigationLinks.module.scss';

export const NavigationLinks = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a href='#' className={styles.link}>
          Sobre Nós
        </a>
      </li>
      <li className={styles.item}>
        <a href='#' className={styles.link}>
          Explorar Áreas
        </a>
      </li>
      <li className={styles.item}>
        <a href='#' className={styles.link}>
          Encontre seu Caminho
        </a>
      </li>
    </ul>
  );
};
