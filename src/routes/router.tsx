import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/App';
import { ErrorPage } from '@/pages/ErrorPage';
import { AboutPage } from '@/pages/AboutPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);
