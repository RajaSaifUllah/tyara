

// MiddleClassService.js
import './App.css';
import React, { useState } from 'react';
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
    description: 'Comfortable seating,',
  },
  {
    id: 2,
    name: 'Gujar Hero',
    imageUrl: Bus2,
    description: 'Spacious interiors, ',
  },
  {
    id: 3,
    name: 'Gujar Styler',
    imageUrl: Bus3,
    description: 'Luxurious seating, ',
  },
  {
    id: 4,
    name: 'Gujar super',
    imageUrl: Bus4,
    description: 'Eco-friendly,',
  },
  {
    id: 5,
    name: 'Gujar mover',
    imageUrl: Bus5,
    description: 'energy-efficient, ',
  },
  {
    id: 6,
    name: 'Gujar Express',
    imageUrl: Bus6,
    description: 'Reliable, ',
  },
  {
    id: 7,
    name: 'Gujar Honda',
    imageUrl: Bus7,
    description: 'Comfortable seating, ',
  },
  {
    id: 8,
    name: 'Gujar Layari',
    imageUrl: Bus8,
    description: 'Travel one',
  },
  {
    id: 9,
    name: 'Gujar Fly',
    imageUrl: Bus9,
    description: 'You will happy',
  },
  {
    id: 10,
    name: 'Gujar Death',
    imageUrl: Bus10,
    description: 'You will calm',
  },
  // Add more bus data as needed
];

const MiddleClassService = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedRoutes, setSelectedRoutes] = useState([]);
  const routes = [
    { name: 'Rawat', price: 140 },
    { name: 'Gujar Khan', price: 300 },
    { name: 'Sohawa', price: 400 },
    { name: 'Jehlum', price: 500 },
    { name: 'ShakarGarh', price: 750 },
    { name: 'Sialkot', price: 1000 },
  ];

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleCheckboxChange = (routeName) => {
    if (selectedRoutes.includes(routeName)) {
      setSelectedRoutes((prevRoutes) => prevRoutes.filter((route) => route !== routeName));
    } else {
      setSelectedRoutes((prevRoutes) => [...prevRoutes, routeName]);
    }
  };

  const handleBuyTicket = (e) => {
    e.preventDefault();
    // Add your logic for handling the form data here
    alert(`Selected route: ${selectedRoutes.join(', ')} ,,,your information has been recieved ,,,we will share your ticket soon`);
    closeForm();
  };

  return (
    <div>
      {isFormOpen && (
        <div className="buy-ticket-form">
          <h3>select your Route</h3>
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
          <h3>Buy Ticket</h3>
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

      <h2>Middle Class Service</h2>
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

export default MiddleClassService;
