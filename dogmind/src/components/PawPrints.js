import React from 'react';
import '../assets/css/PawPrints.css'; // Import the CSS file

const PawPrints = () => {
  const pawCount = 5; // Number of paws

  return (
    <div className="paw-container">
      {[...Array(pawCount)].map((_, index) => (
        <div key={index} className={`paw-icon paw-${index}`} />
      ))}
    </div>
  );
};

export default PawPrints;
