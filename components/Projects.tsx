import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './ui/SectionContainer';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="bg-surface dark:bg-[#141218]">
      <SectionContainer id="projects">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              A selection of projects that showcase my passion for building polished web experiences.
            </p>
          </div>
          <a href="https://github.com" target="_blank" className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-secondary-container text-secondary-onContainer hover:opacity-90 transition-opacity font-medium">
             <span>View GitHub</span>
             <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-surface-container dark:bg-[#2B2930] rounded-[2rem] overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative p-3 pb-0">
                <div className="relative overflow-hidden rounded-t-[1.5rem] aspect-video">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                    <a 
                      href={project.githubUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform"
                      aria-label="View Source"
                      title="View Source Code"
                    >
                      <Github size={24} />
                    </a>
                    {project.demoUrl ? (
                      <a 
                        href={project.demoUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-primary text-white rounded-full hover:scale-110 transition-transform"
                        aria-label="View Live Demo"
                        title="View Live Demo"
                      >
                        <ExternalLink size={24} />
                      </a>
                    ) : (
                      <span 
                        className="p-4 bg-white/50 text-white/50 rounded-full cursor-not-allowed"
                        aria-label="No Live Demo Available"
                        title="No Live Demo Available"
                      >
                         <ExternalLink size={24} />
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md bg-white dark:bg-[#141218] text-slate-500 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden text-center">
             <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary-container text-secondary-onContainer hover:opacity-90 transition-opacity font-medium">
             <span>View GitHub</span>
             <ArrowUpRight size={20} />
          </a>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Projects;