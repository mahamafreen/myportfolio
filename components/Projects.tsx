
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ExternalLink, X } from 'lucide-react';

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/90 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="glass-card max-w-4xl w-full max-height-[90vh] rounded-3xl overflow-hidden shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-textSecondary hover:text-white z-10 bg-surface/50 p-2 rounded-full"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
            <h2 className="text-3xl font-serif font-bold text-textPrimary mb-4">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-textSecondary leading-relaxed mb-8">
              {project.longDescription}
            </p>
            <div className="flex space-x-6">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-xl hover:bg-blue-600 transition-all font-bold text-sm"
              >
                <ExternalLink size={18} /> Visit Live Site
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h4 className="text-primary font-mono tracking-widest uppercase mb-2 text-sm">Portfolio</h4>
            <h2 className="text-4xl font-serif font-bold text-textPrimary">Featured Creations</h2>
          </div>
          <p className="max-w-md text-textSecondary text-sm text-right mt-4 md:mt-0">
            A selection of my personal favorites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative rounded-3xl overflow-hidden glass-card aspect-[4/5]"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0 opacity-40 group-hover:opacity-60"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 py-0.5 border border-white/20 text-[8px] font-bold text-white uppercase tracking-widest rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-serif font-bold text-textPrimary mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-textSecondary line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  View Project <span className="ml-2 text-primary">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
