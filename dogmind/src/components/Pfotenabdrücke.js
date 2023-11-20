import React, { useRef, useEffect } from 'react';
import PfoteIcon from '../assets/images/PfoteIcon.png';
import '../assets/css/Pfotenabdrücke.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function Pfotenabdrücke() {
    const pfotenRef = useRef(null);
  
    const handleScroll = () => {
      const pfotenIcons = pfotenRef.current.querySelectorAll('img');
      const offset = window.scrollY;
    
      pfotenIcons.forEach((icon, index) => {
        const iconOffset = icon.offsetTop;
        console.log(`Icon ${index + 1} Offset: ${iconOffset}, Visibility: ${iconOffset < offset + window.innerHeight * 0.8}`);
        
        if (iconOffset < offset + window.innerHeight * 0.8) {
          icon.classList.add('visible');
        }
      });
    };
  
    useEffect(() => {
        console.log('useEffect is working...');
        window.addEventListener('scroll', handleScroll);
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
    <div id='pfoten' md={5} ref={pfotenRef}>
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