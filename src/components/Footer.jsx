const footerNav = [
  ['home', 'Home'],
  ['stories', 'Stories'],
  ['themes', 'Themes'],
  ['background', 'Background'],
  ['method', 'Method'],
  ['about', 'About'],
];

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <button className="brand footer-brand" type="button" onClick={() => onNavigate('home')}>
            Between Care and <em>Uncertainty</em>
          </button>
          <p>A narrative interview project on health decision-making.</p>
        </div>

        <div className="footer-right">
          <nav className="footer-links" aria-label="Footer navigation">
            {footerNav.map(([view, label]) => (
              <button key={view} type="button" onClick={() => onNavigate(view)}>
                {label}
              </button>
            ))}
          </nav>

          <button className="footer-cta" type="button" onClick={() => onNavigate('share')}>Share your story →</button>
        </div>
      </div>

      <div className="footer-bottom">© 2026 Between Care and Uncertainty</div>
    </footer>
  );
}
