import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


const projects = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React.js and deployed on Netlify.',
    techStack: 'React, CSS, Netlify',
    github: 'https://github.com/Manjunathrkrishna/portfolio-website',
    live: 'https://manjunathr-portfolio.netlify.app',
  },
  {
    title: 'Task Manager App',
    description: 'A full stack task manager with React frontend and Flask backend (In Progress).',
    techStack: 'React, Redux, Flask, SQLAlchemy',
    github: 'https://github.com/Manjunathrkrishna',
    live: '',
  }
];

function Projects() {
  return (
    <section className="projects-page">
      <div className="container-projects">
        <h2 className="projects-heading">🚀 My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.techStack}</p>
              <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
  <FaGithub /> GitHub
</a>
<a href={project.live} target="_blank" rel="noreferrer">
  <FaExternalLinkAlt /> Live Demo
</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
