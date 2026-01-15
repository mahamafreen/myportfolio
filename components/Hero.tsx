
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Instagram, Mail, MousePointer2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const yText = useTransform(scrollY, [0, 500], [0, -100]);
  const yBg = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ 
            x: mousePosition.x * 0.5, 
            y: mousePosition.y * 0.5 + (scrollY.get() * 0.1) 
          }}
          className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_50%_50%,rgba(14,116,144,0.1),transparent_60%)]"
        />
        
        {/* Large Decorative Text Behind Everything */}
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none"
        >
          <span className="text-[25vw] font-serif font-bold whitespace-nowrap">M.</span>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full pt-20">
        {/* Left Side: Content */}
        <motion.div 
          style={{ y: yText, opacity }}
          className="text-left order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-mono tracking-[0.3em] uppercase text-xs font-bold">Software Engineer</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif font-bold text-textPrimary leading-none mb-8"
          >
            Maham <br />
            <span className="text-outline">Afreen</span><span className="text-primary">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-textSecondary font-light leading-relaxed max-w-lg mb-12"
          >
            Turning ideas into interactive web experiences that work beautifully and intuitively.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-600 transition-all hover:scale-105 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)]"
            >
              View Portfolio
            </button>
             <div className="flex space-x-6">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition-colors"><Github size={20} /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-textSecondary hover:text-primary transition-colors"><Mail size={20} /></a>
            </div>
          </motion.div>
        </motion.div>
        {/* Right Side: Portrait Image with Fancy Border */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <motion.div 
            style={{ 
              x: mousePosition.x * -0.3, 
              y: mousePosition.y * -0.3 
            }}
            className="relative w-64 h-80 md:w-80 md:h-[480px] z-10"
          >
            {/* Layered Frames */}
            <div className="absolute inset-0 border border-primary/30 rounded-3xl translate-x-4 translate-y-4" />
            <div className="absolute inset-0 border border-white/10 rounded-3xl -translate-x-4 -translate-y-4" />
            
            {/* Main Image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden glass-card">
              <img 
                src="/images/profile.png" 
                alt="Maham Afreen Portrait" 
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Float Element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-surface/80 backdrop-blur-md p-4 rounded-2xl border border-border shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <MousePointer2 className="text-primary" size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-textSecondary font-bold">Currently</p>
                <p className="text-xs text-textPrimary font-bold">Open for Collaboration</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-textSecondary opacity-50 hidden md:block"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
