"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/resume";
import { useLanguage, type Lang } from "@/components/language-provider";
import { Briefcase } from "lucide-react";

const ui: Record<Lang, { title: string }> = {
  zh: { title: "工作经历" },
  en: { title: "Work Experience" },
};

export function Experience() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const list = experiences[lang];

  return (
    <section id="experience" className="py-24 px-6 bg-muted/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading slug="EXPERIENCE" title={t.title} />

        <div className="mt-12 space-y-6">
          {list.map((exp, index) => (
            <FadeIn
              key={exp.id}
              delay={index * 0.1}
              direction="up"
              duration={0.5}
            >
              <div className="group flex gap-6">
                {/* Timeline */}
                <div className="relative flex w-10 flex-shrink-0 flex-col items-center self-stretch">
                  <span className="z-10 mt-2 h-3 w-3 rounded-full border-2 border-primary bg-background shadow-sm transition-colors group-hover:bg-primary" />
                  {index !== list.length - 1 && (
                    <span className="absolute left-1/2 top-6 h-full w-px -translate-x-1/2 bg-border" />
                  )}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 24 }}
                  className="flex-1 overflow-hidden rounded-md border border-border bg-card transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="p-5 md:p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <Briefcase className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-card-foreground">
                              {exp.company}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {exp.role}
                            </p>
                          </div>
                        </div>

                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{
                            duration: 0.5,
                            delay: 0.1 + index * 0.06,
                          }}
                          className="mt-4 leading-relaxed text-muted-foreground"
                        >
                          {exp.description}
                        </motion.p>

                        <ul className="mt-4 space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: "-60px" }}
                              transition={{
                                duration: 0.4,
                                delay: 0.2 + index * 0.06 + i * 0.05,
                              }}
                              className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                            >
                              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:text-right">
                        <span className="inline-flex rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
