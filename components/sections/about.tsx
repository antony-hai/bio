"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { ImpactMap } from "@/components/impact-map";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/resume";
import { useLanguage, type Lang } from "@/components/language-provider";
import { Sparkles, Target, Users, Zap } from "lucide-react";

const ui: Record<
  Lang,
  {
    title: string;
    intro: string;
    strengths: string;
    quote: string;
    highlights: { title: string; desc: string }[];
  }
> = {
  zh: {
    title: "关于我",
    intro: "个人简介",
    strengths: "核心优势",
    quote: "技术思维与商业视角并重，在复杂业务里寻找优雅的工程解。",
    highlights: [
      {
        title: "工程化能力",
        desc: "10年全栈前端经验，精通React/Vue3/TypeScript及现代工程化工具链",
      },
      {
        title: "AI 前端",
        desc: "熟悉LLM API、RAG、AI Agent界面开发与SSE流式渲染",
      },
      {
        title: "业务理解",
        desc: "深耕医疗、教育、金融、SaaS多行业，快速输出高质量技术方案",
      },
      {
        title: "团队协作",
        desc: "具备技术培训、文档输出、跨团队需求对接与标准化落地能力",
      },
    ],
  },
  en: {
    title: "About Me",
    intro: "Introduction",
    strengths: "Core Strengths",
    quote: "Balancing technical thinking with business perspective to find elegant engineering solutions in complex domains.",
    highlights: [
      {
        title: "Engineering",
        desc: "10 years of full-stack frontend experience, proficient in React/Vue3/TypeScript and modern engineering toolchains",
      },
      {
        title: "AI Frontend",
        desc: "Familiar with LLM APIs, RAG, AI Agent UI development, and SSE streaming rendering",
      },
      {
        title: "Business Sense",
        desc: "Deep experience in healthcare, education, finance, and SaaS, quickly delivering high-quality technical solutions",
      },
      {
        title: "Collaboration",
        desc: "Skilled in technical training, documentation, cross-team requirement alignment, and standardization",
      },
    ],
  },
};

export function About() {
  const { lang } = useLanguage();
  const p = profile[lang];
  const t = ui[lang];

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading slug="ABOUT" title={t.title} />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <FadeIn delay={0.2} className="lg:col-span-7">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
              className="flex h-full flex-col rounded-md border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md md:p-8"
            >
              <h3 className="mb-5 text-base font-semibold text-card-foreground">
                {t.intro}
              </h3>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                {p.aboutSummary.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.3} className="lg:col-span-5">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
              className="flex h-full flex-col rounded-md border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md md:p-8"
            >
              <h3 className="mb-5 text-base font-semibold text-card-foreground">
                {t.strengths}
              </h3>
              <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {t.highlights.map((item) => (
                  <div key={item.title} className="group flex items-start gap-3">
                    <div className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      {item.title === "工程化能力" || item.title === "Engineering" ? (
                        <Zap className="h-4 w-4" />
                      ) : item.title === "AI 前端" || item.title === "AI Frontend" ? (
                        <Sparkles className="h-4 w-4" />
                      ) : item.title === "业务理解" || item.title === "Business Sense" ? (
                        <Target className="h-4 w-4" />
                      ) : (
                        <Users className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-card-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="mt-5">
          <ImpactMap />
        </FadeIn>

        <FadeIn delay={0.5} className="mt-5">
          <div className="rounded-md border-l-2 border-primary bg-muted/30 p-6 md:p-8">
            <p className="text-lg font-medium leading-relaxed text-foreground sm:text-xl">
              {t.quote}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
