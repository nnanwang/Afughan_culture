import { useState } from 'react';
import Label from '../components/Label.jsx';
import { valueOrFallback } from '../utils/mailto.js';

const initialForm = { name: '', contact: 'Phone call', language: '', city: '', decision: '', availability: '', consent: false, gotcha: '' };
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xojrovko';

export default function Interview() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    if (status.type === 'error') setStatus({ type: '', message: '' });
  }

  function validate() {
    if (!form.decision.trim()) {
      setStatus({ type: 'error', message: 'Please complete the required fields before submitting.' });
      return false;
    }
    if (!form.consent) {
      setStatus({ type: 'error', message: 'Please tick the consent box before submitting.' });
      return false;
    }
    return true;
  }

  async function submit() {
    if (!validate()) return;

    const interviewBody = [
      `NAME: ${valueOrFallback(form.name)}`,
      `CONTACT: ${valueOrFallback(form.contact)}`,
      `LANGUAGE: ${valueOrFallback(form.language)}`,
      `CITY: ${valueOrFallback(form.city)}`,
      '',
      'DECISION TO DISCUSS:',
      valueOrFallback(form.decision),
      '',
      `AVAILABILITY: ${valueOrFallback(form.availability)}`,
      '',
      '---',
      'Interview request via Between Care and Uncertainty',
    ].join('\n');

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _gotcha: form.gotcha,
          _subject: 'New Interview Request',
          source: 'request_interview',
          subject: 'Interview request — Between Care and Uncertainty',
          name: valueOrFallback(form.name),
          contact: valueOrFallback(form.contact),
          language: valueOrFallback(form.language),
          city: valueOrFallback(form.city),
          decision: valueOrFallback(form.decision),
          availability: valueOrFallback(form.availability),
          consent: form.consent ? 'Yes' : 'No',
          message: interviewBody,
        }),
      });

      if (!response.ok) throw new Error('Formspree request failed');

      setForm(initialForm);
      setStatus({ type: 'success', message: 'Thank you. Your interview request has been submitted.' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong while sending your request. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <header className="share-page-header interview-page-header">
        <div className="share-page-heading">
          <div className="share-breadcrumb">Home → Request an Interview</div>
          <h1>Request an Interview</h1>
        </div>
        <div className="share-header-image" aria-hidden="true" />
      </header>
      <div className="share-story-page interview-page">
        <div className="share-story-intro">
          <Label>Request an interview</Label>
          <p className="contribute-intro">Some stories are hard to tell in a short form. If you would rather speak than write, you can request an interview.</p>
          <div className="contrib-block"><h3>What the interview is like</h3><ul><li>Voluntary and anonymous by default</li><li>Usually 15–30 minutes</li><li>Focused on one real health decision</li><li>Designed to understand the decision, not judge it</li></ul></div>
          <div className="contrib-block"><h3>What will not happen</h3><ul><li>Your real name will not be published</li><li>You do not have to answer every question</li><li>You may stop the interview at any time</li><li>This is not a medical assessment or legal process</li></ul></div>
          <div className="contrib-reassurance">You do not need to have a dramatic story. A quiet, ordinary, difficult decision is enough.</div>
        </div>
        <div className="share-story-form-panel">
          <div className="form-card share-story-form-card">
            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex="-1" autoComplete="off" value={form.gotcha} onChange={(e) => update('gotcha', e.target.value)} />
            <div className="form-row">
              <div className="form-field"><label>First name or nickname</label><input type="text" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="e.g. Farid, or leave blank" /></div>
              <div className="form-field"><label>Preferred contact method</label><select value={form.contact} onChange={(e) => update('contact', e.target.value)}><option>Phone call</option><option>Video call (Zoom / Teams)</option><option>In person — Sydney</option><option>Email first, then arrange</option></select></div>
            </div>
            <div className="form-row">
              <div className="form-field"><label>Preferred language</label><input type="text" value={form.language} onChange={(e) => update('language', e.target.value)} placeholder="e.g. English, Dari, Pashto…" /></div>
              <div className="form-field"><label>City / suburb</label><input type="text" value={form.city} onChange={(e) => update('city', e.target.value)} placeholder="e.g. Parramatta, Auburn…" /></div>
            </div>
            <div className="form-field"><label>Very briefly — what decision would you like to discuss?</label><textarea rows="3" value={form.decision} onChange={(e) => update('decision', e.target.value)} placeholder="A sentence or two is enough." required /></div>
            <div className="form-field"><label>When are you generally available?</label><input type="text" value={form.availability} onChange={(e) => update('availability', e.target.value)} placeholder="e.g. Weekday evenings, weekend mornings…" /></div>
            <div className="form-check"><label><input type="checkbox" checked={form.consent} onChange={(e) => update('consent', e.target.checked)} required /> I understand this is voluntary and I can withdraw at any time</label></div>
            <button className="btn primary full-btn" type="button" onClick={submit} disabled={isSubmitting}>{isSubmitting ? 'Submitting…' : 'Request an interview'}</button>
            {status.message && <p className={`form-status ${status.type}`}>{status.message}</p>}
            <p className="form-note">After submitting, you may be contacted to arrange a time. You can still decide not to participate.</p>
          </div>
        </div>
      </div>
    </>
  );
}
