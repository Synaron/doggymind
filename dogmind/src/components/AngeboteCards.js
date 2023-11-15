import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/css/AngeboteCards.css';
import Row from 'react-bootstrap/esm/Row';
import Welpe1 from '../assets/images/Welpe1.png';
import Welpe2 from '../assets/images/Welpe2.png';
import Alltagstauglich from '../assets/images/Alltagstauglich.jpeg';


function AngeboteCards() {
  return (
    <div className='card-background'>
    <h1>Was ich anbiete</h1>
    <Row>
    <Card style={{ width: '18rem' }}>
      <img src={Welpe1} alt="Welpentraining" />
      <Card.Body>
        <Card.Title>Welpen-/ Junghundtraining:</Card.Title>
        <Card.Text>
        Wir legen miteinander den richtigen Grundstein in der wichtigsten Entwicklungsphase.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img src={Welpe2} alt="Welpen Gruppenkurs" />
      <Card.Body>
        <Card.Title>Welpen Gruppenkurs:</Card.Title>
        <Card.Text>
        Sozialisierung mit Hunden, Menschen, Umgebungen, Geräuschen und vieles mehr.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img src={Alltagstauglich} alt="Alltagstauglich" />
      <Card.Body>
        <Card.Title>Alltagstauglichkeit für Jung und Alt:</Card.Title>
        <Card.Text>
        Jede erdenkliche Alltagssituation so entspannt als möglich meistern.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Medical Training:</Card.Title>
        <Card.Text>
        Tierarztbesuche und Medikamentenverabreichung trainieren, für stressfreie Behandlungen.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Verhaltensauffälligkeiten:</Card.Title>
        <Card.Text>
        Unerwünschtes Verhalten durch Training gezielt korrigieren.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Training Kind mit Hund:</Card.Title>
        <Card.Text>
        Ziel ist es, eurem Nachwuchs die grundlegende Kommunikation mit eurem Fellknäuel beizubringen.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    </Row>
    <Row>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Hunde mit Handicap:</Card.Title>
        <Card.Text>
        Auch Hunde mit Behinderung wollen und brauchen Erziehung und Beschäftigung.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Spaziergang mit dem Hund:</Card.Title>
        <Card.Text>
          Wenn zum Gassi-Gehen mal keine Zeit bleibt, gehe gerne ich eine Runde mit deiner Fellnase spazieren.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Anschaffungsberatung:</Card.Title>
        <Card.Text>
          Ein Hund ist eine große Verantwortung. Entsprechend wohl überlegt sollte eine Anschaffung sein. Ich berate dich gerne.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Anti- Jagd- Training:</Card.Title>
        <Card.Text>
        Der Jagdtrieb deines Hundes bringt dich zur Verzweiflung? Kein Problem, Für Anti-Jagd-Training ist es nie zu spät.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Social Walk:</Card.Title>
        <Card.Text>
        Unter kontrollierten Bedingungen und Anleitung eines Trainers auf Artgenossen und Menschen treffen und Begegnungen trainieren.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Faszienmassage:</Card.Title>
        <Card.Text>
        Durch Massage Faszien lockern und schmerzfreie Mobilität unterstützen.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    </Row>
    </div>
  );
}

export default AngeboteCards;