import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Angebote from './components/pages/Angebote';
import Navbar from './components/NavBar';

function App() {

  return (
    <Router>
      <div className="App">
      <Navbar />
      <Routes>
        {/* Define routes for the home page and Angebote page */}
        <Route path="/" element={<Home />} />
        <Route path="/angebote" element={<Angebote />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;