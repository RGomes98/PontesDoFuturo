import { Navigate, RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

import '@/stylesheets/globals.scss';

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => Navigate({ to: '/', replace: true }),
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
