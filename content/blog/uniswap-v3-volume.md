---
title: "What Actually Moved Uniswap V3 Volume in 2024"
date: 2026-07-22
tags: ["SQL", "Dune", "data analysis"]
description: "Aggregating a full year of Uniswap V3 trades into a daily volume series, then lining the biggest days up against the events that caused them — and finding most of the spikes weren't organic growth."
---

## The question

I wanted a concrete exercise in going from a large raw on-chain dataset to something you can actually read. Uniswap V3 emits an enormous stream of individual trades; on its own that's noise. So I set myself a question: if you roll a full year of it up into daily volume, do the biggest days line up with things that actually happened — and if so, *what kind* of things?

## The data

- **Source** — Uniswap V3 trades on Ethereum mainnet
- **Period** — 1 January to 31 December 2024
- **Tool** — SQL on Dune Analytics

I aggregated every trade into a daily volume series, pulled out the ten highest-volume days, and annotated each one with the market event that coincided with it.

## The biggest days of the year

| Date | Volume (USD) | Event | Type |
| --- | --- | --- | --- |
| 2024-08-05 | ~$5.07B | Black-swan crash — $500B wiped, $1B liquidated | Panic |
| 2024-03-05 | ~$3.35B | Bitcoin breaks its all-time high at $69k | Euphoria |
| 2024-05-23 | ~$3.25B | SEC approves spot Ethereum ETFs | Regulation |
| 2024-12-05 | ~$2.87B | Bitcoin crosses $100k for the first time | Milestone |
| 2024-12-09 | ~$2.68B | Flash crash — quantum-computing fears + $1.7B liquidations | Panic |
| 2024-11-21 | ~$2.58B | Post-election bull-market peak | Political |
| 2024-05-21 | ~$2.53B | Bitcoin halving-cycle consolidation | Cycle |
| 2024-03-15 | ~$2.49B | Bitcoin sets a new ATH at $73k | Euphoria |
| 2024-04-13 | ~$2.46B | Pre-halving high, institutional ETF inflows | Cycle |
| 2024-11-12 | ~$2.45B | Trump win drives BTC to $91k | Political |

## What it says

At the top of the list sits the 5 August 2024 black-swan crash: about **$5.07 billion** in volume across ~132,000 swaps — roughly 50% more than the next-busiest day. The biggest day of the year is a panic, not a rally.

Reading down, **6 of the 10 highest-volume days were driven by regulatory decisions or market crashes rather than organic growth**. Volume on a DEX isn't a steady hum that rises with adoption; it's spiky, and the spikes are mostly headlines and fear — ETF approvals, liquidation cascades, all-time highs, election results.

That only becomes visible once you put the raw trades next to a calendar. The trades alone can't tell you *why* a day was big; the value is in the join between on-chain data and the outside world.

## The dashboard

The full analysis — the daily-volume chart, the August black-swan detail, and the query behind the table — lives on Dune: [Uniswap V3 Volume Analysis 2024](https://dune.com/flowcl786/uniswap-v3-volume-2024). It's public and interactive.
