import React from 'react';
import '../assets/css/PawPrints.css'; // Import the CSS file

const PawPrints = () => {
  return (
    <div className="paw-container">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="paw-icon" style={{ animationDelay: `${index * 0.5}s` }} />
      ))}
    </div>
  );
};

export default PawPrints;
