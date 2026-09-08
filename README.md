# BUGFLOW — Mermaid Studio Pro

An interactive, accessible Mermaid diagram studio that combines a guided bug-report simulation, practical templates, a live editor, exports, project management, and offline support.

[![Live Demo](https://img.shields.io/badge/Live-GitHub%20Pages-2563eb?style=for-the-badge&logo=github)](https://laurandreea10.github.io/-BUGFLOW/)
![Accessibility](https://img.shields.io/badge/Accessibility-first-0a8f68?style=for-the-badge)
![PWA](https://img.shields.io/badge/PWA-offline-ca91ff?style=for-the-badge)

## Live demo

**https://laurandreea10.github.io/-BUGFLOW/**

## Highlights

- Interactive “Life of a Bug Report” decision flow
- Sequence, state, Gantt, Git Graph, ER, journey, timeline, mind map, class, pie, and quadrant diagrams
- 12 searchable templates for development, CRM, marketing, planning, and data
- Live Mermaid editor with debounce, error feedback, undo/redo, formatting, zoom, fit, and fullscreen
- Multi-project workspace with create, rename, duplicate, delete, import, and JSON backup
- Local text-to-diagram assistant
- SVG, PNG, WebP, HTML, PDF, and `.mmd` export
- Accessible text summaries and speech output
- English/Romanian interface, light/dark theme, high contrast, text scaling, easy-read font, and reduced motion
- Local autosave, keyboard shortcuts, XP/badges, and installable offline PWA

## Project structure

```text
-BUGFLOW/
├── index.html
├── style.css
├── app.js
├── manifest.webmanifest
├── sw.js
├── icon.svg
├── robots.txt
├── sitemap.xml
├── CHANGELOG.md
├── LICENSE
└── README.md
```

## Run locally

No build step is required. Open `index.html` through a local static server.

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Keyboard shortcuts

- `Ctrl/Cmd + S` — save the current project
- `Ctrl/Cmd + Z` — undo
- `Ctrl/Cmd + Shift + Z` — redo
- `Esc` — close accessibility settings

## Accessibility

BUGFLOW uses semantic controls, visible focus states, a skip link, ARIA live regions, keyboard navigation, high-contrast and reduced-motion modes, scalable text, textual diagram summaries, and speech output.

## Privacy

Projects, preferences, drafts, and progress are stored locally in the browser. No account or analytics service is required.

## Version history

See [CHANGELOG.md](CHANGELOG.md).

## Author

Created by **Laura Andreea Plugaru / LaurAi** as a CodePen Challenge and front-end portfolio project.

## License

MIT — see [LICENSE](LICENSE).
