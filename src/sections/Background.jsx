import { useEffect, useState } from 'react';

const diaspora = [
  ['Pakistan', '1.7M+', 'Largest host. Many in long-term camps with uncertain legal status for decades.', 'green'],
  ['Iran', '3.4M+', 'Mostly undocumented. Frequently face discrimination and forced deportation.', 'copper'],
  ['Germany', '250K+', "Europe's largest Afghan community. Rapid growth post-2015 and post-2021.", 'gold'],
  ['United States', '200K+', 'California, Virginia, Texas. ~80,000 evacuees post-2021.', 'blue'],
  ['United Kingdom', '75K+', 'Significant communities in London and Birmingham.', 'gold'],
  ['Canada', '90K+', 'Active resettlement post-2021. Strong community advocacy networks.', 'teal'],
  ['Netherlands', '45K+', 'High per-capita Afghan community relative to national population.', 'gold'],
  ['Australia', '72K+', 'Primarily NSW and Victoria. One of the most established diaspora communities globally.', 'blue'],
  ['New Zealand', '4K+', 'Small but growing, largely through humanitarian and family reunion pathways.', 'teal'],
];

const challenges = [
  ['01', 'Language & Health Literacy', "Navigating Australia's healthcare system in a second or third language creates barriers that cost lives. Interpreters are inconsistently available."],
  ['02', 'Trauma & Mental Health', 'PTSD and depression rates significantly exceed the general population. Cultural stigma means most go untreated.'],
  ['03', 'Trust Deficit in Institutions', 'Generations of experience with state violence mean many approach government health services with deep caution.'],
  ['04', 'Gendered Health Access', 'For many Afghan women, seeing a male doctor conflicts with deeply held values. Female GPs are in short supply in the suburbs where communities cluster.'],
  ['05', 'Transnational Stress', 'The anxiety of family members still in Afghanistan sits in every waiting room and sleepless night — not left at the border.'],
];

const departureFactors = [
  ['conflict', 'copper', 'Conflict & Persecution', 'Decades of war, ethnic persecution — particularly targeting Hazaras — and political violence have made staying impossible for millions. Many Afghan Australians fled direct threats to their lives.'],
  ['education', 'blue', 'Education & Future', "For families with daughters, the Taliban's ban on girls' education is not an abstract policy — it is the erasure of a child's future. Many parents cite education as the single most important reason for leaving."],
  ['healthcare', 'green', 'Healthcare & Safety', 'The collapse of maternal and child healthcare, the absence of mental health services, and cumulative trauma all create powerful push factors — especially for families with ongoing health needs.'],
];

const backgroundNav = [
  ['country-culture', 'Country & Culture'],
  ['healthcare-context', 'Healthcare Context'],
  ['why-they-left', 'Why They Left'],
  ['afghan-diaspora', 'Afghan Diaspora'],
  ['life-in-australia', 'Life in Australia'],
  ['research-lens', 'Research Lens'],
];

function BackgroundIcon({ type }) {
  if (type === 'education') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 5.5c2.6 0 4.9.6 7 2v11c-2.1-1.4-4.4-2-7-2v-11Z" />
        <path d="M20 5.5c-2.6 0-4.9.6-7 2v11c2.1-1.4 4.4-2 7-2v-11Z" />
        <path d="M12 7.5v11" />
      </svg>
    );
  }

  if (type === 'healthcare') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 21s7-3.9 7-10.2V6.2L12 3 5 6.2v4.6C5 17.1 12 21 12 21Z" />
        <path d="M12 8v6" />
        <path d="M9 11h6" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 21s7-3.9 7-10.2V6.2L12 3 5 6.2v4.6C5 17.1 12 21 12 21Z" />
      <path d="M12 7v5" />
      <path d="M12 16h.01" />
    </svg>
  );
}

export default function Background({ onNavigate }) {
  const [activeSection, setActiveSection] = useState(backgroundNav[0][0]);

  useEffect(() => {
    const sections = backgroundNav
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-22% 0px -58% 0px', threshold: [0.12, 0.28, 0.48] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="background-page-header">
        <div className="label">Background</div>
        <h1>Understanding <em>Afghan</em><br />Families and Health</h1>
        <p className="mt-16">To understand health decisions made by Afghan Australians, we first need to understand the world that shaped them — a world of extraordinary resilience, decades of conflict, fractured institutions, and the long shadow of displacement.</p>
        <p className="mt-12">This background is not about explaining Afghan people from a distance. It is about giving the stories that follow the context they deserve.</p>
      </header>

      <div className="background-visual">
        <img src="/image/2025-07-17-Afghanistan-refugees.jpg" alt="" />
      </div>

      <div className="bg-page-hero">
        <div className="bg-hero-context">
          <div className="bg-hero-label">Context &amp; Background</div>
        </div>
        <div className="bg-hero-stats">
          <div className="bg-hstat"><div className="bg-hstat-num">43M</div><div className="bg-hstat-label">Afghanistan population</div></div>
          <div className="bg-hstat"><div className="bg-hstat-num">6.4M</div><div className="bg-hstat-label">Afghans displaced globally</div></div>
          <div className="bg-hstat"><div className="bg-hstat-num">72K+</div><div className="bg-hstat-label">Afghan Australians</div></div>
          <div className="bg-hstat"><div className="bg-hstat-num">40+</div><div className="bg-hstat-label">Years of conflict</div></div>
        </div>
      </div>

      <div className="background-content-layout">
        <nav className="background-section-nav" aria-label="Background sections">
          {backgroundNav.map(([id, label]) => (
            <a className={activeSection === id ? 'active' : ''} href={`#${id}`} key={id} onClick={() => setActiveSection(id)}>{label}</a>
          ))}
        </nav>

        <div className="background-content-main">
      <section className="bg-sec" id="country-culture">
        <div className="bg-lbl">Country &amp; Culture</div>
        <div className="bg-2col">
          <div>
            <h2>Afghanistan:<br />A Nation of Endurance</h2>
            <div className="bg-pull"><p>"In Afghan tradition, health is understood holistically — physical wellbeing is inseparable from spiritual balance, family honour, and community standing."</p></div>
            <div className="bg-prose">
              <p>Afghanistan sits at the crossroads of Central and South Asia — a landlocked nation of stunning geographic and ethnic diversity, home to Pashtuns, Tajiks, Hazaras, Uzbeks, and more than a dozen other groups. For millennia it was the beating heart of the Silk Road.</p>
              <p>Dari (Persian) and Pashto are the dominant languages. Islam — practised in deeply varied ways across communities — is central to social and family life. Extended family networks are the primary architecture of daily survival, decision-making, and care.</p>
              <p>Elders hold authority. Collective decisions carry more legitimacy than individual choices. A visit to a doctor is rarely a private act — it is often negotiated within a family first.</p>
            </div>
          </div>
          <div>
            <div className="bg-statrow bg-statrow-two" aria-label="Country and culture statistics">
              <div className="bg-sc"><div className="n">14+</div><div className="l">Ethnic groups</div></div>
              <div className="bg-sc"><div className="n">2</div><div className="l">Official languages</div></div>
              <div className="bg-sc"><div className="n">99%</div><div className="l">Muslim population</div></div>
              <div className="bg-sc"><div className="n">~60%</div><div className="l">Rural population</div></div>
            </div>
            <div className="detail-box"><h3>Why this matters for health decisions</h3><p className="muted-box-text">In Afghan cultural context, illness and care are embedded in family systems. To seek medical help independently can feel like bypassing the family's role. Trust in any healthcare provider is often first filtered through community relationships — not institutional reputation. These patterns do not disappear when families settle in Sydney.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-sec healthcare-panel" id="healthcare-context">
        <div className="bg-lbl">Healthcare Context</div>
        <div className="bg-2col">
          <div>
            <h2>A Healthcare System<br />Rebuilt from Ruin</h2>
            <div className="bg-prose">
              <p>Afghanistan once had a functioning public health infrastructure. In the 1970s, Kabul had hospitals, medical schools, and trained professionals — including women doctors and nurses. War dismantled it methodically.</p>
              <p>By the time the first Taliban rule ended in 2001, the system had collapsed almost entirely. Two decades of international involvement brought partial reconstruction, but geography, poverty, insecurity, and cultural barriers kept formal healthcare out of reach for millions.</p>
              <p>The result is a community that learned to navigate illness through informal networks, trusted community members, and family councils — not clinics. That instinct is deeply rational. And it does not disappear when families settle in Sydney.</p>
            </div>
          </div>
          <div className="bg-tl">
            {[
              ['1970s', 'Functioning system.', 'Kabul had hospitals, medical education, and public health infrastructure. Women worked as doctors and nurses.'],
              ['1979–1992', 'Soviet invasion & civil war.', 'Healthcare infrastructure systematically destroyed. Mass displacement begins.'],
              ['1996–2001', 'First Taliban rule.', 'Women barred from healthcare work. Hospitals collapsed. Traditional healers became primary care for millions.'],
              ['2001–2021', 'Partial reconstruction.', 'International aid rebuilt clinics. Deep structural barriers — cost, distance, stigma — remained.'],
              ['2021–present', 'Collapse again.', "Taliban takeover triggers mass aid withdrawal. Women banned from healthcare roles. A generation's progress reversed."],
            ].map(([year, title, text]) => (
              <div className="bg-tli" key={year}><div className="bg-tly">{year}</div><div className="bg-tlt"><strong>{title}</strong> {text}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sec" id="why-they-left">
        <div className="bg-lbl">Why They Left</div>
        <h2>Leaving is Never a Simple Choice</h2>
        <p className="bg-intro">The decision to leave Afghanistan is itself a health decision — a calculation about physical safety, survival, and the wellbeing of children not yet born.</p>
        <div className="bg-3col">
          {departureFactors.map(([icon, accent, title, text]) => (
            <div className={`bg-fc accent-${accent}`} key={title}>
              <div className="icon"><BackgroundIcon type={icon} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sec" id="afghan-diaspora">
        <div className="bg-lbl">The Afghan Diaspora</div>
        <div className="bg-2col mb-20">
          <h2>Where the World's<br />Afghans Live Now</h2>
          <p className="bg-prose-lead">Over 6.4 million Afghans live outside their country — scattered across neighbouring nations, Europe, North America, and the Pacific. Afghanistan produces one of the world's largest and most geographically dispersed diasporas.</p>
        </div>
        <div className="bg-dg">
          {diaspora.map(([country, number, text, accent]) => (
            <div className={`bg-di accent-${accent}`} key={country}><div className="bg-dc">{country}</div><div className="bg-dn">{number}</div><div className="bg-dd">{text}</div></div>
          ))}
        </div>
      </section>

      <section className="bg-sec" id="life-in-australia">
        <div className="bg-lbl">Afghan Australians</div>
        <div className="bg-ausg">
          <div>
            <h2>Life in Australia —<br />and Sydney</h2>
            <p className="aus-lead">Australia is home to one of the world's most established Afghan diaspora communities, with roots stretching back to the 19th-century Afghan cameleers who helped open the Australian interior.</p>
            <ul className="bg-dl">
              <li><span className="lbl">Afghan-born residents (2022)</span><span className="val">~72,000</span></li>
              <li><span className="lbl">Living in NSW</span><span className="val">32%</span></li>
              <li><span className="lbl">Living in Victoria</span><span className="val">26%</span></li>
              <li><span className="lbl">Primary language: Dari</span><span className="val">43.5%</span></li>
              <li><span className="lbl">Primary language: Hazaragi</span><span className="val">33.9%</span></li>
              <li><span className="lbl">Describe experience as positive</span><span className="val">84%</span></li>
              <li><span className="lbl">Main Sydney suburbs</span><span className="val">Blacktown · Auburn · Merrylands</span></li>
            </ul>
          </div>
          <div>
            <h3 className="bg-ch-title">The Challenges That Don't Show in Statistics</h3>
            {challenges.map(([num, title, text]) => (
              <div className="bg-ch" key={num}><div className="bg-chn">{num}</div><div className="bg-cht"><h4>{title}</h4><p>{text}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lens" id="research-lens">
        <div className="bg-lens-header">
          <div className="bg-lens-lbl">A Different Kind of Research</div>
          <h2>Not a Subject.<br />A <em>Fellow Human</em> Making Decisions.</h2>
          <p>Much research on refugee and migrant health focuses on what is <em className="white-em">different</em> — the barriers, the deficits, the gaps. This project starts from a different premise.</p>
        </div>
        <div className="bg-lens-layout">
          <div className="bg-lens-left">
            <div className="bg-lens-image">
              <img src="/image/Image_20260422070953_72_1218.jpg" alt="" />
            </div>
            <div className="bg-lens-copy">
              <p><strong>When an Afghan parent decides whether to take their child to a GP or consult a trusted elder first, they are doing something utterly universal.</strong> They are weighing who they trust. They are calculating risk against cost — financial, emotional, and social. They are acting from love.</p>
              <p>The same logic drives health decisions in every family, in every suburb, in every culture. What differs is not the underlying human need — it is the landscape those decisions are made against. A landscape shaped by war, displacement, language, memory, and a healthcare system you are still learning to read.</p>
            </div>
          </div>
          <div className="bg-lens-vals">
            <div className="bg-lens-v"><h4>Family</h4><p>Health decisions are rarely individual. They are negotiated within families, across generations, often with people in another country on the phone.</p></div>
            <div className="bg-lens-v"><h4>Trust</h4><p>Trust is earned slowly and lost quickly. It flows through community networks, familiar faces, and shared language — not institutions alone.</p></div>
            <div className="bg-lens-v"><h4>Dignity</h4><p>Being seen as a full person — not a case, a refugee number, or a stereotype — changes everything about whether someone seeks care.</p></div>
          </div>
        </div>
        <p className="bg-lens-closing">This project exists to listen. Not to measure, not to diagnose, not to fix — but to understand health decisions as human decisions, shaped by the full weight of a life lived.</p>
        <div className="mt-28"><button className="btn lens-btn" type="button" onClick={() => onNavigate('stories')}>Read the Stories →</button></div>
      </section>
        </div>
      </div>
    </>
  );
}
