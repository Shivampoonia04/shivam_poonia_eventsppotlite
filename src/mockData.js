// src/mockData.js
import musicFestivalImage from './assets/music_festival.jpeg';
import artExhibitionImage from './assets/art_exhibition.jpeg';
import foodTruckRallyImage from './assets/food_truck_rally.jpeg';

const events = [
    {
        id: 1,
        name: "Music Festival",
        date: "2024-10-25",
        location: "Central Park",
        description: "Join us for a day of music and fun!",
        image: musicFestivalImage, // Use the imported image
    },
    {
        id: 2,
        name: "Art Exhibition",
        date: "2024-10-25",
        location: "Downtown Gallery",
        description: "Explore the latest contemporary art.",
        image: artExhibitionImage, // Use the imported image
    },
    {
        id: 3,
        name: "Food Truck Rally",
        date: "2024-10-25",
        location: "City Square",
        description: "Taste delicious food from local trucks.",
        image: foodTruckRallyImage, // Use the imported image
    },
];

export default events;