---
title: "Methods for Stabilizing Models Across Large Samples of Projects (with case studies on Predicting Defect and Project Health)"
author: "Suvodeep Majumder, Tianpei Xia, Rahul Krishna, Tim Menzies"
date: "2022-01-01"
journal: "IEEE/ACM 19th International Conference on Mining Software Repositories (MSR `22)"
external_url: "https://ieeexplore.ieee.org/abstract/document/9796244"
description: "Despite decades of research, Software Engineering (SE) lacks widely accepted models (that offer precise quantitative stable predictions) about what factors most influence software quality."
tags:
  - "MSR"
  - "2022"
---
## Abstract

Despite decades of research, Software Engineering (SE) lacks widely accepted models (that offer precise quantitative stable predictions) about what factors most influence software quality. This paper provides a promising result showing such stable models can be generated using a new transfer learning framework called “STABILIZER”. Given a tree of recursively clustered projects (using project meta-data), STABILIZER promotes a model upwards if it performs best in the lower clusters (stopping when the promoted model performs worse than the models seen at a lower level). The number of models found by STABILIZER is minimal: one for defect prediction (756 projects) and less than a dozen for project health (1628 projects). Hence, via STABILIZER, it is possible to find a few projects which can be used for transfer learning and make conclusions that hold across hundreds of projects at a time. Further, the models produced in this manner offer predictions that perform as well or better than the prior state-of-the-art. To the best of our knowledge, STABILIZER is order of magnitude faster than the prior state-of-the-art transfer learners which seek to find conclusion stability, and these case studies are the largest demonstration of the generalizability of quantitative predictions of project quality yet reported in the SE literature. In order to support open science, all our scripts and data are online at https://github.com/Anonymous633671/STABILIZER.

## Details

- **Venue:** IEEE/ACM 19th International Conference on Mining Software Repositories (MSR `22)
- **Year:** 2022
- **Authors:** Suvodeep Majumder, Tianpei Xia, Rahul Krishna, Tim Menzies
- **Links:** [HTML](https://ieeexplore.ieee.org/abstract/document/9796244) · [PDF](https://arxiv.org/pdf/1911.04250.pdf)

