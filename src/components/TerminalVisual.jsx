import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, FileCode, Braces, Copy, Check, Sparkles } from 'lucide-react';
import TechIcon from './TechIcon';

const pythonCode = `# Latif Ahmed — Software Developer
from dataclasses import dataclass
from typing import List

@dataclass
class SoftwareDeveloper:
    name: str = "Latif Ahmed"
    role: str = "Software Developer"
    primary_stack: List[str] = ("Python", "Django", "DRF", "React")
    current_experience: str = "Shujabits Infotech Solution"
    focus: str = "Scalable APIs, CRUD, Warehouse Mgmt"
    learning: List[str] = ("Angular", "Node.js", "MongoDB", "DSA")

    def build_solution(self, requirement: str):
        return {
            "status": "Production Ready",
            "quality": "Clean, modular & tested",
            "impact": f"Engineered scalable solution for {requirement}"
        }

developer = SoftwareDeveloper()
print(developer.build_solution("Enterprise Systems"))`;

const jsonCode = `{
  "developer": "Latif Ahmed",
  "education": {
    "btech": "Galgotias College (CGPA: 7.32)",
    "diploma": "Jamia Millia Islamia (77.76%)"
  },
  "core_competencies": [
    "Python & Django REST Framework",
    "Full-Stack Web Development",
    "Relational & NoSQL Databases",
    "Object-Oriented Programming (OOP)",
    "API Security with JWT"
  ],
  "current_role": "Software Developer Intern",
  "status": "Available for high-impact roles"
}`;

const bashCode = `$ latif-cli --version
Latif Ahmed DevTools v2.4.0 (Python 3.12, Node 22)

$ agy run test-suite
[INFO] Loading Django REST Framework endpoints... [OK]
[INFO] Verifying MySQL & MongoDB connections... [OK]
[INFO] Building responsive React UI modules... [OK]
[SUCCESS] All 42 tests passed. 0 vulnerabilities found!

$ agy status
Ready to collaborate and build exceptional software.`;

export default function TerminalVisual() {
  const [activeTab, setActiveTab] = useState('python');
  const [copied, setCopied] = useState(false);

  const getCode = () => {
    switch (activeTab) {
      case 'python': return pythonCode;
      case 'json': return jsonCode;
      case 'bash': return bashCode;
      default: return pythonCode;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Surrounding Glowing Rings / 3D Accents */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 via-cyan-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 -z-10 animate-pulse-glow" />

      {/* Floating Badge 1: Python/Django */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0b0f19]/90 backdrop-blur-md border border-cyan-500/30 text-cyan-400 text-xs font-semibold shadow-lg shadow-cyan-500/20"
      >
        <TechIcon name="SiPython" className="w-4 h-4 text-[#3776AB]" />
        <span>Django & DRF</span>
      </motion.div>

      {/* Floating Badge 2: React */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-5 -left-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0b0f19]/90 backdrop-blur-md border border-violet-500/30 text-violet-400 text-xs font-semibold shadow-lg shadow-violet-500/20"
      >
        <TechIcon name="SiReact" className="w-4 h-4 text-[#61DAFB]" />
        <span>React Frontend</span>
      </motion.div>

      {/* Floating Badge 3: Shujabits WMS */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-6 -right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0b0f19]/90 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-lg shadow-emerald-500/20"
      >
        <Sparkles className="w-4 h-4 text-emerald-400" />
        <span>Active Intern @ Shujabits</span>
      </motion.div>

      {/* Main Terminal Box */}
      <div className="rounded-2xl border border-slate-700/60 dark:border-slate-800 bg-[#0d111e]/95 [html:not(.dark)_&]:bg-slate-900 shadow-2xl overflow-hidden text-slate-100">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#13192b] border-b border-slate-700/60 select-none">
          {/* MacOS Window Dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
          </div>

          {/* Interactive File Tabs */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('python')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
                activeTab === 'python'
                  ? 'bg-violet-600/30 text-cyan-300 border border-violet-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>developer.py</span>
            </button>
            <button
              onClick={() => setActiveTab('json')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
                activeTab === 'json'
                  ? 'bg-violet-600/30 text-cyan-300 border border-violet-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Braces className="w-3.5 h-3.5" />
              <span>skills.json</span>
            </button>
            <button
              onClick={() => setActiveTab('bash')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
                activeTab === 'bash'
                  ? 'bg-violet-600/30 text-cyan-300 border border-violet-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>bash</span>
            </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="p-1 rounded-md text-slate-400 hover:text-white transition-colors"
            title="Copy snippet"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Code View Area */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed max-h-[360px] scrollbar-thin">
          <pre className="text-slate-300">
            <code>
              {getCode().split('\n').map((line, idx) => (
                <div key={idx} className="table-row">
                  <span className="table-cell pr-4 select-none text-slate-600 text-right w-6 text-xs">
                    {idx + 1}
                  </span>
                  <span className="table-cell">
                    {/* Basic syntax coloring */}
                    {line.startsWith('#') || line.startsWith('//') ? (
                      <span className="text-slate-500 italic">{line}</span>
                    ) : line.includes('def ') || line.includes('class ') ? (
                      <span className="text-pink-400 font-semibold">{line}</span>
                    ) : line.includes('import ') || line.includes('from ') ? (
                      <span className="text-violet-400">{line}</span>
                    ) : line.includes('return') ? (
                      <span className="text-amber-400">{line}</span>
                    ) : line.startsWith('$') ? (
                      <span className="text-cyan-400 font-bold">{line}</span>
                    ) : line.includes('[SUCCESS]') ? (
                      <span className="text-emerald-400 font-semibold">{line}</span>
                    ) : line.includes('[INFO]') ? (
                      <span className="text-blue-400">{line}</span>
                    ) : (
                      line
                    )}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>

        {/* Terminal Footer Status Bar */}
        <div className="px-4 py-2 bg-[#090d18] border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="text-emerald-400 font-semibold">Active Developer</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Python 3.12</span>
          </div>
          <div className="text-slate-500">UTF-8</div>
        </div>
      </div>
    </div>
  );
}
