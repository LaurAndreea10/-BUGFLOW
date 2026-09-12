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
- Visual no-code Flow Forge with block palette, editable nodes, connections, presets, and generated Mermaid source
- Drag-and-drop nodes with persistent custom positions
- Project snapshots with one-click restore and up to 30 saved states
- Custom accent/surface themes, online status, and in-app PWA installation
- Markdown and JSON export in addition to the existing formats
- Animated pipeline playback with progress pressure, zoom, fit, direction control, and Blueprint/Vellum themes
- Live Mermaid editor with debounce, error feedback, undo/redo, formatting, zoom, fit, and fullscreen
- Multi-project workspace with create, rename, duplicate, delete, import, and JSON backup
- Local text-to-diagram assistant
- SVG, PNG, WebP, HTML, PDF, and `.mmd` export
- Accessible text summaries and speech output
- English/Romanian interface, light/dark theme, high contrast, text scaling, easy-read font, and reduced motion
- Local autosave, keyboard shortcuts, XP/badges, and installable offline PWA

## Version 9 highlights

- Production center with command palette and mobile action dock
- Graph analysis for orphan nodes, dead ends, and cycles
- Smart compressed share links, local comments, read-only and presentation modes
- Find/replace, snapshot comparison, and generated Markdown documentation
- Keyboard-operable SVG nodes with quick label editing
- Kanban, Sankey, Architecture, Radar, Treemap, and Requirement starters
- Grid, color-safe palette, and optional LaurAi export branding
- CodeQL, Dependabot, axe accessibility checks, Playwright, and Lighthouse CI

## Version 8 highlights

- Click-to-connect handles directly on rendered Flow Forge nodes
- Dedicated Flow Forge undo/redo history with 60 states
- Auto layout reset and live mini-map
- Source line gutter with precise Mermaid error diagnostics
- Complete project ZIP bundle export and direct print-to-PDF workflow
- Expanded Romanian interface labels
- PWA update notification and offline Mermaid module cache
- Playwright browser tests and Lighthouse CI
- Social preview artwork and Open Graph metadata

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
├── .github/workflows/validate.yml
├── CONTRIBUTING.md
├── SECURITY.md
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

## Security & stability baseline (v10)

- Mermaid is pinned to `11.4.1` in both the application and service worker.
- Mermaid runs with `securityLevel: 'strict'`.
- Editor, file-import, and smart-link sources are size-limited and reject executable markup and unsafe protocols.
- Graph cycle detection uses an iterative three-state DFS in O(V+E).
- Project persistence uses a cancellable debounce and flushes on `pagehide`.
- PNG and WebP exports derive dimensions from the SVG `viewBox`, support 1×/2×/4×, transparency, and a 40 MP safety limit.
- The accessibility test includes color contrast rather than disabling it.
- The PWA has an explicit offline page and a dedicated 512×512 maskable PNG.

## Architecture

The app remains dependency-light, but responsibilities are explicit:

| File | Responsibility |
|---|---|
| `app.js` | Application orchestration, editor UI, project and export actions |
| `v9.js` | Pro tools, smart links, builder enhancements, presentation features |
| `modules/security.js` | Source validation and safe smart-link decoding |
| `modules/graph-analysis.js` | Linear-time graph analysis and health reports |
| `modules/export.js` | SVG sizing and robust raster export |
| `modules/projects.js` | Reusable debounce and persistence scheduling |
| `modules/i18n.js` | Translation composition helpers |
| `modules/editor.js` | Stable rendered-node lookup using Mermaid data attributes |
| `sw.js` | Deterministic offline cache and update lifecycle |

The split is intentionally incremental: existing behavior remains traceable while fragile responsibilities move behind small modules.

## Diagram coverage

BUGFLOW demonstrates and supports **12+ Mermaid diagram families**, including flowcharts, sequence, state, Gantt, Git Graph, class, ER, journey, mindmap, timeline, quadrant, XY, Sankey, block, architecture, packet, Kanban, requirement, pie and C4 variants.

## Large Graph Mode

Node search, isolate/show-all controls, minimap, zoom, fit, complexity reporting, a 100 KB source ceiling and iterative cycle detection keep large diagrams reviewable without recursive stack growth.

## Version history

See [CHANGELOG.md](CHANGELOG.md).

## Author

Created by **Laura Andreea Plugaru / LaurAi** as a CodePen Challenge and front-end portfolio project.

## License

MIT — see [LICENSE](LICENSE).
