import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type SkillLevel = "advanced" | "intermediate" | "familiar" | "beginner";

const getLevelColor = (level: SkillLevel) => {
  switch (level) {
    case "advanced":
      return "text-emerald-700 bg-emerald-100/60 border-emerald-300 dark:text-emerald-400 dark:bg-emerald-950/40 dark:border-emerald-900/50";
    case "intermediate":
      return "text-amber-700 bg-amber-100/60 border-amber-300 dark:text-amber-400 dark:bg-amber-950/40 dark:border-amber-900/50";
    default:
      return "text-muted-foreground bg-muted border-border";
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
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

function TechStack() {
  const { t } = useTranslation();
  const categoryTitles = t("techStack.categories", { returnObjects: true }) as string[];

  // Skill names are tech terms — untranslated; category titles and levels come from the dictionary
  const categories: { title: string; skills: { name: string; level: SkillLevel }[] }[] = [
    {
      title: categoryTitles[0],
      skills: [
        { name: "PHP", level: "advanced" },
        { name: "JavaScript / TypeScript", level: "advanced" },
        { name: "Python", level: "intermediate" },
        { name: "HTML / CSS", level: "advanced" },
      ],
    },
    {
      title: categoryTitles[1],
      skills: [
        { name: "Nuxt.js", level: "advanced" },
        { name: "Laravel", level: "advanced" },
        { name: "Vue.js", level: "advanced" },
        { name: "FastAPI", level: "intermediate" },
      ],
    },
    {
      title: categoryTitles[2],
      skills: [
        { name: "PostgreSQL", level: "advanced" },
        { name: "Supabase", level: "intermediate" },
        { name: "LLMs / AI Agents", level: "intermediate" },
      ],
    },
    {
      title: categoryTitles[3],
      skills: [
        { name: "Git / GitHub", level: "advanced" },
        { name: "DigitalOcean", level: "intermediate" },
        { name: "Coolify", level: "intermediate" },
      ],
    },
    {
      title: categoryTitles[4],
      skills: [
        { name: "WSL 2 (Windows 11)", level: "advanced" },
        { name: "Laragon", level: "advanced" },
        { name: "Ollama / Claude Code", level: "intermediate" },
      ],
    },
  ];

  const levelLabels: Record<SkillLevel, string> = {
    advanced: t("techStack.levels.advanced"),
    intermediate: t("techStack.levels.intermediate"),
    familiar: t("techStack.levels.familiar"),
    beginner: t("techStack.levels.beginner"),
  };

  return (
    <>
      <section id="techstack">
        <div className="relative flex py-12 px-4 sm:px-8 md:px-12 lg:px-24 flex-col justify-between w-full gap-8 bg-muted border-t-2 border-b-2">
          <div className="flex flex-col items-baseline text-left md:items-start tracking-wide">
            <h2 className="text-1xl font-extralight text-foreground">
              {t("techStack.label")}
            </h2>
            <h1 className="text-4xl font-extrabold">{t("techStack.title")}</h1>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", duration: 0.3, bounce: 0.2 }}
                className="h-full w-full custom-card-motion-wrapper"
              >
                <Card className="border-border bg-background/50 hover:border-foreground/25 transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-mono font-bold text-foreground uppercase tracking-wider">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between font-mono bg-muted/40 border border-border px-3 py-2 rounded-md hover:border-foreground/25 transition-colors"
                      >
                        <span className="text-sm font-medium text-foreground/80">
                          {skill.name}
                        </span>

                        <span
                          className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border transition-colors ${getLevelColor(skill.level)}`}
                        >
                          {levelLabels[skill.level]}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default TechStack;
