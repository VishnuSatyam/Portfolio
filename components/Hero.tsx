
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      <div className="hero-mesh" />
      
      <div className="max-w-4xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        {/* Profile Image & Status Container */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-700 to-zinc-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-zinc-800 overflow-hidden bg-zinc-900 shadow-2xl">
              <img 
                src="https://i.ibb.co/R44BKWJY/profile.jpg" 
                alt="Vishnu Satyam Pandey" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== "https://ibb.co/R44BKWJY") {
                    target.src = "https://ibb.co/R44BKWJY";
                  } else {
                    target.src = "https://ui-avatars.com/api/?name=Vishnu+Satyam+Pandey&background=09090b&color=fafafa";
                  }
                }}
              />
            </div>
            {/* Active Status Dot */}
            <div className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 border border-zinc-800">
               <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
          </div>
          
          <div className="text-xs text-zinc-500 mono uppercase tracking-[0.2em]">
            B.Tech CS Student @ AKTU
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-gradient">
          I build real products using AI as my creative partner.
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          I’m Vishnu Satyam Pandey, a Computer Science student exploring AI/ML through hands-on projects and full-stack experimentation. I don’t just use AI—I learn by building with it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" className="px-8 py-3 rounded-full bg-zinc-100 text-zinc-950 font-semibold hover:bg-white transition-all transform hover:scale-105">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full border border-zinc-700 bg-transparent text-zinc-300 font-semibold hover:bg-zinc-900 transition-all">
            Contact Me
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 animate-bounce text-zinc-500 hover:text-zinc-300 transition-colors">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
