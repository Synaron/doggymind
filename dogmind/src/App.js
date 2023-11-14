import './App.css';
import Slider from "./components/Slider";
import Intro from "./components/Intro";
import ProblemCards from "./components/ProblemCards"


function App() {
  return (
    <div className="App">
        <Slider />
        <Intro />
        <ProblemCards />
    </div>
  );
}

export default App;
