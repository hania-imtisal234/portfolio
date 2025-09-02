// Portfolio Data Constants
// This file contains all the data constants used across different sections

export const skills = [
  // Programming Languages
  { name: 'JavaScript', iconType: 'SiJavascript', color: '#F7DF1E' },
  { name: 'TypeScript', iconType: 'SiTypescript', color: '#3178C6' },
  { name: 'Python', iconType: 'SiPython', color: '#3776AB' },
  { name: 'C++', iconType: 'SiCplusplus', color: '#00599C' },
  
  // Web Development - MERN Stack
  { name: 'React.js', iconType: 'SiReact', color: '#61DAFB' },
  { name: 'Node.js', iconType: 'SiNodedotjs', color: '#339933' },
  { name: 'Express.js', iconType: 'SiExpress', color: '#000000' },
  { name: 'Nest.js', iconType: 'SiNestjs', color: '#E0234E' },
  
  // Databases
  { name: 'MongoDB', iconType: 'SiMongodb', color: '#47A248' },
  { name: 'MySQL', iconType: 'SiMysql', color: '#4479A1' },
  { name: 'PostgreSQL', iconType: 'SiPostgresql', color: '#336791' },
  
  // Tools & Technologies
  { name: 'RESTful APIs', iconType: 'FaCode', color: '#FF6B6B' },
  { name: 'Docker', iconType: 'SiDocker', color: '#2496ED' },
  { name: 'Git/GitHub', iconType: 'SiGit', color: '#F05032' },
  { name: 'Redux', iconType: 'SiRedux', color: '#764ABC' },
  
  // Methodologies & Architecture
  { name: 'Agile/Scrum', iconType: 'SiJira', color: '#0052CC' },
  { name: 'Microservices', iconType: 'SiKubernetes', color: '#326CE5' },
  { name: 'AI/Prompt Engineering', iconType: 'FaRobot', color: '#FF6B35' },
];

export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hania-imtisal-9b4b35274/',
    iconType: 'FaLinkedin',
    color: '#0077B5'
  },
  {
    name: 'Email',
    url: 'mailto:hania.imtisal234@gmail.com',
    iconType: 'FaEnvelope',
    color: '#EA4335'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/hania-imtisal234',
    iconType: 'FaGithub',
    color: '#171515'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/hania_imtisal/',
    iconType: 'FaInstagram',
    color: '#E4405F'
  }
];

export const projects = [
  {
    title: 'Our Blues',
    category: 'Mental Health',
    description: 'A comprehensive mental health platform for students featuring therapist booking system, secure payment integration, and AI-powered chatbot providing soothing, supportive responses for mental wellness.',
    image: '/placeholder-project-1.jpg',
    tags: ['React', 'Node.js', 'AI Chatbot', 'Payment Gateway', 'Mental Health'],
    featured: true,
    github: 'https://github.com/hania-imtisal234/Our-Blues',
    liveDemo: null
  },
  {
    title: 'NFT Marketplace',
    category: 'Blockchain',
    description: 'A decentralized NFT marketplace built with modern web technologies, enabling users to mint, buy, and sell digital assets securely.',
    image: '/placeholder-project-1.jpg',
    tags: ['JavaScript', 'Blockchain', 'Web3', 'React'],
    featured: true,
    github: 'https://github.com/hania-imtisal234/NFT-marketplace',
    liveDemo: null
  },
  {
    title: 'Disease Predicting System',
    category: 'Machine Learning',
    description: 'ML model that predicts diseases based on symptoms, family history, and medications using advanced data analysis techniques.',
    image: '/placeholder-project-2.jpg',
    tags: ['Python', 'Machine Learning', 'Data Science', 'AI'],
    featured: true,
    github: 'https://github.com/hania-imtisal234/Disease-Predicting-System',
    liveDemo: null
  },
  {
    title: 'Hospital Management System',
    category: 'Full-Stack',
    description: 'Comprehensive healthcare management system with patient records, appointment scheduling, and administrative features.',
    image: '/placeholder-project-3.jpg',
    tags: ['Python', 'Django', 'Database', 'Healthcare'],
    featured: true,
    github: 'https://github.com/hania-imtisal234/HospitalManagementSystem',
    liveDemo: null
  },
  {
    title: 'Confinity Banking Platform',
    category: 'Web Development',
    description: 'Smart banking platform with modern UI/UX, built using C# and SQL for secure financial transactions and account management.',
    image: '/placeholder-project-4.jpg',
    tags: ['C#', 'SQL', 'JavaScript', 'Banking'],
    featured: true,
    github: 'https://github.com/hania-imtisal234/Confinity',
    liveDemo: null
  },
  {
    title: 'OS Simulator',
    category: 'System Programming',
    description: 'Operating system simulator in C featuring CPU scheduling, memory management, banker\'s algorithm, and page replacement algorithms.',
    image: '/placeholder-project-5.jpg',
    tags: ['C', 'Operating Systems', 'Algorithms', 'Memory Management'],
    featured: false,
    github: 'https://github.com/hania-imtisal234/Os_Stimulator',
    liveDemo: null
  },
  {
    title: 'Weather App',
    category: 'Web Development',
    description: 'Real-time weather application with location-based forecasts, interactive UI, and responsive design for all devices.',
    image: '/placeholder-project-6.jpg',
    tags: ['JavaScript', 'React', 'API Integration', 'Responsive'],
    featured: false,
    github: 'https://github.com/hania-imtisal234/weatherApp-assignmentW4-HaniaImtisal-',
    liveDemo: null
  },
  {
    title: 'Task Controller',
    category: 'Productivity',
    description: 'Task management application with intuitive interface for organizing, tracking, and completing projects efficiently.',
    image: '/placeholder-project-7.jpg',
    tags: ['Python', 'Task Management', 'GUI', 'Productivity'],
    featured: false,
    github: 'https://github.com/hania-imtisal234/TaskController-Hania',
    liveDemo: null
  },
  {
    title: 'REST Countries Explorer',
    category: 'Web Development',
    description: 'Interactive country explorer using REST Countries API with search, filtering, and detailed country information display.',
    image: '/placeholder-project-8.jpg',
    tags: ['JavaScript', 'REST API', 'Responsive', 'Data Visualization'],
    featured: false,
    github: 'https://github.com/hania-imtisal234/RestCountries',
    liveDemo: null
  }
];

// Navigation items for the portfolio
export const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

// Tech stack items for various animations
export const techStack = [
  'React', 'Three.js', 'WebGL', 'TypeScript', 'Node.js', 
  'Git', 'Docker', 'AWS', 'Next.js', 'Framer Motion'
];

// Contact methods
export const contactMethods = [
  { name: 'Email', value: 'hello@yourportfolio.com', icon: '📧' },
  { name: 'Phone', value: '+1 (555) 123-4567', icon: '📱' },
  { name: 'Location', value: 'New York, NY', icon: '📍' },
];

// Hero section data
export const heroData = {
  title: 'Creative Developer',
  subtitle: 'you can count on',
  description: 'I turn complex ideas into experiences users love. I help founders and companies craft story-driven digital products that are both functional and beautiful.',
  ctaText: 'Chat with me',
  ctaLink: '#contact'
};

// Code snippets for different sections
export const codeSnippets = {
  default: [
    { code: "function createPortfolio() {", color: "text-blue-400" },
    { code: "  return 'Amazing Experience';", color: "text-green-400" },
    { code: "}", color: "text-blue-400" },
    { code: "const techStack = [", color: "text-yellow-400" },
    { code: "  'React', 'Three.js'", color: "text-purple-400" },
    { code: "];", color: "text-yellow-400" },
  ],
  contact: [
    { code: "function sendMessage() {", color: "text-blue-400" },
    { code: "  return 'Hello!';", color: "text-green-400" },
    { code: "}", color: "text-blue-400" },
    { code: "const contact = {", color: "text-yellow-400" },
    { code: "  email: 'hello@me.com'", color: "text-purple-400" },
    { code: "};", color: "text-yellow-400" },
    { code: "npm run contact", color: "text-pink-400" },
    { code: "git push origin main", color: "text-cyan-400" },
  ],
  projects: [
    { code: "npm install awesome", color: "text-green-400" },
    { code: "git commit -m '✨'", color: "text-blue-400" },
    { code: "const project = {", color: "text-yellow-400" },
    { code: "  name: 'Portfolio'", color: "text-purple-400" },
    { code: "};", color: "text-yellow-400" },
    { code: "function deploy() {", color: "text-pink-400" },
    { code: "  return 'Live!';", color: "text-cyan-400" },
    { code: "}", color: "text-pink-400" },
  ]
};

// Matrix rain keywords for different sections
export const matrixKeywords = {
  default: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'import', 'export'],
  contact: ['email', 'contact', 'message', 'send', 'hello', 'hi', 'chat', 'talk', 'connect', 'reach'],
  projects: ['npm', 'yarn', 'git', 'docker', 'aws', 'heroku', 'vercel', 'netlify', 'github', 'gitlab', 'bitbucket', 'vscode', 'vim', 'emacs', 'terminal']
};

// Floating icons for different sections
export const floatingIcons = {
  contact: ['📧', '💬', '📱', '🌐', '📞', '✉️', '💼', '🤝'],
  tech: ['⚛️', '🎮', '✨', '💻', '🔧', '📱', '🚀'],
  hero: ['⚛️', '🎮', '✨', '💻'],
  general: ['🎯', '🎭', '🎪', '🎨', '🎵', '🎬', '🎮', '⭐']
};

// Technology/Skills arrays for different sections
export const technologies = {
  hero: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'WebGL', 'Node.js', 'Git'],
  matrix: ['0', '1', '{}', '()', '[]', '=>', '//', '/*', '*/', 'const', 'let', 'var', 'function', 'return', 'if', 'else']
};

// Hero animation code snippets  
export const heroCodeSnippets = [
  { code: "function createPortfolio() {", color: "text-blue-400" },
  { code: "  return 'Amazing Experience';", color: "text-green-400" },
  { code: "}", color: "text-blue-400" },
  { code: "const techStack = [", color: "text-yellow-400" },
  { code: "  'React', 'Three.js'", color: "text-purple-400" },
  { code: "];", color: "text-yellow-400" },
];
