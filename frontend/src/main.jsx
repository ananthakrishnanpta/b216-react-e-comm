import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router';
import router from './routers/router.jsx';

import CurrencyProvider  from './context/CurrencyContext';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrencyProvider>
    <RouterProvider router = {router} />
    </CurrencyProvider>
  </StrictMode>,
)
