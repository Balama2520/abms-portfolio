/**
 * ABMVSC PORTFOLIO CONFIG — Bala Maneesh Ayanala
 * Copy this content into config.js whenever you want to deploy your personal portfolio.
 */
window.PORTFOLIO_CONFIG = {
  personal: {
    name: "Bala Maneesh Ayanala",
    initials: "ABM",
    role: "Full-Stack Developer & AI Engineer",
    tagline: "Engineering Ideas Into Real-World Impact.",
    bio: "Full-Stack Developer and AI Engineer building production-ready web applications with React, Node.js, and LangChain. Founder of ABMVSC Studio. Published researcher with work featured on IEEE Xplore.",
    photo: "photo.jpg",
    resume: "resume.pdf",
    location: "Andhra Pradesh, India (Open to Bangalore / Hyderabad / Remote)",
    availability: "Available Immediately (0 Days Notice)",
    email: "abalamaneesh@gmail.com",
    phone: "+91 80962 75914",
    linkedin: "https://linkedin.com/in/bala-maneesh-ayanala-702582266",
    github: "https://github.com/Balama2520",
    twitter: "",
    website: "https://abms-portfolio.netlify.app",
    huggingface: "https://huggingface.co/Balamaneesh2520",
    researchgate: "https://www.researchgate.net/profile/Bala-Ayanala"
  },
  seo: {
    siteUrl: "https://abms-portfolio.netlify.app",
    ogImage: "og-image.png",
    locale: "en_IN",
    googleVerification: "google1813f9af1d0c0f59"
  },
  company: {
    name: "ABMVSC",
    descriptor: "Technology & Innovation Studio",
    tagline: "Engineering Ideas. Empowering Tomorrow.",
    philosophy: "Build • Research • Innovate • Scale • Impact",
    description: "An independent, founder-led technology studio building intelligent software, AI-powered products, data-driven systems, and research-led solutions.",
    founderRole: "Founder & Full-Stack / AI Engineer",
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
    summary: "Full-stack web engineering, distributed systems, retrieval-augmented generation (RAG), and computer vision pipelines.",
    categories: [
      { name: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit", "HTML5/CSS3"] },
      { name: "Backend & APIs", items: ["Node.js", "Express.js", "FastAPI", "Python", "REST APIs", "WebSockets", "JWT Auth"] },
      { name: "Databases", items: ["MongoDB", "PostgreSQL", "ChromaDB (Vector Search)", "Redis"] },
      { name: "AI/ML & Vision", items: ["PyTorch", "YOLOv8", "OpenCV", "LangChain", "RAG Pipelines", "Denoising Autoencoders"] },
      { name: "Cloud & DevOps", items: ["Docker", "AWS EC2", "GitHub Actions CI/CD", "Netlify", "Vercel"] }
    ]
  },
  projects: [
    {
      name: "Saarthi Link",
      category: "AI Career Platform",
      description: "AI career copilot featuring ATS resume scoring, personalized 30/90-day learning roadmaps, and interview simulation.",
      tech: ["FastAPI", "React", "ChromaDB", "PostgreSQL", "LangChain"],
      liveUrl: "https://saarthi-link.netlify.app/",
      githubUrl: "https://github.com/Balama2520/SaarthiLink",
      result: "Over 500+ simulated candidate evaluations with sub-2s RAG retrieval."
    },
    {
      name: "Giakaa CMS",
      category: "Hybrid CMS Platform",
      description: "Dual-database content management architecture combining PostgreSQL and MongoDB with containerized microservices.",
      tech: ["React", "Node.js", "PostgreSQL", "MongoDB", "Docker"],
      liveUrl: "https://o8m-giakaa-cms.vercel.app/",
      githubUrl: "https://github.com/Balama2520/o8m-giakaa-cms",
      result: "Verified 40% reduction in API response latency through composite indexing and query projection."
    },
    {
      name: "Smart Task Manager",
      category: "Offline PWA & Voice Productivity",
      description: "Privacy-first progressive web app with voice task input via Web Speech API, Pomodoro timer, and zero-cloud local persistence.",
      tech: ["Vanilla JavaScript", "Service Workers", "Web Speech API", "LocalStorage"],
      liveUrl: "https://bala-smart-task-manager.netlify.app/",
      githubUrl: "https://github.com/Balama2520/smart-task-manager",
      result: "95+ Google Lighthouse audit score across Performance, PWA, and Accessibility."
    },
    {
      name: "AVR Shop",
      category: "AgriTech Digital Commerce",
      description: "Agricultural supplies marketplace equipped with real-time AI crop advisory and local language support for farmers.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveUrl: "",
      githubUrl: "https://github.com/Balama2520",
      result: "Direct farm-to-catalog connectivity with localized pest diagnosis."
    }
  ],
  experience: [
    {
      role: "Full-Stack Developer Intern",
      company: "IBM Innovation Centre for Education",
      type: "Internship",
      duration: "Aug 2025 – Oct 2025",
      location: "Remote",
      description: "Architected a MERN automation reporting dashboard consolidating 15+ student metrics. Enhanced operational reporting turnaround by 25% and eliminated 30% of manual repetitive reporting tasks.",
      highlights: ["MERN Stack Automation", "25% Turnaround Boost", "30% Manual Work Reduction"]
    },
    {
      role: "Research Assistant — AI & Computer Vision",
      company: "SRM Institute of Science and Technology",
      type: "Research",
      duration: "Jan 2025 – Jun 2025",
      location: "Chennai, India",
      description: "Curated and preprocessed 5,000+ Synthetic Aperture Radar (SAR) satellite images. Engineered a custom PyTorch Denoising Autoencoder (DAE) achieving 29.95 PSNR and 0.99 SSIM, paired with YOLOv8 for 92% mAP target detection.",
      highlights: ["IEEE Published Author", "92% mAP Target Detection", "PyTorch & YOLOv8"]
    }
  ],
  education: {
    degree: "B.Tech in Electronics & Communication Engineering",
    branch: "Electronics & Communication Engineering",
    university: "SRM Institute of Science and Technology (SRMIST)",
    location: "Chennai, India",
    duration: "Sep 2021 – Jun 2025",
    gpa: "First Class with Distinction",
    description: "Specialized in deep learning architectures, digital signal processing, computer vision pipelines, and embedded distributed systems."
  },
  research: [
    {
      title: "SAR Satellite Military Target Detection Using Denoising Autoencoders & YOLOv8",
      publisher: "IEEE Xplore",
      docId: "11042387",
      url: "https://ieeexplore.ieee.org/document/11042387",
      year: "2025",
      summary: "Evaluated multiplicative speckle noise reduction in high-resolution SAR radar imagery and downstream target localization accuracy.",
      metrics: ["92% mAP Detection Accuracy", "29.95 dB PSNR", "0.99 SSIM Edge Preservation"]
    }
  ],
  achievements: [
    {
      title: "Smart India Hackathon 2024 National Finalist",
      issuer: "Ministry of Education & AICTE",
      year: "2024",
      detail: "Selected among the Top 5% nationally from 10,000+ competing engineering teams across India."
    },
    {
      title: "IEEE Xplore Peer-Reviewed Author",
      issuer: "IEEE",
      year: "2025",
      detail: "Published primary research on deep learning computer vision for radar imagery (Doc #11042387)."
    },
    {
      title: "Certified Remote Sensing Technologist",
      issuer: "ISRO / Indian Institute of Remote Sensing (IIRS)",
      year: "2024",
      detail: "Certified in satellite image processing, synthetic aperture radar, and geospatial analytics."
    },
    {
      title: "Generative AI Fundamentals Certified",
      issuer: "Databricks",
      year: "2025",
      detail: "Mastery in large language models, retrieval augmented generation, and vector database retrieval."
    }
  ],
  chatbot: {
    assistantName: "ABM AI Assistant",
    greeting: "Hello! I am Bala's AI assistant. Ask me about his software projects, IEEE publication, system design, or immediate hiring availability.",
    studioGreeting: "Welcome to ABMVSC! I am the studio's AI intelligence agent. How can I assist you with our 5 engineering pillars, product ecosystem, or founder details?",
    customResponses: {
      whyHire: "Bala offers a rare combination of **verified production delivery** and **peer-reviewed research rigor**:\n\n1. **Proven Delivery:** Every project listed has a verified live URL and public GitHub repository.\n2. **Full-Stack + AI:** Proficient across React/Node.js as well as PyTorch/LangChain — zero handoff lag, faster shipping.\n3. **Research Rigor:** IEEE-published author with a 92% mAP SAR detection benchmark.\n4. **Fast Ramp-up:** Smart India Hackathon 2024 National Finalist (Top 5%) and IBM ICE intern within his graduating year.",
      pricing: "For ABMVSC Studio engagements, projects are structured with clear deliverables (fixed-fee MVPs or engineering sprints). For full-time roles, Bala is open to standard industry compensation for Full-Stack / SDE engineers.",
      hobbies: "When not coding or fine-tuning vision models, Bala investigates satellite radar applications, reads emerging AI literature, participates in hackathons, and mentors aspiring developers.",
      fallback: "I'm trained on Bala's engineering work and ABMVSC Studio. You can ask about his **tech stack**, **projects (Saarthi Link, Giakaa CMS, Smart Task Manager, AVR Shop)**, **IEEE research**, **IBM experience**, **resume**, or **immediate hiring availability**."
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

