
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Eye, Layers3 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden border-y border-border/60 bg-surface/20 py-24 md:py-32">
      <div className="absolute left-0 top-0 h-full w-1/3 bg-primary/[0.03]" />
      <div className="container relative mx-auto px-6">
        <div className="mb-14 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">
          <div aria-hidden="true" className="h-px w-10 bg-primary" />
          About me
        </div>

        <div className="grid items-center gap-16 md:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-8 max-w-xl text-4xl font-serif font-bold leading-[1.08] text-textPrimary md:text-6xl">
              From concept to <span className="text-primary">clickable</span> reality.
            </h2>
            <div className="max-w-xl space-y-5 text-base leading-relaxed text-textSecondary">
              <p>
                I’m a software engineering student who builds digital experiences where thoughtful design meets reliable code. My focus is frontend development, web apps, and interfaces that feel as good as they work.
              </p>
              <p>
                From responsive websites to interactive games, I enjoy turning ambitious ideas into clear, intuitive products. I work with JavaScript, React, Next.js, and Tailwind CSS, always with an eye for the small details.
              </p>
              <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-border/70 pt-6">
                <div className="min-w-[110px]">
                  <h4 className="text-4xl font-serif font-bold text-primary">3<span className="text-2xl">+</span></h4>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-textSecondary">Years experience</p>
                </div>
                <div className="min-w-[150px]">
                  <h4 className="text-4xl font-serif font-bold text-primary">17<span className="text-2xl">+</span></h4>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-textSecondary">Projects completed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-l border-primary/30 pl-6 md:pl-10"
          >
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-primary">What I bring</p>
            <div className="grid gap-8">
              <div className="flex gap-4">
                <Code2 size={20} className="mt-1 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-textPrimary">Frontend craft</h3>
                  <p className="text-sm leading-relaxed text-textSecondary">Responsive interfaces built with clean, dependable code.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Layers3 size={20} className="mt-1 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-textPrimary">Product thinking</h3>
                  <p className="text-sm leading-relaxed text-textSecondary">Clear user journeys that make complex ideas feel simple.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Eye size={20} className="mt-1 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-textPrimary">Attention to detail</h3>
                  <p className="text-sm leading-relaxed text-textSecondary">Thoughtful motion, hierarchy, and polish in every interaction.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
