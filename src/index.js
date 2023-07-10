import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './routes';
import { CardContextProvider } from './common/contexts/Card';
import { UsuarioProvider } from './common/contexts/Usuario';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsuarioProvider>
    <CardContextProvider>
    <AppRoutes/>
    </CardContextProvider>
    </UsuarioProvider>
  </React.StrictMode>
);


