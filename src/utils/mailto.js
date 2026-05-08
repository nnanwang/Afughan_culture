const CONTACT_EMAIL = 'kayleezhang1128@gmail.com';

export function openMailto(subject, lines) {
  const body = lines.join('\n');
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function valueOrFallback(value) {
  return value?.trim() || '(not provided)';
}
