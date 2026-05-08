import { getThemeClass } from '../utils/themeClasses.js';

export default function StoryCard({ story, featured = false, onSelect }) {
  return (
    <article className={`story-card ${getThemeClass(story.theme)}${featured ? ' featured' : ''}`} onClick={() => onSelect(story.id)}>
      <div>
        <div className="mini-tag">{story.theme}</div>
        <div className="story-number">{story.id}</div>
        <div className="story-person">{story.person}</div>
        <h3 className="story-title">{story.title}</h3>
        <div className="story-quote">“{story.quote}”</div>
      </div>
      {featured ? (
        <div>
          <div className="story-insight">{story.insight}</div>
          <div className="story-footer">
            <span>Read full story</span>
            <span className="arrow-pill">→</span>
          </div>
        </div>
      ) : (
        <div className="story-footer">
          <span className="story-insight">{story.insight}</span>
          <span className="arrow-pill">→</span>
        </div>
      )}
    </article>
  );
}
