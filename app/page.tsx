"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    id: "01",
    title: "AI 电商视觉自动化系统",
    type: "AI WORKFLOW · E-COMMERCE",
    image: "/portfolio/ai-visual-system.jpg",
    size: "wide",
  },
  {
    id: "02",
    title: "蛮蛮 / 原创 IP 视觉设计",
    type: "IP DESIGN · 3D VISUAL",
    image: "/portfolio/manman-ip.jpg",
    size: "tall",
  },
  {
    id: "03",
    title: "豪士豪麦 / 品牌整合传播",
    type: "BRAND CAMPAIGN · VISUAL DESIGN",
    image: "/portfolio/haoshi-brand.jpg",
    size: "standard",
  },
  {
    id: "04",
    title: "雾隐岛 / UE5 场景叙事",
    type: "UE5 ENVIRONMENT · GAME VISUAL",
    image: "/portfolio/foggy-island.jpg",
    size: "wide",
  },
];

const strengths = [
  ["01", "AI 视觉工作流", "熟练运用 ComfyUI、WebUI 与 Agent 工作流，将 AI 生成能力接入真实设计产出链路。"],
  ["02", "复合视觉能力", "覆盖平面、三维、动效、UI 原型与视频包装，可独立完成从主视觉到延展物料的交付。"],
  ["03", "品牌与电商", "具备活动主视觉、电商主图、直播封面与可复用模板体系的实战经验。"],
  ["04", "逻辑与执行", "目标导向、自律高效，能够拆解复杂问题、预判风险并持续复盘优化工作方法。"],
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <header className={`nav-wrap ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="nav shell" aria-label="主导航">
          <a className="brand" href="#top" aria-label="回到首页"><span>X.</span>XINYUE</a>
          <div className="nav-links">
            <a href="#about">关于</a>
            <a href="#work">项目</a>
            <a href="#strengths">能力</a>
          </div>
          <a className="nav-contact" href="#contact"><i /> 联系我 <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <video className="hero-video" autoPlay muted loop playsInline poster="https://assets.lummi.ai/assets/QmTqMzCZnrcdhcCXiLUkKJowTH9KuwWgrLoPeMcZcbGpro">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-blue-tones-underwater-229-large.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-grid" />
        <div className="hero-content shell">
          <div className="hero-kicker"><span>Visual designer · AI creator</span><span>Beijing · China</span></div>
          <h1><span>XINYUE XU</span><span className="outline">VISUAL DESIGN</span></h1>
          <div className="hero-bottom">
            <p>融合设计与 AI 生成技术，<br />把视觉创意转化为稳定、高效的真实产出。</p>
            <a className="round-link" href="#work" aria-label="浏览精选项目"><span>↘</span><small>VIEW WORK</small></a>
          </div>
        </div>
        <div className="hero-index">PORTFOLIO © 2026</div>
      </section>

      <section className="about section shell" id="about">
        <div className="section-label"><span>01</span><p>ABOUT / 个人经历</p></div>
        <div className="about-layout">
          <div className="portrait-wrap">
            <img src="/portfolio/xuxinyue-portrait.jpg" alt="视觉设计师许馨月" />
            <span className="portrait-tag">AVAILABLE FOR VISUAL DESIGN ROLE</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">HELLO, I&apos;M XINYUE XU.</p>
            <h2>设计专业出身，<br /><em>用 AI 放大创意。</em></h2>
            <p className="intro">北京科技大学视觉传达设计本科在读。系统掌握平面、三维、动效与 UI 原型设计，熟练运用 ComfyUI、WebUI 与 Agent 工作流，将 AI 生成能力融入从主视觉、物料、海报到视频包装的完整产出链路。</p>
            <div className="meta-grid">
              <div><small>EDUCATION</small><strong>北京科技大学 · 视觉传达设计</strong></div>
              <div><small>CONTACT</small><a href="mailto:xuxinyue_2027@163.com">XUXINYUE_2027@163.COM ↗</a></div>
              <div><small>FOCUS</small><strong>AI VISUAL / BRAND / 3D / MOTION</strong></div>
              <div><small>PHONE</small><a href="tel:+8613261482033">132 6148 2033</a></div>
            </div>
            <div className="experience-list">
              <div><span>2026.07—09</span><strong>金山夏令营</strong><p>AI 视觉生成工作流实践</p></div>
              <div><span>2025.10—2026.02</span><strong>新东方教育科技集团</strong><p>视觉设计实习生</p></div>
              <div><span>2025.05—09</span><strong>北京与爱为舞科技有限公司</strong><p>平面设计实习生</p></div>
            </div>
          </div>
        </div>
        <div className="stats">
          <div><strong>03</strong><span>INTERNSHIPS<br />实习经历</span></div>
          <div><strong>04</strong><span>CORE PROJECTS<br />核心项目</span></div>
          <div><strong>02</strong><span>DESIGN AWARDS<br />项目奖项</span></div>
          <div><strong>05<sup>+</sup></strong><span>AI / 3D TOOLS<br />创作工具</span></div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="shell">
          <div className="section-label"><span>02</span><p>SELECTED WORK / 精选项目</p></div>
          <div className="work-head">
            <h2>SELECTED<br /><em>WORKS</em></h2>
            <p>从 AI 电商生产链路、原创 IP、品牌传播到 UE5 场景，<br />探索技术、叙事与商业视觉之间的连接。</p>
          </div>
        </div>
        <div className="project-list shell">
          {projects.map((project) => (
            <article className={`project ${project.size}`} key={project.id}>
              <a href="#contact" aria-label={`查看项目：${project.title}`}>
                <div className="project-image">
                  <img src={project.image} alt={`${project.title} 项目视觉`} />
                  <span className="project-arrow">↗</span>
                  <span className="project-no">/{project.id}</span>
                </div>
                <div className="project-info"><h3>{project.title}</h3><p>{project.type}</p></div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="strengths section shell" id="strengths">
        <div className="section-label"><span>03</span><p>CAPABILITIES / 个人优势</p></div>
        <div className="strength-head"><h2>HOW I<br /><em>CREATE</em></h2><p>兼顾创意表现与生产效率，<br />让前沿工具真正服务于设计结果。</p></div>
        <div className="strength-grid">
          {strengths.map(([id, title, text]) => (
            <article className="strength-card" key={id}>
              <span>{id}</span><div className="glyph">✦</div><h3>{title}</h3><p>{text}</p><small>EXPLORE ↗</small>
            </article>
          ))}
        </div>
      </section>

      <footer className="contact" id="contact">
        <div className="contact-glow" />
        <div className="shell contact-inner">
          <div className="section-label"><span>04</span><p>CONTACT / 保持联系</p></div>
          <div className="availability"><i /> OPEN TO VISUAL DESIGN OPPORTUNITIES</div>
          <h2>LET&apos;S CREATE<br /><em>THE NEXT</em> VISUAL.</h2>
          <a className="email" href="mailto:xuxinyue_2027@163.com">XUXINYUE_2027@163.COM <span>↗</span></a>
          <div className="contact-bottom">
            <p>AI 视觉 · 品牌设计 · 三维动效 · UI 原型</p>
            <div><a href="mailto:xuxinyue_2027@163.com">EMAIL ↗</a><a href="tel:+8613261482033">PHONE ↗</a><a href="#work">PORTFOLIO ↗</a></div>
            <p>© 2026 XINYUE XU<br />ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
