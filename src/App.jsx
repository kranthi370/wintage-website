import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Community from './components/Community'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <>
        <Navbar />
        <div id="hero"><Hero /></div>
        <div id="products"><Products /></div>
        <div id="about"><About /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="contact"><Contact /></div>
      </>
      <Community />
      <Footer />
    </div>
  )
}

export default App
