
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'Tools', 'Languages'] as const;

  return (
    <section id="skills" className="py-24 bg-surface/20 relative overflow-hidden">
      {/* Decorative text */}
      <div className="absolute top-0 right-0 text-[10rem] font-serif font-bold text-white/5 pointer-events-none select-none -translate-y-1/2 translate-x-1/4">
        EXPERTISE
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-textPrimary mb-4">Core Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl"
            >
              <h3 className="text-lg font-bold text-primary uppercase tracking-widest mb-8 text-center">{cat}</h3>
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === cat).map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-textPrimary">{skill.name}</span>
                      <span className="text-[10px] font-mono text-textSecondary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-secondary to-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
