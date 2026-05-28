# Between Care and Uncertainty

Between Care and Uncertainty is a React + Vite storytelling and research website about health decisions in Afghan families and communities. The project presents anonymized narrative stories, decision themes, and contextual background to show how trust, migration, family responsibility, language, fear, and uncertainty shape health choices.

The site is designed for community members, researchers, public health practitioners, educators, and anyone interested in how health decisions are made in real life rather than only in clinical or policy terms.

link: https://afughan-culture.vercel.app/
## Key Features

### Home Page

- Introduces the project and its focus on Afghan family health decisions.
- Highlights featured stories.
- Presents the six decision themes.
- Provides entry points to read stories, explore background context, or contribute a story.
<img width="1591" height="871" alt="image" src="https://github.com/user-attachments/assets/c2a578cf-def6-4d3f-88f6-2bc04ae60baf" />

### Themes

- Organizes the archive by decision patterns rather than disease categories.
- Shows six recurring frameworks that emerged from the stories.
- Connects each theme to related story examples.
<img width="1596" height="871" alt="image" src="https://github.com/user-attachments/assets/f8a5c590-567d-4bfe-878d-51b22f268752" />

### Stories

- Provides an archive view of all published stories.
- Supports filtering by decision theme.
- Keeps stories anonymized and grouped by the forces shaping each decision.
<img width="1589" height="868" alt="image" src="https://github.com/user-attachments/assets/40a99dbf-21e2-4b79-9b71-9793fb9564d9" />

### Story Detail Page

- Displays the full narrative for each story.
- Includes the person line, decision context, key factors, quote, and interpretation.
- Shows related stories from the same theme.
<img width="1593" height="873" alt="image" src="https://github.com/user-attachments/assets/332376de-84e2-43df-ae52-b816d1f32ae2" />

### Background

- Gives context for Afghan families, migration, healthcare access, and the Afghan diaspora.
- Explains the broader social and historical setting behind the stories.
- Includes research lens sections that frame why this context matters.
<img width="1595" height="868" alt="image" src="https://github.com/user-attachments/assets/85a6da75-43a9-48b4-a858-2ac3a8f7d828" />

### Method

- Describes the research approach and narrative interview method.
- Explains how stories are gathered, interpreted, and organized.
- Covers ethics, consent, anonymization, and synthesis.
<img width="1592" height="868" alt="image" src="https://github.com/user-attachments/assets/099dc2d5-7a51-464c-a219-35e1f79a2537" />

### About

- Explains the project purpose and motivation.
- Introduces the research focus and current project phase.
- Provides a concise overview of why the archive exists.
<img width="1596" height="874" alt="image" src="https://github.com/user-attachments/assets/f8a065b4-c508-4918-97fc-24a5b635cd6e" />


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

## :email: How to Check Submissions？

### Option 1: Formspree Dashboard

1. Go to https://formspree.io and log in
2. Open the corresponding form:
   - Shared Story: `mqenvayg`
   - Requested Interview: `xojrovko`
     <img width="1598" height="866" alt="image" src="https://github.com/user-attachments/assets/f28b95f6-2219-4824-8202-d1e427f7f847" />

3. Click **Submissions**.
4. Check:
   - Inbox
   - Spam
<img width="1594" height="867" alt="image" src="https://github.com/user-attachments/assets/444b586c-6d46-4775-a08f-272e2937621c" />

Submissions may occasionally appear in Spam, so check that folder if a test submission does not appear in the Inbox.

### Option 2: Email Notifications

Submissions are sent to the email address configured in Formspree.

Check:

- Inbox
- Spam folder
- Trash folder
<img width="1587" height="868" alt="image" src="https://github.com/user-attachments/assets/53fbd18b-67c1-4864-9c5c-9fba36d0eef5" />

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
