// src/pages/AboutPage.js
import React from 'react';
import '../App.css';

function AboutPage() {
  return (
    <div className="page-section container">
      <h2 className="section-title">Our Passion for Coffee</h2>
      <p className="section-description">
        At Your Coffee Shop, every cup tells a story of dedication, quality, and community. We believe in the power of a perfect brew to brighten your day and bring people together.
      </p>

      <div className="about-content">
        <div className="about-text">
          <h3>From Bean to Cup</h3>
          <p>
            Our journey begins with responsibly sourced, high-quality beans from around the world. We partner with ethical growers who share our commitment to sustainability and excellence. Each bean is then expertly roasted to perfection, bringing out its unique flavor profile. Our skilled baristas then transform these beans into delightful beverages, ensuring consistency and artistry in every pour.
          </p>
          <h3>A Place to Connect</h3>
          <p>
            More than just a coffee shop, we aim to be a cherished local hub. Whether you're catching up with friends, working remotely, or simply enjoying a moment of solitude, our cozy and inviting atmosphere is designed for you. We host local artists, community events, and strive to be a vibrant part of Flavorville.
          </p>
          <h3>Our Commitment</h3>
          <p>
            We are committed to providing not just great coffee, but also exceptional service. Your satisfaction is our priority, and we constantly strive to innovate our menu, maintain the highest standards of hygiene, and create an experience that keeps you coming back.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/barista.jpg" alt="Our Barista preparing coffee" />
        </div>
      </div>

      <section className="section-padding bg-white" style={{marginTop: '40px', borderRadius: '10px'}}>
        <h2 className="section-title text-blue">Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h4>Quality & Craft</h4>
            <p>Every drink is a masterpiece.</p>
          </div>
          <div className="value-item">
            <h4>Community Focus</h4>
            <p>A welcoming space for all.</p>
          </div>
          <div className="value-item">
            <h4>Sustainability</h4>
            <p>Mindful sourcing and practices.</p>
          </div>
          <div className="value-item">
            <h4>Passion & Joy</h4>
            <p>Brewing happiness, daily.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;