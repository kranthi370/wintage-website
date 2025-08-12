import React from 'react';
import './Home.css';

function Home() {
  // Navigate to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        {/* Text Side */}
        <div className="home-text">
          <h2>
            <span className="brand">Wintage</span> Milk Products
          </h2>
          
          {/* First paragraph - Larger size with green color */}
          <p className="home-intro-large">
            Wintage Milk Products is a premium dairy brand from India offering a
            wide range of high-quality, hygienically processed dairy products
            for global distribution.
          </p>
          
          {/* Second paragraph - Normal size */}
          <p className="home-intro-normal">
            We are focused on delivering authentic taste, shelf-stable
            packaging, and consistent quality to meet international standards for
            retail, wholesale, and private label partnerships.
          </p>

          {/* Navigation Buttons */}
          <div className="home-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('products')}
            >
              Our Products
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Image Side - Restored from original */}
        {/* <div className="home-image">
          <div className="cow-icon">🐄</div>
          <div className="wintage-logo">
            <div className="wintage-text">WINTAGE</div>
            <div className="tagline">NOSTALGIA IN EVERY SIP!</div>
          </div>
        </div> */}
        <img src="/images/wintage-main.png" alt="Wintage Logo" className="wintage-main-image" />
      </div>
    </section>
  );
}

export default Home;