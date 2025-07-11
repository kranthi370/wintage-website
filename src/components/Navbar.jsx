import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* <img src="src/assets/images/wintage-main.jpg" alt="logo" /> */}
          <span>Wintage</span>
        </div>
        <ul className="navbar-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="navbar-button">🛒 Order Now</button>
      </div>
    </nav>
  )
}

export default Navbar
