import { getThemeClass } from '../utils/themeClasses.js';

export default function RelatedStories({ stories, onSelect }) {
  if (!stories.length) return null;

  return (
    <div className="section related-section">
      <div className="label">Related stories</div>
      <h2 className="related-title">More from this theme</h2>
      <div className="related-list">
        {stories.map((story) => (
          <article className={`related-card ${getThemeClass(story.theme)}`} key={story.id} onClick={() => onSelect(story.id)}>
            <div className="mini-tag">Story {story.id}</div>
            <h4>{story.title}</h4>
            <p>{story.person}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
