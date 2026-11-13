import SectionLabel from "../components/SectionLabel";
import { values } from "../data/portfolioData";

export default function BeyondCodeSection() {
  return (
    <section className="section-block container" id="beyond-code">
      <SectionLabel number="06">BEYOND THE CODE</SectionLabel>
      <div className="beyond-layout reveal">
        <div><h2>Good technology starts with <span>understanding people.</span></h2>
          <p>I'm interested in more than making interfaces look good. I want to understand the people using what I build, the challenges they face and how technology can make a practical difference.</p>
        </div>
        <div className="values-list">
          {values.map(([number,title,text])=><div key={number}><span>{number}</span><strong>{title}</strong><small>{text}</small></div>)}
        </div>
      </div>
    </section>
  );
}
