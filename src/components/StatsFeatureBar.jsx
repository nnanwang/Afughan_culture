const stats = [
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 6.5A3.5 3.5 0 0 1 7.5 3h9A3.5 3.5 0 0 1 20 6.5v5A3.5 3.5 0 0 1 16.5 15H11l-5 4v-4.5A3.5 3.5 0 0 1 4 11.5v-5Z" />
        <path d="M8 8h8M8 11h5" />
      </svg>
    ),
    tone: 'gold',
    number: '24',
    label: 'interviews conducted',
  },
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M7 7h10v10H7z" />
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6 4 4M18 6l2-2M6 18l-2 2M18 18l2 2" />
      </svg>
    ),
    tone: 'blue',
    number: '6',
    label: 'decision frameworks',
  },
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5 4.5h10A4 4 0 0 1 19 8.5v11H9A4 4 0 0 1 5 15.5v-11Z" />
        <path d="M9 4.5v11A4 4 0 0 0 13 19.5M9 8h6M9 11h6" />
      </svg>
    ),
    tone: 'copper',
    number: '100',
    label: 'stories envisioned',
  },
];

export default function StatsFeatureBar() {
  return (
    <section className="stats-feature-bar" aria-label="Project statistics">
      {stats.map((stat) => (
        <div className="stats-feature-item" key={stat.label}>
          <div className={`stats-icon ${stat.tone}`}>{stat.icon}</div>
          <div>
            <div className="stat-num">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
