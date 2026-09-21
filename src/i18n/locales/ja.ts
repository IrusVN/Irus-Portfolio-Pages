import type { Dictionary } from "./en"

export const ja: Dictionary = {
  nav: {
    about: "自己紹介",
    projects: "プロジェクト",
    techStack: "技術スタック",
    journey: "経歴",
    contactMe: "お問い合わせ",
    menu: "メニュー",
    openMenu: "メニューを開く",
  },
  hero: {
    knownAs: "通称 Irus_",
    roles: [
      "Webプログラマー",
      "IT愛好家",
      "個人ゲーム開発者",
      "クリエイティブエディター",
      "フルスタックエンジニア",
      "AI統合エンジニア",
    ],
    tagline:
      '"動的なWebアプリケーションとAIを活用したソリューションを設計し、複雑な技術ロジックを魅力的なユーザー体験へと昇華させます。"',
    contactMe: "お問い合わせ",
    exploreProjects: "プロジェクトを見る",
    downloadCV: "履歴書をダウンロード",
    cvEnglish: "英語版 (EN)",
    cvVietnamese: "ベトナム語版 (VI)",
    selectCV: "履歴書の言語を選択",
  },
  about: {
    label: "自己紹介",
    title: "私について",
    body: "フルスタックWebエンジニアとして、Nuxt.js と Laravel を主軸に、効率的なWebアーキテクチャと動的なプラットフォームの構築に注力してきました。AIをソフトウェア開発に統合することに強い情熱を持ち、技術的なロジック、クリーンなコード設計、快適なユーザー体験を結びつけて、アイデアを実用的なデジタルソリューションへと形にします。",
  },
  projects: {
    title: "プロジェクト",
    soloTab: "個人プロジェクト",
    teamTab: "チームプロジェクト",
    tags: {
      frontend: "フロントエンド",
      backend: "バックエンド",
    },
    items: {
      irusGear: {
        description:
          "Irus Gear のためのフルスタックECサイトプロジェクトです。顧客向けインターフェースとバックエンドサービスを含みます。",
      },
    },
    card: {
      open: "開く",
    },
  },
  techStack: {
    label: "専門技術",
    title: "技術スタック",
    categories: [
      "プログラミング言語",
      "フレームワーク・ライブラリ",
      "データベース・AI",
      "インフラ・DevOps",
      "開発環境・ツール",
    ],
    levels: {
      advanced: "上級",
      intermediate: "中級",
      familiar: "経験あり",
      beginner: "初級",
    },
  },
  journey: {
    label: "タイムライン・経歴",
    title: "私の歩み",
    devTab: "開発マイルストーン",
    schoolTab: "学歴・実績",
    viewMore: "もっと見る",
    viewImage: "画像・証明書を見る",
    dev: [
      {
        year: "2026 - 現在",
        title: "フルスタックエンジニア & 卒業研究",
        subtitle: "IrusGear ECプラットフォーム",
        description:
          "卒業論文として、AIによる商品レコメンドシステムを統合した総合ECサイトを開発しています。チームで協働しながら、コアとなるデータベース設計を担当し、AI分類のための Python/FastAPI の統合、および Coolify と DigitalOcean による自動デプロイの運用を行っています。",
        badge: "卒業プロジェクト 🎓",
      },
      {
        year: "2025年後半",
        title: "Web開発インターン",
        subtitle: "TTR IT",
        description:
          "TTR IT にて13週間の実務インターンシップを修了し、TTR IT Company のための動的でレスポンシブなコーポレートサイトを開発しました。PHP と JavaScript を活用してパフォーマンスを最適化し、快適なユーザー体験を実現しました。",
        badge: "インターンシップ",
      },
      {
        year: "2024 - 2025",
        title: "モダンWebアーキテクチャの習得",
        subtitle: "Nuxt & Laravel エコシステム",
        description:
          "フルスタックアーキテクチャの実践的な応用に集中的に取り組みました。Laravel による堅牢なバックエンドと、Nuxt.js(v3・v4)による動的なフロントエンドを構築するとともに、Windows 上の WSL 2 と Laragon を用いてローカル開発環境を最適化しました。",
        badge: "",
      },
      {
        year: "2021 - 現在",
        title: "学術的基盤とAIの探究",
        subtitle: "ホーチミン市工業大学 (IUH)",
        description:
          "ソフトウェア工学の原則をしっかりと身につけながら、情報技術(IT)の学位取得を目指して学んでいます。技術的関心を人工知能へと広げ、LLMs やベクトル埋め込みに加え、Ollama などのローカルホスティングツールを研究し、AIとWeb開発の融合に取り組んでいます。",
        badge: "",
      },
    ],
    school: [
      {
        year: "2026",
        title: "卒業論文:AI統合ECサイト",
        subtitle: "ホーチミン市工業大学 (IUH)",
        description:
          "Đỗ Hà Phương 講師の指導のもと、卒業論文『Xây dựng website kinh doanh thiết bị điện tử tích hợp hệ thống gợi ý sản phẩm』に取り組んでいます。AIによるインテリジェントな商品分類を統合した、スケーラブルなフルスタックWebアプリケーションを設計しています。",
        badge: "卒業論文 🎓",
      },
      {
        year: "2023 - 2025",
        title: "高度なIT専門科目と学術研究",
        subtitle: "開発系専門モジュール",
        description:
          "Webシステムと技術、システム統合とアーキテクチャ、データベース管理システム、分散システム開発など、高度な専門課程を修了しました。また、Võ Công Minh 講師の指導のもと、学術研究および技術レポートの執筆を行いました。",
        badge: "専門課程",
      },
      {
        year: "2021 - 現在",
        title: "情報技術(IT)技術士課程",
        subtitle: "ホーチミン市工業大学 (IUH)",
        description:
          "コンピュータネットワークとWeb開発を専攻として学部課程を開始しました。ソフトウェア工学の原則、アルゴリズム設計、クリーンコードの実践、モダンWebアーキテクチャにわたる総合的な基礎を築きました。",
        badge: "学部課程",
      },
    ],
  },
  contact: {
    label: "ご連絡はこちら",
    title: "一緒に仕事をしましょう",
    body: "フルスタック開発についての意見交換や、モダンWebアーキテクチャでの協業、あるいは気軽なつながりでも構いません。以下のプラットフォームからお気軽にご連絡ください:",
    social: "[SNS]",
    community: "[コミュニティ]",
    emailLabel: "[メール]",
    codeLabel: "[コード]",
    openProfile: "→ プロフィールを開く",
    copyUsername: "→ ユーザー名をコピー",
    sendEmail: "→ メールを送る",
    viewGithub: "→ GitHubを見る",
    copied: "[コピーしました!]",
  },
  sound: {
    title: "サウンド設定",
    masterVolume: "マスター音量",
    buttonVolume: "ボタン操作音の音量",
    backgroundMusic: "BGM",
    ariaOn: "サウンド設定(音あり)",
    ariaOff: "サウンド設定(音なし)",
  },
  theme: {
    switchToLight: "ライトモードに切り替え",
    switchToDark: "ダークモードに切り替え",
  },
  language: {
    ariaLabel: "言語を変更",
  },
  common: {
    scrollToTop: "トップへ戻る",
  },
}
