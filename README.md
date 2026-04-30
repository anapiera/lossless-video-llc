# Lossless Video LLC — Website

Static website for Lossless Video LLC. Hosted on GitHub Pages.

---

## File structure

```
lossless-video-llc/
├── index.html              ← Home page
├── work.html               ← All projects (with category filter)
├── project.html            ← Single project page (reads ?id=... from URL)
├── services.html           ← Services + pricing
├── about.html              ← About page
├── contact.html            ← Contact form
├── assets/
│   ├── css/style.css       ← All styling — edit colors/fonts here
│   ├── js/
│   │   ├── main.js         ← Nav animation
│   │   └── projects.js     ← ⭐ EDIT THIS FILE TO ADD VIDEOS
│   ├── fonts/L_font.ttf
│   ├── images/             ← Photos and thumbnails
│   └── videos/             ← Drop your .mp4 files here
└── README.md
```

---

## ⭐ How to add a new video

1. Compress your video to under 100 MB (GitHub rejects bigger files).
   I recommend [HandBrake](https://handbrake.fr/) — it's free.
   Preset: **Web → Gmail Large 3 Minutes 720p30** is a good starting point.
2. Drop the `.mp4` into `assets/videos/`.
3. Drop a thumbnail image (`.jpg` or `.png`) into `assets/images/`.
4. Open `assets/js/projects.js`. Copy one of the existing project blocks
   and paste it at the **top** of the array. Change the fields:
   - `id` — the URL slug (lowercase, no spaces). e.g. `'my-new-video'`
     becomes `project.html?id=my-new-video`
   - `title`, `type`, `category`, `client`, `year`, `duration`,
     `description`, `tools`
   - `poster` — path to your thumbnail (e.g. `'assets/images/my-thumb.jpg'`)
   - `video` — path to the mp4 (e.g. `'assets/videos/my-video.mp4'`)
   - `featured` — set to `true` if you want it on the home page
5. Save. Push to git (see below). The site updates within ~1 minute.

### What if my video is over 100 MB?

GitHub won't let you push it. Two options:

- **Compress harder** in HandBrake (lower bitrate, 720p instead of 1080p).
- **Host it externally** (e.g. upload to Vimeo or your own server) and
  paste the full URL into the `video` field instead of a local path.
  Example: `video: 'https://player.vimeo.com/video/123456789'`
  The site auto-detects URLs vs. local files and uses the right player.

---

## ⚙ Wiring up the contact form (one-time setup)

The form is styled to match the site, but submissions need a Google Form
sitting behind it to capture data into a Google Sheet.

### Step 1 — Create the Google Form

1. Go to [forms.google.com](https://forms.google.com) and create a new form.
2. Add these fields **in this exact order** (so the entry IDs line up):
   - **Full Name** (Short answer)
   - **Email Address** (Short answer)
   - **Phone Number** (Short answer)
   - **Project Type** (Multiple choice: Music Video, Commercial, Short Film,
     Corporate, Other)
   - **Budget Range** (Multiple choice: Under $300, $300–$500, $500–$1000,
     $1000–$2500, $2500+)
   - **Tell us about your project** (Paragraph)
3. Click the **Responses** tab → green Sheets icon → "Create new
   spreadsheet". This is your live data file. Anything anyone submits
   shows up here automatically. You can download it as Excel anytime
   (File → Download → Microsoft Excel).

### Step 2 — Get the form's action URL

1. Click **Send** at the top right of your form, then click the link
   icon. Copy the link. It looks like:
   `https://docs.google.com/forms/d/e/1FAIpQLSe.../viewform`
2. Change `viewform` at the end to `formResponse`. That's your **action URL**.

### Step 3 — Get each field's entry ID

1. Open the form preview (the link from step 2 with `viewform`).
2. Right-click the first field ("Full Name") → **Inspect**.
3. In the developer tools, look for `name="entry.123456789"` near the
   highlighted element. That long number is the entry ID.
4. Repeat for each of the 6 fields, writing them down in order.

### Step 4 — Plug into the HTML

1. Open `contact.html`.
2. Find the `<form>` tag. Replace `PASTE_YOUR_FORM_ID` in the `action`
   attribute with your real action URL from step 2.
3. Replace each `entry.0000000001` through `entry.0000000006` with your
   real entry IDs from step 3, in order.
4. Save and push.

Test it by submitting the form on your live site. The submission should
appear in your Google Sheet within a few seconds.

---

## Git workflow (push changes to live site)

Every time you make a change:

```
git add .
git commit -m "what you changed"
git push
```

GitHub Pages rebuilds the site within about 1 minute.

To preview locally before pushing, use the **Live Server** extension in
VS Code (right-click `index.html` → "Open with Live Server").

---

## Editing colors / fonts

All colors live as CSS variables at the top of `assets/css/style.css`:

```css
:root {
    --amber:        #ffb400;   /* main accent color */
    --amber-light:  #ffd54d;
    --amber-dark:   #ff9900;
    --bg:           #050505;   /* page background */
    --text:         #d6d6d6;
    /* ... */
}
```

Change these once and they update across every page.

---

## Pages overview

| Page           | URL              | Notes                                          |
|----------------|------------------|------------------------------------------------|
| Home           | `/`              | Hero + 4 featured projects                     |
| Work           | `/work.html`     | All projects with category filter              |
| Project        | `/project.html?id=donald` | Renders any project from `projects.js` |
| Services       | `/services.html` | 4 service cards + pricing row                  |
| About          | `/about.html`    | Bio + system specs                             |
| Contact        | `/contact.html`  | Form → Google Sheet                            |
