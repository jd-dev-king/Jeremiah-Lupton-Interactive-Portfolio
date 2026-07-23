(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const accentMap = {
    cyan: "#39d8ff",
    blue: "#397eff",
    lime: "#a9ff44",
    violet: "#a778ff",
    orange: "#ffb14a"
  };

  const iconMap = {
    factory: "▦",
    quality: "✓",
    database: "DB",
    ai: "AI",
    automation: "↯",
    pulse: "⌁",
    shield: "◇",
    plc: "PLC",
    document: "TXT",
    game: "◆",
    circuit: "RC",
    git: "Git"
  };

  const capabilityContent = {
    manufacturing: {
      number: "01",
      label: "Manufacturing & Process",
      title: "Improve flow, quality, reliability, and operational visibility.",
      body: "DMAIC, 5S, root-cause analysis, OEE, FMEA, CAPA, cGMP, value-stream mapping, process capability, and structured change control.",
      skills: [["Process improvement", "Advanced", "92%"], ["Technical communication", "Advanced", "90%"]]
    },
    data: {
      number: "02",
      label: "Data & Analytics",
      title: "Convert operational data into decisions people can act on.",
      body: "SQL, PostgreSQL, R, Python, dashboard design, KPI development, anomaly detection, data storytelling, and manufacturing intelligence.",
      skills: [["Data analysis", "Advanced", "89%"], ["Database design", "Strong", "84%"]]
    },
    automation: {
      number: "03",
      label: "Automation & Controls",
      title: "Build repeatable workflows from the plant floor to the cloud.",
      body: "OpenPLC, structured-text logic, GitHub Actions, scheduled reporting, workflow automation, Docker, Modbus concepts, and systems integration.",
      skills: [["Workflow automation", "Strong", "86%"], ["Industrial controls", "Growing", "75%"]]
    },
    software: {
      number: "04",
      label: "Software Development",
      title: "Create usable applications that make technical work engaging.",
      body: "Python, Flask, Java Swing, JavaScript, responsive web interfaces, MATLAB App Designer, REST APIs, local-first tools, and GitHub Pages.",
      skills: [["Application development", "Strong", "87%"], ["Front-end experience", "Strong", "85%"]]
    },
    leadership: {
      number: "05",
      label: "Leadership & Service",
      title: "Coordinate people, decisions, and response under real constraints.",
      body: "Project management, engineering management, cross-functional facilitation, emergency-response coordination, stakeholder communication, and continuous learning.",
      skills: [["Project leadership", "Advanced", "90%"], ["Cross-functional work", "Advanced", "91%"]]
    }
  };

  const menuButton = $(".menu-button");
  const nav = $(".main-nav");

  menuButton?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  });

  $$(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  $$(".reveal").forEach(element => revealObserver.observe(element));

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target.dataset.counted) return;
      entry.target.dataset.counted = "true";
      const target = Number(entry.target.dataset.target || 0);
      const suffix = entry.target.dataset.suffix || "";
      const start = performance.now();
      const duration = 1200;

      const update = now => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        entry.target.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      };

      requestAnimationFrame(update);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  $$(".counter").forEach(counter => counterObserver.observe(counter));

  const experienceCounter = $(".experience-count");
  if (experienceCounter) {
    const experienceObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || entry.target.dataset.counted) return;
        entry.target.dataset.counted = "true";
        const target = Number(entry.target.dataset.target || 20);
        const start = performance.now();
        const duration = 1700;

        const update = now => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          entry.target.textContent = `${Math.round(target * eased)}+`;
          if (progress < 1) requestAnimationFrame(update);
        };

        requestAnimationFrame(update);
        experienceObserver.unobserve(entry.target);
      });
    }, { threshold: 0.45 });

    experienceObserver.observe(experienceCounter);
  }


  const cursorGlow = $(".cursor-glow");
  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("pointermove", event => {
      cursorGlow.style.left = `${event.clientX}px`;
      cursorGlow.style.top = `${event.clientY}px`;
    });
  } else {
    cursorGlow.style.display = "none";
  }

  const grid = $("#project-grid");
  const emptyState = $("#empty-state");
  const search = $("#project-search");
  let activeFilter = "all";

  function availableLink(url) {
    return url && url !== "#";
  }

  function createProjectCard(project, index) {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.dataset.category = project.category;
    card.dataset.search = [
      project.title,
      project.description,
      project.category,
      ...project.tech,
      ...project.kpis
    ].join(" ").toLowerCase();
    card.style.setProperty("--card-accent", accentMap[project.accent] || accentMap.cyan);

    const liveButton = availableLink(project.live)
      ? `<a class="live-link" href="${project.live}" target="_blank" rel="noopener">${project.liveLabel || "Open Live Project"} ↗</a>`
      : `<button class="details-button" data-project-index="${index}">View Details</button>`;

    const githubButton = availableLink(project.github)
      ? `<a href="${project.github}" target="_blank" rel="noopener" aria-label="Open ${project.title} GitHub repository">GitHub</a>`
      : `<button class="details-button" data-project-index="${index}">More</button>`;

    card.innerHTML = `
      <div class="project-top">
        <span class="project-icon">${iconMap[project.icon] || "◆"}</span>
        <span class="project-version">${project.version}</span>
      </div>
      <div class="project-content">
        <span class="project-status">${project.status}</span>
        <h3>${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-kpis">
          ${project.kpis.map(kpi => `<span>${kpi}</span>`).join("")}
        </div>
        <div class="project-tech">
          ${project.tech.map(item => `<span>${item}</span>`).join("")}
        </div>
      </div>
      <div class="project-actions">
        ${liveButton}
        ${githubButton}
      </div>
    `;

    return card;
  }

  function renderProjects() {
    grid.innerHTML = "";
    window.PORTFOLIO_PROJECTS.forEach((project, index) => {
      grid.appendChild(createProjectCard(project, index));
    });

    $$(".project-card .reveal").forEach(element => revealObserver.observe(element));
    $$(".project-card").forEach(element => revealObserver.observe(element));
    bindProjectButtons();
    applyProjectFilters();
  }

  function applyProjectFilters() {
    const query = search.value.trim().toLowerCase();
    let visible = 0;

    $$(".project-card").forEach(card => {
      const categoryMatch = activeFilter === "all" || card.dataset.category === activeFilter;
      const searchMatch = !query || card.dataset.search.includes(query);
      const show = categoryMatch && searchMatch;
      card.classList.toggle("hidden", !show);
      if (show) visible += 1;
    });

    emptyState.hidden = visible !== 0;
  }

  $$(".filter").forEach(button => {
    button.addEventListener("click", () => {
      $$(".filter").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      activeFilter = button.dataset.filter;
      applyProjectFilters();
    });
  });

  search.addEventListener("input", applyProjectFilters);

  const modal = $("#project-modal");
  const modalContent = $("#modal-content");

  function openProjectModal(index) {
    const project = window.PORTFOLIO_PROJECTS[index];
    if (!project) return;

    const links = [
      availableLink(project.live)
        ? `<a class="button primary" href="${project.live}" target="_blank" rel="noopener">Open Live Project</a>`
        : "",
      availableLink(project.github)
        ? `<a class="button secondary" href="${project.github}" target="_blank" rel="noopener">GitHub Repository</a>`
        : ""
    ].join("");

    const comingSoonNotice = project.modalNotice
      ? `
        <div class="modal-notification" role="status" aria-live="polite">
          <span class="modal-notification-dot"></span>
          <div>
            <strong>${project.modalNotice}</strong>
            <p>${project.modalNoticeDetail || "Repository and live project publishing are in progress."}</p>
          </div>
        </div>
      `
      : "";

    modalContent.innerHTML = `
      <div class="modal-inner">
        <p class="eyebrow">${project.category} · ${project.version}</p>
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="modal-kpis">
          ${project.kpis.map(kpi => `<div>${kpi}</div>`).join("")}
        </div>
        <div class="modal-tech">
          ${project.tech.map(item => `<span>${item}</span>`).join("")}
        </div>
        ${comingSoonNotice}
        <div class="modal-actions">${links}</div>
      </div>
    `;

    modal.showModal();
    document.body.classList.add("modal-open");
  }

  function bindProjectButtons() {
    $$(".details-button").forEach(button => {
      button.addEventListener("click", () => openProjectModal(Number(button.dataset.projectIndex)));
    });
  }

  $(".modal-close").addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
  });

  modal.addEventListener("click", event => {
    if (event.target === modal) modal.close();
  });

  renderProjects();

  $$(".map-node").forEach(button => {
    button.addEventListener("click", () => {
      $$(".map-node").forEach(node => node.classList.remove("active"));
      button.classList.add("active");

      const content = capabilityContent[button.dataset.capability];
      const detail = $("#capability-detail");
      detail.innerHTML = `
        <span class="detail-number">${content.number}</span>
        <p class="eyebrow">${content.label}</p>
        <h3>${content.title}</h3>
        <p>${content.body}</p>
        ${content.skills.map(skill => `
          <div class="skill-meter">
            <div><span>${skill[0]}</span><strong>${skill[1]}</strong></div>
            <i style="--skill: ${skill[2]}"></i>
          </div>
        `).join("")}
      `;
    });
  });

  const sections = $$("main section[id]");
  const navLinks = $$('.main-nav a[href^="#"]');

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });

  sections.forEach(section => sectionObserver.observe(section));

  $("#year").textContent = new Date().getFullYear();
})();
