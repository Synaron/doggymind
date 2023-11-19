import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import PfoteIconImage from '../assets/images/PfoteIcon.png';

const Pfote = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const { y } = useScroll({
    domTarget: window,
    onScroll: ({ xy: [scrollX, scrollY] }) => {
      setScrollPosition(Math.abs(scrollY));
    },
  });

  // Log the scroll position to the console
  console.log('Scroll Position:', y);

  // Adjust the number of icons and their positions as needed
  const icons = [
    { id: 1, top: 0 },
    { id: 2, top: 25 },
    { id: 3, top: 50 },
    // Add more icons with their respective positions
  ];

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      {icons.map((icon) => (
        <PfoteIcon key={icon.id} top={icon.top} scrollPosition={y} />
      ))}
    </div>
  );
};

const PfoteIcon = ({ top, scrollPosition }) => {
  const opacityProps = useSpring({
    opacity: Math.max(0, 1 - (scrollPosition - top) / 100),
    onRest: () => {
      const opacityValue = opacityProps.opacity.get();
      console.log('Animation Rest - Opacity:', opacityValue, 'scrollPosition:', scrollPosition, 'top:', top);
      if (isNaN(opacityValue)) {
        console.error('Opacity is NaN - scrollPosition:', scrollPosition, 'top:', top);
      }
    },
  });

  return (
    <animated.div
      style={{
        position: 'absolute',
        top: `${top}%`,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '50px',
        height: '50px',
        backgroundImage: `url(${PfoteIconImage})`,
        backgroundSize: 'cover',
        borderRadius: '50%',
        ...opacityProps,
      }}
    />
  );
};

export default Pfote;
