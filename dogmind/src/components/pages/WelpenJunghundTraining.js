import React from 'react';
import Welpe1 from '../../assets/images/Welpe1.png';  // Import Header component
import Header from '../Header';
import IntroSub from "../IntroSub";
import trainingData from '../../data';
import IntroPic1 from '../../assets/images/Welpe1.png';
import IntroPic2 from '../../assets/images/Welpe2.png';
import NavbarSub from "../NavbarSub";
import AngeboteBlock from "../AngeboteBlock"
import MedicalTraining from '../../assets/images/MedicalTraining.png';
import Anschaffung from '../../assets/images/anschaffung.png';
import AngeboteCards from '../AngeboteCards';

function WelpenJunghundTraining() {
  const data = trainingData[0]; // Choose the appropriate index based on your requirements
    
  // Split the trainingData into chunks of 6 for each AngeboteBlock
  const chunkedData = [];
  for (let i = 0; i < trainingData.length; i += 6) {
  chunkedData.push(trainingData.slice(i, i + 6));
  }
  // If the last chunk has fewer than 4 items, move the last item to the previous chunk
  if (chunkedData.length > 1 && chunkedData[chunkedData.length - 1].length < 3) {
    const lastItem = chunkedData.pop().pop();
    chunkedData[chunkedData.length - 1].push(lastItem);
    }
  return (
    <div>
      <NavbarSub />
      <Header title="Welpen- und Junghundtraining" imageUrl={Welpe1} />
      <IntroSub
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
      <AngeboteCards />
      </div>
  );
}

export default WelpenJunghundTraining;
