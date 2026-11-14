import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../projects";

type Props = { params: Promise<{ slug: string }> };

function getAbsoluteUrl(path: string, requestHeaders: Headers) {
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  return `${protocol}://${host}${path}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const requestHeaders = await headers();
  const image = getAbsoluteUrl(project.image, requestHeaders);
  const description = `${project.summary} ${project.type}`;
  return {
    title: `${project.title} — 许馨月作品集`,
    description,
    openGraph: { title: project.title, description, type: "article", images: [{ url: image, alt: project.title }] },
    twitter: { card: "summary_large_image", title: project.title, description, images: [image] },
  };
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const nextProject = projects[(projects.findIndex((item) => item.slug === slug) + 1) % projects.length];

  return (
    <main className="detail-page">
      <header className="detail-nav">
        <a className="detail-mark" href="/" aria-label="返回首页">X</a>
        <nav><a href="/#work">WORK</a><a href="/">HOME</a></nav>
        <a className="detail-pill" href="mailto:xuxinyue_2027@163.com">CONTACT ↗</a>
      </header>

      <section className="detail-hero">
        <div className="detail-hero-media"><img src={project.image} alt={project.title} /></div>
        <div className="detail-hero-shade" />
        <div className="detail-hero-copy">
          <p>PROJECT / {project.id} · {project.year}</p>
          <h1>{project.titleEn}</h1>
          <div><span>{project.type}</span><span>SCROLL TO EXPLORE ↓</span></div>
        </div>
      </section>

      {slug === "ai-short-drama" && (
        <section className="project-video-section">
          <div className="detail-shell project-video-heading">
            <p>FILM / 06 · AI SHORT DRAMA</p>
            <h2>残灵万丝，绯络逆世</h2>
          </div>
          <div className="detail-shell project-video-frame">
            <video controls playsInline preload="metadata" poster={project.image}>
              <source src="/work-videos/ai-short-drama.mp4" type="video/mp4" />
              您的浏览器暂不支持视频播放。
            </video>
          </div>
        </section>
      )}

      {slug === "foggy-island" ? (
        <section className="detail-shell" aria-label="雾隐岛游戏作品详情">
          <img
            src="/work-details/foggy-island-full.webp"
            alt="雾隐岛 · 文明重启完整作品展示"
            width={2400}
            height={8103}
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </section>
      ) : <>
      <section className="orbit-section">
        <div className="orbit-stage" aria-label="项目视觉预览">
          {project.gallery.slice(0, 10).concat(project.gallery.slice(0, 4)).map((image, index) => (
            <figure key={`${image}-${index}`} style={{ "--i": index } as React.CSSProperties}><img src={image} alt="" /></figure>
          ))}
          <div className="orbit-title"><small>CREATIVE SYSTEM</small><strong>{project.titleEn}</strong><span>{project.year}</span></div>
        </div>
      </section>

      <section className="recent-section">
        <div className="detail-shell recent-copy"><p>RECENT WORK / CASE STUDY</p><h2>{project.summary}</h2></div>
        <div className="recent-strip">
          {project.gallery.map((image, index) => <figure key={index}><img src={image} alt={`${project.title} 视觉 ${index + 1}`} /></figure>)}
        </div>
      </section>

      <section className="scatter-section detail-shell">
        <figure className="scatter-a"><img src={project.gallery[1]} alt="项目细节" /></figure>
        <figure className="scatter-b"><img src={project.gallery[3]} alt="项目细节" /></figure>
        <figure className="scatter-c"><img src={project.gallery[4]} alt="项目细节" /></figure>
        <figure className="scatter-d"><img src={project.gallery[5]} alt="项目细节" /></figure>
        <p>EVERYTHING<br />TO <span>→</span> CREATE<br />ANYTHING</p>
      </section>

      <section className="arc-gallery">
        <div className="arc-grid">
          {project.gallery.concat(project.gallery.slice(0, 9)).map((image, index) => (
            <figure key={index}><img src={image} alt="" /></figure>
          ))}
        </div>
      </section>

      <section className="project-story">
        <div className="detail-shell story-layout">
          <div><p className="story-kicker">CREATIVE DESIGN<br />WORK<br />FOR A FUTURE</p><h2>{project.title}</h2></div>
          <div className="story-copy"><p>{project.description}</p><dl><div><dt>ROLE</dt><dd>{project.role}</dd></div><div><dt>TOOLS</dt><dd>{project.tools}</dd></div><div><dt>OUTCOME</dt><dd>{project.outcome}</dd></div></dl></div>
        </div>
      </section>

      <section className="outcome-section">
        <p className="outcome-label">SELECTED OUTPUTS / {project.titleEn}</p>
        <div className="outcome-grid detail-shell">
          {project.gallery.map((image, index) => <figure key={index}><img src={image} alt={`${project.title} 成果 ${index + 1}`} /><figcaption>0{index + 1} / VISUAL OUTPUT</figcaption></figure>)}
        </div>
        <p className="outcome-quote">STOP OVER THINKING<br />JUST DO IT<br />FOR FUTURE</p>
      </section>
      </>}

      <a className="next-project" href={`/work/${nextProject.slug}`}>
        <span>NEXT PROJECT / {nextProject.id}</span><strong>{nextProject.titleEn}</strong><i>↗</i>
      </a>
    </main>
  );
}
