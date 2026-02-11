// src/components/EventCard.js
import React from 'react';
import './EventCard.css';

function EventCard({ event }) {
  // Create Google Maps URL for the address
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`;

  return (
    <div className="event-card">
      <h4 className="event-title">{event.title}</h4>
      <p className="event-date">
        <i className="far fa-calendar-alt"></i> {event.date}
      </p>
      <p className="event-time">
        <i className="far fa-clock"></i> {event.time}
      </p>
      <p className="event-description">{event.description}</p>
      <p className="event-address">
        <i className="fas fa-map-marker-alt"></i>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="address-link"
        >
          {event.address}
        </a>
      </p>
    </div>
  );
}

export default EventCard;
