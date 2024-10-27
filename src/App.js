// src/App.js
import React, { useState } from 'react';
import events from './mockData'; // Ensure this file contains your event data
import EventCard from './components/EventCard';
import EventDetailsModal from './components/EventDetailsModal';
import SearchBar from './components/SearchBar';
import './styles.css';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Filter events based on search term
    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle event card click
    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    // Close the modal
    const closeModal = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="app">
            <h1>EventSpot Lite</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="event-list">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map(event => (
                        <EventCard key={event.id} event={event} onClick={handleEventClick} />
                    ))
                ) : (
                    <p>No events found.</p> // Message when no events match the search
                )}
            </div>
            {selectedEvent && (
                <EventDetailsModal event={selectedEvent} onClose={closeModal} />
            )}
        </div>
    );
};

export default App;