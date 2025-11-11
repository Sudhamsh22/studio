import { Github, Linkedin, Mail } from 'lucide-react';
import {
  PythonIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  JavaIcon,
  CIcon,
  CPlusPlusIcon,
  FastAPIIcon,
  ExpressJsIcon,
  NodeJsIcon,
  FlaskIcon,
  ReactJsIcon,
  NextJsIcon,
  ReduxIcon,
  TailwindCssIcon,
  PostgreSqlIcon,
  MySqlIcon,
  MongoDbIcon,
  RedisIcon,
  AzureIcon,
  AwsIcon,
  DockerIcon,
  LinuxIcon,
  GitIcon,
  GitHubActionsIcon,
  PostmanIcon,
} from '@/app/components/icons';

export const personalInfo = {
  name: 'Siva Sudhamsh Gandikota',
  tagline: 'Building Pragmatic AI-Powered Software',
  summary:
    'Applied-AI focused Software Engineer with strengths in backend, AI/ML, and full-stack development. I build pragmatic AI-driven features and data-based web apps using Python (FastAPI), JavaScript/TypeScript (Node.js/Next.js), and cloud (Azure/AWS). Experienced with Machine Learning, LLM-based features, authentication/authorization (JWT), RESTful APIs, microservices, CI/CD, and performance optimization.',
  contact: {
    email: 'sivasudhamsh2005@gmail.com',
  },
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/Sudhamsh22',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sivasudhamsh',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: 'mailto:sivasudhamsh2005@gmail.com',
      icon: Mail,
    },
  ],
};

export const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const skills = {
  languages: {
    title: 'Languages',
    items: [
      { name: 'Python', icon: PythonIcon },
      { name: 'JavaScript', icon: JavaScriptIcon },
      { name: 'TypeScript', icon: TypeScriptIcon },
      { name: 'Java', icon: JavaIcon },
      { name: 'C', icon: CIcon },
      { name: 'C++', icon: CPlusPlusIcon },
    ],
  },
  backend: {
    title: 'Backend/Frameworks',
    items: [
      { name: 'FastAPI', icon: FastAPIIcon },
      { name: 'Express.js', icon: ExpressJsIcon },
      { name: 'Node.js', icon: NodeJsIcon },
      { name: 'RESTful APIs' },
      { name: 'Microservices' },
      { name: 'JWT' },
      { name: 'Flask (basic)', icon: FlaskIcon },
    ],
  },
  ai_ml: {
    title: 'AI/ML',
    items: [
      { name: 'Machine Learning' },
      { name: 'LLMs' },
      { name: 'Data Pipelines' },
    ],
  },
  frontend: {
    title: 'Frontend',
    items: [
      { name: 'React.js', icon: ReactJsIcon },
      { name: 'Next.js', icon: NextJsIcon },
      { name: 'Redux', icon: ReduxIcon },
      { name: 'Tailwind CSS', icon: TailwindCssIcon },
    ],
  },
  databases: {
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: PostgreSqlIcon },
      { name: 'MySQL', icon: MySqlIcon },
      { name: 'MongoDB', icon: MongoDbIcon },
      { name: 'Redis', icon: RedisIcon },
    ],
  },
  cloud_devops: {
    title: 'Cloud & DevOps',
    items: [
      { name: 'Azure', icon: AzureIcon },
      { name: 'AWS', icon: AwsIcon },
      { name: 'Docker', icon: DockerIcon },
      { name: 'Linux', icon: LinuxIcon },
      { name: 'Git', icon: GitIcon },
      { name: 'GitHub Actions', icon: GitHubActionsIcon },
      { name: 'CI/CD' },
      { name: 'Postman', icon: PostmanIcon },
    ],
  },
  practices: {
    title: 'Practices',
    items: [
      { name: 'Agile/Scrum' },
      { name: 'Unit Testing' },
      { name: 'Code Reviews' },
      { name: 'DSA' },
    ],
  },
};

export const experience = [
  {
    role: 'Summer AI Intern',
    company: 'Vishwam AI (Swecha, Open-Source NGO)',
    period: 'Jun 2024 – Present',
    description: [
      'Trained and fine-tuned ML models on curated datasets, improving validation accuracy by ~8–12% through standardized preprocessing and evaluation.',
      'Implemented data pipelines, versioning, and experiment tracking for reproducibility and faster iteration in Agile/Scrum cycles.',
      'Contributed to AI feature development using LLM-based components, code reviews, and CI/CD pipelines for reliable deployments.',
    ],
  },
];

export const projects = [
  {
    title: 'Virtual Intern Pro',
    subtitle: 'Ed-Tech Internship Platform',
    description:
      'Built and deployed a production-ready platform using Next.js, Tailwind CSS, and Vercel; reduced page-load time by ~35% via performance improvements. Implemented secure auth and role-based dashboards to streamline user flows and reliability.',
    tags: ['Next.js', 'Tailwind CSS', 'Node.js', 'Vercel', 'JWT'],
    liveUrl: 'https://studio-tngx.vercel.app',
    codeUrl: 'https://github.com/Sudhamsh22/Virtualinternpro1.git',
    category: 'Freelance',
  },
  {
    title: 'Gov Connect',
    subtitle: 'Unified Government Services',
    description:
      'Developed a full-stack platform centralizing 50+ services across 25+ departments with a unified interface and JWT-based access control. Designed RESTful endpoints and integrated database operations for reliable, scalable workflows.',
    tags: ['React', 'Express.js', 'Node.js', 'MongoDB', 'JWT'],
    liveUrl: 'https://gov-connect-evkq.vercel.app',
    codeUrl: 'https://github.com/Sudhamsh22/Gov-Connect.git',
  },
  {
    title: 'Mana-Sambaralu',
    subtitle: 'Cultural Tourism',
    description:
      'Built a community platform featuring 30+ festivals; added secure submissions and moderation with a FastAPI backend. Enhanced UI/UX with Streamlit components to increase engagement and time-on-page.',
    tags: ['Python', 'FastAPI', 'Streamlit', 'HTML/CSS'],
    liveUrl: 'https://mana-sambharalu.streamlit.app',
    codeUrl: 'https://github.com/Sudhamsh22/mana-sambharalu.git',
  },
];

export const certifications = [
  {
    issuer: 'Oracle',
    name: 'AI Vector Search Certification',
  },
  {
    issuer: 'Microsoft',
    name: 'Azure Fundamentals (AZ-900)',
  },
  {
    issuer: 'IEEE',
    name: 'AI & Big Data Certification',
  },
  {
    issuer: 'HackerRank',
    name: 'Python, React, Problem Solving',
  },
];

export const leadership = [
  {
    role: 'Vice-President & PR',
    organization: 'Free Software Wing, GRIET',
    period: 'Aug 2024 – Present',
    description: [
      'Led a team to host a 24-hour hackathon with 200+ participants; secured sponsorships and coordinated cross-functional logistics.',
      'Conducted workshops for 200+ students on web development and AI fundamentals; mentored project teams.',
    ],
  },
];

export const achievements = [
  'Organized a national-level hackathon with 200+ participants and sponsors.',
  'Recognized for mentorship and student technical development at GRIET.',
];
