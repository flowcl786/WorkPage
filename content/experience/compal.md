---
title: "Software Engineer — Compal Electronics"
lede: "Two threads: debugging and validating BIOS firmware across a cross-regional team, and building an automated system to measure the team's build performance."
where: "Compal Electronics, Taipei"
when: "Dec 2023 – Feb 2025"
role: "Software Engineer (firmware + tooling)"
stack: ["C", "ACPI / ASL", "Python", "Windows Batch", "Google Sheets API"]
---

## Overview

A role that combined low-level firmware work with building internal tooling. Day to day I moved between validating BIOS behaviour on real hardware and writing software that made the team's own work measurable.

## Firmware debugging & validation

Most of my firmware time went into making problems reproducible and diagnosable rather than taking reports at face value.

- **Issue triage as a gate** — for bugs raised under non-default settings, I cleaned the environment first and separated genuine defects from test-condition errors, so invalid issues didn't reach the engineering queue.
- **Layered diagnosis** — for device-detection faults I worked BIOS Setup → OS Device Manager → ACPI/ASL, reading ASL code and ACPI tables to tell "not enabled in firmware" apart from "the OS can't see it".
- **Closed-loop verification** — I never trusted the compile result alone: rebuild, flash to real hardware, then confirm the change against low-level state with OS tools (including small Python scripts).
- **Board bring-up** — on early prototypes I used a debug card and POST codes to locate whether a fault needed hardware intervention or a firmware fix.
- **Regression analysis** — when integrating external firmware fixes, I compared the change scope so a newly reported problem could be identified as a side-effect of a prior patch rather than a separate bug.
- **Cross-regional work** — I turned logic-gapped test documents into executable, checkpointed procedures so Taiwan R&D and China QA shared a single source of truth.

More detail: [BIOS Firmware Debugging & Validation](/projects/bios-firmware/).

## Build-performance monitoring

I designed and built an automated pipeline (Python + Windows Batch + Google Sheets API) that collected build timings and machine specs with no manual data entry, and produced anomaly reports that gave management an objective basis for hardware and resource decisions.

Full write-up: [Development Environment Performance Monitoring](/projects/build-monitoring/).
