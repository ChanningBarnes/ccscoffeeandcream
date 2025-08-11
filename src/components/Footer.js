// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Your Coffee Shop</h3>
            <p>Brewing happiness, one cup at a time.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/order">Order Online</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Visit Us</h3>
            <p>123 Coffee Bean Lane</p>
            <p>Flavorville, CA 90210</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@yourcoffeeshop.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Your Coffee Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;