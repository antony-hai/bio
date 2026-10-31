"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, ArrowDown } from "lucide-react";
import { profile } from "@/data/resume";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

const highlights: {
  value: Record<"zh" | "en", string>;
  label: Record<"zh" | "en", string>;
}[] = [
  {
    value: { zh: "中后台 · 可视化", en: "Admin · Visualization" },
    label: { zh: "核心方向", en: "Core Focus" },
  },
  {
    value: { zh: "Node.js", en: "Node.js" },
    label: { zh: "BFF · CI/CD", en: "BFF · CI/CD" },
  },
  {
    value: { zh: "AI 前端", en: "AI Frontend" },
    label: { zh: "LLM · RAG · SSE", en: "LLM · RAG · SSE" },
  },
  {
    value: { zh: "医疗 · 教育 · 金融", en: "Healthcare · EdTech · Finance" },
    label: { zh: "多行业落地", en: "Industries" },
  },
];

const ui = {
  zh: {
    portfolio: "Portfolio / 2026",
    contact: "联系我",
    projects: "查看项目",
    scroll: "向下滚动",
  },
  en: {
    portfolio: "Portfolio / 2026",
    contact: "Contact Me",
    projects: "View Projects",
    scroll: "Scroll down",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function Hero() {
  const { lang } = useLanguage();
  const p = profile[lang];
  const t = ui[lang];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-3xl text-center"
      >
        <motion.div variants={item} className="flex items-center justify-center gap-3">
          <span className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {t.portfolio}
          </span>
          <span className="h-px w-10 bg-border" />
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-6 text-[clamp(3rem,12vw,7rem)] font-semibold leading-[0.95] tracking-tight text-foreground"
        >
          {p.name}
        </motion.h1>

        <motion.div variants={item} className="mt-3 flex items-center justify-center gap-3">
          <span className="font-mono text-xs tracking-[0.2em] text-primary">
            LIU HAI
          </span>
          <span className="h-px w-10 bg-border" />
        </motion.div>

        <motion.div variants={item} className="mt-8">
          <p className="mx-auto max-w-2xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
            {p.title}
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {highlights.map((h) => (
            <div
              key={h.label.zh}
              className="flex flex-col items-center justify-center gap-0.5 rounded-md border border-border bg-card px-3 py-2.5 text-center"
            >
              <span className="text-sm font-semibold leading-snug text-foreground sm:text-base">
                {h.value[lang]}
              </span>
              <span className="text-xs text-muted-foreground">{h.label[lang]}</span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-10">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {p.summary[0]}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${p.email}`}
              className={cn(
                "group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              )}
            >
              <Mail className="h-4 w-4" />
              {t.contact}
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
            >
              {t.projects}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <motion.div
            variants={item}
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {p.status} · {p.experience}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full p-2.5 text-muted-foreground transition-colors hover:text-primary"
        aria-label={t.scroll}
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
