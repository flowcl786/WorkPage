---
title: "Reading a Year of Uniswap V3 Volume"
lede: "An SQL time-series study of a full year (2024) of Uniswap V3 trades, lining the biggest volume days up against the events that actually caused them."
order: 4
featured: false
where: "Self-directed"
when: "2026"
role: "Analysis + write-up"
stack: ["SQL", "Dune", "Time-series"]
scale: "2024 · daily volume series"
code: "Public dashboard (Dune)"
---

## Context

A self-directed exercise in going from a large raw on-chain dataset to something readable: aggregate a full year (2024) of Uniswap V3 trades on Ethereum into a daily volume series, then ask whether the biggest days have a legible cause.

## What I did

Rolled every trade up into daily volume with SQL on Dune, pulled out the ten highest-volume days, and annotated each with the market event it coincided with.

## Outcome

The pattern was the point: **6 of the 10 highest-volume days were driven by regulatory decisions or market crashes, not organic growth** — the year's single biggest day was the August 2024 black-swan crash (~$5.07B in a single day), not a rally. Written up as a [blog post](/blog/uniswap-v3-volume/), with the interactive charts and query on the [public Dune dashboard](https://dune.com/flowcl786/uniswap-v3-volume-2024).
