---
classes: wide
layout: project
title: "Gist, Blur, and Attention"
excerpt: "Analyzing Temporally Averaged Visual Representations for Alignment with Human Engagement Signals"
permalink: /projects/gist-blur-attention/
date: 2024-05-01
tags:
  - computer-vision
  - machine-learning
  - human-computer-interaction
  - computer-science
header:
  teaser: /assets/images/projects/gist-blur-attention.jpg
sidebar:
  - title: "Role"
    text: "Lead Researcher"
  - title: "Course"
    text: "MIT 6.8300 Advances in Computer Vision"
  - title: "Responsibilities"
    text: "Research design, model implementation, data analysis"
  - title: "Developed Skills"
    text: "Computer vision, deep learning, VLM analysis"
gallery:
  - url: '/assets/images/projects/gist-blur-attention.jpg'
    image_path: '/assets/images/projects/gist-blur-attention.jpg'
    alt: "Temporally Averaged Visual Representations"
    title: "Visual comparison of averaging methods"
---

## Project Overview

Standard Vision-Language Models (VLMs) excel at semantic extraction from raw video frames, but it remains unclear if these machine-centric representations align with human temporal integration and memory processes. This research investigates whether temporally averaged representations can better capture human engagement with visual content than standard VLM approaches.

## Methodology

We designed a comparative study between two processing pathways:

1. **Standard VLM Analysis**: Direct application of Llava-OneVision on raw video clips
2. **Average Image Pathway**: A human-inspired alternative that:
   - Samples W frames uniformly across 10-second clips
   - Averages these frames to emphasize spatio-temporal stability (scene gist)
   - Extracts ResNet-50 features from the averaged images

We conducted an ablation study varying W (the number of frames sampled and averaged) using a dataset of 61 city walk videos (50,380 clips) and evaluated the alignment with human engagement through YouTube replay data.

## Key Findings

Our research revealed that:

- **Temporal integration via fully averaged images (W=Full)** yielded features that significantly outperformed direct VLM embeddings
- Average Image Pathway achieved a **36.4% improvement** in R² over VLM analysis (R² of 0.106 vs. 0.0777)
- Representations emphasizing stable scene content through temporal integration correlate better with human engagement than VLM-derived semantics from raw frames
- This suggests human visual perception may prioritize stability and consistency in scene elements when determining engagement

{% include gallery caption="Temporally Averaged Visual Representations" %}

## Contributions

This research:

1. Introduces temporal averaging as an analytical probe for human-aligned representations
2. Demonstrates the superior alignment of features from comprehensively averaged images over direct VLM processing
3. Underscores the value of incorporating human-inspired temporal integration for developing video understanding models more attuned to human perception

## Future Work

While our findings are promising, we acknowledge limitations including the proxy nature of replay signals. Future work could include:

- Direct human validation studies to verify engagement correlations
- Exploring hybrid approaches combining temporal averaging with semantic understanding
- Extending the analysis to different types of video content beyond city walks 