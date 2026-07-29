import ProjectCard from "@/components/projectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  title: string;
  year: number;
  description: string;
  techStack: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl?: string;
  isSolo: boolean;
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

function Projects() {
  const { t } = useTranslation();

  // Structural data lives here; translatable text comes from the dictionary
  const projectList: ProjectCardProps[] = [
    {
      title: "Irus Gear",
      year: 2026,
      description: t("projects.items.irusGear.description"),
      techStack: [t("projects.tags.frontend"), t("projects.tags.backend")],
      imageUrl:
        "https://repository-images.githubusercontent.com/1132107430/bc598e05-ec8c-45b2-bf66-1a99b522c2be",
      projectUrl: "https://irusgear.me/",
      githubUrl: "https://github.com/HoangMaiLapTrinh/irusgear-frontend",
      isSolo: true,
    },
  ];

  return (
    <>
      <section id="projects">
        <div className="relative py-12 px-4 sm:px-8 md:px-12 lg:px-24 w-full">
          <div className="container flex flex-col items-center mx-auto">
            <h2 className="text-4xl font-extrabold text-center">{t("projects.title")}</h2>

            <Tabs defaultValue="solo" className="w-full">
              <TabsList className="flex w-full mt-8 mb-3 h-auto! items-stretch border border-border bg-background">
                <TabsTrigger
                  value="solo"
                  className="h-full! flex-1 text-xs sm:text-sm md:text-md font-medium transition-all whitespace-normal break-words px-2 sm:px-4 h-auto"
                >
                  {t("projects.soloTab")}
                </TabsTrigger>
                <TabsTrigger
                  value="team"
                  className="h-full! flex-1 text-xs sm:text-sm md:text-md font-medium transition-all whitespace-normal break-words px-2 sm:px-4 h-auto"
                >
                  {t("projects.teamTab")}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="solo" className="focus-visible:outline-none">
                <motion.div
                  key="solo-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                  {projectList.map(
                    (value, index) =>
                      value.isSolo && (
                        <ProjectCard
                          key={`solo-${index}`}
                          title={value.title}
                          description={value.description}
                          year={value.year}
                          techStack={value.techStack}
                          imageUrl={value.imageUrl}
                          projectUrl={value.projectUrl}
                          githubUrl={value.githubUrl}
                        />
                      ),
                  )}
                </motion.div>
              </TabsContent>

              <TabsContent value="team" className="focus-visible:outline-none">
                <motion.div
                  key="team-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                  {projectList.map(
                    (value, index) =>
                      !value.isSolo && (
                        <ProjectCard
                          key={`team-${index}`}
                          title={value.title}
                          description={value.description}
                          year={value.year}
                          techStack={value.techStack}
                          imageUrl={value.imageUrl}
                          projectUrl={value.projectUrl}
                          githubUrl={value.githubUrl}
                        />
                      ),
                  )}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
