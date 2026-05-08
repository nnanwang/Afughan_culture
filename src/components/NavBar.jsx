const navItems = [
  ['home', 'Home'],
  ['stories', 'Stories'],
  ['themes', 'Themes'],
  ['background', 'Background'],
  ['method', 'Method'],
  ['about', 'About'],
];

export default function NavBar({ currentView, onNavigate }) {
  return (
    <div className="topbar">
      <nav className="nav">
        <button className="brand" type="button" onClick={() => onNavigate('home')}>
          Between Care and <em>Uncertainty</em>
        </button>
        <div className="nav-links">
          {navItems.map(([view, label]) => (
            <button
              className={`nav-btn${currentView === view ? ' active' : ''}`}
              key={view}
              type="button"
              onClick={() => onNavigate(view)}
            >
              {label}
            </button>
          ))}
          <button className="nav-cta" type="button" onClick={() => onNavigate('share')}>
            Share Your Story
          </button>
        </div>
      </nav>
    </div>
  );
}
