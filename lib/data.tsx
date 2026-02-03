import { 
  SiNextdotjs, 
  SiTypescript, 
  SiSpring, 
  SiNodedotjs,
  SiGooglecloud, 
  SiPostgresql, 
  SiGithubactions,
  SiFlutter, 
  SiPython
} from "react-icons/si";

export interface Skill {
  name: string;
  category: string;
  tier: 1 | 2 | 3 | 4 | 5;
  version: string;
  icon: React.ReactNode;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  ref: string;
  status: 'LIVE' | 'SECURED' | 'ONLINE' | 'BETA' | 'MAINTENANCE';
  statusColor: 'green' | 'blue' | 'yellow';
  description: string;
  techStack: string[];
  imagePlaceholder: string;
  image?: string;
  stat: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  specialization: string;
  gpa: string;
}

export interface Certification {
  name: string;
  issuer: string;
  id: string;
  status: string;
  year: string;
}

export const skills: Skill[] = [
  {
    name: 'Next.js / React',
    category: 'FRONTEND_CORE',
    tier: 5,
    version: 'v16 / Server Actions',
    icon: <SiNextdotjs className="w-full h-full" />,
  },
  {
    name: 'TypeScript',
    category: 'LANGUAGE_STRICT',
    tier: 5,
    version: 'Zod / Turborepo',
    icon: <SiTypescript className="w-full h-full" />,
  },
  {
    name: 'Cloud Architecture',
    category: 'CLOUD_NATIVE',
    tier: 5,
    version: 'GCP / AWS / Firebase',
    icon: <SiGooglecloud className="w-full h-full" />,
  },
  {
    name: 'Node.js / Express',
    category: 'BACKEND_OPS',
    tier: 4,
    version: 'REST / Microservices',
    icon: <SiNodedotjs className="w-full h-full" />,
  },
  {
    name: 'Java / Spring Boot',
    category: 'BACKEND_OPS',
    tier: 3,
    version: 'Spring Cloud / JPA',
    icon: <SiSpring className="w-full h-full" />,
  },
  {
    name: 'PostgreSQL',
    category: 'DATA_LAYER',
    tier: 3,
    version: 'Supabase / Prisma',
    icon: <SiPostgresql className="w-full h-full" />,
  },
  {
    name: 'DevOps / CI/CD',
    category: 'PIPELINES',
    tier: 3,
    version: 'GitHub Actions / Sentry',
    icon: <SiGithubactions className="w-full h-full" />,
  },
  {
    name: 'Mobile / Cross-Platform',
    category: 'APP_ECOSYSTEM',
    tier: 3,
    version: 'Flutter / React Webview',
    icon: <SiFlutter className="w-full h-full" />,
  },
  {
    name: 'Python / AI',
    category: 'INTELLIGENCE',
    tier: 2,
    version: 'OpenAI / Scripting',
    icon: <SiPython className="w-full h-full" />,
  },
];

export const experiences: Experience[] = [
  {
    role: 'Full Stack Software Developer',
    company: 'Good With Ltd.',
    location: 'London, UK',
    period: '2023 - Present',
    description: 'Spearheading the flagship mobile/web app architecture.',
    achievements: [
      'Architected mobile & web solution using Next.js, Express.js, and Flutter.',
      'Migrated infrastructure to GCP using Terraform (IaC) for scalable deployment.',
      'Established secure coding practices, leading company to Cyber Essentials Plus certification.',
      'Built CI/CD pipelines via GitHub Actions, increasing release frequency.',
    ],
    tags: ['Next.js', 'GCP', 'Terraform', 'PostgreSQL', 'Flutter'],
  },
  {
    role: 'Software Engineer',
    company: 'FactSet Research Systems',
    location: 'Hyderabad, India',
    period: '2021 - 2022',
    description: 'High-performance API development for financial data.',
    achievements: [
      'Developed 32 new endpoints for 7 different REST APIs.',
      'Maintained 99.95% availability for critical client-impacting services.',
      'Monitored network security, identifying and responding to breaches.',
      'Optimized legacy Java/Spring Boot systems for lower latency.',
    ],
    tags: ['Java', 'Spring Boot', 'AWS', 'PostgreSQL', 'REST APIs'],
  },
  {
    role: 'Software Development Engineer',
    company: 'Good Methods Software Solutions',
    location: 'Thiruvananthapuram, India',
    period: '2020 - 2021',
    description: 'Frontend migration and core feature development.',
    achievements: [
      'Migrated massive legacy web application from AngularJS to Angular 2+.',
      "Developed core features for 'Carestack' healthcare management platform.",
      'Analyzed user needs to propose and implement efficient design solutions.',
    ],
    tags: ['Angular', '.NET Core', 'Docker', 'SQL'],
  },
];

export const projects: Project[] = [
  {
    id: 'proj_01',
    title: 'ITINAPP_AI',
    ref: 'REF-001',
    status: 'LIVE',
    statusColor: 'green',
    description:
      'AI-powered travel planner utilizing Next.js 16 & OpenAI. Reduces itinerary generation time by 90% via deterministic prompt engineering and Zod schema validation.',
    techStack: ['Next.js 16', 'OpenAI', 'tRPC', 'PostgreSQL'],
    githubUrl: 'https://github.com/athul-ks/ItinApp',
    demoUrl: 'https://itinapp.athulk.dev',
    imagePlaceholder: 'flight_takeoff',
    image: '/itinapp.png',
    stat: 'AI-OPT',
  },
  // {
  //     id: "proj_02",
  //     title: "GOOD_WITH_SEC",
  //     ref: "REF-002",
  //     status: "SECURED",
  //     statusColor: "blue",
  //     description: "Led security initiatives achieving Cyber Essentials Plus. Implemented resilient CI/CD pipelines via GitHub Actions and Terraform for GCP.",
  //     techStack: ["Terraform", "GCP", "CyberSec"],
  //     imagePlaceholder: "lock",
  //     stat: "SECURE"
  // },
  // {
  //     id: "proj_04",
  //     title: "QUANTUM_FINANCE",
  //     ref: "REF-004",
  //     status: "BETA",
  //     statusColor: "yellow",
  //     description: "High-frequency trading interface featuring WebGL data visualization for stock market patterns.",
  //     techStack: ["React", "Three.js", "GraphQL"],
  //     imagePlaceholder: "query_stats",
  //     stat: "45%"
  // },
];

export const education: EducationItem[] = [
  {
    degree: 'MSc Cyber Security',
    institution: "King's College London",
    year: '2023',
    specialization: 'Network Security & Cryptography',
    gpa: 'Distinction',
  },
  {
    degree: 'B.Tech Electronics & Communication',
    institution: 'Govt. Model Engineering College',
    year: '2020',
    specialization: 'Embedded Systems & Logic',
    gpa: '8.62/10.0',
  },
];

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    id: 'SE19FEQC5FQ11T96',
    status: 'ARCHIVED',
    year: '2022',
  },
  {
    name: 'Elastic Security Fundamentals: SIEM',
    issuer: 'Elastic',
    id: 'C79415',
    status: 'ACTIVE',
    year: '2022',
  },
  {
    name: 'Flutter and Dart',
    issuer: 'Academind',
    id: 'UC-327d248a',
    status: 'ACTIVE',
    year: '2022',
  },
  {
    name: 'Google IT Automation with Python',
    issuer: 'Google',
    id: 'V4ECDX5VRBWR',
    status: 'ACTIVE',
    year: '2020',
  },
];
