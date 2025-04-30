import React from 'react';
import '../styles/Contact.css'; // only if you're splitting styles
function Contact() {
    return (
      <div className="page-content contact">
        <h2>Contact Me</h2>
        <p>Let's collaborate! Reach out directly or drop a message 👇</p>
  
        <div className="contact-links">
          <a
            href="mailto:mrkrishna6325@gmail.com"
            className="contact-button"
          >
            📧 Email Me
          </a>
  
          <a
            href="https://www.linkedin.com/in/manjunath-ramakrishna-14266915a/"
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            🔗 LinkedIn
          </a>
        </div>
  
        <form
          className="contact-form"
          action="https://formspree.io/f/xpwdqkbj"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
  
  export default Contact;