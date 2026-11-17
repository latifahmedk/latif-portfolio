import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, FileText, Send, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy for active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    
    // Close the mobile drawer immediately
    setMobileMenuOpen(false);

    if (href.startsWith('#')) {
      setActiveSection(href.substring(1));
    }

    // Use a slight timeout to let the drawer collapse animation initiate
    // which prevents mobile browsers from aborting the smooth scroll gesture
    setTimeout(() => {
      if (href === '#home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        return;
      }

      const targetElement = document.querySelector(href);
      if (targetElement) {
        // Account for fixed floating navbar height
        const navbarHeight = 85;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 sm:py-3'
          : 'py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl border transition-all duration-300 ${
            isScrolled
              ? 'bg-[#0b0f19]/80 dark:bg-[#0b0f19]/85 [html:not(.dark)_&]:bg-white/85 backdrop-blur-xl border-slate-700/50 dark:border-slate-800 [html:not(.dark)_&]:border-slate-200 shadow-lg shadow-black/10 dark:shadow-cyan-950/20'
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-violet-500/20">
              <div className="w-full h-full bg-[#050713] dark:bg-[#050713] [html:not(.dark)_&]:bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                  &lt;LA/&gt;
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                Latif Ahmed
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 -mt-1 hidden sm:block">
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-cyan-400 dark:text-cyan-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {/* Resume button (desktop) */}
            <a
              href={personalInfo.resumeUrl}
              download="Latif_Ahmed_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide border border-slate-700/60 dark:border-slate-700/80 bg-slate-800/40 dark:bg-slate-900/60 text-slate-200 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 shadow-sm"
              title="Download Latif Ahmed's Resume"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </a>

            {/* CTA Hire Me Button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-md shadow-violet-600/25 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-slate-700/50 dark:border-slate-700/60 bg-slate-800/40 dark:bg-slate-900/60 text-slate-300 dark:text-slate-200 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden max-w-7xl mx-auto px-4 mt-2"
          >
            <div className="rounded-2xl border border-slate-700/60 dark:border-slate-800 bg-[#0b0f19]/95 [html:not(.dark)_&]:bg-white/95 backdrop-blur-2xl p-4 shadow-2xl space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-violet-600/20 to-cyan-500/20 text-cyan-400 font-semibold border border-cyan-500/30'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-800/40 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-slate-700/50 dark:border-slate-800/80 flex flex-col gap-2">
                <a
                  href={personalInfo.resumeUrl}
                  download="Latif_Ahmed_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold border border-slate-700/80 bg-slate-800/60 text-slate-200 hover:text-white"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Download Resume PDF</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500"
                >
                  <Send className="w-4 h-4" />
                  <span>Contact Latif</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
