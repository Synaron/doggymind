import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../assets/css/FAQ.css';


function FAQ() {
  return (
    
   
    <div id="FAQ">
    <h1>FAQ</h1>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="accordion-header">Was verstehen wir unter Individualtraining?</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li>Arbeit ohne Schema F – wir schauen uns eure Voraussetzungen und Wünsche an,
                danach richtet sich der weitere Trainingsverlauf.</li>
                <li>Die klassischen Trainingsmethoden sind dir suspekt oder unverständlich? Kein
                Problem, es geht auch anders.</li>
                <li>Wir gehen auf eure Bedürfnisse ein und finden den besten Weg für euch als Gespann.</li>
                <li>Ebenfalls wird der Trainingsort nach euren Bedürfnissen und Vorstellungen gewählt.</li>
            </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Wie läuft unser erster Kontakt ab?</Accordion.Header>
        <Accordion.Body>
            <p>Wir treffen uns in euerer gewohnten oder ausgewählten Umgebung und schauen uns das Problem
            an. Daraus wird dann ein Trainingsplan erstellt, den wir gemeinsam umsetzen werden und euch zu
            eurem Erfolg verhelfen wird.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  
    
  );
}

export default FAQ;