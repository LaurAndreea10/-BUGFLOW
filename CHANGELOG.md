# Changelog

All notable changes to BUGFLOW are documented here.

## [10.0.0] - 2026-09-12

### Security
- Pinned Mermaid 11.4.1 in app and offline cache.
- Enabled strict Mermaid security and added source validation for editor, imports and smart-links.
- Added Content Security Policy and regression coverage for unsafe shared diagrams.

### Performance and reliability
- Replaced recursive cycle detection with iterative O(V+E) three-state DFS.
- Consolidated project persistence behind a cancellable debounce.
- Made PNG/WebP export viewBox-aware with scale, transparency and safety limits.
- Removed dependency on Mermaid-generated ID patterns in flow highlighting and builder editing.

### Architecture
- Extracted security, graph analysis, export, projects, i18n and editor helpers into ES modules.
- Documented the boundary between app.js and v9.js.
- Added Large Graph isolate/show-all controls and complexity reporting.

### PWA and accessibility
- Added dedicated 512×512 maskable PNG, deterministic v10 cache and explicit offline page.
- Aligned theme colors across HTML, manifest and JavaScript.
- Re-enabled color-contrast auditing and expanded Playwright security, performance, export and manifest tests.
- Updated diagram coverage copy from four examples to 12+ families.

## [9.0.0] - 2026-09-08

### Added
- Production center and Ctrl/Cmd+K command palette
- Local graph analysis, comments, find/replace, snapshot comparison, and documentation export
- Smart URL sharing, read-only mode, and fullscreen presentation mode
- Keyboard navigation and quick label editing for Flow Forge SVG nodes
- Six new Mermaid starters: Kanban, Sankey, Architecture, Radar, Treemap, Requirement
- Mobile action dock, diagram grid, color-safe theme, and LaurAi export branding
- CodeQL scanning, Dependabot, axe accessibility checks, PR template, code of conduct, and roadmap

## [8.0.0] - 2026-09-08

### Added
- Direct visual node-to-node connection mode in Flow Forge
- Flow Forge undo/redo history, auto layout, and mini-map
- Line-number gutter and line-aware Mermaid diagnostics
- ZIP project bundles containing Mermaid, SVG, JSON, and README files
- Expanded Romanian controls and status messages
- PWA update banner, immediate activation, and offline Mermaid caching
- Playwright end-to-end tests and Lighthouse CI
- Open Graph social preview artwork and metadata

## [7.0.0] - 2026-09-08

### Added
- Drag-and-drop Flow Forge nodes with persistent layout
- Project snapshots and restoration history
- Custom accent and surface theme controls
- Markdown and JSON exports
- Editor line counter
- Online/offline status and in-app PWA installation
- PWA shortcuts for the editor and Flow Forge
- Automated GitHub validation workflow
- Contribution guide, security policy, and issue templates

## [6.0.0] - 2026-09-08

### Added
- Visual no-code Flow Forge builder
- Process, decision, terminal, database, and data block palette
- Editable nodes and connections with live Mermaid generation
- Bug report, release pipeline, and CRM presets
- Direction controls, synchronized source view, zoom, fit, and animated route playback
- One-click transfer from Flow Forge to the Studio editor

## [5.0.0] - 2026-09-08

### Added
- Clean separation into HTML, CSS, and JavaScript
- GitHub Pages PWA assets and offline cache
- Multi-project workspace and JSON backup
- Local text-to-diagram assistant
- Accessible summaries and speech output
- WebP, HTML, PDF, SVG, PNG, and Mermaid exports
- Node search, XP, badges, and print layout
- SEO files, project documentation, and MIT license

## [4.0.0] - 2026-09-08
- Pro workspace, advanced export tools, project management, and accessibility features

## [3.0.0] - 2026-09-08
- Template library, editor history, autosave, PWA, and export tools

## [2.0.0] - 2026-09-08
- Sequence, state, Gantt, and Git Graph examples with live editor

## [1.0.0] - 2026-09-08
- Interactive bug-report flowchart and bilingual interface
