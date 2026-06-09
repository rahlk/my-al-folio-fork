---
title: "ConEx: Efficient exploration of big-data system configurations for better performance"
author: "Rahul Krishna, Chong Tang, Kevin Sullivan, Baishakhi Ray"
date: "2020-01-01"
journal: "IEEE Transactions on Software Engineering"
external_url: "https://arxiv.org/abs/1910.09644"
description: "Configuration space complexity makes the big-data software systems hard to configure well. Consider Hadoop, with over nine hundred parameters, developers often just use the default configurations provided with Hadoop…"
tags:
  - "TSE"
  - "2020"
  - "Selected"
---
## Abstract

Configuration space complexity makes the big-data software systems hard to configure well. Consider Hadoop, with over nine hundred parameters, developers often just use the default configurations provided with Hadoop distributions. The opportunity costs in lost performance are significant. Popular learning-based approaches to auto-tune software does not scale well for big-data systems because of the high cost of collecting training data. We present a new method based on a combination of Evolutionary Markov Chain Monte Carlo (EMCMC) sampling and cost reduction techniques to cost-effectively find better-performing configurations for big data systems. For cost reduction, we developed and experimentally tested and validated two approaches: using scaled-up big data jobs as proxies for the objective function for larger jobs and using a dynamic job similarity measure to infer that results obtained for one kind of big data problem will work well for similar problems. Our experimental results suggest that our approach promises to significantly improve the performance of big data systems and that it outperforms competing approaches based on random sampling, basic genetic algorithms (GA), and predictive model learning. Our experimental results support the conclusion that our approach has strongly demonstrated potential to significantly and cost-effectively improve the performance of big data systems.

## Details

- **Venue:** IEEE Transactions on Software Engineering
- **Year:** 2020
- **Authors:** Rahul Krishna, Chong Tang, Kevin Sullivan, Baishakhi Ray
- **Links:** [HTML](https://arxiv.org/abs/1910.09644) · [PDF](https://arxiv.org/pdf/1910.09644)

