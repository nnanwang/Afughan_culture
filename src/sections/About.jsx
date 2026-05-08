export default function About() {
  return (
    <section className="about-page">
      <header className="about-page-header">
        <div className="label">About the project</div>
        <h1 className="about-title">About the project</h1>
        <p className="about-intro">This is not a health campaign. It is a project about what it means to make a decision when your body, your family, and your uncertainty are all involved.</p>
      </header>
      <div className="about-layout">
        <div className="about-main">
        <div className="about-body">
          <p>I started this project because I kept running into the same gap. Public health often assumes that if people just knew more, they would do better. But knowing and doing are separated by something more complicated — fear, relationship, time, identity, memory, and responsibility.</p>
          <p>I wanted to understand what lives in that gap. Not to fix it from the outside. Just to listen carefully enough to see it clearly in real people's words.</p>
          <p>Numbers can show patterns, but stories show how a decision feels from the inside. This project uses narrative interviews because hesitation, obligation, trust, and fear are often clearer in language than in checkboxes.</p>
          <p>This project focuses on Afghan families because questions of trust, migration, care, language, and uncertainty often become especially visible there. The goal is not to generalise from a distance, but to document how those forces shape real decisions in lived experience.</p>
        </div>
        <div className="about-sig">— Kaylee Zhang, Sydney</div>
      </div>
      <div className="about-sidebar">
        <div className="info-row"><div className="info-label">Project lead</div><div>Kaylee Zhang</div></div>
        <div className="info-row"><div className="info-label">Project format</div><div>Narrative interviews + structured form submissions</div></div>
        <div className="info-row"><div className="info-label">Current focus</div><div>Health decisions in Afghan families and communities in Australia</div></div>
        <div className="info-row">
          <div className="info-label">Current phase</div>
          <div className="timeline-about">
            <div className="phase"><div className="dot"></div><div><strong>Phase 1</strong><br /><span>Interviews and early archive building</span></div></div>
            <div className="phase"><div className="dot off"></div><div><strong>Phase 2</strong><br /><span>Expanded collection and thematic development</span></div></div>
            <div className="phase"><div className="dot off"></div><div><strong>Phase 3</strong><br /><span>100 documented decisions</span></div></div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
