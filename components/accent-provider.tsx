"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export const accents = ["blue", "emerald", "violet", "amber"] as const;

export type Accent = (typeof accents)[number];

interface AccentContextValue {
  accent: Accent;
  setAccent: (accent: Accent) => void;
  cycleAccent: () => void;
}

const AccentContext = createContext<AccentContextValue | null>(null);

export function useAccent() {
  const context = useContext(AccentContext);
  if (!context) {
    throw new Error("useAccent must be used within AccentProvider");
  }
  return context;
}

export function AccentProvider({ children }: { children: ReactNode }) {
  const [accent, setAccent] = useState<Accent>("blue");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("accent") as Accent | null;
    if (saved && accents.includes(saved)) {
      setAccent(saved);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.setAttribute("data-accent", accent);
    localStorage.setItem("accent", accent);
  }, [accent, hydrated]);

  const cycleAccent = () => {
    const nextIndex = (accents.indexOf(accent) + 1) % accents.length;
    setAccent(accents[nextIndex]);
  };

  return (
    <AccentContext.Provider value={{ accent, setAccent, cycleAccent }}>
      {children}
    </AccentContext.Provider>
  );
}
