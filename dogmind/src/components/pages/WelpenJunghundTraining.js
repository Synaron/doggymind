// WelpenJunghundTraining.js

import React from 'react';
import HeaderImageCircle from '../HeaderImageCircle';
import IntroSub from '../IntroSub';
import trainingData from '../../data';
import Welpe2 from '../../assets/images/Welpen/Welpe2.png';
import NavbarSub from '../NavbarSub';
import AngeboteCards from '../AngeboteCards';

function WelpenJunghundTraining(imageUrl) {
  // Check if trainingData is defined and is an array
  if (!Array.isArray(trainingData)) {
    console.error("Training data is not an array or is undefined.");
    return null; // or handle the error accordingly
  }

  const data = trainingData[0];

  const chunkedData = [];
  for (let i = 0; i < trainingData.length; i += 6) {
    chunkedData.push(trainingData.slice(i, i + 6));
  }

  if (chunkedData.length > 1 && chunkedData[chunkedData.length - 1].length < 3) {
    const lastItem = chunkedData.pop().pop();
    chunkedData[chunkedData.length - 1].push(lastItem);
  }

  return (
    <div>
      <NavbarSub />
      <HeaderImageCircle HeaderTitle={data.title} imageUrl={Welpe2} altText="Welpe"/>
      <IntroSub
        firstParagraph={data.description}
        listStyle={data.contents}
        secondParagraph={data.note}
      />
      {/* Pass the category prop to AngeboteCards */}
      <AngeboteCards trainingData={trainingData} categories={['Welpen', 'Alltag']} />
    </div>
  );
}

export default WelpenJunghundTraining;
