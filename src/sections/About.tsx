import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();

  return (
    <>
      <section id="aboutme">
        <div className="relative flex py-12 px-4 sm:px-8 md:px-12 lg:px-24 flex-col justify-between md:flex-row w-full gap-2 bg-muted border-t-2 border-b-2">
          <div className="flex flex-col items-baseline text-left md:items-start md:w-1/2 tracking-wide">
            <h2 className="text-1xl font-extralight text-foreground">
              {t("about.label")}
            </h2>
            <h1 className="text-4xl font-extrabold pt-2">{t("about.title")}</h1>
          </div>
          <div className="flex flex-col items-baseline text-left md:items-start md:w-1/2">
            <p className="text-1xl text-foreground/80 indent-4">
              {t("about.body")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutMe;
