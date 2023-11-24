import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageBlock from './ImageBlock';

function IntroSub({
  firstWord,
  secondWord,
  secondPhrase,
  firstParagraph,
  secondParagraph,
  listStyle,
  image1,
  image2,
}) {
  const paragraphStyle = {
    fontFamily: 'AnHanken Grotesk',
    fontSize: '1.2rem', // Adjust the font size as needed
  };

  const listStyleConstant = {
    listStyleType: 'disc', // You can customize this as needed
    marginLeft: '12rem', // Adjust the left margin as needed
  };

  return (
    <Container fluid>
      <Row style={{ display: 'flex', alignItems: 'stretch' }}>
        <Col className='intro-text-block' md={6}>
          <h1>
            {firstWord} <span style={{ color: '#F6BE00' }}>{secondWord}</span>{' '}
            {secondPhrase}
          </h1>
          <p style={paragraphStyle}>{firstParagraph}</p>
                    {Array.isArray(listStyle) ? (
            <ul style={{ ...paragraphStyle, ...listStyleConstant }}>
              {listStyle.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p style={paragraphStyle}>{listStyle}</p>
          )}
          <p style={paragraphStyle}>{secondParagraph}</p>
        </Col>
        <Col style={{ padding: 0 }} md={6}>
          <ImageBlock image1={image1} image2={image2} />
        </Col>
      </Row>
    </Container>
  );
}

export default IntroSub;
