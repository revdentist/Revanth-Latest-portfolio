import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Dr. Revanth's Portfolio</h1>
        <p>Your Smile, Our Mission!</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi! I’m Dr. Revanth, a passionate dentist dedicated to making your smile brighter and healthier. With expertise in modern dentistry, I ensure a comfortable experience for every patient.
        </p>
      </section>

      <section className="services">
        <h2>My Services</h2>
        <div className="service-list">
          <div className="service">
            <h3>Cosmetic Dentistry</h3>
            <p>Bring out your best smile with advanced cosmetic treatments.</p>
          </div>
          <div className="service">
            <h3>Orthodontics</h3>
            <p>Align your teeth for a perfect, confident smile.</p>
          </div>
          <div className="service">
            <h3>Dental Implants</h3>
            <p>Replace missing teeth with durable and natural-looking implants.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2024 Dr. Revanth | All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

