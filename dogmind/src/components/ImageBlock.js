import React from 'react'
import RoundedImage from './RoundedImage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intro1 from '../assets/images/Intro1.png';
import Intro2 from '../assets/images/Intro2.png';

function ImageBlock() {
  return (
    <Container>
    <Row>
      <Col><RoundedImage img={Intro1} /></Col>
      <Col><RoundedImage img={Intro2} /></Col>

    </Row>
  </Container>
  )
}

export default ImageBlock