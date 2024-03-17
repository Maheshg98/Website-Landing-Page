import React from 'react';
import './App.css';
import Testimonials from './Components/Testimonials';
import OurPrograms from './Components/OurPrograms';
import OverseasEducation from './Components/OverseasEducation';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <OverseasEducation />
      <OurPrograms />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
