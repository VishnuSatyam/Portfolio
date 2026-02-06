
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-8 mono">01. Identity</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              I am a Computer Science student who believes that the gap between idea and execution has never been smaller. My philosophy is simple: <span className="text-zinc-100 font-medium">Build fast, think deeply.</span>
            </p>
            <p>
              While others see AI as a replacement, I see it as a high-fidelity co-pilot. I leverage LLMs and tools like Google AI Studio to accelerate my reasoning, automate boilerplate, and focus on what truly matters—architecture, UX, and solving core problems.
            </p>
            <p>
              My foundation is built on rigorous CS principles, but my growth is driven by <span className="italic">learning by building</span>. From optimized REST APIs to AI-driven narrative engines, I aim to create systems that feel intentional and human-centric.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative glass p-8 rounded-2xl space-y-6 border border-zinc-800">
              <h3 className="text-xl font-semibold text-zinc-100">Quick Stats</h3>
              <ul className="space-y-4 mono text-sm text-zinc-400">
                <li className="flex justify-between border-b border-zinc-800 pb-2">
                  <span>Major</span>
                  <span className="text-zinc-200">B.Tech CSE</span>
                </li>
                <li className="flex justify-between border-b border-zinc-800 pb-2">
                  <span>University</span>
                  <span className="text-zinc-200">AKTU, Lucknow</span>
                </li>
                <li className="flex justify-between border-b border-zinc-800 pb-2">
                  <span>Strengths</span>
                  <span className="text-zinc-200 text-right">Rapid Prototyping,<br/>Clean Arch</span>
                </li>
                <li className="flex justify-between">
                  <span>Availability</span>
                  <span className="text-emerald-500">Open for Collaborations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
