// NavbarSub.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import LogoGelb from '../assets/images/LogoGelb.png'
import '../assets/css/HeaderBar.css'

const NavbarSub = () => {

  return (
    <Row className="no-gutters">
      <Col md={3} className="logo m-0 p-0">
            <img src={LogoGelb} alt="Logo doggymind" />
      </Col>
    <Col md={9} className="m-0 p-0">
    <nav>
      <ul>
        <li>
          <Link style={{ color: '#ffffff' }} to="/">
            Back to Home
          </Link>
        </li>
      </ul>
    </nav>
    </Col>
    </Row>
  );
};

export default NavbarSub;
