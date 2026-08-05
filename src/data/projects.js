const projects = [
  {
    id: 1,
    slug: "doctor-appointment-manager",

    featured: true,

    title: "Doctor Appointment Manager",

    category: "Full Stack",

    thumbnail: "/images/projects/doctor-appointment/cover.png",

    images: [
      "/images/projects/doctor-appointment/1.png",
      "/images/projects/doctor-appointment/2.png",
      "/images/projects/doctor-appointment/3.png",
    ],

    shortDescription:
      "A modern doctor appointment booking platform where patients can book appointments and doctors can manage schedules.",

    description:
      "Doctor Appointment Manager is a complete healthcare solution developed with Next.js, Node.js, Express.js and MongoDB. Users can authenticate securely, book appointments, manage profiles and doctors can monitor schedules from a personalized dashboard.",

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],

    features: [
      "Authentication",
      "Doctor Dashboard",
      "Appointment Booking",
      "Profile Management",
      "Responsive Design",
    ],

    challenges: [
      "Preventing double booking",
      "Managing authentication flow",
      "Optimizing dashboard performance",
    ],

    futurePlans: [
      "Online payment gateway",
      "Video consultation",
      "Doctor rating system",
    ],

    github:
      "https://github.com/fahim-ahmmed",

    live:
      "https://your-live-link.com",
  },

  {
    id: 2,

    slug: "portfolio",

    featured: false,

    title: "Developer Portfolio",

    category: "Frontend",

    thumbnail: "/images/projects/portfolio/cover.png",

    shortDescription:
      "Modern Portfolio built with Next.js.",

    technologies: [
      "Next.js",
      "Tailwind",
      "Framer Motion",
    ],

    github: "",

    live: "",
  },

  {
    id: 3,

    slug: "ecommerce",

    featured: false,

    title: "E-Commerce",

    category: "Full Stack",

    thumbnail: "/images/projects/ecommerce/cover.png",

    shortDescription:
      "Modern shopping platform.",

    technologies: [
      "React",
      "MongoDB",
      "Express",
    ],

    github: "",

    live: "",
  },
];

export default projects;