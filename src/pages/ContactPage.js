// src/pages/ContactPage.js
import React from 'react';
import '../App.css';

function ContactPage() {
  return (
    <div className="page-section container">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-description">
        Have a question, feedback, or just want to say hello? We'd love to hear from you!
      </p>

      <div className="contact-info-grid">
        <div className="contact-card">
          <h3>Email Us</h3>
          <p>General Inquiries: info@ccscoffeeandcream.com</p>
          <a href="mailto:info@ccscoffeeandcream.com" className="btn-primary-small">Send an Email</a>
        </div>
        
        {/* New Section for Instagram */}
        <div className="contact-card">
          <h3>Follow Us on Instagram</h3>
          <p>Stay up-to-date with our latest creations and special offers!</p>
          <a 
            href="https://www.instagram.com/ccscoffeeandcream" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary-small instagram-btn"
          >
            <i className="fab fa-instagram icon-with-text"> </i>  
           Follow us on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;