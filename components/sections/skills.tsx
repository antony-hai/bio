"use client";

import {
  Atom,
  Bot,
  Boxes,
  Braces,
  ChartColumn,
  CodeXml,
  Database,
  GitBranch,
  Layers,
  Network,
  Package,
  Palette,
  Server,
  Smartphone,
  Sparkles,
  Triangle,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups, type SkillTier } from "@/data/resume";
import { useLanguage, type Lang } from "@/components/language-provider";
import { cn } from "@/lib/utils";

const ui: Record<
  Lang,
  {
    title: string;
    tiers: Record<SkillTier, string>;
  }
> = {
  zh: {
    title: "专业技能",
    tiers: {
      expert: "精通",
      proficient: "熟练",
      familiar: "熟悉",
    },
  },
  en: {
    title: "Skills",
    tiers: {
      expert: "Expert",
      proficient: "Proficient",
      familiar: "Familiar",
    },
  },
};

/** 技能项 → 图标，中英名称各一份，未命中时回落到 Boxes */
const skillIcons: Record<string, LucideIcon> = {
  React: Atom,
  Vue3: Triangle,
  TypeScript: Braces,
  "ES6/7+": CodeXml,
  "CSS3 / Tailwind": Palette,
  Echarts: ChartColumn,
  "AntV G6 / D3": Network,
  "Next.js / Vite": Zap,
  "Webpack / UmiJS": Package,
  "微信小程序 / Taro / UniApp": Smartphone,
  "WeChat Mini Program / Taro / UniApp": Smartphone,
  "Qiankun 微前端": Layers,
  "Qiankun Micro-frontend": Layers,
  "Node.js / BFF": Server,
  "LLM API / RAG": Sparkles,
  "AI Agent / SSE": Bot,
  MongoDB: Database,
  "CI/CD 部署": GitBranch,
  "CI/CD Deployment": GitBranch,
};

const tierOrder: SkillTier[] = ["expert", "proficient", "familiar"];

/** 三档全部用主题色，只调深浅；文字统一用前景色，深浅色主题下都清晰 */
const tierChip: Record<SkillTier, string> = {
  expert:
    "border-primary/40 bg-primary/20 font-medium text-foreground hover:border-primary/60",
  proficient:
    "border-primary/20 bg-primary/5 text-foreground hover:border-primary/40",
  familiar: "border-border bg-card text-foreground hover:border-primary/40",
};

const tierIcon: Record<SkillTier, string> = {
  expert: "text-primary",
  proficient: "text-primary/80",
  familiar: "text-primary/70",
};

const tierMeter: Record<SkillTier, number> = {
  expert: 3,
  proficient: 2,
  familiar: 1,
};

export function Skills() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const groups = skillGroups[lang];

  return (
    <section id="skills" className="py-24 px-6 bg-muted/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading slug="SKILLS" title={t.title} />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {groups.map((group, groupIndex) => (
            <FadeIn key={group.category} delay={groupIndex * 0.08} className="h-full">
              <div className="h-full rounded-md border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md md:p-6">
                <h3 className="text-sm font-semibold text-card-foreground">
                  {group.category}
                </h3>
                <div className="mt-4 space-y-3">
                  {tierOrder.map((tier) => {
                    const items = group.items.filter((item) => item.tier === tier);
                    if (items.length === 0) return null;
                    return (
                      <div key={tier} className="flex gap-3">
                        <div className="w-16 flex-shrink-0 sm:w-20">
                          <span className="block whitespace-nowrap text-[11px] leading-5 text-muted-foreground">
                            {t.tiers[tier]}
                          </span>
                          <div className="mt-1 flex gap-0.5" aria-hidden="true">
                            {[0, 1, 2].map((segment) => (
                              <span
                                key={segment}
                                className={cn(
                                  "h-1 w-2.5 rounded-full",
                                  segment < tierMeter[tier]
                                    ? "bg-primary"
                                    : "bg-primary/15"
                                )}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((item) => {
                            const Icon = skillIcons[item.name] ?? Boxes;
                            return (
                              <span
                                key={item.name}
                                className={cn(
                                  "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs leading-5 transition-colors",
                                  tierChip[tier]
                                )}
                              >
                                <Icon
                                  className={cn("h-3.5 w-3.5 flex-shrink-0", tierIcon[tier])}
                                  strokeWidth={1.75}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
