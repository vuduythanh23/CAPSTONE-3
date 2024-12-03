import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="christmas-header p-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="logo d-flex align-items-center">
            <i className="fas fa-film me-2"></i>
            <h1 className="m-0 text-white">CyberFilms</h1>
          </div>

          {/* Menu */}
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  <i className="fas fa-home me-1"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin" className="nav-link text-white">
                  <i className="fas fa-user-cog me-1"></i> Admin
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
