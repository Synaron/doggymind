import React from 'react'
import PfoteIcon from '../assets/images/PfoteIcon.png';
import '../assets/css/Pfotenabdrücke.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';



function Pfotenabdrücke() {
  return (
    <div id='pfoten' md={5}>
        <Row>
        <Col><div><img src={PfoteIcon} alt="Pfote" /></div></Col>
        <Col><div><img src={PfoteIcon} alt="Pfote" /></div></Col>
        <Col><div><img src={PfoteIcon} alt="Pfote" /></div></Col>
        <Col><div><img src={PfoteIcon} alt="Pfote" /></div></Col>
        <Col><div><img src={PfoteIcon} alt="Pfote" /></div></Col>
        </Row>
        <Row className="offset-row">
        <Col><div><img src={PfoteIcon} alt="Pfote" /></div></Col>
        <Col><div><img src={PfoteIcon} alt="Pfote" /></div></Col>
        <Col><div><img src={PfoteIcon} alt="Pfote" /></div></Col>
        <Col><div><img src={PfoteIcon} alt="Pfote" /></div></Col>
        <Col><div><img src={PfoteIcon} alt="Pfote" /></div></Col>
        </Row>
    </div>
  )
}

export default Pfotenabdrücke