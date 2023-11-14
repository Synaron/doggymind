import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intro1 from '../assets/images/Intro1.png';
import Intro2 from '../assets/images/Intro2.png';

function Intro() {
  return (
    <Container fluid>
    <Row>
      <Col>
      <h1>Dog my mind – mind my dog</h1>
        <p>Die Hundesprache verstehen und deuten zu können, ist wie eine neue Fremdsprache zu lernen. 
            Nur durch viel Übung und Anwendung zu meistern. Ich helfe dir und deinem besten Freund, 
            eure Kommunikation und somit eure Bindung zusätzlich zu stärken.</p>
        <p>Im individuellen Einzeltraining konzentriere ich mich nur auf dich und deinen Hund. Dadurch könnt
        ihr gemeinsam effektiv und intensiv an euren Zielen arbeiten. So einzigartig wie jeder Mensch und
        jeder Hund ist, so auch der Trainingsansatz. Gemeinsam finden wir den passenden Weg für euch.</p>
      </Col>
      <Col>
        <img src={Intro1} alt="HundeTraining1" />
        <img src={Intro2} alt="HundeTraining2" />
      </Col>
      </Row>
    
  </Container>

       
   
  )
}

export default Intro