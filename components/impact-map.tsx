"use client";

import { motion, useReducedMotion } from "framer-motion";
import { impactLinks } from "@/data/resume";
import { useLanguage, type Lang } from "@/components/language-provider";

const ui: Record<Lang, { title: string; basis: string }> = {
  zh: { title: "可量化成果", basis: "以各项目改造前 = 100 为基准" },
  en: {
    title: "Measurable Impact",
    basis: "Baseline = 100 before each refactor",
  },
};

const BASELINE = 100;
const MAX = 180;

function toPct(value: number) {
  return Math.max(0, Math.min(100, (value / MAX) * 100));
}

const ticks = [0, 50, 100, 150];

const rowCols = "sm:grid sm:grid-cols-[16rem_minmax(0,1fr)_3.5rem] sm:gap-4";

/** 连接线“生长”与圆点“弹出”之间的间隔 */
const LINE_DURATION = 0.55;
const DRAW_STEP = 0.08;
const DRAW_START = 0.12;

export function ImpactMap() {
  const { lang } = useLanguage();
  const reduce = useReducedMotion();
  const t = ui[lang];
  const links = impactLinks[lang];
  const base = toPct(BASELINE);

  return (
    <div className="rounded-md border border-border bg-card p-6 transition-colors hover:border-primary/30 md:p-8">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-base font-semibold text-card-foreground">
          {t.title}
        </h3>
        <span className="text-[11px] text-muted-foreground">{t.basis}</span>
      </div>

      <div className="flex flex-col">
        {links.map((link, index) => {
          const delta = parseInt(link.change.replace(/[^0-9]/g, ""), 10);
          const after = link.change.startsWith("-")
            ? BASELINE - delta
            : BASELINE + delta;
          const target = toPct(after);
          const lineLeft = Math.min(base, target);
          const lineWidth = Math.abs(target - base);
          const growsRight = after > BASELINE;

          const lineDelay = DRAW_START + index * DRAW_STEP;
          const dotDelay = lineDelay + LINE_DURATION * 0.85;

          return (
            <div
              key={link.metric}
              className={`group flex flex-col gap-1 py-1.5 sm:items-center sm:gap-0 ${rowCols}`}
            >
              <div className="flex items-baseline justify-between gap-3 sm:block sm:text-right">
                <span className="text-xs leading-snug text-foreground sm:text-sm">
                  {link.metric}
                </span>
                <span className="font-mono text-xs font-semibold tabular-nums text-foreground sm:hidden">
                  {link.change}
                </span>
                <span className="hidden text-[11px] leading-snug text-muted-foreground sm:block">
                  {link.action}
                </span>
              </div>

              <div className="relative h-10 sm:h-11" title={link.source}>
                {/* 基准线：改造前 = 100 */}
                <div
                  className="absolute inset-y-0 w-px border-l border-dashed border-border"
                  style={{ left: `${base}%` }}
                />

                {/* 变化幅度：从基准线向外生长 */}
                <motion.div
                  className="absolute h-px bg-border transition-colors group-hover:bg-primary/40"
                  style={{
                    top: "calc(50% - 0.5px)",
                    left: `${lineLeft}%`,
                    width: `${lineWidth}%`,
                    transformOrigin: growsRight ? "left center" : "right center",
                  }}
                  initial={reduce ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: LINE_DURATION,
                    delay: lineDelay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* 基准点 */}
                <div
                  className="absolute h-2 w-2 rounded-full border border-muted-foreground bg-card"
                  style={{
                    left: `calc(${base}% - 4px)`,
                    top: "calc(50% - 4px)",
                  }}
                />

                {/* 改造后的落点 */}
                <div
                  className="absolute z-10 transition-transform duration-200 group-hover:scale-125"
                  style={{
                    left: `calc(${target}% - 5px)`,
                    top: "calc(50% - 5px)",
                  }}
                >
                  <motion.div
                    className="h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-card"
                    initial={reduce ? false : { scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      type: "spring",
                      stiffness: 360,
                      damping: 22,
                      delay: dotDelay,
                    }}
                  />
                </div>
              </div>

              <div className="hidden self-center justify-end font-mono text-xs font-semibold tabular-nums text-foreground sm:flex sm:text-sm">
                {link.change}
              </div>
            </div>
          );
        })}

        <div className={`mt-2 flex flex-col ${rowCols}`}>
          <span className="hidden sm:block" />
          <div className="relative h-5 border-t border-border">
            {ticks.map((tick) => (
              <span
                key={tick}
                className="absolute top-1 -translate-x-1/2 font-mono text-[11px] text-muted-foreground"
                style={{ left: `${toPct(tick)}%` }}
              >
                {tick}
              </span>
            ))}
          </div>
          <span className="hidden sm:block" />
        </div>
      </div>
    </div>
  );
}
