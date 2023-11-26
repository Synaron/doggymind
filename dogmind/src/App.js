import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import WelpenJunghundTraining from './components/pages/WelpenJunghundTraining';
import trainingData from './data';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Datenschutz from './components/pages/Datenschutz';
import Impressum from './components/pages/Impressum';
import ScrollToTop from './components/ScrollToTop.js';


function App() {

  return (
  
    
    <Router>
      <div className="App">
      <ScrollToTop />
        <Routes>
          {/* Define routes for the home page and subpages */}
          <Route path="/" element={<Home />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/Welpen und Junghundtraining" element={<WelpenJunghundTraining data={trainingData} />} />
        </Routes>

        <Contact />
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
