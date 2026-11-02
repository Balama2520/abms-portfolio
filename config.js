/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║          ABMVSC PORTFOLIO ENGINE — config.js                    ║
 * ║          Single Source of Truth · Version 2.0                   ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  👋  HEY THERE! This is the ONLY file you need to edit.         ║
 * ║                                                                  ║
 * ║  Fill in your own details below and your entire portfolio —      ║
 * ║  including the AI chatbot — updates automatically.               ║
 * ║                                                                  ║
 * ║  DO NOT edit: index.html  studio.html  style.css  script.js     ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * ABMVSC Portfolio Engine  ·  MIT License
 * Built by ABMVSC Technology & Innovation Studio
 * https://github.com/abmvsc
 */

window.PORTFOLIO_CONFIG = {

  /* ═══════════════════════════════════════════════════════════════
     SECTION 1 — PERSONAL IDENTITY
     ───────────────────────────────────────────────────────────────
     These values drive your hero section, navbar, about card,
     footer, and the chatbot's "who is this person?" responses.
     Fill every field that applies to you; leave optional ones "".
     ═══════════════════════════════════════════════════════════════ */
  personal: {

    // Your legal or preferred full name — shown in the hero heading.
    name: "Alex Rivera",

    // Two or three capital letters used as the navbar logo badge.
    // Example: "AR" for Alex Rivera, "JDS" for John D. Smith.
    initials: "AR",

    // Your primary professional title. Keep it punchy.
    // Example: "Full-Stack Developer & AI Engineer"
    role: "Full-Stack Developer & AI Engineer",

    // One sentence that captures your professional brand.
    // Shown under your name in the hero. Make it memorable.
    tagline: "Engineering Ideas Into Real-World Impact.",

    // 2–3 sentences about you for the About section.
    // Talk about what you build, your mission, and what makes you tick.
    bio: "Full-Stack Developer and AI Engineer building production-ready web applications with React, Node.js, and LangChain. Passionate about performant systems, RAG architectures, and clean software craftsmanship.",

    // Your profile photo filename. Drop the file into the project root
    // (same folder as index.html) and write just the filename here.
    // Example: "photo.jpg"  or  "assets/images/me.png"
    photo: "assets/avatar.svg",

    // Your resume PDF filename. Same rule as photo above.
    // Example: "resume.pdf"
    resume: "resume.pdf",

    // City and country where you are based.
    // Example: "Bangalore, India"  |  "San Francisco, CA"
    location: "San Francisco, CA · Open to Remote",

    // One line about your job-search status. Shown in About and chatbot.
    // Example: "Open to full-time roles — immediate start"
    //          "Available for freelance projects"
    //          "Not currently looking"
    availability: "Open to opportunities",

    // Your primary professional email address.
    email: "hello@alexrivera.dev",

    // Your phone number in international format (with country code).
    // Leave "" to hide the phone chip entirely.
    phone: "+1 (555) 019-2834",

    // Full URL to your LinkedIn profile.
    // Leave "" to hide the LinkedIn button.
    linkedin: "https://linkedin.com",

    // Full URL to your GitHub profile.
    // Leave "" to hide the GitHub button.
    github: "https://github.com",

    // Optional: Full URL to your Twitter / X profile.
    // Leave "" and the button won't appear.
    twitter: "",

    // Optional: Your personal website or company URL.
    website: "",

    // Optional: Your Hugging Face profile (great for AI/ML engineers).
    // Example: "https://huggingface.co/yourusername"
    huggingface: "",

    // Optional: Your ResearchGate profile (for researchers & academics).
    // Example: "https://www.researchgate.net/profile/Your-Name"
    researchgate: "",
  },

  /* ═══════════════════════════════════════════════════════════════
     SECTION 2 — SEO & META
     ───────────────────────────────────────────────────────────────
     These values improve your search ranking and link previews.
     Replace them with your own deployed URL after you go live.
     ═══════════════════════════════════════════════════════════════ */
  seo: {

    // The public URL where your portfolio will be hosted.
    // Used for canonical links and Open Graph URLs.
    // Example: "https://yourname.netlify.app"  |  "https://yourname.dev"
    siteUrl: "https://your-site.netlify.app",

    // The image shown when your link is shared on Twitter, Slack, LinkedIn, etc.
    // Drop the file into the project root and write its filename here.
    // Ideal size: 1200 × 630 px. Example: "og-image.png"
    ogImage: "og-image.png",

    // Locale for Open Graph. Use "en_US", "en_IN", "fr_FR", etc.
    locale: "en_US",

    // Optional: Your Google Search Console verification token.
    // Found in GSC → Settings → Ownership Verification → HTML meta tag.
    // Leave "" if you haven't set up GSC yet.
    googleVerification: "",
  },

  /* ═══════════════════════════════════════════════════════════════
     SECTION 3 — COMPANY / STUDIO IDENTITY
     ───────────────────────────────────────────────────────────────
     If you have a studio, agency, or company brand, fill this in.
     It powers the dedicated studio.html page and the chatbot's
     studio-related responses.
     ═══════════════════════════════════════════════════════════════ */
  company: {

    // The name of your studio, agency, or company.
    // Example: "ABMVSC"  |  "Pixel & Co."  |  "NullPointer Labs"
    name: "ABMVSC Studio",

    // A short descriptor that appears alongside the name.
    // Example: "Technology & Innovation Studio"
    descriptor: "Technology & Innovation Studio",

    // A one-line tagline for your studio — the slogan that sticks.
    // Example: "Engineering Ideas. Empowering Tomorrow."
    tagline: "Engineering Ideas. Empowering Tomorrow.",

    // Your studio's core philosophy, often shown in the hero block.
    // Example: "Build. Research. Innovate. Scale. Impact."
    philosophy: "Build. Research. Innovate. Scale. Impact.",

    // 2–3 sentences describing what your studio does and who it serves.
    description: "2–3 sentence description of your studio or company.",

    // Your role within the studio.
    // Example: "Founder & Principal Engineer"  |  "CEO & Lead Developer"
    founderRole: "Founder & Principal Engineer",

    // Path to the studio page (keep as "studio.html" unless you rename it).
    studioUrl: "studio.html",

    // Studio logo file paths. If you don't have SVG variants,
    // just point them all to your single logo file.
    // Leave as-is if you are using the default ABMVSC branding.
    logo: {
      primary: "assets/logo/abmvsc-logo-primary.svg",
      white:   "assets/logo/abmvsc-logo-white.svg",
      mono:    "assets/logo/abmvsc-logo-mono.svg",
      symbol:  "assets/logo/abmvsc-symbol.svg",
      avatar:  "assets/logo/abmvsc-avatar.svg",
    },
  },

  /* ═══════════════════════════════════════════════════════════════
     SECTION 4 — SKILLS
     ───────────────────────────────────────────────────────────────
     Organise your skills into named categories.
     Each category appears as a card in the Skills section and
     the chatbot reads these when someone asks "what's your stack?".
     Add or remove categories and items freely.
     ═══════════════════════════════════════════════════════════════ */
  skills: {

    // One sentence summarising your overall tech profile.
    // Shown in the chatbot summary and About section.
    summary: "One sentence summary of your tech stack.",

    // Each object below becomes a skill category card.
    // "name"  →  The category heading (shown in bold).
    // "items" →  Array of individual technology names.
    categories: [
      {
        name: "Frontend",
        // List your client-side technologies here.
        items: ["React.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
      },
      {
        name: "Backend & APIs",
        // Server-side frameworks, runtime environments, API paradigms.
        items: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
      },
      {
        name: "Databases",
        // Relational, NoSQL, vector — whatever you work with.
        items: ["MongoDB", "PostgreSQL"],
      },
      {
        name: "AI & ML",
        // ML frameworks, model libraries, AI toolkits.
        items: ["PyTorch", "LangChain", "OpenCV"],
      },
      {
        name: "Cloud & DevOps",
        // Infrastructure, CI/CD pipelines, hosting platforms.
        items: ["Docker", "AWS EC2", "GitHub Actions", "Netlify"],
      },
      // ─── Add more categories by copying the block above ───────
      // {
      //   name: "Mobile",
      //   items: ["React Native", "Expo", "Android SDK"],
      // },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     SECTION 5 — PROJECTS
     ───────────────────────────────────────────────────────────────
     Each object below becomes a project card AND a chatbot entry.
     The chatbot can answer detailed questions about each project
     when the visitor mentions its name.

     Required:  name, description, tech
     Optional:  category, liveUrl, githubUrl, result
     Leave liveUrl or githubUrl as "" to hide that button.
     ═══════════════════════════════════════════════════════════════ */
  projects: [
    {
      // The short display name shown on the project card.
      name: "Project One",

      // A category label used for filtering (optional but recommended).
      // Example: "Web Application" | "AI Platform" | "Mobile App" | "Open Source"
      category: "Web Application",

      // 1–3 sentences: what it does, the problem it solves, who it's for.
      description: "Brief description of what this project does and the problem it solves.",

      // Technology tags shown on the card and read by the chatbot.
      tech: ["React", "Node.js", "MongoDB"],

      // Full URL to the deployed, live version of the project.
      // Leave "" if there is no public demo.
      liveUrl: "https://your-project.netlify.app",

      // Full URL to the GitHub repository.
      // Leave "" if the repo is private.
      githubUrl: "https://github.com/yourusername/project-one",

      // A measurable outcome — a number, a percentage, a user milestone.
      // Example: "Reduced API latency by 40%"  |  "500+ daily active users"
      // Leave "" if you prefer not to include metrics.
      result: "Describe a measurable outcome (optional).",
    },
    {
      name: "Project Two",
      category: "AI Platform",
      description: "Brief description of what this project does.",
      tech: ["Python", "FastAPI", "PostgreSQL"],
      liveUrl: "",       // No public demo yet — leave empty
      githubUrl: "https://github.com/yourusername/project-two",
      result: "",
    },
    // ─── Add more projects by copying a block above ──────────────
    // {
    //   name: "Project Three",
    //   category: "Mobile App",
    //   description: "...",
    //   tech: ["React Native", "Firebase"],
    //   liveUrl: "",
    //   githubUrl: "",
    //   result: "",
    // },
  ],

  /* ═══════════════════════════════════════════════════════════════
     SECTION 6 — EXPERIENCE
     ───────────────────────────────────────────────────────────────
     Each object becomes a timeline card in the Experience section.
     List your most recent role first — the template renders them
     top-to-bottom in the order you define here.
     ═══════════════════════════════════════════════════════════════ */
  experience: [
    {
      // Your job title at this position.
      role: "Full-Stack Developer & AI Engineer",

      // Name of the company or organisation.
      company: "Company Name",

      // Employment type. Common values:
      // "Full-Time" | "Internship" | "Contract" | "Freelance" | "Research"
      type: "Full-Time",

      // When you were there. Use "Present" if you still work there.
      // Example: "Aug 2025 – Present"  |  "Jan 2024 – Jun 2024"
      duration: "Jan 2025 – Present",

      // City or "Remote" or "Hybrid – City".
      location: "Remote / Your City",

      // 1–3 sentences: what you built, shipped, or achieved in this role.
      description: "What you built, shipped, or achieved in this role.",

      // Bullet-point highlights — specific achievements, numbers, tools.
      // The chatbot and cards may render these as a bulleted list.
      highlights: [
        "Key achievement 1 — add a metric if you have one",
        "Key achievement 2",
      ],
    },
    // ─── Add more roles by copying the block above ───────────────
  ],

  /* ═══════════════════════════════════════════════════════════════
     SECTION 7 — EDUCATION
     ───────────────────────────────────────────────────────────────
     A single object covering your highest / most relevant degree.
     The chatbot references this when asked about your university,
     degree, or academic background.
     ═══════════════════════════════════════════════════════════════ */
  education: {

    // Degree type. Example: "B.Tech" | "B.E." | "M.Sc." | "B.S." | "MBA"
    degree: "B.Tech / B.E. / M.Tech / Other",

    // Your major, specialisation, or branch.
    // Example: "Computer Science & Engineering"  |  "Electronics & Communication"
    branch: "Your Branch / Specialization",

    // Full official name of your institution.
    university: "Your University Name",

    // City and country of the institution.
    location: "City, Country",

    // Academic years. Example: "2021 – 2025"
    duration: "2021 – 2025",

    // GPA, CGPA, or grade — shown in the education card.
    // Leave "" to omit it.
    gpa: "Your GPA / CGPA (optional)",

    // A brief note about academic focus, thesis, or honours.
    description: "Brief note about your academic focus or dissertation (optional).",
  },

  /* ═══════════════════════════════════════════════════════════════
     SECTION 8 — RESEARCH  (optional)
     ───────────────────────────────────────────────────────────────
     Papers, theses, conference talks, or preprints.
     Leave this as an empty array [] to hide the Research section.
     ═══════════════════════════════════════════════════════════════ */
  research: [
    {
      // Full title of the paper or publication.
      title: "Your Research Paper Title",

      // Publisher or venue short name.
      // Example: "IEEE Xplore" | "ACM SIGKDD" | "NeurIPS" | "Springer LNCS"
      publisher: "IEEE / ACM / Springer / Other",

      // The document or DOI identifier issued by the publisher (optional).
      // Example: "11042387" for IEEE  |  "10.1145/XXXXXXX" for ACM
      docId: "",

      // Full URL to the paper's public landing page.
      // Leave "" if not yet published or behind a paywall with no link.
      url: "",

      // Year of publication or submission.
      year: "2025",

      // One sentence on what the paper proved or contributed.
      summary: "One sentence on what the research proved or contributed.",

      // Key numbers to highlight — accuracy, dataset size, speedup, etc.
      // Leave [] to omit this list.
      metrics: [
        "Key metric (e.g. 92% mAP accuracy)",
        "Second metric (e.g. trained on 5,000+ images)",
      ],
    },
    // ─── Add more papers by copying the block above ──────────────
  ],

  /* ═══════════════════════════════════════════════════════════════
     SECTION 9 — ACHIEVEMENTS & CERTIFICATIONS
     ───────────────────────────────────────────────────────────────
     Hackathon wins, awards, professional certificates — all live here.
     Each item becomes a card in the Achievements section.
     Leave as an empty array [] to hide the section entirely.
     ═══════════════════════════════════════════════════════════════ */
  achievements: [
    {
      // Name of the award, hackathon win, or certification.
      title: "Hackathon / Award Name",

      // Organisation or platform that issued it.
      // Example: "Ministry of Education, India" | "Coursera" | "AWS" | "Google"
      issuer: "Organisation",

      // Year received (4-digit string).
      year: "2024",

      // One-line description or rank. Leave "" to omit.
      // Example: "National Finalist — Top 5% of 10,000+ teams"
      //          "Credential ID: ABC123"
      detail: "One-line description or credential ID.",
    },
    {
      title: "Certification Name",
      issuer: "Platform / Organisation",
      year: "2025",
      detail: "",    // Leave empty if no extra detail needed
    },
    // ─── Add more achievements by copying a block above ──────────
  ],

  /* ═══════════════════════════════════════════════════════════════
     SECTION 10 — CHATBOT CONFIGURATION
     ───────────────────────────────────────────────────────────────
     Tune your AI assistant's personality, greeting messages, and
     custom response text.

     • assistantName / greeting / studioGreeting  →  Opening messages
     • customResponses  →  Overrides for specific chatbot answers

     All fields support basic markdown:
       **bold text**   *italic text*   `inline code`
     ═══════════════════════════════════════════════════════════════ */
  chatbot: {

    // The display name shown in the chatbot window header.
    // Example: "Alex's AI Assistant"  |  "Alex's Portfolio Bot"
    assistantName: "Your Name's AI Assistant",

    // The very first message the bot sends when the chat window opens
    // on your personal portfolio (index.html).
    // Keep it warm, brief, and action-oriented.
    greeting: "Hi! I am [Your Name]'s AI assistant. Ask me anything about their projects, skills, or how to get in touch.",

    // The opening message on the studio page (studio.html).
    // Tailor it to your company/studio brand.
    studioGreeting: "Welcome to [Studio Name]! Ask me about our products, capabilities, or how we can collaborate.",

    // ── Custom Response Overrides ─────────────────────────────────
    // These let you write your own answers for common questions.
    // The chatbot uses these instead of the auto-generated text.
    // If you leave a field as "", the engine builds a sensible default
    // from the other sections you've filled in above.
    customResponses: {

      // Why should someone hire or work with you?
      // Use **bold** to highlight your top selling points.
      // Leave "" to auto-generate from your projects & experience data.
      whyHire: "Write why someone should hire or work with you. Use **bold** for emphasis.",

      // Freelance rates, engagement models, or hiring terms.
      // Example: "I work on fixed-scope MVPs and engineering sprints.
      //           Reach out for a quote."
      pricing: "Describe your rates, availability, or engagement model.",

      // A personal touch — what do you enjoy outside of work?
      // Humanises your profile and makes the chatbot more engaging.
      hobbies: "What do you enjoy outside of work?",

      // Shown when the chatbot cannot understand a question.
      // Suggest the topics your bot knows about.
      fallback: "Write a short message for when the bot doesn't understand a question.",
    },
  },

  /* ═══════════════════════════════════════════════════════════════
     SECTION 11 — THEME  (optional overrides)
     ───────────────────────────────────────────────────────────────
     These CSS custom property values are read by script.js and
     injected into :root at runtime, so you can adjust your colour
     scheme here without touching style.css.

     Leave as-is to keep the default ABMVSC navy + orange palette.
     ═══════════════════════════════════════════════════════════════ */
  theme: {

    // Primary brand colour — navbar background, section headings.
    // Default: deep navy  #10264B
    primaryColor: "#10264B",

    // Accent colour — call-to-action buttons, highlights, underlines.
    // Default: vibrant orange  #FF7900
    accentColor: "#FF7900",

    // Interactive blue — links, tags, active states.
    // Default: Tailwind blue-600  #2563EB
    blueColor: "#2563EB",

    // Heading font — loaded from Google Fonts in index.html.
    // Swap to any font you've already imported.
    fontHeading: "'Space Grotesk', sans-serif",

    // Body / paragraph font.
    fontBody: "'Inter', sans-serif",

    // Monospace font — used for code snippets and tech tags.
    fontMono: "'IBM Plex Mono', monospace",
  },

};

/* ──────────────────────────────────────────────────────────────────
   ✅  Done! Save this file and open index.html in your browser.
   The chatbot and portfolio sections will update automatically.
   When you're ready to go live, push everything to GitHub and
   deploy with Netlify or GitHub Pages (see README.md for steps).
────────────────────────────────────────────────────────────────── */
