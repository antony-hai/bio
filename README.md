# 刘海 - 个人作品集

基于简历搭建的 Next.js 个人网站，用于展示前端与 AI 前端工程能力。

## 技术栈

- **框架**：Next.js 16 + React 19 + TypeScript
- **样式**：Tailwind CSS v4
- **主题**：next-themes（深色 / 浅色切换，默认深色）
- **动画**：Framer Motion
- **图表**：Recharts
- **图标**：Lucide React
- **部署**：Vercel

## 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:3000。

## 项目结构

```
app/
  api/chat/route.ts   # DeepSeek 聊天接口占位
  page.tsx            # 首页，组合各区块
  layout.tsx          # 根布局与主题配置
  globals.css         # Tailwind v4 CSS 变量主题
components/sections/  # Hero / 关于我 / 经历 / 项目 / 技能 / 教育 / 联系
components/ui/        # 导航栏、主题切换、动画容器
data/resume.ts        # 简历数据
knowledge/            # RAG 知识库（第二阶段接入 DeepSeek 用）
```

## 部署到 Vercel

1. 将代码推送到 GitHub（或 GitLab / Bitbucket）。
2. 登录 [Vercel Dashboard](https://vercel.com/dashboard)，点击 **Add New Project**。
3. 导入 `portfolio` 仓库，框架预设会识别为 Next.js。
4. 在 **Environment Variables** 中添加：

   | 名称 | 说明 |
   | --- | --- |
   | `DEEPSEEK_API_KEY` | DeepSeek API Key（可选，现阶段留空会返回占位回复） |

5. 点击 **Deploy**。

Vercel 会自动使用 `npm run build` 构建并部署。

## 后续扩展

- 在 `knowledge/` 中继续补充项目、技术沉淀等 Markdown。
- 在 `app/api/chat/route.ts` 中实现 RAG 检索 + DeepSeek SSE 流式返回。
- 在页面右下角添加悬浮聊天窗口，对接 `/api/chat`。
