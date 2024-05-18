import { Navigate, RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

import '@/stylesheets/globals.scss';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => Navigate({ to: '/', replace: true }),
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
