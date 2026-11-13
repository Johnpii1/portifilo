import { BookOpen } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import { process } from "../data/portfolioData";

export default function JourneySection() {
  return (
    <section className="section-block container" id="journey">
      <SectionLabel number="05">HOW I WORK</SectionLabel>
      <div className="section-heading-row reveal">
        <h2>A thoughtful process.<span>Better outcomes.</span></h2>
        <p>A simple approach that keeps the goal clear from the first conversation to the final details.</p>
      </div>
      <div className="process-grid">
        {process.map(([number,title,text])=><article className="process-step reveal" key={number}>
          <span className="process-number">{number}</span><div className="process-line"/><h3>{title}</h3><p>{text}</p>
        </article>)}
      </div>
      <div className="journey-note reveal">
        <div className="journey-note-icon"><BookOpen size={22}/></div>
        <div><span>MY DEVELOPMENT JOURNEY</span><h3>Learning, building and improving — one project at a time.</h3>
          <p>I'm growing through hands-on projects, independent learning and collaboration. This section can be updated with formal work experience, education and certifications as I add them.</p>
        </div>
      </div>
    </section>
  );
}
