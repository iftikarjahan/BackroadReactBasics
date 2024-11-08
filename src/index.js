import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*
  ->The strict mode only runs in the development mode. It does not run in the production env
  ->It runs the component twice

  ->Note an important thing that you can create multiple css files but the changes wont be
  reflected individually on specific file
  ->In order to solve this, you use the styled component.
  */ 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


