// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-image-container">
          <video className="hero-video" autoPlay muted loop>
            <source src="/images/coffeeshort.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <div className="hero-image-overlay">
            <h1>Nostalgia You Can Taste</h1>
          </div> */}
        </div>

        <div className="hero-buttons">
          <a href="/events" className="btn-primary">Upcoming Events</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
