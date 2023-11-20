import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../assets/css/FAQ.css';

function FAQ() {
  return (
    <div id="FAQ-background">
    <div id="FAQ">
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="accordion-header">Was ist Individualtraining bei Dog Mind?</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li>Arbeit ohne Schema F – ich schau mir eure Voraussetzungen und Wünsche an,
                danach richtet sich der weitere Trainingsablauf.</li>
                <li>Klassisches Fuß gehen ist dir zu dämlich? Kein Problem, es geht auch anders</li>
                <li>Ich gehe auf eure Bedürfnisse ein – Stunden nach Bedarf</li>
                <li>Der Ort des Trainings wird nach Notwendigkeit gewählt – zuhause, im Park usw.</li>
            </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Wie sieht unsere erste Einzelstunde aus?</Accordion.Header>
        <Accordion.Body>
            <p>In einem ausführlichen Gespräch lerne ich dich und deinen Hund kennen, du kannst mir all
            deine Fragen stellen und wir starten mit den ersten Trainingsschritten.
            Training soll Spaß machen und nicht in Stress und Druck ausarten.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </div>
  );
}

export default FAQ;