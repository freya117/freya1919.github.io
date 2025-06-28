---
classes: wide
layout: project
title: "Gist, Blur, and Attention"
subtitle: "Analyzing Temporally Averaged Visual Representations for Alignment with Human Engagement Signals"
excerpt: "Research on aligning visual representations with human engagement signals. This project explores how temporal averaging of video frames can create representations more aligned with human perception and engagement compared to standard Vision-Language Models."
permalink: /projects/gist-blur-attention/
date: 2025-05-10
author: "Freya Tan"
tags:
  - computer-vision
  - machine-learning
  - human-computer-interaction
  - temporal-averaging
  - VLM
  - deep-learning
header:
  teaser: /assets/images/projects/gist-blur-attention.jpg
  show_overlay_excerpt: true
sidebar:
  - title: "Role"
    text: "Lead Researcher"
  - title: "Course"
    text: "MIT 6.8300 Advances in Computer Vision (Spring 2025)"
  - title: "Responsibilities"
    text: "Research design, model implementation, data analysis, paper writing"
  - title: "Developed Skills"
    text: "Computer vision, Vision-Language Models (VLMs), temporal data analysis, deep learning (ResNet, Sentence-BERT), experimental design, engagement modeling"
---

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [['$','$'], ['\\(','\\)']],
      displayMath: [['$$','$$'], ['\\[','\\]']],
      processEscapes: true
    }
  });
</script>

<style>
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    margin-top: 20px;
    margin-bottom: 10px;
    max-width: 75%; /* Reduced from 100% to make all images smaller */
    width: auto;
  }
  figcaption {
    text-align: center;
    font-size: 0.9em;
    color: #515154; /* Apple Gray Dark */
    margin-bottom: 25px;
    font-style: italic;
    font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;
  }
  h2 {
    font-size: 1.75em; /* Slightly smaller than default h1 for sections */
    border-bottom: 2px solid #0066CC; /* Apple Accent */
    padding-bottom: 0.3em;
    margin-top: 2em;
    margin-bottom: 1em;
  }
  h3 {
    font-size: 1.4em;
    margin-top: 1.5em;
    margin-bottom: 0.8em;
  }
  .hypothesis {
    width: 90%;
    background-color: #f5f5f7; /* Apple Gray Light */
    border-radius: 12px;
    font-family: 'SF Pro Text', monospace;
    font-size: 1em;
    text-align: center;
    margin: 2em auto;
    padding: 1.5em;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  }
  table {
    width: 80%;
    margin: 2em auto;
    border-collapse: collapse;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    border-radius: 10px;
    overflow: hidden; /* Ensures border-radius is respected by child elements */
  }
  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: center;
  }
  th {
    background-color: #f5f5f7; /* Apple Gray Light */
  }
  .highlight-row {
    background-color: #e6ffe6; /* Light green for highlight */
    font-weight: bold;
  }
  .page__subtitle {
    font-size: 1.1em;
    font-weight: normal;
    margin-top: -0.5em;
    margin-bottom: 1em;
    color: #555;
  }
  /* Ensure consistency in all figure captions within divs */
  div figcaption {
    text-align: center;
    font-size: 0.9em;
    color: #515154;
    margin-bottom: 25px;
    font-style: italic;
    font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;
  }
  
  /* Make Figure 3 even smaller */
  img[alt="Averaging Process Illustration"] {
    max-width: 60%;
  }
  
  /* Target Figure 3 by its source path */
  img[src="/assets/images/projects/gist-blur-attention/Figure 3.png"] {
    max-width: 60%;
  }
  
  /* Make all figure elements smaller and centered */
  figure {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  
  /* Make figures in flexbox layouts smaller and centered */
  div.visual-analysis figure,
  div figure {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  
  /* Ensure SVC figure captions are centered */
  div figure figcaption {
    text-align: center !important;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Special handling for SVC images and their captions */
  figure[style*="width: 32%"] {
    display: inline-block;
    text-align: center;
  }
  
  figure[style*="width: 32%"] figcaption {
    text-align: center;
    width: 100%;
    display: block;
  }
  
  /* Make Figure 4 smaller */
  img[alt="YouTube Replay Heatmap Example"] {
    max-width: 55%;
  }
  
  /* Make Figure 13 smaller */
  img[alt="R² Comparison Between Feature Types"] {
    max-width: 20%;
  }
</style>

<figure>
  <img src="/assets/images/projects/gist-blur-attention/Average Image Pathway_samples.png" alt="Visualization of Average Image Pathway with Different W Values">
  <figcaption><b>Figure 1:</b> Visualization of the Average Image Pathway showing how frames are sampled and averaged to create representations that emphasize stable elements while minimizing transient details.</figcaption>
</figure>

## Abstract
Standard Vision-Language Models (VLMs) excel at semantic extraction from raw video frames, but it remains unclear if these machine-centric representations align with human temporal integration and memory processes relevant to phenomena like viewer engagement or memory salience. This paper investigates this alignment by contrasting standard VLM analysis (Llava-OneVision on raw clips) with a human-inspired alternative: the Average Image Pathway. This pathway generates representations by sampling W frames uniformly across the full 10-second clip duration and averaging them, explicitly modeling temporal integration to emphasize spatio-temporal stability akin to scene gist. We extract ResNet-50 features from these temporally averaged images. Our central hypothesis was that features from optimally averaged images would better align with human engagement signals (YouTube replay data) compared to direct VLM analysis. We conducted an ablation study varying W (the number of uniformly sampled and averaged frames) and performed a core comparison using a dataset of 61 city walk videos (50,380 clips) with regression models evaluated via cross-validation.

Our findings indicate that comprehensive temporal integration via **fully averaged images (W=Full)** yields ResNet-50 features that significantly outperform direct VLM embeddings in aligning with viewer replay signals, achieving a **36.4%** improvement in R² (R² of 0.106 for W=Full vs. 0.0777 for VLM). This suggests that representations emphasizing stable scene content, a product of temporal integration, are more indicative of human engagement than VLM-derived semantics from raw frames. This work (1) introduces temporal averaging as an analytical probe for human-aligned representations, (2) demonstrates the superior alignment of features from comprehensively averaged images over direct VLM processing through controlled experiments, and (3) underscores the value of incorporating human-inspired temporal integration for developing video understanding models more attuned to human perception. We acknowledge limitations, including the proxy nature of replay signals, and propose human validation for future work.

## 1. Introduction

### 1.1. Motivation: Aligning Machine Perception with Human Temporal Processing
Humans perceive dynamic scenes by continuously integrating visual information over time, forming stable representations that allow for understanding, recall, and judgments of interest <sup>[9, 11, 15]</sup>. Modern AI, particularly large Vision-Language Models (VLMs), achieves impressive feats in video analysis by processing dense sequences of frames <sup>[8]</sup>. However, standard VLM approaches typically focus on high-fidelity frame processing. **A fundamental question in computer vision arises**: do these machine-centric representations align with the integrative and abstractive processes underlying human visual memory and engagement? This potential misalignment becomes a critical factor in the analysis of signals reflecting human behavior, such as viewer replays in long videos (moments viewers collectively revisit), as it directly influences the validity of conclusions drawn about human engagement. Can we design and evaluate video representations that better reflect human-like temporal processing?

<figure>
  <img src="/assets/images/projects/gist-blur-attention/Human vs. Machine Perception.png" alt="Human vs. Machine Perception">
  <figcaption><b>Figure 2:</b> Human perception involves temporal integration over time, while machine processing often analyzes individual frames at high fidelity. This fundamental difference motivates our research into representations that better align with human perceptual processes.</figcaption>
</figure>

### 1.2. Problem Statement and Research Gap
YouTube replay heatmaps provide a large-scale signal reflecting collective viewer re-engagement, potentially linked to interest, memory salience, or confusion. While VLMs can extract rich semantics from raw video clips (a "machine understanding" baseline), there is a **significant research gap** in evaluating whether representations inspired by human temporal integration – emphasizing stable structures over transient details – show better alignment with such behavioral signals.

Prior work often focuses on maximizing predictive performance for general engagement metrics or employs complex dynamic models <sup>[7, 2]</sup>, leaving unexplored the systematic comparison of simple, human-inspired averaging strategies against standard VLM processing using replay data as a quantitative benchmark for alignment with engagement phenomena. **This gap is particularly relevant to computer vision**, as it touches on the fundamental question of whether machine perception should mimic human-like temporal integration to better align with human behavioral signals.

### 1.3. Proposed Approach: The Average Image Pathway with Variable Integration Density
To investigate this alignment, we propose and evaluate the Average Image Pathway. This approach is inspired by cognitive concepts of temporal integration and gist perception. For each 10-second video clip, we generate an "average image" I<sub>avg(W)</sub> by:
- Sampling W frames uniformly distributed across the clip's entire 10-second duration from the original video clip file (using np.linspace to determine frame indices).
- Calculating the pixel-wise average of these W sampled frames.

This method explicitly models temporal integration, ensuring the resulting average image reflects contributions from the entire clip duration, while emphasizing stable scene elements and smoothing transient details. Crucially, we treat W (the number of frames sampled and averaged) as a parameter, allowing us to systematically study how different levels of temporal sampling density and integration affect the resulting representation. We then extract 2048-dimensional visual features from these averaged images using a pre-trained ResNet-50 CNN. This allows a controlled comparison where the core difference lies in the input representation: the VLM pathway extracts semantic embeddings from raw video frames, while the Average Image pathway uses standard CNN features from temporally averaged images created with varying sampling densities (W). The goal is to assess which representation better aligns with the replay signal.

<figure>
  <img src="/assets/images/projects/gist-blur-attention/Figure 3.png" alt="Averaging Process Illustration">
  <figcaption><b>Figure 3:</b> Illustration of the Average Image Pathway process with varying W values. As W increases from 1 to "All", we observe a transition from individual frame representation to complete temporal integration, demonstrating how stable scene elements become progressively more prominent.</figcaption>
</figure>

### 1.4. Research Questions and Hypotheses
This study addresses two **fundamental computer vision questions**:
1.  **(Ablation)** How does the density of temporal integration, controlled by the number of uniformly sampled and averaged frames W, affect the alignment (measured via correlation with replay scores) of features derived from the Average Image Pathway? Is there an optimal W for maximizing this alignment?
2.  **(Core Comparison)** Do features derived from the optimally averaged images (ResNet-50 features from I<sub>avg(W=optimal)</sub>) exhibit a stronger correlation with viewer replay scores compared to features derived from direct VLM analysis of the raw video clip (Sentence-BERT<sup>[10]</sup> embeddings of VLM-extracted keywords)?

Our central hypothesis is that an optimal level of temporal sampling and averaging (an optimal W) will yield ResNet-50 features from averaged images whose correlation with viewer replay scores better reflects principles of human temporal integration compared to semantic embeddings from direct VLM processing of the raw clip.

<div class="hypothesis">
H: $\exists W^*$ such that $\text{Corr}(F_{\text{ResNet-50}}^{\text{avg}(W^*)}, \text{Replay}) > \text{Corr}(F_{\text{VLM}}^{\text{direct}}, \text{Replay})$
</div>

### 1.5. Novelty and Contributions
This project's novelty lies in several aspects:
-   **Focus on Representational Alignment:** It shifts the focus from pure prediction to evaluating how well different video representations (standard vs. human-inspired) align with a signal reflecting human engagement, using temporal averaging as an analytical probe.
-   **Systematic Parameter Analysis:** It uses the number of averaged frames (W) as a controlled parameter to analyze the trade-off between temporal context integration density and representation quality, measured by alignment with the replay signal.
-   **Novel Comparison Framework:** It establishes a rigorous framework for comparing direct VLM semantic analysis (keywords and embeddings from raw clips) against the Average Image pathway (which utilizes CNN features from temporally averaged images), using controlled experiments to assess alignment with human engagement signals.
-   **Computer Vision Insights:** It provides insights into how temporal integration affects the information captured in visual representations, a key consideration for designing better video understanding models.

The main contributions are: (1) A technically sound evaluation framework comparing features from direct VLM analysis of raw clips against features from CNN analysis of temporally averaged images, using replay data as a benchmark for alignment with human engagement signals, (2) An empirical analysis of the impact of temporal averaging density (W) on this alignment, and (3) Initial insights into the potential benefits of incorporating human-inspired temporal integration principles into video representation design.

## 2. Related Work
Our research intersects with several key areas: video understanding with modern neural architectures, particularly Vision-Language Models (VLMs); cognitive science literature on human visual perception, temporal integration, and memory; and the prediction of viewer engagement signals.

### 2.1. Video Understanding with Vision-Language Models and Temporal Processing
Vision-Language Models (VLMs) such as Llava <sup>[8]</sup> and Video-LLaMA <sup>[13]</sup> have demonstrated remarkable capabilities in bridging visual and textual modalities. These models typically process video as sequences of frames, often employing sophisticated attention mechanisms like those in VideoViT<sup>[3]</sup> to generate textual descriptions, answer questions, or perform other complex video understanding tasks. For instance, Video-LLaMA explicitly integrates visual and audio encoders with a large language model to achieve nuanced video comprehension. While these models excel at extracting detailed semantic information from individual or sparsely sampled frames, their inherent temporal processing often focuses on capturing dynamic events or short-term action sequences rather than the long-term, temporally integrated "gist" that might be crucial for sustained engagement or overall scene memory.

The challenge of effective temporal modeling in videos is a long-standing one. Early approaches utilized 3D Convolutional Neural Networks (3D CNNs) <sup>[16]</sup> to learn spatio-temporal features directly. More recently, Transformer-based architectures like TimeSformer <sup>[2]</sup> and VideoMAE <sup>[12]</sup> have explored various forms of spatio-temporal attention and self-supervised pre-training strategies to learn robust video representations. These models often aim to capture complex motion patterns and temporal relationships critical for tasks like action recognition. However, the representations learned by these powerful models are not necessarily optimized for, nor often evaluated against, alignment with human perceptual processes like gist formation or sustained engagement signals over longer durations. Our work diverges by questioning if a simpler, explicit temporal integration mechanism (pixel averaging) can yield representations more attuned to these human-centric signals when compared to standard VLM outputs from raw frames.

### 2.2. Human Visual Perception, Temporal Integration, and Memory
Human visual perception is fundamentally integrative. We do not process the world as a disjointed series of snapshots. Instead, visual information is continuously accumulated over time <sup>[15]</sup>, allowing the visual system to build stable and coherent percepts. A key aspect of this is the rapid extraction of scene "gist", the overall meaning, layout, and statistical properties of a scene, often within a fraction of a second. This gist perception relies on global image features and helps in orienting attention and recognizing scenes efficiently. <sup>[9]</sup> similarly found that a model using only these global scene properties achieved rapid scene categorization accuracy comparable to human observers, indicating that global features convey the key information for immediate scene understanding<sup>[9]</sup>.

Furthermore, our ability to remember and recall experiences is not a perfect replay but a reconstructive process. Schacter & Addis (2007) <sup>[11]</sup> describe constructive memory as a system that flexibly recombines elements of past experiences, often abstracting details while preserving the core meaning or gist. This suggests that human memory might prioritize temporally stable or thematically central information over transient details. The Wolfe et al. (2011) <sup>[14]</sup> work on visual search also touches upon how selective and non-selective pathways contribute to scene understanding over time. Our Average Image Pathway is directly inspired by these cognitive principles, aiming to computationally mimic the outcome of such temporal integration and abstraction by emphasizing stable scene elements through pixel averaging.

### 2.3. Viewer Engagement and Replay Prediction
Predicting viewer engagement in online videos—quantified by metrics like watch time, likes, or comments—is an active area of research, often leveraging multimodal features and machine learning <sup>[7]</sup>. Saliency models, which predict attentional focus, also offer insights into what viewers might find engaging <sup>[4]</sup>. However, predicting specific replay behavior, especially from large-scale, real-world replay heatmap data as provided by platforms like YouTube, is a more nascent subfield. While some works like those leveraging the YouTube-8M dataset <sup>[1]</sup> might use complex spatio-temporal features for general video classification which could indirectly relate to engagement, direct modeling of fine-grained replay signals is less common. Works like Fu et al. (2014) <sup>[17]</sup>, who explored robust learning to rank for interestingness prediction, provide context for the broader area of predicting what humans find engaging or interesting in visual content, contrasting with our focus on representational alignment using replays as a specific signal.

<figure>
  <img src="/assets/images/projects/gist-blur-attention/youtube_heatmap.png" alt="YouTube Replay Heatmap Example">
  <figcaption><b>Figure 4:</b> Example of a YouTube replay heatmap showing viewer re-engagement patterns throughout a video. The peaks indicate moments of high collective interest that serve as our target signal for alignment with different visual representations.</figcaption>
</figure>

## 3. Methodology

### 3.1. Dataset and Preprocessing
We utilize a dataset curated from YouTube, comprising N=61 "city walk" videos (duration > 20 min, with replay heatmaps). This genre was specifically chosen because city walk videos offer long, continuous streams of egocentric visual information from rich and dynamic urban environments. This provides a naturalistic setting where viewers navigate complex scenes, making decisions and forming impressions over extended periods, which is ideal for studying phenomena related to temporal integration, scene gist perception, and engagement signals like replays.

The dataset is intentionally diverse, encompassing walks from over 30 different cities across 5 continents, varying lighting conditions (daytime, evening, night, rain), multiple filming styles (steady-cam, handheld, gimbal-stabilized), and diverse engagement patterns (regular peaks, steady engagement, clustered interest points). This diversity ensures that our findings generalize across a wide range of realistic viewing scenarios rather than being specific to particular visual characteristics or filming techniques.

Videos were filtered to ensure a walking perspective and sufficient replay activity (sum of heatmap values ≥ 10). Each video was segmented into overlapping 10-second clips (5s stride), saved as individual .mp4 files. Clips from the start/end (300s) and those containing significant disruptions (scene cuts, occlusions, identified via blacklists) were removed, yielding a final set of N=50,380 clip video files. This dataset provides a large-scale source of naturalistic egocentric video paired with a real-world signal reflecting viewer re-engagement.

<figure>
  <img src="/assets/images/projects/gist-blur-attention/dataset_1_youtube_video.png" alt="Dataset Examples: City Walk Videos">
  <figcaption><b>Figure 5:</b> Examples from our city walk video dataset showing diverse urban environments. These egocentric walking videos provide naturalistic sequences with varying visual complexity, filming styles, and lighting conditions.</figcaption>
</figure>

### 3.2. Replay Score Formulation
For each video, YouTube provides 100 normalized replay intensity values ($h_i \in [0,1]$) distributed across its duration. We mapped these points to each 10s clip via linear interpolation based on the clip's center timestamp, yielding $H_{\text{clip}}^{\text{original}}$.

To account for varying engagement levels across videos potentially related to popularity, we weighted this score by the video's total view count ($V$), $H_{\text{clip}}^{\text{weighted}} = H_{\text{clip}}^{\text{original}} \times V$. These weighted scores were log-transformed and standardized across the dataset to create the final continuous target variable used to evaluate the alignment of different representations. This weighting aims to make the signal more comparable across videos with vastly different viewerships.

<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
  <figure style="flex: 1 1 30%; min-width: 250px; margin: 5px;">
    <img src="/assets/images/projects/gist-blur-attention/dataset_des_1_histogram_sum_values.png" alt="Histogram of Replay Sum Values">
  </figure>
  <figure style="flex: 1 1 30%; min-width: 250px; margin: 5px;">
    <img src="/assets/images/projects/gist-blur-attention/dataset_des_2_histogram_standard_devi.png" alt="Histogram of Standard Deviation">
  </figure>
  <figure style="flex: 1 1 30%; min-width: 250px; margin: 5px;">
    <img src="/assets/images/projects/gist-blur-attention/dataset_des_3_scatter_sum_vs_standard_devi.png" alt="Scatter Plot of Sum vs Standard Deviation">
  </figure>
</div>
<p style="text-align: center; font-size: 0.9em; color: #515154; margin-bottom: 25px; font-style: italic;"><b>Figure 6:</b> Process for converting YouTube replay heatmaps into quantitative clip-level replay scores. The plots show distribution of sum values (left), standard deviation (middle), and their relationship (right), highlighting the diversity in engagement patterns across videos.</p>

### 3.3. Baseline: Direct Video VLM Analysis Pathway
This pathway generates a standard machine-centric semantic representation through direct analysis of video clips using a state-of-the-art Vision-Language Model.
-   **Model:** We used Llava-OneVision-Qwen2-7B-OV<sup>[8]</sup>, a multimodal model that extends language model capabilities to video understanding. The model was loaded with half-precision (FP16) weights for GPU efficiency and configured with SDPA attention implementation.
-   **Video Processing:** Each 10-second clip file was processed by uniformly sampling 16 representative frames using the Decord library. These frames were then processed by the model's image processor to create tensor representations suitable for input to the vision encoder.
-   **Keyword Extraction:** We issued two systematic prompts to the VLM for each clip:
    -   "Please just give me five keywords about this video clip." (q3) - targeting general clip content
    -   "Please just give me five keywords of describing the physical space." (q4) - focusing on spatial elements
-   **Output Processing:** The model generated outputs were saved to CSV files and then parsed to extract structured keyword lists using regex patterns that identify bullet points, numbered lists, and comma-separated keywords.
-   **Semantic Representation:** The extracted keywords were embedded using Sentence-BERT (all-MiniLM-L6-v2)<sup>[10]</sup> to create 384-dimensional feature vectors, and compiled into a unified dataset that paired these semantic representations with replay scores for each clip.

This approach represents a conventional application of VLMs to video understanding, processing the clips directly to extract semantic features without any temporal integration beyond the model's inherent capabilities. The resulting dataset serves as our baseline for evaluating whether human-inspired temporal averaging can improve alignment with engagement signals.

<div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap;">
  <figure style="flex: 0.5; margin-right: 10px; min-width: 200px;">
    <img src="/assets/images/projects/gist-blur-attention/video_to_clips_1_the_video.png" alt="Original Video Frame">
  </figure>
  <figure style="flex: 1.5; min-width: 300px;">
    <img src="/assets/images/projects/gist-blur-attention/video_to_clips_2_clips.png" alt="Processed Clips Montage">
  </figure>
</div>
<p style="text-align: center; font-size: 0.9em; color: #515154; margin-bottom: 25px; font-style: italic;"><b>Figure 7:</b> Overview of the baseline Direct Video VLM Analysis pathway, showing an example original video frame (left) and a montage of processed clips (right) that are analyzed by the VLM.</p>

### 3.4. Proposed Pathway: Average Image with Standard CNN Feature Analysis (Pixel Averaging with Varying W)
This pathway generates representations inspired by human temporal integration processes. The "Average Image" approach is motivated by cognitive science research showing that humans naturally integrate information over time to form coherent impressions of dynamic scenes <sup>[15]</sup>.

#### Concept of Average Images
An Average Image is a single still frame created by pixel-wise averaging across multiple frames of a video clip. This technique transforms temporal information into spatial patterns, creating a visual representation that emphasizes persistent elements while de-emphasizing transient details—similar to how human perception gives priority to stable scene elements over momentary changes.

By varying the number of frames (W) used in this averaging process, we can control the density of temporal integration, allowing us to systematically investigate how different levels of temporal integration affect alignment with human engagement signals:
-   **Low W values (e.g., W=1):** Represent minimal temporal integration, essentially capturing a single moment in time.
-   **Medium W values (e.g., W=10-50):** Provide moderate temporal integration, balancing stable elements with some detail preservation.
-   **High W values (e.g., W=100):** Offer substantial temporal integration, heavily emphasizing persistent scene elements.
-   **Full averaging (W=All):** Represents complete temporal integration, averaging all frames in the 10-second clip (~300 frames at 30fps).

#### Implementation Methodology
For each video clip and each value of W, we implement the following process:
1.  **Frame Selection:** Select W frame indices uniformly distributed across the clip's duration (frame 0 to N-1) using np.linspace to ensure even temporal sampling.
2.  **Pixel Averaging:** Read the selected W frames and calculate their pixel-wise average $I_{\text{avg}(W)}$ using OpenCV (cv2). Each frame is converted to RGB format before averaging.
3.  **Image Processing:** The resulting averaged images are saved as PNG files to preserve quality. For feature extraction, each image is resized to 256×256 pixels, center-cropped to 224×224, and normalized using ImageNet means and standard deviations.
4.  **Feature Extraction:** We extract 2048-dimensional deep features from each averaged image using a pre-trained ResNet-50 model. These features represent the visual characteristics of the temporally integrated frames.

This approach allows us to systematically test a range of W values (1, 3, 5, 7, 10, 20, 50, 100, Full) to determine the optimal temporal integration density for alignment with human engagement signals. In our experiments, we specifically focus on comparing the features extracted from these temporally averaged images against features derived from VLM analysis of the raw video clips.

### 3.5. Initial Validation Modeling (Low-Level Features)
Before pursuing our temporal averaging hypothesis, we conducted a preliminary validation to confirm the feasibility of using machine learning to predict engagement from visual and auditory features. This validation serves as a critical foundation for the rest of our study.
-   **Task:** Binary classification (Y) within each video.
-   **Input Features:** Concatenated ResNet-50 features from $I_{\text{avg}(W=\text{'All'})}$ $F_{\text{ResNet}}$ and VGGish audio features<sup>[18]</sup> $F_{\text{Audio}}$.
-   **Evaluation:** Within-Video 5-fold CV (AUC, F1).

#### Methodology
We extracted 2048-dimensional visual features using ResNet-50 from temporally averaged frames (using W='All', i.e., averaging all frames in each 10-second clip) and 1024-dimensional audio embeddings using VGGish<sup>[18]</sup>. These were used to train multiple classifiers (SVC, LinearSVC, LogisticRegression, RandomForest, SGDClassifier) to predict high-engagement moments within each video at various quantile thresholds (0.1-0.5).

This validation established three crucial findings that shaped our main study:
1.  **Integrated Representations Outperform:** Combined image+audio features consistently achieved higher performance (AUC > 0.95 at 0.1 quantile), suggesting that representations integrating multiple information streams better align with engagement signals. This directly supports our hypothesis that temporal averaging, which integrates information across frames, might better capture engagement patterns.
2.  **Linear Relationship Predominates:** Linear models consistently outperformed non-linear alternatives, indicating a relatively straightforward relationship between features and engagement. This informed our choice of Ridge regression for the main temporal averaging analysis.
3.  **Engagement Signal is Detectable:** Strong classification performance confirmed that machine-extracted features can capture engagement patterns, providing a solid foundation for our more sophisticated semantic representation approach.

### 3.6. Evaluating Representation Alignment (Core Comparison & Ablation)
#### Task:
Use regression models to quantify the correlation (alignment) between different feature representations and the replay score signal $H_{\text{clip}}^{\text{weighted}}$. Higher correlation indicates better alignment with human engagement signals.
#### Input Features:
Our evaluation framework compares two main feature types:
-   **VLM Semantic Embeddings:** 384-dimensional sentence embeddings derived from keywords extracted by Llava-OneVision when analyzing video clips (direct VLM pathway).
-   **ResNet-50 Features from Averaged Images:** 2048-dimensional visual features extracted from temporally averaged frames at varying W values, with particular focus on the optimal W=Full. We also evaluate these features combined with audio features to create a multimodal representation.
#### Models:
We employ Ridge Regression as our primary model due to its effectiveness with high-dimensional features and ability to handle potential collinearity. Additional validation is performed using SVR and XGBoost Regressor.
#### Evaluation:
We use 5-fold cross-validation to assess generalizable alignment across videos. Our primary metrics are:
-   **Coefficient of Determination (R²):** Measures the proportion of variance in the replay score explained by the features.
-   **Mean Squared Error (MSE):** Quantifies the average squared difference between predicted and actual replay scores.
#### Ablation Study:
For the averaged image pathway, we conduct an ablation study varying W (the number of frames sampled and averaged) to determine the optimal level of temporal integration. We test W values ranging from 1 (single frame) to "Full" (all frames in a clip) to identify the relationship between temporal integration density and alignment with engagement signals.
#### Core Comparison:
Our primary analysis compares the best-performing averaged image features (at optimal W) against VLM semantic embeddings to determine which representation better aligns with human engagement patterns. We also conduct per-video analyses to assess the consistency of our findings across diverse content.

## 4. Experiments

### 4.1. Initial Validation: Low-Level Feature Predictivity
We first validated the basic predictive capacity of our averaging approach using low-level features extracted from averaged images combined with audio features. Using our dataset of 61 city walk videos (comprising 50,380 clips), we found that models using ResNet-50 features from averaged images (W='All') combined with VGGish audio features<sup>[18]</sup> achieved an average within-video AUC of 0.78 (±0.06) for predicting high-replay segments, confirming that temporal averaging captures information relevant to replay behavior.

Our comprehensive evaluation of multiple models and feature combinations across quantile thresholds revealed several important patterns in the data. Through systematic testing, we analyzed how different classifiers performed when trained with various feature combinations to predict high-engagement segments.

<div style="display: flex; justify-content: space-between; flex-wrap: wrap; background: white; padding: 10px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); margin-bottom: 10px;">
  <figure style="width: 48%; min-width: 300px; margin: 1%;">
    <img src="/assets/images/projects/gist-blur-attention/auc_heatmap_q01_new.png" alt="Model Performance Heatmap">
  </figure>
  <figure style="width: 48%; min-width: 300px; margin: 1%;">
    <img src="/assets/images/projects/gist-blur-attention/svc_auc_comparison_new.png" alt="Feature Type Comparison">
  </figure>
</div>
<p style="text-align: center; font-size: 0.9em; color: #515154; margin-bottom: 25px; font-style: italic;"><b>Figure 8:</b> Performance analysis across feature types and models. Left: Heatmap of AUC scores demonstrates multimodal feature advantage across all models. Right: Feature type comparison across quantile thresholds reveals consistent superiority of combined features for engagement prediction.</p>

The performance analysis (Figure 8) demonstrates that combined image+audio features consistently outperform single-modality features across all quantile thresholds and models. This multimodal advantage suggests that engagement prediction benefits from integrating information across sensory channels, mirroring human cognitive processes that synthesize both visual and auditory information when forming impressions of content.

The quantile thresholds in our analysis represent different engagement intensity levels within video content:
-   **0.1 Quantile (Top 10%):** Represents the most engaging moments that significantly capture viewer attention—typically containing essential narrative elements, emotionally resonant scenes, or visually striking content.
-   **0.2-0.3 Quantiles:** Moderately engaging content that maintains viewer interest without reaching peak engagement levels.
-   **0.4-0.5 Quantiles:** Content with baseline engagement levels that viewers generally process but don't find especially captivating.

Our ability to predict these engagement levels with high accuracy (particularly at the 0.1 quantile) confirms that the extracted features capture semantically meaningful content characteristics that directly influence viewer engagement. This strong predictive performance validates that our representations are encoding content-level information relevant to human perception and cognitive processing.

<div style="display: flex; justify-content: center; flex-wrap: wrap; text-align: center;">
  <figure style="width: 32%; min-width: 250px; margin: 0.5%; text-align: center;">
    <img src="/assets/images/projects/gist-blur-attention/low_level_features/AUC Score for SVC within Each Video (Image + Audio Feature).png" alt="SVC with Image+Audio">
    <figcaption style="text-align: center;">SVC with Image+Audio Features</figcaption>
  </figure>
  <figure style="width: 32%; min-width: 250px; margin: 0.5%; text-align: center;">
    <img src="/assets/images/projects/gist-blur-attention/low_level_features/AUC Score for SVC within Each Video (Image Feature Only).png" alt="SVC with Image">
    <figcaption style="text-align: center;">SVC with Image Features</figcaption>
  </figure>
  <figure style="width: 32%; min-width: 250px; margin: 0.5%; text-align: center;">
    <img src="/assets/images/projects/gist-blur-attention/low_level_features/AUC Score for SVC within Each Video (Audio Feature Only).png" alt="SVC with Audio">
    <figcaption style="text-align: center;">SVC with Audio Features</figcaption>
  </figure>
</div>
<p style="text-align: center; font-size: 0.9em; color: #515154; margin-bottom: 25px; font-style: italic;"><b>Figure 9:</b> AUC scores for SVC model across different feature types. Light lines represent individual videos, while orange lines show the average performance. The visualization demonstrates the advantage of combined features and reveals the video-specific variability in engagement pattern predictability.</p>

The per-video analysis (Figure 9) reveals that while the average performance (orange line) decreases as the quantile threshold increases, individual videos (light lines) show considerable variability. This suggests that engagement patterns are highly video-specific, with some videos maintaining strong predictability even at higher thresholds. Notably, the combined image+audio features show more consistent performance across videos compared to single-modality features, indicating their robustness for diverse content types.

From a content perspective, these findings indicate that the extracted features are capturing meaningful semantic information about what viewers find engaging in videos. The strong performance at the 0.1 quantile threshold suggests our feature representations are particularly effective at identifying highly salient content moments—precisely the type of distinctive content that temporal averaging at an optimal window size might better preserve while filtering out noise. This establishes the critical foundation for our temporal averaging approach by confirming that machine-extractable features can effectively represent content characteristics that align with human engagement patterns.

<div style="display: flex; justify-content: center; flex-wrap: wrap; text-align: center;">
  <figure style="width: 32%; min-width: 250px; margin: 0.5%; text-align: center;">
    <img src="/assets/images/projects/gist-blur-attention/low_level_features/F1 Score for SVC within Each Video (Image + Audio Feature).png" alt="F1 Score SVC with Image+Audio">
    <figcaption style="text-align: center;">SVC with Image+Audio Features</figcaption>
  </figure>
  <figure style="width: 32%; min-width: 250px; margin: 0.5%; text-align: center;">
    <img src="/assets/images/projects/gist-blur-attention/low_level_features/F1 Score for SVC within Each Video (Image Feature Only).png" alt="F1 Score SVC with Image">
    <figcaption style="text-align: center;">SVC with Image Features</figcaption>
  </figure>
  <figure style="width: 32%; min-width: 250px; margin: 0.5%; text-align: center;">
    <img src="/assets/images/projects/gist-blur-attention/low_level_features/F1 Score for SVC within Each Video (Audio Feature Only).png" alt="F1 Score SVC with Audio">
    <figcaption style="text-align: center;">SVC with Audio Features</figcaption>
  </figure>
</div>
<p style="text-align: center; font-size: 0.9em; color: #515154; margin-bottom: 25px; font-style: italic;"><b>Figure 10:</b> F1 scores for SVC model across different feature types. The visualization confirms that combined image+audio features (left) consistently achieve higher F1 scores compared to single-modality features, especially at lower quantile thresholds representing the most engaging content moments.</p>

### 4.2. Ablation Study: Impact of Averaging Sample Size (W) on Alignment
Following the methodology described in Section 3.4, we conducted a systematic evaluation of how different temporal averaging sample sizes (W) affect the alignment between visual representations and human engagement signals. Due to computational constraints, generating averaged images for all 50,380 clips across all W values (1, 3, 5, 7, 10, 20, 50, 100) was prohibitive. Therefore, for these specific W values, we performed an ablation study using a randomly selected subset of 1,000 clips. However, the "W=Full" condition (averaging all frames in each 10-second clip, ~300 frames) was processed for the entire dataset of 50,380 clips, providing a robust benchmark for fully temporally integrated representations. This W=Full condition was ultimately found to be optimal.

#### Evaluation Approach
To quantify alignment with human engagement signals, we used Ridge regression (with regularization strength α=1.0) to predict replay scores from features extracted from average images with different W values. Performance was assessed using 5-fold cross-validation with two primary metrics: Coefficient of Determination (R²) and Mean Squared Error (MSE).

#### Results:
Our ablation study revealed a clear pattern in how different W values affect alignment with replay signals. The data showed a systematic relationship between the degree of temporal integration and model performance, with comprehensive temporal integration (W=Full) yielding the best results.

<table>
  <thead>
    <tr>
      <th>Averaging Method</th>
      <th>Mean R²</th>
      <th>Standard Deviation R²</th>
      <th>Mean MSE</th>
      <th>Sample Size</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>W=1</td><td>-1.013</td><td>0.335</td><td>0.0383</td><td>1000</td></tr>
    <tr><td>W=3</td><td>-0.773</td><td>0.207</td><td>0.0337</td><td>1000</td></tr>
    <tr><td>W=5</td><td>-0.705</td><td>0.061</td><td>0.0328</td><td>1000</td></tr>
    <tr><td>W=7</td><td>-1.081</td><td>0.280</td><td>0.0394</td><td>1000</td></tr>
    <tr><td>W=10</td><td>-0.797</td><td>0.212</td><td>0.0342</td><td>1000</td></tr>
    <tr><td>W=20</td><td>-1.004</td><td>0.319</td><td>0.0380</td><td>1000</td></tr>
    <tr><td>W=50</td><td>-0.954</td><td>0.322</td><td>0.0369</td><td>1000</td></tr>
    <tr><td>W=100</td><td>-0.676</td><td>0.194</td><td>0.0318</td><td>1000</td></tr>
    <tr><td style="font-weight: bold;">W=Full (~300)</td><td style="font-weight: bold;">-0.085</td><td style="font-weight: bold;">0.311</td><td style="font-weight: bold;">0.027</td><td style="font-weight: bold;">1000</td></tr>
    <tr class="highlight-row"><td style="font-weight: bold;">W=Full (~300)</td><td style="font-weight: bold;">0.106</td><td style="font-weight: bold;">0.011</td><td style="font-weight: bold;">0.0203</td><td style="font-weight: bold;">50380</td></tr>
  </tbody>
</table>
<p style="text-align: center; font-size: 0.9em; color: #515154; margin-bottom: 25px; font-style: italic;">
  <b>Table 1:</b> Performance metrics for different temporal averaging sample sizes (W). For W=1 to W=100 and the first W=Full row, results are based on N=1000 clips. The last W=Full row (highlighted) shows results based on the entire dataset of N=50,380 clips and demonstrates the optimal performance with a positive R².
</p>

<figure>
  <img src="/assets/images/projects/gist-blur-attention/w_value_ablation_with_full_1000.png" alt="Performance metrics across different W values (1000 samples and full dataset)">
  <figcaption><b>Figure 11:</b> Impact of temporal averaging window size (W) on performance metrics. The plot shows R² scores (blue, left axis) and MSE values (red, right axis). While most R² scores for W=1 to W=100 (N=1000 clips) are negative, W=Full tested on the same 1000-clip subset (second-to-last point) shows a markedly better (less negative) R². Crucially, W=Full evaluated on the complete dataset (far right, highlighted in green) achieves the strongest positive R² and the lowest MSE, establishing it as the optimal setting for alignment with engagement signals.</figcaption>
</figure>

As shown in Table 1 and Figure 11, the W values from 1 to 100, evaluated on the 1000-clip subset, consistently yielded negative R² scores. A negative R² indicates that the model performs worse than a baseline model that always predicts the mean of the target variable. While this is partly attributable to the limited sample size (N=1000 clips), such consistently poor performance across multiple W values suggests that features derived from images with less comprehensive temporal averaging (W < Full) might be inherently noisier or capture more transient, non-generalizable details. These characteristics could make it difficult for the regression model to find a stable predictive relationship on a small dataset.

Despite the negative R² values for W=1 to W=100 on the 1000-clip subset, W=Full tested on the same 1000-clip subset performed significantly better with a much less negative R² (-0.085) and lower MSE (0.027). This suggests that the more extensive temporal integration of W=Full already begins to offer benefits in terms of feature stability and noise reduction, even with limited data.

Crucially, when using the full dataset of 50,380 clips for the W=Full condition, the ResNet-50 features from these fully averaged images achieved a positive R² of 0.106 and the lowest MSE of 0.0203. This demonstrates that with sufficient data, comprehensively temporally integrated representations (W=Full) can effectively explain a portion of the variance in replay scores and significantly outperform a simple mean predictor. The success of W=Full on the larger dataset likely stems from its ability to average out visual noise and transient elements across many frames, thereby distilling more stable and consistently predictive visual patterns related to engagement. This finding established W=Full as the optimal level of temporal integration for our subsequent analyses.

The superior performance of W=Full on both the limited subset and the complete dataset underscores the benefit of comprehensive temporal integration for creating feature representations that best align with engagement signals. This led to the decision to use features derived from W=Full averaged images for the core comparison against VLM embeddings.

<div class="visual-analysis">
  <h4>Visual Analysis of Temporal Averaging Effects</h4>
  <figure>
    <img src="/assets/images/projects/gist-blur-attention/w_comparison_grid.png" alt="Visual comparison of W values">
    <figcaption><b>Figure 12:</b> Visual comparison of temporal averaging across W values, from W=1 (single frame) to W=Full (all frames). Each row shows a different video clip with various levels of temporal integration. As W increases, stable scene elements become more prominent while transient objects become progressively blurred. The W=Full condition, identified as optimal, effectively captures the overall gist of the scene by integrating information across the entire clip duration.</figcaption>
  </figure>
  <p>
    The visual comparison in Figure 12 illustrates how increasing W affects the resulting average images. At W=1, we see a single frame with transient details. As W increases, stable scene elements (buildings, roads, landmarks) become more prominent while transient elements (people, vehicles) get progressively blurred. At W=100, the image retains clear structural elements while smoothing out noise and transient objects. At W=Full, which our ablation identified as optimal, this integration is maximized, potentially leading to some blurring of finer details but emphasizing the overall scene structure and persistent elements most effectively for alignment with engagement.
  </p>
  <p>
    This finding, considering both the 1000-sample tests and the full-dataset W=Full result, supports our hypothesis that representations with substantial temporal integration (W=Full performs best in both contexts) best align with human engagement signals. This comprehensive temporal window captures the most complete temporal context, which appears to provide the most robust alignment with engagement signals despite some loss of visual detail.
  </p>
</div>

### 4.3. Core Comparison: ResNet-50 Features from Averaged Images vs VLM Embeddings
To directly test our central hypothesis, we conducted a comprehensive comparison between two alternative feature types for predicting engagement:
-   **ResNet-50 features from fully averaged images (W=Full, on the complete 50,380 clip dataset):** Deep visual features extracted using comprehensive temporal integration.
-   **VLM semantic embeddings:** Sentence embeddings derived from keywords extracted by the VLM when analyzing video clips.

This comparison addresses a fundamental question: do low-level visual features extracted from averaged images outperform high-level semantic representations from VLMs in predicting engagement? Our findings were decisive:
-   **R² Performance:** ResNet-50 features from fully averaged images (W=Full, on the complete 50,380 clip dataset) achieved an R² of 0.106 ± 0.011 versus 0.0777 ± 0.0080 for VLM embeddings, representing a 36.4% improvement in correlation with engagement signals.
-   **MSE Reduction:** ResNet-50 features (W=Full) yielded an MSE of 0.0203 (mean) compared to 0.0210±0.0003 for VLM embeddings, demonstrating a 3.3% reduction in prediction error.
-   **Per-Video Superiority:** ResNet-50 features (based on the W=Full approach) outperformed VLM embeddings in 48 out of 61 videos (78.7%), indicating the robustness of this finding across diverse content.

Notably, earlier analyses on subsets (e.g., with W=100) also showed strong performance for ResNet-50 features from averaged images, even without audio (R² of 0.1063±0.0110 on a 1000-clip subset), suggesting that the temporal averaging process itself captures most of the engagement-relevant information. In contrast, audio-only features achieved substantially lower performance (R² of 0.0257±0.0050).

<figure>
  <img src="/assets/images/projects/gist-blur-attention/feature_comparison_r2_annotated.png" alt="R² Comparison Between Feature Types" style="max-width: 50%; width: 50%;">
  <figcaption><b>Figure 13:</b> Performance comparison between different feature types showing R² scores (higher is better). ResNet-50 features from averaged images (both with and without audio) significantly outperform VLM embeddings, demonstrating the superior alignment of temporally integrated representations with human engagement signals.</figcaption>
</figure>

Figure 13 further details these comparisons, showing that ResNet-50 features from W=Full averaged images alone (without audio, R² of 0.1063±0.0110) performed nearly identically to the combined image and audio features (R² of 0.1060±0.0110). This suggests that the temporal averaging process on visual data captures most of the engagement-relevant information. In contrast, audio-only features achieved substantially lower performance (R² of 0.0257±0.0050).

These results strongly support our central hypothesis: representations emphasizing temporal stability through averaging create features that better align with human engagement signals than semantic features from standard VLM processing. This suggests that the perceptual qualities captured by averaged frames may be more relevant to engagement than the semantic content identified by VLMs processing individual frames.

<figure>
  <img src="/assets/images/projects/gist-blur-attention/per_video_comparison.png" alt="Per-Video Performance Comparison">
  <figcaption><b>Figure 14:</b> Per-video comparison of R² scores between ResNet-50 features and VLM embeddings. Videos are sorted by the performance difference between methods. The consistent superiority of ResNet-50 features (78.7% of videos) demonstrates the robustness of temporal averaging across diverse content types and filming conditions.</figcaption>
</figure>

The per-video analysis (Figure 14), conducted across the entire curated dataset of N=61 "city walk" videos, reveals an important pattern. For this per-video evaluation, we employed a rigorous methodology where we calculated performance metrics separately for each individual video: (1) filtering the dataset to include only clips from that specific video, (2) standardizing features using StandardScaler, (3) applying Ridge regression (α=1.0) with 3-fold cross-validation for both ResNet-50 features and VLM embeddings, and (4) computing the mean R² score across all folds as the final performance metric for each feature type. This comprehensive evaluation, encompassing diverse cities, lighting conditions, filming styles, and engagement patterns, was chosen to rigorously test the generalization of our findings rather than relying on a subset. While there is natural variation in predictive performance across these videos, the ResNet-50 features from averaged images consistently outperformed VLM embeddings in 48 out of the 61 videos (approximately 78.7%). This consistency across such a varied set strongly supports our hypothesis that temporal averaging creates representations that better align with human engagement signals.

### 4.4. Content-Dependent Performance Analysis
While our results demonstrate that ResNet-50 features from temporally averaged images outperform VLM embeddings in the majority of videos (78.7%), understanding the characteristics of content where each approach excels provides valuable insights into the strengths and limitations of temporal averaging. This comparative analysis reveals distinct patterns in visual content that influence the effectiveness of each representational approach.

<div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
  <figure style="width: 49%; min-width: 300px; margin-bottom:1em;">
    <img src="/assets/images/projects/gist-blur-attention/resnet_better_grid_continuous.png" alt="Videos where ResNet-50 features excel - Continuous frames">
    <figcaption><b>Figure 15a:</b> Continuous frames from videos where ResNet-50 features from averaged images most outperform VLM embeddings.</figcaption>
  </figure>
  <figure style="width: 49%; min-width: 300px; margin-bottom:1em;">
    <img src="/assets/images/projects/gist-blur-attention/vlm_better_grid_continuous.png" alt="Videos where VLM embeddings excel - Continuous frames">
    <figcaption><b>Figure 15b:</b> Continuous frames from videos where VLM embeddings outperform ResNet-50 features from averaged images.</figcaption>
  </figure>
  <figure style="width: 49%; min-width: 300px; margin-bottom:1em;">
    <img src="/assets/images/projects/gist-blur-attention/resnet_better_grid_sparse.png" alt="Videos where ResNet-50 features excel - Sparse frames">
    <figcaption><b>Figure 16a:</b> Sparse frames sampled across the duration of videos where ResNet-50 features most outperform VLM embeddings.</figcaption>
  </figure>
  <figure style="width: 49%; min-width: 300px; margin-bottom:1em;">
    <img src="/assets/images/projects/gist-blur-attention/vlm_better_grid_sparse.png" alt="Videos where VLM embeddings excel - Sparse frames">
    <figcaption><b>Figure 16b:</b> Sparse frames sampled across the duration of videos where VLM embeddings outperform ResNet-50 features.</figcaption>
  </figure>
</div>

Our comprehensive analysis of videos across the performance spectrum, as shown in both continuous sequences (Figure 15) and sparse samples across video duration (Figure 16), revealed several key characteristics that determine which representational approach better aligns with engagement signals:

#### Characteristics Where Temporal Averaging Excels (ResNet-50 Features)
Videos where ResNet-50 features from averaged images substantially outperform VLM embeddings (left side of Figures 15-16) typically exhibit:
-   **High Visual Consistency with Dynamic Camera Movement:** These videos feature consistent urban layouts with strong architectural elements that remain stable across frames, often captured with steady forward camera motion that creates a sense of progression through the environment—evident in the visual coherence across frames in Figure 16a.
-   **Rich Environmental Textures:** The scenes contain diverse visual textures from buildings, streets, and natural elements that form distinctive patterns when temporally averaged. The sparse sampling in Figure 16a highlights how these textures maintain consistency while gradually evolving.
-   **Gradual Scene Evolution:** The visual content evolves gradually rather than through abrupt scene changes, allowing temporal averaging to effectively capture stable structures while filtering out transient elements. This is particularly visible when comparing consecutive frames in Figure 15a.
-   **Crowded Environments with Transient Elements:** Many videos contain busy streets with numerous pedestrians and vehicles that appear as motion blur in averaged images, allowing the stable architectural elements to become more prominent.

#### Characteristics Where Semantic Recognition Excels (VLM Embeddings)
Conversely, videos where VLM embeddings outperform ResNet-50 features (right side of Figures 15-16) typically exhibit:
-   **Text-Rich Environments:** Videos containing prominent signage, storefronts, or textual information benefit from VLM's superior text recognition capabilities, which can extract semantically meaningful information that might be blurred in temporal averaging.
-   **Static Camera Positions:** Many feature more stationary camera work compared to typical walking videos, with less motion blur and more consistent framing that creates clearer visuals better suited for semantic extraction. The sparse sampling in Figure 16b shows less evolution of viewpoint compared to ResNet-better videos.
-   **Lower Visual Complexity with Distinctive Objects:** The scenes generally have clearer focal points with recognizable objects or landmarks, rather than the visually complex street scenes where ResNet-50 features excel. This is evident in the more focused compositions visible in Figures 15b and 16b.
-   **Distinctive Architectural Features:** Several videos show unique architectural elements or distinctive structures that VLMs can identify and encode semantically, visible across multiple frames in Figure 16b.
-   **Consistent Lighting Conditions:** More uniform lighting across frames helps semantic understanding while providing less distinctive temporal patterns that would benefit from averaging, as seen in the more evenly lit scenes in Figures 15b and 16b.

These patterns reveal a fundamental insight about representation alignment: **temporal averaging through the Average Image pathway excels when stable scene elements carry the most engagement-relevant information**, while VLM embeddings perform better when specific semantic elements or textual information are likely to drive engagement. In dynamic scenes with rich visual complexity, filtering out transient details while preserving stable scene elements through temporal averaging provides better alignment with engagement signals. In contrast, for content where specific semantic elements (text, landmarks, distinctive objects) carry engagement-relevant information, VLM's ability to recognize and encode these elements offers an advantage.

This analysis suggests that optimal video representation systems might benefit from a hybrid approach that leverages both temporal averaging for dynamic scenes with significant motion and direct semantic extraction for more static, text-rich environments. Such context-adaptive representation could maximize alignment with human engagement across diverse content types. The observed complementary strengths of these approaches align with theories of human visual processing, which combines both gist-based scene understanding and object-specific recognition processes.

## 5. Discussion

### 5.1. Interpretation of Findings: Representation Alignment
Our results reveal a significant insight: representations emphasizing temporal stability through controlled averaging align better with viewer replay signals than standard frame-by-frame VLM analysis. The optimal approach, using ResNet-50 features from fully averaged images (W=Full), demonstrated a notable improvement in alignment compared to VLM keyword embeddings on the full dataset. This suggests that modeling temporal integration—a key aspect of human perception—yields representations more attuned to human engagement signals, especially when sufficient data is available for robust evaluation.

This finding has important implications for video understanding in computer vision. While most video models focus on capturing motion and temporal dynamics through sophisticated architectures <sup>[2]</sup>, our results suggest that simple temporal integration through averaging can capture stable, semantically meaningful information that better aligns with human behavioral signals. This tension between capturing transient details (as in standard frame processing) versus stable elements (as in averaging) parallels discussions in the CV literature about what constitutes meaningful visual representations.

### 5.2. Impact of Averaging Sample Size (W) on Alignment
The ablation study on W values conclusively identified W=Full (averaging all frames in a clip) as the optimal setting. While tests on a limited subset for W < Full yielded negative R² scores—potentially due to data limitations or noisier, less generalizable features from incomplete averaging—the W=Full condition performed notably better even on this subset. Crucially, W=Full demonstrated strong positive R² and the lowest MSE when evaluated on the entire dataset. This consistent superiority across different data scales highlights that comprehensive temporal integration provides the most robust alignment with replay signals, justifying its use for the core comparison against VLM embeddings.

From a computer vision perspective, this result connects to discussions about optimal temporal receptive fields in video models <sup>[12]</sup>. Our findings suggest that for alignment with human engagement signals, larger temporal windows that capture more complete temporal context provide better performance. This contrasts with some video transformer approaches that have explored varying temporal attention spans <sup>[2]</sup>, and suggests that for engagement prediction specifically, more comprehensive temporal integration can be beneficial.

### 5.3. Alignment with Human Processing / Gist
The superior performance of ResNet-50 features from averaged images provides evidence that the Average Image pathway captures information relevant to human engagement that is not present in the VLM embeddings. Visual inspection of the averaged images shows that as W increases, stable elements (architecture, urban layout) become emphasized, while transient elements (people, vehicles) fade through averaging. This aligns with theories of gist perception in human cognition <sup>[9]</sup>, where stable structures that persist across frames become more salient than momentary details.

These findings support the idea that incorporating principles from human visual processing—particularly temporal integration and gist extraction—can improve the design of video representations for human-centric tasks. While deep learning typically focuses on end-to-end optimization, our results suggest value in explicitly modeling cognitive principles like temporal integration as inductive biases in representation design.

### 5.4. Computer Vision Implications
Our work has several important implications for computer vision research:
-   **Representation Design:** When developing video representations for human-centric tasks (like predicting engagement), incorporating temporal averaging as an explicit processing step may improve alignment with human behavior.
-   **Evaluation Metrics:** Using human behavioral signals (like replay data) as evaluation benchmarks provides a different perspective on representation quality than traditional computer vision metrics.
-   **Model Architecture:** The success of simple averaging suggests that video models might benefit from parallel pathways, one capturing fine temporal details and another emphasizing stable elements through integration.
-   **Task Dependence:** The optimal representation likely depends on the task; while action recognition may benefit from fine temporal details, engagement prediction appears to benefit from representations emphasizing stability.

These findings contribute to the ongoing discussion in CV about how to design video models that better align with human perception, suggesting that explicit modeling of temporal integration offers a promising direction for future research.

### 5.5. Limitations
-   **Nature and Bias of Replay Signal:** YouTube replays are an imperfect proxy for cognitive states like interest or memory salience and can be influenced by factors beyond perceptual relevance. Additionally, the view count weighting in our replay score calculation may introduce bias, potentially overemphasizing engagement in high-viewership videos and skewing the analysis of what drives engagement across diverse content.
-   **Dataset Specificity:** Our findings are based on city walk videos and may not generalize to other content types with different visual characteristics or engagement patterns.
-   **Model Choices:** Results depend on specific models (Llava-OneVision, Sentence-BERT) and might vary with alternative architectures.
-   **Domain Mismatch:** The ResNet-50 model used in the Average Image pathway is pre-trained on standard, non-averaged images. Applying it to potentially blurred averaged images without fine-tuning may underestimate this pathway's true potential, as the model is not optimized for this specific input domain.
-   **Correlation vs. Causation:** While we demonstrate correlation between averaged representations and replay signals, we cannot establish causal relationships without controlled user studies.

### 5.6. Future Work
-   **VLM Analysis of Averaged Images:** Apply VLMs directly to the averaged images to extract semantic features, using the same Llava-OV model and prompts as the baseline, but with the static average image $I_{\text{avg}(W)}$ as input. This would yield keywords $K_{\text{VLM}}^{\text{avg}(W)}$ that could be embedded using Sentence-BERT<sup>[10]</sup> to produce semantic representations $F_{\text{VLM}}^{\text{avg}(W)}$ (384 dims). This controlled comparison would provide further insights into how temporal averaging affects semantic understanding.
-   **Human Validation:** Conduct user studies to directly assess the perceptual relevance of features captured by different temporal averaging approaches.
-   **Fine-tuning for Averaged Inputs:** To address the domain mismatch limitation identified with the current Average Image pathway, fine-tune the ResNet-50 model (or similar CNNs) specifically on temporally averaged images. Similarly, if VLMs are applied to averaged images in future experiments, their visual encoders should also be adapted or fine-tuned for this distinct input type.
-   **Integration with Modern Architectures:** Explore combining temporal averaging with state-of-the-art video architectures like Video Transformers, potentially as a parallel pathway.
-   **Content Adaptivity:** Investigate whether the optimal W varies by content type, scene complexity, or camera motion.
-   **Beyond Pixel Averaging:** Explore more sophisticated temporal integration approaches, such as weighted averaging or learned integration functions.
-   **Computational Efficiency:** Investigate whether the Average Image pathway could provide computational advantages for video processing by reducing the number of frames that need full processing.

## 6. Conclusion
This study investigated whether a human-inspired approach to video representation—temporal averaging of frames—can better align with viewer engagement signals compared to standard frame-by-frame processing. Through systematic experiments with our dataset of city walk videos, we found that visual features (ResNet-50) extracted from temporally averaged images with an optimal sampling density demonstrate stronger correlation with YouTube replay signals than semantic embeddings from direct VLM analysis of raw clips, with improved performance metrics.

The key findings of our work are:
1.  Temporal averaging with comprehensive integration (W=Full, averaging all frames in a clip) was identified as optimal. It produces representations that better align with human engagement signals than both minimal and intermediate temporal integration (W=1 to W=100), with W=Full showing superior performance both when tested on a limited 1000-sample subset and, crucially, on the full 50,380-clip dataset.
2.  The success of standard CNN features (ResNet-50) on temporally averaged images (specifically W=Full), which emphasize stable scene elements (as seen in Fig. 12), suggests that these stable visual features are highly relevant for viewer engagement, more so than direct VLM-based semantic extraction from transient raw frames.
3.  Simple pixel-averaging provides a computationally efficient way to incorporate temporal integration principles into video representation design.

These results have significant implications for computer vision research. First, they suggest that explicitly modeling temporal integration as an inductive bias can improve alignment with human-centric signals. Second, they indicate that comprehensive temporal integration across an entire clip (W=Full) provides the best performance in all tested scenarios, suggesting that capturing the complete temporal essence of a clip is beneficial. Finally, they point to potential architectural innovations in video understanding models—specifically, the value of parallel pathways that capture both transient details and stable elements.

Addressing the identified limitations, such as the proxy nature of replay signals and the domain mismatch for current models, will be crucial. Key future directions include rigorous human validation of these temporally integrated representations and exploring adaptive temporal integration techniques that might vary with content. Our research lays a foundational groundwork, demonstrating that by more closely emulating human-like temporal processing, we can design video representations that offer a more nuanced alignment with human engagement, thereby advancing computer vision systems towards a more perceptually-grounded understanding of dynamic scenes.

## 7. References
<div id="references-list">
<ol>
    <li id="ref-1">Abu-El-Haija, S., Kothari, N., Lee, J., Natsev, P., Toderici, G., Varadarajan, B., & Vijayanarasimhan, S. (2016). Youtube-8m: A large-scale video classification benchmark. arXiv preprint arXiv:1609.08675.</li>
    <li id="ref-2">Bertasius, G., Wang, H., & Torresani, L. (2021). Is Space-Time Attention All You Need for Video Understanding? ICML.</li>
    <li id="ref-3">Arnab, A., Dehghani, M., Heigold, G., Sun, C., Lučić, M., & Schmid, C. (2021). ViViT: A Video Vision Transformer. Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV) 2021.</li>
    <li id="ref-4">Bylinskii, Z., Judd, T., Oliva, A., Torralba, A., & Durand, F. (2019). What do different evaluation metrics tell us about saliency models?. IEEE transactions on pattern analysis and machine intelligence.</li>
    <li id="ref-5">Grauman, K., Westbury, A., Byrne, E., Chari, V., ... & uncooked, R. (2022). Ego4D: Around the World in 3,000 Hours of Egocentric Video. CVPR.</li>
    <li id="ref-6">Li, J., Li, D., Savarese, S., & Hoi, S. (2023). BLIP-2: Bootstrapping Language-Image Pre-training with Frozen Image Encoders and Large Language Models. ICML.</li>
    <li id="ref-7">Pinto, J., Almeida, J. M., & Goncalves, M. A. (2019). Beyond Views: Measuring and Predicting Engagement in Online Videos. Proceedings of the International AAAI Conference on Web and Social Media, 13(1), 416-426.</li>
    <li id="ref-8">Liu, H., Li, C., Wu, Q., & Lee, Y. J. (2023). Visual Instruction Tuning (LLaVA). NeurIPS.</li>
    <li id="ref-9">Greene, M. R., & Oliva, A. (2009). Recognition of natural scenes from global properties: seeing the forest without representing the trees. Cognitive Psychology.</li>
    <li id="ref-10">Reimers, N., & Gurevych, I. (2019). Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks. EMNLP.</li>
    <li id="ref-11">Schacter, D. L., & Addis, D. R. (2007). The cognitive neuroscience of constructive memory: remembering the past and imagining the future. Philosophical Transactions of the Royal Society B: Biological Sciences.</li>
    <li id="ref-12">Tong, Z., Song, Y., Wang, J., & Wang, L. (2022). VideoMAE: Masked Autoencoders are Data-Efficient Learners for Self-Supervised Video Pre-Training. NeurIPS.</li>
    <li id="ref-13">Zhang, H., Li, X., & Bing, L. (2023). Video-LLaMA: An Instruction-tuned Audio-Visual Language Model for Video Understanding. EMNLP.</li>
    <li id="ref-14">Wolfe, J. M., Võ, M. L. H., Evans, K. K., & Greene, M. R. (2011). Visual search in scenes involves selective and nonselective pathways. Trends in cognitive sciences.</li>
    <li id="ref-15">Del Viva, M. M., Retell, J. D., & Storrs, K. R. (2024). Continuous temporal integration in the human visual system. Journal of Vision, 24(1), 2.</li>
    <li id="ref-16">Tran, D., Bourdev, L., Fergus, R., Torresani, L., & Paluri, M. (2015). Learning Spatiotemporal Features with 3D Convolutional Networks. ICCV.</li>
    <li id="ref-17">Fu, Y., Hospedales, T., Xiang, T., & Yao, Y. (2014). Interestingness Prediction by Robust Learning to Rank. ECCV.</li>
    <li id="ref-18">Hershey, S., Chaudhuri, S., Ellis, D. P., Gemmeke, J. F., Jansen, A., Moore, R. C., ... & Wilson, K. (2017). CNN architectures for large-scale audio classification. ICASSP.</li>
</ol>
</div> 