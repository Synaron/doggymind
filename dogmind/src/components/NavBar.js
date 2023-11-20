// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/NavBar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/angebote">Angebote</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
