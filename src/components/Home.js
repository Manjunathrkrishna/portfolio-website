// src/components/Home.js
import React from 'react';
import { FaReact, FaPython, FaAws, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiFlask, SiDjango, SiFastapi } from 'react-icons/si';
import '../styles/Home.css'; // or ../style.

function Home() {
  return (
    <div className="page-content">
      <div className="hero">
        <h1>Hi, I'm <span className="highlight">Manjunath Ramakrishna</span> 👋</h1>
        <h2>Senior Full Stack Developer</h2>
        <h2>Tech Stack</h2>
        {/* <p className="stack">Javascript | React | Python | Flask | Django | FastAPI | AWS | ServiceNow</p> */}
        <div className="skills-grid">
  <div><FaReact /> React</div>
  <div><SiJavascript /> JavaScript</div>
  <div><FaPython /> Python</div>
  <div><SiFlask /> Flask</div>
  <div><SiDjango /> Django</div>
  <div><SiFastapi /> FastAPI</div>
  <div><FaAws /> AWS</div>
  <div><FaNodeJs /> Node.js</div>
  <div><FaHtml5 /> HTML5</div>
  <div><FaCss3Alt /> CSS3</div>
  <div><FaGitAlt /> Git</div>
</div>


        <a href="/ManjunathR_Resume.pdf" download className="btn-resume">
          📄 Download Resume
        </a>
      </div>
    </div>
  );
}

export default Home;
