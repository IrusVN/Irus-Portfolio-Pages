import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ImageOnlyModal } from "@/components/ImageOnlyModal";
import { motion } from "framer-motion";

// import fls3nCertificate from "@/assets/certificates/fls3n_certificate.jpg";
// import limitCertificate from "@/assets/certificates/limit_certificate.jpg";

interface JourneyItem {
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  badgeText?: string;
  isHighlight?: boolean;
  externalLink?: string;
  imageUrl?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  },
};

export default function Journey() {

  const devJourney: JourneyItem[] = [
    {
      year: "2026 - Present",
      title: "Full-stack Developer & Thesis Researcher",
      subtitle: "IrusGear E-commerce Platform",
      description:
        "Developing a comprehensive e-commerce website integrating an AI-driven product recommendation system for my graduation thesis. Collaborating with a team, I manage the core database architecture, integrate Python/FastAPI for AI classification, and handle automated deployments via Coolify and DigitalOcean.",
      badgeText: "Graduation Project 🎓",
      isHighlight: true,
      externalLink: "https://irusgear.me",
    },
    {
      year: "Late 2025",
      title: "Web Developer Intern",
      subtitle: "TTR IT",
      description:
        "Completed a 13-week professional internship at TTR IT, where I developed a dynamic and responsive corporate website for Tan Huy Company. Utilized PHP and JavaScript to optimize performance and deliver a seamless user experience.",
      badgeText: "Internship",
      isHighlight: true,
    },
    {
      year: "2024 - 2025",
      title: "Mastering Modern Web Architecture",
      subtitle: "Nuxt & Laravel Ecosystem",
      description:
        "Focused on in-depth practical application of full-stack architectures. Built robust backends with Laravel and dynamic frontends with Nuxt.js (v3 & v4), while optimizing local development environments using WSL 2 and Laragon on Windows.",
    },
    {
      year: "2021 - Present",
      title: "Academic Foundation & AI Exploration",
      subtitle: "Industrial University of Ho Chi Minh City (IUH)",
      description:
        "Pursuing a degree in Information Technology with a strong foundation in software engineering principles. Expanded technical interests into Artificial Intelligence, researching LLMs, vector embeddings, and local hosting tools like Ollama to bridge AI with web development.",
      badgeText: "",
    },
  ];

  const schoolJourney: JourneyItem[] = [
    {
      year: "2026",
      title: "Graduation Thesis: AI-Integrated E-commerce",
      subtitle: "Industrial University of Ho Chi Minh City (IUH)",
      description:
        "Developing graduation thesis 'Xây dựng website kinh doanh thiết bị điện tử tích hợp hệ thống gợi ý sản phẩm' under the academic supervision of instructor Đỗ Hà Phương. Designing a scalable full-stack web application integrated with intelligent AI product classification.",
      badgeText: "Graduation Thesis 🎓",
      isHighlight: true,
    },
    {
      year: "2023 - 2025",
      title: "Advanced IT Coursework & Academic Research",
      subtitle: "Specialized Development Modules",
      description:
        "Completed rigorous specialized coursework including Web Systems and Technologies, System Integration and Architecture, Database Management Systems, and Distributed System Development. Conducted academic research and technical essays under the guidance of instructor Võ Công Minh.",
      badgeText: "Core Studies",
      isHighlight: false,
    },
    {
      year: "2021 - Present",
      title: "Bachelor of Information Technology",
      subtitle: "Industrial University of Ho Chi Minh City (IUH)",
      description:
        "Commenced undergraduate studies majoring in Computer Networks and Web Development. Built a comprehensive foundation in software engineering principles, algorithm design, clean code practices, and modern web architectures.",
      badgeText: "Undergraduate",
      isHighlight: false,
    }
  ];

  const renderTimeline = (items: JourneyItem[], tabKey: string) => (
    <motion.div
      key={tabKey}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative border-l border-zinc-900 ml-4 mt-6 space-y-8"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.015, x: 4 }}
          transition={{ type: "spring", duration: 0.3, bounce: 0.2 }}
          className="relative pl-8 group cursor-pointer"
        >
          <div
            className={`absolute -left-2.25 top-1.5 h-4 w-4 rounded-full border-4 transition-colors duration-300
            ${
              item.isHighlight
                ? "bg-amber-400 border-zinc-950 group-hover:bg-amber-300"
                : "bg-zinc-800 border-zinc-950 group-hover:bg-primary"
            }`}
          />

          <Card
            className={`border bg-zinc-950/50 transition-all duration-300
            ${
              item.isHighlight
                ? "border-amber-900/40 bg-amber-950/5 hover:border-amber-800/60"
                : "border-zinc-900 hover:border-zinc-800"
            }`}
          >
            <CardContent className="p-5 font-mono">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span
                  className={`text-sm font-bold ${item.isHighlight ? "text-amber-400" : "text-zinc-500"}`}
                >
                  {item.year}
                </span>
                {item.badgeText && (
                  <span
                    className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border 
                    ${
                      item.isHighlight
                        ? "bg-amber-900/30 text-amber-300 border-amber-800/50"
                        : "bg-zinc-900 text-zinc-400 border-zinc-800"
                    }`}
                  >
                    {item.badgeText}
                  </span>
                )}
              </div>

              <h3
                className={`text-lg font-bold ${item.isHighlight ? "text-amber-100" : "text-zinc-200"}`}
              >
                {item.title}
              </h3>

              {item.subtitle && (
                <p className="text-xs text-zinc-500 mt-0.5">{item.subtitle}</p>
              )}

              <p className="text-xs text-zinc-405 mt-3 leading-relaxed">
                {item.description}
              </p>

              <div className="flex mt-4 justify-end">
                {item.imageUrl && (
                  <ImageOnlyModal
                    imageUrl={item.imageUrl}
                    altText={item.description}
                    isAchievement={item.isHighlight}
                  ></ImageOnlyModal>
                )}
                {item.externalLink && (
                  <a
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className={`mt-3 text-xs font-mono px-3 py-1.5 rounded-md border transition-colors w-fit 
                    ${
                      item.isHighlight
                        ? "text-amber-400 border-amber-900/30 bg-amber-950/20 hover:bg-amber-950/50 hover:border-amber-800"
                        : ""
                    }`}
                    >
                      View More
                    </button>
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <>
      <section
        id="journey"
        className="py-20 bg-zinc-950 text-zinc-100 border-b border-zinc-900"
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-2 mb-10">
            <h2 className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">
              Timeline & History
            </h2>
            <h1 className="text-3xl font-bold text-zinc-100">My Journey</h1>
          </div>

          <Tabs defaultValue="dev" className="w-full">
            <TabsList className="flex w-full mt-8 mb-3 h-auto! items-stretch border border-zinc-900 bg-zinc-950">
              <TabsTrigger
                value="dev"
                className="h-full! flex-1 text-md font-medium transition-all"
              >
                Dev Milestones
              </TabsTrigger>
              <TabsTrigger
                value="school"
                className="h-full! flex-1 text-md font-medium transition-all"
              >
                School & Achievements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dev" className="focus-visible:outline-none">
              {renderTimeline(devJourney, "dev-timeline")}
            </TabsContent>

            <TabsContent value="school" className="focus-visible:outline-none">
              {renderTimeline(schoolJourney, "school-timeline")}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
