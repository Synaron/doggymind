import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import WelpenJunghundTraining from './components/pages/WelpenJunghundTraining';
import trainingData from './data';
import Contact from './components/Contact';
import Navbar from './components/Navbar';


function App() {

  return (
    <Router>
      <div className="App">
      <Routes>
        {/* Define routes for the home page and Angebote page */}
        <Route path="/" element={<Home />} />
        <Route path="/Welpen und Junghundtraining" element={<WelpenJunghundTraining data={trainingData} />} />
      </Routes>
      <Contact />
      </div>
    </Router>
  );
}

export default App;