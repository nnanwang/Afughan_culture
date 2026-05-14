# Between Care and Uncertainty

Between Care and Uncertainty is a React + Vite storytelling and research website about health decisions in Afghan families and communities. The project presents anonymized narrative stories, decision themes, and contextual background to show how trust, migration, family responsibility, language, fear, and uncertainty shape health choices.

The site is designed for community members, researchers, public health practitioners, educators, and anyone interested in how health decisions are made in real life rather than only in clinical or policy terms.

## Key Features

### Home Page

- Introduces the project and its focus on Afghan family health decisions.
- Highlights featured stories.
- Presents the six decision themes.
- Provides entry points to read stories, explore background context, or contribute a story.

### Themes

- Organizes the archive by decision patterns rather than disease categories.
- Shows six recurring frameworks that emerged from the stories.
- Connects each theme to related story examples.

### Stories

- Provides an archive view of all published stories.
- Supports filtering by decision theme.
- Keeps stories anonymized and grouped by the forces shaping each decision.

### Story Detail Page

- Displays the full narrative for each story.
- Includes the person line, decision context, key factors, quote, and interpretation.
- Shows related stories from the same theme.

### Background

- Gives context for Afghan families, migration, healthcare access, and the Afghan diaspora.
- Explains the broader social and historical setting behind the stories.
- Includes research lens sections that frame why this context matters.

### Method

- Describes the research approach and narrative interview method.
- Explains how stories are gathered, interpreted, and organized.
- Covers ethics, consent, anonymization, and synthesis.

### About

- Explains the project purpose and motivation.
- Introduces the research focus and current project phase.
- Provides a concise overview of why the archive exists.

## UI & Design Highlights

- Editorial, research-oriented layout.
- Serif typography for major headings and narrative emphasis.
- Soft color palette using cream, mint, teal, warm neutral tones, and restrained accents.
- Theme-based color system for story categories and visual markers.
- Minimal use of heavy cards, borders, or shadows.
- Section-based layouts that rely on spacing, hierarchy, and typography rather than dense dividers.

## UI Preview

Screenshot placeholders are included below and can be replaced with real project screenshots later.

![Home](./screenshots/home.png)
![Stories](./screenshots/stories.png)
![Story Detail](./screenshots/story-detail.png)
![Background](./screenshots/background.png)

## Tech Stack

- React with Vite
- Custom CSS via global styles
- Formspree for form handling
- Vercel for deployment

## Forms

The site includes two Formspree-powered forms. Both forms submit directly from the static React frontend, so no custom backend is required.

### Share Your Story Form

Endpoint:

```text
https://formspree.io/f/mqenvayg
```

Purpose:

- Allows users to submit a short anonymous written story.
- Includes consent confirmation.
- Includes Formspree spam protection using a hidden honeypot field.

### Request an Interview Form

Endpoint:

```text
https://formspree.io/f/xojrovko
```

Purpose:

- Allows users to request a longer anonymous interview.
- Includes consent confirmation.
- Includes Formspree spam protection using a hidden honeypot field.

## How to Check Submissions

### Option 1: Formspree Dashboard

1. Go to https://formspree.io
2. Open the corresponding form:
   - Share Story: `mqenvayg`
   - Interview: `xojrovko`
3. Click **Submissions**.
4. Check:
   - Inbox
   - Spam

Submissions may occasionally appear in Spam, so check that folder if a test submission does not appear in the Inbox.

### Option 2: Email Notifications

Submissions are sent to the email address configured in Formspree.

Check:

- Inbox
- Spam folder
- Trash folder

If submissions are not received:

- Confirm the email address is connected in Formspree settings.
- Confirm email notifications are enabled.
- Check the Formspree dashboard directly.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

## Deployment

- The project is connected to GitHub.
- Deployment is handled through Vercel.
- Pushing to the `main` branch triggers an automatic deployment.

## Notes

- All published stories are anonymized.
- Real names and identifying details are removed before publication.
- Form submissions are handled by Formspree.
- No custom backend is required for the current form workflow.
