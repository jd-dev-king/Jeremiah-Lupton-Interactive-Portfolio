export const projects = [
  {
    title: "EES Global Supply Nexus",
    category: "data",
    version: "v1.0.0",
    featured: true,
    status: "Enterprise Supply Chain Digital Twin",
    description:
      "Enterprise-scale supply chain platform connecting procurement, suppliers, inventory, logistics, production planning, risk intelligence, and manufacturing handoff through an interactive command center.",
    tech: ["React", "FastAPI", "Supply Chain", "Risk Analytics", "Digital Twin"],
    kpis: ["Global Procurement", "Material Planning", "Supplier Visibility"],
    live: "https://jd-dev-king.github.io/EES-Global-Supply-Nexus/",
    github: "https://github.com/jd-dev-king/EES-Global-Supply-Nexus",
    accent: "cyan",
    icon: "database",
    liveLabel: "Launch Supply Nexus"
  },
  {
    title: "EES Pharma Process Twin",
    category: "manufacturing",
    version: "v1.0.0",
    featured: true,
    status: "Pharmaceutical MES & Digital Twin",
    description:
      "Pharmaceutical manufacturing execution platform spanning warehouse operations, bulk receiving, weighing, mixing, QA, packaging, shipping, EBR compliance, PLC/SCADA monitoring, historian analytics, and an immersive 3D plant twin.",
    tech: ["React", "FastAPI", "MES", "PLC / SCADA", "Digital Twin"],
    kpis: ["Electronic Batch Records", "Plant Execution", "Live Operations"],
    live: "https://jd-dev-king.github.io/EES-Pharma-Process-Twin/",
    github: "https://github.com/jd-dev-king/EES-Pharma-Process-Twin",
    accent: "lime",
    icon: "factory",
    liveLabel: "Launch Process Twin"
  },
  {
    title: "Serverless SQL Studio",
    category: "data",
    version: "v1.0.1",
    featured: true,
    status: "Browser SQL IDE",
    description:
      "A client-side SQL environment for loading CSV and Parquet files, querying with DuckDB-Wasm, and building interactive visualizations without a backend.",
    tech: [
      "DuckDB-Wasm",
      "Monaco",
      "ECharts",
      "Vite",
      "JavaScript"
    ],
    kpis: [
      "Zero Server",
      "CSV + Parquet",
      "Interactive Charts"
    ],
    live:
      "https://jd-dev-king.github.io/Serverless-SQL-Studio/",
    github:
      "https://github.com/jd-dev-king/Serverless-SQL-Studio",
    accent: "blue",
    icon: "database",
    liveLabel: "Launch SQL Studio"
  },
  {
    title: "Smart Assistant AI",
    category: "ai",
    version: "v2.2",
    featured: true,
    status: "Desktop + Web",
    description:
      "A multi-capability assistant with persistent memory, voice output, system tools, knowledge integrations, and a progressive web interface.",
    tech: [
      "Python",
      "Tkinter",
      "PWA",
      "JavaScript",
      "APIs"
    ],
    kpis: [
      "Desktop App",
      "Web PWA",
      "Persistent Memory"
    ],
    live:
      "https://jd-dev-king.github.io/SmartAssistantAI/",
    github:
      "https://github.com/jd-dev-king/SmartAssistantAI",
    accent: "violet",
    icon: "ai",
    liveLabel: "Launch AI Experience"
  },
  {
    title: "Manufacturing Operations Intelligence",
    category: "automation",
    version: "v2.0.0",
    featured: true,
    status: "Automated Analytics",
    description:
      "R-based manufacturing analytics pipeline with automated KPI reporting, dashboard outputs, logging, scheduled workflows, and process-improvement reporting.",
    tech: [
      "R",
      "RStudio",
      "GitHub Actions",
      "Shiny",
      "Analytics"
    ],
    kpis: [
      "Automated Pipeline",
      "Scheduled Reports",
      "Operations KPIs"
    ],
    live:
      "https://jd-dev-king.github.io/Manufacturing-Operations-Intelligence-Automation/",
    github:
      "https://github.com/jd-dev-king/Manufacturing-Operations-Intelligence-Automation",
    accent: "orange",
    icon: "automation",
    liveLabel: "Launch Operations Intelligence"
  },
  {
    title: "Asset Health Analytics",
    category: "data",
    version: "v1.0.0",
    featured: false,
    status: "Predictive Analytics",
    description:
      "PostgreSQL and R analytics project for equipment-health monitoring, anomaly detection, machine-performance trends, and manufacturing diagnostics.",
    tech: [
      "PostgreSQL",
      "R",
      "DBeaver",
      "Analytics",
      "Visualization"
    ],
    kpis: [
      "Sensor Data",
      "Anomaly Detection",
      "Equipment Health"
    ],
    live:
      "https://jd-dev-king.github.io/Manufacturing-Asset-Health-Analytics/",
    github:
      "https://github.com/jd-dev-king/Manufacturing-Asset-Health-Analytics",
    accent: "cyan",
    icon: "pulse",
    liveLabel: "Launch Analytics Experience"
  },
  {
    title: "Pharma Data Nexus",
    category: "data",
    version: "v1.0.0",
    featured: false,
    status: "Live 3D Data Experience",
    description:
      "An immersive 3D pharmaceutical data environment presenting cGMP master data, batch records, quality control, equipment calibration, ALCOA+ traceability, and SQL workflows.",
    tech: [
      "PostgreSQL",
      "pgAdmin",
      "SQL",
      "Three.js",
      "cGMP",
      "ALCOA+"
    ],
    kpis: [
      "4 Data Pillars",
      "3D Systems View",
      "Live SQL Case Study"
    ],
    live:
      "https://jd-dev-king.github.io/Pharma-Data-Nexus/",
    github:
      "https://github.com/jd-dev-king/Pharma-Data-Nexus",
    accent: "lime",
    icon: "database",
    liveLabel: "Launch 3D Data Experience"
  },
  {
    title: "3D Parking PLC Simulator",
    category: "automation",
    version: "v2.0.0",
    featured: false,
    status: "3D PLC Digital Twin",
    description:
      "A browser-based 3D parking PLC simulator with a continuous scan cycle, animated barriers and vehicles, live occupancy logic, holographic HMI controls, interlocks, diagnostics, and ladder/FBD views.",
    tech: [
      "Three.js",
      "JavaScript",
      "OpenPLC",
      "Structured Text",
      "HMI",
      "Digital Twin"
    ],
    kpis: [
      "100 ms Scan Cycle",
      "10 Parking Spaces",
      "Live 3D HMI"
    ],
    live:
      "https://jd-dev-king.github.io/Car-Parking-Lot-Barrier-Controller/",
    github:
      "https://github.com/jd-dev-king/Car-Parking-Lot-Barrier-Controller",
    accent: "blue",
    icon: "plc",
    liveLabel: "Launch 3D Simulator"
  },
  {
    title: "NeuralBrief Text Summarizer",
    category: "ai",
    version: "v1.0.0",
    featured: false,
    status: "NLP Application",
    description:
      "Flask-based text summarization platform with a responsive frontend, document processing workflow, and GitHub Pages presentation site.",
    tech: [
      "Python",
      "Flask",
      "NLP",
      "Gensim",
      "JavaScript"
    ],
    kpis: [
      "Text Analysis",
      "Web API",
      "Responsive UI"
    ],
    live:
      "https://jd-dev-king.github.io/NeuralBrief-Text-Summarizer/",
    github:
      "https://github.com/jd-dev-king/NeuralBrief-Text-Summarizer",
    accent: "violet",
    icon: "document",
    liveLabel: "Launch NLP Experience"
  },
  {
    title: "Trivia Madness",
    category: "software",
    version: "v2.0",
    featured: false,
    status: "Web + Desktop Application",
    description:
      "A cross-platform trivia experience available as both a responsive web application and a Java Swing desktop application. Features solo and multiplayer gameplay, animated interfaces, persistent leaderboards, customizable themes, live question integration, and mobile-friendly design.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Java",
      "Swing",
      "SQLite",
      "Maven",
      "Open Trivia DB"
    ],
    kpis: [
      "Web + Desktop",
      "Solo + Multiplayer",
      "Persistent Leaderboards"
    ],
    live:
      "https://jd-dev-king.github.io/Trivia-Madness-Game/",
    github:
      "https://github.com/jd-dev-king/Trivia-Madness-Game",
    accent: "orange",
    icon: "game",
    liveLabel: "Launch Trivia Experience"
  },
  {
    title: "RC Circuit Simulator",
    category: "software",
    version: "v1.0.0",
    featured: false,
    status: "MATLAB Simulation",
    description:
      "Interactive MATLAB App Designer simulation for resistor-capacitor charging and discharging, time-constant analysis, plotting, and circuit visualization.",
    tech: [
      "MATLAB",
      "App Designer",
      "Simulation",
      "Data Analysis"
    ],
    kpis: [
      "Interactive Inputs",
      "Transient Curves",
      "Exportable Plots"
    ],
    live:
      "https://jd-dev-king.github.io/RC-Circuit-Transient-Response-Simulator/",
    github:
      "https://github.com/jd-dev-king/RC-Circuit-Transient-Response-Simulator",
    accent: "cyan",
    icon: "circuit",
    liveLabel: "Launch Simulation"
  },
  {
    title: "GitSafe Practice Lab",
    category: "software",
    version: "v1.1.0",
    featured: false,
    status: "Live Interactive Demo",
    description:
      "Live Git training demonstration with simulated remotes, teammate updates, rejected pushes, merge conflicts, recovery workflows, and command-line practice. The complete hosted user experience is planned for Railway.",
    tech: [
      "Python",
      "Flask",
      "Git",
      "Developer Tools",
      "Education"
    ],
    kpis: [
      "Conflict Simulation",
      "Remote Workflows",
      "Railway Full Experience Planned"
    ],
    live:
      "https://jd-dev-king.github.io/GitSafe-Practice-Lab/",
    github:
      "https://github.com/jd-dev-king/GitSafe-Practice-Lab",
    accent: "lime",
    icon: "git",
    liveLabel: "Launch Interactive Lab"
  }
];
