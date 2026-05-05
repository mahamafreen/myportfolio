
import { Project, Experience, Skill } from './types';

export const SOCIAL_LINKS = {
  github: 'https://github.com/mahamafreen', // Paste your GitHub link here
  linkedin: 'https://linkedin.com/in/maham-afreen', // Paste your LinkedIn link here
  instagram: 'https://www.instagram.com/maham.afreen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', // Paste your Instagram link here
  email: 'mahamafreen09@gmail.com' // Paste your professional email here
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Archman Consultants',
    description: 'An archtitectural consultancy website with project showcases using interactive data visualizations.',
    longDescription: 'Archman Consultants is a portfolio site for an architectural firm, featuring project showcases. Built with Next.js and Three.js, it offers a seamless user experience with smooth animations and responsive design.',
    image: '/images/archman.png', 
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://archman-consultants.vercel.app/',
  },
  {
    id: '2',
    title: 'AstroNeko',
    description: 'A platformer game featuring Neko the cat exploring space-themed levels.',
    longDescription: 'AstroNeko is a platformer game featuring Neko the cat exploring space-themed levels. Built with React and Three.js, it offers a seamless user experience with smooth animations and responsive design.',
    image: '/images/astro-neko.png',
    tags: ['React'],
    liveUrl: 'https://astro-neko.vercel.app',
  },
  {
    id: '3',
    title: 'Valenor',
    description: 'A minimalist, luxury e-commerce experience for high-end jewellery brands.',
    longDescription: 'Valenor is a headless commerce solution using TypeScript and Tailwind CSS. It features ultra-fast page transitions, and a custom checkout flow designed to reduce friction and reflect brand prestige.',
    image: '/images/valenor-commerce.png',
    tags: ['Next.js' , 'TypeScript', 'Tailwind'],
    liveUrl: 'https://ecommerce-store-drab-zeta.vercel.app/',
  },
  {
    id: '4',
    title: 'Cactus Coffee',
    description: 'A clean and modern experience for the cafe of the future.',
    longDescription: 'Cactus Coffee is a modern cafe experience designed with a focus on sustainability and customer satisfaction. Built with React and Tailwind CSS, it offers a seamless user experience with a clean, minimalist design.',
    image: '/images/cactus-coffee.png',
    tags: ['React', 'Tailwind CSS'],
    liveUrl: 'https://cactus-coffee-prototype.vercel.app/',
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
