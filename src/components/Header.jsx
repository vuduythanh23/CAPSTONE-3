import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-dark text-white p-3">
    <div className="container d-flex justify-content-between align-items-center">
      <h1 className="h3">Movie Website</h1>
      <nav>
        <Link className="text-white mx-3" to="/">Home</Link>
        <Link className="text-white mx-3" to="/admin">Admin</Link>
      </nav>
    </div>
  </header>
);

export default Header;
