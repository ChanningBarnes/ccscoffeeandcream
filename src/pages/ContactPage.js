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
          <h3>Visit Us</h3>
          <p>123 Coffee Bean Lane</p>
          <p>Flavorville, CA 90210</p>
          <a href="https://maps.google.com/?q=123+Coffee+Bean+Lane" target="_blank" rel="noopener noreferrer" className="btn-primary-small">Get Directions</a>
        </div>
        <div className="contact-card">
          <h3>Call Us</h3>
          <p>Phone: (555) 123-4567</p>
          <p>Fax: (555) 987-6543</p>
          <a href="tel:5551234567" className="btn-primary-small">Call Now</a>
        </div>
        <div className="contact-card">
          <h3>Email Us</h3>
          <p>General Inquiries: info@yourcoffeeshop.com</p>
          <p>Catering: catering@yourcoffeeshop.com</p>
          <a href="mailto:info@yourcoffeeshop.com" className="btn-primary-small">Send an Email</a>
        </div>
        <div className="contact-card">
          <h3>Our Hours</h3>
          <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
          <p>Saturday - Sunday: 8:00 AM - 5:00 PM</p>
          <p>Public Holidays: Check our social media</p>
        </div>
      </div>

      <div className="contact-form-section">
        <h3 className="section-subtitle">Send Us a Message</h3>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>

      <div className="map-section">
        <h3 className="section-subtitle">Find Us on the Map</h3>
        {/* Placeholder for an embedded map, e.g., Google Maps embed code */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509189!2d144.95373631557026!3d-37.8172097420146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f8d68d06b6e4!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678234567890!5m2!1sen!2sau"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;