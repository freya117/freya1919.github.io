---
classes: wide
layout: project
title: "Automating Topology Corrections for Fragmented Network"
excerpt: "An LLM-based interpretable model for correcting fragmented network structures in pedestrian, cycling, and utility infrastructure"
permalink: /projects/fragmented-network-topology/
date: 2025-03-12
tags:
  - machine-learning
  - llm
  - computer-science
  - urban-planning
  - network-analysis
header:
  teaser: /assets/images/projects/network-topology.jpg
sidebar:
  - title: "Role"
    text: "Principal Researcher"
  - title: "Institution"
    text: "MIT EECS & DUSP"
  - title: "Thesis Research"
    text: "Master of Science in Electrical Engineering and Computer Science and Master in City Planning"
  - title: "Supervisors"
    text: "Andres Sevtsuk (DUSP), Phillip Isola (EECS), Eran Ben-Joseph (DUSP)"
  - title: "Developed Skills"
    text: "Large language models, graph analysis, diffusion models, geospatial data processing"
---

## Project Overview

Many real-world networks, from transportation to utility grids, often suffer from fragmentation. Fragmented networks contain disconnected subgraphs, missing links, and irregular topological structures, making them inefficient for routing, analysis, or simulation. While vehicular road networks have received extensive efforts in ensuring topological coherence, networks like pedestrian infrastructure, bike lanes, and underground utility networks remain incomplete, requiring manual interventions that are costly and unscalable.

This research aims to develop an automated system for correcting fragmented network structures by integrating graph-based diffusion models, large language model (LLM) reasoning, and multi-modal data validation. Using pedestrian networks as a case study, we demonstrate how our approach generalizes to broader network correction tasks.

![Network Fragmentation Example](/assets/images/projects/fragmented-network-topology/network-comparison.jpg)
<p style="text-align: center; font-size: 0.9em;"><em>Figure 1. Left: Raw polygon centerline results from a semantic segmentation model. Right: Manually corrected network of the same area, prioritizing connectivity, routability, and simplicity.</em></p>

## Background and Motivation

Transportation networks, especially those designed for pedestrians and cyclists, often exist in fragmented states due to incomplete mapping, detection errors, or actual infrastructure gaps. Current semantic segmentation models can achieve up to 89% mean Intersection over Union (IoU) in identifying sidewalks, footpaths, and crossings from aerial imagery. However, converting these detected features into coherent, routable networks presents significant challenges.

The U.S. Department of Transportation (DOT) has recently launched initiatives to explore scalable methods for generating and refining such networks, highlighting the importance of this research area. The primary challenges include:

1. Fragmented networks with missing links
2. Disconnected nodes and subgraphs
3. Irregular geometries that don't follow logical paths
4. Topological inconsistencies preventing effective routing

## Research Gap and Innovation

This research addresses several critical gaps in the current approaches to network reconstruction:

### Adapting Diffusion Models for Network Reconstruction

While diffusion models show promise in trajectory recovery, their direct application to fragmented network reconstruction remains unexplored. Challenges include:
- Lack of spatial and geographic constraints
- Absence of city-normalization priors
- Risk of generating implausible or unsafe connections

Our approach adapts diffusion-based state propagation for network graphs, introducing anisotropic constraints for alignment with real-world layouts.

### LLM-Based Chain of Thought Methods

LLM-based Chain of Thought (CoT) reasoning provides a structured way to infer missing network connections by simulating urban planners' decision-making processes. We are developing:
- Robust evaluation frameworks for LLM error detection and validation
- Multi-modal LLM models that integrate textual reasoning with spatial constraints
- Methods to maintain spatial consistency in LLM-generated network inferences

### Local-Buffered Learning

We're developing hierarchical learning models that:
- Capture fine pedestrian details (e.g., sidewalk crossings)
- Preserve broader urban alignment
- Balance fine-grained connectivity with large-scale network coherence
- Create scalable and adaptable reconstruction methodologies

## Methodology

Our approach integrates several innovative techniques:

### 1. Preprocessing Network Data for LLMs

Since LLMs primarily process text-based inputs, we optimize data representation through:
- Human-readable adjacency lists that explicitly encode spatial relationships
- Structured text formats optimized for LLM processing
- Enhanced metadata encoding including sidewalk types, crosswalk locations, and accessibility constraints

### 2. Types of Network Fixes Categorization

To classify modifications and evaluate model performance, we define fix types based on differences between original and corrected networks:
- **Unchanged**: Segment remains identical in both datasets
- **Modified**: Segment altered while retaining >50% overlap with original geometry
- **Split**: Single segment divided into multiple segments covering >90% of original geometry
- **Merge**: Multiple segments combined into a single segment retaining all input geometries
- **Extension**: Segment lengthened at endpoints with ≤10% modification to middle geometry
- **Deleted**: Segment in original dataset with no corresponding geometry in corrected network

### 3. Evaluation Matrix

We assess model effectiveness using four key performance categories:

| Performance Category | Explanation | Goal |
|---------------------|-------------|------|
| Geometric Similarity | Measures alignment with manually corrected network | Ensuring correct spatial geometry |
| Fix Action Accuracy | Evaluates implementation of necessary modifications | Measuring LLM compliance with user instructions |
| Dead-End Analysis | Assesses resolution of isolated segments | Ensuring fully integrated and navigable networks |
| Connectivity Improvement | Measures enhancement of overall network connectivity | Improving overall network usability |

### 4. Scaling to Larger Networks

Once validated on small-scale pedestrian networks, we expand testing to larger and more complex networks covering entire urban areas by:
- Handling increased data volume while maintaining efficient processing
- Addressing challenges like varying road densities and mixed-use pathways
- Ensuring LLM consistency across diverse pedestrian infrastructures

## Data Sources

This project utilizes urban pedestrian network datasets provided by Professor Andres Sevtsuk from City Form Lab, DUSP. The dataset includes pedestrian networks from major U.S. cities such as New York City, Boston, and Los Angeles, containing road segments with attributes like sidewalk width, connectivity, and accessibility features.

## Expected Outcomes

This research will deliver:
- Improved pedestrian network connectivity through automated correction of fragmented segments
- Optimized LLM processing through structured input representations and refined prompts
- Validation of LLM performance across different models, input formats, and reasoning approaches
- Reliable evaluation metrics to assess geometric accuracy, fix precision, dead-end reduction, and connectivity enhancement
- A scalable methodology applicable to broader network reconstruction tasks beyond pedestrian pathways

## Applications and Future Work

The developed methodology has potential applications in:
1. **Urban Planning and Transportation**: Creating complete, routable pedestrian and cycling networks
2. **Utility Network Management**: Reconstructing fragmented underground utility networks
3. **Emergency Response**: Improving evacuation route planning and accessibility mapping
4. **Smart City Development**: Supporting comprehensive mobility planning across transportation modes

Future work will focus on:
- Extending the approach to other types of networks beyond transportation
- Integrating real-time data sources for dynamic network corrections
- Developing user interfaces for semi-automated network editing with LLM assistance 