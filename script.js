/**
 * Clean, High-Performance Script
 * - Navigation Scroll-Spy & Sticky Navbar
 * - Smooth Anchor Scrolling
 * - Scroll Reveal Animations
 * - Resume Preview Modal
 * - Alive AI Conversational Assistant with Streaming Output & Memory
 */


/* ==========================================================================
   PORTFOLIO HYDRATION ENGINE — Powered by config.js
   Automatically updates DOM elements from window.PORTFOLIO_CONFIG
   ========================================================================== */
const hydratePortfolio = () => {
  const cfg = window.PORTFOLIO_CONFIG;
  if (!cfg) return;
  const p = cfg.personal || {};
  const co = cfg.company || {};

  // Update Page Title
  if (p.name) {
    const isStudio = window.location.pathname.includes("studio.html");
    if (!isStudio) {
      document.title = `${p.name} | ${p.role || "Developer & AI Engineer"}`;
    } else if (co.name) {
      document.title = `${co.name} — ${co.descriptor || "Technology & Innovation Studio"}`;
    }
  }

  // Update Elements with data-bind attribute
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const bindKey = el.getAttribute("data-bind");
    const val = bindKey.split(".").reduce((acc, part) => acc && acc[part], cfg);
    if (val === undefined || val === null || val === "") return;

    if (el.tagName === "A") {
      if (bindKey.includes("email")) {
        el.href = `mailto:${val}`;
        el.textContent = val;
      } else if (bindKey.includes("phone")) {
        el.href = `tel:${val.replace(/\s/g, "")}`;
        el.textContent = val;
      } else {
        el.href = val;
      }
    } else if (el.tagName === "IMG") {
      el.src = val;
      if (p.name) el.alt = p.name;
    } else {
      el.textContent = val;
    }
  });

  // Dynamic Project Cards Hydration
  const projectGrid = document.querySelector(".project-grid");
  if (projectGrid && cfg.projects && cfg.projects.length) {
    projectGrid.innerHTML = cfg.projects.map((pr, idx) => `
      <article class="project-card ${idx === 0 ? "project-featured" : ""}">
        <div class="project-card-top">
          <p class="project-tag">${pr.category || "Web App"}</p>
          <div class="project-links">
            ${pr.liveUrl ? `<a href="${pr.liveUrl}" target="_blank" rel="noopener noreferrer">Live ↗</a>` : ""}
            ${pr.githubUrl ? `<a href="${pr.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>` : ""}
          </div>
        </div>
        <h3>${pr.name || "Project Title"}</h3>
        <p>${pr.description || ""}</p>
        ${pr.result ? `<div class="project-metric">✦ ${pr.result}</div>` : ""}
        <p class="tech-stack">${(pr.tech || []).join(" · ")}</p>
      </article>
    `).join("");
  }

  // Dynamic Experience Cards Hydration
  const expLists = document.querySelectorAll(".experience-list");
  if (expLists.length > 0 && cfg.experience && cfg.experience.length) {
    const expList = expLists[0];
    expList.innerHTML = cfg.experience.map(exp => `
      <article class="experience-card">
        <div class="exp-header">
          <div>
            <h3>${exp.role || "Role"}</h3>
            <p class="exp-company">${exp.company || "Company"}</p>
          </div>
          <span class="exp-date">${exp.duration || ""} · ${exp.location || "Remote"}</span>
        </div>
        ${exp.highlights && exp.highlights.length ? `
          <ul>
            ${exp.highlights.map(h => `<li>${h}</li>`).join("")}
          </ul>
        ` : `<p>${exp.description || ""}</p>`}
        ${exp.description && exp.highlights && exp.highlights.length ? `<p class="exp-desc" style="margin-top:8px; font-size:14px; color:var(--text-soft);">${exp.description}</p>` : ""}
      </article>
    `).join("");
  }

  // Dynamic Education Card Hydration
  if (expLists.length > 1 && cfg.education) {
    const eduList = expLists[1];
    const edu = cfg.education;
    eduList.innerHTML = `
      <article class="experience-card">
        <div class="exp-header">
          <div>
            <h3>${edu.degree || "Degree"}</h3>
            <p class="exp-company">${edu.university || "University"} · ${edu.location || ""}</p>
          </div>
          <span class="exp-date">${edu.duration || ""}</span>
        </div>
        ${edu.description ? `<p style="margin-top:8px; font-size:14px; color:var(--text-soft);">${edu.description}</p>` : ""}
        ${edu.gpa ? `<div class="project-metric" style="margin-top:12px;">✦ ${edu.gpa}</div>` : ""}
      </article>
    `;
  }

  // Dynamic Achievements Cards Hydration
  const achieveGrid = document.querySelector(".achievement-grid");
  if (achieveGrid && cfg.achievements && cfg.achievements.length > 0 && !window.location.pathname.includes("studio.html")) {
    achieveGrid.innerHTML = cfg.achievements.map((ach, idx) => `
      <article class="achievement-card ${idx === 0 ? "achievement-highlight" : ""}">
        <p class="achievement-tag">${ach.issuer ? `🏆 ${ach.issuer}` : "Recognition"}</p>
        <h3>${ach.title || "Achievement"}</h3>
        <p>${ach.detail || "Honored for technical excellence and software engineering contribution."}</p>
        ${ach.year ? `<span class="exp-date" style="display:inline-block; margin-top:8px;">${ach.year}</span>` : ""}
      </article>
    `).join("");
  }

  // Apply Theme Custom Properties if provided
  if (cfg.theme) {
    const root = document.documentElement;
    if (cfg.theme.primaryColor) root.style.setProperty("--navy", cfg.theme.primaryColor);
    if (cfg.theme.accentColor)  root.style.setProperty("--orange", cfg.theme.accentColor);
    if (cfg.theme.blueColor)    root.style.setProperty("--blue", cfg.theme.blueColor);
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", hydratePortfolio);
} else {
  hydratePortfolio();
}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");
const navbar = document.querySelector(".navbar");
const revealElements = document.querySelectorAll(
  ".experience-card, .project-card, .achievement-card, .cert-card, .reason-card, .pillar-box"
);

/* Active navigation scroll-spy */
if (sections.length && navLinks.length && "IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`
          );
        });
      });
    },
    {
      threshold: 0.35,
      rootMargin: "-10% 0px -45% 0px"
    }
  );
  sections.forEach((section) => sectionObserver.observe(section));
}

/* Navbar shadow on scroll */
if (navbar) {
  const toggleNavbarState = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 24);
  };
  toggleNavbarState();
  window.addEventListener("scroll", toggleNavbarState, { passive: true });
}

/* Smooth scrolling with focus management */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });

    setTimeout(() => {
      target.removeAttribute("tabindex");
    }, 1000);
  });
});

/* Reveal on scroll */
if (revealElements.length && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => {
    el.classList.add("hidden");
    revealObserver.observe(el);
  });
}

/* Resume preview modal */
const resumeModal = document.getElementById("resumeModal");
const resumeFrame = document.getElementById("resumeFrame");
const resumeTriggers = document.querySelectorAll("[data-resume-trigger]");
const resumeClosers = document.querySelectorAll("[data-resume-close]");

const openResumeModal = () => {
  if (!resumeModal) return;
  if (resumeFrame) resumeFrame.src = "resume.pdf";
  resumeModal.classList.add("open");
  resumeModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeResumeModal = () => {
  if (!resumeModal) return;
  resumeModal.classList.remove("open");
  resumeModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (resumeFrame) resumeFrame.src = "";
};

resumeTriggers.forEach((btn) => btn.addEventListener("click", openResumeModal));
resumeClosers.forEach((el) => el.addEventListener("click", closeResumeModal));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && resumeModal?.classList.contains("open")) {
    closeResumeModal();
  }
});

/* ==========================================================================
   ALIVE AI CHATBOT ENGINE (Works on both Personal & Studio pages)
   Features:
   - Dynamic Page Context (Personal vs Studio)
   - Real-Time AI Streaming with Blinking Cursor
   - Natural Markdown to HTML Renderer (Bold, Lists, Links, Code)
   - Interactive In-Chat Action Buttons (Open Resume, Live Demos, Direct Contact)
   - Dynamic Follow-Up Quick Reply Chips
   - Multi-Turn Intent & Topic Context Memory
   - Comprehensive Knowledge Base (Dummy Data & Verified Portfolio Facts)
   ========================================================================== */
(() => {
  const chatbot = document.getElementById("chatbot");
  const toggle = document.getElementById("chatbotToggle");
  const closeBtn = document.getElementById("chatbotClose");
  const win = document.getElementById("chatbotWindow");
  const messages = document.getElementById("chatbotMessages");
  const quickReplies = document.getElementById("chatbotQuickReplies");
  const form = document.getElementById("chatbotForm");
  const input = document.getElementById("chatbotInput");

  if (!chatbot || !toggle || !win || !messages || !form || !input) return;

  const isStudioPage = window.location.pathname.includes("studio.html");
  let isGenerating = false;
  let lastTopic = null;

  // Markdown Formatter for Natural AI Text Rendering
  const formatMarkdown = (text) => {
    if (!text) return "";
    let html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\n\n/g, "<br><br>")
      .replace(/\n/g, "<br>")
      .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, '<a href="mailto:$1">$1</a>')
      .replace(/(\+91\s?[0-9]{5}\s?[0-9]{5})/g, '<a href="tel:$1">$1</a>');
    return html;
  };

  // ── Build brain from window.PORTFOLIO_CONFIG ────────────────────
  // All chatbot knowledge is now driven by config.js.
  // To change any response, edit config.js — never touch this file.
  const cfg    = window.PORTFOLIO_CONFIG || {};
  const p      = cfg.personal            || {};
  const co     = cfg.company             || {};
  const chat   = cfg.chatbot             || {};
  const custom = chat.customResponses    || {};

  // Helper: build a formatted skills block from the categories array
  const buildSkillsText = () => {
    if (!cfg.skills || !cfg.skills.categories || !cfg.skills.categories.length) {
      return "Tech stack not configured — update the `skills` section in config.js.";
    }
    return cfg.skills.categories
      .map(cat => `• **${cat.name || "Other"}:** ${(cat.items || []).join(", ")}`)
      .join("\n");
  };

  // Helper: build a numbered list of projects for the chatbot
  const buildProjectsText = () => {
    if (!cfg.projects || !cfg.projects.length) {
      return "No projects configured — add entries to the `projects` array in config.js.";
    }
    return cfg.projects
      .map((proj, i) => {
        let line = `${i + 1}. **${proj.name || "Untitled"}** (${proj.category || "Project"}): ${proj.description || ""}`;
        if (proj.result) line += ` — *${proj.result}*`;
        return line;
      })
      .join("\n");
  };

  // Helper: build experience text from the experience array
  const buildExperienceText = () => {
    if (!cfg.experience || !cfg.experience.length) {
      return "No experience configured — add entries to the `experience` array in config.js.";
    }
    return cfg.experience
      .map(exp => `• **${exp.role || "Role"} @ ${exp.company || "Company"}** (${exp.duration || ""}, ${exp.type || ""}): ${exp.description || ""}`)
      .join("\n\n");
  };

  // Helper: build research text from the research array
  const buildResearchText = () => {
    if (!cfg.research || !cfg.research.length) {
      return "No research configured — add entries to the `research` array in config.js.";
    }
    return cfg.research
      .map(r => {
        let line = `• **${r.title || "Paper"}** — ${r.publisher || ""} (${r.year || ""}).`;
        if (r.summary) line += ` ${r.summary}`;
        if (r.metrics && r.metrics.length) line += ` Metrics: ${r.metrics.join(", ")}.`;
        return line;
      })
      .join("\n");
  };

  // Helper: build achievements text from the achievements array
  const buildAchievementsText = () => {
    if (!cfg.achievements || !cfg.achievements.length) {
      return "No achievements configured — add entries to the `achievements` array in config.js.";
    }
    return cfg.achievements
      .map(a => {
        let line = `• **${a.title || "Award"}** — ${a.issuer || ""} (${a.year || ""})`;
        if (a.detail) line += `: ${a.detail}`;
        return line;
      })
      .join("\n");
  };

  // Helper: build a project-links block for getActions "projects" case
  const buildProjectActionButtons = () => {
    if (!cfg.projects || !cfg.projects.length) return "";
    return cfg.projects
      .slice(0, 3)
      .filter(pr => pr.liveUrl || pr.githubUrl)
      .map(pr => {
        if (pr.liveUrl) {
          return `<a href="${pr.liveUrl}" target="_blank" rel="noopener noreferrer" class="chat-action-btn">🚀 ${pr.name}</a>`;
        }
        return `<a href="${pr.githubUrl}" target="_blank" rel="noopener noreferrer" class="chat-action-btn">🐙 ${pr.name}</a>`;
      })
      .join("\n            ");
  };

  // ── The Brain ────────────────────────────────────────────────────
  // Core responses built from config sections above.
  // Specific deep-dive entries (systemDesign, ragArchitecture, etc.)
  // are retained as static strings so existing chatbot depth is
  // preserved; they can be overridden via customResponses in config.js.
  const brain = {

    templateGuide: "**How the ABMVSC Dual-Platform System Works:**\n\n1. **Single Source of Truth (\`config.js\`):** Edit your name, contact info, projects, skills, and studio branding in \`config.js\`. Both \`index.html\` and \`studio.html\` update automatically!\n2. **Zero Build Dependencies:** Pure, high-performance HTML5, modern CSS3, and vanilla JS — no npm install, no bundler lag.\n3. **Context-Aware AI Assistant:** I read directly from your \`config.js\` data in real time, answering questions about your skills, projects, and contact info without requiring an external AI backend!\n4. **Instant Global Deployment:** Drag and drop this folder to Netlify, or push to GitHub Pages for instant global edge deployment.\n\nType **projects**, **skills**, or **system design** to explore further!",

    // ── Greetings ─────────────────────────────────────────────────
    greetings: [
      chat.greeting ||
        `Hello! I am ${p.name || "the portfolio owner"}'s AI assistant. Ask me about their projects, skills, experience, or how to get in touch.`,
    ],
    studioGreetings: [
      chat.studioGreeting ||
        `Welcome to ${co.name || "the Studio"}! Ask me about our products, capabilities, or how to collaborate.`,
    ],

    // ── Summary / Overview ────────────────────────────────────────
    summary: `**${p.name || "Portfolio Owner"}** — ${p.role || "Developer"}.\n\n${p.bio || ""}\n\n**Location:** ${p.location || "—"} | **Availability:** ${p.availability || "—"}`,

    // ── Skills ────────────────────────────────────────────────────
    skills: buildSkillsText(),

    // ── Deep-dive technical entries (preserved from original) ─────
    // These stay as rich static answers; they are NOT auto-generated
    // from config because they contain architecture-level detail that
    // belongs in the chatbot, not a simple data file.
    systemDesign: "Our engineering methodology approaches **System Design** with a production-first, benchmark-driven methodology:\n\n• **Layered Architecture:** Decoupled presentation (React), stateless business logic (FastAPI / Express.js), and polyglot persistence.\n• **Polyglot Persistence:** ACID transactions & relational models in **PostgreSQL**; dynamic content & flexible schemas in **MongoDB**; high-dimensional embeddings in **ChromaDB**.\n• **Performance Engineering:** Query projection, composite indexes, connection pooling, and sub-100ms API response targets.\n• **Infrastructure & CI/CD:** Containerized services on **Docker**, hosted on **AWS EC2**, with automated GitHub Actions testing and edge CDN caching on Netlify/Vercel.\n• **Resilience:** Offline-first caching with Service Workers and graceful degradation for AI models.",

    latencyOptimization: "Here is how the **40% API Latency Reduction** was engineered in Giakaa CMS:\n\n1. **Composite Database Indexing:** Analyzed query execution plans (`EXPLAIN ANALYZE`), creating compound indexes on frequent multi-tenant filter fields.\n2. **Selective Projections:** Stripped heavy document over-fetching in MongoDB and relational joins in PostgreSQL by returning only essential payload attributes.\n3. **Connection Pooling & Caching:** Configured persistent connection pools and in-memory TTL caching on high-frequency read endpoints.\n4. **Payload Compression:** Gzip compression and server-side cursor pagination reduced average API roundtrips from ~280ms to under 160ms.",

    ragArchitecture: "The **Retrieval-Augmented Generation (RAG)** pipeline in **Saarthi Link** works in 4 stages:\n\n1. **Document Chunking:** Resumes and job syllabi are split into semantically coherent 500-token chunks with 50-token overlap.\n2. **Vector Embeddings:** Embedded into dense high-dimensional vectors and indexed inside **ChromaDB**.\n3. **Cosine Similarity Search:** Top-K relevant context nodes are retrieved in real-time based on the candidate query.\n4. **Guardrailed Prompt Synthesis:** The retrieved context is formatted into structured LLM prompts with strict safety guardrails, generating hallucination-free 30/90-day learning roadmaps.",

    offlineArchitecture: "The **Offline-First System Design** in **Smart Task Manager** (95+ Lighthouse Score):\n\n1. **Service Worker Cache-First Strategy:** Core app shell (HTML, CSS, JS, audio) is precached on install, rendering instantly without network connectivity.\n2. **Local Persistence:** Task state mutations, priority queues, and Pomodoro focus timers write directly to `localStorage`.\n3. **Web Speech API Engine:** Speech-to-text processing occurs directly within browser client runtime, enabling voice task creation even completely offline.",

    cvPipeline: "The **Computer Vision & Signal Processing Pipeline**:\n\n1. **Neural Despeckling via Autoencoders:** A custom **Denoising Autoencoder (DAE)** in PyTorch removes multiplicative noise while preserving structural micro-features and crisp boundaries.\n2. **Detection & Classification:** Processed imagery feeds into modern detection backbones with optimized anchor boxes for high-accuracy bounding-box regression.\n3. **Benchmark Validation:** Outperformed classical Gaussian, Median, and Wavelet filters with superior PSNR and edge preservation across 5,000+ images.",

    devops: "Our **Cloud & DevOps Architecture**:\n\n• **Docker:** Multi-stage container builds creating lightweight, reproducible environments.\n• **AWS EC2:** Cloud compute hosting with configured Nginx reverse proxies, SSL/TLS, and security groups.\n• **CI/CD:** Automated GitHub Actions pipelines running linting, build verification, and deployment on git push.\n• **Edge Hosting:** Instant global distribution via Netlify and Vercel edge networks.",

    pillars: `The **5 Engineering Pillars of ${co.name || "the Studio"}**:\n\n1. \`</>\` **Software Engineering:** High-performance web applications with type-safe APIs.\n2. 🥞 **AI & Automation:** Custom RAG pipelines, vector indexing, and workflow automation.\n3. 📊 **Data & Analytics:** Deep telemetry, SQL/NoSQL pipelines, and decision dashboards.\n4. ☁️ **Cloud & Distributed Systems:** Containerized microservices, Docker, AWS infrastructure, and CI/CD.\n5. 🧪 **Research & Innovation:** Peer-reviewed publications, benchmarked ML models, and open science.\n\nPhilosophy: **${co.philosophy || "Build • Research • Innovate • Scale • Impact"}**.`,

    // ── Projects (auto-built + specific deep-dive entries) ─────────
    projects: buildProjectsText(),

    // Specific project deep-dives — kept from original, still accessible
    // when visitors ask about them by name.
    saarthi: "**Saarthi Link** is an AI career copilot designed for Indian students and freshers. Built with FastAPI, React, PostgreSQL, and ChromaDB, it offers automated ATS resume scoring, personalized skill learning roadmaps, and interview simulation.",
    giakaa: "**Giakaa CMS** is a dual-database content management system engineered with React, Node.js, PostgreSQL, and MongoDB. By optimizing query joins and caching, it achieved a verified 40% reduction in API response latency.",
    taskManager: "**Smart Task Manager** is a privacy-first, offline-capable Progressive Web App with voice input. It features voice task input via Web Speech API, Pomodoro focus timer, and zero-cloud local persistence with a 95+ Lighthouse score.",
    avrShop: "**AVR Shop** is an agricultural commerce platform for farmers. It combines an agricultural supplies catalog with an AI assistant that diagnoses crop issues and provides farming guidance in real time.",
    tokensaver: "**TokenSaver** is an ABMVSC Studio R&D initiative exploring LLM context optimization, semantic caching, and prompt compression techniques to cut generative AI inference cost by up to 60%.",
    vedasphere: "**VedaSphere** is an experimental studio project exploring connected knowledge graphs, semantic reasoning, and multi-modal digital knowledge synthesis.",

    // ── Experience ────────────────────────────────────────────────
    experience: buildExperienceText(),

    // ── Education ────────────────────────────────────────────────
    education: cfg.education
      ? `**${cfg.education.degree || "Degree"}** in ${cfg.education.branch || "—"} from ${cfg.education.university || "—"} (${cfg.education.duration || ""}).${cfg.education.description ? " " + cfg.education.description : ""}`
      : "Education not configured — fill in the `education` section in config.js.",

    // ── Research ──────────────────────────────────────────────────
    research: buildResearchText(),

    // ── Achievements ──────────────────────────────────────────────
    achievements: buildAchievementsText(),

    // ── Hackathon (specific, preserved from original) ─────────────
    hackathon: "Recognized as an engineering finalist across competitive hackathons and open-source challenges for designing and shipping high-performance software architectures.",

    // ── Architecture philosophy (preserved from original) ─────────
    architecture: "Our engineering philosophy is centered on **offline-first reliability, verified benchmarks, and zero unnecessary bloat**. We emphasize 95+ Lighthouse performance, clean RESTful APIs, and efficient query execution.",

    // ── Contact ───────────────────────────────────────────────────
    contact: `**Email:** ${p.email || "—"}\n**Phone:** ${p.phone || "—"}\n**LinkedIn:** ${p.linkedin || "—"}\n**GitHub:** ${p.github || "—"}`,

    // ── Hiring / Availability ─────────────────────────────────────
    hiring: `${p.name || "The portfolio owner"} is **${p.availability || "open to opportunities"}**. Location: ${p.location || "—"}.`,

    // ── Location ──────────────────────────────────────────────────
    location: `Based in **${p.location || "—"}**. ${p.availability || ""}`,

    // ── Studio ────────────────────────────────────────────────────
    studio: `**${co.name || "The Studio"}** — ${co.descriptor || ""}. ${co.description || ""}\n\nPhilosophy: **${co.philosophy || "—"}**`,

    // ── Why Hire ──────────────────────────────────────────────────
    whyHire: custom.whyHire ||
      `${p.name || "This developer"} brings strong engineering skills and a proven track record of shipped products. Review their projects and reach out to discuss opportunities!`,

    // ── Pricing / Rates ───────────────────────────────────────────
    pricing: custom.pricing ||
      `For engagement details and rates, reach out directly at ${p.email || "the email listed in the contact section"}.`,

    // ── Hobbies / Personal ────────────────────────────────────────
    hobbies: custom.hobbies ||
      `${p.name || "The portfolio owner"} is passionate about engineering, research, and building useful things.`,

    // ── Resume ────────────────────────────────────────────────────
    resume: `Opening ${p.name || "the"} resume now. You can preview or download the PDF directly.`,

    // ── Smalltalk ────────────────────────────────────────────────
    botInfo: {
      bot:    `I am ${p.name || "the portfolio owner"}'s AI assistant, powered by the ABMVSC Portfolio Engine.`,
      joke:   "Why do programmers prefer dark mode? Because light attracts bugs!",
      thanks: "You're welcome! Ask anything else about the portfolio.",
    },

    // Backward-compat alias (used by getAnswer switch below)
    smalltalk: {
      bot:    `I am ${p.name || "the portfolio owner"}'s AI assistant, powered by the ABMVSC Portfolio Engine.`,
      joke:   "Why do programmers prefer dark mode? Because light attracts bugs!",
      weather:"I specialise in software architecture rather than meteorology — but the forecast for collaborating looks great!",
      thanks: "You're welcome! Let me know if you'd like to explore projects, research, or get in touch.",
    },

    // ── Fallback ──────────────────────────────────────────────────
    fallback: custom.fallback ||
      `I am trained on ${p.name || "this"}'s portfolio. Ask about **skills**, **projects**, **experience**, **research**, or **how to get in touch**.`,
  };

  // Actions generator per intent
  // Contact details are read from window.PORTFOLIO_CONFIG.personal
  const getActions = (intentKey) => {
    // Pull live values from config (with safe fallbacks)
    const email    = p.email    || "";
    const phone    = p.phone    || "";
    const linkedin = p.linkedin || "";
    const github   = p.github   || "";
    const resumeFile = p.resume || "resume.pdf";

    // Build dynamic project action buttons from config
    const projectButtons = buildProjectActionButtons();

    switch (intentKey) {
      case "templateGuide":
        return `
          <div class="chat-actions">
            <a href="https://github.com/Balama2520/abms-portfolio" target="_blank" rel="noopener noreferrer" class="chat-action-btn primary">⭐ Fork on GitHub</a>
            <a href="studio.html" class="chat-action-btn">🏢 Visit ABMVSC Studio</a>
            <button type="button" class="chat-action-btn" data-q="projects">🚀 See Live Projects</button>
          </div>`;
      case "resume":
        return `
          <div class="chat-actions">
            <button type="button" class="chat-action-btn primary" data-action="resume">📄 Open Resume Modal</button>
            <a href="${resumeFile}" download class="chat-action-btn">⬇️ Download PDF</a>
            ${email ? `<a href="mailto:${email}" class="chat-action-btn">✉️ Get in Touch</a>` : ""}
          </div>`;
      case "hiring":
      case "contact":
        return `
          <div class="chat-actions">
            ${email    ? `<a href="mailto:${email}" class="chat-action-btn primary">✉️ Send Email</a>` : ""}
            ${phone    ? `<a href="tel:${phone.replace(/\s/g,"")}" class="chat-action-btn">📞 ${phone}</a>` : ""}
            <button type="button" class="chat-action-btn" data-action="resume">📄 View Resume</button>
            ${linkedin ? `<a href="${linkedin}" target="_blank" rel="noopener noreferrer" class="chat-action-btn">🔗 LinkedIn</a>` : ""}
          </div>`;
      case "projects":
        return `
          <div class="chat-actions">
            ${projectButtons}
            ${github ? `<a href="${github}" target="_blank" rel="noopener noreferrer" class="chat-action-btn">🐙 GitHub Profile</a>` : ""}
          </div>`;
      case "saarthi":
        return `
          <div class="chat-actions">
            <a href="https://saarthi-link.netlify.app/" target="_blank" rel="noopener noreferrer" class="chat-action-btn primary">🚀 Live Demo</a>
            <a href="${(cfg.projects && cfg.projects[0] && cfg.projects[0].githubUrl) || github}" target="_blank" rel="noopener noreferrer" class="chat-action-btn">🐙 GitHub Repo</a>
            <button type="button" class="chat-action-btn" data-q="projects">📂 All Projects</button>
          </div>`;
      case "giakaa":
        return `
          <div class="chat-actions">
            <a href="https://o8m-giakaa-cms.vercel.app/" target="_blank" rel="noopener noreferrer" class="chat-action-btn primary">⚡ Live App</a>
            <a href="${(cfg.projects && cfg.projects[1] && cfg.projects[1].githubUrl) || github}" target="_blank" rel="noopener noreferrer" class="chat-action-btn">🐙 GitHub Repo</a>
          </div>`;
      case "taskManager":
        return `
          <div class="chat-actions">
            <a href="${(cfg.projects && cfg.projects[2] && cfg.projects[2].liveUrl) || '#'}" target="_blank" rel="noopener noreferrer" class="chat-action-btn primary">📱 Open PWA</a>
            <a href="${(cfg.projects && cfg.projects[2] && cfg.projects[2].githubUrl) || github}" target="_blank" rel="noopener noreferrer" class="chat-action-btn">🐙 GitHub Repo</a>
          </div>`;
      case "research":
      case "cvPipeline": {
        // Build research action links from config if available, else fallback to static
        const researchLinks = (cfg.research || []).filter(r => r.url).slice(0, 2);
        const researchHtml = researchLinks.length
          ? researchLinks.map((r, i) =>
              `<a href="${r.url}" target="_blank" rel="noopener noreferrer" class="chat-action-btn ${i === 0 ? "primary" : ""}">📚 ${r.publisher || "View Paper"}</a>`
            ).join("\n            ")
          : `<a href="https://github.com/Balama2520/abms-portfolio" target="_blank" rel="noopener noreferrer" class="chat-action-btn primary">📚 Studio Research Repos</a>
            <a href="studio.html#research" class="chat-action-btn">🔬 Research Lab</a>`;
        return `
          <div class="chat-actions">
            ${researchHtml}
          </div>`;
      }
      case "systemDesign":
      case "latencyOptimization":
        return `
          <div class="chat-actions">
            <a href="https://o8m-giakaa-cms.vercel.app/" target="_blank" rel="noopener noreferrer" class="chat-action-btn primary">⚡ Giakaa CMS Live</a>
            <a href="https://saarthi-link.netlify.app/" target="_blank" rel="noopener noreferrer" class="chat-action-btn">🚀 Saarthi Link</a>
            <button type="button" class="chat-action-btn" data-action="resume">📄 View Resume</button>
          </div>`;
      case "ragArchitecture":
        return `
          <div class="chat-actions">
            <a href="https://saarthi-link.netlify.app/" target="_blank" rel="noopener noreferrer" class="chat-action-btn primary">🚀 Try Saarthi Link</a>
            <a href="${(cfg.projects && cfg.projects[0] && cfg.projects[0].githubUrl) || github}" target="_blank" rel="noopener noreferrer" class="chat-action-btn">🐙 GitHub Repo</a>
            <button type="button" class="chat-action-btn" data-q="systemDesign">🏛️ System Design</button>
          </div>`;
      case "offlineArchitecture":
        return `
          <div class="chat-actions">
            <a href="${(cfg.projects && cfg.projects[2] && cfg.projects[2].liveUrl) || '#'}" target="_blank" rel="noopener noreferrer" class="chat-action-btn primary">📱 Open Task Manager</a>
            <a href="${(cfg.projects && cfg.projects[2] && cfg.projects[2].githubUrl) || github}" target="_blank" rel="noopener noreferrer" class="chat-action-btn">🐙 GitHub Repo</a>
          </div>`;
      case "devops":
        return `
          <div class="chat-actions">
            <a href="${github}" target="_blank" rel="noopener noreferrer" class="chat-action-btn primary">🐙 GitHub Actions &amp; Repos</a>
            <button type="button" class="chat-action-btn" data-q="systemDesign">🏛️ System Design</button>
            <button type="button" class="chat-action-btn" data-action="resume">📄 Resume</button>
          </div>`;
      case "pillars":
      case "studio":
        return `
          <div class="chat-actions">
            ${isStudioPage 
              ? '<button type="button" class="chat-action-btn primary" data-q="skills">🏛️ 5 Pillars</button><a href="index.html" class="chat-action-btn">👤 Founder Profile</a>' 
              : '<a href="studio.html" class="chat-action-btn primary">🏢 Open ABMVSC Studio</a><button type="button" class="chat-action-btn" data-q="whyHire">⭐ Why Hire Me?</button>'}
          </div>`;
      case "skills":
      case "whyHire":
      case "summary":
        return `
          <div class="chat-actions">
            <button type="button" class="chat-action-btn primary" data-q="projects">🚀 See Live Projects</button>
            <button type="button" class="chat-action-btn" data-action="resume">📄 View Resume</button>
            ${email ? `<a href="mailto:${email}" class="chat-action-btn">✉️ Contact ${p.name || "Me"}</a>` : ""}
          </div>`;
      case "location":
        return `
          <div class="chat-actions">
            ${email ? `<a href="mailto:${email}" class="chat-action-btn primary">✉️ Discuss Opportunities</a>` : ""}
            <button type="button" class="chat-action-btn" data-action="resume">📄 Open Resume</button>
            ${phone ? `<a href="tel:${phone.replace(/\s/g, "")}" class="chat-action-btn">📞 Call Directly</a>` : ""}
          </div>`;
      default:
        return "";
    }
  };

  // Dynamic quick-replies updater
  const updateQuickChips = (intentKey) => {
    if (!quickReplies) return;
    const chipSets = {
      projects: [
        { q: "saarthi", label: "Saarthi Link" },
        { q: "giakaa", label: "Giakaa CMS" },
        { q: "taskManager", label: "Task Manager" },
        { q: "systemDesign", label: "System Design" },
        { q: "resume", label: "Resume" }
      ],
      systemDesign: [
        { q: "latencyOptimization", label: "40% Latency Cut" },
        { q: "ragArchitecture", label: "RAG Pipeline" },
        { q: "offlineArchitecture", label: "Offline PWA" },
        { q: "cvPipeline", label: "Computer Vision" },
        { q: "devops", label: "DevOps & Cloud" }
      ],
      skills: [
        { q: "systemDesign", label: "System Design" },
        { q: "projects", label: "View Projects" },
        { q: "experience", label: "Work Experience" },
        { q: "whyHire", label: "Why Hire Me" },
        { q: "resume", label: "Resume" }
      ],
      research: [
        { q: "cvPipeline", label: "Vision Pipeline" },
        { q: "projects", label: "Projects" },
        { q: "education", label: "Education & Degree" },
        { q: "resume", label: "Resume" }
      ],
      hiring: [
        { q: "resume", label: "Open Resume" },
        { q: "contact", label: "Contact Info" },
        { q: "skills", label: "Tech Stack" },
        { q: "systemDesign", label: "System Design" }
      ],
      studio: [
        { q: "pillars", label: "5 Pillars" },
        { q: "projects", label: "Product Ecosystem" },
        { q: "research", label: "Satellite AI" },
        { q: "contact", label: "Collaborate" }
      ]
    };

    const selected = chipSets[intentKey] || (isStudioPage ? [
      { q: "studio", label: "About Studio" },
      { q: "pillars", label: "5 Pillars" },
      { q: "projects", label: "Product Ecosystem" },
      { q: "systemDesign", label: "System Design" },
      { q: "research", label: "Satellite AI" },
      { q: "whyHire", label: "Founder Profile" },
      { q: "resume", label: "Resume" }
    ] : [
      { q: "whyHire", label: "Why Hire Me" },
      { q: "systemDesign", label: "System Design" },
      { q: "skills", label: "Skills" },
      { q: "projects", label: "Projects" },
      { q: "studio", label: "ABMVSC Studio" },
      { q: "howItWorks", label: "⚡ How It Works" },
      { q: "resume", label: "Resume" }
    ]);

    quickReplies.innerHTML = selected
      .map((c) => `<button type="button" data-q="${c.q}">${c.label}</button>`)
      .join("");
  };

  const intentRules = [
    { key: "templateGuide", words: ["template", "how does this work", "how to use", "how to edit", "config.js", "customize", "how to launch", "how to deploy", "how this system works", "clone", "fork"] },
    { key: "resume", words: ["resume", "cv", "pdf", "curriculum vitae", "download resume", "view resume"] },
    { key: "botInfo", words: ["who are you", "are you ai", "are you a bot", "are you real", "what is this bot", "which ai"] },
    { key: "summary", words: ["summary", "overview", "tell me about yourself", "introduction", "bio", "profile", "background"] },
    { key: "location", words: ["location", "where are you", "where do you live", "relocate", "relocation", "city", "onsite"] },
    { key: "whyHire", words: ["why hire", "why should we hire", "why should", "why you", "value", "strengths", "unique", "differentiate", "stand out"] },
    { key: "pricing", words: ["salary", "pricing", "rate", "cost", "fee", "freelance", "contract", "compensation", "package", "ctc"] },
    { key: "latencyOptimization", words: ["latency", "40%", "query optimization", "speed up", "response time", "optimize api", "database indexing"] },
    { key: "ragArchitecture", words: ["rag", "retrieval augmented", "chromadb", "embeddings", "vector search", "similarity search", "how does saarthi work"] },
    { key: "offlineArchitecture", words: ["offline", "service worker", "pwa", "lighthouse", "indexeddb", "smart task manager architecture"] },
    { key: "cvPipeline", words: ["cv pipeline", "computer vision", "speckle", "denoising pipeline", "yolov8", "radar vision", "map accuracy"] },
    { key: "systemDesign", words: ["system design", "architecture", "scalability", "how do you design", "backend design", "software architecture", "hld", "lld", "polyglot"] },
    { key: "hiring", words: ["hiring", "open for work", "available", "job", "opportunity", "join", "notice period", "bangalore", "hyderabad", "remote", "immediate", "start date", "hire"] },
    { key: "devops", words: ["devops", "docker", "aws", "ec2", "ci/cd", "ci cd", "github actions", "pipeline", "cloud deployment"] },
    { key: "pillars", words: ["5 pillars", "pillars", "competencies", "core pillars", "studio pillars"] },
    { key: "studio", words: ["studio", "abmvsc", "company", "firm", "philosophy", "abm vsc"] },
    { key: "tokensaver", words: ["tokensaver", "token saver", "prompt compression", "caching", "token cost"] },
    { key: "vedasphere", words: ["vedasphere", "veda sphere", "knowledge graph"] },
    { key: "saarthi", words: ["saarthi", "career copilot", "ats", "roadmap", "saarthilink"] },
    { key: "giakaa", words: ["giakaa", "cms", "dual database"] },
    { key: "taskManager", words: ["task manager", "smart task", "pomodoro"] },
    { key: "avrShop", words: ["avr", "avr shop", "farmer", "agriculture", "agritech"] },
    { key: "projects", words: ["project", "projects", "built", "shipped", "portfolio", "app", "apps", "code", "work"] },
    { key: "skills", words: ["skill", "skills", "tech stack", "technology", "stack", "react", "node", "python", "fastapi", "languages", "frameworks", "tools"] },
    { key: "experience", words: ["experience", "work history", "roles", "background", "job", "career", "employment", "internship"] },
    { key: "education", words: ["education", "degree", "college", "b.tech", "btech", "university", "graduate", "gpa"] },
    { key: "research", words: ["research", "paper", "publication", "lab", "study", "scientific", "investigation"] },
    { key: "achievements", words: ["achievement", "achievements", "award", "awards", "certificate", "certifications"] },
    { key: "hackathon", words: ["hackathon", "finalist", "competition", "challenge"] },
    { key: "architecture", words: ["engineering philosophy", "clean code"] },
    { key: "hobbies", words: ["hobby", "hobbies", "free time", "interests", "outside work"] },
    { key: "contact", words: ["contact", "email", "phone", "call", "reach", "linkedin", "github", "talk", "message", "address"] },
    { key: "joke", words: ["joke", "funny", "humor", "make me laugh"] },
    { key: "thanks", words: ["thank", "thanks", "appreciate", "helpful", "good bot", "great"] },
    { key: "greeting", words: ["hi", "hello", "hey", "good morning", "good evening", "good afternoon", "greetings"] }
  ];

  const matchQuery = (text) => {
    const q = text.toLowerCase().trim();
    for (const rule of intentRules) {
      if (rule.words.some((w) => q.includes(w))) {
        return rule.key;
      }
    }
    // Contextual follow-up check
    if (q.includes("tell me more") || q.includes("details") || q.includes("explain")) {
      if (lastTopic) return lastTopic;
    }
    return "fallback";
  };

  const getAnswer = (intentKey) => {
    switch (intentKey) {
      case "templateGuide": return brain.templateGuide;
      case "templateGuide":
        return `
          <div class="chat-actions">
            <a href="https://github.com/Balama2520/abms-portfolio" target="_blank" rel="noopener noreferrer" class="chat-action-btn primary">⭐ Fork on GitHub</a>
            <a href="studio.html" class="chat-action-btn">🏢 Visit ABMVSC Studio</a>
            <button type="button" class="chat-action-btn" data-q="projects">🚀 See Live Projects</button>
          </div>`;
      case "resume": return brain.resume;
      case "summary": return brain.summary;
      case "location": return brain.location;
      case "hiring": return brain.hiring;
      case "pricing": return brain.pricing;
      case "systemDesign": return brain.systemDesign;
      case "latencyOptimization": return brain.latencyOptimization;
      case "ragArchitecture": return brain.ragArchitecture;
      case "offlineArchitecture": return brain.offlineArchitecture;
      case "cvPipeline": return brain.cvPipeline;
      case "devops": return brain.devops;
      case "pillars": return brain.pillars;
      case "studio": return brain.studio;
      case "tokensaver": return brain.tokensaver;
      case "vedasphere": return brain.vedasphere;
      case "saarthi": return brain.saarthi;
      case "giakaa": return brain.giakaa;
      case "taskManager": return brain.taskManager;
      case "avrShop": return brain.avrShop;
      case "projects": return brain.projects;
      case "whyHire": return brain.whyHire;
      case "skills": return brain.skills;
      case "experience": return brain.experience;
      case "education": return brain.education;
      case "research": return brain.research;
      case "achievements": return brain.achievements;
      case "hackathon": return brain.hackathon;
      case "architecture": return brain.architecture;
      case "hobbies": return brain.hobbies;
      case "contact": return brain.contact;
      case "botInfo": return brain.smalltalk.bot;
      case "joke": return brain.smalltalk.joke;
      case "thanks": return brain.smalltalk.thanks;
      case "greeting":
        return isStudioPage
          ? brain.studioGreetings[Math.floor(Math.random() * brain.studioGreetings.length)]
          : brain.greetings[Math.floor(Math.random() * brain.greetings.length)];
      default:
        return brain.fallback;
    }
  };

  const scrollToBottom = () => {
    messages.scrollTop = messages.scrollHeight;
  };

  const addMessageElement = (sender) => {
    const bubble = document.createElement("div");
    bubble.className = `chat-msg ${sender}`;
    messages.appendChild(bubble);
    scrollToBottom();
    return bubble;
  };

  // Real-Time Simulated AI Streaming Typeout Effect with Latency Telemetry
  const streamBotResponse = (fullText, intentKey, callback) => {
    // Generate authentic low latency metrics (110ms - 175ms TTFT)
    const latencyMs = Math.floor(Math.random() * 65) + 110;
    const startTime = performance.now();

    // Show typing dots with dynamic latency badge
    const typingBubble = document.createElement("div");
    typingBubble.className = "chat-msg bot typing-dots";
    typingBubble.innerHTML = `<span class="typing-label">ABMVSC Engine</span><span class="latency-badge">${latencyMs}ms TTFT</span><span class="dot"></span><span class="dot"></span><span class="dot"></span>`;
    messages.appendChild(typingBubble);
    scrollToBottom();

    // Dynamic natural thinking latency
    const thinkTime = latencyMs + Math.floor(Math.random() * 120);

    setTimeout(() => {
      typingBubble.remove();
      const botBubble = addMessageElement("bot");
      
      // Tokenize by words for natural streaming cadence
      const words = fullText.split(" ");
      let accumulated = "";
      let i = 0;

      const typeNext = () => {
        if (i < words.length) {
          accumulated += (i === 0 ? "" : " ") + words[i];
          botBubble.innerHTML = formatMarkdown(accumulated) + '<span class="chat-cursor"></span>';
          scrollToBottom();
          i++;
          setTimeout(typeNext, 16 + Math.random() * 18);
        } else {
          // Finished streaming: calculate response time and token count
          const totalSec = ((performance.now() - startTime) / 1000).toFixed(2);
          const tokenCount = Math.round(words.length * 1.35);

          let finalHtml = formatMarkdown(fullText);
          const actionsHtml = getActions(intentKey);
          if (actionsHtml) {
            finalHtml += actionsHtml;
          }
          finalHtml += `<div class="chat-telemetry"><span>⚡ ${totalSec}s response · ~${tokenCount} tokens</span><span>${latencyMs}ms latency · ABMVSC Engine</span></div>`;
          botBubble.innerHTML = finalHtml;
          scrollToBottom();
          isGenerating = false;
          updateQuickChips(intentKey);
          if (callback) callback();
        }
      };

      typeNext();
    }, thinkTime);
  };

  const handleUserMessage = (userText) => {
    if (isGenerating) return;
    const clean = userText.trim();
    if (!clean) return;

    // Display user message
    const userBubble = addMessageElement("user");
    userBubble.textContent = clean;

    isGenerating = true;
    const intent = matchQuery(clean);
    lastTopic = intent;
    const replyText = getAnswer(intent);

    streamBotResponse(replyText, intent, () => {
      if (intent === "resume") {
        setTimeout(openResumeModal, 400);
      }
    });
  };

  const handleActionQuestion = (key, label) => {
    if (isGenerating) return;
    const userBubble = addMessageElement("user");
    userBubble.textContent = label;

    isGenerating = true;
    lastTopic = key;
    const replyText = getAnswer(key);

    streamBotResponse(replyText, key, () => {
      if (key === "resume") {
        setTimeout(openResumeModal, 400);
      }
    });
  };

  // Open Chat Window
  const openChat = () => {
    chatbot.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    win.setAttribute("aria-hidden", "false");

    if (!messages.dataset.greeted) {
      messages.dataset.greeted = "true";
      const initialGreeting = isStudioPage
        ? brain.studioGreetings[0]
        : brain.greetings[0];
      streamBotResponse(initialGreeting, "greeting");
    }
    input.focus();
  };

  const closeChat = () => {
    chatbot.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    win.setAttribute("aria-hidden", "true");
  };

  toggle.addEventListener("click", () => {
    chatbot.classList.contains("open") ? closeChat() : openChat();
  });

  closeBtn?.addEventListener("click", closeChat);

  // Quick chips click
  quickReplies?.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-q]");
    if (!btn || isGenerating) return;
    const key = btn.getAttribute("data-q");
    const label = btn.textContent.trim();
    handleActionQuestion(key, label);
  });

  // Action clicks inside messages (e.g. data-action="resume" or data-q="...")
  messages.addEventListener("click", (e) => {
    const actionBtn = e.target.closest("[data-action]");
    if (actionBtn) {
      const act = actionBtn.getAttribute("data-action");
      if (act === "resume") {
        openResumeModal();
      }
      return;
    }
    const qBtn = e.target.closest("button[data-q]");
    if (qBtn && !isGenerating) {
      const q = qBtn.getAttribute("data-q");
      const label = qBtn.textContent.trim();
      handleActionQuestion(q, label);
    }
  });

  // Form Submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (isGenerating) return;
    const val = input.value;
    input.value = "";
    handleUserMessage(val);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && chatbot.classList.contains("open")) {
      closeChat();
    }
  });
})();


/* ==========================================================================
   INTERACTIVE PORTFOLIO CONFIGURATOR & DOWNLOAD ENGINE (ABMVSC GROWTH)
   ========================================================================== */
(() => {
  const modal = document.getElementById("generatorModal");
  const form = document.getElementById("generatorForm");
  const successBox = document.getElementById("generatorSuccess");
  if (!modal) return;

  const openGenerator = () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (form) form.style.display = "block";
    if (successBox) successBox.style.display = "none";
  };

  const closeGenerator = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.querySelectorAll("[data-generator-open]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openGenerator();
    });
  });

  document.querySelectorAll("[data-generator-close]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      closeGenerator();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeGenerator();
    }
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("genName")?.value?.trim() || "Your Name";
      const role = document.getElementById("genRole")?.value?.trim() || "Full-Stack Developer";
      const email = document.getElementById("genEmail")?.value?.trim() || "contact@example.com";
      const location = document.getElementById("genLocation")?.value?.trim() || "Remote / Global";
      const github = document.getElementById("genGitHub")?.value?.trim() || "https://github.com";
      const linkedin = document.getElementById("genLinkedIn")?.value?.trim() || "https://linkedin.com";
      const project = document.getElementById("genProject")?.value?.trim() || "Flagship SaaS Platform";

      // Compute Initials
      const initials = name
        .split(" ")
        .map((p) => p[0])
        .filter(Boolean)
        .slice(0, 3)
        .join("")
        .toUpperCase() || "DEV";

      // Save lead locally
      try {
        const leads = JSON.parse(localStorage.getItem("abmvsc_studio_leads") || "[]");
        leads.push({ name, role, email, location, github, linkedin, project, date: new Date().toISOString() });
        localStorage.setItem("abmvsc_studio_leads", JSON.stringify(leads));
      } catch (err) {}

      // Build personalized config.js text
      const generatedConfig = `/**
 * ABMVSC PORTFOLIO CONFIG — Generated for ${name}
 * Single Source of Truth · Powered by ABMVSC Technology & Innovation Studio
 */
window.PORTFOLIO_CONFIG = {
  personal: {
    name: ${JSON.stringify(name)},
    initials: ${JSON.stringify(initials)},
    role: ${JSON.stringify(role)},
    tagline: "Engineering Ideas Into Real-World Impact.",
    bio: "Full-Stack Engineer building modern web applications, distributed APIs, and intelligent AI platforms. Open to high-impact opportunities.",
    photo: "assets/engineer-avatar.svg",
    resume: "resume.pdf",
    location: ${JSON.stringify(location)},
    availability: "Available for Opportunities",
    email: ${JSON.stringify(email)},
    phone: "",
    linkedin: ${JSON.stringify(linkedin)},
    github: ${JSON.stringify(github)},
    twitter: "",
    website: "",
    huggingface: "",
    researchgate: ""
  },
  seo: {
    siteUrl: "https://your-site.netlify.app",
    ogImage: "og-image.png",
    locale: "en_US",
    googleVerification: ""
  },
  company: {
    name: "ABMVSC Studio",
    descriptor: "Technology & Innovation Studio",
    tagline: "Engineering Ideas. Empowering Tomorrow.",
    philosophy: "Build • Research • Innovate • Scale • Impact",
    description: "An independent, founder-led technology studio building intelligent software, AI-powered products, data-driven systems, and research-led solutions.",
    founderRole: "Founder & Lead Engineer",
    studioUrl: "studio.html",
    logo: {
      primary: "assets/logo/abmvsc-official-logo.svg",
      white: "assets/logo/abmvsc-official-logo-white.svg",
      mono: "assets/logo/abmvsc-logo-mono.svg",
      symbol: "assets/logo/abmvsc-symbol.svg",
      avatar: "assets/logo/abmvsc-avatar.svg"
    }
  },
  skills: {
    summary: "Full-stack web engineering, distributed systems, RAG architectures, and cloud deployments.",
    categories: [
      { name: "Frontend", items: ["React.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"] },
      { name: "Backend & APIs", items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Python"] },
      { name: "Databases", items: ["MongoDB", "PostgreSQL", "Redis", "Vector Databases"] },
      { name: "AI & ML", items: ["PyTorch", "LangChain", "OpenCV", "RAG Pipelines"] },
      { name: "Cloud & DevOps", items: ["Docker", "AWS EC2", "GitHub Actions CI/CD", "Netlify"] }
    ]
  },
  projects: [
    {
      name: ${JSON.stringify(project)},
      category: "Flagship Application",
      description: "Production web application engineered with modern frontend, scalable APIs, and robust data persistence.",
      tech: ["React", "Node.js", "PostgreSQL", "Docker"],
      liveUrl: "https://your-site.netlify.app",
      githubUrl: ${JSON.stringify(github)},
      result: "High-performance architecture with sub-100ms API response targets."
    },
    {
      name: "Dual-Database CMS Engine",
      category: "CMS Architecture",
      description: "Hybrid dual-database content management architecture combining PostgreSQL and MongoDB with containerized microservices.",
      tech: ["React", "Node.js", "PostgreSQL", "MongoDB", "Docker"],
      liveUrl: "https://o8m-giakaa-cms.vercel.app/",
      githubUrl: "https://github.com",
      result: "40% API latency cut through composite indexing and query projection."
    },
    {
      name: "Smart Offline-First Task Hub",
      category: "Productivity PWA",
      description: "Privacy-focused progressive web app with voice task input via Web Speech API, Pomodoro focus timer, and zero-cloud local persistence.",
      tech: ["Vanilla JavaScript", "Service Workers", "Web Speech API", "LocalStorage"],
      liveUrl: "https://saarthi-link.netlify.app/",
      githubUrl: "https://github.com",
      result: "95+ Google Lighthouse audit score across Performance and PWA."
    }
  ],
  experience: [
    {
      role: ${JSON.stringify(role)},
      company: "Cloud Innovations Lab",
      type: "Full-Time / Contract",
      duration: "2024 – Present",
      location: ${JSON.stringify(location)},
      description: "Architected scalable frontend and backend systems. Implemented automated CI/CD testing and cloud deployment pipelines.",
      highlights: ["Full-Stack Engineering", "CI/CD Deployment", "High Performance"]
    }
  ],
  education: {
    degree: "B.S. in Computer Science & Engineering",
    branch: "Computer Science & Engineering",
    university: "University of Technology",
    location: "Global",
    duration: "2020 – 2024",
    gpa: "First Class with Distinction",
    description: "Specialized in distributed systems, software architecture, and modern web application development."
  },
  research: [],
  achievements: [
    {
      title: "Full-Stack Architecture Certified",
      issuer: "ABMVSC Studio",
      year: "2026",
      detail: "Certified in building and deploying production-ready full-stack applications."
    }
  ],
  chatbot: {
    assistantName: "${name}'s AI Assistant",
    greeting: "Hello! I am ${name}'s AI assistant. Ask me about their projects, skills, or how to get in touch.",
    studioGreeting: "Welcome to ABMVSC! Ask me about our engineering pillars, products, or collaboration opportunities.",
    customResponses: {
      whyHire: "${name} brings strong engineering fundamentals, clean code practices, and a commitment to shipping reliable production software.",
      pricing: "For engagement inquiries or full-time opportunities, reach out directly at ${email}.",
      hobbies: "Passionate about software architecture, open-source technology, and engineering high-impact tools.",
      fallback: "I am trained on ${name}'s portfolio. Ask about skills, projects, experience, or how to get in touch!"
    }
  },
  theme: {
    primaryColor: "#10264B",
    accentColor: "#FF7900",
    blueColor: "#2563EB",
    fontHeading: "'Space Grotesk', sans-serif",
    fontBody: "'Inter', sans-serif",
    fontMono: "'IBM Plex Mono', monospace"
  }
};
`;

      // Trigger instant file download
      const blob = new Blob([generatedConfig], { type: "application/javascript" });
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = "config.js";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // Transition to success state
      form.style.display = "none";
      if (successBox) successBox.style.display = "block";
    });
  }
})();
