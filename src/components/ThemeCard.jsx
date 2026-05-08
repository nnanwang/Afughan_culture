import { themeClassByName } from '../utils/themeClasses.js';

export function ThemeIcon({ number }) {
  const icons = {
    1: (
      <>
        <path d="M3 3l18 18" />
        <path d="M10.6 10.7a2 2 0 0 0 2.7 2.7" />
        <path d="M9.9 4.3A9.8 9.8 0 0 1 12 4c6 0 9.5 6 9.5 6a17 17 0 0 1-2.1 2.8" />
        <path d="M6.6 6.7C3.9 8.4 2.5 12 2.5 12s3.5 6 9.5 6c1.7 0 3.1-.4 4.4-1" />
      </>
    ),
    2: (
      <>
        <path d="M12 3l7 3v5c0 4.2-2.8 7.4-7 10-4.2-2.6-7-5.8-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    3: (
      <>
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" />
        <circle cx="12" cy="12" r="2.8" />
      </>
    ),
    4: (
      <>
        <circle cx="12" cy="12" r="2.5" />
        <circle cx="5" cy="7" r="2" />
        <circle cx="19" cy="7" r="2" />
        <circle cx="7" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
        <path d="M6.8 8.2l3.2 2.2" />
        <path d="M17.2 8.2l-3.2 2.2" />
        <path d="M8.7 17.3l2.1-3.1" />
        <path d="M15.3 17.3l-2.1-3.1" />
      </>
    ),
    5: (
      <>
        <path d="M4 11l8-7 8 7" />
        <path d="M6 10v9h12v-9" />
        <path d="M10 19v-5h4v5" />
      </>
    ),
    6: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21a7 7 0 0 1 14 0" />
        <path d="M8.5 15.5h2l1.2-2.8 2 5.2 1.1-2.4h2.7" />
      </>
    ),
  };

  return (
    <svg className="theme-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
      {icons[number]}
    </svg>
  );
}

export const themeColorClasses = {
  1: 'theme-knowing',
  2: 'theme-protecting',
  3: 'theme-fear',
  4: 'theme-trust',
  5: 'theme-family',
  6: 'theme-identity',
};

export { themeClassByName };

export default function ThemeCard({ theme, number, onSelect }) {
  return (
    <article className={`theme-card ${themeColorClasses[number]}`} onClick={() => onSelect(theme.id)}>
      <div className="theme-card-top">
        <div className="num">0{number}</div>
        <div className="theme-icon-wrap">
          <ThemeIcon number={number} />
        </div>
      </div>
      <div className="theme-card-body">
        <h3>{theme.name}</h3>
        <p>{theme.overview}</p>
      </div>
      <div className="theme-question">{theme.question}</div>
    </article>
  );
}
