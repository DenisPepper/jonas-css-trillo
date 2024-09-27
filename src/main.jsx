import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './componets/app/app';
import './main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);


// svg free icons: https://icomoon.io/app 