// src/pages/AboutPage.js
import React, { useEffect } from 'react';
import '../App.css';

function AboutPage() {
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
    <section className="about-page">
      <h1 className="page-title">Our Passion for Coffee</h1>

      <article className="about-content scroll-animate">
        <p>
          CC's Coffee & Cream owner, Cortlyn, is a seasoned beverage professional
          with a passion for community and making great drinks. Together with her
          mother, we are popping up around Charlotte and the surrounding areas,
          spreading joy one drink at a time.
        </p>
        <p>
          Cortlyn is a vegetarian and prides herself on running a vegan business.
          As a women-owned, minority business, our goal is to support other
          women-owned minority businesses.
        </p>
      </article>

      <figure className="about-image scroll-animate delay-2">
        <img src="/images/momandcort.jpeg" alt="Cortlyn and Mom" />
      </figure>
    </section>
  );
}

export default AboutPage;
