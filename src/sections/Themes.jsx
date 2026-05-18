import Label from '../components/Label.jsx';
import { ThemeIcon, themeColorClasses } from '../components/ThemeCard.jsx';
import { stories } from '../data/stories.js';
import { themes } from '../data/themes.js';

export default function Themes({ onStorySelect }) {
  return (
    <>
      <div className="themes-page-header">
        <Label>Frameworks</Label>
        <h2 className="page-heading">Six decision frameworks</h2>
        <p className="page-intro">These themes were not designed first. They emerged from repeated patterns in what people described when talking about health decisions in everyday life.</p>
      </div>
      <div className="theme-panels">
        {themes.slice(1).map((theme, index) => {
          const related = stories.filter((story) => story.theme === theme.id);
          return (
            <section className={`theme-panel ${themeColorClasses[index + 1]}`} key={theme.id}>
              <div className="theme-panel-left">
                <div className="theme-panel-marker">
                  <div className="theme-panel-number">0{index + 1}</div>
                  <div className="theme-panel-icon">
                    <ThemeIcon number={index + 1} />
                  </div>
                </div>
                <h2>{theme.name}</h2>
                <div className="theme-q-badge">{theme.question}</div>
              </div>
              <div className="theme-panel-right">
                <p>{theme.overview}</p>
                <h3>Pattern observed</h3>
                <p>{theme.pattern}</p>
                <h3>Illustrative examples</h3>
                <ul>{theme.examples.map((example) => <li key={example}>{example}</li>)}</ul>
                {theme.matters && <div className="theme-matters"><h3>Why this matters</h3><p>{theme.matters}</p></div>}
                <h3 className="theme-stories-title">Stories in this theme</h3>
                {related.length > 0 && (
                  <div className="theme-story-cards">
                    {related.map((story) => (
                      <button className="theme-story-card" key={story.id} type="button" onClick={() => onStorySelect(story.id)}>
                        <span>Story {story.id}</span>
                        <strong>{story.title}</strong>
                        <em>{story.person}</em>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
