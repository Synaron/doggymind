// NavbarSub.js
import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import '../assets/css/NavBar.css';

const NavbarSub = () => {
  const handleClick = () => {
    // Scroll to the top of the page
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };

  return (
    <nav>
      <ul>
        <li>
          <Link style={{ color: '#ffffff' }} to="/">
            Back to Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarSub;
