import '../../App.css';
import Slider from "../Slider";
import Intro2 from "../Intro2";
import Probleme from '../Probleme';
import FAQ from '../FAQ';
import AngeboteBlock from '../AngeboteBlock';
import Welpe2 from '../../assets/images/Welpe2.png';
import MedicalTraining from '../../assets/images/MedicalTraining.png';
import Anschaffung from '../../assets/images/anschaffung.png';
import trainingData from '../../data';
import PfotenHeading from '../PfotenHeading';
import { Link as ScrollLink } from 'react-scroll';
import IntroPic1 from '../../assets/images/Intro1.png';
import IntroPic2 from '../../assets/images/Intro2.png';
import HeaderBar from "../HeaderBar";

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
        <HeaderBar />
        <Slider />
        <ScrollLink to="Intro2" smooth={true} duration={500} offset={-50}>
        <Intro2
          firstWord="Dog"
          secondWord="mind"
          secondPhrase="– mind my dog"
          firstParagraph="Die Hundesprache verstehen und deuten zu können, ist wie eine neue Fremdsprache zu lernen. Nur durch viel Übung und Anwendung zu meistern. Ich helfe dir und deinem besten Freund, eure Kommunikation und somit eure Bindung zusätzlich zu stärken."
          secondParagraph="Im individuellen Einzeltraining konzentriere ich mich nur auf dich und deinen Hund. Dadurch könnt ihr gemeinsam effektiv und intensiv an euren Zielen arbeiten. So einzigartig wie jeder Mensch und jeder Hund ist, so auch der Trainingsansatz. Gemeinsam finden wir den passenden Weg für euch." 
          image1={IntroPic1}
          image2={IntroPic2}
          />
        </ScrollLink>

        <ScrollLink to="Probleme" smooth={true} duration={500} offset={-50}>
        <Probleme />
        </ScrollLink>

        <PfotenHeading title="Meine Angebote" id="Angebote" />
        {chunkedData.map((chunk, index) => (
        <ScrollLink key={index} to={`Angebote${index}`} smooth={true} duration={500} offset={-50}>
          <AngeboteBlock
            imageUrl={index % 2 === 0 ? Welpe2 : index === 2 ? Anschaffung : MedicalTraining}
            data={chunk} // Pass the entire chunk of data
            index={index}
          />
        </ScrollLink>
      ))}
      
        <ScrollLink to="FAQ" smooth={true} duration={500} offset={-50}>
          <FAQ id="faq" />
        </ScrollLink>
      </div>
    );
  }
  
  export default Home;