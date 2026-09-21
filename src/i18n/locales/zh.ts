import type { Dictionary } from "./en"

export const zh: Dictionary = {
  nav: {
    about: "关于",
    projects: "项目",
    techStack: "技术栈",
    journey: "历程",
    contactMe: "联系我",
    menu: "菜单",
    openMenu: "打开菜单",
  },
  hero: {
    knownAs: "又名 Irus_",
    roles: [
      "Web 程序员",
      "IT 爱好者",
      "独立游戏开发者",
      "创意剪辑师",
      "全栈开发工程师",
      "AI 集成开发工程师",
    ],
    tagline:
      '"构建动态 Web 应用与 AI 驱动的解决方案，将复杂的技术逻辑转化为引人入胜的用户体验。"',
    contactMe: "联系我",
    exploreProjects: "探索项目",
    downloadCV: "下载简历",
    cvEnglish: "英文版 (EN)",
    cvVietnamese: "越南语版 (VI)",
    selectCV: "选择简历版本",
  },
  about: {
    label: "关于",
    title: "关于我",
    body: "我是一名全栈 Web 开发工程师，以 Nuxt.js 和 Laravel 为主要技术栈，专注于构建高效的 Web 架构与动态平台。我对将 AI 融入软件开发充满热情，致力于在技术逻辑、整洁的代码设计与流畅的用户体验之间架起桥梁，把想法转化为切实可用的数字化解决方案。",
  },
  projects: {
    title: "项目",
    soloTab: "个人项目",
    teamTab: "团队项目",
    tags: {
      frontend: "前端",
      backend: "后端",
    },
    items: {
      irusGear: {
        description:
          "为 Irus Gear 打造的全栈电商项目，涵盖面向客户的界面与后端服务。",
      },
    },
    card: {
      open: "打开",
    },
  },
  techStack: {
    label: "技术专长",
    title: "技术栈",
    categories: [
      "编程语言",
      "框架与库",
      "数据库与 AI",
      "基础设施与 DevOps",
      "环境与工具",
    ],
    levels: {
      advanced: "精通",
      intermediate: "熟练",
      familiar: "熟悉",
      beginner: "入门",
    },
  },
  journey: {
    label: "时间轴与经历",
    title: "我的历程",
    devTab: "开发里程碑",
    schoolTab: "学业与成就",
    viewMore: "查看更多",
    viewImage: "查看图片 / 证书",
    dev: [
      {
        year: "2026 - 至今",
        title: "全栈开发工程师 & 毕业论文研究",
        subtitle: "IrusGear 电商平台",
        description:
          "为毕业论文开发一个集成 AI 产品推荐系统的综合性电商网站。在团队协作中，我负责核心数据库架构，使用 Python/FastAPI 集成 AI 分类功能，并通过 Coolify 和 DigitalOcean 实现自动化部署。",
        badge: "毕业项目 🎓",
      },
      {
        year: "2025 年末",
        title: "Web 开发实习生",
        subtitle: "TTR IT",
        description:
          "在 TTR IT 完成了为期 13 周的专业实习，期间为 TTR IT Company 开发了一个动态响应式企业官网，运用 PHP 和 JavaScript 优化性能，打造流畅的用户体验。",
        badge: "实习经历",
      },
      {
        year: "2024 - 2025",
        title: "深入掌握现代 Web 架构",
        subtitle: "Nuxt 与 Laravel 生态",
        description:
          "专注于全栈架构的深度实践应用。使用 Laravel 构建稳健的后端，使用 Nuxt.js（v3 与 v4）打造动态前端，同时在 Windows 上借助 WSL 2 和 Laragon 优化本地开发环境。",
        badge: "",
      },
      {
        year: "2021 - 至今",
        title: "学术基础与 AI 探索",
        subtitle: "胡志明市工业大学 (IUH)",
        description:
          "攻读信息技术专业学位，打下扎实的软件工程基础。将技术兴趣拓展至人工智能领域，研究 LLMs、向量嵌入以及 Ollama 等本地部署工具，探索 AI 与 Web 开发的深度结合。",
        badge: "",
      },
    ],
    school: [
      {
        year: "2026",
        title: "毕业论文：AI 集成电商系统",
        subtitle: "胡志明市工业大学 (IUH)",
        description:
          "在 Đỗ Hà Phương 老师的学术指导下开展毕业论文课题《Xây dựng website kinh doanh thiết bị điện tử tích hợp hệ thống gợi ý sản phẩm》，设计一个集成 AI 智能产品分类的可扩展全栈 Web 应用。",
        badge: "毕业论文 🎓",
      },
      {
        year: "2023 - 2025",
        title: "IT 专业进阶课程与学术研究",
        subtitle: "专业开发课程模块",
        description:
          "完成了一系列严谨的专业课程，包括 Web 系统与技术、系统集成与架构、数据库管理系统以及分布式系统开发，并在 Võ Công Minh 老师的指导下开展学术研究与技术论文写作。",
        badge: "核心课程",
      },
      {
        year: "2021 - 至今",
        title: "信息技术工程师",
        subtitle: "胡志明市工业大学 (IUH)",
        description:
          "开始攻读本科学位，主修计算机网络与 Web 开发方向。系统性地打下了软件工程原理、算法设计、整洁代码实践以及现代 Web 架构的全面基础。",
        badge: "本科在读",
      },
    ],
  },
  contact: {
    label: "联系方式",
    title: "期待与您合作",
    body: "想聊聊全栈开发、在现代 Web 架构上开展合作，或只是想认识一下？欢迎通过以下平台与我联系：",
    social: "[社交平台]",
    community: "[社区]",
    emailLabel: "[邮箱]",
    codeLabel: "[代码]",
    openProfile: "→ 打开个人主页",
    copyUsername: "→ 复制用户名",
    sendEmail: "→ 发送邮件",
    viewGithub: "→ 查看 GitHub",
    copied: "[已复制！]",
  },
  sound: {
    title: "声音设置",
    masterVolume: "主音量",
    buttonVolume: "按钮音效音量",
    backgroundMusic: "背景音乐",
    ariaOn: "声音设置（声音开启）",
    ariaOff: "声音设置（声音关闭）",
  },
  theme: {
    switchToLight: "切换到浅色模式",
    switchToDark: "切换到深色模式",
  },
  language: {
    ariaLabel: "切换语言",
  },
  common: {
    scrollToTop: "回到顶部",
  },
}
