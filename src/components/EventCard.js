// src/components/EventCard.js
import React from 'react';
import './EventCard.css';

function EventCard({ event }) {
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
    </div>
  );
}

export default EventCard;