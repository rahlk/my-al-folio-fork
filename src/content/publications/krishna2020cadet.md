---
title: "CADET: A systematic method for debugging misconfigurations using counterfactual reasoning"
author: "Rahul Krishna, Md Shahriar Iqbal, Mohammad Ali Javidian, Baishakhi Ray, Pooyan Jamshidi"
date: "2020-01-01"
journal: "NeurIPS 2020 (Workshop on ML for Systems)."
external_url: "https://arxiv.org/abs/2010.06061"
description: "Modern computing platforms are highly-configurable with thousands of interacting configurations. However, configuring these systems is challenging. Erroneous configurations can cause unexpected non-functional faults."
tags:
  - "NeurIPS"
  - "2020"
---
## Abstract

Modern computing platforms are highly-configurable with thousands of interacting configurations. However, configuring these systems is challenging. Erroneous configurations can cause unexpected non-functional faults. This paper proposes CADET (short for Causal Debugging Toolkit) that enables users to identify, explain, and fix the root cause of non-functional faults early and in a principled fashion. CADET builds a causal model by observing the performance of the system under different configurations. Then, it uses casual path extraction followed by counterfactual reasoning over the causal model to: (a) identify the root causes of non-functional faults, (b) estimate the effects of various configurable parameters on the performance objective(s), and (c) prescribe candidate repairs to the relevant configuration options to fix the non-functional fault. We evaluated CADET on 5 highly-configurable systems deployed on 3 NVIDIA Jetson systems-on-chip. We compare CADET with state-of-the-art configuration optimization and ML-based debugging approaches. The experimental results indicate that CADET can find effective repairs for faults in multiple non-functional properties with (at most) 17% more accuracy, 28% higher gain, and 40× speed-up than other ML-based performance debugging methods. Compared to multi-objective optimization approaches, CADET can find fixes (at most) 9× faster with comparable or better performance gain. Our case study of non-functional faults reported in NVIDIA's forum show that CADET can find 14 better repairs than the experts' advice in less than 30 minutes.

## Details

- **Venue:** NeurIPS 2020 (Workshop on ML for Systems).
- **Year:** 2020
- **Authors:** Rahul Krishna, Md Shahriar Iqbal, Mohammad Ali Javidian, Baishakhi Ray, Pooyan Jamshidi
- **Links:** [HTML](https://arxiv.org/abs/2010.06061) · [PDF](https://arxiv.org/pdf/2010.06061.pdf)

