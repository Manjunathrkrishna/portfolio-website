import React from 'react';
import '../styles/Projects.css';

const projects = [
    {
        title: 'AI-Powered Chatbot Assistant',
        category: 'AI/ML',
        description: 'Intelligent chatbot leveraging OpenAI APIs with memory management, real-time streaming responses, and custom knowledge base integration.',
        tech: ['Python', 'FastAPI', 'OpenAI', 'PostgreSQL', 'React'],
        links: [
          { label: 'GitHub', url: '#' },
          { label: 'Live Demo', url: '#' },
        ],
      },
    {
        title: 'Microservices Architecture Platform',
        category: 'System Design',
        description: 'Scalable microservices platform with service mesh, API gateway, event streaming, and distributed tracing. Built for high-throughput applications.',
        tech: ['Node.js', 'Kubernetes', 'Docker', 'RabbitMQ', 'MongoDB', 'AWS'],
        links: [
          { label: 'GitHub Repo', url: '#' },
          { label: 'Docs', url: '#' },
        ],
      },
    {
        title: 'React Portfolio Website',
        category: 'Full Stack',
        description: 'Modern, responsive portfolio showcasing projects, experience, and tech stack. Built with React, deployed on Netlify with CI/CD pipeline.',
        tech: ['React', 'JavaScript', 'CSS3', 'Netlify'],
        links: [
          { label: 'GitHub Repo', url: 'https://github.com/Manjunathrkrishna/portfolio-website' },
          { label: 'Live Site', url: 'https://manjunathr-portfolio.netlify.app/' },
        ],
      },
    {
        title: 'Flask + React Blog Platform',
        category: 'Full Stack',
        description: 'Secure full-stack blog application with JWT authentication, RESTful APIs, real-time search, and markdown support.',
        tech: ['Flask', 'React', 'PostgreSQL', 'JWT', 'Docker'],
        links: [
          { label: 'Backend', url: 'https://github.com/Manjunathrkrishna/flask-blog-api-jwt' },
          { label: 'Frontend', url: 'https://github.com/Manjunathrkrishna/flask-blog-ui' },
          { label: 'Live Demo', url: 'https://flask-blog-ui.vercel.app' },
        ],
      },
    {
        title: 'React Learning Platform',
        category: 'Education',
        description: 'Comprehensive React guide with interactive examples, hooks deep-dive, Redux state management, and best practices.',
        tech: ['React', 'Redux', 'JavaScript', 'Hooks'],
        links: [
          { label: 'Live Site', url: 'https://learn-react-with-me.netlify.app' },
          { label: 'GitHub Repo', url: 'https://github.com/Manjunathrkrishna/learn-react-with-me' }
        ]
      },
];

function Projects() {
  const categories = ['All', 'AI/ML', 'System Design', 'Full Stack', 'Education'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="page-content projects-section">
      <h2 className="projects-heading">Featured Projects</h2>
      
      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="category-badge">{project.category}</span>
            </div>
            <p className="project-description">{project.description}</p>
            
            <div className="tech-tags">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  🔗 {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="more-projects">
        <p>Looking for more projects? Check out my <a href="https://github.com/Manjunathrkrishna" target="_blank" rel="noreferrer">GitHub</a> for additional work!</p>
      </div>
    </div>
  );
}

export default Projects;
