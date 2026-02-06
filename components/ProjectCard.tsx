
import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink, Cpu } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  if (project.isFeatured) {
    return (
      <div className="group relative glass rounded-3xl overflow-hidden border border-zinc-800 transition-all hover:border-zinc-700">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 opacity-60 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent"></div>
          </div>
          
          <div className="p-8 lg:p-12 space-y-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-zinc-400 mono text-xs uppercase tracking-tighter">
              <Cpu size={14} className="text-zinc-100" />
              Main Highlight
            </div>
            
            <h3 className="text-3xl font-bold text-zinc-100">{project.title}</h3>
            
            <p className="text-zinc-400 text-lg leading-relaxed italic border-l-2 border-zinc-800 pl-4">
              "{project.description}"
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-zinc-300 mb-1">The Problem</h4>
                <p className="text-sm text-zinc-500">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-300 mb-1">Why AI?</h4>
                <p className="text-sm text-zinc-500">{project.whyAI}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] mono text-zinc-400 uppercase">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {project.links?.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
                  <Github size={18} /> Source Code
                </a>
              )}
              {project.links?.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col group">
      <div className="aspect-video mb-6 overflow-hidden rounded-xl border border-zinc-800/50">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
      </div>
      <h3 className="text-xl font-bold text-zinc-100 mb-2">{project.title}</h3>
      <p className="text-zinc-500 text-sm mb-6 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span key={tag} className="px-2 py-1 rounded-md bg-zinc-900/50 text-[10px] mono text-zinc-500 border border-zinc-800/50">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.links?.github && (
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            <Github size={18} />
          </a>
        )}
        {project.links?.live && (
          <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
