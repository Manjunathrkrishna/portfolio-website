// src/components/About.js
import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="page-content">
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          
          <section className="about-section">
            <h3>👨‍💻 Professional Overview</h3>
            <p>
              Senior Full Stack Developer with 9.5+ years of hands-on experience building scalable, 
              production-grade applications. I specialize in designing and implementing complex systems 
              with AI/ML integration, leveraging modern cloud technologies and best practices.
            </p>
          </section>

          <section className="about-section">
            <h3>🎯 Core Expertise</h3>
            <ul className="expertise-list">
              <li><strong>Full Stack Development:</strong> End-to-end application design and implementation</li>
              <li><strong>System Design:</strong> Scalable architectures, microservices, distributed systems</li>
              <li><strong>AI Agent Development:</strong> LLM integration, autonomous agents, prompt engineering</li>
              <li><strong>Cloud Architecture:</strong> AWS, containerization, serverless, DevOps practices</li>
              <li><strong>Database Design:</strong> SQL/NoSQL optimization, data modeling, performance tuning</li>
              <li><strong>API Development:</strong> RESTful services, real-time APIs, GraphQL</li>
            </ul>
          </section>

          <section className="about-section">
            <h3>🚀 Recent Focus Areas</h3>
            <div className="focus-areas">
              <div className="focus-item">
                <h4>AI & LLM Integration</h4>
                <p>Building intelligent agents with OpenAI APIs, prompt optimization, and autonomous decision-making systems</p>
              </div>
              <div className="focus-item">
                <h4>System Design</h4>
                <p>Architecting high-scale, fault-tolerant systems with focus on performance, reliability, and maintainability</p>
              </div>
              <div className="focus-item">
                <h4>Cloud-Native Development</h4>
                <p>Leveraging AWS services for serverless, containerized, and distributed applications</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h3>💡 Philosophy</h3>
            <p>
              I believe in writing clean, maintainable code that scales. Passionate about solving complex problems, 
              learning new technologies, and delivering high-quality solutions that create real business value. 
              Always exploring the intersection of software architecture and AI/ML capabilities.
            </p>
          </section>
        </div>

        <div className="about-sidebar">
          <div className="quick-stats">
            <div className="stat">
              <h4>9.5+</h4>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h4>50+</h4>
              <p>Projects Delivered</p>
            </div>
            <div className="stat">
              <h4>15+</h4>
              <p>Tech Stack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
