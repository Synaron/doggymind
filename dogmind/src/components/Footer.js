import React from 'react'

function Footer() {
  return (
    <div>
        // Footer.js
import React from 'react';
import Column from './Column'; // Create a separate Column component

const Footer = () => {
  return (
    <footer>
        <Column title="Data and Impressum">
            <p>Impressum</p>
            <p>Datenschutz</p>
        </Column>

        <Column title="Copyright">
            <p>&copy; 2023 Your Company Name. All Rights Reserved.</p>
        </Column>

        <Column title="Social Media">
            {/* Add social media icons and links here */}
        </Column>

      
    </footer>
  );
};

export default Footer;

    </div>
  )
}

export default Footer