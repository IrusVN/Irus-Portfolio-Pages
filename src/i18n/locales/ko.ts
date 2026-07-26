import type { Dictionary } from "./en"

export const ko: Dictionary = {
  nav: {
    about: "소개",
    projects: "프로젝트",
    techStack: "기술 스택",
    journey: "여정",
    contactMe: "연락하기",
    menu: "메뉴",
    openMenu: "메뉴 열기",
  },
  hero: {
    knownAs: "일명 Irus_",
    roles: [
      "웹 프로그래머",
      "IT 애호가",
      "1인 게임 개발자",
      "크리에이티브 에디터",
      "풀스택 개발자",
      "AI 통합 개발자",
    ],
    tagline:
      '"동적인 웹 애플리케이션과 AI 기반 솔루션을 설계합니다. 복잡한 기술 로직을 매력적인 사용자 경험으로 풀어냅니다."',
    contactMe: "연락하기",
    exploreProjects: "프로젝트 살펴보기",
    downloadCV: "이력서 다운로드",
  },
  about: {
    label: "소개",
    title: "자기소개",
    body: "저는 풀스택 웹 개발자입니다. Nuxt.js와 Laravel을 주력 스택으로 삼아 효율적인 웹 아키텍처와 동적인 플랫폼 구축에 집중하는 개발자로 성장해 왔습니다. 소프트웨어 개발에 AI를 접목하는 일에 큰 열정을 가지고 있으며, 기술적 로직과 클린 코드 설계, 매끄러운 사용자 경험을 유기적으로 연결하여 아이디어를 실질적인 디지털 솔루션으로 구현합니다.",
  },
  projects: {
    title: "프로젝트",
    soloTab: "개인 프로젝트",
    teamTab: "팀 프로젝트",
    tags: {
      frontend: "프론트엔드",
      backend: "백엔드",
    },
    items: {
      irusGear: {
        description:
          "Irus Gear를 위한 풀스택 이커머스 프로젝트로, 고객용 인터페이스와 백엔드 서비스를 포함합니다.",
      },
    },
    card: {
      open: "열기",
    },
  },
  techStack: {
    label: "기술 전문성",
    title: "기술 스택",
    categories: [
      "프로그래밍 언어",
      "프레임워크 & 라이브러리",
      "데이터베이스 & AI",
      "인프라 & DevOps",
      "개발 환경 & 도구",
    ],
    levels: {
      advanced: "고급",
      intermediate: "중급",
      familiar: "익숙함",
      beginner: "초급",
    },
  },
  journey: {
    label: "타임라인 & 히스토리",
    title: "저의 여정",
    devTab: "개발 마일스톤",
    schoolTab: "학업 & 성과",
    viewMore: "더 보기",
    viewImage: "이미지 / 증명서 보기",
    dev: [
      {
        year: "2026 - 현재",
        title: "풀스택 개발자 & 졸업 논문 연구",
        subtitle: "IrusGear 이커머스 플랫폼",
        description:
          "졸업 논문 주제로 AI 기반 상품 추천 시스템을 통합한 종합 이커머스 웹사이트를 개발하고 있습니다. 팀과 협업하며 핵심 데이터베이스 아키텍처를 담당하고, AI 분류를 위해 Python/FastAPI를 통합하며, Coolify와 DigitalOcean을 통한 자동 배포를 관리하고 있습니다.",
        badge: "졸업 프로젝트 🎓",
      },
      {
        year: "2025년 말",
        title: "웹 개발자 인턴",
        subtitle: "TTR IT",
        description:
          "TTR IT에서 13주간의 전문 인턴십을 수료하며 Tan Huy Company의 동적인 반응형 기업 웹사이트를 개발했습니다. PHP와 JavaScript를 활용하여 성능을 최적화하고 매끄러운 사용자 경험을 구현했습니다.",
        badge: "인턴십",
      },
      {
        year: "2024 - 2025",
        title: "모던 웹 아키텍처 숙달",
        subtitle: "Nuxt & Laravel 생태계",
        description:
          "풀스택 아키텍처의 심층적인 실무 적용에 집중했습니다. Laravel로 견고한 백엔드를, Nuxt.js(v3 & v4)로 동적인 프론트엔드를 구축하는 한편, Windows에서 WSL 2와 Laragon을 활용해 로컬 개발 환경을 최적화했습니다.",
        badge: "",
      },
      {
        year: "2021 - 현재",
        title: "학문적 기반 & AI 탐구",
        subtitle: "호치민시 산업대학교 (IUH)",
        description:
          "소프트웨어 공학 원리에 대한 탄탄한 기반 위에서 정보기술 학위 과정을 이수하고 있습니다. 기술적 관심을 인공지능 분야로 확장하여 LLMs, 벡터 임베딩, Ollama와 같은 로컬 호스팅 도구를 연구하며 AI와 웹 개발을 연결하고 있습니다.",
        badge: "",
      },
    ],
    school: [
      {
        year: "2026",
        title: "졸업 논문: AI 통합 이커머스",
        subtitle: "호치민시 산업대학교 (IUH)",
        description:
          "Đỗ Hà Phương 교수님의 지도 아래 졸업 논문 'Xây dựng website kinh doanh thiết bị điện tử tích hợp hệ thống gợi ý sản phẩm'을 진행하고 있습니다. 지능형 AI 상품 분류가 통합된 확장 가능한 풀스택 웹 애플리케이션을 설계하고 있습니다.",
        badge: "졸업 논문 🎓",
      },
      {
        year: "2023 - 2025",
        title: "IT 심화 전공 과정 & 학술 연구",
        subtitle: "전공 심화 모듈",
        description:
          "웹 시스템 및 기술, 시스템 통합 및 아키텍처, 데이터베이스 관리 시스템, 분산 시스템 개발 등 높은 수준의 전공 심화 과정을 이수했습니다. Võ Công Minh 교수님의 지도 아래 학술 연구를 수행하고 기술 소논문을 작성했습니다.",
        badge: "핵심 전공 과정",
      },
      {
        year: "2021 - 현재",
        title: "정보기술 학사",
        subtitle: "호치민시 산업대학교 (IUH)",
        description:
          "컴퓨터 네트워크 및 웹 개발을 전공으로 학부 과정을 시작했습니다. 소프트웨어 공학 원리, 알고리즘 설계, 클린 코드 작성, 모던 웹 아키텍처에 대한 종합적인 기반을 쌓았습니다.",
        badge: "학부 과정",
      },
    ],
  },
  contact: {
    label: "연락처",
    title: "함께 협업합시다",
    body: "풀스택 개발에 대한 논의, 모던 웹 아키텍처 관련 협업, 또는 가벼운 인사라도 나누고 싶으신가요? 아래 플랫폼을 통해 연락해 주세요:",
    social: "[소셜]",
    community: "[커뮤니티]",
    emailLabel: "[이메일]",
    codeLabel: "[코드]",
    openProfile: "→ 프로필 열기",
    copyUsername: "→ 사용자명 복사",
    sendEmail: "→ 이메일 보내기",
    viewGithub: "→ GitHub 보기",
    copied: "[복사 완료!]",
  },
  sound: {
    title: "사운드 설정",
    masterVolume: "마스터 볼륨",
    buttonVolume: "버튼 효과음 볼륨",
    backgroundMusic: "배경 음악",
    ariaOn: "사운드 설정 (사운드 켜짐)",
    ariaOff: "사운드 설정 (사운드 꺼짐)",
  },
  theme: {
    switchToLight: "라이트 모드로 전환",
    switchToDark: "다크 모드로 전환",
  },
  language: {
    ariaLabel: "언어 변경",
  },
  common: {
    scrollToTop: "맨 위로",
  },
}
