import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Linkedin, 
  Github, 
  Sparkles, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null);

  const handleCopy = (type, value) => {
    navigator.clipboard.writeText(value);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out your Name, Email, and Message.');
      return;
    }

    // Compose mailto link with encoded message for reliable direct sending
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Latif,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    // Show friendly success confirmation and trigger mail client
    setSubmittedStatus('success');
    window.open(mailtoUrl, '_self');

    // Reset form after a brief period
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmittedStatus(null);
    }, 6000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Let's Connect"
          title={
            <span>
              Get In Touch &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400">
                Let's Build Together
              </span>
            </span>
          }
          subtitle="Actively open for Software Developer, Python Full Stack, and Backend engineering opportunities. Feel free to reach out directly!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 border border-slate-700/60 dark:border-slate-800 space-y-6">
              
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Direct Contact Channels
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Quickest response via email or LinkedIn
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-800/40 dark:bg-slate-800/80 [html:not(.dark)_&]:bg-slate-100 border border-slate-700/60 dark:border-slate-700 [html:not(.dark)_&]:border-slate-300 flex items-center justify-between group hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('email', personalInfo.email)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-800/40 dark:bg-slate-800/80 [html:not(.dark)_&]:bg-slate-100 border border-slate-700/60 dark:border-slate-700 [html:not(.dark)_&]:border-slate-300 flex items-center justify-between group hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Phone</span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('phone', personalInfo.phone)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-800/40 dark:bg-slate-800/80 [html:not(.dark)_&]:bg-slate-100 border border-slate-700/60 dark:border-slate-700 [html:not(.dark)_&]:border-slate-300 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">Location</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Professional Profiles */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                  Online Profiles:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-slate-700/60 dark:border-slate-800 bg-slate-800/30 flex flex-col items-center justify-center gap-1.5 text-slate-300 hover:text-white hover:border-[#0A66C2] hover:bg-[#0A66C2]/15 transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-medium">LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-slate-700/60 dark:border-slate-800 bg-slate-800/30 flex flex-col items-center justify-center gap-1.5 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-white/10 transition-all group"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-medium">GitHub</span>
                  </a>

                  <a
                    href={personalInfo.socialLinks.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-slate-700/60 dark:border-slate-800 bg-slate-800/30 flex flex-col items-center justify-center gap-1.5 text-slate-300 hover:text-white hover:border-[#FFA116] hover:bg-[#FFA116]/15 transition-all group"
                  >
                    <SiLeetcode className="w-5 h-5 text-[#FFA116] group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-medium">LeetCode</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Recruiter Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 border border-slate-700/60 dark:border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/40 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-violet-500/20 text-violet-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Send a Message
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Dispatches straight to Latif's inbox ({personalInfo.email})
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Prompt Response Guaranteed</span>
                </div>
              </div>

              {/* Form Status Notification */}
              <AnimatePresence>
                {submittedStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm mb-6 flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <strong>Your mail client has been opened!</strong> If your client did not launch automatically, feel free to copy Latif's email directly: <code className="text-white bg-slate-900 px-1.5 py-0.5 rounded">{personalInfo.email}</code>.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe / Tech Recruiter"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-700/80 dark:border-slate-700 bg-slate-900/50 dark:bg-slate-900/70 [html:not(.dark)_&]:bg-white text-slate-900 dark:text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-700/80 dark:border-slate-700 bg-slate-900/50 dark:bg-slate-900/70 [html:not(.dark)_&]:bg-white text-slate-900 dark:text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Developer Opportunity @ [Company]"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700/80 dark:border-slate-700 bg-slate-900/50 dark:bg-slate-900/70 [html:not(.dark)_&]:bg-white text-slate-900 dark:text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your note, job description, or message for Latif..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700/80 dark:border-slate-700 bg-slate-900/50 dark:bg-slate-900/70 [html:not(.dark)_&]:bg-white text-slate-900 dark:text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-slate-500">
                    💡 Directly prepares an email to <strong>{personalInfo.email}</strong>.
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-lg shadow-violet-600/30 hover:shadow-cyan-500/30 transition-all duration-200 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Latif</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
