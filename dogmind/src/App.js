import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/NavBar';
import WelpenJunghundTraining from './components/pages/WelpenJunghundTraining';
import trainingData from './data';


function App() {

  return (
    <Router>
      <div className="App">
      <Navbar />
      <Routes>
        {/* Define routes for the home page and Angebote page */}
        <Route path="/" element={<Home />} />
        <Route path="/Welpen und Junghundtraining" element={<WelpenJunghundTraining data={trainingData} />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;