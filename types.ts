
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  problem?: string;
  solution?: string;
  whyAI?: string;
  tags: string[];
  links?: {
    github?: string;
    live?: string;
  };
  image: string;
  isFeatured?: boolean;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
