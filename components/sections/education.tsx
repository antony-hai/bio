"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/data/resume";
import { useLanguage, type Lang } from "@/components/language-provider";
import { GraduationCap } from "lucide-react";

const ui: Record<Lang, { title: string }> = {
  zh: { title: "教育背景" },
  en: { title: "Education" },
};

export function Education() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const list = education[lang];

  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading slug="EDUCATION" title={t.title} />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {list.map((edu, index) => (
            <FadeIn key={edu.school + edu.major} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
                className="group flex h-full items-start gap-4 rounded-md border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md md:p-6"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-card-foreground">
                    {edu.school}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {edu.major} · {edu.degree}
                  </p>
                  <p className="mt-3 font-mono text-xs text-primary">{edu.period}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
