import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import { Fragment } from 'react';

export const Route = createRootRoute({
  component: Layout,
});

function Layout() {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}
