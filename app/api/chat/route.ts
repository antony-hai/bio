import { NextRequest } from "next/server";

export const runtime = "nodejs";

/**
 * AI 聊天接口占位
 *
 * 第二阶段接入 DeepSeek 时，建议实现：
 * 1. 读取 knowledge/ 目录下的 markdown 文件，按项目/技能切分
 * 2. 将用户问题 embedding 化，检索最相关的知识片段
 * 3. 把检索结果拼进 system prompt，调用 DeepSeek API
 * 4. 通过 SSE 流式返回答案（与前端 EventSource 对接）
 *
 * 环境变量：DEEPSEEK_API_KEY
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return Response.json(
        { error: "请提供 message 字段" },
        { status: 400 }
      );
    }

    const deepseekApiKey = process.env.DEEPSEEK_API_KEY;

    if (!deepseekApiKey) {
      return Response.json(
        {
          reply:
            "DeepSeek API Key 尚未配置。请在 Vercel 环境变量中设置 DEEPSEEK_API_KEY 后重试。",
        },
        { status: 200 }
      );
    }

    // 实际接入示例（未启用）：
    // const response = await fetch("https://api.deepseek.com/chat/completions", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${deepseekApiKey}`,
    //   },
    //   body: JSON.stringify({
    //     model: "deepseek-chat",
    //     messages: [
    //       { role: "system", content: systemPromptWithRagContext },
    //       { role: "user", content: message },
    //     ],
    //     stream: true,
    //   }),
    // });
    // return new Response(response.body, { headers: { "Content-Type": "text/event-stream" } });

    return Response.json({
      reply: `你发送了："${message}"。DeepSeek 接入已预留，配置 DEEPSEEK_API_KEY 后即可启用 RAG 问答。`,
    });
  } catch (error) {
    return Response.json(
      { error: "处理请求时出错", details: String(error) },
      { status: 500 }
    );
  }
}
