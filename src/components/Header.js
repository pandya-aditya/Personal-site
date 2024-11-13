import React from 'react';
import './style/Header.css';

const Header = () => {
  return (
    <nav className="header">
      <a href="#top" className="header-link">Aditya Pandya</a>
      <a href="#experience" className="header-link">Experience</a>
      <a href="#projects" className="header-link">Projects</a>
      <a href="#resume" className="header-link">Resume</a>
    </nav>
  );
}

export default Header;
