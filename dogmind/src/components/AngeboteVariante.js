import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/css/AngeboteCards.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import welpe11 from '../assets/images/welpe11.png';
import Welpe2 from '../assets/images/Welpe2.png';
import Alltagstauglich from '../assets/images/Alltagstauglich.png';
import MedicalTraining from '../assets/images/MedicalTraining.png';
import verhalten from '../assets/images/verhalten.png';
import socialwalk from '../assets/images/socialwalk.png';
import antijagd from '../assets/images/antijagd.png';
import spaziergang from '../assets/images/spaziergang.png';
import hundkind from '../assets/images/hundkind.png';
import hundmithandicap from '../assets/images/hundmithandicap.png';
import faszien from '../assets/images/faszien.png';
import anschaffung from '../assets/images/anschaffung.png'

function AngeboteVariante() {
  return (
    <Row>
    <Card className="bg-dark text-white">
      <img src={welpe11} alt="Welpentraining" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white">
      <img src={welpe11} alt="Welpentraining" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Row>
  );
}

export default AngeboteVariante;