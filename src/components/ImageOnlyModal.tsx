import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

interface ImageOnlyModalProps {
  imageUrl: string;
  altText: string;
  isAchievement?: boolean;
}

function getColor(isAchievement: boolean) {
  if (isAchievement) {
    return `text-amber-700 border-amber-300 bg-amber-100/40 hover:bg-amber-100 hover:border-amber-400 dark:text-amber-400 dark:border-amber-900/30 dark:bg-amber-950/20 dark:hover:bg-amber-950/50 dark:hover:border-amber-800`;
  } else {
    return ``;
  }
}

export function ImageOnlyModal({
  imageUrl,
  altText,
  isAchievement = false,
}: ImageOnlyModalProps) {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger>
        <button
          className={`mt-3 text-xs font-mono px-3 py-1.5 rounded-md border transition-colors w-fit ${getColor(isAchievement)}`}
        >
          {t("journey.viewImage")}
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-175 border-border bg-background p-2 text-foreground overflow-hidden">
        <div className="relative w-full overflow-hidden rounded-md bg-muted aspect-4/3 sm:aspect-16/10">
          <img
            src={imageUrl}
            alt={altText}
            loading="lazy"
            className="h-full w-full object-contain object-center"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
