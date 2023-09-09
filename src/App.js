import './App.css';
import React from 'react';
import Hero from './components/hero/hero';
import AboutMe from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';

const App = () => {
  return (
    <div className=''>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
