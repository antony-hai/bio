"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <a
      href="#"
      className={cn(
        "group inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-primary transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      aria-label="回到首页"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 transition-transform duration-500 group-hover:-rotate-6"
      >
        <path d="M3 12c2.5-3 5.5-3 8 0s5.5 3 8 0 5.5-3 8 0" />
        <path d="M3 16c2.5-2 5.5-2 8 0s5.5 2 8 0 5.5-2 8 0" />
      </svg>
    </a>
  );
}
