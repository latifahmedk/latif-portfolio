import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Code2, 
  Database, 
  BrainCircuit, 
  GraduationCap, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  Rocket
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo, stats } from '../data/portfolioData';

const corePillars = [
  {
    icon: Server,
    title: "Backend & API Engineering",
    description: "Hands-on experience architecting scalable RESTful APIs with Python, Django, and Django REST Framework. Strong emphasis on CRUD operations, clean endpoints, and JWT authentication.",
    accent: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    iconColor: "text-cyan-400",
  },
  {
    icon: Code2,
    title: "Modern Frontend Systems",
    description: "Crafting intuitive, responsive user experiences with React.js and modern ES6+ JavaScript. Expanding hands-on mastery with Angular for enterprise component architectures.",
    accent: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/30",
    iconColor: "text-violet-400",
  },
  {
    icon: Database,
    title: "Databases & Data Modeling",
    description: "Proficient across relational and NoSQL ecosystems: MySQL, MongoDB, Oracle DB, and SQLite. Experienced in Django ORM schema design and query optimization.",
    accent: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    icon: BrainCircuit,
    title: "DSA & Problem Solving",
    description: "Actively strengthening Data Structures, Algorithms, and logical reasoning. B.Tech specialization in Artificial Intelligence with a commitment to continuous growth.",
    accent: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/30",
    iconColor: "text-pink-400",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="About Latif Ahmed"
          title={
            <span>
              Passionate About Engineering{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400">
                Reliable Software
              </span>
            </span>
          }
          subtitle="A dedicated software developer with solid fundamentals in Python, Django, and React, eager to build high-performance products and solve real-world problems."
        />

        {/* Top Story & Academic Foundation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Main Story Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-violet-500/20 border border-violet-500/30 text-violet-400">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Engineering Journey & Focus
              </h3>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a <strong>Software Developer Intern</strong> at <span className="text-cyan-400 font-semibold">Shujabits Infotech Solution</span>, contributing to a production-scale <strong>Warehouse Management System (WMS)</strong>. My work focuses on building robust backend APIs with Python, Django, and Django REST Framework, alongside responsive React user interfaces.
              </p>
              <p>
                My passion lies in backend development, systems design, and building efficient, scalable software solutions. I am driven by the discipline of writing maintainable, clean code, identifying and resolving intricate software bugs, and continually expanding my knowledge into modern tools like Angular, Node.js, and MongoDB.
              </p>
              <p>
                I hold a <strong>B.Tech in Computer Science (Artificial Intelligence)</strong> from Galgotias College of Engineering and Technology (CGPA 7.32) and a <strong>Diploma in Engineering</strong> from Jamia Millia Islamia (77.76%). This strong academic foundation fuels my analytical mindset and structured problem-solving approach.
              </p>
            </div>

            {/* Core Values / Tags */}
            <div className="mt-6 pt-6 border-t border-slate-700/50 dark:border-slate-800 flex flex-wrap gap-2">
              {[
                "Clean Architecture",
                "Scalable APIs",
                "Warehouse Systems",
                "Data Structures (DSA)",
                "Full Stack Web",
                "Continuous Learning"
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/50 dark:bg-slate-800/80 [html:not(.dark)_&]:bg-slate-200 text-slate-300 dark:text-slate-300 [html:not(.dark)_&]:text-slate-700 border border-slate-700/50 dark:border-slate-700 [html:not(.dark)_&]:border-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Key Facts & Resume Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between gap-4"
          >
            {/* Quick Profile Card */}
            <div className="glass-card p-6 flex-1 flex flex-col justify-center">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Verified Credentials</span>
              </h4>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start justify-between pb-3 border-b border-slate-700/40 dark:border-slate-800">
                  <span className="text-slate-400">Current Role</span>
                  <span className="font-semibold text-slate-200 text-right">Software Developer Intern</span>
                </div>
                <div className="flex items-start justify-between pb-3 border-b border-slate-700/40 dark:border-slate-800">
                  <span className="text-slate-400">Company</span>
                  <span className="font-semibold text-cyan-400 text-right">Shujabits Infotech Solution</span>
                </div>
                <div className="flex items-start justify-between pb-3 border-b border-slate-700/40 dark:border-slate-800">
                  <span className="text-slate-400">Primary Degree</span>
                  <span className="font-semibold text-slate-200 text-right">B.Tech CSE (AI) — Galgotias</span>
                </div>
                <div className="flex items-start justify-between pb-3 border-b border-slate-700/40 dark:border-slate-800">
                  <span className="text-slate-400">Diploma</span>
                  <span className="font-semibold text-slate-200 text-right">Jamia Millia Islamia</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-slate-400">Location</span>
                  <span className="font-semibold text-slate-200 text-right">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Certifications Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-600/20 via-indigo-600/20 to-cyan-500/20 border border-violet-500/30 text-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>4 Industry Certifications</span>
              </div>
              <p className="text-xs text-slate-400">
                Certified in Python Full Stack (Qspiders), DBMS (Infosys), Web Development (Udemy), and Professional Communication (SoftPro).
              </p>
            </div>
          </motion.div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {corePillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-card p-6 border border-slate-700/60 dark:border-slate-800 hover:border-cyan-500/50 hover:shadow-cyan-500/15 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.accent} border ${pillar.border} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className={`w-6 h-6 ${pillar.iconColor}`} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Resume-backed Metrics / Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card p-4 sm:p-5 text-center border border-slate-700/50 dark:border-slate-800/80 hover:border-violet-500/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-900 dark:text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
