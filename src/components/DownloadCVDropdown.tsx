"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { Download, ChevronDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DownloadCVDropdown() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [closing, setClosing] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const closeTimerRef = React.useRef<number | null>(null);

  const close = React.useCallback(() => {
    setClosing(true);
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
      closeTimerRef.current = null;
    }, 180);
  }, []);

  React.useEffect(() => {
    // Only attach outside-click and keyboard listeners when the dropdown is actually open.
    // This prevents any outside clicks (like theme toggle or menu items) from triggering closing animation when closed.
    if (!open) return;

    function onDoc(e: MouseEvent | PointerEvent) {
      if (!ref.current) return;
      if (e.target instanceof Node && !ref.current.contains(e.target)) {
        close();
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
      }
    }

    // Use pointerdown so both mouse clicks and mobile touch taps outside immediately close the dropdown
    document.addEventListener("pointerdown", onDoc);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onDoc);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [close, open]);

  React.useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const handleToggleOpen = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (open) {
      close();
      return;
    }
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setClosing(false);
    setOpen(true);
  };

  const handleItemClick = () => {
    close();
  };

  const cvOptions = [
    {
      key: "vn",
      title: t("hero.cvVietnamese"),
      fileName: "CV_MAILEHUYHOANG_VN.pdf",
      href: "/cv/CV_MAILEHUYHOANG_VN.pdf",
      download: "CV_MAILEHUYHOANG_VN.pdf",
      badge: "VN",
    },
    {
      key: "en",
      title: t("hero.cvEnglish"),
      fileName: "CV_MAILEHUYHOANG_EN.pdf",
      href: "/cv/CV_MAILEHUYHOANG_EN.pdf",
      download: "CV_MAILEHUYHOANG_EN.pdf",
      badge: "EN",
    },
  ];

  return (
    <div className="relative inline-block" ref={ref}>
      <Button
        variant="outline"
        className="p-6 cursor-pointer touch-manipulation"
        onClick={handleToggleOpen}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={t("hero.downloadCV")}
      >
        <Download className="mr-1 h-4 w-4" />
        {t("hero.downloadCV")}
        <ChevronDown
          className={`ml-1 h-4 w-4 text-muted-foreground transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </Button>

      {(open || closing) && (
        <div
          className={`absolute left-0 mt-2 w-72 sm:w-80 max-w-[calc(100vw-2.5rem)] origin-top-left overflow-hidden rounded-none border border-primary/60 bg-popover/95 bg-[radial-gradient(circle_at_top_left,rgba(25,60,184,0.14),transparent_34%)] p-1.5 shadow-[0_20px_80px_rgba(0,0,0,0.25),0_0_0_1px_rgba(25,60,184,0.15)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(25,60,184,0.18)] backdrop-blur-xl z-50 ${
            open
              ? "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200 ease-out"
              : "animate-out fade-out-0 zoom-out-95 slide-out-to-top-2 duration-180 ease-in"
          }`}
          role="menu"
          aria-orientation="vertical"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/90 to-transparent" />

          <div className="flex items-center justify-between px-3 py-2 border-b border-border/50 mb-1 text-[10px] font-mono text-muted-foreground tracking-wider uppercase">
            <span>{t("hero.selectCV")}</span>
            <span className="text-[10px] text-primary font-bold">PDF</span>
          </div>

          <div className="flex flex-col gap-1">
            {cvOptions.map((cv) => (
              <a
                key={cv.key}
                href={cv.href}
                download={cv.download}
                role="menuitem"
                onClick={handleItemClick}
                className="group/item flex items-center justify-between px-3 py-3 rounded-none font-mono text-xs transition-colors hover:bg-primary/10 active:bg-primary/20 hover:text-foreground text-muted-foreground border border-transparent hover:border-border/60"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <FileText className="h-4 w-4 text-primary shrink-0 transition-colors" />
                  <div className="flex flex-col text-left min-w-0">
                    <span className="font-semibold text-foreground truncate">
                      {cv.title}
                    </span>
                    <span className="text-[10px] text-muted-foreground/80 truncate">
                      {cv.fileName}
                    </span>
                  </div>
                </div>
                <span className="ml-2 text-[10px] font-bold uppercase px-1.5 py-0.5 border border-border/60 bg-muted/50 text-muted-foreground group-hover/item:border-primary/50 group-hover/item:text-primary group-active/item:text-primary shrink-0">
                  {cv.badge}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
