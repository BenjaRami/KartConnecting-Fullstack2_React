import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import ErrorBoundary from './ErrorBoundary.jsx';

console.log('🎯 index.js ejecutándose');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
