import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import '../assets/css/Probleme.css';
import Profil1 from '../assets/images/Profil1.png';
import Profil2 from '../assets/images/Profil2.png';


function Probleme() {
  return (
    <div id='Probleme'>
        <Row id="Probleme-Row">
        <Col className="left-block" md={6}>
          <Col>
          <img  src={Profil1} alt="Hundetraining" />
          </Col>
          <Col style={{ paddingLeft: '8%'}}>
          <h2 style={{ fontSize: '1.5rem', textAlign:'center', paddingBottom: '5%'}}>Du kannst Spaziergänge nicht mehr genießen, weil dein Hund ...</h2>
          <ul className='Liste'>
              <li>Ständig an der Leine zieht</li>
              <li>Jeden Artgenossen begrüßen will</li>
              <li>Dich stehen lässt, weil alles andere spannender ist als du</li>
              <li>andere Hunde anpöbelt</li>
          </ul>
          </Col>
        </Col>
        <Col className="right-block" md={6}>
          <Col>
          <img src={Profil2} alt="Hundetraining" />
          </Col>
          <Col style={{ paddingLeft: '8%'}}>
          <h2 style={{ fontSize: '1.5rem', textAlign:'center', paddingBottom: '5%'}}>Oder du bist besorgt, weil dein Hund ...</h2>
          <ul className='Liste'>
              <li>Nicht alleine bleiben kann</li>
              <li>Besuch verbellt</li>
              <li>Zu Hause nicht zur Ruhe kommt</li>
              <li>Sein Futter verteidigt</li>
          </ul>
          </Col>
        </Col>
        </Row>
    </div>
  )
}

export default Probleme