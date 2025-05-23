---
classes: wide
layout: project
title: "Gist, Blur, and Attention | Analyzing Temporally Averaged Visual Representations"
excerpt: "Analyzing Temporally Averaged Visual Representations for Alignment with Human Engagement Signals"
permalink: /projects/gist-blur-attention/
date: 2025-05-10
tags:
  - computer-vision
  - machine-learning
  - human-computer-interaction
  - computer-science
header:
  teaser: /assets/images/projects/gist-blur-attention/Average Image Pathway_samples.png
sidebar:
  - title: "Role"
    text: "Lead Researcher"
  - title: "Course"
    text: "MIT 6.8300 Advances in Computer Vision (Spring 2025)"
  - title: "Responsibilities"
    text: "Research design, model implementation, data analysis"
  - title: "Developed Skills"
    text: "Computer vision, deep learning, VLM analysis, temporal processing"
gallery:
  - url: '/assets/images/projects/gist-blur-attention.jpg'
    image_path: '/assets/images/projects/gist-blur-attention.jpg'
    alt: "Temporally Averaged Visual Representations"
    title: "Visual comparison of averaging methods"
---

<style>
.caption {
    text-align: center;
    font-size: 0.9em;
    color: #666;
    margin-top: 5px;
    margin-bottom: 20px;
}

.full-width-image {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    margin: 20px auto;
}

.medium-width-image {
    width: 90%;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    margin: 20px auto;
    display: block;
}

.side-by-side {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}

.side-by-side img {
    width: 49%;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.hypothesis {
    width: 90%;
    background-color: #f5f5f7;
    border-radius: 12px;
    font-family: 'Courier New', monospace;
    font-size: 16px;
    text-align: center;
    margin: 20px auto;
    padding: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

table {
    width: 90%;
    margin: 30px auto;
    border-collapse: collapse;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    border-radius: 8px;
    overflow: hidden;
}

th {
    background: #f5f5f7;
    padding: 10px;
    text-align: center;
}

td {
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #eee;
}

tr:last-child td {
    border-bottom: none;
}
</style>

<img src="/assets/images/projects/gist-blur-attention/Average Image Pathway_samples.png" alt="Visualization of Average Image Pathway with Different W Values" class="full-width-image">
<p class="caption"><b>Figure 1:</b> Visualization of the Average Image Pathway showing how frames are sampled and averaged to create representations that emphasize stable elements while minimizing transient details.</p>

## Abstract

Standard Vision-Language Models (VLMs) excel at semantic extraction from raw video frames, but it remains unclear if these machine-centric representations align with human temporal integration and memory processes relevant to phenomena like viewer engagement or memory salience. This paper investigates this alignment by contrasting standard VLM analysis (Llava-OneVision on raw clips) with a human-inspired alternative: the Average Image Pathway. This pathway generates representations by sampling W frames uniformly across the full 10-second clip duration and averaging them, explicitly modeling temporal integration to emphasize spatio-temporal stability akin to scene gist. We extract ResNet-50 features from these temporally averaged images. Our central hypothesis was that features from optimally averaged images would better align with human engagement signals (YouTube replay data) compared to direct VLM analysis. We conducted an ablation study varying W (the number of uniformly sampled and averaged frames) and performed a core comparison using a dataset of 61 city walk videos (50,380 clips) with regression models evaluated via cross-validation.

Our findings indicate that comprehensive temporal integration via **fully averaged images (W=Full)** yields ResNet-50 features that significantly outperform direct VLM embeddings in aligning with viewer replay signals, achieving a **36.4%** improvement in R² (R² of 0.106 for W=Full vs. 0.0777 for VLM). This suggests that representations emphasizing stable scene content, a product of temporal integration, are more indicative of human engagement than VLM-derived semantics from raw frames.

## 1. Introduction

### 1.1. Motivation: Aligning Machine Perception with Human Temporal Processing

Humans perceive dynamic scenes by continuously integrating visual information over time, forming stable representations that allow for understanding, recall, and judgments of interest. Modern AI, particularly large Vision-Language Models (VLMs), achieves impressive feats in video analysis by processing dense sequences of frames. However, standard VLM approaches typically focus on high-fidelity frame processing. **A fundamental question in computer vision arises**: do these machine-centric representations align with the integrative and abstractive processes underlying human visual memory and engagement?

<img src="/assets/images/projects/gist-blur-attention/Human vs. Machine Perception.png" alt="Human vs. Machine Perception" class="medium-width-image">
<p class="caption"><b>Figure 2:</b> Human perception involves temporal integration over time, while machine processing often analyzes individual frames at high fidelity. This fundamental difference motivates our research into representations that better align with human perceptual processes.</p>

### 1.2. Problem Statement and Research Gap

YouTube replay heatmaps provide a large-scale signal reflecting collective viewer re-engagement, potentially linked to interest, memory salience, or confusion. While VLMs can extract rich semantics from raw video clips (a "machine understanding" baseline), there is a **significant research gap** in evaluating whether representations inspired by human temporal integration – emphasizing stable structures over transient details – show better alignment with such behavioral signals.

<img src="/assets/images/projects/gist-blur-attention/youtube_heatmap.png" alt="YouTube Replay Heatmap Example" class="medium-width-image">
<p class="caption"><b>Figure 3:</b> Example of a YouTube replay heatmap showing viewer re-engagement patterns throughout a video. The peaks indicate moments of high collective interest that serve as our target signal for alignment with different visual representations.</p>

### 1.3. Proposed Approach: The Average Image Pathway with Variable Integration Density

To investigate this alignment, we propose and evaluate the Average Image Pathway. This approach is inspired by cognitive concepts of temporal integration and gist perception. For each 10-second video clip, we generate an "average image" I<sub>avg(W)</sub> by:

- Sampling W frames uniformly distributed across the clip's entire 10-second duration
- Calculating the pixel-wise average of these W sampled frames

This method explicitly models temporal integration, emphasizing stable scene elements and smoothing transient details. We treat W as a parameter to study how different levels of temporal sampling density affect alignment with human engagement.

<img src="/assets/images/projects/gist-blur-attention/Figure 3.png" alt="Averaging Process Illustration" class="full-width-image">
<p class="caption"><b>Figure 4:</b> Illustration of the Average Image Pathway process with varying W values. As W increases from 1 to "All", we observe a transition from individual frame representation to complete temporal integration, demonstrating how stable scene elements become progressively more prominent.</p>

### 1.4. Research Questions and Hypotheses

This study addresses two fundamental computer vision questions:

1. **(Ablation)** How does the density of temporal integration, controlled by the number of uniformly sampled and averaged frames W, affect the alignment with replay scores?
2. **(Core Comparison)** Do features derived from the optimally averaged images exhibit a stronger correlation with viewer replay scores compared to features derived from direct VLM analysis of the raw video clip?

Our central hypothesis is that an optimal level of temporal sampling and averaging will yield ResNet-50 features from averaged images whose correlation with viewer replay scores better reflects principles of human temporal integration compared to semantic embeddings from direct VLM processing of the raw clip.

<div class="hypothesis">
  H: ∃W* such that Corr(F<sub>ResNet-50</sub><sup>avg(W*)</sup>, Replay) > Corr(F<sub>VLM</sub><sup>direct</sup>, Replay)
</div>

## 2. Methodology

### 2.1. Dataset and Preprocessing

We utilize a dataset of N=61 "city walk" videos (duration > 20 min, with replay heatmaps). This genre offers long, continuous streams of egocentric visual information from rich and dynamic urban environments. The dataset is diverse, encompassing walks from over 30 different cities across 5 continents, varying lighting conditions, multiple filming styles, and diverse engagement patterns.

<img src="/assets/images/projects/gist-blur-attention/dataset_1_youtube_video.png" alt="Dataset Examples: City Walk Videos" class="medium-width-image">
<p class="caption"><b>Figure 5:</b> Examples from our city walk video dataset showing diverse urban environments. These egocentric walking videos provide naturalistic sequences with varying visual complexity, filming styles, and lighting conditions.</p>

<div class="side-by-side">
  <img src="/assets/images/projects/gist-blur-attention/dataset_des_1_histogram_sum_values.png" alt="Histogram of Replay Sum Values">
  <img src="/assets/images/projects/gist-blur-attention/dataset_des_3_scatter_sum_vs_standard_devi.png" alt="Scatter Plot of Sum vs Standard Deviation">
</div>
<p class="caption"><b>Figure 6:</b> Distribution of replay signal characteristics showing sum values (left) and their relationship with standard deviation (right), highlighting the diversity in engagement patterns across videos.</p>

### 2.2. Baseline: Direct Video VLM Analysis Pathway

This pathway generates a standard machine-centric semantic representation through direct analysis of video clips using Llava-OneVision-Qwen2-7B-OV, a state-of-the-art Vision-Language Model. The model analyzes uniformly sampled frames from each clip and generates keyword descriptions, which are then embedded using Sentence-BERT to create 384-dimensional feature vectors.

<div class="side-by-side">
  <img src="/assets/images/projects/gist-blur-attention/video_to_clips_1_the_video.png" alt="Original Video">
  <img src="/assets/images/projects/gist-blur-attention/video_to_clips_2_clips.png" alt="Processed Clips">
</div>
<p class="caption"><b>Figure 7:</b> Overview of the baseline Direct Video VLM Analysis pathway, showing the original video (left) and processed clips (right).</p>

### 2.3. Proposed Pathway: Average Image with Standard CNN Feature Analysis

Our Average Image approach is motivated by cognitive science research showing that humans naturally integrate information over time to form coherent impressions of dynamic scenes. By varying W (the number of frames used in averaging), we control the density of temporal integration:

- **Low W values (e.g., W=1):** Minimal temporal integration, capturing a single moment
- **Medium W values (e.g., W=10-50):** Moderate temporal integration
- **High W values (e.g., W=100):** Substantial temporal integration
- **Full averaging (W=All):** Complete temporal integration (~300 frames at 30fps)

<img src="/assets/images/projects/gist-blur-attention/w_comparison_grid.png" alt="Visual comparison of W values" class="medium-width-image">
<p class="caption"><b>Figure 8:</b> Visual comparison of temporal averaging across W values, from W=1 (single frame) to W=Full (all frames). Each row shows a different video clip with various levels of temporal integration. As W increases, stable scene elements become more prominent while transient objects become progressively blurred.</p>

## 3. Experiments and Results

### 3.1. Impact of Averaging Sample Size (W) on Alignment

We conducted a systematic evaluation of how different temporal averaging sample sizes (W) affect the alignment between visual representations and human engagement signals. Due to computational constraints, for W values 1 to 100, we performed an ablation study using a randomly selected subset of 1,000 clips. However, the "W=Full" condition was processed for the entire dataset of 50,380 clips.

<table>
  <thead>
    <tr>
      <th>Averaging Method</th>
      <th>Mean R²</th>
      <th>Mean MSE</th>
      <th>Sample Size</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>W=1</td><td>-1.013</td><td>0.0383</td><td>1000</td></tr>
    <tr><td>W=3</td><td>-0.773</td><td>0.0337</td><td>1000</td></tr>
    <tr><td>W=5</td><td>-0.705</td><td>0.0328</td><td>1000</td></tr>
    <tr><td>W=100</td><td>-0.676</td><td>0.0318</td><td>1000</td></tr>
    <tr><td style="font-weight: bold;">W=Full (~300)</td><td style="font-weight: bold;">-0.085</td><td style="font-weight: bold;">0.027</td><td style="font-weight: bold;">1000</td></tr>
    <tr><td style="font-weight: bold; background-color: #e6ffe6;">W=Full (~300)</td><td style="font-weight: bold; background-color: #e6ffe6;">0.106</td><td style="font-weight: bold; background-color: #e6ffe6;">0.0203</td><td style="font-weight: bold; background-color: #e6ffe6;">50380</td></tr>
  </tbody>
</table>
<p class="caption"><b>Table 1:</b> Performance metrics for different temporal averaging sample sizes (W), showing that W=Full achieves the best performance.</p>

<img src="/assets/images/projects/gist-blur-attention/w_value_ablation_with_full_1000.png" alt="Performance metrics across different W values" class="medium-width-image">
<p class="caption"><b>Figure 9:</b> Impact of temporal averaging window size (W) on performance metrics. W=Full evaluated on the complete dataset (far right, highlighted in green) achieves the strongest positive R² and the lowest MSE, establishing it as the optimal setting.</p>

### 3.2. Core Comparison: ResNet-50 Features vs VLM Embeddings

To directly test our central hypothesis, we compared ResNet-50 features from fully averaged images (W=Full) against VLM semantic embeddings. Our findings were decisive:

- **R² Performance:** ResNet-50 features from fully averaged images achieved an R² of 0.106 ± 0.011 versus 0.0777 ± 0.0080 for VLM embeddings, representing a 36.4% improvement
- **Per-Video Superiority:** ResNet-50 features outperformed VLM embeddings in 48 out of 61 videos (78.7%)

<img src="/assets/images/projects/gist-blur-attention/feature_comparison_r2_annotated.png" alt="R² Comparison Between Feature Types" class="medium-width-image">
<p class="caption"><b>Figure 10:</b> Performance comparison between different feature types showing R² scores (higher is better). ResNet-50 features from averaged images significantly outperform VLM embeddings, demonstrating superior alignment with human engagement signals.</p>

<img src="/assets/images/projects/gist-blur-attention/per_video_comparison.png" alt="Per-Video Performance Comparison" class="full-width-image">
<p class="caption"><b>Figure 11:</b> Per-video comparison of R² scores between ResNet-50 features and VLM embeddings. Videos are sorted by performance difference. The consistent superiority of ResNet-50 features (78.7% of videos) demonstrates the robustness of temporal averaging across diverse content types.</p>

### 3.3. Content-Dependent Performance Analysis

While our results show that ResNet-50 features from temporally averaged images generally outperform VLM embeddings, understanding when each approach excels provides valuable insights:

<div class="side-by-side">
  <img src="/assets/images/projects/gist-blur-attention/resnet_better_grid_continuous.png" alt="Videos where ResNet-50 features excel">
  <img src="/assets/images/projects/gist-blur-attention/vlm_better_grid_continuous.png" alt="Videos where VLM embeddings excel">
</div>
<p class="caption"><b>Figure 12:</b> Continuous frames from videos where ResNet-50 features from averaged images most outperform VLM embeddings (left) versus videos where VLM embeddings outperform ResNet-50 features (right).</p>

<div class="side-by-side">
  <img src="/assets/images/projects/gist-blur-attention/resnet_better_grid_sparse.png" alt="Sparse frames where ResNet-50 features excel">
  <img src="/assets/images/projects/gist-blur-attention/vlm_better_grid_sparse.png" alt="Sparse frames where VLM embeddings excel">
</div>
<p class="caption"><b>Figure 13:</b> Sparse frames sampled across videos where ResNet-50 features most outperform VLM embeddings (left) versus videos where VLM embeddings outperform ResNet-50 features (right).</p>

**Where Temporal Averaging Excels:**
- High visual consistency with dynamic camera movement
- Rich environmental textures
- Gradual scene evolution
- Crowded environments with transient elements

**Where Semantic Recognition Excels:**
- Text-rich environments
- Static camera positions
- Lower visual complexity with distinctive objects
- Distinctive architectural features
- Consistent lighting conditions

## 4. Discussion

### 4.1. Interpretation of Findings

Our results reveal a significant insight: representations emphasizing temporal stability through controlled averaging align better with viewer replay signals than standard frame-by-frame VLM analysis. The optimal approach, using ResNet-50 features from fully averaged images (W=Full), demonstrated a notable 36.4% improvement in alignment compared to VLM keyword embeddings.

This suggests that modeling temporal integration—a key aspect of human perception—yields representations more attuned to human engagement signals. While most video models focus on capturing motion and temporal dynamics, our results suggest that simple temporal integration through averaging can capture stable, semantically meaningful information that better aligns with human behavioral signals.

### 4.2. Computer Vision Implications

Our work has several important implications for computer vision research:

- **Representation Design:** Explicitly modeling temporal integration as an inductive bias can improve alignment with human-centric signals
- **Evaluation Metrics:** Human behavioral signals provide a different perspective on representation quality than traditional CV metrics
- **Model Architecture:** Video models might benefit from parallel pathways capturing both transient details and stable elements
- **Task Dependence:** While action recognition may benefit from fine temporal details, engagement prediction appears to benefit from stability

### 4.3. Limitations and Future Work

**Limitations:**
- YouTube replays are an imperfect proxy for cognitive states
- Our findings are based on city walk videos and may not generalize to all content types
- ResNet-50 is not optimized for potentially blurred averaged images

**Future Work:**

<img src="/assets/images/projects/gist-blur-attention/Human Validation.png" alt="Human Validation Approach" class="medium-width-image">
<p class="caption"><b>Figure 14:</b> Proposed human validation approach for future work. Users would watch a video clip and select which keyword list better reflects their memory and impression of the content.</p>

Future directions include:
- VLM Analysis of Averaged Images to compare semantic extraction
- Human validation studies to directly assess perceptual relevance
- Fine-tuning models specifically for temporally averaged inputs
- Integration with modern architectures like Video Transformers
- Exploring content-adaptive averaging techniques

## 5. Conclusion

This study investigated whether a human-inspired approach to video representation—temporal averaging of frames—can better align with viewer engagement signals compared to standard frame-by-frame processing. Through systematic experiments, we found that visual features extracted from temporally averaged images (W=Full) demonstrate significantly stronger correlation with YouTube replay signals than semantic embeddings from direct VLM analysis of raw clips.

Key findings:
1. Temporal averaging with comprehensive integration (W=Full) was identified as optimal
2. The success of standard CNN features on temporally averaged images suggests these stable visual features are highly relevant for viewer engagement
3. Simple pixel-averaging provides a computationally efficient way to incorporate temporal integration principles into video representation design

Our research lays groundwork demonstrating that by emulating human-like temporal processing, we can design video representations that offer better alignment with human engagement, advancing computer vision systems towards more perceptually-grounded understanding of dynamic scenes.

{% include gallery caption="Temporally Averaged Visual Representations" %} 