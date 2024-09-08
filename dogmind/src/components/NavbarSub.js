import React, { useEffect, useState } from 'react';
import '../assets/css/HeaderBar.css';
import LogoGelb from '../assets/images/LogoGelb.png'
import { Link } from 'react-router-dom'; // For page navigation
import { Container, Row, Col } from 'react-bootstrap';

const NavBarSub = () => {
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
        <Link to="/" className="logo-link">
          <div className="logo">
            <img src={LogoGelb} alt="Logo doggymind" />
          </div>
        </Link>
      </div>
      <Container>
        <Row className="d-flex align-items-center">
        <Col md={9} className="m-0 p-0">
    <nav>
      <ul>
        <li>
          <Link style={{ color: '#ffffff' }} to="/">
            Zurück zur Homepage
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

export default NavBarSub;