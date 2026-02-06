
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-950/50 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-16 mono text-center">03. Capabilities</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((group) => (
            <div key={group.category} className="space-y-6">
              <h3 className="text-xs font-bold text-zinc-100 uppercase tracking-tighter mono border-b border-zinc-800 pb-2">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <div key={skill} className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-sm text-zinc-400">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 glass rounded-2xl border-emerald-900/20 bg-emerald-950/5 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-emerald-100">Learning & Growth</h4>
            <p className="text-emerald-400/70 text-sm italic">Consistently experimenting with agentic workflows and multi-modal AI systems.</p>
          </div>
          <div className="text-emerald-500 font-mono text-xs font-bold uppercase px-4 py-2 border border-emerald-900/30 rounded-full">
            Status: Continuous Evolution
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
