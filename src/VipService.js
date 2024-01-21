
// VipService.js
import './App.css';
import React from 'react';
import Bus11 from './bus11.jpeg';
import Bus12 from './bus12.jpeg';
import Bus13 from './bus13.jpeg';
import Bus14 from './bus14.jpeg';
import Bus15 from './bus15.jpeg';
import Bus16 from './bus16.jpeg';
import Bus17 from './bus17.jpeg';
import Bus18 from './bus18.jpeg';
import Bus19 from './bus19.jpeg';
import Bus20 from './bus20.jpeg';

const busData = [
  // ... (unchanged bus data)
  {
    id: 1,
    name: 'Faisal Movers',
    imageUrl: Bus11, // Use Bus1 for the first image
    description: 'Comfortable seating, air-conditioned, and Wi-Fi available.',
  },
  {
    id: 2,
    name: 'Heo',
    imageUrl: Bus12,
    description: 'Spacious interiors, entertainment system, and on-board.',
  },
  {
    id: 3,
    name: 'Faisal Movers special',
    imageUrl: Bus13,
    description: 'Luxurious seating, panoramic windows, and VIP service.',
  },
  {
    id: 4,
    name: 'Bilal travellers',
    imageUrl: Bus14,
    description: 'Eco-friendly, energy-efficient, and modern design.',
  },
  {
    id: 5,
    name: 'Honda higher',
    imageUrl: Bus15,
    description: 'Eco-friendly, energy-efficient, great bus.',
  },
  {
    id: 6,
    name: 'Zoomer',
    imageUrl: Bus16,
    description: 'Reliable, energy-efficient, and modern design.',
  },
  {
    id: 7,
    name: 'Tracker',
    imageUrl: Bus17,
    description: 'Comfortable seating, air-conditioned, and Wi-Fi available.',
  },
  {
    id: 8,
    name: 'Faster Backer',
    imageUrl: Bus18,
    description: 'Travel one time travel next time inshallah',
  },
  {
    id: 9,
    name: ' Flying corner',
    imageUrl: Bus19,
    description: 'You will feel just like an airplane you are flying',
  },
  {
    id: 10,
    name: ' life Less',
    imageUrl: Bus20,
    description: 'You will reach the destination at fast speed',
  },
  // Add more bus data as needed
];

const VipService = () => {
  const handleBuyTicket = () => {
    alert("We are working upon the backend, so soon you will be able to buy tickets online");
  };

  return (
    <div className="VIP-Service">
      <h2>VIP Service</h2>
      <div className="bus-list">
        {busData.map((bus) => (
          <div key={bus.id} className="bus-item">
            <img src={bus.imageUrl} alt={bus.name} />
            <h3>{bus.name}</h3>
            <p>{bus.description}</p>
            <button onClick={handleBuyTicket}>Buy Ticket</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VipService;
