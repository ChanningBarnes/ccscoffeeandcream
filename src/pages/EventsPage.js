// src/pages/EventsPage.js
import React, { useEffect } from 'react';
import EventCard from '../components/EventCard';
import events from '../data/eventData';
import '../App.css';

function EventsPage() {
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
    <section className="events-page">
      <h1 className="page-title">Upcoming Events</h1>
      <p className="page-subtitle">Find us at these locations around Charlotte!</p>

      <div className="events-list">
        {events.map((event, index) => (
          <article key={event.id} className={`scroll-animate delay-${(index % 3) + 1}`}>
            <EventCard event={event} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default EventsPage;
