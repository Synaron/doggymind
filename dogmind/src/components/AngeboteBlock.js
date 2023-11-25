import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HalfCirclePic from './HalfCirclePic';
import '../assets/css/AngeboteBlock.css';

function AngeboteBlock({ data, Image1, Image2 }) {
  // Calculate the midpoint of the data array
  const midpoint = Math.ceil(data.length / 2);

  // Split the data array into two halves
  const firstHalf = data.slice(0, midpoint);
  const secondHalf = data.slice(midpoint);

  return (
    <Row>
      
      <Col md={3} className={`ml-auto mr-0`}>
        <div>
        <HalfCirclePic imageUrl={Image1} shouldReverse={true} altText="Welpe" />
        </div>
      </Col>
      <Col md={3} id="background-angebote">
        <ul id="title-list">
          {firstHalf.map((item, idx) => (
            <Link key={idx} to={`/${item.title}`} className="custom-link">
              {item.title}
            </Link>
          ))}
        </ul>
      </Col>
      <Col md={3} id="background-angebote-reverse">
        <ul id="title-list-reverse">
          {secondHalf.map((item, idx) => (
            <Link key={idx} to={`/${item.title}`} className="custom-link">
              {item.title}
            </Link>
          ))}
        </ul>
      </Col>
      <Col md={3} className={`ml-auto mr-0`}>
        <div>
          <HalfCirclePic imageUrl={Image2} />
        </div>
      </Col>
    </Row>
  );
}

export default AngeboteBlock;
