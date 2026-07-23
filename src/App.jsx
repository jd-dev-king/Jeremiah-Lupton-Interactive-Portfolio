import { useEffect, useMemo, useState } from "react";
import { projects } from "./data/projects";
import { timeline } from "./data/timeline";
import { capabilities } from "./data/capabilities";
import "./styles/styles.css";

const accents = {
  cyan: "#39d8ff",
  blue: "#397eff",
  lime: "#a9ff44",
  violet: "#a778ff",
  orange: "#ffb14a"
};

const icons = {
  factory: "▦", quality: "✓", database: "DB", ai: "AI",
  automation: "↯", pulse: "⌁", shield: "◇", plc: "PLC",
  document: "TXT", game: "◆", circuit: "RC", git: "Git"
};

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Counter({ target, suffix = "" }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const duration = 1300;
    let frame;
    const tick = now => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);
  return <>{value}{suffix}</>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a className="brand" href="#top" aria-label="Return to top">
          <span className="brand-orbit"><span>JL</span></span>
          <span className="brand-copy"><strong>Jeremiah Lupton</strong><small>Engineering × Data × Automation</small></span>
        </a>
        <button className="menu-button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span><span className="sr-only">Toggle navigation</span>
        </button>
        <nav id="main-nav" className={`main-nav ${open ? "open" : ""}`}>
          <a href="#top" onClick={() => setOpen(false)}>About</a>
          <a href="#work" onClick={() => setOpen(false)}>Projects</a>
          <a href="#capabilities" onClick={() => setOpen(false)}>Capabilities</a>
          <a href="#journey" onClick={() => setOpen(false)}>Journey</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a className="nav-button" href="https://github.com/jd-dev-king" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid-lines" aria-hidden="true"></div>
      <div className="hero-orb orb-one" aria-hidden="true"></div>
      <div className="hero-orb orb-two" aria-hidden="true"></div>
      <div className="shell hero-layout">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="live-dot"></span> Building practical systems that make work smarter</p>
          <h1>Engineering ideas into <span className="gradient-text">interactive solutions.</span></h1>
          <p className="hero-intro">I connect manufacturing operations, process improvement, data analytics, automation, and software development to turn complex problems into clear, measurable, and engaging digital experiences.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore Projects <span>↓</span></a>
            <a className="button secondary" href="#contact">Start a Conversation</a>
            <a className="button resume-button" href="/docs/Jeremiah-Lupton-Resume.pdf" download>Download Resume <span>⇩</span></a>
          </div>
          <div className="hero-proof">
            <div><strong><Counter target={12} suffix="+"/></strong><span>Portfolio projects</span></div>
            <div><strong><Counter target={5}/></strong><span>Technical disciplines</span></div>
            <div><strong><Counter target={4}/></strong><span>Academic degrees</span></div>
          </div>
        </div>
        <div className="experience-badge-card reveal">
          <div className="badge-halo halo-one"></div><div className="badge-halo halo-two"></div>
          <div className="badge-ring"><div className="badge-core">
            <span className="badge-over">OVER</span>
            <strong className="experience-count"><Counter target={20} suffix="+"/></strong>
            <span className="badge-years">YEARS</span>
          </div></div>
          <p className="badge-title">Professional Experience</p>
          <p className="badge-copy">Across technology, software, data, automation, operations, quality, laboratory work, leadership, and advanced manufacturing.</p>
          <div className="badge-achievements"><span>Engineering</span><span>Manufacturing</span><span>Data</span><span>Automation</span></div>
          <div className="badge-footer"><span>1998</span><i></i><span>Present</span></div>
        </div>
      </div>
      <a className="scroll-cue" href="#work" aria-label="Scroll to selected work"><span></span></a>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const key = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", key);
    document.body.classList.add("modal-open");
    return () => {
      window.removeEventListener("keydown", key);
      document.body.classList.remove("modal-open");
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && onClose()}>
      <section className="project-modal open" role="dialog" aria-modal="true" aria-label={`${project.title} details`}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-inner">
          <p className="eyebrow">{project.category} · {project.version}</p>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="modal-kpis">{project.kpis.map(k => <div key={k}>{k}</div>)}</div>
          <div className="modal-tech">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
          {project.modalNotice && (
            <div className="modal-notification" role="status">
              <span className="modal-notification-dot"></span>
              <div><strong>{project.modalNotice}</strong><p>{project.modalNoticeDetail}</p></div>
            </div>
          )}
          <div className="modal-actions">
            {project.live && project.live !== "#" && <a className="button primary" href={project.live} target="_blank" rel="noreferrer">{project.liveLabel || "Open Live Project"}</a>}
            {project.github && project.github !== "#" && <a className="button secondary" href={project.github} target="_blank" rel="noreferrer">GitHub Repository</a>}
          </div>
        </div>
      </section>
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const visible = useMemo(() => projects.filter(project => {
    const category = filter === "all" || project.category === filter;
    const haystack = [project.title, project.description, project.category, ...project.tech, ...project.kpis].join(" ").toLowerCase();
    return category && haystack.includes(query.toLowerCase());
  }), [filter, query]);

  return (
    <section className="section projects-section" id="work">
      <div className="shell">
        <div className="section-heading projects-heading reveal">
          <div><p className="eyebrow">02 · Selected Work</p><h2>Projects built to be explored, not just listed.</h2></div>
          <p>Filter by discipline, search by technology, or open a project for its key outcomes.</p>
        </div>
        <div className="project-controls reveal">
          <div className="filter-group">
            {["all","manufacturing","data","automation","ai","software"].map(item => (
              <button key={item} className={`filter ${filter === item ? "active" : ""}`} onClick={() => setFilter(item)}>
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          <label className="search-box"><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search projects or technology" /></label>
        </div>
        <div className="featured-label reveal"><span>Featured builds</span><i></i></div>
        <div className="project-grid">
          {visible.map(project => (
            <article className="project-card reveal" key={project.title} style={{"--card-accent": accents[project.accent] || accents.cyan}}>
              <div className="project-top"><span className="project-icon">{icons[project.icon] || "◆"}</span><span className="project-version">{project.version}</span></div>
              <div className="project-content">
                <span className="project-status">{project.status}</span>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-kpis">{project.kpis.map(k => <span key={k}>{k}</span>)}</div>
                <div className="project-tech">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
              </div>
              <div className="project-actions">
                {project.live && project.live !== "#"
                  ? <a className="live-link" href={project.live} target="_blank" rel="noreferrer">{project.liveLabel || "Open Live Project"} ↗</a>
                  : <button onClick={() => setSelected(project)}>View Details</button>}
                {project.github && project.github !== "#"
                  ? <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                  : <button onClick={() => setSelected(project)}>More</button>}
              </div>
            </article>
          ))}
        </div>
        {visible.length === 0 && <div className="empty-state"><strong>No matching projects</strong><p>Try another category or search term.</p></div>}
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function Capabilities() {
  const [active, setActive] = useState("manufacturing");
  const content = capabilities[active];
  const labels = {manufacturing:"Manufacturing",data:"Data",automation:"Automation",software:"Software",leadership:"Leadership"};
  return (
    <section className="section capabilities" id="capabilities">
      <div className="shell">
        <div className="section-heading reveal"><p className="eyebrow">03 · Capabilities</p><h2>A multidisciplinary toolkit for real-world improvement.</h2></div>
        <div className="capability-layout">
          <div className="capability-map glass reveal">
            <div className="map-center"><span>JL</span><small>Systems Builder</small></div>
            {Object.keys(labels).map((key, i) => (
              <button key={key} className={`map-node node-${["one","two","three","four","five"][i]} ${active === key ? "active" : ""}`} onClick={() => setActive(key)}>
                <span>{labels[key]}</span>
              </button>
            ))}
            <div className="map-ring ring-one"></div><div className="map-ring ring-two"></div>
          </div>
          <article className="capability-detail glass reveal">
            <span className="detail-number">{content.number}</span>
            <p className="eyebrow">{content.label}</p><h3>{content.title}</h3><p>{content.body}</p>
            {content.skills.map(skill => <div className="skill-meter" key={skill[0]}><div><span>{skill[0]}</span><strong>{skill[1]}</strong></div><i style={{"--skill":skill[2]}}></i></div>)}
          </article>
        </div>
        <div className="tool-cloud reveal">
          {[
            "Python",
            "Java",
            "R",
            "MATLAB",
            "SQL/NOSQL",
            "C",
            "PostgreSQL",
            "Flask",
            "HTML/CSS/JS",
            "OpenPLC",
            "Leadership",
            "GitHub Actions",
            "Docker",
            "Power BI Concepts",
            "Git",
            "GMP/SOP",
            "IQ/OQ/PQ",
            "SCADA",
            "PLC",
            "Quality Assurance",
            "ETL Pipeline",
            "Manufacturing",
            "Cloud",
            "Analytics",
            "Engineering",
            "Lean Six Sigma",
            "Automation",
            "KPIs",
            "CAPA",
            "Kubernetes/Terraform",
            "CI/CD",
            "Change Control",
            "Data Visualization",
            "Data Analysis",
            "Data Engineering",
            "Preventive/Corrective Actions",
            "Technical Documentation"
          ].map(tool => <span key={tool}>{tool}</span>)}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="section journey" id="journey">
      <div className="shell">
        <div className="section-heading reveal"><p className="eyebrow">04 · Journey</p><h2>Education, service, and technical growth.</h2></div>
        <div className="timeline">
          {timeline.map((item, index) => (
            <article className="timeline-card reveal" key={`${item.year}-${item.title}-${index}`}>
              <div className="timeline-marker"><span>{item.year}</span></div>
              <div className="timeline-content glass">
                <span className={`timeline-status ${item.className}`}>{item.type}</span>
                <h3>{item.title}</h3><p className="timeline-subtitle">{item.subtitle}</p><p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="shell">
        <div className="contact-panel reveal">
          <div className="contact-copy"><p className="eyebrow">05 · Contact</p><h2>Let’s build something useful.</h2><p>I am interested in engineering, process optimization, data analytics, automation, technical leadership, quality assurance, and cross-functional improvement opportunities.</p></div>
          <div className="contact-actions">
            <a className="contact-link primary-contact" href="mailto:jeremiah.lupton@comcast.net"><span>Send an email</span><strong>jeremiah.lupton@comcast.net</strong><i>↗</i></a>
            <a className="contact-link" href="https://www.linkedin.com/in/jdlupton" target="_blank" rel="noreferrer"><span>Connect professionally</span><strong>LinkedIn</strong><i>↗</i></a>
            <a className="contact-link" href="https://github.com/jd-dev-king" target="_blank" rel="noreferrer"><span>Explore the code</span><strong>GitHub</strong><i>↗</i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useReveal();
  useEffect(() => {
    const glow = document.querySelector(".cursor-glow");
    const move = e => { if (glow) { glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`; }};
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="noise" aria-hidden="true"></div><div className="cursor-glow" aria-hidden="true"></div>
      <Header />
      <main id="main"><Hero /><Projects /><Capabilities /><Journey /><Contact /></main>
      <footer className="site-footer"><div className="shell footer-layout"><div><strong>Jeremiah Lupton</strong><p>Engineering systems. Visualizing improvement. Building what’s next.</p></div><div><span>© {new Date().getFullYear()}</span><a href="#top">Back to top ↑</a></div></div></footer>
    </>
  );
}
