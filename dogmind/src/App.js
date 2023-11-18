import './App.css';
import Slider from "./components/Slider";
import Intro from "./components/Intro";
import Probleme from './components/Probleme';
import FAQ from './components/FAQ';
import AngeboteBlock from './components/AngeboteBlock';
import Welpe2 from './assets/images/Welpe2.png';
import MedicalTraining from './assets/images/MedicalTraining.png';


function App() {
  return (
    <div className="App">
        <Slider />
        <Intro />
        <Probleme />
        <AngeboteBlock imageUrl={Welpe2}  />
        <AngeboteBlock imageUrl={MedicalTraining}  />
        <FAQ />
    </div>
  );
}

export default App;

