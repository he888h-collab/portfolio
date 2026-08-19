"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    id: "01",
    title: "NEBULA / 数字艺术节",
    type: "VISUAL IDENTITY · 2025",
    image: "https://assets.lummi.ai/assets/QmbDDrBcyWzhRj5HkeU3eM2N1CQVfAuMb2zAj3t34mfAsx",
    size: "wide",
  },
  {
    id: "02",
    title: "VOID / 时装视觉实验",
    type: "ART DIRECTION · 2024",
    image: "https://assets.lummi.ai/assets/Qmd9cGcj7NPdjKh4fwH8wdiKyECKMRmLkj22ZAyDzrhhHP",
    size: "tall",
  },
  {
    id: "03",
    title: "SYNTH / 品牌焕新",
    type: "BRAND SYSTEM · 2024",
    image: "https://assets.lummi.ai/assets/QmTqMzCZnrcdhcCXiLUkKJowTH9KuwWgrLoPeMcZcbGpro",
    size: "standard",
  },
];

const strengths = [
  ["01", "视觉策略", "从品牌语境出发，将抽象目标转译为清晰、有辨识度的视觉方向。"],
  ["02", "创意概念", "以概念驱动设计，在克制的系统中创造令人记住的视觉瞬间。"],
  ["03", "品牌系统", "建立可持续延展的字体、色彩、图形与影像规范，保持跨媒介一致性。"],
  ["04", "动态叙事", "用节奏、镜头与交互增强信息层级，让品牌在数字空间里真正运动起来。"],
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
          <a className="brand" href="#top" aria-label="回到首页"><span>Y.</span>STUDIO</a>
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
          <div className="hero-kicker"><span>Independent visual designer</span><span>Shanghai · China</span></div>
          <h1><span>DESIGNING</span><span className="outline">VISUAL IMPACT</span></h1>
          <div className="hero-bottom">
            <p>以策略为起点，以视觉为语言。<br />为品牌构建清晰、前沿且耐看的视觉体验。</p>
            <a className="round-link" href="#work" aria-label="浏览精选项目"><span>↘</span><small>VIEW WORK</small></a>
          </div>
        </div>
        <div className="hero-index">PORTFOLIO © 2026</div>
      </section>

      <section className="about section shell" id="about">
        <div className="section-label"><span>01</span><p>ABOUT / 个人经历</p></div>
        <div className="about-layout">
          <div className="portrait-wrap">
            <img src="https://images.squarespace-cdn.com/content/v1/52d59ef8e4b077750335a1d0/1467095664488-VORAQ2KK3NFJHW3SKGRQ/image-asset.jpeg" alt="视觉设计师肖像占位图" />
            <span className="portrait-tag">OPEN FOR PROJECTS · 2026</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">HELLO, I&apos;M A VISUAL DESIGNER.</p>
            <h2>让视觉不止于<br /><em>好看。</em></h2>
            <p className="intro">我是一名专注于品牌视觉、数字体验与创意表达的视觉设计师。擅长在策略与美学之间寻找平衡，把复杂的信息转化为简洁、准确、有情绪的设计语言。</p>
            <div className="meta-grid">
              <div><small>BASED IN</small><strong>SHANGHAI, CN</strong></div>
              <div><small>CONTACT</small><a href="mailto:hello@yourstudio.design">HELLO@YOURSTUDIO.DESIGN ↗</a></div>
              <div><small>FOCUS</small><strong>BRAND / DIGITAL / MOTION</strong></div>
              <div><small>LANGUAGE</small><strong>中文 / ENGLISH</strong></div>
            </div>
          </div>
        </div>
        <div className="stats">
          <div><strong>06<sup>+</sup></strong><span>YEARS EXPERIENCE<br />设计经验</span></div>
          <div><strong>48<sup>+</sup></strong><span>PROJECTS DELIVERED<br />落地项目</span></div>
          <div><strong>12</strong><span>BRANDS SERVED<br />合作品牌</span></div>
          <div><strong>08</strong><span>INDUSTRY AWARDS<br />设计奖项</span></div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="shell">
          <div className="section-label"><span>02</span><p>SELECTED WORK / 精选项目</p></div>
          <div className="work-head">
            <h2>SELECTED<br /><em>WORKS</em></h2>
            <p>一组关于品牌、文化与数字体验的视觉实践。<br />每个项目都是一次新的观察与重构。</p>
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
        <div className="strength-head"><h2>HOW I<br /><em>CREATE</em></h2><p>不是单一风格的复制，<br />而是为每个问题寻找准确的视觉答案。</p></div>
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
          <div className="availability"><i /> AVAILABLE FOR SELECTED PROJECTS</div>
          <h2>LET&apos;S MAKE<br /><em>SOMETHING</em> MATTER.</h2>
          <a className="email" href="mailto:hello@yourstudio.design">HELLO@YOURSTUDIO.DESIGN <span>↗</span></a>
          <div className="contact-bottom">
            <p>视觉设计 · 品牌系统 · 数字体验 · 动态视觉</p>
            <div><a href="#">BEHANCE ↗</a><a href="#">INSTAGRAM ↗</a><a href="#">LINKEDIN ↗</a></div>
            <p>© 2026 Y.STUDIO<br />ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
