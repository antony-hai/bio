export type Lang = "zh" | "en";

export interface Profile {
  name: string;
  title: string;
  phone: string;
  email: string;
  experience: string;
  status: string;
  location: string;
  summary: string[];
  aboutSummary: string[];
  social: {
    github?: string;
    linkedin?: string;
    blog?: string;
  };
}

export interface Experience {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string;
  highlights: string[];
}

export interface Project {
  id: string;
  name: string;
  period: string;
  company?: string;
  intro: string;
  stack: string[];
  responsibilities: string[];
  achievements: string[];
  knowledge?: string[];
}

export interface SkillGroup {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
}

export interface Education {
  period: string;
  school: string;
  major: string;
  degree: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const profile: Record<Lang, Profile> = {
  zh: {
    name: "刘海",
    title: "资深前端开发工程师 / AI前端工程师",
    phone: "13129932870",
    email: "antony_l@foxmail.com",
    experience: "10年经验",
    status: "目前已离职",
    location: "上海",
    summary: [
      "10年资深前端开发经验，深耕中后台系统、数据可视化、AI前端应用、跨端开发领域，具备从技术选型、框架搭建到团队落地的全流程能力。",
      "具备LLM应用前端开发实战经验，熟悉LLM API对接、RAG知识库搭建、AI Agent交互界面开发及SSE流式渲染；熟练运用AI Coding工具赋能开发，兼顾效率与代码质量。",
      "熟悉私募基金、SaaS、线上医疗、教育科技多行业业务逻辑，可快速适配不同行业需求并输出高质量技术方案。",
      "辅修市场营销双学位，兼具技术思维与商业视角，能精准理解产品需求，高效衔接产品与开发环节。",
    ],
    aboutSummary: [
      "十年前端一线经验，从传统多页应用到 React/Vue3、Next.js 全栈架构，擅长中后台系统、数据可视化与复杂交互，能独立完成技术选型、架构搭建到团队落地。",
      "熟悉 LLM API、RAG 知识库、AI Agent 交互与 SSE 流式渲染，善于把 AI 能力转化为可交付的产品体验，并用 AI Coding 工具持续提效。",
      "兼具技术与商业视角，深耕私募基金、SaaS、线上医疗、教育科技等行业，能快速理解业务需求并输出高质量工程方案。",
    ],
    social: {
      github: "https://github.com",
    },
  },
  en: {
    name: "Liu Hai",
    title: "Senior Frontend Engineer / AI Frontend Engineer",
    phone: "13129932870",
    email: "antony_l@foxmail.com",
    experience: "10 Years",
    status: "Open to Work",
    location: "Shanghai",
    summary: [
      "10 years of senior frontend experience, specializing in admin dashboards, data visualization, AI-powered frontend applications, and cross-platform development — with end-to-end capability from tech selection and architecture to team delivery.",
      "Hands-on experience building LLM-powered frontend applications, including LLM API integration, RAG knowledge bases, AI Agent interaction design, and SSE streaming rendering. Proficient in AI coding tools that boost productivity without sacrificing code quality.",
      "Deep understanding of business logic across private equity funds, SaaS, online healthcare, and ed-tech. Able to quickly adapt to different industries and deliver high-quality technical solutions.",
      "Holds a double bachelor's degree in Marketing, combining technical thinking with business insight to accurately translate product requirements into engineering execution.",
    ],
    aboutSummary: [
      "A decade of hands-on frontend experience, from traditional multi-page applications to React/Vue3 and Next.js full-stack architectures. Skilled in admin systems, data visualization, and complex interactions, capable of owning the entire process from tech selection and architecture to team rollout.",
      "Familiar with LLM APIs, RAG knowledge bases, AI Agent interaction, and SSE streaming rendering. Good at turning AI capabilities into deliverable product experiences and using AI coding tools to continuously improve efficiency.",
      "Brings both technical and business perspectives, with deep exposure to private equity funds, SaaS, online healthcare, and ed-tech. Able to quickly grasp business needs and produce high-quality engineering solutions.",
    ],
    social: {
      github: "https://github.com",
    },
  },
};

export const experiences: Record<Lang, Experience[]> = {
  zh: [
    {
      id: "zhihuishu",
      period: "2025.01 - 至今",
      company: "上海智慧树网",
      role: "资深前端开发工程师",
      description: "负责专业图谱业务B端大平台前端开发，主导AI智能问答模块，搭建Vue3标准化开发体系。",
      highlights: [
        "主导AI智能问答模块前端开发，对接LLM API与SSE流式渲染",
        "搭建Vue3标准化开发体系，封装可复用组件库及AI对话组件",
        "结合Echarts/AntV G6实现数据可视化与图谱交互逻辑",
      ],
    },
    {
      id: "qinzhi",
      period: "2023.09 - 2024.12",
      company: "上海沁雉商贸有限公司",
      role: "资深前端开发工程师",
      description: "负责公司SaaS平台前端架构设计与核心功能开发，推动前端工程化与组件化建设。",
      highlights: [
        "主导前端技术选型与框架搭建",
        "推动组件化与代码规范落地",
        "优化前端性能与用户体验",
      ],
    },
    {
      id: "pingan",
      period: "2020.10 - 2023.07",
      company: "平安好医生",
      role: "高级web前端开发工程师",
      description: "负责互联网医院运营中后台、护理服务站小程序、健康管理师H5等医疗产品前端开发。",
      highlights: [
        "独立完成互联网医院鲁班后台技术选型与框架搭建",
        "推动TypeScript全流程落地，抽离50+公共类型",
        "开发护理服务站小程序与健康管理师H5，支撑日均万次运营操作",
      ],
    },
    {
      id: "jingzan",
      period: "2019.11 - 2020.08",
      company: "上海晶赞科技有限公司",
      role: "前端开发工程师",
      description: "参与数据营销平台前端开发，负责数据可视化报表与运营后台功能实现。",
      highlights: [
        "负责数据可视化报表前端开发",
        "参与运营后台功能迭代",
        "优化前端工程化流程",
      ],
    },
    {
      id: "juzhi",
      period: "2016.09 - 2019.10",
      company: "易居中国 / 钜派投资",
      role: "前端研发工程师",
      description: "负责私募基金中后台管理系统、品牌活动H5及微信企业号应用开发。",
      highlights: [
        "搭建Node.js中间层整合Java服务",
        "开发私募基金中后台管理系统",
        "负责品牌活动H5与微信企业号应用",
      ],
    },
  ],
  en: [
    {
      id: "zhihuishu",
      period: "2025.01 - Present",
      company: "Shanghai Zhihuishu Network",
      role: "Senior Frontend Engineer",
      description: "Led frontend development for the B-end professional atlas platform, spearheaded the AI Q&A module, and established a standardized Vue3 development system.",
      highlights: [
        "Led frontend development of the AI Q&A module, integrating LLM APIs and SSE streaming rendering",
        "Built a standardized Vue3 development system with reusable component and AI chat components",
        "Implemented data visualization and graph interaction logic with Echarts and AntV G6",
      ],
    },
    {
      id: "qinzhi",
      period: "2023.09 - 2024.12",
      company: "Shanghai Qinzhi Trading Co., Ltd.",
      role: "Senior Frontend Engineer",
      description: "Responsible for frontend architecture design and core feature development of the company's SaaS platform, driving frontend engineering and componentization.",
      highlights: [
        "Led frontend tech selection and framework setup",
        "Promoted componentization and code standard adoption",
        "Optimized frontend performance and user experience",
      ],
    },
    {
      id: "pingan",
      period: "2020.10 - 2023.07",
      company: "Ping An Good Doctor",
      role: "Senior Web Frontend Engineer",
      description: "Developed frontend for internet hospital operation back-office, nursing service station mini-program, and health manager H5 medical products.",
      highlights: [
        "Independently completed tech selection and framework setup for the internet hospital Luban back-office",
        "Drove full TypeScript adoption across the team, extracting 50+ shared types",
        "Developed nursing service station mini-program and health manager H5, supporting tens of thousands of daily operations",
      ],
    },
    {
      id: "jingzan",
      period: "2019.11 - 2020.08",
      company: "Shanghai Jingzan Technology",
      role: "Frontend Engineer",
      description: "Participated in frontend development of the data marketing platform, responsible for data visualization reports and operation back-office features.",
      highlights: [
        "Responsible for data visualization report frontend development",
        "Participated in operation back-office feature iterations",
        "Optimized frontend engineering workflow",
      ],
    },
    {
      id: "juzhi",
      period: "2016.09 - 2019.10",
      company: "E-House China / Jupai Investment",
      role: "Frontend R&D Engineer",
      description: "Developed private equity fund back-office management systems, brand campaign H5 pages, and WeChat enterprise account applications.",
      highlights: [
        "Built a Node.js middleware layer to integrate Java services",
        "Developed private equity fund back-office management systems",
        "Responsible for brand campaign H5 and WeChat enterprise account applications",
      ],
    },
  ],
};

export const projects: Record<Lang, Project[]> = {
  zh: [
    {
      id: "zhihuishu-atlas",
      name: "智慧树专业谱图",
      period: "2025.01 - 至今",
      company: "上海智慧树网",
      intro:
        "智慧树网专业图谱业务B端大平台，给各个高校专业提供专业数据分析、AI智能问答和可视化系统。",
      stack: ["Vue3", "Pinia", "ElementPlus", "Echarts", "AntV G6", "LLM API", "SSE"],
      responsibilities: [
        "把控专业图谱3.0、4.0业务流程，主导AI智能问答模块前端开发",
        "封装通用组件与文件展示控件，编写技术文档，完成前后端接口联调与数据结构确认",
        "调研并落地Vue3相关控件技术栈，AI编码编辑器的接入",
        "结合Echarts/AntV G6实现数据可视化与图谱交互逻辑，封装Axios请求库适配业务",
      ],
      achievements: [
        "搭建Vue3标准化开发体系，封装可复用组件库及AI对话组件提升团队开发效率35%",
        "实现10+类可视化图表，支撑全国超百所高校专业数据分析",
        "规范数据交互标准，将接口联调问题率降低40%",
      ],
      knowledge: [
        "AI智能问答模块采用SSE（Server-Sent Events）实现流式回答，提升用户等待体验",
        "使用AntV G6构建专业关系图谱，支持节点展开、路径高亮、画布缩放等交互",
        "将Echarts封装为业务图表组件，统一配色、tooltip、loading状态",
      ],
    },
    {
      id: "pingan-luban",
      name: "平安好医生互联网医院鲁班后台",
      period: "2020.11 - 2022.05",
      company: "平安好医生",
      intro: "医疗行业大型运营中后台系统，支撑医院日均超万次运营操作。",
      stack: ["React", "Ant Design Pro 5", "TypeScript", "UmiJS", "ahooks"],
      responsibilities: [
        "独立完成技术选型与框架搭建，编写技术文档并开展组内培训",
        "协助中高级工程师完成业务开发，推动TypeScript规范落地",
        "同后端定义接口规范，对接公司SSO登录与权限系统",
        "保障中后台接入一致性",
      ],
      achievements: [
        "推动TypeScript全流程落地，抽离50+公共类型，将团队线上bug率降低50%",
        "制定中后台接入规范，支撑医院日均超万次运营操作，核心业务线上化后效率提升60%",
        "编写20+份技术文档，缩短项目开发周期30%",
      ],
      knowledge: [
        "基于Ant Design Pro 5搭建中后台脚手架，统一路由、权限、布局、请求处理",
        "通过TypeScript类型抽离和接口规范化，显著降低运行时错误",
        "对接企业SSO与RBAC权限，实现统一登录与菜单权限控制",
      ],
    },
    {
      id: "pingan-nursing",
      name: "平安好医生护理服务站 / 医生助手",
      period: "2021.03 - 2021.12",
      company: "平安好医生",
      intro: "医疗O2O原生小程序 + 内嵌H5，支撑线下护理服务。",
      stack: ["微信小程序", "React", "Vant-Weapp", "微信H5支付"],
      responsibilities: [
        "搭建小程序框架，完成原生开发、WebView接入及微信H5支付对接",
        "二次封装Vant-Weapp库适配医疗业务",
        "开发IM聊天室H5插件，实现小程序与会员中心系统对接",
      ],
      achievements: [
        "封装的医疗业务组件模板被团队多项目复用",
        "支撑线下护理日均超2000单交易，支付成功率99.8%",
        "IM插件将客户咨询响应时间缩短至1分钟内，小程序累计用户超10万",
      ],
      knowledge: [
        "微信小程序原生开发与WebView混合架构，平衡原生体验与H5灵活性",
        "微信H5支付流程封装，处理支付回调、异常重试与订单状态同步",
        "IM聊天室基于H5实现，通过jsBridge与小程序双向通信",
      ],
    },
    {
      id: "pingan-health-h5",
      name: "平安好医生健康管理师H5",
      period: "2021.05 - 2022.03",
      company: "平安好医生",
      intro: "医疗服务类H5单页应用，适配微信、App、小程序多端嵌入。",
      stack: ["React", "UmiJS", "Antd-mobile", "weixin-js-sdk"],
      responsibilities: [
        "独立搭建H5单页应用，接入会员中心用户系统",
        "完成小程序/App嵌入封装，集成weixin-js-sdk拓展微信生态功能",
        "完成jsBridge的集成和封装，引入MockJS提升前后端对接效率",
        "适配多平台差异化需求",
      ],
      achievements: [
        "封装通用jsBridge通信方法，实现H5与小程序/App跨端交互标准化，跨端兼容问题率降低60%",
        "适配微信、App、小程序多端展示逻辑，页面加载速度优化35%",
        "用户操作流畅度提升显著，客户满意度达95%以上",
      ],
      knowledge: [
        "H5单页应用结合UmiJS，实现路由、状态、请求统一管理",
        "jsBridge封装统一通信协议，屏蔽微信、App、小程序差异",
        "MockJS在前后端并行开发阶段提升对接效率",
      ],
    },
    {
      id: "juzhi-fund",
      name: "钜派投资私募基金中后台",
      period: "2017.06 - 2019.10",
      company: "钜派投资",
      intro: "私募基金行业中后台管理系统，支撑多只私募基金运行与百万级高净值客户管理。",
      stack: ["React", "Ant Design", "Node.js", "MongoDB", "Koa-router"],
      responsibilities: [
        "分析需求并制定开发排期，设计接口并编写文档",
        "完成前端CURD功能开发",
        "以Node.js为中间层整合Java服务，封装Mongoose操作MongoDB",
        "完成Nginx多环境配置部署",
      ],
      achievements: [
        "搭建Node.js中间层提升数据响应速度45%，支撑多只私募基金运行、100万+高净值客户业务管理",
        "建立线上bug当日修复机制，系统稳定性达99.9%",
        "编写80+份接口文档，降低对接沟通成本50%",
      ],
      knowledge: [
        "Node.js中间层聚合Java微服务，减少前端请求次数与数据转换逻辑",
        "MongoDB配合Mongoose做配置数据与日志存储",
        "Nginx反向代理与多环境部署配置",
      ],
    },
  ],
  en: [
    {
      id: "zhihuishu-atlas",
      name: "Zhihuishu Professional Atlas",
      period: "2025.01 - Present",
      company: "Shanghai Zhihuishu Network",
      intro:
        "A B-end platform for Zhihuishu's professional atlas business, providing universities with professional data analysis, AI Q&A, and visualization systems.",
      stack: ["Vue3", "Pinia", "ElementPlus", "Echarts", "AntV G6", "LLM API", "SSE"],
      responsibilities: [
        "Owned the business flow of Professional Atlas 3.0 and 4.0, and led frontend development of the AI Q&A module",
        "Encapsulated common components and file display controls, wrote technical documentation, and completed front-back-end interface integration and data structure confirmation",
        "Researched and adopted Vue3-related control stack and AI coding editor integration",
        "Implemented data visualization and graph interaction with Echarts/AntV G6, and wrapped Axios request library for business needs",
      ],
      achievements: [
        "Built a standardized Vue3 development system with reusable component and AI chat components, improving team efficiency by 35%",
        "Delivered 10+ visualization chart types, supporting professional data analysis for 100+ universities nationwide",
        "Standardized data interaction protocols, reducing interface integration issues by 40%",
      ],
      knowledge: [
        "The AI Q&A module uses SSE (Server-Sent Events) for streaming responses, improving the waiting experience",
        "Built professional relationship graphs with AntV G6, supporting node expansion, path highlighting, and canvas zoom",
        "Wrapped Echarts into business chart components with unified colors, tooltips, and loading states",
      ],
    },
    {
      id: "pingan-luban",
      name: "Ping An Internet Hospital Luban Back-office",
      period: "2020.11 - 2022.05",
      company: "Ping An Good Doctor",
      intro: "A large-scale operation back-office system for the healthcare industry, supporting over 10,000 daily operations per hospital.",
      stack: ["React", "Ant Design Pro 5", "TypeScript", "UmiJS", "ahooks"],
      responsibilities: [
        "Independently completed tech selection and framework setup, wrote technical documentation, and conducted team training",
        "Assisted mid-senior engineers with business development and drove TypeScript standard adoption",
        "Defined interface standards with backend and integrated corporate SSO login and permission systems",
        "Ensured consistency across back-office integrations",
      ],
      achievements: [
        "Drove full TypeScript adoption, extracting 50+ shared types and reducing online bug rate by 50%",
        "Established back-office integration standards, supporting over 10,000 daily operations per hospital and improving core business efficiency by 60%",
        "Wrote 20+ technical documents, shortening project development cycle by 30%",
      ],
      knowledge: [
        "Built back-office scaffold based on Ant Design Pro 5, unifying routing, permissions, layout, and request handling",
        "Significantly reduced runtime errors through TypeScript type extraction and interface standardization",
        "Integrated enterprise SSO and RBAC permissions for unified login and menu access control",
      ],
    },
    {
      id: "pingan-nursing",
      name: "Ping An Nursing Service Station / Doctor Assistant",
      period: "2021.03 - 2021.12",
      company: "Ping An Good Doctor",
      intro: "A medical O2O native mini-program plus embedded H5, supporting offline nursing services.",
      stack: ["WeChat Mini Program", "React", "Vant-Weapp", "WeChat H5 Payment"],
      responsibilities: [
        "Built the mini-program framework, completed native development, WebView integration, and WeChat H5 payment integration",
        "Repackaged Vant-Weapp library to adapt to medical business needs",
        "Developed an IM chat room H5 plugin to connect the mini-program with the membership center system",
      ],
      achievements: [
        "The encapsulated medical business component templates were reused across multiple team projects",
        "Supported over 2,000 offline nursing transactions daily with 99.8% payment success rate",
        "The IM plugin reduced customer consultation response time to under 1 minute, with the mini-program accumulating over 100,000 users",
      ],
      knowledge: [
        "Native WeChat mini-program development with WebView hybrid architecture, balancing native experience and H5 flexibility",
        "WeChat H5 payment flow encapsulation, handling payment callbacks, exception retries, and order status synchronization",
        "IM chat room implemented in H5 with jsBridge bidirectional communication with the mini-program",
      ],
    },
    {
      id: "pingan-health-h5",
      name: "Ping An Health Manager H5",
      period: "2021.05 - 2022.03",
      company: "Ping An Good Doctor",
      intro: "A medical service H5 single-page application adapted for embedding in WeChat, App, and mini-programs.",
      stack: ["React", "UmiJS", "Antd-mobile", "weixin-js-sdk"],
      responsibilities: [
        "Independently built the H5 single-page application and integrated the membership center user system",
        "Completed mini-program/App embedding encapsulation and integrated weixin-js-sdk to expand WeChat ecosystem features",
        "Completed jsBridge integration and encapsulation, introduced MockJS to improve front-back-end collaboration efficiency",
        "Adapted to differentiated needs across multiple platforms",
      ],
      achievements: [
        "Encapsulated common jsBridge communication methods, standardized H5 and mini-program/App cross-platform interaction, reducing cross-platform compatibility issues by 60%",
        "Adapted display logic for WeChat, App, and mini-programs, optimizing page load speed by 35%",
        "User operation smoothness improved significantly, with customer satisfaction exceeding 95%",
      ],
      knowledge: [
        "H5 single-page application combined with UmiJS for unified routing, state, and request management",
        "jsBridge encapsulation unified communication protocol, shielding differences between WeChat, App, and mini-programs",
        "MockJS improved collaboration efficiency during parallel front-back-end development",
      ],
    },
    {
      id: "juzhi-fund",
      name: "Jupai Private Equity Fund Back-office",
      period: "2017.06 - 2019.10",
      company: "Jupai Investment",
      intro: "A back-office management system for the private equity fund industry, supporting multiple funds and millions of high-net-worth clients.",
      stack: ["React", "Ant Design", "Node.js", "MongoDB", "Koa-router"],
      responsibilities: [
        "Analyzed requirements, planned development schedules, designed interfaces, and wrote documentation",
        "Completed frontend CRUD feature development",
        "Used Node.js as middleware to integrate Java services and encapsulated Mongoose operations for MongoDB",
        "Completed Nginx multi-environment configuration and deployment",
      ],
      achievements: [
        "Built Node.js middleware layer improving data response speed by 45%, supporting multiple funds and 1M+ high-net-worth client operations",
        "Established same-day online bug fix mechanism, achieving 99.9% system stability",
        "Wrote 80+ interface documents, reducing collaboration communication costs by 50%",
      ],
      knowledge: [
        "Node.js middleware aggregated Java microservices, reducing frontend request count and data transformation logic",
        "MongoDB with Mongoose for configuration data and log storage",
        "Nginx reverse proxy and multi-environment deployment configuration",
      ],
    },
  ],
};

export const skillGroups: Record<Lang, SkillGroup[]> = {
  zh: [
    {
      category: "前端框架与语言",
      items: [
        { name: "React", level: 95 },
        { name: "Vue3", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "ES6/7+", level: 92 },
      ],
    },
    {
      category: "样式与可视化",
      items: [
        { name: "CSS3 / Tailwind", level: 90 },
        { name: "Echarts", level: 88 },
        { name: "AntV G6 / D3", level: 82 },
      ],
    },
    {
      category: "工程化与跨端",
      items: [
        { name: "Next.js / Vite", level: 85 },
        { name: "Webpack / UmiJS", level: 85 },
        { name: "微信小程序 / Taro / UniApp", level: 80 },
        { name: "Qiankun 微前端", level: 78 },
      ],
    },
    {
      category: "AI 与全栈",
      items: [
        { name: "LLM API / RAG", level: 85 },
        { name: "AI Agent / SSE", level: 82 },
        { name: "Node.js / MongoDB", level: 80 },
      ],
    },
  ],
  en: [
    {
      category: "Frontend Frameworks & Languages",
      items: [
        { name: "React", level: 95 },
        { name: "Vue3", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "ES6/7+", level: 92 },
      ],
    },
    {
      category: "Styling & Visualization",
      items: [
        { name: "CSS3 / Tailwind", level: 90 },
        { name: "Echarts", level: 88 },
        { name: "AntV G6 / D3", level: 82 },
      ],
    },
    {
      category: "Engineering & Cross-platform",
      items: [
        { name: "Next.js / Vite", level: 85 },
        { name: "Webpack / UmiJS", level: 85 },
        { name: "WeChat Mini Program / Taro / UniApp", level: 80 },
        { name: "Qiankun Micro-frontend", level: 78 },
      ],
    },
    {
      category: "AI & Full-stack",
      items: [
        { name: "LLM API / RAG", level: 85 },
        { name: "AI Agent / SSE", level: 82 },
        { name: "Node.js / MongoDB", level: 80 },
      ],
    },
  ],
};

export const education: Record<Lang, Education[]> = {
  zh: [
    {
      period: "2011.09 - 2015.06",
      school: "武汉纺织大学",
      major: "环境工程",
      degree: "本科",
    },
    {
      period: "2012.09 - 2015.06",
      school: "中南财经政法大学",
      major: "市场营销（双学位）",
      degree: "本科",
    },
  ],
  en: [
    {
      period: "2011.09 - 2015.06",
      school: "Wuhan Textile University",
      major: "Environmental Engineering",
      degree: "Bachelor's",
    },
    {
      period: "2012.09 - 2015.06",
      school: "Zhongnan University of Economics and Law",
      major: "Marketing (Double Degree)",
      degree: "Bachelor's",
    },
  ],
};

export const navItems: Record<Lang, NavItem[]> = {
  zh: [
    { label: "关于", href: "#about" },
    { label: "经历", href: "#experience" },
    { label: "项目", href: "#projects" },
    { label: "技能", href: "#skills" },
    { label: "教育", href: "#education" },
    { label: "联系", href: "#contact" },
  ],
  en: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
};
