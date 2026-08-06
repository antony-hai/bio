<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# 项目 Agent 指引 — 刘海个人作品集

开始修改前，先阅读本文件、`README.md`、`package.json`、`next.config.ts`、`app/globals.css`、`data/resume.ts`。

## 1. 项目定位

- 单页静态个人简历 / 作品集站点，支持中英双语、浅色/深色主题与主题色切换。
- 当前默认 SSG 导出：`next.config.ts` 设置 `output: 'export'`、`images.unoptimized: true`，无 API Route。
- 若后续需要 AI 聊天、动态 CMS 等服务端能力，与用户确认目标平台后再切换为服务端/Serverless 部署。

## 2. 技术栈

- Next.js 16.3 (App Router) + React 19 + TypeScript 5（严格模式）。
- Tailwind CSS v4，CSS-first；颜色/圆角/字体通过 `app/globals.css` 变量定义。
- next-themes：`attribute="class"`、`defaultTheme="light"`、`enableSystem={false}`。
- 主题色：自定义 Context + `data-accent`，默认 blue，支持 blue / emerald / violet / amber。
- 动画：Framer Motion；图标：Lucide React；图表：Recharts。
- 国际化：自研 `LanguageProvider` + `data/resume.ts` 的 `Record<Lang, T>` 结构。
- 工具：`lib/utils.ts` 中的 `cn()` 合并类名。

未经用户同意，不引入 Redux、Zustand、next-intl、react-i18next、Ant Design / Material UI / shadcn 等库。

## 3. 目录与文件约定

- `app/`：页面与根布局；`page.tsx`、`layout.tsx` 保持 Server Component。
- `components/`：可复用组件与 `sections/` 页面区块。
- `data/resume.ts`：所有文案、经历、项目、技能、教育信息的唯一数据源，双语结构。
- `knowledge/`：静态知识库，当前不接入运行时。

## 4. 核心架构规则

### 4.1 客户端组件

使用 `useState` / `useEffect` / `useTheme` / `useLanguage` / `useAccent` / Framer Motion 的组件必须加 `"use client"`。Provider 嵌套顺序：`LanguageProvider` → `AccentProvider` → `ThemeProvider`。

### 4.2 数据源唯一性

所有展示文案出自 `data/resume.ts`，修改内容优先改这里。新增可见文本必须同时提供 `zh` / `en`，类型统一从 `data/resume.ts` 导入，不重复定义。

### 4.3 部署模式

- SSG 模式（默认）：`output: 'export'`，不要新增 `app/api/*`。
- 服务端模式：移除 `output: 'export'`，按需调整 `images.unoptimized`，新增 API Route，更新 `README.md`。

## 5. 样式与主题

- 修改变量去 `app/globals.css`，不直接改 Tailwind config。
- 语义化使用：`bg-background`、`text-foreground`、`bg-muted`、`text-muted-foreground`、`bg-card`、`border-border`、`bg-primary`、`text-primary`。
- 设计 token：主色 light `#1677ff` / dark `#1668dc`，圆角 `0.375rem`（6px），系统字体栈。
- 区块统一 `py-24 px-6`，容器 `max-w-6xl mx-auto`。移动优先，断点用 Tailwind 默认。

## 6. 移动端适配

- 移动优先；基础样式面向小屏，用 `sm:` / `md:` / `lg:` 向上扩展。
- 触控区域不小于 44 × 44 px；图标按钮容器至少 `h-9 w-9`。
- 正文最小 `text-sm`，核心正文 `text-base`；表单控件必须 ≥ `text-base`，避免 iOS 自动缩放。
- 禁止页面级横向滚动；固定导航高 `h-16`，`html` 已设 `scroll-padding-top: 5rem`。
- `md` 以下显示汉堡菜单，点击后先关闭菜单，延迟 300 ms 再手动 `scrollIntoView`。
- 关键动画用 `useInView` + `animate`，避免 `whileInView` 在移动端菜单中失效；优先 `transform` / `opacity`，尊重 `prefers-reduced-motion`。
- 需要底部固定元素时加 `env(safe-area-inset-bottom)`。

## 7. 动画与交互

- 优先使用 `FadeIn` 组件，不在每个元素重复写 `initial/whileInView`。
- 技能进度条用 `useInView` 驱动 `animate`。
- Recharts 图表颜色通过 `resolvedTheme` 动态计算。

## 8. 组件规范

- 函数组件 + TypeScript props；类名用 `cn()` 合并。
- 图标大小规范：`h-4 w-4`、`h-[18px] w-[18px]`、`h-5 w-5`。
- 按钮/交互元素加 `type="button"` 与 `aria-label`，聚焦态用 `focus-visible:ring-ring`。
- 不用 `*动作星号*` 或表情符号，除非用户要求。

## 9. 内容管理

- 修改内容 → `data/resume.ts`。
- 新增区块/项目/经历 → 按现有双语结构添加，参考 `components/sections/*.tsx`，在 `app/page.tsx` 中引入。
- `knowledge/` 不直接渲染到前端。

## 10. 构建与质量

- **任何修改后必须运行 `npm run build`。**
- SSG 目标：全部路由为 `○ (Static)`，无 `ƒ (Dynamic)`。
- TS 严格模式，不引入 `any`；必要时用 `unknown` + 类型收窄。

## 11. 常见陷阱

- Hydration 不匹配：`next-themes`、`useAccent`、`useLanguage` 都有 mounted/hydrated 状态，hydration 完成前不渲染主题相关 UI。
- SSG 模式下新增 API Route 会导致构建失败。
- 静态导出下 `<Image>` 必须 `unoptimized` 或改用 `<img>`。
- 移动端导航需手动处理滚动，不要依赖浏览器默认锚点行为。
- iOS 输入框字号小于 16 px 会触发页面缩放。
- 触屏没有 hover，不依赖 `:hover` 展示关键信息。

## 12. 迭代优先级

1. 内容/文案 → `data/resume.ts`。
2. 新增区块/布局 → 参考现有 section 组件，验证移动端。
3. 主题/颜色/交互 → `globals.css`、providers、toggle 组件。
4. 移动端适配 → 检查触控区域、字号、横向滚动、安全区域、动画性能。
5. 功能扩展（博客/聊天）→ 文章/知识库优先 SSG 预渲染；AI 聊天、CMS、服务端接口需确认是否切换服务端模式。
6. 部署 → SSG 直接部署 `out/`；服务端模式确认平台并更新配置与文档。

## 13. Session Startup

每次进入项目时：

1. 阅读 `AGENTS.md`。
2. 阅读 `package.json`、`next.config.ts`、`app/globals.css`、`data/resume.ts`。
3. 运行 `git status`。
4. 执行 `npm run build` 确保基线通过，再开始修改。
