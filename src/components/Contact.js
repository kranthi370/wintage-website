import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <strong>📍 Address:</strong>
              <p>123 Dairy Lane, Fresh Valley, Secunderabad, Telangana 500001</p>
            </div>
            <div className="info-item">
              <strong>📞 Phone:</strong>
              <p>+91 98765 43210</p>
            </div>
            <div className="info-item">
              <strong>✉️ Email:</strong>
              <p>wintage.nostalgia@gmail.com</p>
            </div>
            <div className="info-item">
              <strong>🕒 Hours:</strong>
              <p>Mon-Sat: 6:00 AM - 8:00 PM<br />Sunday: 7:00 AM - 6:00 PM</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Send us a Message</h3>
            <div className="contact-form">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleFormChange('name', e.target.value)}
                className="form-input"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => handleFormChange('email', e.target.value)}
                className="form-input"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={(e) => handleFormChange('message', e.target.value)}
                className="form-textarea"
              />
              <button
                onClick={handleSubmit}
                className="submit-button"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;