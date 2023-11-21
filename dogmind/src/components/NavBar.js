// Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import '../assets/css/NavBar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="Intro2" smooth={true} duration={500}>
            Über mich
          </Link>
        </li>
        <li>
          <Link to="Probleme" smooth={true} duration={500}>
            Häufige Probleme
          </Link>
        </li>
        <li>
          <Link to="Angebote" smooth={true} duration={500}>
            Mein Training
          </Link>
        </li>
        <li>
          <Link to="FAQ" smooth={true} duration={500}>
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
