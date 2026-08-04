"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "next-themes";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/resume";
import { useLanguage, type Lang } from "@/components/language-provider";

const ui: Record<
  Lang,
  { title: string; radarTitle: string; radarCaption: string; radarName: string }
> = {
  zh: {
    title: "专业技能",
    radarTitle: "能力雷达",
    radarCaption: "按技术维度聚合的平均熟练度",
    radarName: "技能水平",
  },
  en: {
    title: "Skills",
    radarTitle: "Skill Radar",
    radarCaption: "Average proficiency aggregated by technical dimension",
    radarName: "Skill Level",
  },
};

function SkillBar({ level }: { level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div
      ref={ref}
      className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted"
    >
      <motion.div
        className="h-full rounded-full bg-primary"
        initial={{ width: 0 }}
        animate={{ width: isInView ? `${level}%` : 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      />
    </div>
  );
}

export function Skills() {
  const { resolvedTheme } = useTheme();
  const { lang } = useLanguage();
  const t = ui[lang];
  const groups = skillGroups[lang];

  const radarData = groups.map((group) => ({
    subject: group.category,
    A: Math.round(
      group.items.reduce((acc, item) => acc + item.level, 0) / group.items.length
    ),
    fullMark: 100,
  }));

  const isDark = resolvedTheme === "dark";

  const gridStroke = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)";
  const axisFill = isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.65)";
  const radarColor = "var(--primary)";
  const fillOpacity = isDark ? 0.2 : 0.12;

  return (
    <section id="skills" className="py-24 px-6 bg-muted/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading slug="SKILLS" title={t.title} />

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          <FadeIn delay={0.1} className="lg:col-span-2 h-full">
            <div className="flex h-full flex-col rounded-md border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md md:p-6">
              <h3 className="mb-1 text-base font-semibold text-card-foreground">
                {t.radarTitle}
              </h3>
              <p className="mb-5 text-sm text-muted-foreground">
                {t.radarCaption}
              </p>
              <div className="min-h-[240px] flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                    <PolarGrid stroke={gridStroke} />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: axisFill, fontSize: 11, fontWeight: 500 }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={false}
                      axisLine={false}
                    />
                    <Radar
                      name={t.radarName}
                      dataKey="A"
                      stroke={radarColor}
                      strokeWidth={2}
                      fill={radarColor}
                      fillOpacity={fillOpacity}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </FadeIn>

          <div className="space-y-4 lg:col-span-3">
            {groups.map((group, groupIndex) => (
              <FadeIn key={group.category} delay={0.2 + groupIndex * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.003 }}
                  transition={{ type: "spring", stiffness: 500, damping: 24 }}
                  className="rounded-md border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <h3 className="mb-4 text-sm font-semibold text-card-foreground">
                    {group.category}
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {group.items.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                            {skill.name}
                          </span>
                          <span className="font-mono text-xs text-primary">
                            {skill.level}
                          </span>
                        </div>
                        <SkillBar level={skill.level} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
