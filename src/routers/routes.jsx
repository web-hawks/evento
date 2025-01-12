/**
 * Node Modules
 */
import { createBrowserRouter } from 'react-router-dom';

/**
 * Components
 */
import App from '../App';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Terms from '../pages/Terms';
import authLoader from './loaders/authLoader';

/**
 * Router
 */

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
    loader: authLoader,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
    loader: authLoader,
  },
  {
    path: '/terms',
    element: <Terms />,
  },
]);

export default router;
