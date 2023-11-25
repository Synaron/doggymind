import React from 'react';
import PropTypes from 'prop-types';
import '../../src/assets/css/Header.css';

function Header({ title, imageUrl }) {
  const headerStyle = {
    backgroundImage: `url('${imageUrl}')`,
  };

  return (
    <div style={headerStyle} className="fullscreen-header">
      <h1>{title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Header;
