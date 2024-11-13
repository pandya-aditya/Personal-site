import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import PersonalInfo from './components/PersonalInfo'; 
import Footer from './components/Footer'; 
import './App.css';

const App = () => {
  return (
    <div>
      <div id="top"></div>
      <Header />
      <div className="content">
        <section id="personal">
          <PersonalInfo />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="resume">
          <Resume />
        </section>
      </div>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
