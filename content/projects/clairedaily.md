---
title: "Claire Daily — A Site I Design, Build and Run"
lede: "A personal publishing site I own end to end: a static build that auto-indexes every post, a documented design system, and a hosting migration done on my own terms."
order: 5
featured: false
where: "Personal project"
when: "2025 – present"
role: "Design, build, deploy — solo"
stack: ["Jekyll", "Liquid", "CSS", "Cloudflare Pages"]
scale: "Weekly cadence · self-serve pipeline"
---

## Context

Claire Daily is my own writing site — where I publish a weekly newsletter and travel-log notes without depending on a platform I don't control. I run the whole thing: content model, templates, design system, and deployment.

## What I built

The design goal was that publishing should cost almost nothing once the system was in place.

- **Auto-indexing archive** — the archive, the category pages and the "latest post" block on the homepage are all generated from the posts folder with Liquid loops (`group_by_exp`). Adding a post means dropping one Markdown file in `_posts/`; every listing updates itself, with no links to edit by hand.
- **A documented design system** — colours, type and spacing live in one CSS file backed by a written brand spec, not scattered ad-hoc values. Every text/background pairing is checked against WCAG AA contrast before it ships.
- **Separation of source and output** — drafts and private docs are excluded from both the repo and the build, so the published site only ever contains what's meant to be public.

## Iteration

The site reached "drop a file and forget it" in stages, each one removing a manual step.

<div class="iter">
<div><span class="step">v1</span><strong>Static lists</strong><span>Early on, each year and category page listed its posts by hand — every new post meant editing several files, exactly the kind of chore that doesn't get done.</span></div>
<div><span class="step">v2</span><strong>Dynamic indexing</strong><span>Rewrote the listings as Liquid loops grouped by year, so posts appear everywhere automatically. Publishing dropped to a single file drop.</span></div>
<div><span class="step">v3</span><strong>Design system pass</strong><span>Replaced an ad-hoc palette with a documented one — a calm, readable identity with every colour pairing verified against WCAG AA, plus web fonts with a safe fallback chain so Chinese text never drops to a system serif.</span></div>
</div>

## Migration

Partway through I moved hosting from GitHub Pages to Cloudflare Pages, and the site onto a dedicated subdomain. Deployment is now push-to-build: a commit to `main` triggers Cloudflare's build, with no separate deploy step. DNS lives on Cloudflare, and the old platform's custom-domain artefact was removed once the new setup was handling everything — a clean cut rather than two half-configured hosts.

## Outcome

Publishing a post is one file and one push. The site is live at [blog.clairedaily.com](https://blog.clairedaily.com/), and the conventions behind it — content model, palette, deploy flow — are written down as a working spec, so the system stays maintainable instead of living only in my head.
