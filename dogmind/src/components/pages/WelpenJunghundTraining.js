import React from 'react';
import Welpe2 from '../../assets/images/Welpe2.png';  // Import Header component
import Header from '../Header';
import Intro2 from "../Intro2";
import trainingData from '../../data';
import AngeboteBlock from '../AngeboteBlock';
import IntroPic1 from '../../assets/images/Welpe1.png';
import IntroPic2 from '../../assets/images/Welpe2.png';

function WelpenJunghundTraining() {
  const data = trainingData[0]; // Choose the appropriate index based on your requirements
  return (
    <div>
      <Header title="Welpen- und Junghundtraining" imageUrl={Welpe2} />
      <Intro2
        data={data}
        firstWord=""
        secondWord="Welpen-und Junghund"
        secondPhrase="training"
        firstParagraph={data.description}
        secondParagraph={data.note}
        image1={IntroPic1}
        image2={IntroPic2}
      />
      <AngeboteBlock data={data.contents} index={0} />
    </div>
  );
}

export default WelpenJunghundTraining;
