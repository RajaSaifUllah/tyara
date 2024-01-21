
// App.js
import React, { useState } from 'react';
import Navigation from './Navigation';
import OwnersInfo from './OwnersInfo';
import MiddleClassService from './MiddleClassService';
// import Home from './Home'; // If you have a Home component, you can uncomment this line
 import VipService from './VipService'; // If you have a VipService component, you can uncomment this line
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      // case 'home':
      //   return <Home />;
      case 'middle-class-service':
        return <MiddleClassService />;
       case 'Vip-service':
         return <VipService />;
      default:
        return <OwnersInfo />;
    }
  };

  return (
    <div>
       
      {/* Header with Navigation */}
      <Navigation handleNavigation={handleNavigation} />

      {/* Render the selected page */}
      {renderPage()}
    </div>
  );
}

export default App;
