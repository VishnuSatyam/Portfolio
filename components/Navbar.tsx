
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass px-6 py-3 rounded-full flex items-center gap-8 text-sm font-medium">
        <a href="#hero" className="hover:text-zinc-400 transition-colors">Home</a>
        <a href="#about" className="hover:text-zinc-400 transition-colors">About</a>
        <a href="#projects" className="hover:text-zinc-400 transition-colors">Projects</a>
        <a href="#skills" className="hover:text-zinc-400 transition-colors">Skills</a>
        <a href="#contact" className="hover:text-zinc-400 transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
