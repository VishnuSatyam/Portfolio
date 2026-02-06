
import React from 'react';
import { Project, SkillGroup } from './types';
import { Github, Linkedin, Mail, Code2, Cpu, Globe, Database, Terminal } from 'lucide-react';

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/VishnuSatyam', icon: <Github size={20} /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/vishnu-satyam-0013772a0/', icon: <Linkedin size={20} /> },
  { name: 'LeetCode', url: 'https://leetcode.com/u/VishnuSatyam/', icon: <Code2 size={20} /> },
  { name: 'Email', url: 'mailto:pandeyvishusatyam@gmail.com', icon: <Mail size={20} /> },
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Programming',
    items: ['C++', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
  },
  {
    category: 'Full-Stack',
    items: ['React', 'Node.js', 'Express', 'MongoDB', 'Vite']
  },
  {
    category: 'Backend & Systems',
    items: ['REST API Design', 'Auth (JWT)', 'DB Management', 'System Thinking']
  },
  {
    category: 'AI-First Development',
    items: ['Prompt Engineering', 'AI Workflows', 'Google AI Studio', 'Rapid Prototyping']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'life-replay',
    title: 'Life Replay',
    isFeatured: true,
    description: 'An AI-powered reflection engine that transforms fragmented memories into meaningful life narratives.',
    problem: 'Memories are often scattered across digital fragments, losing the emotional context and "through-line" of our lives.',
    solution: 'Built a reflection tool that uses AI to analyze user inputs (text/images) and synthesize them into structured narratives, identifying emotional trends and core life lessons.',
    whyAI: 'AI reasoning flow was essential for thematic analysis—mapping emotional high points and generating creative "replay" prompts that feel deeply personal rather than generic.',
    tags: ['Google AI Studio', 'React', 'Node.js', 'Prompt Engineering'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=450',
    links: {
      github: 'https://github.com/VishnuSatyam',
      live: 'https://life-replay-your-personal-ai-analyst-33364303664.us-west1.run.app/'
    }
  },
  {
    id: 'networking-platform',
    title: 'Professional Networking Platform',
    description: 'A comprehensive full-stack social networking system for professionals to connect, share, and collaborate.',
    longDescription: 'Engineered a scalable social environment featuring secure authentication, dynamic activity feeds, and real-time profile management. Focused on optimizing database queries for high-speed content delivery.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=450',
    links: {
      github: 'https://github.com/VishnuSatyam'
    }
  }
];
