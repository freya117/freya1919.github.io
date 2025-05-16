---
classes: wide
layout: project
title: "Write Out Loud"
excerpt: "A Multi-modal Way to Learn Chinese Characters and More"
permalink: /projects/write-out-loud/
date: 2024-04-25
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
  - url: '/assets/images/projects/write-out-loud.jpg'
    image_path: '/assets/images/projects/write-out-loud.jpg'
    alt: "Write Out Loud App Interface"
    title: "App interface showing character practice with multi-modal feedback"
---

## Project Overview

"Write Out Loud" is an iPadOS application designed to address the complexities of learning Chinese characters through a novel multimodal learning experience. The app leverages both kinesthetic and auditory learning pathways to reinforce character memorization and proper writing technique.

## The Challenge

Mastering Chinese characters presents significant challenges, particularly in:
- Achieving accurate stroke order
- Developing precise visual-motor skills
- Connecting the visual form, pronunciation, and meaning
- Retaining characters through effective memory techniques

Traditional learning methods often focus on visual and mechanical repetition without engaging multiple sensory pathways for stronger encoding.

## Our Solution

Our application creates a synchronized learning experience by:

1. **Kinesthetic Input**: Uses Apple Pencil for precise stroke practice with haptic feedback
2. **Auditory Input**: Requires users to vocalize the specific name of each stroke (e.g., "héng," "shù") as they write
3. **Multi-modal Feedback**: Evaluates both writing accuracy and speech recognition simultaneously

When a user completes a character, the system delivers a holistic evaluation:
- Assessing the accuracy of drawn strokes against ideal paths
- Verifying the correctness of vocalized stroke names
- Analyzing the temporal synchronization between writing and speaking

{% include gallery caption="Write Out Loud Application Interface" %}

## Technical Implementation

The application is built using several key technologies:

- **SwiftUI**: For creating the responsive user interface
- **PencilKit**: To track and analyze Apple Pencil input with high precision
- **SFSpeechRecognizer**: For real-time speech recognition of stroke names
- **AVFoundation**: To process audio input and provide auditory feedback
- **Custom Stroke Matching Algorithm**: To evaluate stroke accuracy and order

## Results & Impact

Early user testing has shown promising results:
- Significantly stronger stroke order memory retention
- Improved overall handwriting quality and precision
- Enhanced engagement through the multi-sensory approach
- Reduced learning fatigue compared to traditional repetition methods

Users reported that the multi-modal approach helped them build stronger memory connections, particularly for complex characters with multiple components.

## Future Development

We are currently working on expanding the application to include:
- Adaptive difficulty based on user performance
- A broader character set organized by proficiency levels
- Integration with spaced repetition for optimized learning
- Support for additional languages with complex writing systems (Japanese, Arabic, etc.)
- Classroom integration features for language educators 