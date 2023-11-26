// ScrollToTop.js
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();
  const prevLocation = useRef(location);

  useEffect(() => {
    if (location !== prevLocation.current) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      prevLocation.current = location;
    }
  }, [location]);

  return null;
}

export default ScrollToTop;
