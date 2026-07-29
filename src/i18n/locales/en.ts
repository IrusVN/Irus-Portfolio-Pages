// Base dictionary — defines the translation shape for all other locales.
// Keep proper nouns (Mai Lê Huy Hoàng, Irus, IrusGear, tech names) untranslated.
export const en = {
  nav: {
    about: "About",
    projects: "Projects",
    techStack: "Tech Stack",
    journey: "Journey",
    contactMe: "Contact Me",
    menu: "Menu",
    openMenu: "Open menu",
  },
  hero: {
    knownAs: "Known as Irus_",
    roles: [
      "Web Programmer",
      "IT Enthusiast",
      "Solo Game Developer",
      "Creative Editor",
      "Full Stack Developer",
      "AI Integration Developer",
    ],
    tagline:
      '"Architecting dynamic web applications and AI-driven solutions. Translating complex technical logic into engaging user experiences."',
    contactMe: "Contact Me",
    exploreProjects: "Explore Projects",
    downloadCV: "Download CV",
  },
  about: {
    label: "About",
    title: "About Me",
    body: "I am a Full-stack Web Developer who has grown to focus on building efficient web architectures and dynamic platforms, utilizing Nuxt.js and Laravel as my primary stack. With a strong passion for integrating AI into software development, I bridge the gap between technical logic, clean code design, and seamless user experiences to turn ideas into functional digital solutions.",
  },
  projects: {
    title: "Projects",
    soloTab: "Solo Projects",
    teamTab: "Team Projects",
    tags: {
      frontend: "Frontend",
      backend: "Backend",
    },
    items: {
      irusGear: {
        description:
          "A full-stack e-commerce project for Irus Gear, including the customer-facing interface and backend services.",
      },
    },
    card: {
      open: "Open",
    },
  },
  techStack: {
    label: "Technical Expertise",
    title: "Tech Stack",
    categories: [
      "Programming Languages",
      "Frameworks & Libraries",
      "Databases & AI",
      "Infrastructure & DevOps",
      "Environment & Tools",
    ],
    levels: {
      advanced: "Advanced",
      intermediate: "Intermediate",
      familiar: "Familiar",
      beginner: "Beginner",
    },
  },
  journey: {
    label: "Timeline & History",
    title: "My Journey",
    devTab: "Dev Milestones",
    schoolTab: "School & Achievements",
    viewMore: "View More",
    viewImage: "View Image / Certificate",
    dev: [
      {
        year: "2026 - Present",
        title: "Full-stack Developer & Thesis Researcher",
        subtitle: "IrusGear E-commerce Platform",
        description:
          "Developing a comprehensive e-commerce website integrating an AI-driven product recommendation system for my graduation thesis. Collaborating with a team, I manage the core database architecture, integrate Python/FastAPI for AI classification, and handle automated deployments via Coolify and DigitalOcean.",
        badge: "Graduation Project 🎓",
      },
      {
        year: "Late 2025",
        title: "Web Developer Intern",
        subtitle: "TTR IT",
        description:
          "Completed a 13-week professional internship at TTR IT, where I developed a dynamic and responsive corporate website for TTR IT Company. Utilized PHP and JavaScript to optimize performance and deliver a seamless user experience.",
        badge: "Internship",
      },
      {
        year: "2024 - 2025",
        title: "Mastering Modern Web Architecture",
        subtitle: "Nuxt & Laravel Ecosystem",
        description:
          "Focused on in-depth practical application of full-stack architectures. Built robust backends with Laravel and dynamic frontends with Nuxt.js (v3 & v4), while optimizing local development environments using WSL 2 and Laragon on Windows.",
        badge: "",
      },
      {
        year: "2021 - Present",
        title: "Academic Foundation & AI Exploration",
        subtitle: "Industrial University of Ho Chi Minh City (IUH)",
        description:
          "Pursuing a degree in Information Technology with a strong foundation in software engineering principles. Expanded technical interests into Artificial Intelligence, researching LLMs, vector embeddings, and local hosting tools like Ollama to bridge AI with web development.",
        badge: "",
      },
    ],
    school: [
      {
        year: "2026",
        title: "Graduation Thesis: AI-Integrated E-commerce",
        subtitle: "Industrial University of Ho Chi Minh City (IUH)",
        description:
          "Developing graduation thesis 'Xây dựng website kinh doanh thiết bị điện tử tích hợp hệ thống gợi ý sản phẩm' under the academic supervision of instructor Đỗ Hà Phương. Designing a scalable full-stack web application integrated with intelligent AI product classification.",
        badge: "Graduation Thesis 🎓",
      },
      {
        year: "2023 - 2025",
        title: "Advanced IT Coursework & Academic Research",
        subtitle: "Specialized Development Modules",
        description:
          "Completed rigorous specialized coursework including Web Systems and Technologies, System Integration and Architecture, Database Management Systems, and Distributed System Development. Conducted academic research and technical essays under the guidance of instructor Võ Công Minh.",
        badge: "Core Studies",
      },
      {
        year: "2021 - Present",
        title: "Engineer of Information Technology",
        subtitle: "Industrial University of Ho Chi Minh City (IUH)",
        description:
          "Commenced undergraduate studies majoring in Computer Networks and Web Development. Built a comprehensive foundation in software engineering principles, algorithm design, clean code practices, and modern web architectures.",
        badge: "Undergraduate",
      },
    ],
  },
  contact: {
    label: "Get In Touch",
    title: "Let's Collaborate",
    body: "Interested in discussing full-stack development, collaborating on modern web architectures, or just want to connect? Reach out to me via the platforms below:",
    social: "[Social]",
    community: "[Community]",
    emailLabel: "[Email]",
    codeLabel: "[Code]",
    openProfile: "→ Open Profile",
    copyUsername: "→ Copy Username",
    sendEmail: "→ Send Email",
    viewGithub: "→ View GitHub",
    copied: "[Copied!]",
  },
  sound: {
    title: "Sound Settings",
    masterVolume: "Master Volume",
    buttonVolume: "Button Sound Volume",
    backgroundMusic: "Background Music",
    ariaOn: "Sound settings (sound on)",
    ariaOff: "Sound settings (sound off)",
  },
  theme: {
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
  },
  language: {
    ariaLabel: "Change language",
  },
  common: {
    scrollToTop: "Back to top",
  },
}

export type Dictionary = typeof en
