import React from 'react';
import AppRouter from './router/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      {/* Header cố định */}
      {/* <Header /> */}

      {/* Giới hạn toàn bộ nội dung web app trong container */}
      <div className="container mt-3">
        <AppRouter />
      </div>

      {/* Footer cố định */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
