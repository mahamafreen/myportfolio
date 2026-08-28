
import { Project, Skill } from './types';

export const SOCIAL_LINKS = {
  github: 'https://github.com/mahamafreen', // Paste your GitHub link here
  linkedin: 'https://linkedin.com/in/maham-afreen', // Paste your LinkedIn link here
  instagram: 'https://www.instagram.com/maham.afreen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', // Paste your Instagram link here
  email: 'mahamafreen09@gmail.com' // Paste your professional email here
};

export const PROJECTS: Project[] = [
  {
  id: '1',
  title: 'ArchSphere',
  description: 'A digital ecosystem designed to explore new ways architects discover, organize, and interact with architectural work.',
  longDescription: 'ArchSphere is a product concept designed for the architecture industry, exploring how architects, projects, ideas, and professional workflows can exist within a unified digital ecosystem. The project focuses on creating a visually engaging and intuitive experience for discovering, organizing, and interacting with architectural work.',
  image: '/images/archsphere.png',
  tags: ['React', 'Next.js', 'Tailwind CSS', 'UI/UX'],
  liveUrl: 'https://archsphere-prototype.vercel.app/',
},
  {
  id: '2',
  title: 'ProdCheck AI',
  description: 'An AI-powered application designed to transform product information into clear and structured insights.',
  longDescription: 'ProdCheck AI is an AI-powered application designed to help users analyze product information and make more informed decisions. The platform transforms product details into structured insights through an intuitive, user-focused interface, combining AI capabilities with practical product design.',
  image: '/images/prodcheck.png',
  tags: ['Next.js', 'React', 'AI', 'Tailwind CSS'],
  liveUrl: 'https://prodcheck-sigma.vercel.app/',
},
 {
  id: '3',
  title: 'Archman Consultants',
  description: 'A modern and professional digital presence designed for an architecture consultancy.',
  longDescription: 'Archman Consultants is a modern corporate website designed and developed for an architecture consultancy. The project focuses on presenting the company’s services, expertise, and projects through a structured, professional, and responsive digital experience.',
  image: '/images/archman.png',
  tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  liveUrl: 'https://archman-consultants-main.vercel.app/',
},
{
  id: '4',
  title: 'Cactus Coffee',
  description: 'A modern e-commerce experience designed around intuitive product discovery and online shopping.',
  longDescription: 'Cactus Coffee is a self-initiated e-commerce concept created to explore a modern online shopping experience for a coffee brand. The project focuses on product discovery, intuitive navigation, responsive design, and creating a smooth journey from browsing to checkout.',
  image: '/images/cactus-coffee.png',
  tags: ['React', 'Next.js', 'Tailwind CSS', 'E-Commerce'],
  liveUrl: 'https://cactus-coffee-prototype.vercel.app/',
},
{
  id: '5',
  title: 'NexaNova',
  description: 'An AI-powered academic guidance platform designed to make student support more accessible and interactive.',
  longDescription: 'NexaNova is an AI-powered academic guidance platform designed to support students through an interactive conversational experience. The project explores how AI can make academic guidance, learning support, and information more accessible and engaging.',
  image: '/images/nexanova.png',
  tags: ['Next.js', 'React', 'AI', 'Tailwind CSS'],
  liveUrl: 'https://nexa-nova-tau.vercel.app/',
},
 
{
  id: '6',
  title: 'TaskIt',
  description: 'A focused task management application for organizing priorities, responsibilities, and daily work.',
  longDescription: 'TaskIt is a productivity-focused task management application designed to help users organize tasks, priorities, and daily responsibilities in one focused workspace. The project explores practical application workflows and interactive UI patterns for managing work more effectively.',
  image: '/images/taskit.png',
  tags: ['React', 'JavaScript', 'Tailwind CSS', 'UI/UX'],
  liveUrl: 'https://taskitblahblah20.vercel.app/',
},
];


export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Flutter', level: 90, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Firebase', level: 80, category: 'Backend' },
  { name: 'VS Code', level: 95, category: 'Tools' },
  { name: 'Git / GitHub', level: 95, category: 'Tools' },
  { name: 'Python', level: 85, category: 'Languages' },
  { name: 'C++', level: 70, category: 'Languages' },
  { name: 'Java', level: 75, category: 'Languages' }
];
