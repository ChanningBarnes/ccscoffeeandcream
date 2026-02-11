// src/pages/ContactPage.js
import React, { useEffect } from 'react';
import '../App.css';

function ContactPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-page">
      <h1 className="page-title">Get In Touch</h1>
      <p className="page-subtitle">We'd love to hear from you!</p>

      <div className="contact-cards">
        <article className="contact-card scroll-animate delay-1">
          <i className="fas fa-envelope contact-icon"></i>
          <h3>Email Us</h3>
          <p>info@ccscoffeeandcream.com</p>
          <a href="mailto:info@ccscoffeeandcream.com" className="btn-primary-small">
            Send Email
          </a>
        </article>

        <article className="contact-card scroll-animate delay-2">
          <i className="fab fa-instagram contact-icon"></i>
          <h3>Instagram</h3>
          <p>@ccscoffeeandcream</p>
          <a
            href="https://www.instagram.com/ccscoffeeandcream"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-small instagram-btn"
          >
            Follow Us
          </a>
        </article>

        <article className="contact-card scroll-animate delay-3">
          <i className="fas fa-map-marker-alt contact-icon"></i>
          <h3>Location</h3>
          <p>Charlotte, NC</p>
          <a href="/events" className="btn-primary-small">
            See Events
          </a>
        </article>
      </div>
    </section>
  );
}

export default ContactPage;
