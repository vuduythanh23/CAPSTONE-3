import React from 'react';

const Footer = () => {
  return (
    <footer className="footer christmas-footer bg-success-outline text-white py-4">
      <div className="container">
        <div className="row">
          {/* Logo và Giới thiệu */}
          <div className="col-md-4">
            <h5 className="mb-3">
              <i className="fas fa-holly-berry"></i> Movie Website
            </h5>
            <p>Bringing the joy of cinema to your holiday season!</p>
          </div>

          {/* Liên kết nhanh */}
          <div className="col-md-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/admin" className="text-white text-decoration-none">
                  Admin
                </a>
              </li>
              <li>
                <a href="/movies" className="text-white text-decoration-none">
                  Movies
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div className="col-md-4">
            <h5 className="mb-3">Contact Us</h5>
            <p>
              <i className="fas fa-envelope"></i> Email:
              example@gmail.com
            </p>
            <p>
              <i className="fas fa-phone"></i> Phone: +89 13042389
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> Address: 215 Street
            </p>
          </div>
        </div>

        {/* Mạng xã hội */}
        <div className="row mt-3">
          <div className="col text-center">
            <a href="https://facebook.com" className="text-white mx-2">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="https://twitter.com" className="text-white mx-2">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="https://instagram.com" className="text-white mx-2">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://youtube.com" className="text-white mx-2">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="row mt-3">
          <div className="col text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Movie Website. Designed for the holidays! ❄️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
