// src/components/About.js
import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="page-content">
      <div className="about">
        <div>
          <h2>About Me</h2>
          <p>I am a passionate Full Stack Developer with 8.8 years of experience building scalable applications using modern technologies like React, Python, Flask, Django, FastAPI, and AWS.</p>
          <p>I'm focused on delivering high-quality code, end-to-end solutions, and preparing for FAANG-level roles.</p>
        </div>
        <img src="/profile.jpeg" alt="Manjunath R" />
      </div>
    </div>
  );
}

export default About;
