
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { motion, AnimatePresence } from 'framer-motion';

const SecretMode: React.FC<{ active: boolean }> = ({ active }) => (
  <AnimatePresence>
    {active && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] pointer-events-none border-[20px] border-primary/10 mix-blend-overlay"
      >
        <div className="absolute top-8 right-8 text-primary font-mono text-[10px] uppercase tracking-widest bg-background/50 px-3 py-1 rounded backdrop-blur-sm">
          System Integrity: Optimized
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const App: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isSecretActive, setIsSecretActive] = useState(false);

  // Hidden feature: Triple click anywhere to trigger a subtle "Developer Mode" visual overlay
  useEffect(() => {
    const handleGlobalClick = () => {
      setClickCount(prev => prev + 1);
      setTimeout(() => setClickCount(0), 1000); 
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  useEffect(() => {
    if (clickCount >= 3) {
      setIsSecretActive(true);
      setTimeout(() => setIsSecretActive(false), 8000);
    }
  }, [clickCount]);

  return (
    <div className="relative font-sans antialiased text-textPrimary bg-background min-h-screen selection:bg-primary/30 selection:text-white">
      <CustomCursor />
      <SecretMode active={isSecretActive} />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Global Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-primary/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[30vw] h-[30vw] bg-secondary/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
};

export default App;
