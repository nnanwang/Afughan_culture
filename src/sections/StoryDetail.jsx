import RelatedStories from '../components/RelatedStories.jsx';
import { stories } from '../data/stories.js';
import { getThemeClass } from '../utils/themeClasses.js';

export default function StoryDetail({ story, onBack, onStorySelect }) {
  const related = stories.filter((item) => item.theme === story.theme && item.id !== story.id).slice(0, 6);

  return (
    <article className={`story-detail-page ${getThemeClass(story.theme)}`}>
      <button className="back-btn" type="button" onClick={onBack}>← Back to stories</button>
      <header className="story-detail-header">
        <div className="story-detail-kicker">
          <span className="mini-tag">{story.theme}</span>
          <span className="detail-story-number">Story {story.id}</span>
        </div>
        <h1 className="detail-title">{story.title}</h1>
        <p className="detail-person">{story.person}</p>
      </header>
      <div className="detail-meta">
        <div className="detail-box"><h3>Who</h3><p>{story.who}</p></div>
        <div className="detail-box"><h3>What they chose</h3><p>{story.chosen}</p></div>
      </div>
      <div className="detail-body">
        <div className="detail-box"><h3>The decision</h3><p>{story.decision}</p></div>
        <div className="detail-box"><h3>What mattered most</h3><p>{story.factors}</p></div>
        <div className="quote-block">“{story.quote}”</div>
        <div className="detail-box"><h3>What this reveals</h3><p>{story.reveals}</p></div>
      </div>
      <RelatedStories stories={related} onSelect={onStorySelect} />
    </article>
  );
}
