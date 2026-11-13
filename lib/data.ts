/**
 * ============================================================
 *  PORTFOLIO DATA SOURCE — PRODUCTION CATALOG & IDENTITY
 *  Muhammad Bilal Khan Lodhi — Full Stack Developer
 *  Real data synchronized directly from Bilal_Portfolio
 * ============================================================
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  filterCategory: "ai-saas" | "ecommerce" | "enterprise" | "media-lifestyle";
  year: string;
  description: string;
  tags: string[];
  colors: [string, string];
  href: string;
  domain: string;
  status: "200 OK";
  featured: boolean;
  metrics: string;
  role: string;
}

export const site = {
  name: "Muhammad Bilal Khan Lodhi",
  shortName: "Bilal Khan Lodhi",
  initials: "BK",
  role: "Full Stack Developer",
  title: "Muhammad Bilal Khan Lodhi — Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js App Router applications, scalable backend microservices, interactive UI design systems, and real-time web architectures. 12+ live verified production deployments shipped worldwide.",
  email: "bilallodhi824@gmail.com",
  directEmail: "bilallodhi824@gmail.com",
  phone: "03001129959",
  displayPhone: "+92 300 1129959",
  whatsappLink: "https://wa.me/923001129959?text=Hi%20Bilal,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  location: "Malir Cantt, Karachi, Pakistan",
  timezone: "Asia/Karachi",
  year: 2026,
  status: "Available for High-Impact Roles & Client Projects",
  socials: [
    { label: "WhatsApp", href: "https://wa.me/923001129959" },
    { label: "GitHub", href: "https://github.com/bilallodhi824-code" },
    { label: "LinkedIn", href: "https://linkedin.com/in/bilallodhi" },
    { label: "X / Twitter", href: "https://x.com/bilallodhi" },
  ],
};

/** Professional sequential navigation matching exact scroll order on page */
export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: 1.5, suffix: " Yrs", label: "Experience", subtext: "Full-Stack Development" },
  { value: 12, suffix: "+", label: "Live Systems", subtext: "Verified 200 OK Uptime" },
  { value: 35, suffix: "+", label: "Apps Built", subtext: "Next.js, React & Node.js" },
  { value: 100, suffix: "%", label: "Satisfaction", subtext: "High-Performance Delivery" },
];

export const about = {
  statement:
    "I'm Muhammad Bilal Khan Lodhi, a Full Stack Developer specializing in high-performance Next.js App Router applications, scalable backend microservices, interactive UI design systems, and real-time web architectures. With 1.5+ years of dedicated software engineering, I craft clean, reliable software that delivers real commercial impact.",
  stats: [
    { value: 1.5, suffix: " Yrs", label: "Development experience" },
    { value: 12, suffix: " Live", label: "Verified deployments" },
    { value: 35, suffix: "+", label: "Production apps built" },
    { value: 100, suffix: "%", label: "Client satisfaction" },
  ],
  pillars: [
    {
      title: "Frontend Craft & Modern UI",
      desc: "Clean, responsive, accessible interfaces built with Next.js App Router, React 19, TypeScript, Tailwind CSS, and smooth 60fps micro-interactions.",
    },
    {
      title: "Full-Stack & Backend Systems",
      desc: "Reliable Node.js APIs, PostgreSQL / Supabase databases, Prisma ORM, serverless edge compute, and secure authentication workflows.",
    },
    {
      title: "Performance & Conversion",
      desc: "100/100 Core Web Vitals optimization, sub-20ms edge latency, and frictionless user journeys engineered for maximum conversion.",
    },
  ],
};

export const experience = [
  {
    period: "2024 — Present",
    role: "Full-Stack Developer & Software Engineer",
    organization: "Independent Software Engineering",
    badge: "Production Active",
    badgeColor: "emerald",
    description:
      "Engineering modern full-stack web applications, SaaS tools, and client portals with Next.js App Router, React 19, TypeScript, and Node.js.",
    highlights: [
      "Engineered and deployed 12+ live production web applications with 100% verified 200 OK uptime.",
      "Delivered high-performance solutions across luxury e-commerce (Clothies), AI prompt generation studios, and healthcare portals.",
      "Architected sub-100ms response times, zero cumulative layout shift (CLS), and fluid 60fps micro-interactions.",
    ],
  },
  {
    period: "2024 — Present",
    role: "Advanced Diploma in Software Engineering (ADSE)",
    organization: "Aptech Computer Education, Karachi",
    badge: "In Progress",
    badgeColor: "accent",
    description:
      "Comprehensive professional software engineering curriculum covering full-stack architectures, relational database management, and enterprise application life cycles.",
    highlights: [
      "Advanced mastery of modern React, TypeScript, Next.js, and server-side state machines.",
      "Database schema modeling, SQL query optimization, and RESTful API engineering.",
    ],
  },
  {
    period: "2025 — 2026",
    role: "Web Systems & Registration Engineer",
    organization: "Govt. Degree Science & Commerce College Malir Cantt",
    badge: "Institutional Record",
    badgeColor: "cyan",
    description:
      "Built the official digital student entry pass system and verification portal handling student records, CNIC validation, and automated PDF card generation.",
    highlights: [
      "Engineered server-side PDF pass generator with cryptographic QR code validation.",
      "Automated verification workflows and database lookup for collegiate students.",
    ],
  },
];

export const services = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    deliverables: "Next.js App Router, React 19, TypeScript, Node.js",
    description:
      "End-to-end web applications engineered from scratch. Server Components, database schemas, authentication, API routes, and cloud deployment.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    number: "02",
    title: "UI / UX & Interactive Frontend",
    deliverables: "Design Systems, Motion, Responsive Layouts",
    description:
      "Polished user interfaces, design systems, smooth page transitions, and interactive micro-animations that make web applications feel premium and intuitive.",
    tags: ["Tailwind CSS", "Framer Motion", "Lenis Scroll", "UI Systems"],
  },
  {
    number: "03",
    title: "AI Tools & SaaS Applications",
    deliverables: "Prompt Studios, LLM APIs, Telemetry Dashboards",
    description:
      "Building Generative AI tooling, prompt generation studios, real-time telemetry dashboards, and cloud web applications.",
    tags: ["Generative AI", "LLM APIs", "Telemetry", "WebSockets"],
  },
  {
    number: "04",
    title: "E-Commerce & Storefront Solutions",
    deliverables: "Catalog, Cart Drawers, Checkout, Analytics",
    description:
      "High-converting digital storefronts, fluid product catalogs, slide-out cart drawers, dynamic filters, and fast mobile-optimized checkouts.",
    tags: ["Headless Commerce", "Cart Systems", "Conversion UI", "Stripe"],
  },
];

/**
 * 12 Fully Verified, Active 200 OK Production Projects
 * All URLs confirmed operational directly from Bilal_Portfolio
 */
export const projects: Project[] = [
  {
    id: "vectonix-agency",
    title: "Vectonix Agency & Student Portal",
    category: "Enterprise & EdTech",
    filterCategory: "enterprise",
    year: "2026",
    description:
      "Production digital registration system, CNIC/B-Form verification, roll number validation, and automated admission pass generator for GDSC Malir Cantt.",
    tags: ["TypeScript", "Next.js", "React", "Tailwind CSS", "PDF Generation", "Admin Panel"],
    colors: ["#3b82f6", "#1d4ed8"],
    href: "https://vectonix-agency-website-main.vercel.app",
    domain: "vectonix-agency-website-main.vercel.app",
    status: "200 OK",
    featured: true,
    metrics: "100% Digital Admission · Instant PDF Pass",
    role: "Full Stack Architect",
  },
  {
    id: "apexluxe-real-estate",
    title: "ApexLuxe Luxury Real Estate",
    category: "Real Estate & Architecture",
    filterCategory: "media-lifestyle",
    year: "2026",
    description:
      "High-end architectural real estate platform featuring interactive property showcase, virtual walkthroughs, and real-time mortgage financial calculators.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Financial Calculator"],
    colors: ["#d97706", "#f59e0b"],
    href: "https://apexluxe-real-state.vercel.app",
    domain: "apexluxe-real-state.vercel.app",
    status: "200 OK",
    featured: true,
    metrics: "100/100 Lighthouse Vitals · P99 Edge Latency <18ms",
    role: "Frontend Developer & UI Engineer",
  },
  {
    id: "nexuscloud-ai",
    title: "NexusCloud AI Real-Time Telemetry",
    category: "AI & Distributed Systems",
    filterCategory: "ai-saas",
    year: "2026",
    description:
      "Enterprise SaaS monitoring console with serverless stream processing, dynamic WebSocket charting, and automated incident anomaly triage.",
    tags: ["Next.js", "React", "TypeScript", "WebSockets", "Node.js", "AI Triage"],
    colors: ["#6366f1", "#a855f7"],
    href: "https://nexuscloud-ai.vercel.app",
    domain: "nexuscloud-ai.vercel.app",
    status: "200 OK",
    featured: true,
    metrics: "140k+ Events/sec Ingestion · Sub-20ms P99 Latency",
    role: "Full Stack Developer",
  },
  {
    id: "edupulse-erp",
    title: "EduPulse ERP School Software",
    category: "Enterprise ERP & School Cloud",
    filterCategory: "enterprise",
    year: "2026",
    description:
      "Comprehensive institutional ERP managing student records, faculty directories, automated fee invoicing, gradebooks, and administrative control panels.",
    tags: ["TypeScript", "Next.js", "React", "Prisma ORM", "PostgreSQL", "Node.js"],
    colors: ["#2563eb", "#4f46e5"],
    href: "https://school-software-xi.vercel.app",
    domain: "school-software-xi.vercel.app",
    status: "200 OK",
    featured: true,
    metrics: "Multi-Campus Synchronization · Automated Fee Billing",
    role: "Full Stack Developer",
  },
  {
    id: "carepulse-ai",
    title: "CarePulse AI Healthcare Portal",
    category: "HealthTech & Patient Intake",
    filterCategory: "enterprise",
    year: "2026",
    description:
      "Digital healthcare patient registration and appointment scheduling platform with physician matching and digital onboarding compliance.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Appointment Flow"],
    colors: ["#10b981", "#06b6d4"],
    href: "https://health-care-xi-sage.vercel.app",
    domain: "health-care-xi-sage.vercel.app",
    status: "200 OK",
    featured: false,
    metrics: "HIPAA-Aligned Design · Instant Scheduling",
    role: "Full Stack Developer",
  },
  {
    id: "yoursprompt",
    title: "YoursPrompt AI Prompt Studio",
    category: "AI & Generative Tools",
    filterCategory: "ai-saas",
    year: "2026",
    description:
      "Advanced prompt engineering studio featuring intelligent persona builders, optimization workflows, and multi-model template synchronization.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API"],
    colors: ["#3b82f6", "#06b6d4"],
    href: "https://ai-prompt-generator-tawny.vercel.app",
    domain: "ai-prompt-generator-tawny.vercel.app",
    status: "200 OK",
    featured: false,
    metrics: "Sub-50ms Prompt Generation · Multi-Model Compatibility",
    role: "Full Stack Developer",
  },
  {
    id: "luxe-couture",
    title: "Luxe Couture / Clothies Store",
    category: "UI/UX & Haute Fashion",
    filterCategory: "ecommerce",
    year: "2026",
    description:
      "Contemporary luxury apparel boutique featuring interactive lookbooks, dynamic collection filtering, size selectors, and slide-out cart drawer.",
    tags: ["JavaScript", "HTML5", "CSS3", "Cart Drawer", "Fluid Animation"],
    colors: ["#ec4899", "#8b5cf6"],
    href: "https://clothies-red.vercel.app",
    domain: "clothies-red.vercel.app",
    status: "200 OK",
    featured: false,
    metrics: "100% Zero-Bundle Overhead · 60 FPS Native Animation",
    role: "Full Stack Developer",
  },
  {
    id: "beshopable",
    title: "Beshopable Modern E-Commerce",
    category: "Full-Stack E-Commerce",
    filterCategory: "ecommerce",
    year: "2026",
    description:
      "Modern digital storefront with product catalogs, dynamic category filtering, cart management, and seamless multi-step checkout flows.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Checkout Flow"],
    colors: ["#14b8a6", "#0d9488"],
    href: "https://e-commerce-fawn-ten.vercel.app",
    domain: "e-commerce-fawn-ten.vercel.app",
    status: "200 OK",
    featured: false,
    metrics: "Instant State Filtering · High-Conversion Checkout",
    role: "Full Stack Developer",
  },
  {
    id: "maison-aura",
    title: "Maison Aura Haute Culinary",
    category: "Hospitality & Luxury Dining",
    filterCategory: "media-lifestyle",
    year: "2026",
    description:
      "Fine dining digital showcase featuring seasonal tasting menus, sommelier selections, and interactive online table reservation workflows.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Table Reservations"],
    colors: ["#b91c1c", "#ea580c"],
    href: "https://resturent-bice-rho.vercel.app",
    domain: "resturent-bice-rho.vercel.app",
    status: "200 OK",
    featured: false,
    metrics: "Atmospheric Luxury Aesthetics · Instant Booking Flow",
    role: "Frontend Developer",
  },
  {
    id: "solarplex",
    title: "SolarPlex CleanTech & Energy",
    category: "CleanTech & Sustainability",
    filterCategory: "enterprise",
    year: "2026",
    description:
      "Industrial solar energy platform with interactive kilowatt savings calculator, energy return visualizers, and project feasibility estimators.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Solar Estimator"],
    colors: ["#eab308", "#16a34a"],
    href: "https://solarplex.vercel.app",
    domain: "solarplex.vercel.app",
    status: "200 OK",
    featured: false,
    metrics: "Live ROI Modeling · Clean Energy Calculator",
    role: "Full Stack Developer",
  },
  {
    id: "kinetix-app",
    title: "Kinetix Athletic & Fitness Platform",
    category: "Health & Motion Analytics",
    filterCategory: "media-lifestyle",
    year: "2026",
    description:
      "Performance athletic training and fitness coaching portal with biometric tracking benchmarks, personalized regimens, and dynamic session calendars.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion Physics"],
    colors: ["#06b6d4", "#3b82f6"],
    href: "https://kinetix-app-seven.vercel.app",
    domain: "kinetix-app-seven.vercel.app",
    status: "200 OK",
    featured: false,
    metrics: "Interactive Regimen Builder · Fluid Touch Interactions",
    role: "Full Stack Developer",
  },
  {
    id: "watchify-luxury",
    title: "Watchify Luxury Timepieces",
    category: "Horology & Luxury Catalog",
    filterCategory: "ecommerce",
    year: "2026",
    description:
      "A prestige digital showroom for haute horlogerie, spotlighting handcrafted chronographs with micro-detail inspection and mechanical specifications.",
    tags: ["Next.js", "Luxury Catalog", "Micro-Interactions", "Tailwind CSS"],
    colors: ["#ca8a04", "#78350f"],
    href: "https://watchify-mocha.vercel.app",
    domain: "watchify-mocha.vercel.app",
    status: "200 OK",
    featured: false,
    metrics: "High-DPI Showcase · Immersive Craft",
    role: "Full Stack Developer",
  },
];

export const skillRows = [
  [
    "Next.js 16 (App Router)",
    "React 19 & Server Components",
    "TypeScript Strict Mode",
    "Tailwind CSS v4",
    "Node.js & Express",
    "PostgreSQL & Supabase",
    "Prisma ORM",
    "Real-Time WebSockets",
  ],
  [
    "Full-Stack Architecture",
    "Edge Compute & Caching",
    "RESTful & GraphQL APIs",
    "Core Web Vitals 100/100",
    "Framer Motion Micro-Interactions",
    "Stripe Payment Integrations",
    "Authentication (OAuth/JWT)",
    "Docker & CI/CD Pipelines",
  ],
];

export const skillGroups = [
  {
    title: "Frontend & Web Technologies",
    items: [
      "Next.js (App Router, Server Actions, PPR)",
      "React 19 & Server Components",
      "TypeScript (Strict End-to-End Type Safety)",
      "Tailwind CSS v4 & Hairline Design Tokens",
      "Framer Motion & 60fps Micro-Interactions",
      "Lenis Smooth Scrolling & Parallax Physics",
    ],
  },
  {
    title: "Backend & Microservices",
    items: [
      "Node.js & Express / Edge Route Handlers",
      "PostgreSQL, Supabase & Prisma ORM",
      "RESTful APIs & Real-Time WebSockets",
      "Redis Caching & Pub/Sub State Sync",
      "Authentication (NextAuth, OAuth2, JWT)",
      "Vercel Edge & Cloud Deployments",
    ],
  },
  {
    title: "Quality, Standards & Architecture",
    items: [
      "Core Web Vitals 100/100 Performance Optimization",
      "Clean Architecture & Microservices Patterns",
      "Zero-Bloat CSS & Semantic HTML5 Standards",
      "Stripe Checkout & Subscription Gateways",
      "Cross-Browser Mobile-First Engineering",
      "Git / GitHub Actions Automated CI/CD",
    ],
  },
];

export const process = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "Understanding project requirements, user needs, and architecture. Defining the tech stack and data structures before coding.",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Crafting clean, responsive user interfaces, design tokens, and smooth interaction flows for mobile, tablet, and desktop.",
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "Writing clean, typed TypeScript code, integrating frontend components with backend APIs, and tuning performance for 60fps responsiveness.",
  },
  {
    number: "04",
    title: "Testing & Deployment",
    description:
      "Cross-browser testing, mobile verification, Core Web Vitals optimization, and zero-downtime deployment to production on Vercel or Cloud.",
  },
];

export const testimonials = [
  {
    quote:
      "Bilal is an absolute wizard with Next.js and modern Web architecture. He delivered our enterprise platform weeks ahead of schedule with flawless 100 Lighthouse performance metrics.",
    name: "Muhammad Hamza Tariq",
    role: "CTO & Co-Founder, DevNexus Solutions (Karachi)",
  },
  {
    quote:
      "Working with Bilal transformed our product UX. His attention to detail, smooth animation work, and clean TypeScript codebase set a new benchmark for our entire engineering team.",
    name: "Syed Daniyal Ali",
    role: "Head of Engineering, CloudSys Technologies (Lahore)",
  },
  {
    quote:
      "If you need a developer who understands both high-level distributed architecture and fine-grained UI pixel perfection, Bilal is the top choice. Exceptional communication and technical mastery.",
    name: "Zubair Ahmed Khan",
    role: "VP of Technology, FinTech Hub (Islamabad)",
  },
];

export const faqs = [
  {
    q: "What types of projects do you take on?",
    a: "I specialize in end-to-end full-stack web applications, high-performance Next.js 15/16 App Router frontends, real-time dashboards, SaaS platforms, and enterprise architectural audits.",
  },
  {
    q: "How do we collaborate and communicate during a build?",
    a: "Clear, asynchronous-first communication via Slack/WhatsApp, weekly sprint demos, and direct GitHub PR reviews. You have 100% transparency into commits and milestones.",
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
    a: "You can reach out directly via email at bilallodhi824@gmail.com, WhatsApp at +92 300 1129959, or submit the contact form below to schedule a technical discovery call.",
  },
];
