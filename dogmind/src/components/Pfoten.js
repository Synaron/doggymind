// Paw.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const Paw = ({ left, setLeft }) => {
  const props = useSpring({
    from: { transform: 'translateX(0)', bottom: '20px' },
    to: { transform: 'translateX(100%)', bottom: '30px' },
    reset: true,
    reverse: true,
    onRest: () => set(!left),
  });

  return (
    <animated.div
      style={{
        position: 'absolute',
        height: '50px',
        width: '50px',
        backgroundColor: '#007bff', // Blue color, you can change it
        borderRadius: '50%',
        ...props,
      }}
    />
  );
};

export default Paw;
