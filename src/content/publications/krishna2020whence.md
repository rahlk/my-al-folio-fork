---
title: "Whence to learn? transferring knowledge in configurable systems using beetle"
author: "Rahul Krishna, Vivek Nair, Pooyan Jamshidi, Tim Menzies"
date: "2020-01-01"
journal: "IEEE Transactions on Software Engineering"
external_url: "https://arxiv.org/abs/1911.01817"
description: "As software systems grow in complexity and the space of possible configurations increases exponentially, finding the near-optimal configuration of a software system becomes challenging."
tags:
  - "TSE"
  - "2020"
  - "Selected"
---
## Abstract

As software systems grow in complexity and the space of possible configurations increases exponentially, finding the near-optimal configuration of a software system becomes challenging. Recent approaches address this challenge by learning performance models based on a sample set of configurations. However, collecting enough sample configurations can be very expensive since each such sample requires configuring, compiling, and executing the entire system using a complex test suite. When learning on new data is too expensive, it is possible to use *Transfer Learning* to "transfer" old lessons to the new context. Traditional transfer learning has a number of challenges, specifically, (a) learning from excessive data takes excessive time, and (b) the performance of the models built via transfer can deteriorate as a result of learning from a poor source. To resolve these problems, we propose a novel transfer learning framework called BEETLE, which is a "bellwether"-based transfer learner that focuses on identifying and learning from the most relevant source from amongst the old data. This paper evaluates BEETLE with 57 different software configuration problems based on five software systems (a video encoder, an SAT solver, a SQL database, a high-performance C-compiler, and a streaming data analytics tool). In each of these cases, BEETLE found configurations that are as good as or better than those found by other state-of-the-art transfer learners while requiring only a fraction (1/7th) of the measurements needed by those other methods. Based on these results, we say that BEETLE is a new high-water mark in optimally configuring software.

## Details

- **Venue:** IEEE Transactions on Software Engineering
- **Year:** 2020
- **Authors:** Rahul Krishna, Vivek Nair, Pooyan Jamshidi, Tim Menzies
- **Links:** [HTML](https://arxiv.org/abs/1911.01817) · [PDF](https://arxiv.org/pdf/1911.01817)

