import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Lexend, -apple-system, BlinkMacSystemFont, sans-serif' }}>
      <Navbar />
      <main>
        <Home />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
