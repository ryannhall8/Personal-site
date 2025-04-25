import React from 'react';

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <div className="project-card">
        <h2 className="project-title">Project 1: E-Commerce Application</h2>
        <p className="project-description">
        I built a responsive e-commerce site using React and styled it to create a clean, user-friendly interface. I integrated the Fake Store API to display real product data and added features like user authentication, a shopping cart, and a simple checkout flow. This project highlights my ability to work with APIs, manage state with React, and build a smooth front-end shopping experience.
        </p>
        <a href="https://glamourandgadgets.netlify.app/#" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
      </div>

      <div className="project-card coming-soon">
        <h2 className="project-title">Project 3: CarePair</h2>
        <p className="project-description">
          CarePair is a nannying and babysitting app that matches caregivers with families based on preferences such as pay, location, and availability. This project is currently in development, and I’m excited to launch it soon!
        </p>
        <p className="coming-soon-text">Coming Soon!</p>
      </div>
    </div>
  );
}

export default Projects;