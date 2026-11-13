import { ArrowUpRight, Clock3, Code2, Coffee, MapPin } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import { focusAreas } from "../data/portfolioData";

export default function AboutSection() {
  return (
    <section className="section-block container" id="about">
      <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
      <div className="about-layout reveal">
        <h2>Curious by nature.<span>Builder by choice.</span></h2>
        <div className="about-copy">
          <p>I'm a frontend developer from Nigeria who enjoys shaping ideas into useful digital products. I care about thoughtful interfaces, accessible experiences and code that is easy to understand and maintain.</p>
          <p>I'm continuously learning, experimenting with modern tools and exploring how technology can solve real problems — including opportunities in the Web3 ecosystem.</p>
          <a className="text-link cursor-pointer" href="#contact">A project in mind? Let's connect <ArrowUpRight size={16}/></a>
        </div>
      </div>
      <div className="about-facts reveal">
        <div><span className="fact-icon"><MapPin size={16}/></span><small>LOCATION</small><strong>Nigeria</strong></div>
        <div><span className="fact-icon"><Code2 size={16}/></span><small>FOCUS</small><strong>Frontend development</strong></div>
        <div><span className="fact-icon"><Coffee size={16}/></span><small>CURRENT MODE</small><strong>Learning by building</strong></div>
        <div><span className="fact-icon"><Clock3 size={16}/></span><small>AVAILABILITY</small><strong>Open to opportunities</strong></div>
      </div>
      <div className="focus-grid">
        {focusAreas.map(({icon:Icon,title,text},index)=><article className="focus-card reveal" key={title}>
          <div className="capability-top"><span>0{index+1}</span><Icon size={20}/></div><h3>{title}</h3><p>{text}</p>
        </article>)}
      </div>
    </section>
  );
}
