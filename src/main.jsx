import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

/**
 * Custom modules
 */
import router from './routers/routes.jsx';

/**
 * CSS Links
 */
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
