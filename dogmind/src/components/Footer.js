// Footer.js
import React from 'react';
import Col from 'react-bootstrap/esm/Col';  
import '../assets/css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Col title="Data and Impressum">
        <p>Impressum</p>
        <p>Datenschutz</p>
      </Col>

      <Col title="Copyright">
        <p>&copy; 2023 Your Company Name. All Rights Reserved.</p>
      </Col>

      <Col title="Social Media">
        {/* Add social media icons and links here */}
      </Col>
    </footer>
  );
};

export default Footer;
