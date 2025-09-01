import React from 'react';
import Navbar from './components/Navbar';
import Animation from './components/Animation';
import Connect from './components/Connect';
import Skills from './components/Skills';
import Background from './components/Background';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />      
      <Skills />
      <Background />
      <Projects />
      <Contact />
    </div>
  );
}

const Home = () => (
  <div className="home section" id="home">
    <div className="home-content">
      <div className="summary align-right">
        <div className="summary-content">
          
          <h1>
            Hi, I'm Prince...!
          </h1>
          <p>
            I'm a final year Computer Science student at IIIT, Dharwad. I'm passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.
          </p>
          
          <Connect linkedin="https://www.linkedin.com/in/prince-kumar-127903288/" github="https://github.com/Princccee" contact="9123174099"
          resume="https://drive.google.com/file/d/1bF8MxWWgRwvl1BaN9tdXDcZb_GGsKdvj/view?usp=sharing"/>
          
        </div>
      </div>
      <Animation fileName="home.json"/>
    </div>
    <div id="skills-marker"/>
  </div>
);



export default App;
