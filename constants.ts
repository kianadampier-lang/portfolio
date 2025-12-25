import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { NavItem, SocialLink, Skill, Project, Experience } from './types';

// --- Navigation ---
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// --- Social Links ---
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com', icon: Github },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { platform: 'Twitter', url: 'https://twitter.com', icon: Twitter },
  { platform: 'Email', url: 'mailto:hello@example.com', icon: Mail },
];

// --- Hero Section ---
export const HERO_CONTENT = {
  name: "Alex Developer",
  role: "Full Stack Engineer",
  tagline: "Building accessible, pixel-perfect, and performant web experiences.",
  ctaPrimary: "View Work",
  ctaSecondary: "Contact Me"
};

// --- About Section ---
export const ABOUT_CONTENT = {
  bio: "I'm a passionate developer with over 5 years of experience in building modern web applications. I specialize in the React ecosystem and have a keen eye for UI/UX design. When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new coffee brewing methods.",
};

export const SKILLS: Skill[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'Figma', category: 'Design' },
  { name: 'Git', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
];

// --- Projects Section ---
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for managing products, orders, and analytics. Features dark mode, data visualization, and real-time updates.',
    tags: ['React', 'TypeScript', 'Recharts', 'Tailwind'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
  },
  {
    id: '2',
    title: 'Task Master App',
    description: 'A collaborative task management tool with drag-and-drop functionality, team workspaces, and deadline notifications.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Framer Motion'],
    imageUrl: 'https://picsum.photos/600/400?random=2',
    githubUrl: 'https://github.com',
  },
  {
    id: '3',
    title: 'AI Image Generator',
    description: 'An interface for generating images using AI models. Integrates with third-party APIs and includes a gallery of community generations.',
    tags: ['React', 'OpenAI API', 'Stripe', 'Node.js'],
    imageUrl: 'https://picsum.photos/600/400?random=3',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
  },
];

// --- Footer ---
export const FOOTER_TEXT = `© ${new Date().getFullYear()} Alex Developer. All rights reserved.`;