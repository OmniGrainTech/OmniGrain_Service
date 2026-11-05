import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './firebase';
import { initGlobalTracker } from './services/tracker';

// Initialize full user behavior, click tracking & attribution engine
initGlobalTracker();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
