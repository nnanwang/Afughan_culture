import { useState } from 'react';
import Label from '../components/Label.jsx';
import StatsFeatureBar from '../components/StatsFeatureBar.jsx';
import ThemeCard from '../components/ThemeCard.jsx';
import { featuredStoryIds, stories } from '../data/stories.js';
import { themes } from '../data/themes.js';

const contextCards = [
  ['Migration & displacement', 'For families shaped by migration, health decisions carry layers of uncertainty not visible from the outside.'],
  ['Language barriers', 'A decision may be delayed not because care is unavailable, but because understanding and being understood feel fragile.'],
  ['Trust in institutions', 'Many health decisions are, underneath, decisions about trust. When trust is partial, people may turn to family, community, or silence.'],
  ['Family caregiving roles', 'Health decisions are often treated as individual choices, but many are made inside family structures with deeply moral dimensions.'],
  ['Interrupted healthcare access', 'Past experiences with unequal or interrupted systems shape present decisions in powerful ways.'],
];

function HeroArt({ onStorySelect }) {
  return (
    <button
      aria-label="View featured story: Fear of knowing"
      className="hero-arch"
      onClick={() => onStorySelect('003')}
      type="button"
    >
      <div className="arch-story">
        <div className="story-kicker">Featured story · Fear of knowing</div>
        <h3>She delayed screening because finding out felt harder than waiting.</h3>
        <p>One decision. One fear. One moment when not knowing felt safer than knowing.</p>
      </div>
    </button>
  );
}

function Hero({ onNavigate, onStorySelect }) {
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <Label>A narrative interview project</Label>
          <h1><span>Between Care</span><span>and <em>Uncertainty</em></span></h1>
          <p className="hero-focus">Stories of health decisions in Afghan families</p>
          <p className="hero-sub">Health decisions are rarely only about health.</p>
          <p className="hero-intro">This project explores how Afghan families make health decisions under pressure — through stories shaped by trust, migration, care, language, and uncertainty.</p>
          <div className="hero-actions">
            <button className="btn primary" type="button" onClick={() => onNavigate('stories')}>Read the Stories</button>
            <button className="btn" type="button" onClick={() => onNavigate('background')}>Context &amp; Background</button>
          </div>
        </div>
      </div>
      <HeroArt onStorySelect={onStorySelect} />
    </div>
  );
}

function FeaturedStoriesSection({ featuredStories, onNavigate, onStorySelect }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(1);
  const [isResettingTrack, setIsResettingTrack] = useState(false);
  const totalStories = featuredStories.length;

  if (!totalStories) return null;

  const activeStory = featuredStories[activeIndex];
  const carouselSlides = totalStories > 1
    ? [
      { story: featuredStories[totalStories - 1], sourceIndex: totalStories - 1, key: `${featuredStories[totalStories - 1].id}-clone-start` },
      ...featuredStories.map((story, index) => ({ story, sourceIndex: index, key: story.id })),
      { story: featuredStories[0], sourceIndex: 0, key: `${featuredStories[0].id}-clone-end` },
    ]
    : featuredStories.map((story, index) => ({ story, sourceIndex: index, key: story.id }));
  const activeTrackIndex = totalStories > 1 ? trackIndex : activeIndex;

  const goPrevious = () => {
    if (totalStories <= 1) return;
    setTrackIndex((index) => index - 1);
    setActiveIndex((index) => (index - 1 + totalStories) % totalStories);
  };
  const goNext = () => {
    if (totalStories <= 1) return;
    setTrackIndex((index) => index + 1);
    setActiveIndex((index) => (index + 1) % totalStories);
  };
  const getSlidePosition = (index) => {
    if (index === activeTrackIndex) return 'active';
    if (index === activeTrackIndex - 1) return 'previous';
    if (index === activeTrackIndex + 1) return 'next';
    return 'offscreen';
  };
  const trackOffset = activeTrackIndex === 0
    ? 'var(--slide-offset)'
    : `calc(var(--slide-offset) - ${Array.from({ length: activeTrackIndex }, () => 'var(--slide-step)').join(' - ')})`;
  const handleTrackTransitionEnd = (event) => {
    if (event.target !== event.currentTarget) return;
    if (totalStories <= 1) return;
    if (trackIndex === 0) {
      setIsResettingTrack(true);
      setTrackIndex(totalStories);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsResettingTrack(false)));
    }
    if (trackIndex === totalStories + 1) {
      setIsResettingTrack(true);
      setTrackIndex(1);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsResettingTrack(false)));
    }
  };
  const handleActiveKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onStorySelect(activeStory.id);
    }
  };

  return (
    <div className="section featured-stories-section">
      <div className="section-header featured-stories-header">
        <div className="section-copy"><Label>Featured stories</Label><h2>Real decisions. Real hesitation. Real consequences.</h2><p>Each story begins with one real health decision — and the tension behind it.</p></div>
        <button className="featured-stories-link" type="button" onClick={() => onNavigate('stories')}>View all stories →</button>
      </div>
      <div className="featured-carousel" aria-roledescription="carousel" aria-label="Featured stories">
        <div className="featured-carousel-stage">
          <div
            className={`featured-carousel-track${isResettingTrack ? ' resetting' : ''}`}
            onTransitionEnd={handleTrackTransitionEnd}
            style={{ transform: `translateX(${trackOffset})` }}
          >
            {carouselSlides.map(({ story, key }, index) => {
              const position = getSlidePosition(index);
              return (
                <article
                  aria-hidden={position !== 'active'}
                  className={`featured-slide ${position}`}
                  key={story.id}
                  onClick={position === 'active' ? () => onStorySelect(story.id) : undefined}
                  onKeyDown={position === 'active' ? handleActiveKeyDown : undefined}
                  role={position === 'active' ? 'button' : undefined}
                  tabIndex={position === 'active' ? 0 : -1}
                  aria-roledescription="slide"
                >
                  <div className="featured-story-meta">
                    <span>{story.theme}</span>
                    <span>Story {story.id}</span>
                  </div>
                  <blockquote>{story.title}</blockquote>
                  <p className="featured-story-person">{story.person}</p>
                  <p className="featured-story-quote">“{story.quote}”</p>
                  <p className="featured-story-insight">{story.insight}</p>
                  <div className="featured-story-link">
                    <span>Read full story</span>
                    <span className="arrow-pill">→</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="featured-carousel-controls">
          <button aria-label="Previous featured story" className="carousel-arrow" onClick={goPrevious} type="button">← Previous</button>
          <div className="carousel-count">{activeIndex + 1} / {totalStories}</div>
          <button aria-label="Next featured story" className="carousel-arrow" onClick={goNext} type="button">Next →</button>
        </div>
      </div>
    </div>
  );
}

function BeliefSection() {
  return (
    <div className="section home-context-section">
      <section className="home-context-editorial">
        <div className="context-top-band">
          <blockquote>"Health decisions are rarely knowledge problems."</blockquote>
          <p className="belief-body">Most health communication assumes better information leads to better choices. This project starts somewhere else: with the reality that people decide while carrying fear, family obligations, uncertainty, and memory with them.</p>
        </div>
        <div className="context-lower">
          <div className="context-image">
            <img src="/image/Image_20260422070942_71_1218.jpg" alt="" />
          </div>
          <div className="context-content">
            <div className="context-summary">
              <Label>Why this focus</Label>
              <div className="context-body">
                <p>These stories are not only about individual choices. They are shaped by migration, language, family responsibility, trust in institutions, and prior experiences with healthcare systems that were fragile, unequal, or interrupted.</p>
                <p>Afghan families offer a powerful lens through which these tensions become visible — not as exceptions, but as lived realities that reveal how health decisions are made under pressure.</p>
              </div>
            </div>
          </div>
          <div className="context-focus-list">
            {contextCards.map(([title, text]) => (
              <div className="context-focus-item" key={title}>
                <span className="ctx-tag">{title}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ThemesPreviewSection({ onNavigate, onThemeSelect }) {
  const decisionThemes = themes.slice(1);

  return (
    <div className="section themes-preview-section">
      <div className="section-header themes-preview-header">
        <div className="section-copy"><Label>Themes</Label><h2>Decision patterns, not disease categories.</h2><p>These themes emerged from listening. Each one names a force that shapes how people actually decide.</p></div>
        <button className="themes-preview-link" type="button" onClick={() => onNavigate('themes')}>Explore themes →</button>
      </div>
      <div className="theme-grid">
        {decisionThemes.map((theme, index) => <ThemeCard key={theme.id} theme={theme} number={index + 1} onSelect={onThemeSelect} />)}
      </div>
    </div>
  );
}

function ShareCtaSection({ onNavigate }) {
  return (
    <div className="section share-cta-section">
      <div className="share-shell">
        <Label className="center-label">Contribute</Label>
        <h2>Have you ever made a health decision you still think about?</h2>
        <div className="share-copy"><p>It could be a delayed check-up, an avoided test, a decision shaped by family, or a moment when trust, language, fear, or responsibility made everything harder.</p></div>
        <div className="share-actions">
          <div className="share-option"><button className="btn primary" type="button" onClick={() => onNavigate('share')}>Share via form</button><span className="share-sub">For a short written story submission</span></div>
          <div className="share-option"><button className="btn" type="button" onClick={() => onNavigate('interview')}>Request an interview</button><span className="share-sub">For a longer anonymous conversation</span></div>
        </div>
        <div className="micro-note">Real names are not used. Identifying details are removed before publication.</div>
      </div>
    </div>
  );
}

export default function Home({ onNavigate, onStorySelect, onThemeSelect }) {
  const featuredStories = featuredStoryIds.map((id) => stories.find((story) => story.id === id)).filter(Boolean);

  return (
    <>
      <Hero onNavigate={onNavigate} onStorySelect={onStorySelect} />
      <StatsFeatureBar />
      <BeliefSection />
      <FeaturedStoriesSection featuredStories={featuredStories} onNavigate={onNavigate} onStorySelect={onStorySelect} />
      <ThemesPreviewSection onNavigate={onNavigate} onThemeSelect={onThemeSelect} />
      <ShareCtaSection onNavigate={onNavigate} />
    </>
  );
}
