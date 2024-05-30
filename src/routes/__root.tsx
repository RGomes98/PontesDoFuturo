import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import { Fragment } from 'react';

import WavesOpaque from '../assets/images/svgs/WavesOpaque.svg?react';

export const Route = createRootRoute({ component: Layout });

function Layout() {
  return (
    <Fragment>
      <WavesOpaque className='waves' />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}
