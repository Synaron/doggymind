// FlipCard.js
import React from 'react';
import '../assets/css/FlipCard.css';
import { Row, Col } from 'react-bootstrap';

const FlipCard = ({ qaPairs }) => {
  return (
    <>
      <h1 id="heading-faq">FAQ</h1>
      <Row className="flip-card-container">
        {qaPairs.map((qaPair, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {qaPair.question}
              </div>
              <div className="flip-card-back">
                {qaPair.answer}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FlipCard;
