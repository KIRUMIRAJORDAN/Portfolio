import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0b1329]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-lg text-white tracking-wider">
          JORDAN<span className="text-blue-500"> KIRUMIRA</span>
        </a>
        
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}