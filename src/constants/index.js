// Portfolio Data Constants
// This file contains all the data constants used across different sections

export const personalInfo = {
  name: 'Hania Imtisal',
  title: 'Full-Stack Engineer',
  tagline: 'TypeScript · Next.js · React/Redux · PostgreSQL · AWS',
  location: 'Milton, ON',
  phone: '437-876-6539',
  email: 'hania.imtisal234@gmail.com',
  headline: "I build software that ships.",
  intro:
    "Full-stack engineer who takes products from database schema to production. Right now I'm building AI-driven hiring workflows at Potenco — before that, compliance platforms, ad-tech marketplaces, and warehouse systems real businesses run on.",
  photo: '/profile.jpg',
};

export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hania-imtisal',
    iconType: 'FaLinkedin',
    color: '#0077B5',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/hania-imtisal234',
    iconType: 'FaGithub',
    color: '#171515',
  },
  {
    name: 'Email',
    url: 'mailto:hania.imtisal234@gmail.com',
    iconType: 'FaEnvelope',
    color: '#EA4335',
  },
];

// Grouped technical skills, matching the resume's technical skills section
export const skillGroups = [
  {
    category: 'Frontend',
    items: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Redux', 'RTK Query', 'TailwindCSS', 'Three.js', 'Context API', 'Angular'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Nest.js', 'Express.js', 'Python', 'Django', 'FastAPI', 'GraphQL', 'JWT Auth', 'BullMQ', 'Spring Boot'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MSSQL', 'MongoDB', 'Query Optimization', 'Indexing'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['AWS (Lambda, S3)', 'Docker', 'Kubernetes', 'Jenkins', 'Git/GitHub', 'Redis'],
  },
  {
    category: 'Testing & Practice',
    items: ['Jest', 'Pytest', 'Mocha', 'Cypress', 'React Testing Library', 'Agile/Scrum', 'JIRA'],
  },
];

// Flat list kept for any components that expect a simple array of skill names
export const skills = skillGroups.flatMap((group) => group.items);

export const experience = [
  {
    company: 'Potenco',
    companyUrl: 'https://www.potenco.ca/',
    role: 'Full Stack Developer',
    location: 'Toronto',
    period: 'Jun 2026 - Present',
    bullets: [
      'Architected and deployed 8+ microservices using FastAPI, Next.js, PostgreSQL, and AWS, enabling scalable and independently deployable services.',
      'Engineered 20+ secure REST APIs with JWT authentication and role-based access control, supporting 4 user roles across the platform.',
      'Designed and launched 5+ AI agentic workflows to automate resume analysis and hiring decisions, reducing manual recruiter effort.',
      'Orchestrated 10+ asynchronous workflows with Redis and BullMQ for AI processing, document parsing, and notifications, improving platform responsiveness.',
      'Developed and optimized 6+ real-time dashboards to monitor AI pipelines, user activity, and system performance, enabling faster issue detection.',
      'Partnered with product stakeholders to deliver production-ready features through Agile sprints, accelerating feature delivery.',
      'Authored unit and integration tests with Pytest and Jest, strengthening code quality and reducing regressions through peer reviews.',
    ],
  },
  {
    company: 'Techverx',
    companyUrl: 'https://www.techverx.com/',
    role: 'Software Engineer',
    location: null,
    period: 'May 2024 - Apr 2025',
    bullets: [
      "Led a full-stack project using Node.js, Nest.js, Next.js, and TypeScript after the lead's departure, delivering 100% on time and reducing production bugs by 30%.",
      'Built 20+ reusable React and Angular components and SPAs, improving maintainability and development speed.',
      'Developed secure REST and GraphQL APIs with JWT authentication and Spring Boot/Spring Framework, supporting scalable backend processing.',
      'Optimized SQL queries and indexing, improving API and dashboard performance by 25-40%.',
      'Built React dashboards for system monitoring, reducing debugging time by 30% via real-time visibility.',
      'Built asynchronous workflows with BullMQ and CRON to support scalable background processing.',
      'Used Jira and Git within Agile Scrum/Kanban sprints, enabling the team to deliver releases 15% faster.',
      'Collaborated with clients in 5+ meetings and delivered 3+ demos, translating requirements into production features.',
    ],
  },
  {
    company: 'Syff.co',
    companyUrl: 'https://syffinc.com/',
    role: 'Full-Stack Developer',
    location: 'Remote',
    period: 'Jun 2023 - Apr 2024',
    bullets: [
      'Redesigned and developed the backend architecture and RESTful APIs for a modern Warehouse Management System, enabling real-time inventory tracking across multiple warehouses for B2B users.',
      'Migrated from a legacy PHP stack to Nest.js and PostgreSQL, ensuring zero data loss across transactional records using automated data migration scripts.',
      'Boosted data access speed by up to 60% through schema redesign, optimized indexing, and efficient query strategies.',
      'Delivered weekly feature increments across UK time zones via agile sprints, with zero missed deadlines over 10 months.',
    ],
  },
];

export const education = {
  school: 'National University of Computing and Emerging Sciences (FAST)',
  location: 'Lahore',
  degree: "Bachelor's, Computer Science",
  coursework: 'OOP, Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, AI, Machine Learning, Web Development',
};

// Featured, real-world shipped projects
export const featuredProjects = [
  {
    title: 'ALS RiskComply',
    url: 'https://riskcomply.online',
    category: 'Compliance / SaaS',
    description:
      'A microservices-based compliance platform for vendor management. Built scalable REST/GraphQL APIs, event-driven workflows with CRON and BullMQ, OCR-based document extraction for expiring compliance items, automated client/vendor email notifications, and configurable report generation.',
    tags: ['Node.js', 'REST/GraphQL', 'BullMQ', 'OCR', 'CRON', 'Jest'],
  },
  {
    title: 'Savvy Displays',
    url: 'https://savvydisplays.com',
    category: 'Ad-Tech Marketplace',
    description:
      'A cloud-based digital advertising marketplace enabling advertisers to create, schedule, and manage campaigns across a distributed network of screens, with campaign targeting, dynamic pricing, and real-time monitoring plus predictive analytics on impressions and sales performance.',
    tags: ['React', 'Node.js', 'Analytics', 'Cloud'],
  },
];

// Smaller/earlier projects, shown as a lightweight list
export const sideProjects = [
  { title: 'Our Blues', description: 'Mental health platform with therapist booking, payments, and an AI support chatbot.', github: 'https://github.com/hania-imtisal234/Our-Blues' },
  { title: 'NFT Marketplace', description: 'Decentralized marketplace to mint, buy, and sell digital assets.', github: 'https://github.com/hania-imtisal234/NFT-marketplace' },
  { title: 'Disease Predicting System', description: 'ML model predicting disease risk from symptoms and history.', github: 'https://github.com/hania-imtisal234/Disease-Predicting-System' },
  { title: 'Hospital Management System', description: 'Patient records, scheduling, and admin tooling for healthcare.', github: 'https://github.com/hania-imtisal234/HospitalManagementSystem' },
  { title: 'Confinity Banking Platform', description: 'Smart banking UI with secure transactions and account management.', github: 'https://github.com/hania-imtisal234/Confinity' },
  { title: 'OS Simulator', description: 'CPU scheduling, memory management, and page replacement simulator in C.', github: 'https://github.com/hania-imtisal234/Os_Stimulator' },
];

// Navigation items for the portfolio
export const navigationItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

// Floating code snippets used by the CodingElements background (darker shades so they read on white)
export const codeSnippets = {
  default: [
    { code: 'const engineer = {', color: 'text-blue-600' },
    { code: "  name: 'Hania Imtisal',", color: 'text-violet-600' },
    { code: "  stack: ['TS', 'Next.js', 'Node'],", color: 'text-amber-600' },
    { code: "  focus: 'full-stack'", color: 'text-emerald-600' },
    { code: '};', color: 'text-blue-600' },
  ],
};

// Matrix-rain keywords used by the CodingElements background
export const matrixKeywords = {
  default: ['const', 'async', 'await', 'function', 'return', 'import', 'export', 'API', '{}', '=>'],
};
