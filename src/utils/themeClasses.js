export const themeClassByName = {
  'Knowing, but not acting': 'theme-knowing',
  'Protecting others before self': 'theme-protecting',
  'Fear of knowing': 'theme-fear',
  'Trust, doubt, and the system': 'theme-trust',
  'Family shapes the decision': 'theme-family',
  'Health as identity': 'theme-identity',
};

export function getThemeClass(themeName) {
  return themeClassByName[themeName] || '';
}
