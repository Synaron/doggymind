import React from 'react'
import Row from 'react-bootstrap/esm/Row'; 
import Col from 'react-bootstrap/esm/Col';
import HalfCirclePic from '../components/HalfCirclePic';
import '../assets/css/AngeboteBlock.css';


// Inside AngeboteBlock component
function AngeboteBlock({ imageUrl, data, index }) {
  const titles = data.map(item => item.title);

  return (
  <div>
      {index % 2 === 0 && <h1>Mein Angebot</h1>}
      <Row>
        {index % 2 === 0 ? (
          <>
            <Col md={8} id="background-angebote">
              <ul id="title-list">
                {titles.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul>
            </Col>
            <Col md={4}>
              <HalfCirclePic imageUrl={imageUrl} />
            </Col>
          </>
        ) : (
          <>
            <Col md={4}>
              <HalfCirclePic imageUrl={imageUrl} />
            </Col>
            <Col md={8} id="background-angebote">
              <ul id="title-list">
                {titles.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
}

export default AngeboteBlock;