import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductDetails } from './routes/productDetails';
import LandingPage from './components/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/products/:id',
    element: <ProductDetails />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
