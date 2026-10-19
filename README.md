# Mekuannt Munye — Portfolio

Professional full-stack developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration (Important)

Update your personal details in **one place**:

### 1. `src/data/config.js`
- `email` — your real email
- `github` — GitHub profile URL
- `linkedin` — LinkedIn profile URL
- `cvPath` — path to your CV (place the PDF in `/public`)
- `location` — optional

### 2. `src/data/projects.js`
- Add real GitHub repository URLs
- Add live demo URLs only if the project is actually deployed
- Replace placeholder images if you have screenshots (put them in `/public`)

### 3. Contact Form
In `src/sections/Contact.jsx`, set `FORM_ENDPOINT` to a Formspree (or similar) endpoint for real form submissions.  
Until then the form falls back to opening the user's email client.

### 4. CV
Place your resume as `public/Mekuannt_Munye_CV.pdf` (or update the path in config).

### 5. Profile Photo
Already included at `src/assets/profile.png` (circular crop in the hero).

## Project Structure

```
src/
  assets/          # profile photo
  components/      # Navbar, Footer, ProjectCard, SectionHeading
  data/            # config, projects, skills
  sections/        # Hero, About, Skills, Projects, Education, Contact
  App.jsx
  index.css
  main.jsx
```

## Deployment

### Netlify / Vercel
1. Push the repo to GitHub
2. Connect the repository on Netlify or Vercel
3. Build command: `npm run build`
4. Publish directory: `dist`

## Notes
- All skill levels and project details are honest placeholders based on the provided brief.
- No fabricated experience, employers, or deployment links.
- Fully responsive, accessible focus states, and reduced-motion support.
