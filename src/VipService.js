

// VipService.js
import React, { useState } from 'react';
import './App.css';
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
    imageUrl: Bus11,
    description: 'Comfortable seating,',
  },
  {
    id: 2,
    name: 'Heo',
    imageUrl: Bus12,
    description: 'Spacious interiors, ',
  },
  {
    id: 3,
    name: 'Faisal Movers special',
    imageUrl: Bus13,
    description: 'Luxurious seating,',
  },
  {
    id: 4,
    name: 'Bilal travellers',
    imageUrl: Bus14,
    description: 'Eco-friendly, ',
  },
  {
    id: 5,
    name: 'Honda higher',
    imageUrl: Bus15,
    description: 'Eco-friendly,',
  },
  {
    id: 6,
    name: 'Zoomer',
    imageUrl: Bus16,
    description: 'Reliable, ',
  },
  {
    id: 7,
    name: 'Tracker',
    imageUrl: Bus17,
    description: 'Comfortable seating, ',
  },
  {
    id: 8,
    name: 'Faster Backer',
    imageUrl: Bus18,
    description: 'Travel one time ',
  },
  {
    id: 9,
    name: ' Flying corner',
    imageUrl: Bus19,
    description: 'You will happy',
  },
  {
    id: 10,
    name: ' life Less',
    imageUrl: Bus20,
    description: 'You will wow',
  },
  // Add more bus data as needed
];

const VipService = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedRoutes, setSelectedRoutes] = useState([]);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    // Clear selected routes when closing the form
    setSelectedRoutes([]);
  };

  const handleBuyTicket = (e) => {
    e.preventDefault();
    // Add your logic for handling the form data here
    alert(`Selected routes: ${selectedRoutes.join(', ')} ,,,your information has been received ,,,we will share your ticket soon`);
    closeForm();
  };

  const handleCheckboxChange = (route) => {
    // Toggle the selected route
    setSelectedRoutes((prevRoutes) => {
      if (prevRoutes.includes(route)) {
        return prevRoutes.filter((r) => r !== route);
      } else {
        return [...prevRoutes, route];
      }
    });
  };

  const routes = [
    { name: 'Rawat', price: 300 },
    { name: 'Gujar Khan', price: 500 },
    { name: 'Sohawa', price: 700 },
    { name: 'Jehlum', price: 1000 },
    { name: 'ShakarGarh', price: 1300 },
    { name: 'Sialkot', price: 1800 },
  ];

  return (
    <div>
      {isFormOpen && (
        <div className="buy-ticket-form">
          <h3>Select your Route</h3>
          {routes.map((route) => (
            <div key={route.name}>
              <input
                type="checkbox"
                id={route.name}
                name={route.name}
                checked={selectedRoutes.includes(route.name)}
                onChange={() => handleCheckboxChange(route.name)}
              />
              <label htmlFor={route.name}>{`${route.name} - ${route.price}Rs`}</label>
            </div>
          ))}
          <h3>Buy VIP Ticket</h3>
          <form onSubmit={handleBuyTicket}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="cnic">CNIC</label>
              <input type="text" id="cnic" name="cnic" required />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input type="text" id="mobileNumber" name="mobileNumber" required />
            </div>
            <div className="form-actions">
              <button onClick={closeForm}>Cancel</button>
              <button type="submit">Buy</button>
            </div>
          </form>
        </div>
      )}

      <h2>VIP Service</h2>
      <div className="bus-list">
        {busData.map((bus) => (
          <div key={bus.id} className="bus-item">
            <img src={bus.imageUrl} alt={bus.name} />
            <h3>{bus.name}</h3>
            <p>{bus.description}</p>
            <button onClick={openForm}>Buy Ticket</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VipService;
