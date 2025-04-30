import React from 'react';
import '../styles/Projects.css';

const projects = [
    {
        title: 'React Portfolio Website',
        description: 'This portfolio built with React. Includes resume download, GitHub links, and contact section. Deployed on Netlify.',
        links: [
          { label: 'GitHub Repo', url: 'https://github.com/Manjunathrkrishna/portfolio-website' },
          { label: 'Live Site', url: 'https://manjunathr-portfolio.netlify.app/' }, // update this
        ],
      },
  {
    title: 'Flask + React Blog App',
    description: 'A secure full-stack blog platform with JWT authentication, REST APIs (Flask), and React frontend. Deployed on Render & Vercel.',
    links: [
      { label: 'GitHub Backend', url: 'https://github.com/Manjunathrkrishna/flask-blog-api-jwt' },
      { label: 'GitHub Frontend', url: 'https://github.com/Manjunathrkrishna/flask-blog-ui' },
      { label: 'Live Demo', url: 'https://flask-blog-ui.vercel.app' },
    ],
  },
  {
    title: 'React Dev Manual (In Progress)',
    description: 'React learning guide with accordion-based explanations, Redux, hooks, and modern UI.',
    links: [
      { label: 'Live Site', url: 'https://learn-react-with-me.netlify.app' },
      { label: 'GitHub Repo', url: 'https://github.com/Manjunathrkrishna/learn-react-with-me' }
    ]
  },
  
  {
    title: 'React Hooks Demo App (In Progress)',
    description: 'A demo app showcasing useState, useEffect, and useContext. Focused on React hooks learning.',
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/Manjunathrkrishna/react-hooks-demo-app' },
    ],
  },
];

function Projects() {
  return (
    <div className="page-content projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                🔗 {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
