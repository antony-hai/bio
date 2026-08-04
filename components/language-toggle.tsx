"use client";

import { useLanguage, type Lang } from "./language-provider";
import { cn } from "@/lib/utils";

const labels: Record<Lang, string> = {
  zh: "中",
  en: "En",
};

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      aria-label={lang === "zh" ? "Switch to English" : "切换到中文"}
      title={lang === "zh" ? "Switch to English" : "切换到中文"}
    >
      {labels[lang]}
    </button>
  );
}
