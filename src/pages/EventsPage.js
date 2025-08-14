// src/pages/EventsPage.js
import React from 'react';
// import EventCard from '../components/EventCard';
// import events from '../data/eventData'; // Import your event data
import '../App.css'; // For general styles

function EventsPage() {
  return (
    <div className="page-section container">
      <h2 className="section-title">Upcoming Events</h2>
      <p className="section-description">
        We have no events scheduled currently. Check our calendar regularly for new additions!
      </p>
      
      {/* <div className="events-grid">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div> */}
    </div>
  );
}

export default EventsPage;