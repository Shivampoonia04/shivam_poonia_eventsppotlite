// src/components/EventDetailsModal.js
import React from 'react';

const EventDetailsModal = ({ event, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>{event.name}</h2>
                <img src={event.image} alt={event.name} />
                <p>{event.description}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default EventDetailsModal;