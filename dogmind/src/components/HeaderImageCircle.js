import React from 'react';
import '../assets/css/HeaderImageCircle.css';
import RoundedImage from './RoundedImage';
import { Col } from 'react-bootstrap';
import {Row} from 'react-bootstrap';

function HeaderImageCircle({ HeaderTitle, imageUrl }) {
  return (
    <>
    <Row id='background-header-img'>
        <Col md={6}>
        <div id='header-title'>{HeaderTitle}</div>
        </Col>
        <Col style={{ padding: 0 }} md={6}>
            {/* Pass imageUrl as a prop to RoundedImage */}
            <RoundedImage img={imageUrl} />
        </Col>
    </Row>
    
    </>
  );
}

export default HeaderImageCircle;
