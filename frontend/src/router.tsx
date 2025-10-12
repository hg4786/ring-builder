import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ProductDetails } from './routes/productDetails';
import { DiamondsPage } from './routes/diamonds';
import LandingPage from './components/LandingPage';

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
    path: '/products/:id',
    element: <ProductDetails />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
