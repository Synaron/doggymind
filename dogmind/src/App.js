import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import WelpenJunghundTraining from './components/pages/WelpenJunghundTraining';
import WelpenGruppenkurs from './components/pages/WelpenGruppenkurs.js';
import trainingData from './data';
import Footer from './components/Footer';
import Datenschutz from './components/pages/Datenschutz';
import Impressum from './components/pages/Impressum';
import ScrollToTop from './components/ScrollToTop.js';
import Alltagstauglich from './components/pages/Alltagstauglich.js';
import MedicalTraining from './components/pages/MedicalTraining.js';
import Verhaltensauffaelligkeiten from './components/pages/Verhaltensauffaelligkeiten.js';
import SpielUndBeschaeftigung from './components/pages/SpielUndBeschaeftigung.js';
import TrainingKindMitHund from './components/pages/TrainingKindMitHund.js';
import HundMitHandicap from './components/pages/HundMitHandicap.js';
import SpaziergangMitDemHund from './components/pages/SpaziergangMitDemHund.js';
import Anschaffungsberatung from './components/pages/Anschaffungsberatung.js';
import AntiJagdTraining from './components/pages/AntiJagdTraining.js';
import SocialWalk from './components/pages/SocialWalk.js';
import Rassen from './components/pages/Rassen.js';
import ContactForm from './components/ContactForm.js';



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
          <Route path="/Welpen-und-Junghundtraining" element={<WelpenJunghundTraining data={trainingData} />} />
          <Route path="/Welpen-Gruppenkurs" element={<WelpenGruppenkurs data={trainingData} />} />
          <Route path="/Alltagstauglich" element={<Alltagstauglich data={trainingData} />} />
          <Route path="/Medical-Training" element={<MedicalTraining data={trainingData} />} />
          <Route path="/Verhaltensauffaelligkeiten" element={<Verhaltensauffaelligkeiten data={trainingData} />} />
          <Route path="/Spiel-und-Beschaeftigung" element={<SpielUndBeschaeftigung data={trainingData} />} />
          <Route path="/Training-Kind-mit-Hund" element={<TrainingKindMitHund data={trainingData} />} />
          <Route path="/Hund-mit-Handicap" element={<HundMitHandicap data={trainingData} />} />
          <Route path="/Spaziergang-mit-dem-Hund" element={<SpaziergangMitDemHund data={trainingData} />} />
          <Route path="/Anschaffungsberatung" element={<Anschaffungsberatung data={trainingData} />} />
          <Route path="/Anti-Jagd-Training" element={<AntiJagdTraining data={trainingData} />} />
          <Route path="/Social-Walk" element={<SocialWalk data={trainingData} />} />
          <Route path="/Urspruengliche-Rassen" element={<Rassen data={trainingData} />} />

        </Routes>
        <ContactForm />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
