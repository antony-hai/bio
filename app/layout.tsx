import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { AccentProvider } from "@/components/accent-provider";
import { LanguageProvider } from "@/components/language-provider";

export const metadata: Metadata = {
  title: "刘海 - 资深前端开发工程师 / Node.js 工程师",
  description:
    "刘海的个人作品集：10年前端开发经验，深耕中后台系统、数据可视化、AI 前端应用、Node.js 全栈与跨端开发。",
  keywords: [
    "刘海",
    "前端工程师",
    "Node.js",
    "BFF",
    "CI/CD",
    "AI前端",
    "React",
    "Vue3",
    "TypeScript",
    "Next.js",
    "AI Agent",
  ],
  authors: [{ name: "刘海" }],
  openGraph: {
    title: "刘海 - 资深前端开发工程师 / Node.js 工程师",
    description:
      "10年前端开发经验，深耕中后台系统、数据可视化、AI 前端应用、Node.js 全栈与跨端开发。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning className="h-full antialiased">
      <body className="relative min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>
          <AccentProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </AccentProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
