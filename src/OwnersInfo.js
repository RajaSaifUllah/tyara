

// OwnersInfo.js
import saif from "./saif.jpeg";
import talha from "./talha.jpeg";
import React from 'react';

const OwnersInfo = () => {
  return (
    <div className="images">
      <h2>Our Owners</h2>
      <div className="owner-container">
        <div className="owner">
          <img src={saif} alt="Owner 1" />
          <div className="owner-info">
            <h3>Wada Para</h3>
            <p>Education: BSSE</p>
          </div>
        </div>

        <div className="owner">
          <img src={talha} alt="Owner 2" />
          <div className="owner-info">
            <h3>Nika Para</h3>
            <p>Education: BSSE</p>
          </div>
        </div>
      </div>

      <h2>About Gugar Tyara</h2>
      <p>
        Gugar Tyara is a premier bus service that offers reliable transportation services. 
        We provide convenient online ticketing, state-of-the-art facilities, and a commitment 
        to customer satisfaction. Travel with us for a comfortable and enjoyable journey.
      </p>

      <h2>Contact Information</h2>
      <p>Our Admin section always available to you For any Query </p>

      <div className="contact-person">
        <p>Name: Muhammad Shaheer</p>
        <p>Phone: +923365146364</p>
      </div>

      <div className="contact-person">
        <p>Name: Jawad Akbar</p>
        <p>Phone: +923110154720</p>
      </div>

      <div className="Ai-version">
        <p1>Our AI Version 6 also available to help you</p1>
        <p>Name: RajaG</p>
        <p>Phone: +923485925003</p>
      </div>
    </div>
  );
};

export default OwnersInfo;
