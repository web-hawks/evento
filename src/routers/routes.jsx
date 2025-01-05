/**
 * Node Modules
 */
import { createBrowserRouter } from 'react-router-dom';

/**
 * Components
 */
import App from '../App';
import Register from '../pages/Register';
import Terms from '../pages/Terms';

/**
 * Loaders
 */
// import RegisterLoader from './loaders/registerLoader';

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
    // loader: RegisterLoader,
  },
  {
    path: '/terms',
    element: <Terms />,
  },
]);

export default router;
