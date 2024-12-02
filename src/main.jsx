import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import component chính
// import './index.css'; // Import file CSS chính nếu cần

// Kết nối React với DOM gốc
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
