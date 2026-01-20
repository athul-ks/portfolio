export interface Skill {
  name: string;
  category: string;
  tier: 'KERNEL' | 'USER_SPACE' | 'AUXILIARY';
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

const icons = {
  react: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S16.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818S17.423 21.818 12 21.818 2.182 17.423 2.182 12 6.577 2.182 12 2.182zM12 5.5c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5z" />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M18.665 21.978C16.865 23.253 14.565 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0c6.627 0 12 5.373 12 12 0 3.123-1.192 5.973-3.168 8.136l-11.162-14.7H8v12.44h2.15V7.93l9.538 12.55c.343.454.662.907.977 1.498zM20.25 12c0-.52-.032-1.034-.092-1.54L9.043 23.013c.928.32 1.914.487 2.957.487 6.075 0 11-4.925 11-11 0-1.637-.36-3.195-1-4.606V12h-1.75z" />
    </svg>
  ),
  ts: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM15.266 16.568c.563 1.343 1.906 2.162 3.86 2.162 1.681 0 2.583-.756 2.583-1.85 0-.966-.756-1.503-2.228-1.928-1.785-.504-2.834-1.196-2.834-2.959 0-2.182 1.741-3.652 4.13-3.652 1.847 0 3.065.714 3.736 1.993l-1.427.839c-.441-.818-1.217-1.28-2.266-1.28-1.343 0-2.056.671-2.056 1.658 0 .86.63 1.363 2.119 1.783 1.952.546 2.96 1.28 2.96 3.085 0 2.372-1.868 3.798-4.508 3.798-2.329 0-3.694-.966-4.324-2.308l1.457-.866.79.525zM6.084 9.17h2.896v10.66H11.5V22H3.564v-2.17h2.52V9.17z" />
    </svg>
  ),
  gcp: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 0C5.385 0 0 5.373 0 11.999c0 6.615 5.373 12.001 12 12.001 6.615 0 11.988-5.373 11.988-11.988h-9.283v4.44h4.785c-.426 2.253-2.673 4.225-5.313 4.225-4.27 0-7.722-3.483-7.722-7.756 0-4.269 3.465-7.741 7.722-7.741 2.583 0 4.14 1.259 5.228 2.296l3.354-3.354C20.627 2.054 16.657.001 12 0z" />
    </svg>
  ),
  node: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 0L1.604 6v12L12 24l10.396-6V6L12 0zm5.32 17.15l-4.58 2.65a1.114 1.114 0 01-1.11 0l-4.58-2.65a1.102 1.102 0 01-.56-.96V10.9a1.102 1.102 0 01.56-.96l4.58-2.65c.34-.2.77-.2 1.11 0l4.58 2.65c.34.2.56.54.56.96v5.29c0 .42-.22.76-.56.96z" />
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M18.8 14.6c-2.3-1.6-4.6-1.7-6-1.5.5-1.5 1.5-3.3 3.6-4.3-3.6-1.1-6.8.9-8.4 3.6C6.9 10 5.4 7.6 3 6c3.9-3 12.2-2.3 15.8 4 1.1 1.9 1.4 4.5.4 6.7.2 0 .4-.1.6-.2 1.4-.7 2.2-1.9 2.2-1.9s.1 3.2-3.2 5zM12.2 21.6c5.7-.3 10.3-4.1 10.3-4.1s-.4 2.8-5.3 5.4c-2.4 1.3-6.6 1.4-9.3.2-1.1-.5-1.9-1.2-1.9-1.2s1.4 1.3 6.2-.3z" />
    </svg>
  ),
  postgres: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S16.627 0 12 0zm.45 19.5c-4.14 0-7.5-3.36-7.5-7.5 0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5 0 4.14-3.36 7.5-7.5 7.5z" />
    </svg>
  ),
  devops: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-full h-full"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  flutter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.13-.31.2-.25.25-.18.06-.03.01-.01c.31-1.88 1.15-2.67 2.61-3.64l.15-.08.15-.07.16-.06.16-.04.18-.03.18-.01h.77l.7.05.62.14.54.21.47.28.4.34.34.38.28.41.23.44.18.44.13.44.09.41.05.38.02.34V4.5l.02.27.05.2.08.13.11.08.14.03h3.58l.18.01.18.04.16.07.15.11.12.13.09.15.06.16.02.16-.01.16-.03.15-.05.13-.08.11-.11.08-.13.06-.15.03h-3.6l-.16.01-.16.05-.14.08-.12.11-.09.14-.06.15-.02.17.02.16.05.14.09.11.12.08.15.06.16.02h3.61l.16-.02.16-.06.14-.09.12-.12.09-.14.06-.16.02-.16v-.28l-.02-.16-.05-.15-.08-.12-.12-.09-.15-.05-.16-.02H14.25z" />
    </svg>
  ),
};

export const skills: Skill[] = [
  {
    name: 'Next.js / React',
    category: 'FRONTEND_CORE',
    tier: 'KERNEL',
    version: 'v16 / Server Actions',
    icon: icons.nextjs,
  },
  {
    name: 'TypeScript',
    category: 'LANGUAGE_STRICT',
    tier: 'KERNEL',
    version: 'Zod / Turborepo',
    icon: icons.ts,
  },
  {
    name: 'GCP / Firebase',
    category: 'CLOUD_NATIVE',
    tier: 'KERNEL',
    version: 'Cloud Run / Terraform',
    icon: icons.gcp,
  },
  {
    name: 'Node.js / Express',
    category: 'BACKEND_OPS',
    tier: 'KERNEL',
    version: 'REST / Microservices',
    icon: icons.node,
  },
  {
    name: 'AWS Architecture',
    category: 'SEC_INFRA',
    tier: 'USER_SPACE',
    version: 'Certified Solutions Arch.',
    icon: icons.aws,
  },
  {
    name: 'PostgreSQL',
    category: 'DATA_LAYER',
    tier: 'USER_SPACE',
    version: 'Supabase / Prisma',
    icon: icons.postgres,
  },
  {
    name: 'DevOps / CI/CD',
    category: 'PIPELINES',
    tier: 'USER_SPACE',
    version: 'GitHub Actions / Sentry',
    icon: icons.devops,
  },
  {
    name: 'Flutter / Mobile',
    category: 'CROSS_PLATFORM',
    tier: 'USER_SPACE',
    version: 'Hybrid / WebView',
    icon: icons.flutter,
  },
  {
    name: 'Python / AI',
    category: 'INTELLIGENCE',
    tier: 'AUXILIARY',
    version: 'OpenAI / Scripting',
    icon: icons.python,
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
