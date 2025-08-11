// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// Using the logo you uploaded for reference
// Be sure the logo file is in your public/images/ directory
const logoPath = '/images/ccropped.png';

function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logoPath} alt="CC's Coffee and Cream Logo" className="logo-img" />
        </Link>
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/events">Events</Link></li> {/* Changed from /order to /events */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;