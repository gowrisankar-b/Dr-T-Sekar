# Dr. Sekar Tamilperuvalathan — Academic Portfolio

A premium academic portfolio website built with **Vite + React** for Dr. Sekar Tamilperuvalathan, Associate Professor & Head of P.G-Manufacturing Engineering, Department of Mechanical Engineering, Government College of Technology (GCT), Coimbatore.

---

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Routing:** React Router DOM v6
- **Styling:** Plain CSS with CSS custom properties (no UI library)

---

## Project Structure

```
faculty-portfolio/
├── public/
├── src/
│   ├── assets/                  # Profile photo, CV PDF
│   ├── components/
│   │   ├── Layout.jsx/css       # Shared page wrapper
│   │   ├── Navbar.jsx/css       # Sticky responsive navbar
│   │   └── Footer.jsx/css       # Global footer with contact & CV download
│   ├── pages/
│   │   ├── Home.jsx/css         # Profile, metrics, education timeline
│   │   ├── Research.jsx/css     # Patents, TEQIP project, filter tags
│   │   ├── Publications.jsx/css # Academic profiles, journals, books
│   │   └── Experience.jsx/css   # PhD guidance, admin roles, teaching
│   ├── App.jsx                  # Route definitions
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global theme variables & resets
├── index.html
├── vite.config.js
└── package.json
```

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero with profile photo, metric grid, about, education timeline |
| `/research` | Research | 10 granted patents, TEQIP-III R&D project, filterable by topic |
| `/publications` | Publications | Google Scholar, Scopus, WoS links, 2026 highlights, paginated journal list, 4 books |
| `/experience` | Experience | PhD guidance (6 graduated, 5 ongoing), PG/UG projects, admin roles, subjects taught |

---

## Features

- Sticky responsive navbar with active route highlighting
- Mobile-first responsive layout (breakpoints at 900px and 600px)
- Interactive filter tags on Research and Publications pages
- Paginated journal catalog
- CV PDF download from all major touchpoints
- Consistent design system using CSS variables (navy, gold, slate, white)

---

## Color Theme

| Token | Value | Usage |
|---|---|---|
| `--navy` | `#0f2044` | Primary brand, headings, navbar |
| `--accent` | `#c8973a` | Gold highlights, badges, CTAs |
| `--slate` | `#475569` | Secondary text, subtle elements |
| `--bg` | `#f8fafc` | Page background |
| `--white` | `#ffffff` | Cards, surfaces |

---

## Getting Started

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## Assets

Place the following files in `src/assets/` before running:

| File | Purpose |
|---|---|
| `profile_picture.jpeg` | Faculty headshot displayed in the hero section |
| `cv.pdf` | Full academic CV — linked from Navbar, Hero, and Footer |

---

## Academic Highlights

- 27+ Years of Service under Tamil Nadu Educational Services
- 10 Granted Design Registration Certificates — Indian Patent Office
- 90+ Peer-reviewed journal publications (Scopus & Web of Science indexed)
- 11 PhD Scholars (6 Graduated, 5 Ongoing)
- TEQIP-III Funded R&D — Principal Investigator
- Chartered Engineer — IMechE, UK · NEBOSH Safety Certified

---

## Contact

| | |
|---|---|
| Institutional Email | drtsekar76@gct.ac.in |
| Personal Email | tsekargct@gmail.com |
| Institution | Government College of Technology, Coimbatore |
| Scopus ID | 56152897600 |
| Web of Science ID | JOK-2774-2023 |
