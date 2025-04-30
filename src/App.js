import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css'; // or ./style.css

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
