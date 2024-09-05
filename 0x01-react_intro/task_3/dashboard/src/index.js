import React from 'react';
import ReactDOM from 'react-dom/client'; // This is the updated import in React 18
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

// Create a root for the main app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Create a separate root for the notifications
const rootNotifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
rootNotifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

// Optionally report web vitals
reportWebVitals();
