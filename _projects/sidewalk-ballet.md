---
classes: wide
layout: project
title: "SideWalk Ballet"
subtitle: "Detecting Social Activities through Geo-tagged Urban Visual Contents"
excerpt: "Using large language models to identify and analyze social interactions in urban environments"
permalink: /projects/sidewalk-ballet/
date: 2025-05-15
tags:
  - urban-analytics
  - computer-vision
  - social-equity
  - urban-planning
  - ongoing-project
header:
  teaser: /assets/images/projects/sidewalk-ballet.jpg
sidebar:
  - title: "Status"
    text: "**Ongoing Project**"
  - title: "Role"
    text: "Lead Researcher"
  - title: "Responsibilities"
    text: "Data collection, model development, analysis"
  - title: "Developed Skills"
    text: "Computer vision, urban analytics, deep learning"
gallery:
  - url: '/assets/images/projects/sidewalk-ballet.jpg'
    image_path: '/assets/images/projects/sidewalk-ballet.jpg'
    alt: "SideWalk Ballet Analysis"
    title: "Detecting social interactions in urban environments"
---

<style>
    body {
        font-size: 90%; 
    }
</style>

## Project Overview

This project originated from my thesis, which involved the collection and analysis of millions of geo-tagged photos from 26 cities worldwide. The objective is to utilize deep learning and large language models to detect, classify, and analyze urban social activities through visual content analysis. By understanding the "sidewalk ballet" of city life—a term coined by Jane Jacobs—we can better inform urban design that fosters vibrant social interactions.

## Background and Motivation

Can you spot social interactions in urban spaces? Cities are alive with countless social interactions that shape their character and vitality. These interactions—whether between friends meeting at a café, strangers sharing a park bench, or families navigating a busy sidewalk—form what Jane Jacobs famously called the "sidewalk ballet" of city life.

Understanding these patterns is crucial for creating more vibrant, inclusive, and socially sustainable urban environments. Traditional methods of studying urban social life have relied on time-consuming manual observations or limited-scale surveys, which cannot capture the full complexity and diversity of urban social interactions across different contexts and cultures.

## Research Gap and Innovation

While considerable research has been conducted on physical aspects of urban spaces (morphology, density, land use), the detection and analysis of social interactions in these environments remains challenging and under-explored. Traditional methods relying on manual observation are time-consuming and limited in scale, while existing computational approaches often fail to capture the nuanced nature of human social behavior.

This project innovates by leveraging large language models (LLMs) and computer vision to automatically detect, categorize, and analyze social interactions from large-scale urban image datasets. The approach combines the pattern recognition capabilities of neural networks with the contextual understanding of LLMs to identify not just the presence of people, but the nature of their interactions and social relationships.

## Methodology

The project employs a multi-stage approach that leverages the strengths of both computer vision and large language models:

### LLMs Based Approach

#### 1. Pairwise Relationship Detection
First, we create a model that can distinguish whether a pair of bounding boxes (representing people in an image) belong to the same social group or not. This involves analyzing spatial proximity, body orientation, and contextual cues that suggest social connection.

#### 2. Group Combinations Analysis
Based on the judgment of each pair of person-to-person relationships, we generate grouped bounding boxes that represent social units within the urban environment. This allows us to identify not just individuals, but social groupings and their spatial distribution.

#### 3. Activity Detection
For each identified group, we detect a series of activities based on LLMs' interpretation of visual cues, posture, and environmental context. This step classifies the nature of social interactions (e.g., conversing, dining together, waiting together, performing).

#### 4. Holistic Fine-tuning
Using the large dataset created through the previous steps, we fine-tune a holistic LLM that can identify social interactions with greater accuracy and nuance. This creates a feedback loop where the model continuously improves its understanding of urban social dynamics.

### Fine-tuning Process for the Large Language Model

The fine-tuning process involves several key steps:
- **Base Model Selection**: We evaluate several foundation models to identify the one with the best baseline performance for visual social interaction detection
- **Training Data Creation**: We generate extensive "Q&A Chats" that teach the model to identify social interactions from visual inputs
- **Parameter Optimization**: We adjust the model parameters to balance accuracy with computational efficiency
- **LoRA Implementation**: We use Low-Rank Adaptation (LoRA) to reduce GPU VRAM requirements, making the fine-tuning process more efficient while only updating the LLM component rather than the entire model architecture

### Evaluation Indicators

We assess model performance using several metrics:
- **Precision**: The percentage of correctly predicted social interactions out of all predicted interactions
- **Recall**: The percentage of actual social interactions that have been correctly identified
- **F1 Score**: A balanced score between Precision and Recall, ranging from 0 to 1
- **Spatial Accuracy**: How accurately the model identifies the boundaries of social groups
- **Interaction Classification Accuracy**: How accurately the model categorizes the type of social interaction

## Data Sources

Our analysis draws on an extensive collection of NYC Streetview Images from multiple platforms, creating one of the largest datasets for urban social interaction analysis:

- **Google Street View**: 2,242,871 images from diverse urban contexts worldwide
- **Apple LookAround**: 5,194,705 high-resolution panoramic images
- **Bing Streetside**: 1,379,623 images with particular coverage of secondary streets
- **Mapillary Dataset**: 3,354,593 user-contributed images offering unique perspectives

This diverse dataset allows us to analyze social interactions across different urban typologies, cultural contexts, and times of day, providing a comprehensive view of how social life manifests in public spaces.

## Expected Outcomes

The project aims to deliver several significant outcomes:

- **Social Interaction Detection Model**: A robust computational model capable of identifying and classifying social interactions in urban imagery
- **Spatial Pattern Analysis**: Maps and visualizations showing the distribution and characteristics of social activities across urban environments
- **Design-Social Relationship Insights**: Evidence-based insights into how specific urban design elements influence social interaction patterns
- **Quantification Framework**: A methodology for measuring and comparing social vibrancy across different urban spaces
- **Planning Support Tool**: An interactive tool that helps urban planners evaluate the social performance potential of design proposals

## Applications and Future Work

This research has significant applications for multiple stakeholders:

- **Urban Planners and Designers**: Providing evidence-based insights for creating socially vibrant spaces
- **Public Space Managers**: Offering tools to evaluate and improve the social performance of public spaces
- **Urban Researchers**: Enabling large-scale, cross-cultural studies of urban social dynamics
- **Policy Makers**: Supporting data-driven policies to enhance urban social life
- **Community Advocates**: Strengthening arguments for inclusive, socially supportive public spaces

Future work will expand to include:
- Temporal analysis tracking how social patterns change throughout the day, week, and seasons
- Cross-cultural comparative studies examining how social interactions vary across different global contexts
- Integration with other urban datasets (transportation, land use, economic activity) for more comprehensive analysis
- Development of predictive models that can forecast the social impacts of proposed urban interventions 