import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavbarSub from '../NavbarSub';

const Preisliste = () => {
  return (
    <div>
    <NavbarSub />
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <Card.Body>
          <Card.Title className="text-center text-primary mb-4">Preisliste</Card.Title>
          <Row className="mb-3">
            <Col>
              <h6>Erstberatungsgespräch</h6>
              <p className="text-muted">ca. 90 Minuten, <span className="text-danger font-weight-bold">120,-€</span></p>
              <p className="text-muted">alle 30 Min. mehr <span className="text-danger font-weight-bold">20,-€</span></p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <h6>Einzelstunde</h6>
              <p className="text-muted"><span className="text-danger font-weight-bold">80,-€</span></p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <h6>5er Block</h6>
              <p className="text-muted"><span className="text-danger font-weight-bold">370,-€</span></p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <h6>10er Block</h6>
              <p className="text-muted"><span className="text-danger font-weight-bold">700,-€</span></p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <h6>Entfernungspauschale</h6>
              <p className="text-muted">10 Kilometer frei</p>
              <p className="text-muted">10,1-20km <span className="text-danger font-weight-bold">15,-€</span></p>
              <p className="text-muted">20,1 – 30km <span className="text-danger font-weight-bold">25,-€</span></p>
              <p className="text-muted">30,1 – 40km <span className="text-danger font-weight-bold">40,-€</span></p>
              <p className="text-muted">darüber hinaus nach Absprache</p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <h6>Welpengruppenkurs</h6>
              <p className="text-muted">10 Einheiten 1x wöchentlich <span className="text-danger font-weight-bold">250,-€</span></p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <h6>Social Walk</h6>
              <p className="text-muted">je Hund-Mensch Team <span className="text-danger font-weight-bold">20,-€</span></p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6>Anschaffungsberatung</h6>
              <p className="text-muted">Std. <span className="text-danger font-weight-bold">60,-€</span> (auch online möglich)</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
    </div>
  );
};

export default Preisliste;
