import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Si tienes estilos
import App from './App.jsx'; // Importa App.jsx, no App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
