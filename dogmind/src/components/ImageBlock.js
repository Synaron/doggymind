import React from 'react';
import RoundedImage from './RoundedImage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../assets/css/ImageBlock.css';

function ImageBlock({ image1, image2 }) {
  return (
    <Container className="image-block-container">
      <Row>
        <Col className="mt-4">
          <RoundedImage img={image1} />
        </Col>
        <Col className="mt-25">
          <RoundedImage img={image2} />
        </Col>
      </Row>
    </Container>
  );
}

export default ImageBlock;