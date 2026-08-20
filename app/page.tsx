"use client";

import { useEffect, useState } from "react";

const experiences = [
  { date:"2026.07 — 2026.09", company:"金山夏令营", role:"AI 视觉生成工作流实践", intro:"AI 视觉生成落地｜ComfyUI / WebUI 工作流搭建与产出", points:["将 AI 生成工具引入真实视觉产出链路，完成从风格定义、模型选型到批量出图的完整闭环。","沉淀可复用的生成模板与参数规范，提升出图效率与风格一致性，获最佳技术实现奖。"] },
  { date:"2025.10 — 2026.02", company:"新东方教育科技集团", role:"视觉设计实习生", intro:"活动视觉设计｜主视觉与延展物料", points:["负责暑期、秋季课程宣传活动主视觉策划与出图，独立完成多套活动延展物料。","协同运营侧多轮迭代，保障品牌调性统一与活动曝光转化目标。"] },
  { date:"2025.05 — 2025.09", company:"北京与爱为舞科技有限公司", role:"平面设计实习生", intro:"直播 / 电商视觉｜Figma 模板体系与视觉标准化", points:["负责直播封面、电商主图等视觉设计，用 Figma 搭建高复用模板体系。","基于数据反馈持续优化封面点击率，支撑直播间高效产出与视觉一致性。"] },
];
const capabilities = [
  ["01", "AI VISUAL", "ComfyUI / WebUI / Agent", "把生成能力组织成稳定、可复用的设计工作流。"],
  ["02", "BRAND DESIGN", "视觉系统 / 活动主视觉", "从概念到延展，建立统一且有识别度的品牌语言。"],
  ["03", "3D & MOTION", "C4D / UE5 / 动效", "让静态概念进入空间、镜头与动态叙事。"],
  ["04", "UI & CONTENT", "界面原型 / 视频包装", "理解信息层级，也关注传播场景中的实际落地。"],
];
const placeholders = ["01 / AI VISUAL SYSTEM", "02 / IP DESIGN", "03 / BRAND CAMPAIGN", "04 / 3D ENVIRONMENT", "05 / MOTION DESIGN", "06 / MORE TO COME"];
const speedFrames = new WeakMap<Animation, number>();
function glideGallerySpeed(section: HTMLElement, target: number) {
  section.querySelectorAll<HTMLElement>(".gallery-row").forEach(row => row.getAnimations().forEach(animation => {
    const pending = speedFrames.get(animation); if(pending) cancelAnimationFrame(pending);
    const from = animation.playbackRate; const started = performance.now(); const duration = target === 0 ? 850 : 650;
    const step = (now:number) => { const t=Math.min(1,(now-started)/duration); const eased=1-Math.pow(1-t,3); animation.playbackRate=from+(target-from)*eased; if(t<1) speedFrames.set(animation,requestAnimationFrame(step)); };
    speedFrames.set(animation,requestAnimationFrame(step));
  }));
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 28);
      const marker = window.scrollY + window.innerHeight * .42;
      const sections = ["about","experience","work","advantages","contact"]
        .map(id => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section)).sort((a,b) => a.offsetTop-b.offsetTop);
      const current = sections.reduce((active, section) => section.offsetTop <= marker ? section.id : active, "about");
      setActiveSection(current);
    };
    update(); window.addEventListener("scroll", update, { passive: true });
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add("is-visible"); }), { threshold:.18, rootMargin:"0px 0px -8%" });
    document.querySelectorAll(".timeline-item").forEach(item => reveal.observe(item));
    const galleryWatch = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle("is-playing", entry.isIntersecting)), { threshold:.28 });
    const gallery = document.getElementById("work"); if(gallery) galleryWatch.observe(gallery);
    return () => { window.removeEventListener("scroll", update); reveal.disconnect(); galleryWatch.disconnect(); };
  }, []);
  return <main id="top">
    <section className="intro-hero" id="about">
      <header className={`topbar ${scrolled ? "topbar--solid" : ""}`}>
        <nav aria-label="主导航"><a className={activeSection==="about"?"active":""} href="#about">关于我</a><a className={activeSection==="experience"?"active":""} href="#experience">工作经历</a><a className={activeSection==="work"?"active":""} href="#work">个人作品</a><a className={activeSection==="advantages"?"active":""} href="#advantages">个人优势</a><a className={activeSection==="contact"?"active":""} href="#contact">联系我</a></nav>
      </header>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hello">HELLO / 你好</p>
          <h1>我叫许馨月</h1>
          <div className="portfolio-word">PORTFOLIO</div>
          <h2>视觉设计师</h2>
          <p className="hero-description">一位把灵感变成画面、让视觉自带生命力的 00 后设计师</p>
          <div className="hero-actions"><a href="#work">查看我的作品 <span>↗</span></a><a href="#contact">联系我</a></div>
          <div className="hero-tags"><span>视觉系统 × AI 工作流</span><span>平面 × 三维 × 动效</span></div>
        </div>
        <div className="hero-portrait" aria-label="个人头像占位"><div><span>PORTRAIT</span><small>后续添加头像</small></div><aside><b>NOW</b><span>开放合作 / 作品交流</span></aside></div>
      </div>
      <div className="hero-watermark">PORTFOLIO</div>
      <div className="hero-projects" aria-label="精选作品快捷入口">
        {placeholders.map((label,i)=><a href="#work" className={`hero-project hero-project-${i+1}`} key={label} aria-label={`查看作品：${label.split(" / ")[1]}`}><span>{String(i+1).padStart(2,"0")}</span><strong>{label.split(" / ")[1]}</strong><small>IMAGE PLACEHOLDER</small></a>)}
      </div>
    </section>
    <section className="experience journey" id="experience">
      <div className="journey-heading"><p>02 / THE JOURNEY</p><h2>Work Experience</h2><span>个人经历 / 每一段经历都在形成现在的我</span></div>
      <div className="timeline">
        {experiences.map((item,i)=><article className={`timeline-item timeline-item-${i%2===0?"left":"right"}`} style={{"--delay":`${i*120}ms`} as React.CSSProperties} key={item.company}>
          <div className="timeline-card"><h3>{item.company}</h3><h4>{item.role}</h4><p>{item.intro}</p><ol>{item.points.map(point=><li key={point}>{point}</li>)}</ol></div>
          <div className="timeline-axis"><i>{i+1}</i></div><time>{item.date}</time>
        </article>)}
      </div>
    </section>
    <section className="scroll-gallery" id="work">
      <div className="gallery-sticky">
        <div className="gallery-label"><span>03 / SELECTED WORKS</span><p>个人作品 / IMAGE PLACEHOLDERS</p></div>
        <div className="gallery-row gallery-row-top">{[1,2,3,4,5,6].map((n)=><a href="#work-details" className={`gallery-tile tile-${n}`} key={`top-${n}`} onMouseEnter={event=>glideGallerySpeed(event.currentTarget.closest(".scroll-gallery") as HTMLElement,0)} onMouseLeave={event=>glideGallerySpeed(event.currentTarget.closest(".scroll-gallery") as HTMLElement,1)}><b>{String(n).padStart(2,"0")}</b><span>PROJECT IMAGE</span><small>后续添加作品图片</small></a>)}</div>
        <div className="gallery-row gallery-row-bottom">{[7,8,9,10,11,12].map((n)=><a href="#work-details" className={`gallery-tile tile-${n}`} key={`bottom-${n}`} onMouseEnter={event=>glideGallerySpeed(event.currentTarget.closest(".scroll-gallery") as HTMLElement,0)} onMouseLeave={event=>glideGallerySpeed(event.currentTarget.closest(".scroll-gallery") as HTMLElement,1)}><b>{String(n).padStart(2,"0")}</b><span>PROJECT IMAGE</span><small>后续添加作品图片</small></a>)}</div>
      </div>
    </section>
    <section className="orbit-about" id="profile">
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
    <section className="capabilities section-pad" id="advantages">
      <div className="section-top"><p>04 / ADVANTAGES</p><span>WHAT I DO</span></div><div className="cap-heading"><h2>CAPABILITIES</h2><p>技术不是风格本身，<br />它是放大创意的另一种语言。</p></div>
      <div className="cap-grid">{capabilities.map(([id,title,tools,text])=><article key={id}><span>{id}</span><div className="cap-shape"/><h3>{title}</h3><small>{tools}</small><p>{text}</p></article>)}</div>
    </section>
    <section className="work section-pad" id="work-details">
      <div className="section-top"><p>05 / SELECTED WORK</p><span>IMAGE-FREE TEMPLATE</span></div><div className="work-heading"><h2>SELECTED<br /><i>WORKS</i></h2><p>当前版本暂不放置项目图片。<br />以下模块已预留标题、分类与封面位置，后续可直接替换。</p></div>
      <div className="work-grid">{placeholders.map((label,i)=><article className={i===0||i===3?"work-card work-card--wide":"work-card"} key={label}><div className="work-placeholder"><span>ADD PROJECT IMAGE</span><b>{String(i+1).padStart(2,"0")}</b><i>↗</i></div><div><h3>{label.split(" / ")[1]}</h3><p>{label.split(" / ")[0]} / CASE STUDY PLACEHOLDER</p></div></article>)}</div>
    </section>
    <footer className="final-contact" id="contact"><div className="contact-orbit"/><div className="section-top"><p>06 / CONTACT</p><span>OPEN TO COLLABORATION</span></div><p className="contact-kicker">下一段经历，也许可以一起创造。</p><h2>LET&apos;S MAKE<br />SOMETHING <i>NEW.</i></h2><div className="contact-links"><a href="mailto:xuxinyue_2027@163.com">XUXINYUE_2027@163.COM ↗</a><a href="tel:+8613261482033">+86 132 6148 2033 ↗</a></div><div className="footer-line"><span>VISUAL DESIGN · AI · 3D · MOTION</span><span>© 2026 XINYUE XU</span><a href="#top">BACK TO TOP ↑</a></div></footer>
  </main>;
}
