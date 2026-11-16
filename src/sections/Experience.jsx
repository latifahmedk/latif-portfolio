import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Code, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Work Experience"
          title={
            <span>
              Professional{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400">
                Experience
              </span>
            </span>
          }
          subtitle="Real-world engineering contributions in enterprise software systems, API development, and bug resolution."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent" />

          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-12 sm:pl-20 mb-12"
            >
              {/* Animated Timeline Node */}
              <div className="absolute left-1.5 sm:left-5.5 top-1.5 w-6 h-6 rounded-full bg-[#050713] dark:bg-[#050713] [html:not(.dark)_&]:bg-white border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>

              {/* Main Card */}
              <div className="glass-card p-6 sm:p-8 border border-slate-700/60 dark:border-slate-800 hover:border-cyan-500/40 hover:shadow-cyan-500/10 transition-all duration-300 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-700/40 dark:border-slate-800">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 mb-2">
                      <Sparkles className="w-3 h-3" />
                      <span>{exp.status}</span>
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-semibold text-violet-400">
                      {exp.company}
                    </h4>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 dark:text-slate-400 space-y-1">
                    <div className="inline-flex items-center gap-1.5 bg-slate-800/40 dark:bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/50">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Core Contributions */}
                <div className="space-y-3 mb-6">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Key Contributions & Responsibilities:
                  </h5>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-4 border-t border-slate-700/40 dark:border-slate-800">
                  <span className="text-xs font-mono text-slate-400 block mb-2.5">
                    Technologies Used:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/60 dark:bg-slate-800/90 text-cyan-300 border border-slate-700/80 hover:border-cyan-400/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
