## Soulaiman El Boti — Portfolio

A clean, modern single-page portfolio for **Soulaiman El Boti (Full Stack Developer)**, built with vanilla HTML, CSS, and JavaScript.  
The site showcases profile, skills, projects, languages, and a contact form powered by **EmailJS**.

### Features

- **Responsive layout** that works well on mobile, tablet, and desktop.
- **Theme toggle** (dark / light) persisted in the DOM.
- **Smooth section appearance** and hover effects for a modern feel.
- **Sticky navigation bar** with mobile menu toggle.
- **Contact form** integrated with EmailJS (configurable).
- **CV page** with a clean printable layout.

---

## Project Structure

```text
.
├── assets/
│   └── image/
│       └── ff.jpg              # Profile / hero image
├── css/
│   └── style.css               # Main site styles (dark/light themes, layout, components)
├── js/
│   └── main.js                 # UI behavior, theme + nav + contact form handling
├── cv.html                     # CV page
└── index.html                  # Main portfolio page
```

> Note: The original `Css/` and `JS/` folders have been normalized to lowercase `css/` and `js/` for web-hosting compatibility (Linux servers are case-sensitive).

---

## Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari).
- Optional: A simple HTTP server if you want to avoid CORS issues and test EmailJS in a more realistic environment.

### Installation

1. **Clone or download** this repository to your machine.
2. Ensure the directory structure matches the layout above (`css/`, `js/`, `assets/`).
3. Open `index.html` directly in your browser, or serve the folder with a static server:

```bash
# Example using Node's http-server
npx http-server .
```

Then visit the printed URL in your browser.

---

## Configuration (EmailJS)

The contact form uses **EmailJS** to send messages directly from the frontend.

1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Create:
   - A **service** (e.g. `service_portfolio`).
   - An **email template** (e.g. `template_contact`).
   - Retrieve your **public key**.
3. In `index.html`, update the `data-*` attributes on the contact form:

```html
<form
  id="contact-form"
  data-email-service="YOUR_SERVICE_ID"
  data-email-template="YOUR_TEMPLATE_ID"
  data-email-public-key="YOUR_PUBLIC_KEY"
>
  ...
</form>
```

4. In `js/main.js`, the script will automatically read these attributes and initialize EmailJS.

Make sure to **never commit private API keys** to a public repository. EmailJS uses a public key for frontend use, but treat it carefully anyway.

---

## Scripts & Behavior

All interactive behavior lives in `js/main.js`:

- **Year auto-update** in the footer.
- **Section fade-in animation** for `.section` elements.
- **Mobile navigation toggle** on small screens.
- **Light/dark theme toggle**, including button icon change.
- **Contact form submission** through EmailJS with status messages and basic error handling.

There is no build step — all assets are static.

---

## Accessibility & UX

- Semantic HTML structure (`header`, `nav`, `section`, `footer`).
- Proper `alt` text for images.
- Buttons and links have sufficient contrast and larger hit areas.
- Focusable elements (links, buttons, form controls) are visually clear.
- Uses system and web fonts with comfortable line-height and spacing.

---

## Deployment

Because this is a static site, you can deploy it almost anywhere:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- Any static hosting / S3 bucket / shared hosting

Basic deployment steps:

1. Push the project to a Git repository.
2. Connect the repository to your hosting provider.
3. Ensure the **build command** is empty (or `npm run build` is not required) and the **publish directory** is the project root.
4. After deploy, verify:
   - CSS and JS are loading correctly (check 200 responses for `/css/style.css` and `/js/main.js`).
   - Contact form works with your EmailJS configuration.

---

## Future Improvements

- Add real project links (demo + GitHub) to the **Projects** section.
- Hook the contact form into a backend API (optional, instead of EmailJS).
- Add simple analytics (e.g. privacy-friendly page view tracking).
- Local storage persistence for theme preference.

---

## License

This portfolio is provided as-is for personal use and showcasing work.  
Feel free to customize it to match your own style and content.


