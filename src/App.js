import React, { useState } from 'react';
import events from './mockData';
import EventCard from './components/EventCard';
import EventDetailsModal from './components/EventDetailsModal';
import SearchBar from './components/SearchBar';
import PropTypes from 'prop-types';
import './styles.css';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEvent, setSelectedEvent] = useState(null);

    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

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
                    <p>No events found.</p>
                )}
            </div>
            {selectedEvent && (
                <EventDetailsModal event={selectedEvent} onClose={closeModal} />
            )}
        </div>
    );
};

// You can remove the PropTypes definition if there are no props passed to App
App.propTypes = {
    events: PropTypes.array, // Adjust based on your actual props (currently not needed)
};

export default App;