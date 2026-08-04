"use client";

import { profile } from "@/data/resume";
import { useLanguage, type Lang } from "@/components/language-provider";

const ui: Record<Lang, { builtWith: string }> = {
  zh: { builtWith: "使用 Next.js + React + TypeScript + Tailwind CSS 构建" },
  en: { builtWith: "Built with Next.js + React + TypeScript + Tailwind CSS" },
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { lang } = useLanguage();
  const p = profile[lang];
  const t = ui[lang];

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {p.name}. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          {t.builtWith}
        </p>
      </div>
    </footer>
  );
}
