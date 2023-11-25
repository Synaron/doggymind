import React from 'react';
import '../assets/css/HeaderBar.css'; // Import your CSS file for styling
import Logo2 from '../assets/images/Logo_2.png';
import { Link } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';

const HeaderBar = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <Col md={3} className="logo">
            <img src={Logo2} alt="Logo dogmind" />
          </Col>
          <Col md={9}>
            <nav>
              <ul>
                <li>
                  <Link style={{ color: '#ffffff' }} to="Intro2" smooth={true} duration={500}>
                    Über mich
                  </Link>
                </li>
                <li>
          <Link style={{ color: '#ffffff' }} to="Probleme" smooth={true} duration={500}>
            Häufige Probleme
          </Link>
        </li>
        <li>
          <Link style={{ color: '#ffffff' }} to="Angebote" smooth={true} duration={500}>
            Mein Training
          </Link>
        </li>
        <li>
          <Link style={{ color: '#ffffff' }} to="FAQ" smooth={true} duration={500}>
            FAQ
          </Link>
        </li>
        <li>
          <Link style={{ color: '#ffffff' }} to="Kontakt" smooth={true} duration={500}>
            Kontakt
          </Link>
        </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderBar;
