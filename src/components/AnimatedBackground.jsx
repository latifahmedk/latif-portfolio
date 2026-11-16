import React, { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 30 });

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth) * 100;
          const y = (e.clientY / window.innerHeight) * 100;
          setMousePosition({ x, y });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 transition-colors duration-500">
      {/* Background Color Base */}
      <div className="absolute inset-0 bg-[#050713] dark:bg-[#050713] [html:not(.dark)_&]:bg-slate-50 transition-colors duration-500" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-tech-grid-dark dark:bg-tech-grid-dark [html:not(.dark)_&]:bg-tech-grid-light opacity-60" />

      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-60 dark:opacity-40"
        style={{
          background: `radial-gradient(650px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.12), rgba(6, 182, 212, 0.08), transparent 70%)`,
        }}
      />

      {/* Floating Glowing Orb 1: Violet/Purple (Top-Left) */}
      <div className="absolute -top-32 -left-32 w-96 h-96 md:w-[32rem] md:h-[32rem] rounded-full bg-gradient-to-tr from-purple-600/25 to-indigo-500/20 blur-3xl animate-pulse-glow" />

      {/* Floating Glowing Orb 2: Cyan/Blue (Top-Right) */}
      <div className="absolute top-1/4 -right-28 w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full bg-gradient-to-bl from-cyan-500/20 to-blue-600/20 blur-3xl animate-float-slow" />

      {/* Floating Glowing Orb 3: Pink/Fuchsia (Mid-Left) */}
      <div className="absolute top-2/3 -left-20 w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full bg-gradient-to-r from-pink-500/15 to-purple-600/15 blur-3xl animate-float-medium" />

      {/* Floating Glowing Orb 4: Emerald/Teal (Bottom-Right) */}
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-gradient-to-t from-teal-500/15 to-emerald-600/10 blur-3xl animate-float-slow" />

      {/* Top subtle vignette gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 dark:to-[#050713]/80 [html:not(.dark)_&]:to-slate-200/40 pointer-events-none" />
    </div>
  );
}
