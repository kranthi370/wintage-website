import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">About Wintage Dairy</h1>
            
            <p className="about-intro enhanced-text">
              <span className="brand-highlight">Wintage Milk Products</span> is a <span className="brand-highlight">premium dairy brand</span> from <span className="brand-highlight">India</span> offering a wide range of <span className="brand-highlight">high-quality, 
              hygienically processed dairy products</span> for <span className="brand-highlight">global distribution</span>.
            </p>

            <div className="why-choose-section">
              <h2 className="why-choose-title">Why Choose Wintage?</h2>
              
              <ul className="benefits-list">
                <li className="benefit-item enhanced-bullet">
                  <span className="checkmark">✅</span>
                  Wide range of globally competitive dairy products
                </li>
                <li className="benefit-item enhanced-bullet">
                  <span className="checkmark">✅</span>
                  Strict quality and hygiene protocols
                </li>
                <li className="benefit-item enhanced-bullet">
                  <span className="checkmark">✅</span>
                  Flexible packaging and private labeling
                </li>
                <li className="benefit-item enhanced-bullet">
                  <span className="checkmark">✅</span>
                  On-time delivery and export-ready documentation
                </li>
                <li className="benefit-item enhanced-bullet">
                  <span className="checkmark">✅</span>
                  Personalized service for every buyer
                </li>
              </ul>
            </div>
          </div>

          <div className="about-image">
            <img 
              src="/images/wintage-main.png" 
              alt="Wintage Dairy"
              className="wintage-main-image responsive-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="image-fallback" style={{display: 'none'}}>
              <span className="fallback-icon">🐄</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;