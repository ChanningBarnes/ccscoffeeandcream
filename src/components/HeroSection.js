// src/components/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Add the image here, before the text */}
        <img src="/images/cchero.png" alt="Coffee pouring into a cup" className="hero-main-image" />

        <h1>Nostalgia You Can Taste</h1>
        <div className="hero-buttons">
          <Link to="/events" className="btn-primary">Upcoming Events</Link>
          <Link to="/order" className="btn-primary">Order Online</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
