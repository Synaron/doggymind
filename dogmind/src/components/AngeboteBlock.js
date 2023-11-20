import React from 'react'
import Row from 'react-bootstrap/esm/Row'; 
import Col from 'react-bootstrap/esm/Col';
import HalfCirclePic from '../components/HalfCirclePic';
import '../assets/css/AngeboteBlock.css';

// Inside AngeboteBlock component
function AngeboteBlock({ imageUrl, data, index }) {
  const titles = data.map(item => item.title);
  const shouldReverse = index % 2 !== 0; // Determine if HalfCirclePic should be reversed

  return (
    <div>
      <Row>
        {index % 2 === 0 ? (
          <>
            <Col md={4} id="background-angebote"></Col>
            <Col md={4} id="background-angebote">
              <ul id="title-list">
                {titles.map((title, idx) => (
                  <li key={idx}>{title}</li>
                ))}
              </ul>
            </Col>
            <Col md={4} className={`ml-auto ${shouldReverse ? 'mr-0' : ''}`}>
              <HalfCirclePic imageUrl={imageUrl} shouldReverse={shouldReverse} />
            </Col>
          </>
        ) : (
          <>
            <Col md={4} className={`ml-auto d-flex justify-content-end ${shouldReverse ? 'mr-0' : ''}`}>
              <HalfCirclePic imageUrl={imageUrl} shouldReverse={shouldReverse} />
            </Col>
            <Col md={4} id="background-angebote-reverse">
              <ul id="title-list-reverse">
                {titles.map((title, idx) => (
                  <li key={idx}>{title}</li>
                ))}
              </ul>
            </Col>
            <Col md={4} id="background-angebote-reverse"></Col>
          </>
        )}
      </Row>
    </div>
  );
}

export default AngeboteBlock;
