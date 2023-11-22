import React, { useRef, useEffect, useState } from 'react';
import RoundedImage from './RoundedImage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../assets/css/ImageBlock.css';

function ImageBlock({ image1, image2 }) {
  const [textColumnHeight, setTextColumnHeight] = useState('auto');
  const textColumnRef = useRef(null);

  useEffect(() => {
    // Update the background height when the component mounts or when the text column height changes
    const updateBackgroundHeight = () => {
      if (textColumnRef.current) {
        setTextColumnHeight(`${textColumnRef.current.clientHeight}px`);
      }
    };

    // Initial update
    updateBackgroundHeight();

    // Listen for resize events
    window.addEventListener('resize', updateBackgroundHeight);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateBackgroundHeight);
    };
  }, []);

  return (
    <Container className="image-block-container" style={{ height: textColumnHeight }}>
      <Row>
        <Col ref={textColumnRef}>
          {/* Your text content goes here */}
        </Col>
        <Col>
          <RoundedImage img={image1} />
        </Col>
        <Col>
          <RoundedImage img={image2} />
        </Col>
      </Row>
    </Container>
  );
}

export default ImageBlock;
