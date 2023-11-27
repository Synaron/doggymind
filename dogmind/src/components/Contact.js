import React from 'react';
import '../assets/css/Contact.css';

function Contact() {
  return (
    <div id="Kontakt" className="background-with-overlay">
          <div className="Content-Kontakt">
            <h2 id="Kontakt">Kontakt</h2>
            <h3 style={{ fontSize: '2.5rem' }}>Doris <span style={{ color: '#F6BE00' }}>Neuhold</span></h3>
            <h3 style={{ fontStyle: 'italic' }}>Diplomierte Hundetrainerin</h3>
            <p className="Kontakt-Absatz" style={{ textAlign: 'left', fontSize: '1.5rem' }}>Telefon: +436608290628</p>
            <p className="Kontakt-Absatz" style={{ textAlign: 'left', fontSize: '1.5rem' }}>Email: doris.neuhold@gmx.net </p>
          </div>
    </div>
  );
}

export default Contact;
