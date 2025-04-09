import React, { useEffect } from 'react';

const Header = () => {
  // Bootstrap JS initialization (optional, if needed)
 

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img
            src="./image/logo.png"
            alt="Logo"
            height="40"
          />
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutUs">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/project">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">Blog</a>
            </li>
          </ul>

          {/* CTA Button */}
          <a
            href="./contactUs.php"
            className="btn btn-light ms-md-4 mt-3 mt-md-0"
          >
            Work with Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
