import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();
  const prevLocation = useRef(location);

  const scrollToTop = () => {
    const element = document.getElementById('welpenJunghundID');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (location !== prevLocation.current) {
        prevLocation.current = location;
        scrollToTop();
      }
    }, 0); // Adjust the interval duration as needed

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [location]);

  return null;
}

export default ScrollToTop;
