import React from 'react'
import '../assets/css/Contact.css';

function Contact() {
  return (
    <div className="background-with-overlay">
        <div className="Hintergrund-Kontakt">
            <div className="Content-Kontakt">
            <h2 id="Kontakt">Kontakt</h2>
            <h3>Doris Neuhold</h3>
            <h3 style={{ fontStyle: 'italic' }}>Diplomierte Hundetrainerin</h3>
            <p className="Kontakt-Absatz" style={{ textAlign: 'left', fontSize: '1.5rem' }}>Telefon: +436608290628</p>
            <p className="Kontakt-Absatz" style={{ textAlign: 'left', fontSize: '1.5rem' }}>Email: doris.neuhold@gmx.net </p>
            </div>
        </div>
    </div>
  )
}

export default Contact