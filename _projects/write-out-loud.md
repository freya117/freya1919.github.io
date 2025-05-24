---
classes: wide
layout: project
title: "Write Out Loud"
excerpt: "A Multi-modal Way to Learn Chinese Characters and More"
permalink: /projects/write-out-loud/
date: 2025-05-08
tags:
  - human-computer-interaction
  - mobile-development
  - machine-learning
  - computer-science
  - education-technology
header:
  teaser: /assets/images/projects/write-out-loud.jpg
sidebar:
  - title: "Role"
    text: "Lead Developer"
  - title: "Platform"
    text: "iPadOS"
  - title: "Collaborator"
    text: "Junru Ren"
  - title: "Developed Skills"
    text: "SwiftUI, PencilKit, Speech Recognition, AVFoundation"
gallery:
  - url: /assets/images/projects/write-out-loud.jpg
    image_path: /assets/images/projects/write-out-loud.jpg
    alt: "Write Out Loud App Interface"
    title: "App interface showing character practice with multi-modal feedback"
---

## Project Overview

"Write Out Loud" is an iPadOS application designed to address the inherent complexities of mastering Chinese characters—particularly accurate stroke order and precise visual-motor skills. Unlike traditional methods that often fall short in providing immediate, engaging, and sensorily rich feedback, our system tackles this by uniquely integrating handwriting, speech, and visual guidance.

## The Challenge

Learning to write Chinese characters is a foundational skill, yet it is widely recognized as a complex and often daunting endeavor. The challenge stems from multiple interconnected factors:

- **Visual Complexity**: Characters are composed of numerous individual strokes, each with specific shapes and orientations
- **Stroke Order**: There is a prescribed sequence for writing these strokes, crucial for legibility, aesthetic appeal, and efficient memorization
- **Visual-Motor Coordination**: Accurately reproducing character forms requires precise visual-motor skills
- **Memorization**: Learners must memorize the shape, stroke order, pronunciation, and meaning of thousands of characters

Traditional methods of learning, such as rote copying from copybooks (字帖), often occur in silence. While these methods have their place, they frequently lack immediate, engaging, and sensorily rich feedback, leading to ineffective learning and difficulty unlearning errors.

## Our Approach

Leveraging the Apple Pencil for kinesthetic input and the built-in microphone for auditory input, "Write Out Loud" guides users to trace character strokes (e.g., for "口" or "人") while simultaneously vocalizing the specific name of each stroke (such as "héng" or "shù"). 

Upon character completion, the application delivers a holistic evaluation:
- Assessing the accuracy of the user's drawn strokes against ideal paths
- Verifying the correctness of the vocalized stroke names
- Analyzing the temporal synchronization between the writing and speaking actions

This active, concurrent engagement of multiple sensory pathways is designed to significantly strengthen stroke order memory and improve overall handwriting quality.

<style>
.custom-gallery {
  text-align: center;
  margin: 2rem auto;
}

.custom-gallery figure {
  width: 80%;
  margin: 0 auto;
}

.custom-gallery img {
  width: 100%;
}

.custom-gallery figcaption {
  text-align: center;
  font-style: italic;
  color: #666;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 0.2px;
}
</style>

<div class="custom-gallery">
  <figure>
    <img src="/assets/images/projects/write-out-loud.jpg" alt="Write Out Loud App Interface">
    <figcaption style="text-align: center; display: block; width: 100%;">Figure 1: Write Out Loud Application Interface</figcaption>
  </figure>
</div>

## System Structure

1. **Character Selection**: Users begin by selecting a character they wish to practice from a curated list (e.g., "口", "人", "日")
2. **Reference Display**: The application presents a reference panel with a static image of the character, its pinyin and meaning, and an animated GIF demonstrating correct stroke order
3. **Guided Tracing & Vocalization**: Users trace each stroke with the Apple Pencil while vocalizing the specific Pinyin name of that stroke
4. **Holistic Feedback**: The system provides comprehensive feedback on stroke accuracy, vocalization correctness, and temporal synchronization

## Technical Implementation

The application is built using several key technologies:

### Input Modalities
- **Handwriting Input**: Using PencilKit to capture raw stroke data and StrokeInputController to detect stroke beginning and end
- **Speech Input**: Leveraging SFSpeechRecognizer for continuous recording and segmentation of speech corresponding to each written stroke

### Core Processing & Analysis
- **Character Data Management**: Managing data for each character, including correct stroke sequences and ideal paths
- **Trace Analyzer**: Comparing user-drawn strokes to ideal paths for accuracy evaluation
- **Speech Recognition & Verification**: Transcribing and verifying spoken stroke names with homophone handling
- **Concurrency Analyzer**: Assessing temporal synchronization between writing and vocalization
- **Feedback Generation**: Providing visual and textual feedback on performance

## Development Challenges & Solutions

### Speech Segmentation
The most significant challenge was in the timing of speech recognition. Our original approach of toggling the microphone on and off for each stroke led to poor performance with short utterances often being missed. We pivoted to continuous audio recording throughout character writing, using timestamp matching to associate portions of speech with specific strokes.

### Homophone Handling
Standard speech recognition struggled with determining if the user meant a common word or a stroke name with the same pronunciation. We implemented "targeted corrections" with a list of valid Pinyin pronunciations for stroke names.

### User Feedback & Adaptations
User testing revealed that non-Chinese speakers struggled with pronunciation, leading to the implementation of the "Stroke Name Example" feature for auditory guidance.

## Results & User Study

User testing across different groups yielded interesting insights:
- **Chinese Speakers**: Found vocalization somewhat redundant as writing is already an automatic process
- **Non-Chinese Learners**: Benefited significantly but needed pronunciation support
- **General Observations**: All users found the interactive nature with immediate feedback more engaging than traditional methods

## Future Development

We are currently working on:
1. **Expanded Character Set**: Developing a more scalable system for adding new characters
2. **Adaptive Learning**: Tracking user performance to suggest practice focused on problem areas
3. **Gamification**: Introducing elements like points, streaks, and badges for motivation
4. **Enhanced Analysis**: Incorporating stroke dynamics like writing speed and pressure for richer feedback

A particularly exciting next step would be implementing real-time, adaptive intervention for mispronounced stroke names, allowing users to self-correct pronunciation before moving to the next stroke.

## Project Team

- **Freya Tan**: Software development, implementation, and technical architecture
- **Junru Ren**: Conceptualization, content curation, user testing, and project management 