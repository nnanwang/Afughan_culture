import Label from '../components/Label.jsx';
import StoryCard from '../components/StoryCard.jsx';
import { stories } from '../data/stories.js';
import { themes } from '../data/themes.js';
import { getThemeClass } from '../utils/themeClasses.js';

export default function Stories({ filter, onFilterChange, onStorySelect }) {
  const visibleStories = filter === 'all' ? stories : stories.filter((story) => story.theme === filter);

  return (
    <>
      <div className="themes-page-header stories-page-header">
        <div className="stories-header-copy">
          <Label>Stories archive</Label>
          <h2 className="page-heading">Stories from the archive</h2>
          <div className="stories-intro">
            <p>Each story in this archive begins with one real health decision. Not a general opinion. Not a full life history. One decision: whether to seek care, delay care, accept treatment, or put someone else first.</p>
            <p>These stories are anonymous by design. Names and identifying details are changed. What matters here is not public identity, but what made the decision difficult from the inside.</p>
            <p>The archive is organised by decision pattern rather than by disease, because the same forces — fear, duty, trust, uncertainty, identity, and care — often appear across very different health situations.</p>
            <p>These are not stories of "good" or "bad" choices. They are attempts to understand how real decisions are made under pressure.</p>
          </div>
        </div>
        <div className="stories-header-visual" aria-hidden="true">
          <img className="stories-header-map" src="/image/Flag_map_of_Afghanistan.png" alt="" />
        </div>
      </div>
      <section className="privacy-consent-section">
        <h3>Privacy &amp; Consent</h3>
        <p>All stories in this archive are published with the knowledge and consent of the people who shared them. Real names, specific locations, workplaces, and other identifying details have been changed or removed to protect participant privacy. No story is published in a form that could identify the individual who shared it.</p>
      </section>
      <div className="archive-controls">
        {themes.map((theme) => (
          <button className={`chip ${getThemeClass(theme.id)}${filter === theme.id ? ' active' : ''}`} key={theme.id} type="button" onClick={() => onFilterChange(theme.id)}>
            {theme.name}
          </button>
        ))}
      </div>
      <div className="story-grid">
        {visibleStories.length ? visibleStories.map((story, index) => (
          <StoryCard key={story.id} story={story} featured={index === 0} onSelect={onStorySelect} />
        )) : <p className="muted">No stories yet.</p>}
      </div>
    </>
  );
}
