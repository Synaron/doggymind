import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageBlock from './ImageBlock';

function Intro({ firstWord, secondWord, secondPhrase, firstParagraph, secondParagraph }) {
  const paragraphStyle = {
    fontFamily: 'AnHanken Grotesk',
    fontSize: '1rem', // Adjust the font size as needed
  };

  return (
    <Container fluid id="Intro2">
      <Row style={{ display: 'flex', alignItems: 'stretch' }}>
        <Col className='intro-text-block' md={6}>
          <h1>{firstWord} <span style={{ color: '#F6BE00' }}>{secondWord}</span> {secondPhrase}</h1>
          <p style={paragraphStyle}>{firstParagraph}</p>
          <p style={paragraphStyle}>{secondParagraph}</p>
        </Col>
        <Col style={{ padding: 0 }} md={6}>
          <ImageBlock />
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
