import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import HalfCirclePic from './HalfCirclePic'

function AngeboteBlock({imageUrl}) {
  return (
    <div>
        <Row>
            <Col md={6}>
            <HalfCirclePic imageUrl = {imageUrl} />
            </Col>
        
            <Col md={6}>
                <ul>
                    <li>Text 1</li>
                    <li>Text 1</li>
                    <li>Text 1</li>
                    <li>Text 1</li>
                </ul>  
            </Col>
        </Row>
    </div>
  )
}

export default AngeboteBlock