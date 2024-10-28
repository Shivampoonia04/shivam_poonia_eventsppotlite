// src/components/EventGallery.js
import React from 'react';
import foodTruckRally from '../assets/food_truck_rally.jpg';
import artExhibition from '../assets/art_exhibition.jpg';
import musicFestival from '../assets/music_festival.jpg';
import './EventGallery.css'; // Import the CSS file for styling

const EventGallery = () => {
    return (
        <div className="event-gallery">
            <h1>Upcoming Events</h1>
            <div className="event">
                <img src={foodTruckRally} alt="Food Truck Rally" />
                <h2>Food Truck Rally</h2>
            </div>
            <div className="event">
                <img src={artExhibition} alt="Art Exhibition" />
                <h2>Art Exhibition</h2>
            </div>
            <div className="event">
                <img src={musicFestival} alt="Music Festival" />
                <h2>Music Festival</h2>
            </div><div className="event">
                <img src={Craft Beer Festival} alt="Craft Beer Festival" />
                <h2>Music Festival</h2>
            </div>
        </div>
    );
};

export default EventGallery;