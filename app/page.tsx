"use client";

import { useEffect, useState } from "react";

const experiences = [
  { date:"2026.07 — 2026.09", company:"金山夏令营", role:"AI 视觉生成工作流实践", intro:"AI 视觉生成落地｜ComfyUI / WebUI 工作流搭建与产出", points:["将 AI 生成工具引入真实视觉产出链路，完成从风格定义、模型选型到批量出图的完整闭环。","沉淀可复用的生成模板与参数规范，提升出图效率与风格一致性，获最佳技术实现奖。"] },
  { date:"2025.10 — 2026.02", company:"新东方教育科技集团", role:"视觉设计实习生", intro:"活动视觉设计｜主视觉与延展物料", points:["负责暑期、秋季课程宣传活动主视觉策划与出图，独立完成多套活动延展物料。","协同运营侧多轮迭代，保障品牌调性统一与活动曝光转化目标。"] },
  { date:"2025.05 — 2025.09", company:"北京与爱为舞科技有限公司", role:"平面设计实习生", intro:"直播 / 电商视觉｜Figma 模板体系与视觉标准化", points:["负责直播封面、电商主图等视觉设计，用 Figma 搭建高复用模板体系。","基于数据反馈持续优化封面点击率，支撑直播间高效产出与视觉一致性。"] },
];
const strengths = [
  { id:"01", title:"AI设计提效", label:"SYSTEM", tags:["AI 工作流搭建", "批量视觉生成", "参数模板沉淀"] },
  { id:"02", title:"完整项目主导能力", label:"CORE", tags:["需求拆解与规划", "进度与质量把控", "复盘沉淀"] },
  { id:"03", title:"品牌视觉体系搭建", label:"CORE", tags:["品牌识别系统梳理", "视觉规范与延展模板", "统一多渠道传播质感"] },
  { id:"04", title:"跨部门合作能力", label:"SYSTEM", tags:["需求快速对齐", "多方协同推进", "清晰高效沟通"] },
  { id:"05", title:"注重效率与底层逻辑", label:"SYSTEM", tags:["结构化思考", "建立复用机制", "结果导向"] },
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
  const [copiedContact, setCopiedContact] = useState("");
  const copyContact = async (value:string, label:string) => {
    await navigator.clipboard.writeText(value);
    setCopiedContact(label);
    window.setTimeout(() => setCopiedContact(""), 1600);
  };
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
        <div className="gallery-row gallery-row-top">{[1,2,3,4,5,6].map((n)=><a href="#work" className={`gallery-tile tile-${n}`} key={`top-${n}`} onMouseEnter={event=>glideGallerySpeed(event.currentTarget.closest(".scroll-gallery") as HTMLElement,0)} onMouseLeave={event=>glideGallerySpeed(event.currentTarget.closest(".scroll-gallery") as HTMLElement,1)}><b>{String(n).padStart(2,"0")}</b><span>PROJECT IMAGE</span><small>后续添加作品图片</small></a>)}</div>
        <div className="gallery-row gallery-row-bottom">{[7,8,9,10,11,12].map((n)=><a href="#work" className={`gallery-tile tile-${n}`} key={`bottom-${n}`} onMouseEnter={event=>glideGallerySpeed(event.currentTarget.closest(".scroll-gallery") as HTMLElement,0)} onMouseLeave={event=>glideGallerySpeed(event.currentTarget.closest(".scroll-gallery") as HTMLElement,1)}><b>{String(n).padStart(2,"0")}</b><span>PROJECT IMAGE</span><small>后续添加作品图片</small></a>)}</div>
      </div>
    </section>
    <section className="strengths-section" id="advantages">
      <div className="strengths-heading"><div><p>04 / ADVANTAGES</p><h2>CORE STRENGTHS <span>↘</span></h2><small>个人优势</small></div><p>让创意、系统与协作<br />共同推动设计落地。</p></div>
      <div className="strengths-grid">{strengths.map((item)=><article className="strength-card" key={item.id} tabIndex={0}>
        <div className="strength-meta"><span>{item.id}</span><small>{item.label}</small></div>
        <h3>{item.title}<i>•</i></h3>
        <div className="strength-tags" aria-hidden="true">{item.tags.map((tag,index)=><span style={{"--tag-index":index} as React.CSSProperties} key={tag}>{tag}</span>)}</div>
        <div className="strength-orb" aria-hidden="true"><i/><i/><i/></div>
      </article>)}</div>
    </section>
    <footer className="final-contact" id="contact">
      <div className="section-top"><p>05 / CONTACT</p><span>OPEN TO COLLABORATION</span></div>
      <div className="contact-layout"><div className="contact-main"><p className="contact-kicker">下一段经历，也许可以一起创造。</p><h2>LET&apos;S MAKE<br />SOMETHING <i>NEW.</i></h2><div className="contact-links"><button type="button" onDoubleClick={()=>copyContact("xuxinyue_2027@163.com","email")} title="双击复制邮箱"><span>xuxinyue_2027@163.com</span><small aria-live="polite">{copiedContact==="email"?"已复制":"双击复制"}</small></button><button type="button" onDoubleClick={()=>copyContact("+86 132 6148 2033","phone")} title="双击复制电话"><span>+86 132 6148 2033</span><small aria-live="polite">{copiedContact==="phone"?"已复制":"双击复制"}</small></button></div></div>
      <div className="qr-placeholder"><img src="/images/wechat-qr.jpg" alt="许馨月的微信联系二维码" /><small>扫码联系我</small></div></div>
      <div className="footer-line"><span>VISUAL DESIGN · AI · 3D · MOTION</span><span>© 2026 XINYUE XU</span><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  </main>;
}
