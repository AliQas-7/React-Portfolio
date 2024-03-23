import React, { useState } from 'react';
import './App.css';
import Home from './component/Home';
import NavBar from './component/Navbar';
import Skills from './component/Skills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './component/ContactUs';
import Projects from './component/Projects';
import Footer from './component/Footer';
import PrivacyPolicy from './component/PrivacyPolicy';
import { useEffect } from 'react';
import DarkMode from './component/DarkMode';


function App() {

  const [mode, setMode] = useState('dark'); // Start with 'light' mode

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    if (mode === 'light') {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    }
  }, [mode]);

  return (
    <>

      <Router>
        <div className="app-container">

          <NavBar mode={mode} toggleMode={toggleMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          </Routes>
          <DarkMode mode={mode} toggleMode={toggleMode} />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;