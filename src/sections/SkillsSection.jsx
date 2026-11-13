import { Braces, Check, Sparkles } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import { skills } from "../data/portfolioData";

export default function SkillsSection() {
  return (
    <section className="section-block container" id="skills">
      <SectionLabel number="04">TOOLS & TECHNOLOGIES</SectionLabel>
      <div className="skills-layout reveal">
        <div className="skills-intro">
          <div className="skills-icon"><Braces size={24}/></div><h2>My toolkit is <span>always growing.</span></h2>
          <p>I keep learning by building, testing ideas and working with tools that help create better experiences for the web.</p>
          <div className="learning-note"><Sparkles size={15}/> Learning is part of the process.</div>
        </div>
        <div className="skills-list">
          {skills.map(({name,level,icon:Icon},index)=><div className="skill-row" key={name}>
            <span className="skill-number">0{index+1}</span><span className="skill-icon"><Icon size={16}/></span>
            <div><strong>{name}</strong><small>{level}</small></div><Check size={15}/>
          </div>)}
        </div>
      </div>
    </section>
  );
}
