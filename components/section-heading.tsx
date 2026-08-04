"use client";

import { FadeIn } from "@/components/fade-in";

interface SectionHeadingProps {
  slug: string;
  title: string;
  caption?: string;
}

export function SectionHeading({ slug, title, caption }: SectionHeadingProps) {
  return (
    <FadeIn>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs tracking-[0.2em] text-primary">
          {slug}
        </span>
        <span className="h-px w-10 bg-border" />
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {caption && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {caption}
        </p>
      )}
    </FadeIn>
  );
}
