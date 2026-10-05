// ============================================================
// data.js — Edit this file to update your portfolio content.
// No need to touch index.html for content changes.
// ============================================================

const PORTFOLIO = {

  // ----------------------------------------------------------
  // HERO
  // ----------------------------------------------------------
  hero: {
    name:       "Sayandeep Saha",
    title:      "Computer Science Undergraduate",
    bio:        "Analytical problem-solver with strong foundations in Java, Python, and full-stack development. Experienced in building scalable backend systems and production-ready applications, with a knack for leading teams and shipping within tight timelines.",
    available:  true,   // controls the "Available for Opportunities" badge
    email:      "sayandeep.saha.official@gmail.com",
    resumePdf:  "resume.pdf",
  },

  // ----------------------------------------------------------
  // ABOUT — paragraph text + contact chips
  // ----------------------------------------------------------
  about: {
    paragraphs: [
      "I'm a final-year B.Tech Computer Science student at Techno International New Town, Kolkata, graduating in 2026. My work spans backend engineering, full-stack web development, and cross-platform app development.",
      "I enjoy translating real-world problems into clean, efficient software — whether that's a healthcare management system, a community reporting platform, or a pathfinding visualizer built purely out of curiosity.",
      "Outside of academic work, I've interned at NexYug Tech and led a team to first place at the PRAYAS 2k25 Hackathon. I'm actively seeking full-time or internship roles where I can contribute meaningfully from day one.",
    ],

    // chips shown below the about text
    chips: [
      { label: "Email",           href: "mailto:sayandeep.saha.official@gmail.com", icon: "email"    },
      { label: "GitHub",          href: "https://github.com/EveningLantern",         icon: "github"   },
      { label: "LinkedIn",        href: "https://linkedin.com/in/sayandeep-saha",    icon: "linkedin" },
      { label: "+91 89025 21309", href: "tel:+918902521309",                          icon: "phone"    },
    ],

    // Technical Skills tags
    skills: [
      "Java", "Python", "React JS", "Node.js", "Express",
      "MongoDB", "Flutter", "Firebase", "REST APIs", "Socket.io",
      "Git / GitHub", "DBMS", "Data Structures", "HTML / CSS / JS",
    ],
  },

  // ----------------------------------------------------------
  // EXPERIENCE
  // ----------------------------------------------------------
  experience: [
    {
      role:   "Flutter Development Intern",
      org:    "NexYug Tech",
      date:   "Jun – Jul 2024 · Remote",
      bullets: [
        "Developed and deployed a Windows desktop spreadsheet application using Flutter.",
        "Implemented structured data handling and validation logic for scalable UI workflows.",
        "Delivered a production-ready system within a 45-day development cycle.",
      ],
    },
    {
      role:   "Team Lead",
      org:    "PRAYAS 2k25 Hackathon — VistaLex",
      date:   "2025 · Kolkata",
      bullets: [
        "Led a 4-member team to build an accessibility platform using React.",
        "Coordinated development tasks and delivered a cohesive product under hackathon constraints.",
        "Secured 1st place among all competing teams.",
      ],
    },
  ],

  // ----------------------------------------------------------
  // PROJECTS
  // ----------------------------------------------------------
  projects: [
    {
        year:  "2026",
        name:  "AI video splitter with AWS bucket integration",
        type:  "AI / Cloud Computing",
        desc:  "CLERK authentication and authorization integrated with neon db. Implemented INGEST pipeline for video uploading. "

    },
    {
      year:  "2024",
      name:  "Village Health",
      type:  "Healthcare Management System",
      desc:  "Backend-driven healthcare platform built with Node.js and Express. Features role-based authentication, real-time notifications via Socket.io, and structured MongoDB storage.",
      link:  "",   // optional: GitHub or live URL
    },
    {
      year:  "2024",
      name:  "Auto Parts Pro",
      type:  "Backend System Development",
      desc:  "Robust backend for an automotive parts catalog. Efficient REST APIs with optimized MongoDB queries supporting filtering, sorting, and full CRUD operations at scale.",
      link:  "",
    },
    {
      year:  "2023",
      name:  "GrowGrid",
      type:  "Community Reporting Platform",
      desc:  "Cross-platform community reporting app built with Flutter and Firebase. Authentication, real-time data updates, and scalable state management.",
      link:  "",
    },
    {
      year:  "2025",
      name:  "Pathfinding Visualizer",
      type:  "Java / JavaFX — Algorithm Visualizer",
      desc:  "Interactive visualizer implementing BFS, DFS, Dijkstra's, and A* on a grid. Built with JavaFX for smooth real-time rendering with weighted terrain and stats panel.",
      link:  "",
    },
    {
      year:  "2025",
      name:  "VistaLex",
      type:  "Accessibility Platform · React",
      desc:  "Hackathon-winning accessibility platform built with React. Led a 4-member team to deliver a cohesive product, securing 1st place at PRAYAS 2k25.",
      link:  "",
    },
  ],

  // ----------------------------------------------------------
  // CERTIFICATES — add objects here when you have them
  // ----------------------------------------------------------
  certificates: [
    // { icon: "🏅", name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "Jan 2025", link: "" },
  ],

  // ----------------------------------------------------------
  // TECH STACK
  // ----------------------------------------------------------
  techStack: [
    {
      category: "Languages",
      items: [
        { name: "Java",       color: "#f89820" },
        { name: "Python",     color: "#3572A5" },
        { name: "JavaScript", color: "#f1e05a" },
        { name: "HTML / CSS", color: "#e44b23" },
        { name: "Dart",       color: "#00B4AB" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React JS", color: "#61dafb" },
        { name: "Flutter",  color: "#02569B" },
      ],
    },
    {
      category: "Backend & Databases",
      items: [
        { name: "Node.js",    color: "#68a063" },
        { name: "Express",    color: "#444444" },
        { name: "MongoDB",    color: "#4DB33D" },
        { name: "Firebase",   color: "#FFCA28" },
        { name: "SQL / DBMS", color: "#336791" },
        { name: "Socket.io",  color: "#010101" },
      ],
    },
    {
      category: "Tools & Concepts",
      items: [
        { name: "Git / GitHub",     color: "#f05032" },
        { name: "VS Code",          color: "#007acc" },
        { name: "REST APIs",        color: "#b07d52" },
        { name: "Data Structures",  color: "#4a5263" },
        { name: "SDLC",             color: "#4a5263" },
      ],
    },
  ],

  // ----------------------------------------------------------
  // EDUCATION
  // ----------------------------------------------------------
  education: [
    {
      degree:  "B.Tech — Computer Science & Engineering",
      inst:    "Techno International New Town",
      detail:  "2022 – 2026",
      score:   "CGPA: 7.77",
    },
    {
      degree:  "Class 12 — CBSE, Science PCM",
      inst:    "Aditya Academy",
      detail:  "2022",
      score:   "87%",
    },
    {
      degree:  "Class 10 — CBSE",
      inst:    "Aditya Academy",
      detail:  "2020",
      score:   "91%",
    },
  ],

  // ----------------------------------------------------------
  // ACHIEVEMENTS
  // ----------------------------------------------------------
  achievements: [
    { icon: "🏆", text: "Winner — PRAYAS 2k25 Hackathon" },
    { icon: "💻", text: "Winner — Intra College Coding Competition" },
    { icon: "🎙️", text: "Winner — Intra College Debate Competition" },
  ],

  // ----------------------------------------------------------
  // CONNECT LINKS (footer contact section)
  // ----------------------------------------------------------
  connect: [
    {
      name:    "LinkedIn",
      handle:  "Let's connect professionally",
      href:    "https://linkedin.com/in/sayandeep-saha",
      iconBg:  "#e8f0fb",
      icon:    "linkedin",
    },
    {
      name:    "GitHub",
      handle:  "@EveningLantern",
      href:    "https://github.com/EveningLantern",
      iconBg:  "#f0f0f0",
      icon:    "github",
    },
    {
      name:    "Email",
      handle:  "sayandeep.saha.official@gmail.com",
      href:    "mailto:sayandeep.saha.official@gmail.com",
      iconBg:  "#fdecea",
      icon:    "email",
    },
    {
      name:    "WhatsApp",
      handle:  "+91 89025 21309",
      href:    "https://wa.me/918902521309",
      iconBg:  "#e7f8ee",
      icon:    "whatsapp",
    },
  ],
};