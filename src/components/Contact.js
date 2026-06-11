import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css';

function Contact() {
    return (
      <div className="page-content contact">
        <div className="contact-container">
          <div className="contact-header">
            <h2>Let's Connect</h2>
            <p>I'm always open to discussing new projects, technologies, and opportunities.</p>
          </div>

          <div className="contact-main">
            <div className="contact-methods">
              <h3>Get In Touch</h3>
              
              <div className="contact-grid">
                <a href="mailto:mrkrishna6325@gmail.com" className="contact-card email-card">
                  <FaEnvelope className="contact-icon" />
                  <h4>Email</h4>
                  <p>mrkrishna6325@gmail.com</p>
                  <span className="contact-action">Send Email →</span>
                </a>

                <a 
                  href="https://www.linkedin.com/in/manjunath-ramakrishna-14266915a/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card linkedin-card"
                >
                  <FaLinkedin className="contact-icon" />
                  <h4>LinkedIn</h4>
                  <p>Connect with me</p>
                  <span className="contact-action">Visit Profile →</span>
                </a>

                <a 
                  href="https://github.com/Manjunathrkrishna"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card github-card"
                >
                  <FaGithub className="contact-icon" />
                  <h4>GitHub</h4>
                  <p>Check out my work</p>
                  <span className="contact-action">View Projects →</span>
                </a>
              </div>
            </div>

            <div className="contact-form-section">
              <h3>Send a Message</h3>
              <form
                className="contact-form"
                action="https://formspree.io/f/xpwdqkbj"
                method="POST"
              >
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required 
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <textarea 
                    name="message" 
                    rows="6" 
                    placeholder="Your Message..." 
                    required 
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;