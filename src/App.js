import React from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import About from './components/About-Me';
import Contact from './components/Contact-Me';
import Projects from './components/Projects';
import Skills from './components/Skills';



const App = () => {
  return(
    <main>
       <Nav />
     
      <About />
      <Skills />
      <Projects />
      <Contact/> 
    </main>
)
}

export default App;
