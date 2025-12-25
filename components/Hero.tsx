import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const headerOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-surface dark:bg-[#141218] pt-16">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-tertiary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-[20%] w-80 h-80 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface-container dark:bg-[#2B2930] border border-outline/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Available for work</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
            <span className="block">{HERO_CONTENT.name.split(' ')[0]}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
              {HERO_CONTENT.name.split(' ')[1]}
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-light">
            {HERO_CONTENT.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, '#projects')}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-200 bg-slate-900 dark:bg-primary rounded-full hover:bg-slate-800 dark:hover:bg-primary/90 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 dark:focus:ring-offset-slate-900 w-full sm:w-auto"
            >
              {HERO_CONTENT.ctaPrimary}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-slate-900 dark:text-white transition-all duration-200 bg-white dark:bg-[#2B2930] border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-[#36343b] hover:border-slate-300 w-full sm:w-auto"
            >
              {HERO_CONTENT.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;