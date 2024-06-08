import { HamburgerButton, MobileMenu, Overlay } from './MobileMenu/MobileMenu';
import { useScrollLocationTrigger } from '@/hooks/useScrollLocationTrigger ';
import { NavigationLinks } from './NavigationLinks/NavigationLinks';
import { Link } from '@tanstack/react-router';
import { Fragment } from 'react/jsx-runtime';
import { useStore } from '@/lib/store';

import LogoHorizontal from '@/assets/logos/pngs/logo-horizontal-remastered.png';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const { isMobileMenuActive, setIsMobileMenuActive } = useStore();
  const { isTriggerActivated } = useScrollLocationTrigger(50);

  return (
    <Fragment>
      <nav
        className={styles.navbar}
        data-visible={isTriggerActivated}
        data-mobile-active={isMobileMenuActive}
      >
        <Link to='/' resetScroll onClick={() => setIsMobileMenuActive(false)}>
          <img className={styles.logo} src={LogoHorizontal} alt='logo-horizontal' />
        </Link>
        <NavigationLinks />
        <HamburgerButton />
      </nav>
      <MobileMenu />
      <Overlay />
    </Fragment>
  );
};
