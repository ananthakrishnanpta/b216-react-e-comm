import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router';
import router from './routers/router.jsx';

import CurrencyProvider  from './context/CurrencyContext';
import CartProvider from './context/CartContext.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrencyProvider>
      <CartProvider>
        <RouterProvider router = {router} />
      </CartProvider>
    </CurrencyProvider>
  </StrictMode>,
)
