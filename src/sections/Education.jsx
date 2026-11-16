import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TechIcon from '../components/TechIcon';
import { educationData, certificationsData } from '../data/portfolioData';

const iconMap = {
  GraduationCap,
  Award,
  BookOpen,
};

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academics & Credentials"
          title={
            <span>
              Education &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400">
                Certifications
              </span>
            </span>
          }
          subtitle="A disciplined foundation in Computer Science, Artificial Intelligence, and industry-certified technical training."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Academic Education Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              <span>Academic Milestones</span>
            </h3>

            <div className="space-y-6 relative">
              {/* Timeline Connector Line */}
              <div className="absolute top-4 bottom-4 left-6 w-0.5 bg-gradient-to-b from-cyan-400 via-violet-500 to-pink-500 hidden sm:block" />

              {educationData.map((edu, idx) => {
                const EduIcon = iconMap[edu.icon] || GraduationCap;
                return (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative sm:pl-16 group"
                  >
                    {/* Node Dot (desktop) */}
                    <div className="hidden sm:flex absolute left-3 top-4 -translate-x-1/2 w-6 h-6 rounded-full bg-[#050713] dark:bg-[#050713] [html:not(.dark)_&]:bg-white border-2 border-cyan-400 items-center justify-center z-10 shadow-md shadow-cyan-500/30 group-hover:scale-125 transition-transform duration-300">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    </div>

                    {/* Card Content */}
                    <div className="glass-card p-6 border border-slate-700/60 dark:border-slate-800 hover:border-cyan-500/40 transition-all duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-violet-500/15 text-violet-400 border border-violet-500/30">
                          {edu.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                        {edu.degree}
                      </h4>

                      <div className="text-sm font-semibold text-cyan-500 dark:text-cyan-400 mt-0.5">
                        {edu.institution}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 my-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-rose-400" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono font-bold">
                          {edu.score}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {edu.details}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Professional Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-violet-400" />
              <span>Professional Certifications</span>
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-5 border border-slate-700/60 dark:border-slate-800 hover:border-violet-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                      style={{ backgroundColor: `${cert.color}15`, border: `1px solid ${cert.color}35` }}
                    >
                      <TechIcon name={cert.icon} className="w-6 h-6" style={{ color: cert.color }} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                          {cert.title}
                        </h4>
                      </div>

                      <div className="text-xs font-semibold text-violet-400 mt-0.5">
                        Issued by: {cert.issuer}
                      </div>

                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Continuous Learning Badge */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-600/15 via-cyan-500/15 to-pink-500/15 border border-cyan-500/30 text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Lifelong Engineering Growth</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Regularly refining programming fundamentals, data structures, and enterprise backend engineering patterns through practical challenges and continuous coursework.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
