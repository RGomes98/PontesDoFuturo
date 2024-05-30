import { useScrollLocationTrigger } from '@/hooks/useScrollLocationTrigger ';
import { NavigationLinks } from './NavigationLinks/NavigationLinks';
import { LogoHorizontal } from './LogoHorizontal/LogoHorizontal';

import styles from './Navbar.module.scss';

export const Navbar = () => {
  const { isTriggerActivated } = useScrollLocationTrigger(50);

  return (
    <nav className={styles.navbar} data-transparent={isTriggerActivated}>
      <LogoHorizontal />
      <NavigationLinks />
    </nav>
  );
};
