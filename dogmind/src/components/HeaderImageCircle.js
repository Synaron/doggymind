import React from 'react';
import '../assets/css/HeaderImageCircle.css';
import RoundedImage from './RoundedImage';
import { Col } from 'react-bootstrap';
import {Row} from 'react-bootstrap';

function HeaderImageCircle({ HeaderTitle, imageUrl }) {
  return (
    <>
    <Row id='background-header-img' className='d-flex align-items-center justify-content-center'>
        <Col md={6} className='d-flex align-items-center justify-content-center'>
        <div id='header-title'>{HeaderTitle}</div>
        </Col>
        <Col style={{ padding: 0 }} md={6} className='d-flex align-items-center justify-content-center'>
            {/* Pass imageUrl as a prop to RoundedImage */}
            <RoundedImage img={imageUrl} />
        </Col>
    </Row>
    
    </>
  );
}

export default HeaderImageCircle;
