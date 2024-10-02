import React, { useEffect, useState } from 'react';
import '../assets/css/HeaderBar.css';
import LogoGelb from '../assets/images/LogoGelb.png'
import { Link as ScrollLink } from 'react-scroll'; // For scroll navigation
import { Link as RouterLink } from 'react-router-dom'; // For page navigation
import { Container, Row, Col } from 'react-bootstrap';

const HeaderBar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolling ? 'scrolling' : ''} ${scrolling ? 'transparent' : ''}`}>
      <div className="logo-triangle">
        <div className="logo">
          <img src={LogoGelb} alt="Logo doggymind" />
        </div>
      </div>
      <Container>
        <Row className="d-flex align-items-center">
          <Col>
            <nav>
              <ul>
                <li>
                  <ScrollLink style={{ color: '#ffffff' }} to="Intro2" smooth={true} duration={500}>
                    Über mich
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink style={{ color: '#ffffff' }} to="Probleme" smooth={true} duration={500}>
                    Häufige Themen
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink style={{ color: '#ffffff' }} to="Angebote" smooth={true} duration={500}>
                    Mein Training
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink style={{ color: '#ffffff' }} to="heading-faq" smooth={true} duration={500}>
                    FAQ
                  </ScrollLink>
                </li>
                <li>
                  <RouterLink style={{ color: '#ffffff' }} to="/preisliste">
                    Preisliste
                  </RouterLink>
                </li>
                <li>
                  <ScrollLink style={{ color: '#ffffff' }} to="Kontakt" smooth={true} duration={500}>
                    Kontakt
                  </ScrollLink>
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