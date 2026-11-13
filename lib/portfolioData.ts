export interface LiveProject {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metrics: string[];
  liveUrl: string;
  isInitial: boolean;
  status: string;
}

export const LIVE_PROJECTS: LiveProject[] = [
  {
    id: "vectonix-agency",
    title: "Vectonix Agency & Student Portal",
    category: "Enterprise & EdTech",
    description:
      "Production digital registration system, CNIC/B-Form verification, roll number validation, and automated admission pass generator for GDSC Malir Cantt.",
    tags: ["TypeScript", "Next.js", "React", "Tailwind CSS", "PDF Generation", "Admin Panel"],
    metrics: ["100% Digital Admission", "Instant PDF Pass Generation", "Zero Duplication"],
    liveUrl: "https://vectonix-agency-website-main.vercel.app",
    isInitial: true,
    status: "Live Production",
  },
  {
    id: "apexluxe-real-estate",
    title: "ApexLuxe Luxury Real Estate",
    category: "Real Estate & Architecture",
    description:
      "High-end architectural real estate platform featuring interactive property showcase, virtual walkthroughs, and real-time mortgage financial calculators.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Financial Calculator"],
    metrics: ["100/100 Lighthouse Vitals", "P99 Edge Latency <18ms", "Bespoke Filter Engine"],
    liveUrl: "https://apexluxe-real-state.vercel.app",
    isInitial: true,
    status: "Live Production",
  },
  {
    id: "nexuscloud-ai",
    title: "NexusCloud AI Real-Time Telemetry",
    category: "AI & Distributed Systems",
    description:
      "Enterprise SaaS monitoring console with serverless stream processing, dynamic WebSocket charting, and automated incident anomaly triage.",
    tags: ["Next.js", "React", "TypeScript", "WebSockets", "Node.js", "AI Triage"],
    metrics: ["140k+ Events/sec Ingestion", "Sub-20ms P99 Latency", "Automated Triage"],
    liveUrl: "https://nexuscloud-ai.vercel.app",
    isInitial: true,
    status: "Live Production",
  },
  {
    id: "edupulse-erp",
    title: "EduPulse ERP School Software",
    category: "Enterprise ERP & School Cloud",
    description:
      "Comprehensive institutional ERP managing student records, faculty directories, automated fee invoicing, gradebooks, and administrative control panels.",
    tags: ["TypeScript", "Next.js", "React", "Prisma ORM", "PostgreSQL", "Node.js"],
    metrics: ["Multi-Campus Synchronization", "Automated Fee Billing", "Strict Validation"],
    liveUrl: "https://school-software-xi.vercel.app",
    isInitial: true,
    status: "Live Production",
  },
  {
    id: "carepulse-ai",
    title: "CarePulse AI Healthcare Portal",
    category: "HealthTech & Patient Intake",
    description:
      "Digital healthcare patient registration and appointment scheduling platform with physician matching and digital onboarding compliance.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Appointment Flow"],
    metrics: ["HIPAA-Aligned Design", "Instant Scheduling", "Digital Health Intake"],
    liveUrl: "https://health-care-xi-sage.vercel.app",
    isInitial: false,
    status: "Live Production",
  },
  {
    id: "yoursprompt",
    title: "YoursPrompt AI Prompt Studio",
    category: "AI & Generative Tools",
    description:
      "Advanced prompt engineering studio featuring intelligent persona builders, optimization workflows, and multi-model template synchronization.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API"],
    metrics: ["Sub-50ms Prompt Generation", "Multi-Model Compatibility", "Template Vault"],
    liveUrl: "https://ai-prompt-generator-tawny.vercel.app",
    isInitial: false,
    status: "Live Production",
  },
  {
    id: "luxe-couture",
    title: "Luxe Couture / Clothies Store",
    category: "UI/UX & Haute Fashion",
    description:
      "Contemporary luxury apparel boutique featuring interactive lookbooks, dynamic collection filtering, size selectors, and slide-out cart drawer.",
    tags: ["JavaScript", "HTML5", "CSS3", "Cart Drawer", "Fluid Animation"],
    metrics: ["100% Zero-Bundle Overhead", "60 FPS Native Animation", "Persistent Storage"],
    liveUrl: "https://clothies-red.vercel.app",
    isInitial: false,
    status: "Live Production",
  },
  {
    id: "beshopable",
    title: "Beshopable Modern E-Commerce",
    category: "Full-Stack E-Commerce",
    description:
      "Modern digital storefront with product catalogs, dynamic category filtering, cart management, and seamless multi-step checkout flows.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Checkout Flow"],
    metrics: ["Instant State Filtering", "High-Conversion Checkout", "Responsive Mobile UX"],
    liveUrl: "https://e-commerce-fawn-ten.vercel.app",
    isInitial: false,
    status: "Live Production",
  },
  {
    id: "maison-aura",
    title: "Maison Aura Haute Culinary",
    category: "Hospitality & Luxury Dining",
    description:
      "Fine dining digital showcase featuring seasonal tasting menus, sommelier selections, and interactive online table reservation workflows.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Table Reservations"],
    metrics: ["Atmospheric Luxury Aesthetics", "Instant Booking Flow", "Sub-second Page Load"],
    liveUrl: "https://resturent-bice-rho.vercel.app",
    isInitial: false,
    status: "Live Production",
  },
  {
    id: "solarplex",
    title: "SolarPlex CleanTech & Energy",
    category: "CleanTech & Sustainability",
    description:
      "Industrial solar energy platform with interactive kilowatt savings calculator, energy return visualizers, and project feasibility estimators.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Solar Estimator"],
    metrics: ["Live ROI Modeling", "Clean Energy Calculator", "Dynamic Energy Matrix"],
    liveUrl: "https://solarplex.vercel.app",
    isInitial: false,
    status: "Live Production",
  },
  {
    id: "kinetix-app",
    title: "Kinetix Athletic & Fitness Platform",
    category: "Health & Motion Analytics",
    description:
      "Performance athletic training and fitness coaching portal with biometric tracking benchmarks, personalized regimens, and dynamic session calendars.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion Physics"],
    metrics: ["Interactive Regimen Builder", "Fluid Touch Interactions", "Fast Response"],
    liveUrl: "https://kinetix-app-seven.vercel.app",
    isInitial: false,
    status: "Live Production",
  },
];

export const PROJECTS = LIVE_PROJECTS;

export interface SkillCategory {
  title: string;
  iconName?: string;
  skills: {
    name: string;
    level: number;
    experience: string;
    highlight?: boolean;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  badgeColor: string;
  skills: string[];
  verified: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  timeline: string;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  quote: string;
  rating: number;
  verified: boolean;
}

export const PERSONAL_INFO = {
  name: "Bilal Khan Lodhi",
  title: "Senior Full-Stack & Next.js Engineer",
  shortBio:
    "Specializing in high-performance Next.js App Router applications, scalable microservices, interactive UI design systems, and real-time web architectures.",
  availability: "Available for High-Impact Senior Roles & Consultations",
  location: "DOHS Phase 1, Malir Cantt, Karachi, Pakistan",
  email: "bilallodhi824@gmail.com",
  phone: "03001129959",
  github: "https://github.com/bilallodhi824-code",
  linkedin: "https://linkedin.com/in/bilallodhi",
  twitter: "https://x.com/bilallodhi",
  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Production Apps Built", value: "35+" },
    { label: "Code Commits 2025", value: "2,400+" },
    { label: "Client Satisfaction", value: "100%" },
  ],
};

export const TECH_TICKER = [
  { name: "Next.js 15 (App Router)", highlight: "+99% Speed" },
  { name: "React 19 & Server Components", highlight: "Zero-Bundle" },
  { name: "TypeScript Strict", highlight: "100% Typed" },
  { name: "Tailwind CSS v4", highlight: "Sub-millisecond" },
  { name: "Node.js & Express", highlight: "High Concurrency" },
  { name: "PostgreSQL & Supabase", highlight: "ACID Scalable" },
  { name: "Prisma & Drizzle ORM", highlight: "Type-Safe DB" },
  { name: "Redis & Pub/Sub", highlight: "<1ms Cache" },
  { name: "AWS & Vercel Edge", highlight: "Global CDN" },
  { name: "Docker & Containerization", highlight: "Cloud Ready" },
  { name: "GraphQL & REST APIs", highlight: "Microservices" },
  { name: "Framer Motion & Canvas", highlight: "60 FPS Native" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend & Web Technologies",
    iconName: "Code2",
    skills: [
      { name: "Next.js (App Router)", level: 98, experience: "5+ yrs", highlight: true },
      { name: "React 19 & Hooks", level: 96, experience: "6+ yrs", highlight: true },
      { name: "TypeScript", level: 95, experience: "5+ yrs", highlight: true },
      { name: "Tailwind CSS & Vanilla CSS", level: 98, experience: "5+ yrs", highlight: true },
      { name: "HTML5 & Semantic SEO", level: 99, experience: "6+ yrs" },
      { name: "State Management (Zustand/Redux)", level: 92, experience: "5+ yrs" },
      { name: "Web Workers & WebSockets", level: 88, experience: "4+ yrs" },
    ],
  },
  {
    title: "Backend & Microservices",
    iconName: "Server",
    skills: [
      { name: "Node.js & Express", level: 94, experience: "6+ yrs", highlight: true },
      { name: "RESTful & GraphQL APIs", level: 93, experience: "5+ yrs", highlight: true },
      { name: "Next.js Server Actions & Route Handlers", level: 96, experience: "3+ yrs", highlight: true },
      { name: "Authentication (NextAuth/Clerk/OAuth)", level: 92, experience: "4+ yrs" },
      { name: "Serverless & Edge Compute", level: 90, experience: "4+ yrs" },
    ],
  },
  {
    title: "Database & Cloud Infrastructure",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL & Supabase", level: 91, experience: "5+ yrs", highlight: true },
      { name: "Prisma & Drizzle ORM", level: 94, experience: "4+ yrs", highlight: true },
      { name: "Redis & Caching", level: 89, experience: "4+ yrs" },
      { name: "Docker & Containerization", level: 86, experience: "3+ yrs" },
      { name: "Vercel / AWS Cloud Deployment", level: 93, experience: "5+ yrs" },
    ],
  },
  {
    title: "Quality, Tools & Architecture",
    iconName: "Cpu",
    skills: [
      { name: "Performance Optimization (Core Web Vitals)", level: 97, experience: "5+ yrs", highlight: true },
      { name: "Git / GitHub Actions CI/CD", level: 95, experience: "6+ yrs" },
      { name: "Jest / Vitest / Playwright", level: 87, experience: "4+ yrs" },
      { name: "Clean Architecture & Design Patterns", level: 95, experience: "6+ yrs" },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "aws-solutions-architect",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    issueDate: "2024",
    credentialId: "AWS-PSA-994820",
    badgeColor: "from-amber-500 to-orange-500",
    skills: ["Cloud Architecture", "Serverless", "S3 & DynamoDB", "EC2 & ECS"],
    verified: true,
  },
  {
    id: "meta-frontend-dev",
    title: "Meta Certified Senior Front-End Developer",
    issuer: "Meta / Coursera",
    issueDate: "2023",
    credentialId: "META-FED-88412",
    badgeColor: "from-blue-500 to-cyan-500",
    skills: ["Advanced React", "UX Architecture", "Jest Testing", "State Design"],
    verified: true,
  },
  {
    id: "vercel-nextjs-expert",
    title: "Vercel Next.js App Router Certified Specialist",
    issuer: "Vercel",
    issueDate: "2024",
    credentialId: "VERCEL-NEXT-1049",
    badgeColor: "from-slate-700 to-slate-900",
    skills: ["Server Actions", "ISR & Edge", "Turbopack", "Middleware Security"],
    verified: true,
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "lead-next-eng",
    role: "Lead Next.js & Full-Stack Architect",
    company: "Vortex Digital Systems",
    period: "2023 - Present",
    location: "Karachi, Pakistan (Hybrid)",
    type: "Lead",
    description:
      "Architecting high-concurrency client solutions, leading frontend engineering standards, and optimizing Next.js server component pipelines.",
    achievements: [
      "Spearheaded migration of legacy SPA to Next.js App Router, cutting page load time by 62%",
      "Engineered reusable UI component library used across 12 product teams",
      "Mentored 8 mid/senior engineers and introduced automated visual regression testing",
    ],
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Prisma", "AWS", "GraphQL"],
  },
  {
    id: "senior-web-dev",
    role: "Senior Full-Stack Web Developer",
    company: "Apex Cloud Innovations",
    period: "2021 - 2023",
    location: "Remote",
    type: "Full-time",
    description:
      "Developed real-time financial dashboards, interactive data visualization components, and secure OAuth2 API integrations.",
    achievements: [
      "Built low-latency WebSocket charting canvas handling 50k active concurrent connections",
      "Reduced bundle size by 45% using dynamic imports and code splitting",
      "Designed zero-downtime CI/CD deployment pipelines on Vercel and AWS Docker containers",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Redis", "Docker"],
  },
  {
    id: "frontend-engineer",
    role: "Frontend Engineer & UI Developer",
    company: "Lumina Labs",
    period: "2019 - 2021",
    location: "Karachi, Pakistan",
    type: "Full-time",
    description:
      "Created responsive web interfaces, complex interactive forms, and accessibility-compliant design systems.",
    achievements: [
      "Achieved 100% WCAG 2.1 AA accessibility compliance across all flagship web properties",
      "Integrated automated cross-browser testing suite using Playwright and Cypress",
    ],
    technologies: ["React", "JavaScript (ES6+)", "CSS Modules", "HTML5", "REST APIs"],
  },
];

export const SERVICES: ServicePackage[] = [
  {
    id: "nextjs-audit",
    title: "Core Web Vitals & Next.js Audit",
    subtitle: "Complete diagnostic & performance optimization for existing Next.js / React platforms.",
    price: "$750",
    period: "one-time",
    features: [
      "Lighthouse 100/100 Performance Remediation Plan",
      "Bundle size breakdown & dynamic import refactoring",
      "Core Web Vitals LCP, CLS, INP optimization report",
      "Memory leak & server rendering bottleneck triage",
    ],
    timeline: "3-5 Business Days",
    ctaText: "Book Audit",
  },
  {
    id: "fullstack-mvp",
    title: "Full-Stack Next.js 15 Web Application",
    subtitle: "End-to-end custom web application engineered from scratch to production.",
    price: "$2,800",
    period: "starting package",
    popular: true,
    features: [
      "Custom Next.js App Router + TypeScript codebase",
      "PostgreSQL / Prisma Database Schema & Migrations",
      "NextAuth / OAuth2 Authentication & Stripe Payment integration",
      "Responsive Hairline UI Design System (Dark/Light Mode)",
      "Zero-downtime deployment setup on Vercel / AWS",
    ],
    timeline: "2-4 Weeks",
    ctaText: "Start Project",
  },
  {
    id: "enterprise-arch",
    title: "Enterprise Architecture & Team Lead Advisory",
    subtitle: "Ongoing fractional technical lead & microservices architecture guidance.",
    price: "$1,800",
    period: "per month",
    features: [
      "Fractional Lead Next.js Architect oversight",
      "CI/CD automation & automated visual regression testing",
      "Custom API Gateway & Microservices design",
      "Weekly team code reviews & engineering mentorship",
    ],
    timeline: "Ongoing Retainer",
    ctaText: "Retain Lead",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Muhammad Hamza Tariq",
    role: "CTO & Co-Founder",
    company: "DevNexus Solutions (Karachi)",
    initials: "HT",
    quote:
      "Bilal is an absolute wizard with Next.js and modern Web architecture. He delivered our enterprise platform weeks ahead of schedule with flawless 100 Lighthouse performance metrics.",
    rating: 5.0,
    verified: true,
  },
  {
    id: "test-2",
    name: "Syed Daniyal Ali",
    role: "Head of Engineering",
    company: "CloudSys Technologies (Lahore)",
    initials: "DA",
    quote:
      "Working with Bilal transformed our product UX. His attention to detail, smooth animation work, and clean TypeScript codebase set a new benchmark for our entire engineering team.",
    rating: 5.0,
    verified: true,
  },
  {
    id: "test-3",
    name: "Zubair Ahmed Khan",
    role: "VP of Technology",
    company: "FinTech Hub (Islamabad)",
    initials: "ZK",
    quote:
      "If you need a developer who understands both high-level distributed architecture and fine-grained UI pixel perfection, Bilal is the top choice. Exceptional communication and mastery.",
    rating: 5.0,
    verified: true,
  },
];

export const FAQS = [
  {
    q: "What types of projects do you take on?",
    a: "I specialize in end-to-end full-stack web applications, high-performance Next.js 15 App Router frontends, real-time dashboards, SaaS platforms, and enterprise architectural audits.",
  },
  {
    q: "How do we collaborate and communicate during a build?",
    a: "Clear, asynchronous-first communication via Slack/Discord, weekly Loom sprint demos, and direct GitHub PR reviews. You have 100% transparency into commits and milestones.",
  },
  {
    q: "What is your typical turnaround timeline?",
    a: "Performance audits take 3–5 business days. Full-stack MVPs and production applications typically launch within 2 to 4 weeks depending on database schema complexity and third-party integrations.",
  },
  {
    q: "Do you provide post-launch support and maintenance?",
    a: "Yes. Every production delivery includes a 30-day bug-free warranty and handover documentation. I also offer monthly retainer packages for continuous feature development and DevOps.",
  },
  {
    q: "How can I book you or discuss a new project?",
    a: "You can reach out directly via email at bilallodhi824@gmail.com, WhatsApp/Call at 03001129959, or click 'Start Project' to schedule a technical discovery call.",
  },
];
