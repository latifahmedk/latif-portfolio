import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Calendar,
  X,
  ShieldCheck,
  Database,
  Terminal,
  ArrowRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [demoNotice, setDemoNotice] = useState(null);

  const handleDemoClick = (project) => {
    setDemoNotice(project);
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Featured Works"
          title={
            <span>
              Signature{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400">
                Software Projects
              </span>
            </span>
          }
          subtitle="Full-stack web applications and backend systems engineered with Python, Django, DRF, React, and databases."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-card border border-slate-700/60 dark:border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Card Top Preview / Banner */}
              <div className={`p-6 sm:p-8 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                
                {/* Tech Glow Pattern */}
                <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30">
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-white/90">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{project.timeline}</span>
                  </div>
                </div>

                <div className="relative z-10 mt-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 font-medium mt-1">
                    {project.category}
                  </p>
                </div>

                {/* Simulated UI Window Preview */}
                <div className="relative z-10 mt-6 p-3 rounded-xl bg-slate-950/70 border border-white/10 font-mono text-[11px] text-slate-300 space-y-1">
                  <div className="flex items-center justify-between pb-1 border-b border-white/10 text-slate-400">
                    <span className="text-cyan-400">api/{project.id === 'employee-management-system' ? 'v1/employees' : 'v1/flights'}</span>
                    <span className="text-[10px] text-emerald-400">200 OK</span>
                  </div>
                  <div className="text-slate-400 truncate">
                    {project.id === 'employee-management-system' 
                      ? 'JWT Auth • DRF Serializers • MySQL Database • React View'
                      : 'Seat Allocation • Django ORM • SQLite • Dynamic Booking Flow'}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-5 space-y-2">
                    <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Key Highlights:
                    </h5>
                    <ul className="space-y-1.5">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/50 dark:bg-slate-800/80 [html:not(.dark)_&]:bg-slate-200 text-slate-300 dark:text-cyan-300 [html:not(.dark)_&]:text-slate-700 border border-slate-700/60 dark:border-slate-700/80 [html:not(.dark)_&]:border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-700/40 dark:border-slate-800 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      <span>Explore Architecture</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-slate-700/60 dark:border-slate-800 bg-slate-800/40 hover:bg-slate-800 text-slate-300 hover:text-white transition-all hover:scale-105"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => handleDemoClick(project)}
                        className="p-2.5 rounded-xl border border-slate-700/60 dark:border-slate-800 bg-slate-800/40 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-all hover:scale-105 cursor-pointer"
                        title="Live Demo Preview"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal: Project Architecture Details */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="glass-card max-w-2xl w-full p-6 sm:p-8 border border-slate-700 bg-[#0d111e] dark:bg-[#0d111e] [html:not(.dark)_&]:bg-white max-h-[90vh] overflow-y-auto relative shadow-2xl rounded-2xl"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/60 border border-slate-700 focus:outline-none"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                    {selectedProject.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">• {selectedProject.timeline}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                  {selectedProject.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="space-y-4 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    Complete Feature & Architecture Specifications:
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/70 text-cyan-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>

                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      handleDemoClick(selectedProject);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo Status</span>
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Modal: Live Demo Status Notice */}
        <AnimatePresence>
          {demoNotice && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-card max-w-md w-full p-6 border border-slate-700 bg-[#0d111e] dark:bg-[#0d111e] [html:not(.dark)_&]:bg-white rounded-2xl shadow-2xl relative"
              >
                <button
                  onClick={() => setDemoNotice(null)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                  <Terminal className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {demoNotice.title} Demo
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  This project runs on a local full-stack environment with a Python/Django backend and MySQL/SQLite database. Code repositories, setup guides, and walkthroughs are available upon request.
                </p>

                <div className="flex gap-2">
                  <a
                    href={demoNotice.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-xl text-center text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700"
                  >
                    GitHub Repo
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setDemoNotice(null)}
                    className="flex-1 py-2 rounded-xl text-center text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500"
                  >
                    Contact Latif
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
