import React from 'react';
import { Row, Col } from 'react-bootstrap'; // Assuming you are using Bootstrap components
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom
import HalfCirclePic from './HalfCirclePic';

function AngeboteBlock({ data, Image1, Image2 }) {
  return (
    <Row>
      <Col md={3}>
        <div>
          <HalfCirclePic image={Image1} />
        </div>
      </Col>
      <Col md={3}>
        <ul id="title-list">
          {data.map((item, idx) => (
            <Link key={idx} to={`/${item.title}`} className="custom-link">
              {item.title}
            </Link>
          ))}
        </ul>
      </Col>
      <Col md={3}>
        <ul id="title-list">
          {data.map((item, idx) => (
            <Link key={idx} to={`/${item.title}`} className="custom-link">
              {item.title}
            </Link>
          ))}
        </ul>
      </Col>
      <Col md={3}>
        <div>
          <HalfCirclePic image={Image2} />
        </div>
      </Col>
    </Row>
  );
}

export default AngeboteBlock;
