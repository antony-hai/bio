"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { skillGroups } from "@/data/resume";

const zhSkillGroups = skillGroups.zh;

const categoryColors: Record<string, string> = {
  框架: "#1677ff",
  可视化: "#13c2c2",
  AI: "#722ed1",
  跨端: "#fa8c16",
  后端: "#52c41a",
  工程化: "#eb2f96",
  其他: "#8c8c8c",
};

const levelMap = new Map<string, number>();
zhSkillGroups.forEach((group) =>
  group.items.forEach((item) => levelMap.set(item.name, item.level))
);

function getCategory(name: string): string {
  if (/React|Vue|TypeScript|UmiJS|ahooks|Pinia|ElementPlus|Ant Design|Antd|Vant|Taro|UniApp|ES6|Next\.js|Webpack|Vite|Koa|MockJS|Nginx/.test(name)) {
    return "框架";
  }
  if (/Echarts|G6|D3|Recharts|可视化/.test(name)) return "可视化";
  if (/LLM|AI|SSE|RAG/.test(name)) return "AI";
  if (/Node|MongoDB|Java/.test(name)) return "后端";
  if (/微信|小程序|H5支付|js-sdk|jsBridge|跨端/.test(name)) return "跨端";
  return "其他";
}

function getLevel(name: string): number {
  if (levelMap.has(name)) return levelMap.get(name)!;
  for (const [skill, level] of levelMap) {
    if (name.includes(skill) || skill.includes(name)) return level;
  }
  return 75;
}

interface TechBubbleChartProps {
  stack: string[];
}

export function TechBubbleChart({ stack }: TechBubbleChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const labelFill = isDark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.75)";
  const strokeColor = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)";
  const selectedStroke = isDark
    ? "rgba(255,255,255,0.9)"
    : "rgba(0,0,0,0.9)";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let graph: any;
    let destroyed = false;

    const render = async () => {
      const { Graph } = await import("@antv/g6");
      if (destroyed || !container) return;

      const width = container.clientWidth;
      const height = 220;

      const nodeMeta = new Map<string, { size: number; color: string }>();

      const nodes = stack.map((tech) => {
        const level = getLevel(tech);
        const category = getCategory(tech);
        const size = 16 + level * 0.28;
        const color = categoryColors[category] || categoryColors["其他"];
        nodeMeta.set(tech, { size, color });

        return {
          id: tech,
          style: {
            fill: color,
            size,
            label: true,
            labelText: tech,
            labelFill,
            labelFontSize: 11,
            labelFontWeight: 500,
            labelFontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif',
            stroke: strokeColor,
            lineWidth: 1,
            cursor: "pointer" as const,
          },
        };
      });

      graph = new Graph({
        container,
        width,
        height,
        animation: true,
        autoFit: "view",
        data: { nodes },
        layout: {
          type: "force",
          animation: true,
          center: [width / 2, height / 2],
          width,
          height,
          nodeSize: (node: any) => (node.style?.size ?? 30) + 14,
          nodeSpacing: 10,
          minMovement: 0.05,
          maxIteration: 800,
        },
        node: {
          style: {
            label: true,
            labelText: (d: any) => d.id,
            labelFontSize: 11,
            labelFontWeight: 500,
            labelFill,
            labelFontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif',
            stroke: strokeColor,
            lineWidth: 1,
          },
          state: {
            selected: (data: any) => {
              const id = data.id as string;
              const baseSize = nodeMeta.get(id)?.size ?? 30;
              return {
                size: baseSize * 1.25,
                lineWidth: 2,
                stroke: selectedStroke,
              };
            },
            dim: { opacity: 0.3 },
          },
          animation: {
            enter: [
              {
                fields: ["size", "opacity"],
                duration: 700,
                easing: "ease-out",
              },
            ],
          },
        },
        behaviors: ["drag-canvas", "zoom-canvas", "drag-node"],
      });

      await graph.render();

      let selectedId: string | null = null;

      const resetStates = () => {
        const states: Record<string, string[]> = {};
        stack.forEach((id) => {
          states[id] = [];
        });
        graph.setElementState(states, true);
        selectedId = null;
      };

      graph.on("node:click", (evt: any) => {
        const id = evt.target?.id ?? evt.itemId;
        if (!id || !stack.includes(id)) return;

        if (selectedId === id) {
          resetStates();
          return;
        }

        const states: Record<string, "selected" | "dim" | []> = {};
        stack.forEach((tech) => {
          states[tech] = tech === id ? "selected" : "dim";
        });
        graph.setElementState(states, true);
        selectedId = id;
      });

      graph.on("canvas:click", () => {
        if (selectedId) resetStates();
      });
    };

    render();

    const observer = new ResizeObserver(() => {
      if (!graph || !container) return;
      graph.setSize(container.clientWidth, 220);
      graph.layout();
    });
    observer.observe(container);

    return () => {
      destroyed = true;
      observer.disconnect();
      if (graph) graph.destroy();
    };
  }, [stack.join(","), labelFill, strokeColor, selectedStroke]);

  return <div ref={containerRef} className="h-[220px] w-full" />;
}
