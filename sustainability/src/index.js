import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Keep global styles
import Dashboard from './screens/dashboard'; // Corrected import path
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);

// Performance monitoring (optional)
reportWebVitals();
