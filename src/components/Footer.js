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
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/events">Events</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>info@ccscoffeeandcream.com</p>
            <p>Located in Charlotte, NC</p>
              <div className="social-links">
              <a href="https://instagram.com/ccscoffeeandcream" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://tiktok.com/ccscoffeeandcream" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} CC's Coffee and Cream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
