// IntroSub.js

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/css/IntroSub.css'

function IntroSub({ trainingData }) {
  // Check if trainingData is defined and has at least one element
  if (!trainingData || trainingData.length === 0) {
    return <p>No training data available.</p>;
  }

  const training = trainingData[0];

  return (
    <div>
      <Row>
        <Col md={6} className="left-column">
          {/* Left column for description */}
          <h3 className='text-center mb-3'>{training.descriptionTitle}</h3>
          <p>{training.description}</p>
          <p>{training.seconddescription}</p>
        </Col>
        <Col md={6} className="right-column">
          {/* Right column for contents */}
          <h3 className='text-center'> Mögliche Themen im Einzeltraining:</h3>
          <ul>
            {training.contents.map((content, index) => (
              <li key={index}>
                <div className="icon" />
                {content}
              </li>
            ))}
          </ul>
          <p id="intro-sub-note">{training.note}</p>
        </Col>
      </Row>
      <Row>
      <a href="/" className="text-center text-white p-3 w-100 d-block mb-0" style={{ fontSize: '1.5rem', backgroundColor: '#f6be00b3', fontWeight: 'bold' }}>
      Zurück zur Homepage
      </a>
      </Row>
    </div>
  );
}

export default IntroSub;
