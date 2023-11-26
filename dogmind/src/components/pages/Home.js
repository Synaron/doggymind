import '../../App.css';
import Slider from "../Slider";
import Intro2 from "../Intro2";
import Probleme from '../Probleme';
import AngeboteBlock from '../AngeboteBlock';
import Welpe2 from '../../assets/images/Welpen/Welpe2.png'
import MedicalTraining from '../../assets/images/MedicalTraining.png'
import trainingData from '../../data';
import PfotenHeading from '../PfotenHeading';
import { Link as ScrollLink } from 'react-scroll';
import IntroPic1 from '../../assets/images/Intro/Intro1.png';
import IntroPic2 from '../../assets/images/Intro/Intro2.png';
import HeaderBar from "../HeaderBar";
import FlipCard from '../FlipCard';

function Home() {

  const qaPairs = [
    {
      question: "Was ist Individualtraining bei Dog Mind?",
      answer: (
        <ul>
          <li>Arbeit ohne Schema F – ich schau mir eure Voraussetzungen und Wünsche an, danach richtet sich der weitere Trainingsablauf.</li>
          <li>Klassisches Fuß gehen ist dir zu dämlich? Kein Problem, es geht auch anders</li>
          <li>Ich gehe auf eure Bedürfnisse ein – Stunden nach Bedarf</li>
          <li>Der Ort des Trainings wird nach Notwendigkeit gewählt – zuhause, im Park usw.</li>
        </ul>
      )
    },
    // Add more question-answer pairs as needed
    {
      question: "Wie sieht unsere erste Einzelstunde aus?",
      answer: "In einem ausführlichen Gespräch lerne ich dich und deinen Hund kennen, du kannst mir all deine Fragen stellen und wir starten mit den ersten Trainingsschritten. Training soll Spaß machen und nicht in Stress und Druck ausarten."
    }
  ];
  const highlightedWords = ['Einzelstunde', 'Dog Mind']; // Add any other words you want to highlight


    return (
      <div className="Home">
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

        <ScrollLink smooth={true} duration={500} offset={-50}>
          <AngeboteBlock data={trainingData} Image1={Welpe2} Image2={MedicalTraining}/>
        </ScrollLink>
      
      
        <ScrollLink to="FAQ" smooth={true} duration={500} offset={-50}>
        <FlipCard qaPairs={qaPairs} highlightedWords={highlightedWords}/>
      </ScrollLink>
      </div>
    );
  }
  
  export default Home;