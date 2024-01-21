
// MiddleClassService.js
import './App.css';
import React from 'react';
import Bus1 from './bus1.jpeg';
import Bus2 from './bus2.jpeg';
import Bus3 from './bus3.jpeg';
import Bus4 from './bus4.jpeg';
import Bus5 from './bus5.jpeg';
import Bus6 from './bus6.jpeg';
import Bus7 from './bus7.jpeg';
import Bus8 from './bus8.jpeg';
import Bus9 from './bus9.jpeg';
import Bus10 from './bus10.jpeg';

const busData = [
  {
    id: 1,
    name: 'Gujar Badshah',
    imageUrl: Bus1,
    description: 'Comfortable seating, air-conditioned, and Wi-Fi available.',
  },
  {
    id: 2,
    name: 'Gujar Hero',
    imageUrl: Bus2,
    description: 'Spacious interiors, entertainment system, and on-board.',
  },
  {
    id: 3,
    name: 'Gujar Styler',
    imageUrl: Bus3,
    description: 'Luxurious seating, panoramic windows, and VIP service.',
  },
  {
    id: 4,
    name: 'Gujar super',
    imageUrl: Bus4,
    description: 'Eco-friendly, energy-efficient, and modern design.',
  },
  {
    id: 5,
    name: 'Gujar mover',
    imageUrl: Bus5,
    description: 'Eco-friendly, energy-efficient, great bus.',
  },
  {
    id: 6,
    name: 'Gujar Express',
    imageUrl: Bus6,
    description: 'Reliable, energy-efficient, and modern design.',
  },
  {
    id: 7,
    name: 'Gujar Honda',
    imageUrl: Bus7,
    description: 'Comfortable seating, air-conditioned, and Wi-Fi available.',
  },
  {
    id: 8,
    name: 'Gujar Layari',
    imageUrl: Bus8,
    description: 'Travel one time travel next time inshallah',
  },
  {
    id: 9,
    name: 'Gujar Fly',
    imageUrl: Bus9,
    description: 'You will feel just like an airplane you are flying',
  },
  {
    id: 10,
    name: 'Gujar Death',
    imageUrl: Bus10,
    description: 'You will reach the destination or death.',
  },
  // Add more bus data as needed
];

const MiddleClassService = () => {
  const handleBuyTicket = () => {
    alert("We are working upon the backend, so soon you will be able to buy tickets online");
  };

  return (
    <div className="middle-class-service">
      <h2>Middle Class Service</h2>
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

export default MiddleClassService;
