import React, { useState } from 'react';
import './style/Projects.css';

const projectData = [
  {
    id: 1,
    title: "Chess App",
    description: "A full-stack chess application built using React, Flask, and Python. This app allows users to play chess against a basic AI opponent, visualizing the game on a dynamic chessboard with real-time move suggestions. It uses Flask for backend logic, including move validation and AI-based move generation, and React for the front-end UI.",
    imageUrl: `${process.env.PUBLIC_URL}/images/Projects/chess.jpg`,
    link: "https://github.com/pandya-aditya/Full-Stack-Chess-App"
  },
  {
    id: 2,
    title: "Financial Dashboard",
    description: "A full-stack project designed to keep track of financial expenditures and profits built using the MERN stack (MongoDB, Express, React, Node).",
    imageUrl: `${process.env.PUBLIC_URL}/images/Projects/Money-Tracker.JPG`,
    link: "https://github.com/pandya-aditya/Money-Tracker"
  },
  {
    id: 3,
    title: "Flame Forecaster",
    description: "Flame Forecaster is an AI-driven wildfire prediction project dedicated to safeguarding Alberta by leveraging data analysis and machine learning.",
    imageUrl: `${process.env.PUBLIC_URL}/images/Projects/Flame.JPG`,
    link: "https://github.com/pandya-aditya/Flame_Forecaster"
  },
  {
    id: 4,
    title: "Brawler Online",
    description: "BrawlerOnline is a multiplayer online game where players can engage in real-time battles with others over the internet. The game is built using Python and is designed to provide an engaging and interactive experience with customizable player avatars and dynamic gameplay.",
    imageUrl: `${process.env.PUBLIC_URL}/images/Projects/Brawler.png`,
    link: "https://github.com/pandya-aditya/Brawler-Online"
  },
  {
    id: 5,
    title: "Real Time Chat App",
    description: " Developed a real-time chat application with a responsive React frontend, providing users with a seamless messaging experience",
    imageUrl: `${process.env.PUBLIC_URL}/images/Projects/Real.jpg`,
    link: "https://github.com/pandya-aditya/Brawler-Online"
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div>
      <h1>Personal Projects</h1>
      <div className="projects-container">
        {projectData.map((project) => (
          <div
            key={project.id}
            className={`project-card ${hoveredProject === project.id ? 'expanded' : ''}`}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {hoveredProject === project.id ? (
              <img src={project.imageUrl} alt={`${project.title} thumbnail`} className="project-media" />
            ) : (
              <img src={project.imageUrl} alt={`${project.title} thumbnail`} className="project-media" />
            )}
            <div className="project-info">
              <h2>{project.title}</h2>
              <p className="description">{project.description}</p>
              {project.title !== "Real Time Chat App" && (
                <a href={project.link} className="learn-more-button">Learn More</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
