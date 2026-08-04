export const profile = {
  name: "Abhiyan Khanal",
  role: "Full Stack Software Developer",
  tagline:
    "Building scalable software,\ndeveloper tools,\nand intelligent systems.",
  subtitle: "Computer Engineering Student @ IOE Pulchowk Campus",
  focus: "Building scalable software and cloud-ready systems",
  learning: ["AWS", "Artificial Intelligence", "Go", "System Design"],
  availability: "Available for opportunities",
  email: "abhiyan.khanal@example.com",
  github: "https://github.com/abhiyan-khanal",
  linkedin: "https://linkedin.com/in/abhiyan-khanal",
  resumeUrl: "/resume.pdf", // place a PDF in public/ or link to external
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const aboutCards = [
  {
    title: "About Me",
    type: "text",
    content:
      "I am a full-stack software developer with a strong foundation in building scalable web applications, backend services, and developer-focused tools. My primary technologies include JavaScript, TypeScript, Python, and Go. I enjoy designing clean, maintainable systems that balance performance, scalability, and an intuitive user experience.",
  },
  {
    title: "Currently",
    type: "list",
    content: [
      "Computer Engineering Student",
      "AWS Certified Solutions Architect – Associate",
      "Exploring Artificial Intelligence",
      "Building Developer Tools",
    ],
  },
  {
    title: "Interests",
    type: "tags",
    content: [
      "Backend Engineering",
      "System Design",
      "Distributed Systems",
      "AI Applications",
      "Open Source",
      "Developer Experience",
    ],
  },
];

export const experience = [
  {
    role: "Freelance Full Stack Developer",
    period: "Present",
    description:
      "Work across React, Node.js, Express, PostgreSQL, Flutter, Supabase and modern web technologies to develop scalable applications and production-ready systems for clients.",
  },
  // add more if needed
];

export const projects = [
  {
    slug: "gantabya",
    name: "Gantabya",
    description: "Travel companion application.",
    features: [
      "OpenStreetMap integration",
      "Group chat",
      "Weather",
      "Facilities tracking",
      "Trail definition",
    ],
    tech: ["React", "Node", "OpenStreetMap", "PostgreSQL"],
    github: "https://github.com/yourusername/gantabya",
    demo: "https://gantabya.example.com",
    featured: true,
  },
  {
    slug: "hamro-bus",
    name: "Hamro Bus",
    description: "Intercity bus booking platform.",
    features: ["Ticket booking", "Seat selection", "Admin dashboard", "Payment integration"],
    tech: ["React", "Node", "Express", "PostgreSQL"],
    github: "https://github.com/yourusername/hamro-bus",
    demo: null,
    featured: false,
  },
  {
    slug: "cognicare",
    name: "CogniCare",
    description: "Dementia assistance application.",
    features: ["Medication reminders", "Emergency alerts", "Live location", "Caregiver communication"],
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/yourusername/cognicare",
    demo: null,
    featured: false,
  },
  {
    slug: "evolutionary-creatures",
    name: "Evolutionary Creatures Simulation",
    description: "Genetic Algorithms, Artificial Life, Neural Networks, Evolution Simulation.",
    features: ["Genetic Algorithms", "Artificial Life", "Neural Networks", "Evolution Simulation"],
    tech: ["Python"],
    github: "https://github.com/yourusername/evolutionary-creatures",
    demo: null,
    featured: false,
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: "2026",
    featured: true,
    badge: "aws",
    credentialId: "80067a2875d04a8fa86c452360df623c",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    year: "2025",
    featured: false,
  },
  {
    name: "Annual Nepal AI School",
    issuer: "AI Nepal",
    year: "2025",
    featured: false,
  },
  {
    name: "Developing Backend Apps with Node.js & Express",
    issuer: "IBM / Coursera",
    year: "2024",
    featured: false,
  },
];

export const skills = {
  Programming: ["JavaScript", "TypeScript", "Python", "Go", "C++"],
  Frontend: ["React", "Next.js", "Tailwind", "Flutter"],
  Backend: ["Node.js", "Express", "Supabase", "REST APIs"],
  Databases: ["PostgreSQL", "SQL", "MongoDB"],
  Tools: ["Docker", "Git", "GitHub", "Linux"],
  Cloud: ["AWS"],
};

export const devMetrics = {
  languages: ["JavaScript", "TypeScript", "Python", "Go"],
  focus: ["Backend", "Full Stack", "Cloud", "AI"],
  learning: ["AWS", "System Design", "LLMs", "Distributed Systems"],
};

export const terminalCommands: Record<string, string[]> = {
  help: [
    "Available Commands",
    "about",
    "projects",
    "skills",
    "certifications",
    "resume",
    "github",
    "linkedin",
    "contact",
    "clear",
  ],
  about: ["Abhiyan Khanal", "Computer Engineering Student @ IOE Pulchowk Campus"],
  projects: ["Gantabya", "Hamro Bus", "CogniCare", "Evolutionary Creatures Simulation"],
  skills: ["JavaScript, TypeScript, Python, Go, React, Next.js, Node, AWS"],
  certifications: ["AWS Certified Solutions Architect – Associate"],
  resume: ["Resume URL: " + profile.resumeUrl],
  github: ["GitHub: " + profile.github],
  linkedin: ["LinkedIn: " + profile.linkedin],
  contact: ["Email: " + profile.email],
  clear: [], // special case handled in Terminal component
};