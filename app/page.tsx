"use client";

import { useEffect, useState } from "react";

const experiences = [
  ["2026.07 — 09", "金山夏令营", "AI 视觉生成工作流实践"],
  ["2025.10 — 2026.02", "新东方教育科技集团", "视觉设计实习生"],
  ["2025.05 — 09", "北京与爱为舞科技有限公司", "平面设计实习生"],
];
const capabilities = [
  ["01", "AI VISUAL", "ComfyUI / WebUI / Agent", "把生成能力组织成稳定、可复用的设计工作流。"],
  ["02", "BRAND DESIGN", "视觉系统 / 活动主视觉", "从概念到延展，建立统一且有识别度的品牌语言。"],
  ["03", "3D & MOTION", "C4D / UE5 / 动效", "让静态概念进入空间、镜头与动态叙事。"],
  ["04", "UI & CONTENT", "界面原型 / 视频包装", "理解信息层级，也关注传播场景中的实际落地。"],
];
const placeholders = ["01 / AI VISUAL SYSTEM", "02 / IP DESIGN", "03 / BRAND CAMPAIGN", "04 / 3D ENVIRONMENT", "05 / MOTION DESIGN", "06 / MORE TO COME"];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 28);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <main id="top">
    <header className={`topbar ${scrolled ? "topbar--solid" : ""}`}>
      <a className="wordmark" href="#top"><i /> XINYUE XU</a>
      <nav aria-label="主导航"><a href="#about">ABOUT</a><a href="#experience">EXPERIENCE</a><a href="#work">WORK</a></nav>
      <a className="contact-pill" href="#contact">CONTACT <span>↗</span></a>
    </header>
    <section className="intro-hero">
      <div className="hero-meta"><span>VISUAL DESIGNER</span><span>BEIJING · CN</span><span>PORTFOLIO / 2026</span></div>
      <div className="hero-title"><p>HELLO, I&apos;M</p><h1>XINYUE</h1><h1 className="hero-outline">XU.</h1></div>
      <div className="hero-note"><span>01</span><p>一位将视觉设计、三维与 AI 生成技术<br />连接起来的年轻设计师。</p></div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><b>↓</b></a>
    </section>
    <section className="orbit-about" id="about">
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      {Array.from({length:10}).map((_,i)=><div className="orbit-card" style={{"--i":i} as React.CSSProperties} key={i}><span>IMAGE<br />PLACEHOLDER</span></div>)}
      <div className="orbit-copy"><small>ABOUT / 关于我</small><h2>DESIGN<br /><em>×</em> AI</h2><p>北京科技大学 · 视觉传达设计</p></div>
      <div className="orbit-aside"><span>AVAILABLE FOR</span><strong>VISUAL DESIGN<br />OPPORTUNITIES</strong></div>
    </section>
    <section className="profile-section section-pad">
      <div className="profile-lead"><p>02 / PROFILE</p><h2>让灵感成为<br /><i>可以落地的视觉。</i></h2></div>
      <div className="profile-grid">
        <div className="portrait-placeholder"><span>PORTRAIT<br />PLACEHOLDER</span><b>4:5</b></div>
        <div className="profile-copy"><p>我关注的不只是单张画面，而是视觉如何形成系统、如何适应不同媒介，以及如何借助新工具提升创作质量与效率。</p>
          <div className="info-list"><div><span>NAME</span><b>许馨月 / XINYUE XU</b></div><div><span>EDUCATION</span><b>北京科技大学 · 视觉传达设计</b></div><div><span>FOCUS</span><b>AI VISUAL / BRAND / 3D / MOTION</b></div><div><span>CONTACT</span><a href="mailto:xuxinyue_2027@163.com">XUXINYUE_2027@163.COM ↗</a></div></div>
        </div>
      </div>
    </section>
    <section className="experience section-pad" id="experience">
      <div className="section-top"><p>03 / EXPERIENCE</p><span>SELECTED JOURNEY</span></div><h2 className="display-title">WORK<br />EXPERIENCE</h2>
      <div className="experience-list">{experiences.map(([date,company,role],i)=><article key={company}><span>0{i+1}</span><time>{date}</time><h3>{company}</h3><p>{role}</p><b>↗</b></article>)}</div>
    </section>
    <section className="capabilities section-pad">
      <div className="section-top"><p>04 / ADVANTAGES</p><span>WHAT I DO</span></div><div className="cap-heading"><h2>CAPABILITIES</h2><p>技术不是风格本身，<br />它是放大创意的另一种语言。</p></div>
      <div className="cap-grid">{capabilities.map(([id,title,tools,text])=><article key={id}><span>{id}</span><div className="cap-shape"/><h3>{title}</h3><small>{tools}</small><p>{text}</p></article>)}</div>
    </section>
    <section className="work section-pad" id="work">
      <div className="section-top"><p>05 / SELECTED WORK</p><span>IMAGE-FREE TEMPLATE</span></div><div className="work-heading"><h2>SELECTED<br /><i>WORKS</i></h2><p>当前版本暂不放置项目图片。<br />以下模块已预留标题、分类与封面位置，后续可直接替换。</p></div>
      <div className="work-grid">{placeholders.map((label,i)=><article className={i===0||i===3?"work-card work-card--wide":"work-card"} key={label}><div className="work-placeholder"><span>ADD PROJECT IMAGE</span><b>{String(i+1).padStart(2,"0")}</b><i>↗</i></div><div><h3>{label.split(" / ")[1]}</h3><p>{label.split(" / ")[0]} / CASE STUDY PLACEHOLDER</p></div></article>)}</div>
    </section>
    <footer className="final-contact" id="contact"><div className="contact-orbit"/><div className="section-top"><p>06 / CONTACT</p><span>OPEN TO COLLABORATION</span></div><p className="contact-kicker">下一段经历，也许可以一起创造。</p><h2>LET&apos;S MAKE<br />SOMETHING <i>NEW.</i></h2><div className="contact-links"><a href="mailto:xuxinyue_2027@163.com">XUXINYUE_2027@163.COM ↗</a><a href="tel:+8613261482033">+86 132 6148 2033 ↗</a></div><div className="footer-line"><span>VISUAL DESIGN · AI · 3D · MOTION</span><span>© 2026 XINYUE XU</span><a href="#top">BACK TO TOP ↑</a></div></footer>
  </main>;
}
