import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/css/AngeboteCards.css';
import Row from 'react-bootstrap/esm/Row';
import welpe11 from '../assets/images/welpe11.png';
import Welpe2 from '../assets/images/Welpe2.png';
import Alltagstauglich from '../assets/images/Alltagstauglich.png';
import MedicalTraining from '../assets/images/MedicalTraining.png';
import verhalten from '../assets/images/verhalten.png';
import socialwalk from '../assets/images/socialwalk.png';
import antijagd from '../assets/images/antijagd.png';
import spaziergang from '../assets/images/spaziergang.png';
import hundkind from '../assets/images/hundkind.png';
import hundmithandicap from '../assets/images/hundmithandicap.png';
import faszien from '../assets/images/faszien.png';
import anschaffung from '../assets/images/anschaffung.png'

function AngeboteCards() {
  return (
    <div className='card-background'>
    <h1>Was ich anbiete</h1>
    <Row>
    <Card className='odd-card' style={{ width: '18rem' }}>
      <img src={welpe11} alt="Welpentraining" />
      <Card.Body>
        <Card.Title>Welpen-/ Junghundtraining:</Card.Title>
        <Card.Text>
        Wir legen miteinander den richtigen Grundstein in der wichtigsten Entwicklungsphase.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card className='even-card' style={{ width: '18rem' }}>
    <img src={Welpe2} alt="Welpen Gruppenkurs" />
      <Card.Body>
        <Card.Title>Welpen Gruppenkurs:</Card.Title>
        <Card.Text>
        Sozialisierung mit Hunden, Menschen, Umgebungen, Geräuschen und vieles mehr.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card className='odd-card' style={{ width: '18rem' }}>
    <img src={Alltagstauglich} alt="Alltagstauglich" />
      <Card.Body>
        <Card.Title>Alltagstauglichkeit für Jung und Alt:</Card.Title>
        <Card.Text>
        Jede erdenkliche Alltagssituation so entspannt als möglich meistern.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card className='even-card' style={{ width: '18rem' }}>
      <img src={MedicalTraining} alt="MedicalTraining" />
      <Card.Body>
        <Card.Title>Medical Training:</Card.Title>
        <Card.Text>
        Tierarztbesuche und Medikamentenverabreichung trainieren, für stressfreie Behandlungen.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card className='odd-card' style={{ width: '18rem' }}>
    <img src={verhalten} alt="Verhalten" />
      <Card.Body>
        <Card.Title>Verhaltensauffälligkeiten:</Card.Title>
        <Card.Text>
        Unerwünschtes Verhalten durch Training gezielt korrigieren.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card className='even-card' style={{ width: '18rem' }}>
      <img src={hundkind} alt="Alltagstauglich" />
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
    <Card className='odd-card' style={{ width: '18rem' }}>
      <img src={hundmithandicap} alt="Hund mit Handicap" />
      <Card.Body>
        <Card.Title>Hunde mit Handicap:</Card.Title>
        <Card.Text>
        Auch Hunde mit Behinderung wollen und brauchen Erziehung und Beschäftigung.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card className='even-card' style={{ width: '18rem' }}>
      <img src={spaziergang} alt="Spaziergang mit Hund" />
      <Card.Body>
        <Card.Title>Spaziergang mit dem Hund:</Card.Title>
        <Card.Text>
          Wenn zum Gassi-Gehen mal keine Zeit bleibt, gehe gerne ich eine Runde mit deiner Fellnase spazieren.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card className='odd-card' style={{ width: '18rem' }}>
      <img src={anschaffung} alt="Anschaffungsberatung" />
      <Card.Body>
        <Card.Title>Anschaffungsberatung:</Card.Title>
        <Card.Text>
          Ein Hund ist eine große Verantwortung. Entsprechend wohl überlegt sollte eine Anschaffung sein. Ich berate dich gerne.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card className='even-card' style={{ width: '18rem' }}>
      <img src={antijagd} alt="Anti-Jagd" />
      <Card.Body>
        <Card.Title>Anti- Jagd- Training:</Card.Title>
        <Card.Text>
        Der Jagdtrieb deines Hundes bringt dich zur Verzweiflung? Kein Problem, Für Anti-Jagd-Training ist es nie zu spät.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card className='odd-card' style={{ width: '18rem' }}>
      <img src={socialwalk} alt="Social Walk" />
      <Card.Body>
        <Card.Title>Social Walk:</Card.Title>
        <Card.Text>
        Unter kontrollierten Bedingungen und Anleitung eines Trainers auf Artgenossen und Menschen treffen und Begegnungen trainieren.
        </Card.Text>
        <Button variant="primary">Mehr erfahren</Button>
      </Card.Body>
    </Card>
    <Card className='even-card' style={{ width: '18rem' }}>
      <img src={faszien} alt="Faszienmassage" />
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