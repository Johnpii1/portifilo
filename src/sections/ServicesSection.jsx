import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import { services } from "../data/portfolioData";

export default function ServicesSection() {
  return (
    <section className="section-block container" id="services">
      <SectionLabel number="02">WHAT I CAN HELP WITH</SectionLabel>
      <div className="section-heading-row reveal">
        <h2>Turning ideas into <span>real experiences.</span></h2>
        <p>Areas where I can contribute, collaborate and keep growing through practical work.</p>
      </div>
      <div className="service-grid">
        {services.map(({icon:Icon,title,text},index)=><article className="service-card reveal" key={title}>
          <div className="service-icon"><Icon size={22}/></div><span className="service-number">0{index+1} / SERVICE</span>
          <h3>{title}</h3><p>{text}</p><a className="service-arrow cursor-pointer" href="#contact" aria-label={`Ask about ${title}`}><ArrowUpRight size={18}/></a>
        </article>)}
      </div>
    </section>
  );
}
