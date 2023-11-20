import '../../App.css';
import { Link } from 'react-router-dom';
import Slider from "../Slider";
import Intro from "../Intro";
import Probleme from '../Probleme';
import FAQ from '../FAQ';
import AngeboteBlock from '../AngeboteBlock';
import Welpe2 from '../../assets/images/Welpe2.png';
import MedicalTraining from '../../assets/images/MedicalTraining.png';
import Anschaffung from '../../assets/images/anschaffung.png';
import trainingData from '../../data';
import PfotenHeading from '../PfotenHeading';

function Home() {
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
      <PfotenHeading title="Meine Angebote" />
      {chunkedData.map((chunk, index) => (
        <div key={index}>
          <AngeboteBlock
            imageUrl={index % 2 === 0 ? Welpe2 : index === 2 ? Anschaffung : MedicalTraining}
            data={chunk}
            isFirstBlock={index === 0}
            index={index}
          />
          {index < chunkedData.length - 1 && <div style={{ marginBottom: '20px' }}></div>}
        </div>
      ))}
      <Link to="/angebote">
        <button>Mehr erfahren</button>
      </Link>
      <PfotenHeading title="FAQ" />
      <FAQ />
    </div>
  );
}

export default Home;
