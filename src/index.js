import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React-Router-Dom Library Icindeki
// BrowserRouter Paketini Kullaniyoruz
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  /* React Router i Kullanabilmek Icin
      App Componentini 
      BrowserRouter Componenti Icine Almak Gerekiyor */
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();