# Security Policy

## Supported version

The latest version on the `main` branch is supported.

## Reporting a vulnerability

Please do not publish sensitive security details in a public issue. Contact the repository owner through the GitHub profile and include reproduction steps, affected browser, and impact.

BUGFLOW stores projects and preferences locally in the browser and does not require an account.

## Diagram input security

BUGFLOW treats editor text, imported files, and URL smart-links as untrusted input.

- Mermaid is pinned to 11.4.1 and configured with `securityLevel: 'strict'`.
- Sources larger than 100 KB are rejected.
- Scriptable elements, inline event handlers, `javascript:` and HTML data URLs are rejected before rendering.
- A Content Security Policy limits script, style, image, font, connection, worker, object and base sources.
- Shared links are decoded, validated and removed from the address bar when invalid.
- Security regression tests cover the dependency pin and unsafe smart-link payloads.

Please report bypasses privately using GitHub's security-reporting channel rather than a public issue.
