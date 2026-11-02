# Quick Setup Guide

> Get your personalised portfolio live in under 10 minutes.

---

## 1. Personal Info — `index.html`

Search and replace these placeholders:

| Placeholder | Replace With |
|---|---|
| `YOUR NAME` | Your full name |
| `YOUR ROLE` | Your job title (e.g. Full-Stack Developer) |
| `YOUR LOCATION` | Your city, country |
| `YOUR EMAIL` | your@email.com |
| `YOUR PHONE` | +00 00000 00000 |
| `YOUR LINKEDIN` | https://linkedin.com/in/yourprofile |
| `YOUR GITHUB` | https://github.com/yourusername |

---

## 2. AI Chatbot Brain — `script.js`

Find the `brain` object near the top of `script.js` and fill in all fields with your real data. The chatbot reads from this object to answer every visitor question.

Key fields to update:

```
brain.name          Your full name
brain.role          Your job title
brain.email         Your email
brain.phone         Your phone
brain.location      Your city / availability
brain.summary       2–3 sentence professional bio
brain.skills        Your technologies and tools
brain.experience    Work history
brain.education     Degree, university, GPA
brain.projects      Your shipped projects
brain.research      Papers, publications (if any)
brain.achievements  Certifications, awards
brain.contact       Full contact block
```

---

## 3. Replace Media Files

| File | Replace With |
|---|---|
| `photo.jpg` | Your own profile photo (square, min 400×400) |
| `resume.pdf` | Your own resume PDF |
| `og-image.png` | Your own 1200×630 social preview image |

---

## 4. Favicon

1. Go to [favicon.io](https://favicon.io/favicon-converter/) and upload your logo
2. Download the ZIP
3. Extract all files into your project root (replace existing favicon files)
4. Update `site.webmanifest` with your brand name and theme colour

---

## 5. SEO — Update Your Domain

In `sitemap.xml`, replace both URLs:
```xml
<loc>https://YOUR-DOMAIN.com/</loc>
<loc>https://YOUR-DOMAIN.com/studio.html</loc>
```

In `robots.txt`, replace:
```
Sitemap: https://YOUR-DOMAIN.com/sitemap.xml
```

---

## 6. Studio / Company Page — `studio.html`

Update:
- Company name and tagline
- About section — what your studio does
- Services and capabilities
- Product showcase
- Contact section

---

## 7. Deploy

**Netlify (easiest):**
```
1. app.netlify.com → Add new site → Deploy manually
2. Drag your folder onto the page
3. Live in 30 seconds ✓
```

**GitHub Pages:**
```
1. Push to GitHub
2. Settings → Pages → Deploy from main branch
3. Live at: https://yourusername.github.io/repo-name ✓
```

---

## Need Help?

Reach out to ABMVSC:

- **Email:** contact@abmvsc.studio
- **GitHub:** [github.com/Balama2520](https://github.com/Balama2520)
- **Studio:** [abms-portfolio.netlify.app/studio.html](https://abms-portfolio.netlify.app/studio.html)

