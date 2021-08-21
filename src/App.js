import React from 'react';
import './App.css';

// import Nav from './components/Nav';
 import Contact from './components/Contact-Me';
 import Skills from './components/Skills';
import Portfolio from './components/Portfolio';



const App = () => {
  return(
    <main  className="text-gray-300 bg-gray-800 body-font">
      <Portfolio />
      <Skills />
      <Contact />
    </main>
  )
}

export default App;
