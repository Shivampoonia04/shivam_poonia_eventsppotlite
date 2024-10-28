// src/mockData.js
import musicFestivalImage from './assets/music_festival.jpeg';
import artExhibitionImage from './assets/art_exhibition.jpeg';
import foodTruckRallyImage from './assets/food_truck_rally.jpeg';
import download from './assets/download.png';
import bonfire from './assets/bonfire.jpeg';
import pool from './assets/pool.jpg';

const events = [
    {
        id: 1,
        name: "Music Festival",
        date: "2024-12-25",
        location: "Central Park",
        description: "Join us for a day of music and fun!",
        image: musicFestivalImage, // Use the imported image
    },
    {
        id: 2,
        name: "Art Exhibition",
        date: "2024-12-26",
        location: "Downtown Gallery",
        description: "Explore the latest contemporary art.",
        image: artExhibitionImage, // Use the imported image
    },
    {
        id: 3,
        name: "Food Truck Rally",
        date: "2024-12-27",
        location: "City Square",
        description: "Taste delicious food from local trucks.",
        image: foodTruckRallyImage, // Use the imported image
    },
    {
        id: 4,
        name: "Craft Beer Festival",
        date: "2024-12-28",
        location: "Vineyard Estate",
        description: "Sample a variety of craft beers from local breweries and enjoy live music and food pairings!",
        image: download , // Use the imported image
    },
    {
        id: 5,
        name: "Beach Bonfire Party",
        date: "2024-12-29",
        location: "Sky Lounge",
        description: "Enjoy a night under the stars with a bonfire, s'mores, and acoustic music by the beach.",
        image: bonfire , // Use the imported image
    },
    {
        id: 6,
        name: "Summer Pool Party",
        date: "2024-12-30",
        location: "Grand Ballroom",
        description: "Life is better by the pool. Copy Caption.",
        image: pool , // Use the imported image
    },
];

export default events;