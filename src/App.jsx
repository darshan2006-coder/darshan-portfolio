import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from './components/Preloader';
import BackgroundCanvas from './components/BackgroundCanvas'; // Import the new ambient engine
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen overflow-x-hidden select-none relative bg-[#0B0F19]">
      {/* Dynamic Background Network layers */}
      <BackgroundCanvas />

      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
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

          <Journey />

          <ScrollReveal>
            <Connect />
          </ScrollReveal>

          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;