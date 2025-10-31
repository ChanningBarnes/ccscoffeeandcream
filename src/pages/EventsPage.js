// src/pages/EventsPage.js
import React from 'react';
import EventCard from '../components/EventCard';
import events from '../data/eventData'; // Import your event data
import '../App.css'; // For general styles

function EventsPage() {
  return (
    <>
          <h1 className="page-title">Upcoming Events</h1>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </>
  );
}

export default EventsPage;
