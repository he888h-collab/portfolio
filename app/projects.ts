export type ProjectRecord = {
  slug: string;
  id: string;
  title: string;
  titleEn: string;
  type: string;
  year: string;
  image: string;
  summary: string;
  description: string;
  role: string;
  tools: string;
  outcome: string;
  gallery: string[];
};

const allImages = [
  "/portfolio/ai-visual-system.jpg",
  "/portfolio/manman-ip.jpg",
  "/portfolio/haoshi-brand.jpg",
  "/portfolio/foggy-island.jpg",
];

export const projects: ProjectRecord[] = [
  {
    slug: "ai-visual-system",
    id: "01",
    title: "AI 电商视觉自动化系统",
    titleEn: "AI VISUAL AUTOMATION",
    type: "AI WORKFLOW · E-COMMERCE",
    year: "2026",
    image: allImages[0],
    summary: "用 AI 重构电商视觉内容的生成方式，让批量生产同时保持风格一致。",
    description: "从风格定义、模型选型到批量出图，搭建可复用的 ComfyUI / WebUI 工作流。项目覆盖服装替换、人物姿态、场景生成与结果筛选，形成完整的视觉自动化闭环。",
    role: "AI 工作流搭建 / 视觉设计",
    tools: "ComfyUI · WebUI · Figma",
    outcome: "效率提升 / 风格标准化",
    gallery: [allImages[0], allImages[0], allImages[1], allImages[0], allImages[2], allImages[0]],
  },
  {
    slug: "manman-ip",
    id: "02",
    title: "蛮蛮 / 原创 IP 视觉设计",
    titleEn: "MANMAN IP DESIGN",
    type: "IP DESIGN · 3D VISUAL",
    year: "2025",
    image: allImages[1],
    summary: "以“守护与陪伴”为核心，完成角色设定、三维形象与多场景内容延展。",
    description: "围绕蛮蛮的性格与故事建立统一的角色语言，从情绪表情、动作姿态到海报与社交内容，形成兼具亲和力与识别度的原创 IP 视觉体系。",
    role: "概念设定 / 角色设计 / 视觉延展",
    tools: "Blender · Photoshop · AI",
    outcome: "角色系统 / 内容延展",
    gallery: [allImages[1], allImages[1], allImages[2], allImages[1], allImages[0], allImages[1]],
  },
  {
    slug: "haoshi-brand",
    id: "03",
    title: "豪士豪麦 / 品牌整合传播",
    titleEn: "HAOSHI BRAND CAMPAIGN",
    type: "BRAND CAMPAIGN · VISUAL DESIGN",
    year: "2025",
    image: allImages[2],
    summary: "把产品卖点转化为更有记忆点的品牌视觉与互动传播语言。",
    description: "围绕豪麦面包的产品特征与年轻消费场景，完成视觉定位、竞品分析、活动主画面与传播物料设计，在统一识别下连接品牌、内容与社交互动。",
    role: "品牌研究 / 主视觉 / 传播物料",
    tools: "Photoshop · Illustrator · Figma",
    outcome: "整合传播 / 商业视觉",
    gallery: [allImages[2], allImages[2], allImages[0], allImages[2], allImages[1], allImages[2]],
  },
  {
    slug: "foggy-island",
    id: "04",
    title: "雾隐岛 / UE5 场景叙事",
    titleEn: "FOGGY ISLAND",
    type: "UE5 ENVIRONMENT · GAME VISUAL",
    year: "2025",
    image: allImages[3],
    summary: "用场景、光影与交互节点塑造带有东方文明想象的沉浸式岛屿世界。",
    description: "从世界观、情绪板和环境资产出发，在 UE5 中完成岛屿村落、植被、海面与夜间气氛的搭建，并通过蓝图交互与镜头语言组织探索节奏。",
    role: "场景概念 / UE5 搭建 / 交互演示",
    tools: "UE5 · Blender · Photoshop",
    outcome: "场景叙事 / 实时渲染",
    gallery: [allImages[3], allImages[3], allImages[1], allImages[3], allImages[2], allImages[3]],
  },
  {
    slug: "commercial-design",
    id: "05",
    title: "电商视觉设计",
    titleEn: "COMMERCIAL VISUAL DESIGN",
    type: "E-COMMERCE · VISUAL DESIGN",
    year: "2025—2026",
    image: "/work-gallery/04-commercial-design.png",
    summary: "面向不同消费品类建立清晰、高效且具有转化力的电商视觉表达。",
    description: "覆盖食品、数码、护肤与健康产品等多品类内容，通过卖点拆解、视觉层级和模板化设计，将商业信息组织为更具识别度与传播效率的电商画面。",
    role: "视觉策略 / 电商设计 / 模板搭建",
    tools: "Photoshop · Figma · AI",
    outcome: "多品类输出 / 视觉提效",
    gallery: ["/work-gallery/04-commercial-design.png", "/work-gallery/06-ai-visual-system.png", allImages[2], "/work-gallery/04-commercial-design.png", allImages[0], "/work-gallery/06-ai-visual-system.png"],
  },
  {
    slug: "ai-short-drama",
    id: "06",
    title: "弑灵万丝 / AI 短剧视觉",
    titleEn: "AI SHORT DRAMA",
    type: "AI FILM · KEY VISUAL",
    year: "2026",
    image: "/hero-projects/06-red-thread-portrait.webp",
    summary: "以 AI 生成流程构建东方奇幻短剧的角色、世界观与核心视觉氛围。",
    description: "围绕红线、宿命与重生的叙事意象，完成角色形象、场景氛围和主海报视觉设计，并通过统一的生成参数与后期规范保持画面风格连贯。",
    role: "视觉概念 / AI 生成 / 海报设计",
    tools: "ComfyUI · Photoshop · AI",
    outcome: "角色视觉 / 叙事海报",
    gallery: ["/hero-projects/06-red-thread-portrait.webp", "/hero-projects/06-red-thread-portrait.webp", allImages[3], "/hero-projects/06-red-thread-portrait.webp", allImages[2], "/hero-projects/06-red-thread-portrait.webp"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
