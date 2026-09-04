---
title: "This Portfolio Site"
lede: "The site you're reading — a deliberately dependency-light static build, chosen for supply-chain safety and long-term maintainability rather than novelty."
order: 6
featured: false
where: "Personal project"
when: "2026"
role: "Design & build — solo"
stack: ["Hugo", "Go templates", "CSS", "Cloudflare Pages"]
scale: "Single binary · zero npm dependencies"
---

## Context

I wanted a portfolio I could keep for years and reason about fully — and I wanted to try a stack I hadn't used, rather than reuse the one behind my blog. So the build itself became a small engineering decision worth making on purpose.

## Challenge

Most modern site frameworks pull in a large tree of npm packages, and npm's install-time lifecycle scripts run arbitrary code on the build machine — a real, recurring supply-chain attack surface. For a site I'd rebuild occasionally and mostly leave alone, an unattended dependency tree that changes under me was the wrong kind of risk.

## What I decided

I compared three honest options against the two things I actually cared about — supply-chain surface and how much upkeep the site would demand.

| Option | Supply-chain surface | Maintainability |
| --- | --- | --- |
| Astro / npm | Large — many transitive packages, install-time scripts | High — components, but a dependency tree to keep patched |
| Hand-written HTML | None — no build, no dependencies | Low — every shared change edited by hand across pages |
| **Hugo** | **Minimal — one Go binary, no dependency tree** | **High — templates and partials, one file to update shared parts** |

Hugo won because it sat at the good corner of both: a single self-contained binary means there's no npm tree to audit or patch, while templates, partials and shortcodes keep shared markup in one place.

## What I built

- **A tokens-only design system** — every colour, font and spacing value is a CSS custom property, defined once and themed for light and dark. No component hard-codes a colour, so a palette change is a one-line edit. Text/background pairings are checked against WCAG AA.
- **Theme-aware inline SVG diagrams** — the technical diagrams (like the build-monitoring pipeline) are inline SVG driven by the same tokens, so they follow light and dark mode instead of being flat exported images.
- **Reproducible builds** — the Hugo version is pinned for deployment, so the site that builds on Cloudflare is the one I tested locally, not whatever version happens to be current.

## Outcome

You're reading it. The site builds from one binary with nothing to `npm install`, deploys on push to Cloudflare Pages, and is small enough that I can hold the whole thing in my head — which was the point.
