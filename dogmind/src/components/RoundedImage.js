import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import '../assets/css/RoundedImage.css';

function RoundedImage({ img, style }) {
  return (
    <div className="rounded-image-container" style={style}>
      <Image src={img} rounded className="rounded-image" />
    </div>
  );
}

RoundedImage.propTypes = {
  img: PropTypes.string.isRequired,
  style: PropTypes.object, // Pass additional styles as an object
};

export default RoundedImage;
