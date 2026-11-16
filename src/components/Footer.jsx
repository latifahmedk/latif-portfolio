import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Heart, ArrowUp, Code } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
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

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-12 border-t border-slate-800/80 dark:border-slate-800/80 [html:not(.dark)_&]:border-slate-200 overflow-hidden">
      {/* Top subtle gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 via-violet-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800/60 dark:border-slate-800/60 [html:not(.dark)_&]:border-slate-200">
          
          {/* Logo & Role */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" onClick={scrollToTop} className="flex items-center gap-2 group mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#050713] dark:bg-[#050713] [html:not(.dark)_&]:bg-white rounded-[6px] flex items-center justify-center">
                  <span className="font-mono font-bold text-xs text-cyan-400">&lt;LA/&gt;</span>
                </div>
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                {personalInfo.name}
              </span>
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Software Developer specializing in Python, Django, REST APIs, React, and scalable backend solutions.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/50 hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] text-slate-400 border border-slate-700/60 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/50 hover:bg-white/10 hover:text-white text-slate-400 border border-slate-700/60 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/50 hover:bg-[#FFA116]/20 hover:text-[#FFA116] text-slate-400 border border-slate-700/60 transition-colors"
              title="LeetCode"
            >
              <SiLeetcode className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.email}
              className="p-2 rounded-lg bg-slate-800/50 hover:bg-rose-500/20 hover:text-rose-400 text-slate-400 border border-slate-700/60 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1">
            <span>Built with precision using</span>
            <span className="text-cyan-400 font-semibold">React</span>,
            <span className="text-violet-400 font-semibold">Tailwind CSS</span> &amp;
            <span className="text-pink-400 font-semibold">Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
