import React from 'react';
import Welpe2 from '../../assets/images/Welpe2.png';  // Import Header component
import Header from '../Header';
import Intro2 from "../Intro2";
import trainingData from '../../data';
import AngeboteBlock from '../AngeboteBlock';

function WelpenJunghundTraining() {
    const { description, note } = trainingData;
  return (
    <div>
        <Header title="Welpen- und Junghundtraining" imageUrl={Welpe2} />
        <Intro2
        data={trainingData}
        firstWord=""
        secondWord="Welpen-und Junghund"
        secondPhrase="training"
        firstParagraph={description}
        secondParagraph={note}
      />
      <AngeboteBlock data={trainingData} index={0} />
    </div>
  );
}

export default WelpenJunghundTraining;
