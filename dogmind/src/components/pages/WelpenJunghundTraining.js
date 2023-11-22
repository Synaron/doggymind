import React from 'react';
import Welpe2 from '../../assets/images/Welpe2.png';  // Import Header component
import Header from '../Header';
import Intro2 from "../Intro2";
import trainingData from '../../data';
import IntroPic1 from '../../assets/images/Welpe1.png';
import IntroPic2 from '../../assets/images/Welpe2.png';
import NavbarSub from "../NavBarSub";

function WelpenJunghundTraining() {
  const data = trainingData[0]; // Choose the appropriate index based on your requirements
  return (
    <div>
      <NavbarSub />
      <Header title="Welpen- und Junghundtraining" imageUrl={Welpe2} />
      <Intro2
        data={data}
        firstWord=""
        secondWord="Welpen-und Junghund"
        secondPhrase="training"
        firstParagraph={data.description}
        listStyle={data.contents}
        secondParagraph={data.note}
        image1={IntroPic1}
        image2={IntroPic2}
      />
      </div>
  );
}

export default WelpenJunghundTraining;
