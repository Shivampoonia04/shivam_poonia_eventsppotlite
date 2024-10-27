// src/components/EventCard.js
import React from 'react';

const EventCard = ({ event, onClick }) => {
    return (
        <div className="event-card" onClick={() => onClick(event)}>
            <img src={event.image} alt={event.name} />
            <h2>{event.name}</h2>
            <p>{event.date}</p>
            <p>{event.location}</p>
        </div>
    );
};

export default EventCard;