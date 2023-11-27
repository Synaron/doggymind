import React, { useEffect, useState } from 'react';
import '../assets/css/HeaderBar.css';
import Test6 from '../assets/images/Test6.png';
import { Link } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';

const HeaderBar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 0); // Change the scroll threshold to 0 for immediate change
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolling ? 'scrolling' : ''} ${scrolling ? 'transparent' : ''}`}>
      <Container>
        <Row className="d-flex align-items-center">
          <Col md={3} className="logo">
            <img src={Test6} alt="Logo dogmind" />
          </Col>
          <Col md={9}>
            <nav>
              <ul>
                <li>
                  <Link style={{ color: '#ffffff' }}  to="Intro2" smooth={true} duration={500}>
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
                <Link style={{ color: '#ffffff' }} to="heading-faq" smooth={true} duration={500}>
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
