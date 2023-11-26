// ScrollToTop.js
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();
  const prevLocation = useRef(location);

  useEffect(() => {
    if (location !== prevLocation.current) {
      window.scrollTo(0, 0);
      prevLocation.current = location;
    }
  }, [location]);

  return null;
}

export default ScrollToTop;
