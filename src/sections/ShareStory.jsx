import { useState } from 'react';
import Label from '../components/Label.jsx';
import { valueOrFallback } from '../utils/mailto.js';

const initialForm = { name: '', age: '', city: '', language: '', decision: '', difficult: '', influence: '', interview: 'Yes, happy to be contacted', consent: false, gotcha: '' };
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqenvayg';

export default function ShareStory() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    if (status.type === 'error') setStatus({ type: '', message: '' });
  }

  function validate() {
    if (!form.age || !form.decision.trim() || !form.difficult.trim() || !form.influence.trim()) {
      setStatus({ type: 'error', message: 'Please complete the required fields before submitting.' });
      return false;
    }
    if (!form.consent) {
      setStatus({ type: 'error', message: 'Please tick the consent box before submitting.' });
      return false;
    }
    return true;
  }

  async function submit(event) {
    event.preventDefault();
    if (!validate()) return;

    const storyBody = [
      `NAME: ${valueOrFallback(form.name)}`,
      `AGE: ${valueOrFallback(form.age)}`,
      `CITY: ${valueOrFallback(form.city)}`,
      `LANGUAGE: ${valueOrFallback(form.language)}`,
      '',
      'THE DECISION:',
      valueOrFallback(form.decision),
      '',
      'WHAT MADE IT DIFFICULT:',
      valueOrFallback(form.difficult),
      '',
      'WHO OR WHAT INFLUENCED IT:',
      valueOrFallback(form.influence),
      '',
      `FOLLOW-UP: ${valueOrFallback(form.interview)}`,
      '',
      '---',
      'Submitted via Between Care and Uncertainty',
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
          _subject: 'New Share Your Story Submission',
          source: 'share_story',
          subject: 'Story submission — Between Care and Uncertainty',
          name: valueOrFallback(form.name),
          age: valueOrFallback(form.age),
          city: valueOrFallback(form.city),
          language: valueOrFallback(form.language),
          decision: valueOrFallback(form.decision),
          difficult: valueOrFallback(form.difficult),
          influence: valueOrFallback(form.influence),
          interview: valueOrFallback(form.interview),
          consent: form.consent ? 'Yes' : 'No',
          message: storyBody,
        }),
      });

      if (!response.ok) throw new Error('Formspree request failed');

      setForm(initialForm);
      setStatus({ type: 'success', message: 'Thank you. Your story has been submitted.' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong while sending your story. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <header className="share-page-header">
        <div className="share-page-heading">
          <div className="share-breadcrumb">Home → Share Your Story</div>
          <h1>Share Your Story</h1>
        </div>
        <div className="share-header-image" aria-hidden="true" />
      </header>
      <div className="share-story-page">
        <div className="share-story-intro">
          <Label>Share your story</Label>
          <p className="contribute-intro">Not every health decision becomes a crisis. Some become something quieter: a check-up kept putting off, a test avoided, a treatment you weren't sure about, a decision made for someone else.</p>
          <p className="contribute-intro mt-12">This form is for people who want to share one real health decision they still think about.</p>
        <div className="contrib-block"><h3>Who can use this form</h3><ul><li>Adults aged 18 and over</li><li>Afghan community members, family members, and caregivers</li><li>People who want to share a real experience anonymously</li></ul><p className="contrib-note">You do not need to write perfectly. One decision is enough.</p></div>
        <div className="contrib-block"><h3>What kinds of stories are welcome</h3><ul><li>Delaying care</li><li>Avoiding a test or screening</li><li>Deciding whether to trust medical advice</li><li>Making a decision for a parent, child, or spouse</li><li>Struggling with language, cost, access, or uncertainty</li></ul></div>
        <div className="contrib-reassurance">This project is not looking for "perfect" decisions. It is interested in how real decisions are made under pressure.</div>
      </div>
      <div className="share-story-form-panel">
        <form className="form-card share-story-form-card" onSubmit={submit}>
          <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex="-1" autoComplete="off" value={form.gotcha} onChange={(e) => update('gotcha', e.target.value)} />
          <div className="form-row">
            <div className="form-field"><label>First name or nickname</label><input type="text" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="e.g. Amina, or leave blank" /></div>
            <div className="form-field"><label>Age range</label><select value={form.age} onChange={(e) => update('age', e.target.value)} required><option value="">Select…</option><option>18–25</option><option>26–35</option><option>36–50</option><option>51–65</option><option>65+</option></select></div>
          </div>
          <div className="form-row">
            <div className="form-field"><label>City / suburb</label><input type="text" value={form.city} onChange={(e) => update('city', e.target.value)} placeholder="e.g. Sydney, Melbourne…" /></div>
            <div className="form-field"><label>Preferred language</label><input type="text" value={form.language} onChange={(e) => update('language', e.target.value)} placeholder="e.g. English, Dari, Pashto…" /></div>
          </div>
          <div className="form-field"><label>In one sentence, what was the health decision?</label><textarea rows="2" value={form.decision} onChange={(e) => update('decision', e.target.value)} placeholder="e.g. I kept putting off a cancer screening for over a year." required /></div>
            <div className="form-field"><label>What made this decision difficult?</label><textarea rows="3" value={form.difficult} onChange={(e) => update('difficult', e.target.value)} placeholder="Describe the tension, fear, or uncertainty involved." required /></div>
            <div className="form-field"><label>Who or what influenced the decision most?</label><textarea rows="2" value={form.influence} onChange={(e) => update('influence', e.target.value)} placeholder="Family, trust, language, prior experience…" required /></div>
            <div className="form-field"><label>Would you be open to a follow-up interview?</label><select value={form.interview} onChange={(e) => update('interview', e.target.value)}><option>Yes, happy to be contacted</option><option>Maybe — depends on the questions</option><option>No, form only</option></select></div>
            <div className="form-check"><label><input type="checkbox" checked={form.consent} onChange={(e) => update('consent', e.target.checked)} required /> I consent to my story being used anonymously in this project</label></div>
            <button className="btn primary full-btn" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting…' : 'Submit your story'}</button>
            {status.message && <p className={`form-status ${status.type}`}>{status.message}</p>}
            <p className="form-note">Real names are not used. All identifying details are removed before publication.</p>
          </form>
        </div>
      </div>
    </>
  );
}
