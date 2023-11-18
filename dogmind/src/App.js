import React from 'react';
import './App.css';
import Slider from "./components/Slider";
import Intro from "./components/Intro";
import Probleme from './components/Probleme';
import FAQ from './components/FAQ';
import AngeboteBlock from './components/AngeboteBlock';
import Welpe2 from './assets/images/Welpe2.png';
import MedicalTraining from './assets/images/MedicalTraining.png';
import Anschaffung from './assets/images/anschaffung.png';
import trainingData from './data';

function App() {
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
    <div className="App">
      <Slider />
      <Intro />
      <Probleme />

      {chunkedData.map((chunk, index) => (
        <AngeboteBlock
          key={index}
          imageUrl={index % 2 === 0 ? Welpe2 : index === 2 ? Anschaffung : MedicalTraining}
          data={chunk}
          isFirstBlock={index === 0} // Pass isFirstBlock prop
          index={index} // Pass the index prop
        />
      ))}

      <FAQ />
    </div>
  );
}

export default App;
