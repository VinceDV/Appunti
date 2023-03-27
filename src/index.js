import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//la riga seguente si occupa di creare un riferimento chiamato root
// una radice per il nostro albero di componenti a partire da un div
// 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App /> //app e' un componente react
);
