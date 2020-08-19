import React from 'react';
import ReactDOM from 'react-dom';
import App from './router';

import { AuthProvider } from './context/AuthContext';
import CartContextProvider from './context/CartContext';

ReactDOM.render(
  <AuthProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </AuthProvider>,
  document.getElementById('app'),
);
