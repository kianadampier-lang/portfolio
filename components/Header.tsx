import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Toggle Dark Mode
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const headerOffset = 80; // Account for fixed header height
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false); // Close mobile menu
    }
  };

  return (
    <>
      <header 
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4`}
      >
        <div className={`
          relative flex items-center justify-between pl-6 pr-2 py-2 rounded-full transition-all duration-300
          ${isScrolled 
            ? 'w-full max-w-5xl bg-surface-container/80 dark:bg-[#2B2930]/80 backdrop-blur-xl shadow-lg border border-white/20' 
            : 'w-full max-w-7xl bg-transparent'}
        `}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-lg font-bold font-display tracking-tight text-slate-900 dark:text-white"
            >
              DevPortfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <nav className="flex items-center space-x-1 mr-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2 text-sm font-medium rounded-full text-slate-600 dark:text-slate-300 hover:bg-surface-dim dark:hover:bg-white/10 hover:text-primary dark:hover:text-primary-container transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2"></div>
            <button
              type="button"
              onClick={toggleTheme}
              className="p-3 rounded-full text-slate-600 dark:text-slate-300 hover:bg-surface-dim dark:hover:bg-white/10 hover:text-primary transition-all cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-3 rounded-full bg-surface-dim dark:bg-white/10 text-slate-600 dark:text-slate-300 cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-full text-white transition-colors cursor-pointer ${isOpen ? 'bg-slate-800' : 'bg-primary text-white'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-surface dark:bg-[#141218] pt-24 px-6 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <nav className="flex flex-col space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-6 py-4 text-2xl font-display font-medium rounded-3xl text-slate-900 dark:text-white hover:bg-surface-container dark:hover:bg-[#2B2930] active:bg-primary-container active:text-primary-onContainer transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;