import React, { useState, useEffect } from 'react';
import '../assets/css/PawIcon.css'; // Import the CSS file for styling
import PfoteIcon from '../assets/images/PfoteIcon.png';


const PawIcon = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="paw-icon" style={{ left: `${scrollPosition}px` }}>
      {/* You can use an image tag or a background image here */}
      <img src={PfoteIcon} alt="Paw Icon" />
    </div>
  );
};

export default PawIcon;
