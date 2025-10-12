import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ProductDetails } from './routes/productDetails';
import { DiamondsPage } from './routes/diamonds';
import LandingPage from './components/LandingPage';
import { DiamondView } from './routes/diamondView';

const router = createHashRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/diamonds',
    element: <DiamondsPage />,
  },
  {
    path: '/rings/:id',
    element: <ProductDetails />,
  },
  {
    path: '/diamonds/:id',
    element: <DiamondView />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
