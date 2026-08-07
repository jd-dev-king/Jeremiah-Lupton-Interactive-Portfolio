export const projects = [
  {
    title: "EES Universal Data Moon",
    category: "data",
    version: "v1.0.0",
    featured: true,
    status: "Enterprise Data Integration & Governance",
    description:
      "Enterprise data integration, discovery, governance, and SQL platform connecting operational systems across the EES ecosystem through a shared PostgreSQL data architecture and governed API.",
    tech: ["PostgreSQL", "FastAPI", "React", "Railway", "Data Governance"],
    kpis: ["8 Active EES Systems", "Governed Read-Only SQL", "Shared Data Platform"],
    live: "https://jd-dev-king.github.io/EES-Universal-Data-Moon/",
    github: "https://github.com/jd-dev-king/EES-Universal-Data-Moon",
    accent: "cyan",
    icon: "database",
    liveLabel: "Launch Data Moon"
  },
  {
    title: "EES Power Grid Sun",
    category: "automation",
    version: "v1.0.0",
    featured: true,
    status: "Industrial Power Digital Twin",
    description:
      "Industrial electrical infrastructure digital twin modeling facility power distribution, loads, power quality, energy behavior, diagnostics, and downstream electrical context for connected EES systems.",
    tech: ["Digital Twin", "Power Systems", "PostgreSQL", "Diagnostics", "Simulation"],
    kpis: ["Power Distribution", "Load Intelligence", "Connected Diagnostics"],
    live: "https://jd-dev-king.github.io/EES-Power-Grid-Sun/",
    github: "https://github.com/jd-dev-king/EES-Power-Grid-Sun",
    accent: "orange",
    icon: "automation",
    liveLabel: "Launch Power Grid Sun"
  },
  {
    title: "EES RC Controls",
    category: "automation",
    version: "v2.0.0",
    featured: true,
    status: "Electrical Controls & Diagnostics Twin",
    description:
      "Electrical controls and transient-analysis digital twin combining standalone RC circuit simulation with connected industrial diagnostics and upstream power context from EES Power Grid Sun.",
    tech: ["Controls", "MATLAB", "Simulation", "Diagnostics", "Digital Twin"],
    kpis: ["Transient Analysis", "Connected Power Context", "Fault Diagnostics"],
    live: "https://jd-dev-king.github.io/EES-RC-Controls/",
    github: "https://github.com/jd-dev-king/EES-RC-Controls",
    accent: "blue",
    icon: "circuit",
    liveLabel: "Launch RC Controls"
  },
  {
    title: "EES Global Supply Nexus",
    category: "data",
    version: "v1.0.0",
    featured: true,
    status: "Enterprise Supply Chain Digital Twin",
    description:
      "Supply-to-production digital twin connecting procurement, material requirements, warehousing, logistics, production readiness, quality release, and enterprise supply-chain visibility.",
    tech: ["React", "FastAPI", "Supply Chain", "Risk Analytics", "Digital Twin"],
    kpis: ["Global Procurement", "Material Planning", "Production Readiness"],
    live: "https://jd-dev-king.github.io/EES-Global-Supply-Nexus/",
    github: "https://github.com/jd-dev-king/EES-Global-Supply-Nexus",
    accent: "cyan",
    icon: "database",
    liveLabel: "Launch Supply Nexus"
  },
  {
    title: "EES Pharma Process Twin",
    category: "manufacturing",
    version: "v2.0.0",
    featured: true,
    status: "Pharmaceutical MES & Digital Twin",
    description:
      "End-to-end pharmaceutical manufacturing digital twin modeling material flow, weighing, mixing, hold operations, packaging, QA, PLC behavior, faults, security, and production traceability.",
    tech: ["React", "FastAPI", "MES", "PLC / SCADA", "Digital Twin"],
    kpis: ["Electronic Batch Records", "Plant Execution", "Production Traceability"],
    live: "https://jd-dev-king.github.io/EES-Pharma-Process-Twin/",
    github: "https://github.com/jd-dev-king/EES-Pharma-Process-Twin",
    accent: "lime",
    icon: "factory",
    liveLabel: "Launch Process Twin"
  },
  {
    title: "EES Pharma Parking Access Digital Twin",
    category: "automation",
    version: "v3.0.0",
    featured: true,
    status: "Campus Access & Parking Digital Twin",
    description:
      "Pharmaceutical campus parking and access-control digital twin integrating employee and visitor identity, automated entry logic, PLC-inspired controls, occupancy tracking, and enterprise data services.",
    tech: ["Three.js", "FastAPI", "PostgreSQL", "Access Control", "Digital Twin"],
    kpis: ["Employee Access", "Visitor Workflow", "Live Occupancy"],
    live: "https://jd-dev-king.github.io/EES-Pharma-Parking-Access-Digital-Twin/",
    github: "https://github.com/jd-dev-king/EES-Pharma-Parking-Access-Digital-Twin",
    accent: "blue",
    icon: "plc",
    liveLabel: "Launch Parking Access Twin"
  },
  {
    title: "EES Manufacturing Intelligence",
    category: "data",
    version: "v3.0.0",
    featured: true,
    status: "Unified Manufacturing Intelligence",
    description:
      "Unified manufacturing intelligence platform combining production analytics, asset health, KPI monitoring, anomaly detection, reporting automation, and operational decision support.",
    tech: ["R", "Shiny", "PostgreSQL", "Analytics", "Automation"],
    kpis: ["Production KPIs", "Asset Health", "Anomaly Intelligence"],
    live: "https://jd-dev-king.github.io/EES-Manufacturing-Intelligence/",
    github: "https://github.com/jd-dev-king/EES-Manufacturing-Intelligence",
    accent: "orange",
    icon: "pulse",
    liveLabel: "Launch Manufacturing Intelligence"
  },
  {
    title: "EES Pharma Data Nexus",
    category: "data",
    version: "v2.0.0",
    featured: true,
    status: "Data Moon-Connected 3D Data Experience",
    description:
      "3D pharmaceutical data architecture and SQL exploration environment connected to EES Universal Data Moon for live schema discovery, table metadata, record inspection, and governed database analysis.",
    tech: ["PostgreSQL", "SQL", "Three.js", "Data Moon", "cGMP"],
    kpis: ["Live Pharma Schema", "Governed SQL", "3D Data Architecture"],
    live: "https://jd-dev-king.github.io/Pharma-Data-Nexus/",
    github: "https://github.com/jd-dev-king/Pharma-Data-Nexus",
    accent: "lime",
    icon: "database",
    liveLabel: "Launch Pharma Data Nexus"
  },
  {
    title: "EES Serverless SQL Studio",
    category: "data",
    version: "v2.0.0",
    featured: true,
    status: "Dual-Mode SQL Workbench",
    description:
      "Dual-mode SQL analytics workbench supporting private browser-native DuckDB analysis and governed live exploration of enterprise PostgreSQL data through EES Universal Data Moon.",
    tech: ["DuckDB-Wasm", "Monaco", "ECharts", "Vite", "Data Moon"],
    kpis: ["Local DuckDB", "Live Data Moon", "CSV + Parquet"],
    live: "https://jd-dev-king.github.io/Serverless-SQL-Studio/",
    github: "https://github.com/jd-dev-king/Serverless-SQL-Studio",
    accent: "blue",
    icon: "database",
    liveLabel: "Launch SQL Studio"
  },
  {
    title: "EES Smart Assistant AI",
    category: "ai",
    version: "v3.0.0",
    featured: true,
    status: "EES Conversational Intelligence",
    description:
      "Multi-interface AI assistant and conversational intelligence layer connecting software automation, local capabilities, APIs, persistent context, and the broader EES information architecture.",
    tech: ["Python", "Tkinter", "PWA", "JavaScript", "AI"],
    kpis: ["Desktop + Web", "Persistent Context", "EES Integration"],
    live: "https://jd-dev-king.github.io/SmartAssistantAI/",
    github: "https://github.com/jd-dev-king/SmartAssistantAI",
    accent: "violet",
    icon: "ai",
    liveLabel: "Launch Smart Assistant AI"
  },
  {
    title: "NeuralBrief Text Summarizer",
    category: "ai",
    version: "v1.0.0",
    featured: false,
    status: "Standalone NLP Application",
    description:
      "Flask-based text summarization platform with a responsive frontend, document processing workflow, and GitHub Pages presentation site.",
    tech: ["Python", "Flask", "NLP", "Gensim", "JavaScript"],
    kpis: ["Text Analysis", "Web API", "Responsive UI"],
    live: "https://jd-dev-king.github.io/NeuralBrief-Text-Summarizer/",
    github: "https://github.com/jd-dev-king/NeuralBrief-Text-Summarizer",
    accent: "violet",
    icon: "document",
    liveLabel: "Launch NLP Experience"
  },
  {
    title: "Trivia Madness",
    category: "software",
    version: "v2.0",
    featured: false,
    status: "Standalone Web + Desktop Application",
    description:
      "Cross-platform trivia experience available as both a responsive web application and a Java Swing desktop application, with solo and multiplayer gameplay, persistent leaderboards, themes, and live question integration.",
    tech: ["JavaScript", "Java", "Swing", "SQLite", "Open Trivia DB"],
    kpis: ["Web + Desktop", "Solo + Multiplayer", "Persistent Leaderboards"],
    live: "https://jd-dev-king.github.io/Trivia-Madness-Game/",
    github: "https://github.com/jd-dev-king/Trivia-Madness-Game",
    accent: "orange",
    icon: "game",
    liveLabel: "Launch Trivia Experience"
  },
  {
    title: "GitSafe Practice Lab",
    category: "software",
    version: "v1.1.0",
    featured: false,
    status: "Standalone Interactive Git Lab",
    description:
      "Live Git training demonstration with simulated remotes, teammate updates, rejected pushes, merge conflicts, recovery workflows, and command-line practice.",
    tech: ["Python", "Flask", "Git", "Developer Tools", "Education"],
    kpis: ["Conflict Simulation", "Remote Workflows", "Guided Recovery"],
    live: "https://jd-dev-king.github.io/GitSafe-Practice-Lab/",
    github: "https://github.com/jd-dev-king/GitSafe-Practice-Lab",
    accent: "lime",
    icon: "git",
    liveLabel: "Launch Interactive Lab"
  }
];
