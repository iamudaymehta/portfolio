interface NavLink {
  name: string;
  path: string;
}

interface Hero {
  title: string;
  subtitles: string[];
  description: string;
}

interface SkillCategory {
  title: string;
  skills: string[];
}

interface Skills {
  title: string;
  categories: SkillCategory[];
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
}

interface Job {
  company: string;
  location: string;
  position: string;
  type: string;
  duration: string;
  project: Project;
  responsibilities: string[];
}

interface Experience {
  title: string;
  jobs: Job[];
}

interface School {
  name: string;
  location: string;
  degree: string;
  duration: string;
  score: string;
  courses: string[];
}

interface Education {
  title: string;
  schools: School[];
}

interface Achievements {
  title: string;
  list: string[];
}

export interface PortfolioData {
  name: string;
  email: string;
  navLinks: NavLink[];
  hero: Hero;
  skills: Skills;
  experience: Experience;
  education: Education;
  achievements: Achievements;
}