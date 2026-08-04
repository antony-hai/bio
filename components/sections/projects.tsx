"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/resume";
import { useLanguage, type Lang } from "@/components/language-provider";
import { ArrowUpRight, CheckCircle2, ListChecks } from "lucide-react";

const deviconMap: Record<string, string> = {
  React: "react/react-original",
  Vue3: "vuejs/vuejs-original",
  TypeScript: "typescript/typescript-original",
  "Ant Design": "antdesign/antdesign-original",
  "Ant Design Pro 5": "antdesign/antdesign-original",
  "Next.js": "nextjs/nextjs-original",
  Node: "nodejs/nodejs-original",
  "Node.js": "nodejs/nodejs-original",
  MongoDB: "mongodb/mongodb-original",
  Pinia: "pinia/pinia-original",
  Vite: "vitejs/vitejs-original",
  Webpack: "webpack/webpack-original",
};

const fallbackInitialMap: Record<string, string> = {
  Vue3: "V",
  React: "R",
  TypeScript: "TS",
  "Ant Design": "A",
  "Ant Design Pro 5": "A",
  UmiJS: "U",
  "Next.js": "N",
  Node: "N",
  "Node.js": "N",
  MongoDB: "M",
  Echarts: "E",
  "AntV G6": "G6",
  "LLM API": "AI",
  SSE: "SSE",
  Pinia: "P",
  ElementPlus: "E+",
  微信小程序: "WX",
  "WeChat Mini Program": "WX",
  Taro: "T",
  UniApp: "U",
  Vite: "V",
  Webpack: "W",
  "Vant-Weapp": "VW",
  "微信H5支付": "Pay",
  "WeChat H5 Payment": "Pay",
  "weixin-js-sdk": "SDK",
  "Antd-mobile": "AM",
};

function getTechIconUrl(name: string) {
  const slug = deviconMap[name];
  if (!slug) return null;
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}.svg`;
}

function TechBadge({ name }: { name: string }) {
  const [iconError, setIconError] = useState(false);
  const iconUrl = getTechIconUrl(name);
  const initial = fallbackInitialMap[name] || name.slice(0, 2).toUpperCase();
  const hasIcon = iconUrl && !iconError;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground">
      {hasIcon ? (
        <span className="flex h-4 w-4 items-center justify-center">
          <img
            src={iconUrl}
            alt=""
            className="h-3.5 w-3.5 object-contain"
            loading="lazy"
            onError={() => setIconError(true)}
          />
        </span>
      ) : (
        <span className="flex h-4 w-4 items-center justify-center rounded-md bg-primary/10 text-[9px] font-bold text-primary">
          {initial}
        </span>
      )}
      {name}
    </span>
  );
}

const ui: Record<
  Lang,
  { title: string; responsibilities: string; achievements: string }
> = {
  zh: {
    title: "项目经验",
    responsibilities: "主要职责",
    achievements: "关键成果",
  },
  en: {
    title: "Projects",
    responsibilities: "Responsibilities",
    achievements: "Key Achievements",
  },
};

export function Projects() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const list = projects[lang];

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading slug="PROJECTS" title={t.title} />

        <div className="mt-12 space-y-5">
          {list.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
                className="group rounded-md border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md md:p-6"
              >
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 rounded-md bg-muted px-1.5 py-0.5 font-mono text-[10px] text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-card-foreground md:text-lg">
                        {project.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {project.company} · {project.period}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 md:mt-0" />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.intro}
                </p>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-card-foreground">
                      <ListChecks className="h-4 w-4 text-primary" />
                      {t.responsibilities}
                    </div>
                    <ul className="space-y-2">
                      {project.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-card-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {t.achievements}
                    </div>
                    <ul className="space-y-2">
                      {project.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
                  {project.stack.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
