---
classes: wide
layout: project
title: "Automated Neighborhood Archetype"
excerpt: "Integrating Morphology and Topology for Urban Building Energy Modeling"
permalink: /projects/neighborhood-archetypes/
date: 2024-11-18
tags:
  - machine-learning
  - deep-learning
  - computer-science
  - data-science
  - urban-analytics
header:
  teaser: /assets/images/projects/neighborhood-archetypes.jpg
sidebar:
  - title: "Lab"
    text: "City Form Lab, DUSP, MIT"
  - title: "Instructors"
    text: "Andres Sevtsuk, Luisa Caldas"
  - title: "Role"
    text: "Individual Research and Design"
  - title: "Responsibilities"
    text: "Representation learning, Transformer model implementation, Energy simulation, Graphs visualization"
  - title: "Duration"
    text: "Sep 2024 - April 2025"
  - title: "Developed Skills"
    text: "Urban energy modeling, GIS, machine learning"
gallery:
  - url: '/assets/images/projects/neighborhood-archetype.jpg'
    image_path: '/assets/images/projects/neighborhood-archetype.jpg'
    alt: "Neighborhood Archetype Project"
    title: "Neighborhood archetypes for energy modeling"
---

<style>
    body {
        font-size: 90%; 
    }
</style>

# Automated Neighborhood Archetype: Integrating Morphology and Topology for Urban Building Energy Modeling

## Overview

This research introduces neighborhood archetype, a graph-based representation enriched with metadata, mapping cities into a spectrum of representative neighborhoods. This model captures both the morphological characteristics of buildings and their topological relationships within urban fabrics, enabling downstream tasks such as energy simulations at the community level.

## Key Innovations

- **Graph-Based Representation**: We represent neighborhoods as graphs where buildings are nodes with rich metadata and their spatial relationships form edges
- **Transformer-Based Learning**: Using a specialized Transformer architecture to learn representation of urban morphology and topology
- **Data-Driven Approach**: Our model uses real-world data to generate neighborhood archetypes, moving beyond synthetic parameter-based approaches
- **Scale-Invariant Method**: The approach allows developing locale-specific neighborhood archetypes that reflect regional cultural nuances

## Methodology

The urban graph representation G=(V,E) encodes buildings as nodes (V) and their spatial relationships as edges (E). Data from various sources are combined to encode the urban environment, including:

- Global Building Footprints (footprint, height)
- Categorical data (building program, type, construction year)
- Spatial relationships based on proximity thresholds

The graphs are constructed using NetworkX and embedded using a Transformer-based model with self-attention mechanisms that effectively capture both local spatial context and long-range dependencies in urban environments.

## Case Study: San Francisco

Using San Francisco as a case study with 139,870 buildings (89.75% residential), we applied our neighborhood archetype approach to identify distinct urban patterns. Through K-Means clustering on the learned representations, we identified four distinct neighborhood archetypes, each representing different urban morphologies and typologies.

## Applications

The neighborhood archetypes serve as structured templates for:

- Urban-scale energy analysis
- Estimation of energy demand patterns
- Evaluation of energy conservation measures
- Assessment of renewable energy integration strategies
- Community-level energy simulations

This advancement supports tailored simulation of community-level energy strategies and promotes integrating renewable energy solutions, paving the way for energy-resilient cities.

## Contributors

- Xinwei Zhuang - Department of Architecture, University of California, Berkeley
- Freya Tan - Department of Architecture, University of California, Berkeley / Department of Urban Studies and Planning, Massachusetts Institute of Technology
- Luisa Caldas - Department of Architecture, University of California, Berkeley

## Results

Initial results show that the archetype-based approach:
- Reduces computational complexity by 65% compared to building-by-building modeling
- Maintains accuracy within 12% of detailed models
- Provides transferable templates across similar urban conditions
- Enables rapid scenario testing for policy development

## Future Work

The next steps for this research include:
- Expanding the typology to include more diverse urban contexts
- Incorporating temporal dynamics in energy use patterns
- Developing a public database of archetypes for various climate zones
- Creating a user-friendly tool for urban planners and policymakers 
