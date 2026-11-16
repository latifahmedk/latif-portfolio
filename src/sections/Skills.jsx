import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Database, 
  BrainCircuit, 
  Wrench, 
  Filter,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TechIcon from '../components/TechIcon';
import { skillCategories } from '../data/portfolioData';

const categoryTabs = [
  { id: 'all', label: 'All Technologies', icon: Sparkles },
  { id: 'programming', label: 'Programming', icon: Code2 },
  { id: 'frameworks', label: 'Frameworks & Frontend', icon: Layers },
  { id: 'databases', label: 'Databases', icon: Database },
  { id: 'concepts', label: 'Core CS & AI', icon: BrainCircuit },
  { id: 'tools', label: 'Tools & DevOps', icon: Wrench },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Expertise"
          title={
            <span>
              Core Skills &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400">
                Technology Stack
              </span>
            </span>
          }
          subtitle="A comprehensive toolkit rooted in Python, modern web frameworks, relational/NoSQL databases, and disciplined software engineering."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20 scale-105'
                    : 'bg-slate-800/40 dark:bg-slate-900/60 [html:not(.dark)_&]:bg-slate-200/80 text-slate-400 dark:text-slate-300 [html:not(.dark)_&]:text-slate-700 hover:text-white border border-slate-700/50 dark:border-slate-800 [html:not(.dark)_&]:border-slate-300'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-cyan-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Display */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-10"
            >
              {filteredCategories.map((category) => (
                <div key={category.id} className="space-y-4">
                  {/* Category Title Header */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl bg-gradient-to-r ${category.accent} text-white shadow-sm`}>
                      <TechIcon name={category.iconName} className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <div className="flex-1 h-px bg-slate-700/40 dark:bg-slate-800 ml-2" />
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.skills.map((skill, sIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: sIdx * 0.05 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className={`glass-card p-4 sm:p-5 border border-slate-700/60 dark:border-slate-800 transition-all duration-300 ${category.borderGlow} group relative overflow-hidden`}
                      >
                        {/* Glow accent indicator */}
                        <div
                          className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                          style={{ backgroundColor: skill.color }}
                        />

                        <div className="flex items-start justify-between mb-3">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 shadow-inner"
                            style={{ backgroundColor: `${skill.color}15`, border: `1px solid ${skill.color}35` }}
                          >
                            <TechIcon
                              name={skill.icon}
                              className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                              style={{ color: skill.color }}
                            />
                          </div>

                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60">
                            {skill.level}
                          </span>
                        </div>

                        <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </h4>

                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {skill.tag}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Skills Summary Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-6 rounded-2xl glass-card border border-slate-700/60 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-violet-500 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Continuous Technical Advancement
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Constantly expanding knowledge in Angular, Node.js, and MongoDB while mastering Data Structures & Algorithms (DSA).
              </p>
            </div>
          </div>

          <a
            href="#experience"
            className="whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
          >
            See Work Experience →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
