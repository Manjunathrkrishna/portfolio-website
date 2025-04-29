import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './Projects';
import './style.css';

function Home() {
  return (
    <div className="page-content">
      <div className="hero">
        <h1>Hi, I'm <span className="highlight">Manjunath</span> 👋</h1>
        <h2>Senior Full Stack Developer</h2>
        <p className="stack">React | Python | Flask | Django | FastAPI | AWS</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="page-content">
      <div className="about">
        <div>
          <h2>About Me</h2>
          <p>
            I am a passionate Full Stack Developer with 8.8 years of experience building scalable applications using modern technologies like React, Python, Flask, Django, FastAPI, and AWS.
          </p>
          <p>
            I'm focused on delivering high-quality code, end-to-end solutions, and preparing for FAANG-level roles.
          </p>
        </div>
        <img src="/profile.jpeg" alt="Manjunath R" />
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="page-content">
      <div className="contact">
        <h2>Contact Me</h2>
        <p>Let's connect! Feel free to reach out for opportunities, collaborations, or just to say hi 👋</p>
        <a href="mailto:mrkrishna6325@gmail.com" className="contact-button">📧 Email Me</a>
        <br /><br />
        <a href="https://www.linkedin.com/in/manjunath-ramakrishna-14266915a/" target="_blank" rel="noreferrer" className="contact-button">🔗 LinkedIn</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="page-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Manjunath R | Built with React</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
