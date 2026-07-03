import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey'; 
import Connect from './components/Connect';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <div className="bg-[#0B0F19] min-h-screen overflow-x-hidden select-none">
      <Navbar />
      <Hero />
      
      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Skills />
      </ScrollReveal>

      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      {/* Kept separate since Journey already manages its internal timeline animations beautifully */}
      <Journey />

      <ScrollReveal>
        <Connect />
      </ScrollReveal>

      <Footer />
    </div>
  );
}

export default App;