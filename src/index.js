import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider,Provider } from 'react-redux';
import {store} from "./Medicine Delivery/Redux/store"
import { ProductContextProvider } from './Medicine Delivery/Context/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
  <ProductContextProvider>
    <App />
  </ProductContextProvider>
  </React.StrictMode>
  
  </Provider>
);
