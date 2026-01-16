export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities?: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
