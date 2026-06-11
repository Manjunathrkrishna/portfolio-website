// src/components/Home.js
import React from 'react';
import { FaReact, FaPython, FaAws, FaNodeJs, FaCode, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiFlask, SiDjango, SiFastapi, SiPostgresql, SiMongodb, SiKubernetes, SiOpenai } from 'react-icons/si';
import '../styles/Home.css';

function Home() {
  const techStack = {
    frontend: [
      { name: 'React', icon: FaReact },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML5', icon: FaCode },
    ],
    backend: [
      { name: 'Python', icon: FaPython },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Django', icon: SiDjango },
      { name: 'Flask', icon: SiFlask },
      { name: 'Node.js', icon: FaNodeJs },
    ],
    database: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
    cloud: [
      { name: 'AWS', icon: FaAws },
      { name: 'Docker', icon: FaDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
    ],
    ai: [
      { name: 'OpenAI APIs', icon: SiOpenai },
      { name: 'AI Agents', icon: FaCode },
      { name: 'LLM Integration', icon: FaCode },
    ],
  };

  return (
    <div className="page-content">
      <div className="hero">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Manjunath Ramakrishna</span> 👋
          </h1>
          <p className="tagline">Senior Full Stack Developer | AI Agent Specialist | System Design Enthusiast</p>
          <p className="description">
            Building scalable, intelligent applications with modern tech stack. 
            Passionate about AI integration, system design, and clean code architecture.
          </p>
          
          <div className="cta-buttons">
            <a href="/ManjunathR_Resume.pdf" download className="btn-resume btn-primary">
              📄 Download Resume
            </a>
            <a href="/#/projects" className="btn-resume btn-secondary">
              💼 View Projects
            </a>
          </div>
        </div>

        <div className="tech-stack-section">
          <h2>Tech Stack & Expertise</h2>
          
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>🎨 Frontend</h3>
              <div className="skills-grid">
                {techStack.frontend.map((tech, idx) => {
                  const Icon = tech.icon;
                  return <div key={idx}><Icon /> {tech.name}</div>;
                })}
              </div>
            </div>

            <div className="expertise-card">
              <h3>⚙️ Backend</h3>
              <div className="skills-grid">
                {techStack.backend.map((tech, idx) => {
                  const Icon = tech.icon;
                  return <div key={idx}><Icon /> {tech.name}</div>;
                })}
              </div>
            </div>

            <div className="expertise-card">
              <h3>🗄️ Database</h3>
              <div className="skills-grid">
                {techStack.database.map((tech, idx) => {
                  const Icon = tech.icon;
                  return <div key={idx}><Icon /> {tech.name}</div>;
                })}
              </div>
            </div>

            <div className="expertise-card">
              <h3>☁️ Cloud & DevOps</h3>
              <div className="skills-grid">
                {techStack.cloud.map((tech, idx) => {
                  const Icon = tech.icon;
                  return <div key={idx}><Icon /> {tech.name}</div>;
                })}
              </div>
            </div>

            <div className="expertise-card ai-card">
              <h3>🤖 AI & Machine Learning</h3>
              <div className="skills-grid">
                {techStack.ai.map((tech, idx) => {
                  const Icon = tech.icon;
                  return <div key={idx}><Icon /> {tech.name}</div>;
                })}
              </div>
            </div>
          </div>

          <div className="specializations">
            <h3>Specializations</h3>
            <ul className="spec-list">
              <li>✓ AI Agent Development & Integration</li>
              <li>✓ Large-Scale System Design</li>
              <li>✓ Microservices Architecture</li>
              <li>✓ Cloud-Native Development</li>
              <li>✓ API Design & RESTful Services</li>
              <li>✓ Database Optimization & Scaling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
