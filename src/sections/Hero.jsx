import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles, Terminal } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';
import TerminalVisual from '../components/TerminalVisual';

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-violet-500/10 via-cyan-500/10 to-pink-500/10 border border-violet-500/30 text-violet-400 dark:text-cyan-300 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span>Available for Software Developer Roles</span>
            </motion.div>

            {/* Main Greeting & Name with Animated Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-mono text-sm sm:text-base">
                <span>Hello, I am</span>
                <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
              </div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                <span className="block">{personalInfo.name}</span>
                <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500">
                  {personalInfo.role}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                {personalInfo.subRole}
              </p>
            </motion.div>

            {/* Professional Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
            >
              Software Developer Intern with hands-on experience in <span className="font-semibold text-violet-600 dark:text-cyan-400">Python</span>, <span className="font-semibold text-violet-600 dark:text-cyan-400">Django</span>, <span className="font-semibold text-violet-600 dark:text-cyan-400">REST APIs</span>, and <span className="font-semibold text-violet-600 dark:text-cyan-400">React</span>. Passionate about building robust backend architectures, solving complex algorithmic challenges, and engineering production-grade software solutions.
            </motion.p>

            {/* Location Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
            >
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>{personalInfo.location}</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">Galgotias B.Tech CSE (AI)</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-lg shadow-violet-600/30 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Latif_Ahmed_Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold border border-slate-700/80 dark:border-slate-700 [html:not(.dark)_&]:border-slate-300 bg-slate-900/40 dark:bg-slate-900/60 [html:not(.dark)_&]:bg-white text-slate-900 dark:text-white hover:text-cyan-400 dark:hover:text-cyan-300 hover:border-cyan-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Icons with Tooltips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 pt-3"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-2">
                Connect:
              </span>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-700/60 dark:border-slate-800 bg-slate-800/40 dark:bg-slate-900/50 text-slate-300 hover:text-white hover:border-[#0A66C2] hover:bg-[#0A66C2]/15 transition-all duration-200 hover:scale-110 shadow-sm"
                aria-label="LinkedIn Profile"
                title="Latif Ahmed on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              </a>

              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-700/60 dark:border-slate-800 bg-slate-800/40 dark:bg-slate-900/50 text-slate-300 hover:text-white hover:border-slate-400 hover:bg-white/10 transition-all duration-200 hover:scale-110 shadow-sm"
                aria-label="GitHub Profile"
                title="Latif Ahmed on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-700/60 dark:border-slate-800 bg-slate-800/40 dark:bg-slate-900/50 text-slate-300 hover:text-white hover:border-[#FFA116] hover:bg-[#FFA116]/15 transition-all duration-200 hover:scale-110 shadow-sm"
                aria-label="LeetCode Profile"
                title="Latif Ahmed on LeetCode"
              >
                <SiLeetcode className="w-4 h-4 text-[#FFA116]" />
              </a>

              <a
                href={personalInfo.socialLinks.email}
                className="p-2.5 rounded-xl border border-slate-700/60 dark:border-slate-800 bg-slate-800/40 dark:bg-slate-900/50 text-slate-300 hover:text-white hover:border-rose-500 hover:bg-rose-500/15 transition-all duration-200 hover:scale-110 shadow-sm"
                aria-label="Email Latif Ahmed"
                title="Email latif.bst18@gmail.com"
              >
                <Mail className="w-4 h-4 text-rose-400" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Interactive Code Terminal Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <TerminalVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
