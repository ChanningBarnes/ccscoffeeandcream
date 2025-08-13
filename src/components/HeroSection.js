// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Add the image here, before the text */}
        <img src="/images/cchero.png" alt="Coffee pouring into a cup" className="hero-main-image" />

        <h1>Experience the Art of Coffee</h1>
        <p>Handcrafted beverages and delicious bites in a cozy atmosphere.</p>
        <div className="hero-buttons">
          <a href="/menu" className="btn-primary">View Our Menu</a>
          <a href="/order" className="btn-primary">Order Online</a> 
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
