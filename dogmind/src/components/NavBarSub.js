// Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import '../assets/css/NavBar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link style={{ color: '#ffffff' }} href="/#Intro2">
            Über mich
          </Link>
        </li>
        <li>
          <Link style={{ color: '#ffffff' }} href="/#Probleme">
            Häufige Probleme
          </Link>
        </li>
        <li>
          <Link style={{ color: '#ffffff' }} href="/#Angebote">
            Mein Training
          </Link>
        </li>
        <li>
          <Link style={{ color: '#ffffff' }} href="/FAQ">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
