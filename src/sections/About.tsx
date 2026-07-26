import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();

  return (
    <>
      <section id="aboutme">
        <div className="relative flex pt-14 pb-14 pr-16 pl-16 md:pr-28 md:pl-28 flex-col justify-between md:flex-row w-full gap-8 bg-muted border-t-2 border-b-2">
          <div className="flex flex-col items-baseline text-left md:items-start md:w-1/2 tracking-wide">
            <h2 className="text-1xl font-extralight text-foreground">
              {t("about.label")}
            </h2>
            <h1 className="text-4xl font-extrabold">{t("about.title")}</h1>
          </div>
          <div className="flex flex-col items-baseline text-left md:items-start md:w-1/2">
            <p className="text-1xl text-foreground/80">
              {t("about.body")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutMe;
