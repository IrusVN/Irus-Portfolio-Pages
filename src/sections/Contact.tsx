import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const discordUsername = "hoangmai.";
  const email = "hoangmai020603@gmail.com";
  const githubUrl = "https://github.com/HoangMaiLapTrinh";

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(discordUsername);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-muted border-t-2 border-b-2 text-foreground"
    >
      <div className="container mx-auto px-4 max-w-xl text-center">
        <div className="space-y-2 mb-10">
          <h2 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
            {t("contact.label")}
          </h2>
          <h1 className="text-3xl font-bold text-foreground">
            {t("contact.title")}
          </h1>
        </div>

        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          {t("contact.body")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email — the primary channel recruiters use */}
          <a href={`mailto:${email}`} className="group">
            <Card className="border border-border bg-background/50 hover:border-foreground/25 transition-all duration-300 h-full flex items-center justify-center">
              <CardContent className="p-6 text-center">
                <span className="text-xs text-muted-foreground block mb-1">
                  {t("contact.emailLabel")}
                </span>
                <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors break-all">
                  {email}
                </span>
                <span className="text-[10px] text-muted-foreground block mt-2 group-hover:text-foreground/70">
                  {t("contact.sendEmail")}
                </span>
              </CardContent>
            </Card>
          </a>

          {/* GitHub — where technical recruiters look first */}
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="group">
            <Card className="border border-border bg-background/50 hover:border-foreground/25 transition-all duration-300 h-full flex items-center justify-center">
              <CardContent className="p-6 text-center">
                <span className="text-xs text-muted-foreground block mb-1">
                  {t("contact.codeLabel")}
                </span>
                <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  GitHub
                </span>
                <span className="text-[10px] text-muted-foreground block mt-2 group-hover:text-foreground/70">
                  {t("contact.viewGithub")}
                </span>
              </CardContent>
            </Card>
          </a>

          <a
            href="https://www.instagram.com/hoanqmaj/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="border border-border bg-background/50 hover:border-foreground/25 transition-all duration-300 h-full flex items-center justify-center">
              <CardContent className="p-6 text-center">
                <span className="text-xs text-muted-foreground block mb-1">
                  {t("contact.social")}
                </span>
                <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  Instagram
                </span>
                <span className="text-[10px] text-muted-foreground block mt-2 group-hover:text-foreground/70">
                  {t("contact.openProfile")}
                </span>
              </CardContent>
            </Card>
          </a>

          <button
            onClick={handleCopyDiscord}
            className="group text-left w-full"
          >
            <Card
              className={`border bg-background/50 transition-all duration-300 h-full flex items-center justify-center
              ${copied ? "border-emerald-400 bg-emerald-100/20 dark:border-emerald-900/50 dark:bg-emerald-950/5" : "border-border hover:border-foreground/25"}`}
            >
              <CardContent className="p-6 text-center w-full">
                <span className="text-xs text-muted-foreground block mb-1">
                  {t("contact.community")}
                </span>
                <span
                  className={`text-base font-bold transition-colors ${copied ? "text-emerald-600 dark:text-emerald-400" : "text-foreground group-hover:text-primary"}`}
                >
                  Discord
                </span>
                <span
                  className={`text-[10px] block mt-2 font-mono transition-colors ${copied ? "text-emerald-600 dark:text-emerald-500" : "text-muted-foreground group-hover:text-foreground/70"}`}
                >
                  {copied ? t("contact.copied") : t("contact.copyUsername")}
                </span>
              </CardContent>
            </Card>
          </button>
        </div>
      </div>
    </section>
  );
}
