---
title: "Statistical + Deep Learning Models for Time-Series Prediction"
lede: "MSc thesis — testing whether letting a neural network model the leftover errors of a statistical forecaster beats either model alone, across five very different datasets."
order: 3
featured: false
where: "National Dong Hwa University"
when: "2021 – 2023"
role: "Researcher (MSc thesis)"
stack: ["Python", "pandas", "Keras", "ARIMA", "SMA", "LSTM"]
scale: "5 datasets · finance, environment, public health"
code: "Not published"
---

## Context

Statistical models (ARIMA, SMA) capture the linear, trend part of a series well; an LSTM captures non-linear structure. Could each do the part it's good at? I tested this across five deliberately different datasets — Apple and Bitcoin prices, coffee futures, PM2.5 air quality, and Covid-19 deaths — so the finding wouldn't be tied to one kind of data.

## Approach

The hybrid is a residual design: the statistical model makes the forecast, an LSTM is then trained on what it got wrong (the residuals) and adds that correction back. I built the preprocessing and experiment pipeline in Python (pandas, Keras) and compared two hybrids — SMA-LSTM and ARIMA-LSTM — against their plain statistical and plain-LSTM baselines, by MAE and RMSE on every dataset.

## Outcome

- The SMA-based hybrid improved on the statistical baseline across all five datasets, with the clearest gains on the more volatile series (Apple, Bitcoin, PM2.5 air quality).
- The ARIMA-based hybrid was inconsistent: it leaned heavily on the base ARIMA, whose residuals were often too volatile for the LSTM to improve on — the clear exception being Covid-19, whose smoother residuals did benefit.
- The takeaway: a statistical model's interpretability and an LSTM's non-linear feature extraction can add up — but only when the residuals the network has to learn are themselves learnable.
