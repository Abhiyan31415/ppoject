export const profile = {
  name: "Abhiyan Khanal",
  role: "Full-stack developer",
  tagline:
    "I build web and mobile apps end to end, from the database schema to the button you tap. Lately I've been spending more time on the backend and the cloud side of things.",
  subtitle: "Computer Engineering student at Pulchowk Campus, Lalitpur",
  location: "Lalitpur, Nepal",
  availability: "Open to freelance work and internships",
  email: "abhiyankhanal7@gmail.com",
  github: "https://github.com/Abhiyan31415",
  linkedin: "https://www.linkedin.com/in/abhiyan-khanal-4406b2248/",
  resumeUrl: "/resume.pdf",
  photo: "/images/me.webp",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const aboutCards = [
  {
    title: "Hi there",
    type: "text",
    content:
      "I'm a computer engineering student in Lalitpur who got hooked on building things that people actually use. Most of my work is JavaScript and TypeScript on the web, Flutter on mobile, and PostgreSQL underneath. I care about code that's easy for the next person to read, and apps that don't make users think too hard.",
  },
  {
    title: "Right now",
    type: "list",
    content: [
      "Studying at IOE Pulchowk Campus (2023 – )",
      "Freelancing on web and mobile projects",
      "Recently passed the AWS Solutions Architect – Associate exam",
      "Picking up Go and reading about system design",
    ],
  },
  {
    title: "Things I like working on",
    type: "tags",
    content: [
      "Backend & APIs",
      "Database design",
      "Cloud infrastructure",
      "Maps & location apps",
      "Applied AI",
      "Open source",
    ],
  },
];

export const experience = [
  {
    role: "Freelance full-stack developer",
    period: "Now",
    description:
      "I take on client projects across the whole stack: React and Next.js on the front, Node.js, Express and Supabase on the back, PostgreSQL for data, and Flutter when it needs to be a phone app. Projects have ranged from a bus ticketing system (Hamro Bus) to general-purpose web platforms. I usually own a feature from the first sketch to deployment.",
  },
];

export type Project = {
  slug: string;
  name: string;
  description: string;
  features: string[];
  tech: string[];
  github: string;
  demo: string | null;
  video: string | null; // YouTube video id
  /** Screenshots. `phone: true` shows them as narrow phone frames. */
  shots: { src: string; alt: string; phone?: boolean }[];
  color: [string, string];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "gantabya",
    name: "Gantabya",
    description:
      "A travel companion for group trips between cities in Nepal. Everyone in the group can chat, see the planned trail on a map, and check the weather and nearby facilities along the way.",
    features: [
      "Maps and trails built on OpenStreetMap",
      "In-app group chat",
      "Weather along the route",
      "Nearby facilities (fuel, food, hospitals)",
    ],
    tech: ["React", "Node.js", "OpenStreetMap", "PostgreSQL"],
    github: "https://github.com/Abhiyan31415/Elsendero",
    demo: "https://elsendero.netlify.app",
    video: null,
    shots: [{ src: "/images/gantabya.webp", alt: "Gantabya map view with trails and travellers across Nepal" }],
    color: ["#34d399", "#059669"],
    featured: true,
  },
  {
    slug: "hamro-bus",
    name: "Hamro Bus",
    description:
      "Booking an intercity bus in Nepal usually means calling around or showing up at the counter. Hamro Bus lets passengers browse buses, pick a seat and pay online, while operators manage schedules and bookings from an admin panel.",
    features: [
      "Seat selection and online payment",
      "Admin panel for bus operators",
      "Live booking management",
    ],
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/Abhiyan31415/HamroBus",
    demo: null,
    video: null,
    shots: [],
    color: ["#fdba74", "#ea580c"],
    featured: false,
  },
  {
    slug: "cognicare",
    name: "CogniCare",
    description:
      "A team project: a mobile app that helps people living with dementia, and the people caring for them, get through the day a bit more safely.",
    features: [
      "Medication reminders",
      "Real-time location sharing with caregivers",
      "Emergency alerts",
      "Caregiver chat",
    ],
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/anujpaude1/dementia",
    demo: null,
    video: "HMn-qJ0zs5c",
    shots: [
      { src: "/images/cognicare-caregiver.webp", alt: "Caregiver profile with the active patient and a geofence alert", phone: true },
      { src: "/images/cognicare-map.webp", alt: "Live location of the patient on a map", phone: true },
      { src: "/images/cognicare-chat.webp", alt: "Chat with the built-in AI companion", phone: true },
    ],
    color: ["#f9a8d4", "#db2777"],
    featured: false,
  },
  {
    slug: "evolutionary-creatures",
    name: "Evolutionary Creatures",
    description:
      "A team side project: virtual creatures with small neural-network brains reproduce, mutate and compete. Leave it running long enough and new species show up and push out the old ones.",
    features: [
      "Genetic algorithm for reproduction and mutation",
      "Neural-network brains that evolve over generations",
      "New species emerge and compete",
    ],
    tech: ["Python"],
    github: "https://github.com/ankitrajmehta/genetic_algo",
    demo: null,
    video: null,
    shots: [],
    color: ["#c4b5fd", "#7c3aed"],
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
    year: "2024",
    featured: false,
  },
  {
    name: "Developing Backend Apps with Node.js & Express",
    issuer: "IBM / Coursera",
    year: "2023",
    featured: false,
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "C++", "Go (learning)"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Flutter"],
  Backend: ["Node.js", "Express", "Supabase", "REST APIs"],
  Databases: ["PostgreSQL", "MongoDB"],
  "Tools & cloud": ["Git", "Docker", "Linux", "AWS"],
};

export const terminalCommands: Record<string, string[]> = {
  help: [
    "things you can type:",
    "  about, projects, skills, certifications",
    "  resume, github, linkedin, contact",
    "  clear",
  ],
  about: [
    "Abhiyan Khanal, Lalitpur, Nepal",
    "Computer engineering student at Pulchowk.",
    "I build web and mobile apps, mostly full stack.",
  ],
  projects: ["Gantabya, Hamro Bus, CogniCare, Evolutionary Creatures"],
  skills: ["TypeScript, Python, React, Node.js, PostgreSQL, Flutter, AWS"],
  certifications: ["AWS Certified Solutions Architect – Associate"],
  resume: ["Resume: " + profile.resumeUrl],
  github: ["GitHub: " + profile.github],
  linkedin: ["LinkedIn: " + profile.linkedin],
  contact: ["Email: " + profile.email],
  clear: [],
};
