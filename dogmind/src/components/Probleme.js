import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

function Probleme() {
  return (
    <div>
        <h1>Deine Sorgen möchte ich verschwinden lassen</h1>
        <Row>
        <Col md={6}>
        <img></img>
        <h2>Du kannst Spaziergänge nicht mehr genießen, weil dein Hund ...</h2>
        <ul>
            <li>Ständig an der Leine zieht</li>
            <li>Jeden Artgenossen begrüßen will</li>
            <li>Dich stehen lässt, weil alles andere spannender ist als du</li>
            <li>andere Hunde anpöbelt</li>
        </ul>
        </Col>
        <Col md={6}>
        <img></img>
        <h2>Oder du bist besorgt, weil dein Hund ...</h2>
        <ul>
            <li>Nicht alleine bleiben kann</li>
            <li>Besuch verbellt</li>
            <li>Zu Hause nicht zur Ruhe kommt</li>
            <li>Sein Futter verteidigt</li>
        </ul>
        </Col>
        </Row>
    </div>
  )
}

export default Probleme