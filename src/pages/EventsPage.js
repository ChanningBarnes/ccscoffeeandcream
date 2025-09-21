// src/pages/EventsPage.js
import React from 'react';
import EventCard from '../components/EventCard';
import events from '../data/eventData'; // Import your event data
import '../App.css'; // For general styles

function EventsPage() {
  return (
    <div className="events-grid">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      
      /* <div className="events-grid">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div> */
  );
}

export default EventsPage;