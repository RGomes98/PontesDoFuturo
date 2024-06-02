import { HamburgerButton, MobileMenu, Overlay } from './MobileMenu/MobileMenu';
import { useScrollLocationTrigger } from '@/hooks/useScrollLocationTrigger ';
import { NavigationLinks } from './NavigationLinks/NavigationLinks';
import { LogoHorizontal } from './LogoHorizontal/LogoHorizontal';
import { Fragment } from 'react/jsx-runtime';
import { useStore } from '@/lib/store';

import styles from './Navbar.module.scss';

export const Navbar = () => {
  const { isTriggerActivated } = useScrollLocationTrigger(50);
  const { isMobileMenuActive } = useStore();

  return (
    <Fragment>
      <nav
        className={styles.navbar}
        data-visible={isTriggerActivated}
        data-mobile-active={isMobileMenuActive}
      >
        <LogoHorizontal />
        <NavigationLinks />
        <HamburgerButton />
      </nav>
      <MobileMenu />
      <Overlay />
    </Fragment>
  );
};
