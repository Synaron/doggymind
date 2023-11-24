import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import Slider1 from '../assets/images/Slider1.png';
import Slider2 from '../assets/images/Slider2.png';
import Slider3 from '../assets/images/Slider3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Slider.css';



function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img className="d-block w-100" src={Slider1} alt="First slide" style={{ height: '90vh' }} />
        <Carousel.Caption>
          <h3>Individualtraining</h3>
          <p>Das Hundetraining wird an eure Voraussetzungen und Wünsche angepasst.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slider3} alt="Second slide" />
        <Carousel.Caption>
          <h3>Alltagstauglichkeit für Jung und Alt</h3>
          <p>Damit ihr Alltagssituation entspannt meistern könnt.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slider2} alt="Third slide" />
        <Carousel.Caption>
          <h3>Spiel und Beschäftigung</h3>
          <p>
          Die ideale Beschäftigung für dich und deinen Hund finden.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;