import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import About from './Components/About';

import Slider from './Components/Slider';
import './styles.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <About/> 
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
