"use client";

import { Palette } from "lucide-react";
import { useAccent, type Accent } from "./accent-provider";
import { cn } from "@/lib/utils";

const accentDot: Record<Accent, string> = {
  blue: "bg-[#1677ff]",
  emerald: "bg-[#10b981]",
  violet: "bg-[#7c3aed]",
  amber: "bg-[#f59e0b]",
};

export function AccentToggle({ className }: { className?: string }) {
  const { accent, cycleAccent } = useAccent();

  return (
    <button
      type="button"
      onClick={cycleAccent}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:border-primary/30 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      aria-label="切换主题色"
      title="切换主题色"
    >
      <Palette className="h-4 w-4" />
      <span
        className={cn(
          "ml-0.5 h-2 w-2 rounded-full ring-1 ring-border",
          accentDot[accent]
        )}
      />
    </button>
  );
}
