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
import Login from '../pages/Login';


/**
 * Loaders
 */
import RegisterLoader from './loaders/registerLoader';
import loginLoader from './loaders/loginLoader';
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
    loader: RegisterLoader,
  },
  {
    path: '/forgotPassword',
    element: <ForgotPassword />,
  },
  {
    path: '/resetPassword',
    element: <ResetPassword />,
  },
  {
    path: '/terms',
    element: <Terms />,
  },
  {
    path: '/login',
    element: <Login />,
    loader: loginLoader,

  }
]);

export default router;
