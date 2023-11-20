import React from 'react';
import Pfotenabdrücke from './Pfotenabdrücke';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../assets/css/PfotenHeading.css';


function PfotenHeading({ title }) {
  return (
    <Row id='Pfoten-heading'>
      <Col sm={5}>
        <Pfotenabdrücke />
      </Col>
      <Col sm={2}>
       <h1>{title}</h1>
      </Col>
      <Col sm={5}>
        <Pfotenabdrücke />
      </Col>
    </Row>
  );
}

export default PfotenHeading;
