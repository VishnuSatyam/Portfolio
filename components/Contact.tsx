
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-12 mono">04. Connection</h2>
      
      <div className="space-y-12">
        <h3 className="text-4xl md:text-6xl font-bold text-gradient">Let's build something intentional.</h3>
        
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          I'm always looking for ambitious projects that push the boundaries of AI-assisted engineering.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SOCIAL_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass p-6 rounded-2xl flex flex-col items-center gap-3 hover:border-zinc-500 transition-all group"
            >
              <div className="text-zinc-400 group-hover:text-zinc-100 transition-colors">
                {link.icon}
              </div>
              <span className="text-xs mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-100">{link.name}</span>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 text-zinc-600 transition-all" />
            </a>
          ))}
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs mono">
          <p>© {new Date().getFullYear()} Vishnu Satyam Pandey</p>
          <p>Built with React + AI</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
