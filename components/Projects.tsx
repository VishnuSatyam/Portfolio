
import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const featured = PROJECTS.filter(p => p.isFeatured);
  const others = PROJECTS.filter(p => !p.isFeatured);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mono">02. Proof of Concept</h2>
        <p className="text-zinc-500 max-w-sm mt-4 md:mt-0 italic">Selected case studies demonstrating my ability to move from prompt to product.</p>
      </div>

      <div className="space-y-24">
        <div className="space-y-12">
          {featured.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {others.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
