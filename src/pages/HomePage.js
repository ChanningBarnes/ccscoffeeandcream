// src/pages/HomePage.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import ReviewCard from '../components/ReviewCard';
import reviews from '../data/reviewData'; // Import mock review data
import '../App.css'; // For general styles like container

function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <p className="section-description">
            Founded with a passion for exceptional coffee and a dream to create a welcoming community space, Your Coffee Shop is more than just a place for a brew. It's where friendships are forged, ideas are born, and moments are savored. We meticulously source our beans and craft each drink with care, ensuring every visit is a delightful experience.
          </p>
          <img src="/images/shop.jpg" alt="Coffee Shop Interior" className="full-width-img" />
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="reviews-grid">
            {reviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

export default HomePage;