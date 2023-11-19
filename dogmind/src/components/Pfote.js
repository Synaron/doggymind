// Paw.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const Pfote = ({ left, setLeft, PfoteIcon }) => {
  const props = useSpring({
    from: { transform: 'translateX(0%)', bottom: '20px' },
    to: { transform: 'translateX(100%)', bottom: '30px' },
    reset: true,
    reverse: left, // Reverse animation based on the 'left' state
    onRest: () => setLeft(!left),
  });

  return (
    <animated.div
      style={{
        position: 'absolute',
        height: '50px',
        width: '50px',
        backgroundImage: `url(${PfoteIcon})`, // Use the paw icon as the background image
        backgroundSize: 'cover',
        borderRadius: '50%',
        ...props,
      }}
    />
  );
};

export default Pfote;
