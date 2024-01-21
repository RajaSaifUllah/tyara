// Header.js
import './App.css';
import React from 'react';

const Navigation = ({ handleNavigation }) => {
  return (
    <div>
      <h1>Gujar Tyara</h1>

      {/* Navigation */}
      <nav>
      <ul>
        <li onClick={() => handleNavigation('home')}>Home</li>
        <li onClick={() => handleNavigation('middle-class-service')}>MiddleClassService</li>
        <li onClick={() => handleNavigation('Vip-service')}>VipService</li>
      </ul>
    </nav>
      
    </div>
  );
};

export default Navigation;
