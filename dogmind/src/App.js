import './App.css';
import Slider from "./components/Slider";
import Intro from "./components/Intro";
import Probleme from './components/Probleme';
import AngeboteCards from "./components/AngeboteCards"
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
        <Slider />
        <Intro />
        <Probleme />
        <AngeboteCards />
        <FAQ />
    </div>
  );
}

export default App;
