import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link as RouterLink } from 'react-router-dom';
import '../assets/css/AngeboteBlock.css';
import Angebote from '../assets/images/Angebote/Angebote.png';

function AngeboteBlock({ data }) {

  // Calculate the midpoint of the data array
  const midpoint = Math.ceil(data.length / 2);

  // Split the data array into two halves
  const firstHalf = data.slice(0, midpoint);
  const secondHalf = data.slice(midpoint);

  return (
    <Row id="Angebote" className="m-0 p-0">
      <Col md={4} id="background-angebote">
        <ul id="title-list">
          {firstHalf.map((item, idx) => (
            <RouterLink 
              key={idx} 
              to={`/${item.title.toLowerCase().replace(/\s+/g, '-')}`} 
              className="angebote-button"
            >
              {item.title}
            </RouterLink>
          ))}
        </ul>
      </Col>
      <Col md={4} className="d-flex align-items-center justify-content-center m-0 p-0">
        <img id="angebote-img" src={Angebote} alt="Angebote Image" />
      </Col>
      <Col md={4} id="background-angebote-reverse">
        <ul id="title-list-reverse">
          {secondHalf.map((item, idx) => (
            <RouterLink 
              key={idx} 
              to={`/${item.title.toLowerCase().replace(/\s+/g, '-')}`} 
              className="angebote-button-reverse"
              style={{ color: 'rgba(246, 190, 0, 0.7)' }}
            >
              {item.title}
            </RouterLink>
          ))}
        </ul>
      </Col>
    </Row>
  );
}

export default AngeboteBlock;
