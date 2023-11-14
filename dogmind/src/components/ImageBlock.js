import React from 'react'
import RoundedImage from './RoundedImage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intro1 from '../assets/images/Intro1.png';
import Intro2 from '../assets/images/Intro2.png';
import '../assets/css/ImageBlock.css';

function ImageBlock() {
  return (
    <Container className="image-block-container">
    <Row>
      <Col className='Intro1'><RoundedImage img={Intro1} /></Col>
      <Col className='Intro2'><RoundedImage img={Intro2} /></Col> 
    </Row>
  </Container>
  )
}

export default ImageBlock