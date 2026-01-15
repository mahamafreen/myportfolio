
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-bold text-textPrimary mb-8">
              From Concept to Clickable <br />Reality.
            </h2>
            <div className="space-y-6 text-textSecondary leading-relaxed">
              <p>
                I’m a software engineering student who loves creating digital assets that focus on function and aesthetics efficiently. I focus on frontend development, web development and apps that are easy to navigate, interactive, intuitive and visually clean.

              </p>
              <p>
                I enjoy solving problems and figuring out how to materialize ideas. Whether it’s a responsive website, a small interactive game, or an animated interface, I like to make sure everything feels intentional and works smoothly. I have worked with JavaScript, React, Next.js, and Tailwind CSS, and I’m always ready to deliver and be efficient

              </p>
              <div className="flex space-x-12 mt-12">
                <div>
                  <h4 className="text-3xl font-serif font-bold text-primary">3+</h4>
                  <p className="text-xs uppercase tracking-widest">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif font-bold text-primary">17+</h4>
                  <p className="text-xs uppercase tracking-widest">Projects Completed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
