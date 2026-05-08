const steps = [
  ['01', 'Anchor to one real decision', 'Each interview begins with one specific health choice: whether to seek care, delay care, accept treatment, or put someone else first.'],
  ['02', 'Follow the tension', 'The interview focuses on what made the choice difficult — fear, family, responsibility, uncertainty, language, prior experience, or trust.'],
  ['03', 'Capture the real quote', 'Every memo records the moment someone says something that reveals how the decision felt from the inside.'],
  ['04', 'Write the story memo', 'Each interview is processed into background, decision, key factors, direct quote, and initial insight before publication.'],
  ['05', 'Shape the story card', 'Stories are edited into a consistent archive format so readers can compare patterns across different lives and situations.'],
];

const editorialSteps = [
  'Raw interview conducted and recorded with consent',
  'Story memo written: background, decision, factors, quote, insight',
  'Anonymisation: names, locations, identifying details changed',
  'Editorial review for accuracy and tone',
  'Story card published to archive',
];

export default function Method() {
  const synthesisItems = [
    {
      accent: 'blue',
      title: 'Ethics and anonymity',
      content: <p>All participants are anonymised by default. Names, locations, and identifying details are changed before publication. Participation is voluntary and may be withdrawn at any time.</p>,
    },
    {
      accent: 'green',
      title: 'Dual-track collection',
      content: <p>The project combines in-depth interviews for depth and a structured form for broader reach. Both routes feed into the same archive framework.</p>,
    },
    {
      accent: 'copper',
      title: 'Why themes, not diseases?',
      content: <p>The archive is organised by decision pattern because the same emotional and relational forces often appear across very different health issues.</p>,
    },
    {
      accent: 'gold',
      title: 'From interview to archive',
      content: (
        <div className="editorial-steps">
          {editorialSteps.map((text) => (
            <div className="ed-step" key={text}>{text}</div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className="method-page">
      <header className="method-page-header">
        <div className="label">Method</div>
        <h1 className="method-title">Method</h1>
        <p className="method-opening">Built for honesty, not headlines.</p>
        <p className="method-intro">The goal is not to collect opinions in general. The goal is to document one real health decision at a time, and the forces that shaped it.</p>
      </header>
      <div className="method-grid">
        <div className="method-main">
          <div className="steps">
            {steps.map(([num, title, text]) => (
              <div className="step" key={num}><div className="step-num">{num}</div><div><h3>{title}</h3><p>{text}</p></div></div>
            ))}
          </div>
        </div>
        <aside className="synthesis-panel" aria-label="Method synthesis">
          {synthesisItems.map((item) => (
            <section className={`synthesis-item accent-${item.accent}`} key={item.title}>
              <div className="synthesis-heading">
                <h3 className="synthesis-title">{item.title}</h3>
              </div>
              <div className="synthesis-content">{item.content}</div>
            </section>
          ))}
        </aside>
      </div>
    </section>
  );
}
