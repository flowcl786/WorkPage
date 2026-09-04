---
title: "Development Environment Performance Monitoring"
lede: "An automated pipeline that turned build-machine timings into an objective basis for resource decisions — with zero manual data entry."
order: 1
featured: true
where: "Compal Electronics, Taipei"
when: "Dec 2023 – Feb 2025"
role: "Designed and built solo"
stack: ["Python", "Windows Batch", "Google Sheets API", "Apps Script"]
scale: "15 machines · 6+ users"
code: "Internal — not public"
---

## Context

The department had no quantitative way to measure build efficiency, so managers optimised environments and assigned work on subjective judgement. I was asked to monitor build efficiency across the team's 15 development machines and give management an objective basis for resource decisions.

## Challenge

Build times ran from about 2 minutes to over an hour — a 30× spread. No single average could judge machines fairly, so the system had to handle high-variance data by design rather than as an afterthought.

## What I built

The guiding principle was to make the correct behaviour the default. Python and Batch scripts sat inside each codebase and fired automatically after every build, so collecting data took no manual action from anyone.

{{< diagram-buildmon >}}

- **Labelling by convention** — project names were read from the working-directory path, so labels came from naming rules, not hand-entry.
- **Certificate isolation** — the script cleared cached API credentials before each run so they couldn't travel with the codebase; agreed with my manager, security over convenience.
- **Two layers** — raw data was write-only through the API; management read a separate dashboard, so the source of truth couldn't be edited by hand.
- **Bounded history** — each project kept only its 50 most recent builds, so baselines tracked current machines rather than old ones.

## Iteration

The scoring model took three passes before the numbers were trusted.

<div class="iter">
<div><span class="step">v1</span><strong>Global mean</strong><span>Frequent builds on fast machines dragged the average down, so ordinary machines looked like they were underperforming.</span></div>
<div><span class="step">v2</span><strong>Per-project baselines</strong><span>Grouping by project gave short and long builds their own baselines — a 2-minute project and a 1-hour one no longer polluted each other.</span></div>
<div><span class="step">v3</span><strong>Dynamic threshold</strong><span>An outlier gate of μ + 1.5σ per group, active only once a group had ≥ 10 builds; it filtered roughly 85% of background noise and surfaced the genuine outliers.</span></div>
</div>

Later, management proposed weighting the average by each person's build count. I cross-checked it against the real build logs and showed it would hand low-frequency members disproportionate influence and pull the baseline away from actual machine behaviour. The idea was dropped and the original design kept.

> "Engineers not compiling" is a management question, not a data-model one — the system should reflect the machines, not be tuned to look good.

## Outcome

- Mandated across the department within three months, closing the data gaps that partial coverage would have left.
- Became the reference managers and team leads used to discuss bottlenecks.
- Alert emails were acted on, not just received — the real sign it had earned trust.
- Documented end to end (API integration, Apps Script triggers, the statistics); colleagues were still asking how to set it up when I left.
