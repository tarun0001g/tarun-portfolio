/**
 * ALL site content lives here. Edit text, links and lists in this file —
 * no component changes needed. Anything marked TODO is waiting on you.
 */

export const site = {
  name: 'Tarun Makavana',
  initials: 'TM',
  title: 'Full Stack Developer',
  // Rotating roles in the hero typing animation
  roles: ['Full Stack Developer', 'Backend-first Engineer', 'Relentless Problem Solver', 'AI-powered Builder'],
  tagline: 'I learn how it works, then I build it — end to end.',
  intro:
    'Backend-first full stack developer with strong CS fundamentals, a hunger to learn any technology by building with it, and the drive to give 100% to every product I touch.',
  availability: 'Open to full-time roles & internships',
  location: 'Bhavnagar, Gujarat, India',
  openTo: 'Gujarat · Bengaluru · Pune · Hyderabad · Noida · Gurugram · Chennai · Remote',
  email: 'tarun0006g@gmail.com',
  phone: '+91 9173704980',
  phoneHref: 'tel:+919173704980',
  github: 'https://github.com/tarun0001g',
  linkedin: 'https://www.linkedin.com/in/tarun-makavana-52601427a',
  resume: '/Tarun-Makavana-Resume.pdf',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'strengths', label: 'Why me' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  heading: 'Curious about the machine, not just the interface.',
  paragraphs: [
    "I'm a Full Stack Developer with a backend-first mindset and a genuine curiosity for how systems work under the hood. I don't just wire libraries together. I learn the concept, understand the behavior behind the scenes, and only then build.",
    'My foundation is solid CS fundamentals (DSA, OOP, DBMS, Operating Systems and Computer Networks), which lets me pick up unfamiliar problems fast and own them end to end, from system design to deployment.',
    'I use AI as a force multiplier: sharp prompting, quick iteration and careful verification turn into serious productivity without cutting corners on quality.',
  ],
  principles: [
    { title: 'Learn', text: 'The concept, the method, the behavior.' },
    { title: 'Understand', text: 'How the system works behind the scenes.' },
    { title: 'Build', text: 'Ship something real to prove it.' },
  ],
  stats: [
    { value: 100, suffix: '+', decimals: 0, label: 'DSA problems solved in Java' },
    { value: 2, suffix: '', decimals: 0, label: 'Full stack internships' },
    { value: 3, suffix: '', decimals: 0, label: 'Featured full stack projects' },
    { value: 8.43, suffix: '', decimals: 2, label: 'CGPA' },
  ],
}

export type SkillGroup = { category: string; blurb: string; items: string[] }

export const skillGroups: SkillGroup[] = [
  { category: 'Languages', blurb: 'Fundamentals first', items: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'Python', 'C', 'PHP'] },
  {
    category: 'Frontend',
    blurb: 'Fast, responsive UIs',
    items: ['React.js', 'Redux Toolkit', 'Axios', 'Tailwind CSS', 'HTML5', 'CSS3', 'EJS'],
  },
  {
    category: 'Backend',
    blurb: 'Where I do my best work',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'MVC Architecture'],
  },
  {
    category: 'Databases',
    blurb: 'Modeled, normalized, queried',
    items: ['PostgreSQL', 'Prisma ORM', 'MongoDB', 'Mongoose', 'MySQL'],
  },
  {
    category: 'Tools & AI',
    blurb: 'Ship faster, safely',
    items: ['Git', 'GitHub', 'Thunder Client', 'Vercel', 'Render', 'Cloudinary', 'Prompt Engineering'],
  },
  {
    category: 'CS Core',
    blurb: 'The why behind the how',
    items: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'Software Engineering'],
  },
]

export type Project = {
  slug: string
  title: string
  kicker: string
  summary: string
  highlights: string[]
  stack: string[]
  github: string
  live?: string // TODO: add a live demo URL for SecureAuthentication when deployed
  period: string
}

export const projects: Project[] = [
  {
    slug: 'secure-authentication',
    title: 'SecureAuthentication',
    kicker: 'Internship project · Internship Education',
    period: 'July 2026',
    summary:
      'A production-style authentication system built from the ground up: JWT login, protected routes, hashed passwords, email verification and password reset.',
    highlights: [
      'JWT-based login with protected routes and access-controlled routing on the React client.',
      'bcrypt password hashing, plus email verification and reset flows through the Resend API.',
      'Normalized PostgreSQL schema modeled with Prisma ORM and exposed via RESTful API endpoints.',
      'React frontend that manages auth state and gives real-time form validation feedback.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'bcrypt', 'Resend API'],
    github: 'https://github.com/tarun0001g/SecureAuthentication',
  },
  {
    slug: 'bookmystay',
    title: 'BookMyStay',
    kicker: 'Full stack property booking platform',
    period: 'April 2026',
    summary:
      'A property booking platform built on MVC architecture with 7+ user-facing features, session-based authentication and role-based authorization.',
    highlights: [
      'Clean MVC architecture with 7+ user-facing features for browsing and booking stays.',
      'Secure session-based authentication with role-based authorization.',
      '6 admin management capabilities protected by guarded routes and reusable middleware.',
      'Cloudinary-powered image uploads and a responsive EJS-rendered UI.',
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'EJS', 'Tailwind CSS', 'Express Session', 'Cloudinary'],
    github: 'https://github.com/tarun0001g/BookMyStay',
    live: 'https://bookmystay-m1dn.onrender.com',
  },
  {
    slug: 'pastecontent',
    title: 'PasteContent',
    kicker: 'React state management app',
    period: 'November 2025',
    summary:
      'A fast paste manager to create, edit, delete, search, copy and share snippets, with state handled by Redux Toolkit and persisted locally.',
    highlights: [
      'Full create, edit, delete, search, copy and share workflow.',
      'Redux Toolkit for predictable state, dynamic routing with React Router.',
      'localStorage persistence so content survives reloads.',
      'Deployed on Vercel.',
    ],
    stack: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'React Router', 'LocalStorage', 'Vercel'],
    github: 'https://github.com/tarun0001g/PasteContent',
    live: 'https://paste-content-git-main-tarun-makavanas-projects.vercel.app/',
  },
]

export type Experience = {
  role: string
  company: string
  mode: string
  period: string
  points: string[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    role: 'Full Stack Development Intern',
    company: 'Internship Education',
    mode: 'Remote',
    period: 'July 2026',
    points: [
      'Delivered SecureAuthentication, a production-style authentication module, with React, Node.js, Express.js, PostgreSQL and Prisma ORM.',
      'Implemented JWT-based auth, bcrypt password hashing and email verification via the Resend API, following industry practices for API design and secure session management.',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'JWT'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Micro Information Technology Services',
    mode: 'Remote',
    period: 'June 2025 – July 2025',
    points: [
      'Engineered responsive web interfaces and integrated backend APIs to improve application functionality and user experience.',
      'Collaborated on debugging, testing and performance improvements within a real development workflow.',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  },
]

export const education = {
  degree: 'B.E. in Information Technology',
  school: 'Shantilal Shah Government Engineering College, Bhavnagar',
  period: '2023 – 2027 (expected)',
  score: 'CGPA: 8.43',
  certifications: [
    { title: 'Backend Development', issuer: 'KnowledgeGate', year: '2026', score: 'Score: 98%' },
    { title: 'RDBMS PostgreSQL Training', issuer: 'IIT Bombay', year: '2024', score: 'Score: 92.5%' },
  ],
  practice: 'Solved 100+ DSA problems in Java on TakeUForward.',
}

export const strengths = [
  {
    icon: 'zap',
    title: 'Hardworking and smart about it',
    text: 'I put in the hours and aim them at what matters: the right problem, the right tool, the right level of polish.',
  },
  {
    icon: 'sparkles',
    title: 'AI-fluent productivity multiplier',
    text: 'I use AI tools and prompt engineering to move much faster, then verify everything so speed never costs quality.',
  },
  {
    icon: 'puzzle',
    title: 'Problem solver by default',
    text: 'Give me a hard, unfamiliar problem and I will break it down, own it and see it through. Challenges excite me.',
  },
  {
    icon: 'layers',
    title: 'Understands the system, not just the API',
    text: 'I study the concept, the method and the behavior behind a project before building on it, so I can reason about it when things break.',
  },
  {
    icon: 'rocket',
    title: 'Quick, flexible learner',
    text: 'New stack? I pick it up by building something real with it until I know it properly. Adaptable by habit.',
  },
  {
    icon: 'flame',
    title: '100% when it counts',
    text: 'Given a chance on a project or at a company, I bring full commitment and a constant drive to grow and improve.',
  },
]

export const contact = {
  heading: "Let's build something great together.",
  text: 'I am open to full-time roles and internships. Send me a message and I will reply quickly.',
}
