# Contributing to ABMVSC Portfolio Template

Thank you for your interest in contributing! This project is maintained by **ABMVSC Technology & Innovation Studio**.

---

## How to Contribute

### 🐛 Report a Bug
1. Open a [GitHub Issue](https://github.com/Balama2520/abmvsc-portfolio-template/issues)
2. Use the label `bug`
3. Include: browser, OS, screenshot, and steps to reproduce

### 💡 Suggest a Feature
1. Open a [GitHub Issue](https://github.com/Balama2520/abmvsc-portfolio-template/issues)
2. Use the label `enhancement`
3. Describe the use case clearly

### 🔧 Submit a Pull Request
1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test in Chrome, Firefox, and Safari
5. Open a Pull Request against `main`

---

## Code Standards

- **HTML:** Semantic, accessible, ARIA labels on interactive elements
- **CSS:** Use existing CSS variables from `:root` — do not hardcode colours
- **JS:** ES6+, no external libraries, graceful fallbacks for older browsers
- **Comments:** Write comments that explain *why*, not *what*

---

## Testing Checklist

Before submitting, confirm:
- [ ] `node -c script.js` returns no errors
- [ ] No broken favicon references in HTML
- [ ] Chatbot responds to: hello, skills, projects, contact, resume
- [ ] Mobile responsive (test at 375px, 768px, 1280px)
- [ ] No console errors in Chrome DevTools

---

## Project Structure

```
config.js        ← User-editable data (do not change logic here)
script.js        ← Core engine (chatbot, navigation, animations)
style.css        ← Design system (CSS variables at top)
index.html       ← Personal portfolio page
studio.html      ← Company / studio page
```

---

## Contact

**ABMVSC Technology & Innovation Studio**
- Email: contact@abmvsc.studio
- GitHub: [github.com/Balama2520](https://github.com/Balama2520)

