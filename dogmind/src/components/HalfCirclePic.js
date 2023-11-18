// HalfCirclePic.js
import React from 'react';
import '../assets/css/HalfCirclePic.css';

const HalfCirclePic = ({imageUrl} ) => {
  return (
    <div className="half-circle-container">
      <img
        src={imageUrl} 
        alt="Welpen-Training"
        className="half-circle-image"
      />
    </div>
  );
};

export default HalfCirclePic;
