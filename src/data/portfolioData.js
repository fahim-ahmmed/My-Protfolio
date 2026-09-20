export const personalInfo = {
  name: "Fahim Ahmmed Shihab",
  title: "Full-Stack Web Developer",
  tagline: "Building modern, scalable & user-focused web applications.",
  aboutShort: "I build modern, responsive and scalable web applications with clean code, secure REST APIs, and thoughtful user experiences.",
  availability: "Available for Job Opportunities",
  avatar: "/fahimpic.png",
  education: [
    { 
      degree: "B.Sc in CSE", 
      institution: "Rabindra Maitree University",
      session: "2023 - Present",
      status: "Running",
      description: "Focusing on Software Engineering, Data Structures, Algorithms, Database Management Systems, and Web Technologies."
    },
    { 
      degree: "Higher Secondary Certificate (HSC)", 
      institution: "Khoksha Government College",
      session: "2020 - 2022",
      status: "Completed",
      description: "Science Group with background in Mathematics, Physics, and Information & Communication Technology."
    }
  ],
  contact: {
    email: "ahmmedshihab205@gmail.com",
    github: "https://github.com/fahim-ahmmed",
    linkedin: "https://linkedin.com/in/fahim-ahmmed",
    whatsapp: "+8801305470835"
  }
};

export const techStack = [
  "JavaScript", "React", "Next.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS", "Git", "REST API"
];

// Technical Skills with Exact Topic/Brand Icons
export const skillsWithIcons = {
  frontend: [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "JavaScript (ES6+)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "DaisyUI", icon: "https://raw.githubusercontent.com/saadeghi/daisyui-images/master/archive/daisyui-logomark.svg" }
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Authentication", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" }
  ],
  database: [
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
  ],
  tools: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
  ]
};

// Services with Topic-exact High Quality Unsplash Images
export const services = [
  {
    id: "01",
    title: "Full-Stack Web Application",
    description: "Complete end-to-end web apps built with modern Frontend, Node/Express Backend, MongoDB, and secure authentication.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80" // Modern IDE & Clean Code
  },
  {
    id: "02",
    title: "Business Website",
    description: "Fast, responsive, and SEO-friendly modern websites designed to establish a strong online brand presence.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80" // Web Design Analytics & UI
  },
  {
    id: "03",
    title: "E-commerce Platform",
    description: "Full-fledged e-commerce solutions with product catalogs, shopping carts, checkout, and order management.",
    image: "/rootz.png " // Online Shopping Checkout & Store
  },
  {
    id: "04",
    title: "REST API & Backend",
    description: "Scalable, secure, and well-documented REST APIs integrated with databases and third-party services.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1000&q=80" // Server & API Data Flow Architecture
  },
  {
    id: "05",
    title: "Bug Fixing & Optimization",
    description: "Troubleshooting React/Next.js UI bugs, API errors, and optimizing web application performance.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1000&q=80" // Code Debugging & Terminal Window
  }
];

export const projects = [
  {
    id: "prompt-world",
    title: "Prompt-World-Project",
    subtitle: "AI Prompt Marketplace & Management System",
    description: "A specialized web application for browsing, sharing, and organizing AI prompts with tag filtering, user collections, and prompt execution previews.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://prompt-world-client-theta.vercel.app",
    github: "https://github.com/fahim-ahmmed/-Prompt-World-Project",
    image: "/promtworld.png",
    caseStudy: {
      problem: "AI engineers and prompt creators need a structured platform to organize and share complex engineering prompts.",
      solution: "Created an interactive prompt sharing platform with category filtering, search features, and instant copy/preview capabilities.",
      features: [
        "Prompt Search & Category Filtering",
        "User Prompt Submission & Collections",
        "Responsive Grid Layout with Copy-to-Clipboard",
        "Backend Database Integration for Saved Prompts"
      ]
    }
  },
  {
    id: "docappoint",
    title: "DocAppoint",
    subtitle: "Doctor Appointment Booking Platform",
    description: "A full-stack healthcare platform enabling patients to search for specialist doctors, check real-time availability, and schedule appointments online.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS"],
    liveDemo: "https://doc-appoint-8rvk.vercel.app",
    github: "https://github.com/fahim-ahmmed/DocAppoint",
    image: "/doc-appoint.png",
    caseStudy: {
      problem: "Booking medical consultations often involves inefficient phone calls and unclear schedule visibility.",
      solution: "Developed a doctor booking portal with specialist filtering, date slot picker, and patient booking dashboard.",
      features: [
        "Doctor Specialist Search & Profile Views",
        "Interactive Date & Time Slot Selector",
        "Patient Dashboard for Appointments",
        "User Authentication & Status Updates"
      ]
    }
  },
  {
    id: "rootz",
    title: "Rootz",
    subtitle: "Modern Web Platform",
    description: "A responsive web application focused on clean UI architecture, dynamic routing, and streamlined content presentation.",
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://rootzfast.vercel.app",
    github: "https://github.com/fahim-ahmmed/Rootzfast-website",
    image: "/rootz.png",
    caseStudy: {
      problem: "Creating a modern digital presence with engaging UI components and layout stability.",
      solution: "Engineered a fast, responsive user interface with structured navigation and interactive layouts.",
      features: [
        "Modern Component Architecture",
        "Responsive Screen Adaptability",
        "Fast Page Load Performance"
      ]
    }
  },
  {
    id: "assainment-8",
    title: "Interactive Web Application",
    subtitle: "Frontend Feature & State Management Showcase",
    description: "An interactive web portal built to demonstrate complex UI state management, dynamic filtering, and interactive user actions.",
    tags: ["JavaScript", "React", "Tailwind CSS", "DaisyUI"],
    liveDemo: "https://assainment-8-two.vercel.app",
    github: "https://github.com/fahim-ahmmed/assainment-8",
    image: "/tiles.png",
    caseStudy: {
      problem: "Executing clean state management and responsive UI interactions for user dashboards.",
      solution: "Implemented dynamic state updates, item status toggles, and responsive dashboard controls.",
      features: [
        "Dynamic React State Management",
        "Interactive UI Status Toggles",
        "Fully Mobile-Responsive Cards & Forms"
      ]
    }
  },
  {
    id: "keenkeeper",
    title: "KeenKeeper",
    subtitle: "Friendship Management Platform",
    description: "A specialized web application designed for organizing, managing, and tracking personal relationships and key updates.",
    tags: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    liveDemo: "https://assainment-7-six.vercel.app",
    github: "https://github.com/fahim-ahmmed/KeenKeeper",
    image: "/project.png",
    caseStudy: {
      problem: "Users lack a centralized system to track interpersonal connections and milestones.",
      solution: "Built a modern dashboard using Next.js and Firebase where users can log updates and manage profiles.",
      features: ["Firebase Auth", "Interactive Dashboard", "Personal Contact Logging"]
    }
  },
  {
    id: "digitools",
    title: "DigiTools",
    subtitle: "Digital Tools E-commerce Platform",
    description: "A web showcase and e-commerce platform for digital items, utilities, and web services.",
    tags: ["Next.js", "React", "Tailwind CSS", "DaisyUI"],
    liveDemo: "https://assainment-8-two.vercel.app",
    github: "https://github.com/fahim-ahmmed/DigiTools",
    image: "/digitools.png",
    caseStudy: {
      problem: "Digital creators need an effective UI to showcase tools with seamless categorization.",
      solution: "Designed a clean e-commerce workflow with category filtering and item previews.",
      features: ["Filterable Tool Catalog", "Cart & Order Preview", "Dark Mode UI"]
    }
  },
  {
    id: "greencity",
    title: "Green-City",
    subtitle: "Environmental Awareness Portal",
    description: "An informative community website designed to raise awareness about eco-friendly urban living.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    liveDemo: "https://assainment-8-two.vercel.app",
    github: "https://github.com/fahim-ahmmed/Green-City",
    image: "/fahim3.png",
    caseStudy: {
      problem: "Lack of simple community platforms to promote local sustainability events.",
      solution: "Created a responsive web layout highlighting campaign goals and volunteer signup forms.",
      features: ["Clean Layout", "Volunteer Registration", "Event Showcase"]
    }
  }
];

export const whyHireMe = [
  { title: "Fast & Responsive", desc: "Optimized layouts that render smoothly across all device screens." },
  { title: "Clean Architecture", desc: "Maintainable, modular, and readable codebase following best practices." },
  { title: "Mobile First", desc: "Designed with mobile users in mind from the ground up." },
  { title: "Secure Development", desc: "Proper sanitization, env variables, and safe auth integrations." },
  { title: "Performance Focused", desc: "Fast loading times, optimized assets, and efficient React rendering." },
  { title: "Clear Communication", desc: "Transparent progress updates, responsive messaging, and collaboration." }
];