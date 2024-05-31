import LogoSatisfied from '@/assets/logos/svgs/logo-satisfied.svg?react';
import LogoTrophy from '@/assets/logos/svgs/logo-trophy.svg?react';
import LogoHeart from '@/assets/logos/svgs/logo-heart.svg?react';
import styles from './Reasons.module.scss';

export const Reasons = () => {
  return (
    <section className={styles.container}>
      <span className={styles.heading}>3 Razões para se dedicar no seu futuro</span>
      <ul className={styles.list}>
        <li className={styles.item}>
          <LogoSatisfied className={styles.logo} />
          <span className={styles.itemHeading}>Realização</span>
          <p className={styles.text}>
            Buscar uma profissão é mais do que uma simples escolha; é um passo crucial em direção à realização
            pessoal e profissional.
          </p>
        </li>
        <li className={styles.item}>
          <LogoHeart className={styles.logo} />
          <span className={styles.itemHeading}>Prosperidade</span>
          <p className={styles.text}>
            Ao nos dedicarmos ao nosso futuro, não apenas visamos nosso próprio sucesso, mas também buscamos
            proporcionar uma vida melhor e mais estável para aqueles que amamos.
          </p>
        </li>
        <li className={styles.item}>
          <LogoTrophy className={styles.logo} />
          <span className={styles.itemHeading}>Conquista</span>
          <p className={styles.text}>
            A dedicação incansável ao nosso crescimento nos permite não apenas sonhar, mas também viver a
            realidade dos nossos maiores desejos e aspirações.
          </p>
        </li>
      </ul>
    </section>
  );
};
