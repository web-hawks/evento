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
    path: '/terms',
    element: <Terms />,
  },
]);

export default router;
