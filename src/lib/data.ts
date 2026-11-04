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
      "Backend and platform intern at Ninja Infosys (Sep – Nov 2025)",
      "Freelancing on web and mobile projects",
      "AWS Certified Solutions Architect – Associate (2025)",
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
    role: "Instructor, Software Fellowship",
    org: "LOCUS 2027, Pulchowk Campus",
    period: "2026",
    description:
      "Taught a session in the Software Fellowship at LOCUS, Pulchowk Campus's national technological festival, and received a Certificate of Appreciation as an instructor.",
    highlights: [
      "Day 7 of the Cloud Fellowship with the AWS Student Builder Group at IOE Pulchowk: AWS Cloud and Deployment, a hands-on session on cloud computing fundamentals.",
      "Built and presented the slides: the What, Why and How of cloud; cost, scale and global-reach benefits; IaaS, PaaS and SaaS; public, private and hybrid deployment; and AWS EC2 and S3.",
    ],
  },
  {
    role: "Event Manager",
    org: "IT Club, Pulchowk Campus",
    period: "Jun 2025 – May 2026",
    description:
      "Helped run technical events and learning sessions for the campus IT club.",
    highlights: [
      "Linux and cybersecurity: a 3-day hands-on workshop for beginners.",
      "Introduction to Engineering: helped run this five-day club session for new students.",
      "Git and GitHub: mentored participants at a 2-day workshop (with PDSC) for first-semester students, covering version control, branching, pull requests and the GitHub Student Developer Pack.",
    ],
  },
  {
    role: "Backend and Platform Intern",
    org: "Ninja Infosys",
    period: "Sep 2025 – Nov 2025",
    highlights: [] as string[],
    description:
      "Three-month hybrid internship in Kathmandu working on back-end web development and DevOps.",
  },
  {
    role: "Freelance full-stack developer",
    org: "Self-employed",
    period: "Present",
    description:
      "I take on client projects across the whole stack: React and Next.js on the front, Node.js, Express and Supabase on the back, PostgreSQL for data, and Flutter when it needs to be a phone app. I usually own a feature from the first sketch to deployment.",
    highlights: [
      "Janakpur Fish House (janakpurfishhouse.com): React and Node.js website for a Mithila-style fish restaurant in Kathmandu, with a menu, gallery, news and press section, contact form and a login-protected admin site for managing gallery photos and news.",
      "Hamro Bus: intercity bus booking site with search, a seat map and an operator admin dashboard.",
    ],
  },
];

export const achievements = [
  {
    title: "Winner, Tech Auction",
    event: "COESIS",
    year: "2026",
    detail: "Won first place with a team in a tech-bidding competition.",
  },
  {
    title: "1st Runner-Up, Telemedicine hackathon",
    event: "4th National Telemedicine & 1st National Digital Health Conference",
    year: "2026",
    detail:
      "Built the DDA Drug Registration Portal, a CTD dossier filing and review system for Nepal's Department of Drug Administration, as part of a four-person team.",
  },
  {
    title: "Nepal-US Hackathon",
    event: "Nepali Leaders Network",
    year: "2026",
    detail:
      "Built MindTune, a system that pairs wearable-device data with self-reported questionnaires to classify stress levels and recommend music.",
  },
  {
    title: "KU HackFest 2024",
    event: "Kathmandu University",
    year: "2024",
    detail:
      "Built Gantabya, a hiking and trekking platform for Nepal, in 48 hours.",
  },
];

export type ProjectSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  name: string;
  /** Shorter label for the desktop icon, when the name is too long to fit. */
  shortName?: string;
  /** One line under the title: when, who with, what kind of project. */
  meta: string;
  description: string;
  features: string[];
  /** Longer write-up shown below the feature list. */
  sections: ProjectSection[];
  tech: string[];
  github: string | null;
  demo: string | null;
  video: string | null; // YouTube video id
  /** Screenshots. `phone: true` shows them as narrow phone frames. */
  shots: { src: string; alt: string; phone?: boolean }[];
  color: [string, string];
  /** Optional real logo, shown on a white tile instead of a generic icon. */
  logo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "kanun-sathi",
    name: "कानुन साथी (Kanun Sathi)",
    meta: "Jan 2026 · Team of four · AI / full stack",
    description:
      "We built an AI legal companion for Nepali citizens. You ask a legal question in Nepali or English and get an answer grounded in the actual legal documents, with the source cited down to the page so you can check it yourself. Lawyers get their own dashboard to upload documents and research across them.",
    features: [
      "Chat in Nepali with answers that cite filename and page",
      "Retrieval-augmented generation over PDFs such as the Constitution of Nepal",
      "Lawyer dashboard: upload documents, select which to search, and ask questions",
      "Saved chat history, login and lawyer registration",
    ],
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Many young people in Nepal have no reliable way to check what the law actually says. They end up relying on social media or on relatives' personal experience. We wanted a tool where every answer can be traced back to a specific provision in a specific document, instead of a confident-sounding reply from a chatbot.",
        ],
      },
      {
        heading: "How it works",
        bullets: [
          "Legal PDFs (the Constitution, criminal and family law, transport regulations and so on) are uploaded and processed in the background by ARQ workers on Redis, so a large document never blocks the API.",
          "Each document is split into overlapping chunks (2,000 characters with 200 overlap) and turned into 768-dimension embeddings with Ollama's nomic-embed-text model. The vectors live in PostgreSQL using the pgvector extension.",
          "A question is matched against the stored chunks by similarity search. The best passages are passed to Gemini 2.5 Flash, which was chosen because it handled Nepali better than the local models we tried.",
          "The prompt forces the model to answer only from the retrieved context and to put a [filename, page X] citation after every fact. The interface pulls those out into a Sources card under the answer.",
        ],
      },
      {
        heading: "Frontend",
        paragraphs: [
          "A React and TypeScript app built with Vite and Tailwind CSS. It has a landing page with example questions, a chat view with a sidebar of saved conversations, answer and citation cards, login and sign-up, and a lawyer dashboard with My Documents, Legal Research, Clients and Profile sections. In Legal Research a lawyer ticks which uploaded documents to search, asks a question in Nepali or English, and gets an answer with sources and a history of past queries. Lawyer registration is its own feature module with validation schemas and tests.",
        ],
      },
      {
        heading: "Infrastructure",
        paragraphs: [
          "The whole stack runs from Docker Compose: the FastAPI service, PostgreSQL with pgvector, Redis and Ollama. The backend builds on the open-source Morphik Core RAG framework, which we configured for Nepali legal documents rather than writing the retrieval engine from scratch.",
        ],
      },
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "pgvector", "Redis", "Gemini", "Ollama", "Docker"],
    github: "https://github.com/Abhiyan31415/TechSprint_CharDevs",
    demo: null,
    video: null,
    shots: [
      { src: "/images/kanun-sathi-chat.webp", alt: "Kanun Sathi chat answering a Nepali question about dissolving parliament, with the Constitution cited as the source" },
      { src: "/images/kanun-sathi-lawyer.webp", alt: "Lawyer dashboard with document selection and a Nepali legal research question" },
    ],
    color: ["#fcd34d", "#b45309"],
    logo: "/images/kanun-sathi-logo.webp",
    featured: true,
  },
  {
    slug: "janakpur-fish-house",
    name: "Janakpur Fish House",
    meta: "Client project · Web · Live at janakpurfishhouse.com",
    description:
      "The website for Janakpur Fish House, a Mithila-style fish restaurant in Naxal, Kathmandu founded by BBC MasterChef finalist Chef Santosh Shah. It has a public site that presents the restaurant's story, menu, photos and press, and a login-protected admin site where the team uploads gallery photos and publishes news and press stories without touching code.",
    features: [
      "Menu of 18 dishes in five categories with prices, filterable by category",
      "Photo gallery with filters for dishes, guests, interior, open kitchen and team",
      "News and press section with a featured story and category filters",
      "About page with the founders' story, values and achievements",
      "Contact form with location, phone, email and opening hours",
      "Admin site with login to manage gallery photos and news and press",
    ],
    sections: [
      {
        heading: "What the restaurant needed",
        paragraphs: [
          "A new restaurant with a strong story (a BBC MasterChef finalist bringing Mithila fish cooking to Kathmandu) needed a site that could carry that story, show the food and the room, collect press coverage as it came in, and let staff keep it fresh without calling a developer.",
        ],
      },
      {
        heading: "The public site",
        bullets: [
          "Home, About, Menu, Gallery, News and Contact pages in React, with client-side routing and a branded 404 page.",
          "The menu lists each dish with its description, price and guest rating count, and filters by Starters, Special Fish Items, Main Course, Traditional Sides and Drinks.",
          "The gallery groups photos from the opening ceremony, the open kitchen and the team, and filters by category.",
          "The news page has a featured story, press coverage, chef updates, restaurant news and events, each filterable.",
        ],
      },
      {
        heading: "The admin site",
        bullets: [
          "A separate login-protected admin for the restaurant's team, backed by a Node.js API and a database.",
          "Staff upload gallery photos (image uploads handled by the server) and write, edit and publish news and press stories.",
          "Changes show up on the public site without a redeploy.",
        ],
      },
    ],
    tech: ["React", "Node.js", "Database", "Image uploads", "Authentication"],
    github: null,
    demo: "https://janakpurfishhouse.com",
    video: null,
    shots: [{ src: "/images/janakpur-fish-house.webp", alt: "Janakpur Fish House homepage with the founder chef and links to the menu and gallery" }],
    color: ["#fdba74", "#c2410c"],
    logo: "/images/janakpur-fish-house-logo.webp",
    featured: true,
  },
  {
    slug: "dda-drug-portal",
    name: "DDA Drug Registration Portal",
    shortName: "DDA Portal",
    meta: "Jan 2026, revamped Nov 2026 · Team of four · Full stack",
    description:
      "A portal for filing and reviewing drug registration dossiers with Nepal's Department of Drug Administration. Applicants file a dossier split into the five modules of the ICH Common Technical Document, reviewers assess each module and raise queries, and a lead reviewer assigns the work and makes the final decision. We built it as team Char Devs at the hackathon of the 4th National Telemedicine & 1st National Digital Health Conference, where it placed 1st runner-up.",
    features: [
      "Product registration and a step-by-step dossier wizard for CTD Modules 1–5",
      "Reviewer queue with a module review page, assessment checklist and queries",
      "Lead reviewer board to assign modules, track reviewer workload and issue the final decision",
      "Role-based access with JWT for applicants, reviewers, lead reviewers and admins",
      "Public patient information leaflet lookup on the landing page",
    ],
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Registering a drug in Nepal means sending the DDA a large dossier, and reviewing it involves several assessors working on different parts at once. We wanted one place where an applicant can see exactly which part of their dossier is stuck and why, and where the lead reviewer can see who is working on what.",
        ],
      },
      {
        heading: "Applicants",
        bullets: [
          "Register a product with its brand and generic name, ATC code, strength, dosage form, route and type (NDA, ANDA, API or biological).",
          "File a dossier through a step-by-step wizard that only asks for the CTD modules the product type needs, with document uploads. Save it as a draft or submit it to the DDA.",
          "Track every application module by module, and answer reviewer queries with extra documents from the submission page.",
        ],
      },
      {
        heading: "Reviewers and the lead reviewer",
        bullets: [
          "Reviewers get a queue of the modules assigned to them. The review page shows the uploaded documents, the applicant's declared data and the query history next to a checklist, and the reviewer approves the module, keeps it under review or rejects it.",
          "Raising a query moves both the module and the submission to Query raised; once the applicant answers, they move back to Under review.",
          "The lead reviewer has a review board with filters for submissions that need assignment, have open queries or are ready for a decision. They assign modules to reviewers and can see each reviewer's workload. Final approval only unlocks when every module is approved, and a rejection needs a reason.",
          "Module 3 quality data (active ingredients, excipients, formulas, manufacturing process, stability and packaging) is modelled in the database, not just attached as PDFs.",
        ],
      },
      {
        heading: "The revamp",
        paragraphs: [
          "The hackathon version worked for a demo but trusted whoever the request headers said you were. In November 2026 I went back and made it something I'd be comfortable deploying.",
        ],
        bullets: [
          "JWT authentication with role guards on every route (APPLICANT, REVIEWER, LEAD_REVIEWER, ADMIN) and ownership checks so applicants only see their own data. Identity now only comes from the token.",
          "Status transitions are enforced on the server, so a draft can't be approved and a submission can't be submitted twice.",
          "Removed a database credential that had been committed to the repo.",
          "Uploads go to local disk in development, or to Vercel Blob when a token is set.",
          "An idempotent seed script creates demo data covering every status, Postgres runs from Docker Compose, and GitHub Actions runs CI.",
          "A redesigned UI with a shared design system, one-click demo accounts on the sign-in page and layouts that work on phones.",
        ],
      },
      {
        heading: "Stack",
        paragraphs: [
          "The frontend is React 19 and TypeScript with Vite, Tailwind CSS v4 and React Router, with typed API clients sharing one fetch helper. The backend is Node.js and Express 5 in TypeScript, with Prisma 7 on PostgreSQL, a REST API under /api/v1 split into routes per resource, and Multer for uploads.",
        ],
      },
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT", "Docker", "GitHub Actions"],
    github: "https://github.com/Abhiyan31415/char-devs-telemedicine",
    demo: null,
    video: null,
    shots: [
      { src: "/images/dda-portal-lead-reviewer.webp", alt: "Lead reviewer board with active submissions, CTD module progress and each reviewer's workload" },
      { src: "/images/dda-portal-applicant.webp", alt: "Applicant portal with open reviewer queries and a table of applications by status" },
      { src: "/images/dda-portal-module-review.webp", alt: "Module 3 quality review with the uploaded documents, an assessment checklist and the approve, keep under review and reject decisions" },
      { src: "/images/dda-portal-submission.webp", alt: "Submission page for Amoxinep 250 with open queries, Module 1 documents and module-by-module review progress" },
    ],
    color: ["#60a5fa", "#1e3a5f"],
    featured: true,
  },
  {
    slug: "gantabya",
    name: "Gantabya",
    meta: "Started at KU HackFest 2024 · Team project · Full stack",
    description:
      "A travel companion for group trips and treks in Nepal. People publish trails with a start, a destination and checkpoints, browse them on a map, organise trips and talk to the people on a trip in a live chat room.",
    features: [
      "Interactive map with clustered trails and driving routes drawn through checkpoints",
      "Trail creator with checkpoints, price, difficulty and photo uploads",
      "Trip events with participants and a real-time chat room per event",
      "Accounts with protected pages, so only signed-in users can publish trails",
    ],
    sections: [
      {
        heading: "Where it came from",
        paragraphs: [
          "Gantabya started as a 48-hour entry at KU HackFest 2024: a hyperlocal platform for hikers and trekkers in Nepal, built around trails, checkpoints and chat. It has since grown into a deployed full-stack app.",
        ],
      },
      {
        heading: "Trails and the map",
        bullets: [
          "The map uses Mapbox GL through react-map-gl. Trail markers are clustered with Supercluster so the map stays readable when there are many trails.",
          "Selecting a trail asks the Mapbox Directions API for a route from the start, through every checkpoint, to the destination and draws it on the map. Start and end coordinates are reverse-geocoded into place names.",
          "A sidebar searches places with a geocoder and filters trails with a price slider.",
        ],
      },
      {
        heading: "Adding a trail",
        paragraphs: [
          "Publishing a trail is a three-step form: details (title, description, price, difficulty), images (drag and drop with per-file progress bars), then locations (start, destination and any number of described checkpoints picked on the map).",
        ],
      },
      {
        heading: "Events and real-time chat",
        paragraphs: [
          "Trips are modelled as events with dates, a location and a list of participants. Every event has its own Socket.IO room. Messages are saved to PostgreSQL as they are sent and loaded when someone joins, so the history survives a refresh.",
        ],
      },
      {
        heading: "Backend",
        bullets: [
          "Node.js 20 and Express 4 with ES modules, split into routes, controllers and middleware.",
          "Registration and login with bcrypt (cost 12) and 1-day JWTs; an auth middleware guards protected routes, and the frontend wraps pages in a Protected component.",
          "PostgreSQL schema for users, trails, events and messages. Coordinates and checkpoints are stored as JSONB and participants as an array; messages have an index on event and time.",
          "Image uploads through Multer, limited to 1 MB and JPEG or PNG only, served back as absolute URLs.",
          "A CORS allow-list, a /health endpoint that checks the database, and a Dockerfile on node:20-alpine.",
        ],
      },
      {
        heading: "Migration and deployment",
        paragraphs: [
          "The backend started on MongoDB and was later moved to PostgreSQL behind a mapper layer, so the existing React frontend kept working unchanged, and the ngrok tunnel used during development was dropped. The React and Vite frontend is deployed on Netlify with a single-page-app redirect rule, and the API runs on its own server behind a domain.",
        ],
      },
    ],
    tech: ["React", "Vite", "Material UI", "Mapbox GL", "Node.js", "Express", "Socket.IO", "PostgreSQL", "JWT"],
    github: "https://github.com/Abhiyan31415/Elsendero",
    demo: "https://elsendero.netlify.app",
    video: null,
    shots: [{ src: "/images/gantabya.webp", alt: "Gantabya map view with trails and travellers across Nepal" }],
    color: ["#34d399", "#059669"],
    featured: true,
  },
  {
    slug: "cognicare",
    name: "CogniCare",
    meta: "Nov 2024 · Team of five · Mobile + backend",
    description:
      "A mobile app that helps people living with dementia and the people caring for them get through the day more safely. Caretakers manage medicines, appointments, notes and a safe zone around home; patients get a simple home screen, one-tap emergency contacts and a friendly voice companion to talk to.",
    features: [
      "Caretaker tools for medicines, appointments, notes and emergency contacts",
      "Live patient location on a map with a circular safe zone and an alert when the patient leaves it",
      "Patient home screen with reminders and one-tap emergency calling",
      "Voice and text companion that listens, answers and speaks back",
    ],
    sections: [
      {
        heading: "Two apps in one",
        paragraphs: [
          "Dementia care involves two very different users, so the Flutter app has two separate experiences after login. The caretaker side is a dashboard for managing someone else's day. The patient side is deliberately small and calm: large controls, today's medicines, appointments and notes, and a way to call for help.",
        ],
      },
      {
        heading: "Caretaker side",
        bullets: [
          "Add and edit the patient's medicines (name, dosage, frequency), appointments and reminder notes, which then appear on the patient's screens.",
          "Set an emergency contact for the patient.",
          "See the patient's live position on an OpenStreetMap-based map (flutter_map), place the patient's home with a draggable marker and set the radius of the safe zone around it.",
        ],
      },
      {
        heading: "Patient side and safety",
        bullets: [
          "A background service keeps reporting the patient's location while the app is closed. Each update goes to the backend's geofence endpoint, which replies whether the patient is outside the safe zone; if they are, the app plays an alert.",
          "Home, medicines, appointments and notes screens fetch the patient's data from the API; emergency contact calling uses the phone dialler.",
        ],
      },
      {
        heading: "Voice companion",
        paragraphs: [
          "The companion is meant to reduce loneliness and confusion. The phone streams microphone audio over a WebSocket to the Django backend, which forwards it to Deepgram for live speech-to-text. The transcript goes to a Groq-hosted language model, via LangChain, with a system prompt that keeps replies gentle and simple, and the answer is spoken back with Deepgram text-to-speech. The app also has a typed chat built on a chat UI package.",
        ],
      },
      {
        heading: "Backend",
        bullets: [
          "Django 4.2 with Django REST Framework and token authentication.",
          "A custom user model with Caretaker and Patient subclasses; a caretaker can be linked to several patients. Patient records hold medicines, appointments and notes as JSON fields that are validated on save, along with coordinates, a home location and a safe-zone radius.",
          "A contacts app with photo uploads, and Django Channels WebSocket consumers for chat and speech transcription.",
          "The API is documented as a Bruno request collection.",
        ],
      },
    ],
    tech: ["Flutter", "Dart", "Django", "Django REST Framework", "WebSockets", "Deepgram", "Groq"],
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
    slug: "hamro-bus",
    name: "Hamro Bus",
    meta: "Oct 2024 · Team project · Web, built in a few days",
    description:
      "An intercity bus booking site for Nepal. Passengers search for buses by origin, destination and travel date and pick seats on a seat map; bus operators get an admin area to register, add buses and watch ticket numbers on a dashboard.",
    features: [
      "Search buses by origin, destination and date",
      "Seat map with available, booked and selected seats",
      "Admin registration and login",
      "Operator dashboard with charts and a form to add new buses",
    ],
    sections: [
      {
        heading: "Passenger side",
        bullets: [
          "A home page and a search page that posts the route and date to the API and renders each matching bus with its route number, departure and arrival time, price and seats left.",
          "Each result opens a seat map where free seats can be toggled as selected and booked seats are locked.",
          "Supporting pages for managing a booking, a blog, an FAQ and a contact form.",
        ],
      },
      {
        heading: "Operator side",
        bullets: [
          "Registration and login for operators. Passwords are hashed with bcrypt in a Mongoose pre-save hook and sessions use 1-hour JWTs.",
          "A dashboard with Chart.js doughnut charts of booked versus remaining tickets, tables of buses, and an add-new-bus form.",
        ],
      },
      {
        heading: "Backend",
        paragraphs: [
          "A Node.js and Express server that also serves the HTML, CSS and JavaScript pages. MongoDB with Mongoose stores buses (route number, departure and arrival time, seats, price, origin, destination and travel date). A REST API supports listing, adding, updating and deleting buses, plus a search endpoint that filters by origin, destination and date with input validation.",
        ],
      },
    ],
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JavaScript", "Chart.js", "Bootstrap", "JWT"],
    github: "https://github.com/Abhiyan31415/HamroBus",
    demo: null,
    video: null,
    shots: [],
    color: ["#fdba74", "#ea580c"],
    featured: false,
  },
  {
    slug: "evolutionary-creatures",
    name: "Evolutionary Creatures",
    meta: "Jun – Aug 2024 · Team of two · C++ simulation",
    description:
      "A simulation written in C++ where virtual creatures with small neural-network brains reproduce, mutate and compete. Leave it running and new species with different brain wiring appear, get protected for a while so they can improve, and either take over or die out.",
    features: [
      "Genetic algorithm with selection, mutation and reproduction",
      "Neural-network brains whose connections evolve",
      "Species tracking, with protection for new species",
      "Two challenges: reach the sides of the map, or chase moving food",
      "Live visualisation of the population",
    ],
    sections: [
      {
        heading: "How the creatures think",
        paragraphs: [
          "Each creature has a small neural network with four inputs, four hidden neurons and two outputs, using tanh activation. Instead of all 24 possible connections being active, each brain starts with only six randomly chosen ones. Mutation changes the connection weights and, sometimes, which connections exist, so brains can grow different shapes over generations.",
        ],
      },
      {
        heading: "Evolution and species",
        paragraphs: [
          "A population of 500 creatures lives on a 100 by 100 grid for 400 steps per generation, for 100 generations, with a 15% mutation rate. Creatures are scored by a fitness function, the best are kept as parents and the rest of the next generation is bred from them. When a mutation changes a brain's wiring, the creature is labelled a new species and shielded from selection for a few generations, so a promising design is not wiped out before it has had time to improve.",
        ],
      },
      {
        heading: "Two modes",
        bullets: [
          "Right-Left: creatures are rewarded for reaching the right side of the map at one age and the left side at a later age.",
          "Food Chaser: creatures must follow and reach a randomly moving food block.",
          "The code is written with C++ templates and inheritance: a base Individual class with RightLeft and FoodChaser subclasses, and a GeneticAlgorithm class templated over the creature type with a fitness function for each.",
        ],
      },
      {
        heading: "Visualisation",
        paragraphs: [
          "An SDL2 window renders the population every ten generations and replays the best creature at the end, along with its weights, active connections and movement history in the console.",
        ],
      },
    ],
    tech: ["C++", "SDL2", "Neural networks", "Genetic algorithms"],
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
    year: "2025",
    featured: true,
    badge: "aws",
    credentialId: "80067a2875d04a8fa86c452360df623c",
  },
  {
    name: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI",
    year: "2025",
    featured: false,
    credentialId: "8UP0SLCJU76N",
  },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI, Stanford University",
    year: "2023",
    featured: false,
    credentialId: "BECT6AHXWAWN",
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
  Languages: ["JavaScript", "TypeScript", "Python", "C++", "Dart", "SQL", "Go (learning)"],
  Frontend: ["React", "Next.js", "Vite", "React Router", "Tailwind CSS", "Material UI"],
  "Backend & APIs": ["Node.js", "Express", "FastAPI", "Django REST Framework", "Supabase", "REST APIs", "Socket.IO / WebSockets", "JWT auth", "Redis"],
  Databases: ["PostgreSQL", "pgvector", "MongoDB"],
  "AI & data": ["RAG / LLM APIs", "Embeddings & vector search", "Speech-to-text (Deepgram)", "Machine learning", "Genetic algorithms"],
  "Cloud & DevOps": ["AWS (EC2, S3)", "Docker & Compose", "Linux", "Netlify", "VM deployment & Nginx", "Git & GitHub"],
  "Mobile & maps": ["Flutter", "Firebase", "Mapbox GL", "OpenStreetMap"],
  "Design & collaboration": ["Figma", "Canva", "Teaching & mentoring", "Event & team management"],
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
  projects: ["Kanun Sathi, Janakpur Fish House, DDA Drug Registration Portal, Gantabya, CogniCare, Hamro Bus, Evolutionary Creatures"],
  skills: ["TypeScript, Python, React, Node.js, FastAPI, PostgreSQL, Flutter, AWS, Docker, Linux"],
  certifications: ["AWS Certified Solutions Architect – Associate"],
  resume: ["Resume: " + profile.resumeUrl],
  github: ["GitHub: " + profile.github],
  linkedin: ["LinkedIn: " + profile.linkedin],
  contact: ["Email: " + profile.email],
  clear: [],
};
