import { ArrowRight, ExternalLink, Layers3, Sparkles } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import { projects } from "../data/portfolioData";

function ProjectVisual({visual}) {
  if (visual === "bounty") return <div className="bounty-visual-content"><div className="bounty-symbol"><Layers3 size={36}/></div><strong>HAPPY BOUNTY</strong><span>TASKS · COMMUNITY · REWARDS</span></div>;
  if (visual === "portfolio") return <div className="portfolio-visual-content"><div className="portfolio-mini"><span>JP.</span><div/><div/><div/></div><strong>PERSONAL PORTFOLIO</strong></div>;
  if (visual === "code") return <div className="code-visual-content"><div className="code-window"><div className="window-dots"><i/><i/><i/></div><code><span>const</span> keepBuilding = <b>true</b>;</code><code><span>while</span> (keepBuilding) {"{"}</code><code className="code-indent">learn(); create(); improve();</code><code>{"}"}</code></div></div>;
  return <div className="next-visual-content"><Sparkles size={34}/><strong>YOUR NEXT BIG IDEA</strong><span>ADD YOUR PROJECT HERE</span></div>;
}

export default function ProjectsSection() {
  return (
    <section className="section-block container" id="work">
      <SectionLabel number="03">SELECTED WORK</SectionLabel>
      <div className="section-heading-row reveal">
        <h2>Some things I've been <span>working on.</span></h2>
        <p>A selection of projects and practical work from my development journey. Feel free to explore the live work and source code.</p>
      </div>
      <div className="project-grid">
        {projects.map(project=><article className="project-card reveal" key={project.number}>
          <div className="project-card-top"><span>{project.number} / FEATURED</span><span className="project-status">{project.status}</span></div>
          <div className={`project-visual ${project.visual}`}><ProjectVisual visual={project.visual}/></div>
          <p className="project-category">{project.category}</p><h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <div className="tag-list">{project.stack.map(item=><span key={item}>{item}</span>)}</div>
          <a className="text-link cursor-pointer" href={project.href} target="_blank" rel="noreferrer">{project.action} <ExternalLink size={14}/></a>
        </article>)}
      </div>
      <a className="github-more cursor-pointer" href="https://github.com/Johnpii1" target="_blank" rel="noreferrer">Explore more on GitHub <ArrowRight size={16}/></a>
    </section>
  );
}
