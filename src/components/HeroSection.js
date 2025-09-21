// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Add the image here, before the text */}
        <img src="/images/cchero.png" alt="Coffee pouring into a cup" className="hero-main-image" />

        <h1>Nostalgia in Drink Form</h1>
        <div className="hero-buttons">
          <a href="/events" className="btn-primary">Upcoming Events</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
