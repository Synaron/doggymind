import './App.css';
import Slider from "./components/Slider";
import Intro from "./components/Intro";
import Probleme from './components/Probleme';
import AngeboteVariante from "./components/AngeboteVariante"
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
        <Slider />
        <Intro />
        <Probleme />
        <AngeboteVariante />
        <FAQ />
    </div>
  );
}

export default App;

