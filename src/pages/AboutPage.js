// src/pages/AboutPage.js
import React from 'react';
import '../App.css';

function AboutPage() {
  return (
    <div className="page-section container">
      <h2 className="section-title">Our Passion for Coffee</h2>
      <p className="section-description">
        CC’s Coffee & Cream owner, Cortlyn,  is a seasoned beverage professional with a passion for community and making great drinks. Together with her mother, we are popping up around Charlotte and the surrounding areas, spreading joy one drink at a time. Cortlyn is a vegetarian and prides herself on running a vegan business.
As a women-owned, minority business, our goal is to support other women-owned minority businesses.
      </p>

  
        <div className="about-image">
          <img src="/images/momandcort.jpeg" alt="Our Barista preparing coffee" />
        </div>
      </div>
  );
}

export default AboutPage;