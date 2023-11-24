import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

// Import your SVG files
import svg1 from '../assets/images/svgs/1.svg';
import svg2 from '../assets/images/svgs/2.svg';
import svg3 from '../assets/images/svgs/3.svg';
// ... add more imports for additional SVGs

const svgs = [svg1, svg2, svg3]; // Add more SVGs to this array

const AnimatedSVGSeries = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % svgs.length);
    }, 1000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    onRest: () => setIndex((prevIndex) => (prevIndex + 1) % svgs.length),
  });

  return (
    <animated.div style={props}>
      <img src={svgs[index]} alt={`SVG ${index + 1}`} />
    </animated.div>
  );
};

export default AnimatedSVGSeries;
