---
title: "BIOS Firmware Debugging & Validation"
lede: "Instrumented BIOS builds, board bring-up, and reproducible validation across a cross-regional firmware team."
order: 2
featured: false
where: "Compal Electronics, Taipei"
when: "Dec 2023 – Feb 2025"
role: "BIOS firmware engineer"
stack: ["C", "ACPI / ASL", "Debug tooling"]
scale: "Taiwan R&D ↔ China QA"
code: "Internal — not public"
---

## Context

Cross-regional work between Taiwan R&D and China QA regularly stalled device bring-up, with no structured triage — a fault could live in the local firmware, the BIOS vendor's reference code, or the tooling environment.

## Challenge

QA reports varied in quality: some didn't reproduce, some had vague test conditions, and the same term often meant different things across the two sites. Taking them at face value wasted R&D time.

## Approach

- **Instrumented test builds** — most of my day-to-day was building targeted BIOS versions that exposed functions kept hidden in the shipping firmware, so a specific feature could be made visible and validated.
- **Board bring-up** — taking a new board to a stable first boot with every device detected: the platform's initial working image.
- **Layered diagnosis** — for device faults I worked BIOS Setup → OS Device Manager → ACPI/ASL, because "not enabled in firmware" and "the OS can't see it" are different faults.
- **Closed-loop verification** — rebuild, flash to real hardware, then cross-check with OS tools; never trust the compile result alone.
- **Cross-regional triage** — front-load validation (version, clear steps, reproducibility) before an issue reached the R&D queue, and separate a local firmware fault from the vendor's reference code or the tooling; raise complete, reproducible reports.

## Outcome

Built validation checklists where none existed and turned ambiguous reports into reproducible steps, so recurring issues could be resolved without escalating. The documentation became the onboarding reference for new firmware engineers.
