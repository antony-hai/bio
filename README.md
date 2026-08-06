# 刘海 - 个人简历

基于 [Next.js](https://nextjs.org/) 构建的静态个人简历 / 作品集站点，用于展示前端工程能力、项目经历与技术沉淀。

## 技术栈

- **框架**：Next.js 16.3 + React 19 + TypeScript 5
- **样式**：Tailwind CSS v4（CSS-first 变量主题）
- **主题**：next-themes（浅色 / 深色切换，默认浅色）
- **动画**：Framer Motion
- **图表**：Recharts、AntV G6
- **图标**：Lucide React
- **部署**：Vercel（SSG 静态导出）

## 功能特性

- 单页长滚动布局：Hero、关于我、工作经历、项目经验、专业技能、教育背景、联系方式
- 中英双语切换，所有文案集中管理于 `data/resume.ts`
- 浅色 / 深色主题切换，支持蓝 / 绿 / 紫 / 橙四种主题色
- 响应式设计，针对移动端触控、字号、导航锚点做了专门适配
- 技能雷达图与进度条可视化
- 静态导出（`output: 'export'`），可直接部署到任意静态托管平台

## 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:3000。

## 构建

```bash
npm run build
```

构建产物输出到 `out/` 目录，仅包含静态路由。

## 项目结构

```
app/
  page.tsx            # 首页，按顺序组合各区块
  layout.tsx          # 根布局与 Provider 配置
  globals.css         # Tailwind v4 入口与 CSS 变量主题
components/
  sections/           # Hero / 关于我 / 经历 / 项目 / 技能 / 教育 / 联系
  navbar.tsx          # 固定导航与移动端菜单
  theme-toggle.tsx    # 浅色 / 深色切换
  accent-toggle.tsx   # 主题色切换
  language-toggle.tsx # 中 / 英切换
  fade-in.tsx         # 通用滚动入场动画
data/
  resume.ts           # 所有展示文案与数据的唯一数据源
knowledge/            # 未来 AI Agent 扩展用的静态知识库
```

## 部署

项目已通过 `output: 'export'` 配置为纯静态导出，推荐部署到 [Vercel](https://vercel.com/)：

1. 将代码推送到 GitHub。
2. 在 Vercel Dashboard 导入仓库，框架预设识别为 Next.js。
3. 点击 **Deploy**，Vercel 会自动执行 `npm run build` 并部署 `out/` 目录。

> 若后续需要 AI 聊天接口、动态 CMS 等服务端能力，需先移除 `output: 'export'` 并切换为服务端 / Serverless 部署模式。

## 后续扩展

- 完善 `knowledge/` 知识库内容，为 AI Agent 聊天提供上下文
- 接入服务端聊天接口后，添加悬浮聊天组件
- 增加技术博客或文章模块
