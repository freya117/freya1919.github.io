---
title: "Research & Projects"
permalink: /research/
author_profile: true
layout: wide
---

<style>
  /* Set consistent max-width for all sections to match masthead */
  .page__content,
  .nav-tabs,
  .all-tags,
  .projects-grid,
  .category-section {
    max-width: 1024px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 100% !important;
  }
  
  /* Hide the page title */
  .page__title {
    display: none;
  }
  
  /* Add top spacing to replace the removed title */
  .page__content {
    padding-top: 1em;
  }

  /* Project grid layout */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .project-box {
    position: relative;
    border: none;
    border-radius: 8px;
    padding: 15px;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
    overflow: hidden;
    cursor: pointer;
  }
  
  .project-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  }
  
  .project-image {
    margin-bottom: 12px;
    order: -1;
  }
  
  .project-image img {
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
    height: 160px;
  }
  
  .project-title {
    font-size: 0.95em;
    font-weight: bold;
    margin-bottom: 0.5em;
    color: #0033A0;
  }
  
  .project-subtitle {
    font-size: 0.8em;
    font-style: italic;
    margin-bottom: 8px;
    color: #666;
  }
  
  .project-excerpt {
    font-size: 0.8em;
    color: #555;
    flex-grow: 1;
    line-height: 1.4;
  }

  .project-tags {
    font-size: 0.75em;
    color: #555;
  }

  .project-tags span {
    background: #f5f5f5;
    padding: 0.2em 0.6em;
    border-radius: 3px;
    margin-right: 0.5em;
  }

  .project-tag {
    font-size: 0.65em;
    background-color: #eef2f7;
    color: #4a6785;
    padding: 3px 8px;
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .project-tag:hover {
    background-color: #dde5ef;
  }

  .project-tag.active {
    background-color: #0033A0;
    color: white;
  }
  
  /* Navigation tabs */
  .nav-tabs {
    display: flex;
    margin-bottom: 25px;
    border-bottom: 1px solid #ddd;
    gap: 8px;
    font-size: 0.9em;
  }
  
  .nav-tab {
    padding: 6px 14px;
    background-color: #f8f9fa;
    border-radius: 5px 5px 0 0;
    cursor: pointer;
    border: 1px solid #ddd;
    border-bottom: none;
  }
  
  .nav-tab.active {
    background-color: #ffffff;
    border-bottom: 2px solid #0033A0;
    color: #0033A0;
    font-weight: bold;
  }
  
  /* All tags row */
  .all-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
  }

  .tag-filter {
    font-size: 0.75em;
    background-color: #f0f0f0;
    color: #666;
    padding: 5px 10px;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .tag-filter:hover {
    background-color: #e6e6e6;
  }

  .tag-filter.active {
    background-color: #0033A0;
    color: white;
  }

  .clear-filters {
    font-size: 0.75em;
    color: #0033A0;
    cursor: pointer;
    margin-left: 10px;
    display: none;
  }
  
  /* Make text smaller and responsive */
  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
  
  @media (min-width: 769px) and (max-width: 1200px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1201px) {
    .projects-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .category-section {
    width: 100%;
  }
  
  .hidden {
    display: none !important;
  }

  /* Make all text smaller on the research page */
  .page__content {
    font-size: 0.75em;
    padding-top: 1em;
  }
  
  /* Make headings slightly smaller too */
  .page__content h2 {
    font-size: 1.25em;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  
  .page__content h3 {
    font-size: 1.05em;
    margin-top: 1.2em;
    margin-bottom: 0.5em;
  }
  
  /* Adjust list items */
  .page__content ul li {
    font-size: 0.85em;
    margin-bottom: 0.4em;
  }
  
  /* Style for research projects */
  .project {
    margin-bottom: 2em;
  }
  
  .project-meta {
    font-size: 0.9em;
    color: #666;
    margin-bottom: 0.5em;
  }
  
  .project-description {
    font-size: 0.9em;
    margin-bottom: 1em;
  }

  .project-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    cursor: pointer;
    pointer-events: all;
    text-decoration: none;
  }
</style>

<div class="nav-tabs">
  <div class="nav-tab active" data-category="urban" onclick="showCategory('urban')">Urban Research</div>
  <div class="nav-tab" data-category="cs" onclick="showCategory('cs')">Computer Science</div>
  <div class="nav-tab" data-category="design" onclick="showCategory('design')">Design Projects</div>
</div>

<div id="urban-tags" class="all-tags">
  <div class="tag-filter" data-tag="urban-analytics">Urban Analytics</div>
  <div class="tag-filter" data-tag="energy">Energy</div>
  <div class="tag-filter" data-tag="transportation">Transportation</div>
  <div class="tag-filter" data-tag="social-equity">Social Equity</div>
  <div class="tag-filter" data-tag="simulation">Simulation</div>
  <div class="tag-filter" data-tag="walkability">Walkability</div>
  <div class="tag-filter" data-tag="urban-planning">Urban Planning</div>
  <div class="tag-filter" data-tag="climate-resilience">Climate Resilience</div>
  <div class="tag-filter" data-tag="pedestrian-modeling">Pedestrian Modeling</div>
  <div class="clear-filters">Clear filters</div>
</div>

<div id="cs-tags" class="all-tags" style="display: none;">
  <div class="tag-filter" data-tag="computer-vision">Computer Vision</div>
  <div class="tag-filter" data-tag="machine-learning">Machine Learning</div>
  <div class="tag-filter" data-tag="deep-learning">Deep Learning</div>
  <div class="tag-filter" data-tag="human-computer-interaction">Human-Computer Interaction</div>
  <div class="tag-filter" data-tag="mobile-development">Mobile Development</div>
  <div class="tag-filter" data-tag="data-science">Data Science</div>
  <div class="tag-filter" data-tag="education-technology">Education Technology</div>
  <div class="tag-filter" data-tag="computer-science">Computer Science</div>
  <div class="clear-filters">Clear filters</div>
</div>

<div id="design-tags" class="all-tags" style="display: none;">
  <div class="tag-filter" data-tag="urban-design">Urban Design</div>
  <div class="tag-filter" data-tag="ecological-design">Ecological Design</div>
  <div class="tag-filter" data-tag="education-design">Education Design</div>
  <div class="tag-filter" data-tag="public-space">Public Space</div>
  <div class="tag-filter" data-tag="infrastructure">Infrastructure</div>
  <div class="tag-filter" data-tag="economic-development">Economic Development</div>
  <div class="tag-filter" data-tag="social-impact">Social Impact</div>
  <div class="tag-filter" data-tag="community">Community</div>
  <div class="clear-filters">Clear filters</div>
</div>

<div id="urban-projects" class="category-section">
  <div class="projects-grid">
    <!-- Urban Research Project: Newark Heat Resilience -->
    <div class="project-box" data-tags="urban-planning,climate-resilience,social-equity,urban-analytics" data-date="2025-08-10">
      <a href="/projects/newark-heat-resilience/" class="project-link" aria-label="View Newark Heat Resilience project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/newark-heat-resilience.jpg" alt="Newark Heat Resilience Project">
      </div>
      <div class="project-title">Newark Heat Vulnerability & Resilience</div>
      <div class="project-subtitle">Mapping Urban Heat Islands and Vulnerable Populations</div>
      <div class="project-excerpt">
        This research maps urban heat islands in Newark, NJ, and identifies neighborhoods with vulnerable populations to prioritize heat resilience interventions and resources...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('urban-planning')">Urban Planning</span>
        <span class="project-tag" onclick="filterByTag('climate-resilience')">Climate Resilience</span>
        <span class="project-tag" onclick="filterByTag('social-equity')">Social Equity</span>
        <span class="project-tag" onclick="filterByTag('urban-analytics')">Urban Analytics</span>
      </div>
    </div>
    
    <!-- Urban Research Project: Maine DOT -->
    <div class="project-box" data-tags="transportation,walkability,urban-analytics,pedestrian-modeling" data-date="2025-06-10">
      <a href="/projects/maine-pedestrian-model/" class="project-link" aria-label="View Maine DOT Pedestrian Volume Estimation project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/maine-pedestrian.jpg" alt="Maine Pedestrian Modeling Project">
      </div>
      <div class="project-title">Maine DOT Pedestrian Volume Estimation</div>
      <div class="project-subtitle">Developing a pedestrian volume model to support infrastructure and safety planning</div>
      <div class="project-excerpt">
        This project addresses the lack of pedestrian volume data in Maine by developing a comprehensive model to estimate pedestrian activity, enabling better decision-making around non-motorized street user needs...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('transportation')">Transportation</span>
        <span class="project-tag" onclick="filterByTag('walkability')">Walkability</span>
        <span class="project-tag" onclick="filterByTag('urban-analytics')">Urban Analytics</span>
        <span class="project-tag" onclick="filterByTag('pedestrian-modeling')">Pedestrian Modeling</span>
      </div>
    </div>
    
    <!-- Urban Research Project: SideWalk Ballet -->
    <div class="project-box" data-tags="urban-analytics,computer-vision,social-equity,urban-planning" data-date="2025-05-15">
      <a href="/projects/sidewalk-ballet/" class="project-link" aria-label="View Sidewalk Ballet project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/sidewalk-ballet.jpg" alt="SideWalk Ballet Project">
      </div>
      <div class="project-title">Sidewalk Ballet</div>
      <div class="project-subtitle">Computer Vision Analysis of Pedestrian Behavior</div>
      <div class="project-excerpt">
        Using computer vision to analyze pedestrian behavior patterns from street-level video footage, identifying the relationship between built environment features and social interactions...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('urban-analytics')">Urban Analytics</span>
        <span class="project-tag" onclick="filterByTag('computer-vision')">Computer Vision</span>
        <span class="project-tag" onclick="filterByTag('social-equity')">Social Equity</span>
        <span class="project-tag" onclick="filterByTag('urban-planning')">Urban Planning</span>
      </div>
    </div>
    
    <!-- Network Topology Project -->
    <div class="project-box" data-tags="urban-analytics,transportation,walkability,urban-planning,pedestrian-modeling,computer-science" data-date="2025-03-12">
      <a href="/projects/fragmented-network-topology/" class="project-link" aria-label="View Fragmented Network Topology project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/network-topology.jpg" alt="Fragmented Network Topology Project">
      </div>
      <div class="project-title">Automating Topology Corrections for Fragmented Networks</div>
      <div class="project-subtitle">An LLM-based interpretable model for pedestrian and cycling infrastructure</div>
      <div class="project-excerpt">
        This thesis research develops an automated system for correcting fragmented network structures in pedestrian and cycling infrastructure using graph-based diffusion models and LLM reasoning...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('urban-analytics')">Urban Analytics</span>
        <span class="project-tag" onclick="filterByTag('transportation')">Transportation</span>
        <span class="project-tag" onclick="filterByTag('walkability')">Walkability</span>
        <span class="project-tag" onclick="filterByTag('urban-planning')">Urban Planning</span>
      </div>
    </div>
    
    <!-- Urban Research Project: Boston Walker -->
    <div class="project-box" data-tags="transportation,walkability,urban-planning,urban-analytics" data-date="2024-09-15">
      <a href="/projects/boston-walker/" class="project-link" aria-label="View Boston Walker project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/boston-walker.jpg" alt="Boston Walker Project">
      </div>
      <div class="project-title">Boston Walker</div>
      <div class="project-subtitle">Analyzing Pedestrian Behavior and Infrastructure</div>
      <div class="project-excerpt">
        The Boston Walker project examines pedestrian movement patterns and infrastructure quality throughout Boston to identify areas for improvement and enhance walkability...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('transportation')">Transportation</span>
        <span class="project-tag" onclick="filterByTag('walkability')">Walkability</span>
        <span class="project-tag" onclick="filterByTag('urban-planning')">Urban Planning</span>
        <span class="project-tag" onclick="filterByTag('urban-analytics')">Urban Analytics</span>
      </div>
    </div>
    
    <!-- Urban Research Project: Neighborhood Archetypes -->
    <div class="project-box" data-tags="urban-planning,spatial-analysis,data-science,urban-analytics" data-date="2024-11-18">
      <a href="/projects/neighborhood-archetypes/" class="project-link" aria-label="View Neighborhood Archetypes project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/neighborhood-archetypes.jpg" alt="Neighborhood Archetypes Project">
      </div>
      <div class="project-title">Neighborhood Archetypes</div>
      <div class="project-subtitle">Using Data Science to Understand Urban Patterns at the Census Tract Level</div>
      <div class="project-excerpt">
        This project uses multi-dimensional clustering techniques to identify latent patterns in census tract-level data, creating a comprehensive typology of neighborhood archetypes across US metropolitan areas...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('urban-planning')">Urban Planning</span>
        <span class="project-tag" onclick="filterByTag('spatial-analysis')">Spatial Analysis</span>
        <span class="project-tag" onclick="filterByTag('data-science')">Data Science</span>
        <span class="project-tag" onclick="filterByTag('urban-analytics')">Urban Analytics</span>
      </div>
    </div>
    
    <!-- Urban Research Project: EV Charging Gap -->
    <div class="project-box" data-tags="energy,transportation,spatial-analysis,data-science" data-date="2024-06-25">
      <a href="/projects/ev-charging-gap/" class="project-link" aria-label="View EV Charging Gap project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/ev-charging-gap.jpg" alt="EV Charging Gap Project">
      </div>
      <div class="project-title">EV Charging Infrastructure Gap Analysis</div>
      <div class="project-subtitle">Spatial Analysis of Electric Vehicle Charging Station Distribution</div>
      <div class="project-excerpt">
        A spatial analysis of the distribution of electric vehicle charging stations across urban and rural environments to identify coverage gaps and prioritize new infrastructure deployments...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('energy')">Energy</span>
        <span class="project-tag" onclick="filterByTag('transportation')">Transportation</span>
        <span class="project-tag" onclick="filterByTag('spatial-analysis')">Spatial Analysis</span>
        <span class="project-tag" onclick="filterByTag('data-science')">Data Science</span>
      </div>
    </div>
    
    <!-- Urban Research Project: Wildfire Evacuation -->
    <div class="project-box" data-tags="transportation,simulation,urban-planning" data-date="2023-12-10">
      <a href="/projects/wildfire-evacuation/" class="project-link" aria-label="View Wildfire Evacuation Simulation project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/wildfire-evacuation.jpg" alt="Berkeley Wildfire Evacuation Project">
      </div>
      <div class="project-title">Berkeley Wildfire Evacuation Simulation</div>
      <div class="project-subtitle">Optimizing Wildfire Evacuations Integrated Traffic Simulation Strategies</div>
      <div class="project-excerpt">
        This simulation project models wildfire evacuation scenarios in Berkeley, integrating traffic simulation strategies to optimize emergency evacuation procedures...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('transportation')">Transportation</span>
        <span class="project-tag" onclick="filterByTag('simulation')">Simulation</span>
        <span class="project-tag" onclick="filterByTag('urban-planning')">Urban Planning</span>
      </div>
    </div>
  </div>
</div>

<div id="cs-projects" class="category-section" style="display: none;">
  <div class="projects-grid">
    <!-- CS Project: Gist, Blur, and Attention -->
    <div class="project-box" data-tags="computer-vision,machine-learning,human-computer-interaction,computer-science" data-date="2025-05-10">
      <a href="/projects/gist-blur-attention/" class="project-link" aria-label="View Gist, Blur, and Attention project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/gist-blur-attention.jpg" alt="Gist, Blur, and Attention Project">
      </div>
      <div class="project-title">Gist, Blur, and Attention</div>
      <div class="project-subtitle">Analyzing Temporally Averaged Visual Representations for Alignment with Human Engagement Signals</div>
      <div class="project-excerpt">
        This project investigates the alignment between machine vision models and human perception by contrasting standard VLM analysis with temporally averaged image representations that better match human visual processing...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('computer-vision')">Computer Vision</span>
        <span class="project-tag" onclick="filterByTag('machine-learning')">Machine Learning</span>
        <span class="project-tag" onclick="filterByTag('human-computer-interaction')">HCI</span>
        <span class="project-tag" onclick="filterByTag('computer-science')">Computer Science</span>
      </div>
    </div>
    
    <!-- CS Project: Write Out Loud -->
    <div class="project-box" data-tags="human-computer-interaction,mobile-development,machine-learning,computer-science,education-technology" data-date="2025-05-08">
      <a href="/projects/write-out-loud/" class="project-link" aria-label="View Write Out Loud project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/write-out-loud.jpg" alt="Write Out Loud Project">
      </div>
      <div class="project-title">Write Out Loud</div>
      <div class="project-subtitle">A Multi-modal Way to Learn Chinese Characters and More</div>
      <div class="project-excerpt">
        An iPadOS application leveraging multimodal learning through synchronized kinesthetic and auditory inputs to enhance Chinese character learning, using Apple Pencil and speech recognition...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('human-computer-interaction')">HCI</span>
        <span class="project-tag" onclick="filterByTag('mobile-development')">Mobile Dev</span>
        <span class="project-tag" onclick="filterByTag('education-technology')">EdTech</span>
        <span class="project-tag" onclick="filterByTag('computer-science')">Computer Science</span>
      </div>
    </div>
    
    <!-- CS Project: SideWalk Ballet -->
    <div class="project-box" data-tags="computer-vision,machine-learning,computer-science,urban-analytics" data-date="2025-05-15">
      <a href="/projects/sidewalk-ballet/" class="project-link" aria-label="View Sidewalk Ballet project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/sidewalk-ballet.jpg" alt="SideWalk Ballet Project">
      </div>
      <div class="project-title">Sidewalk Ballet</div>
      <div class="project-subtitle">Computer Vision Analysis of Pedestrian Behavior</div>
      <div class="project-excerpt">
        Using computer vision to analyze pedestrian behavior patterns from street-level video footage, identifying the relationship between built environment features and social interactions...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('computer-vision')">Computer Vision</span>
        <span class="project-tag" onclick="filterByTag('machine-learning')">Machine Learning</span>
        <span class="project-tag" onclick="filterByTag('urban-analytics')">Urban Analytics</span>
        <span class="project-tag" onclick="filterByTag('computer-science')">Computer Science</span>
      </div>
    </div>
    
    <!-- CS Project: Automated Neighborhood Archetype -->
    <div class="project-box" data-tags="machine-learning,deep-learning,computer-science,data-science,urban-analytics" data-date="2024-11-18">
      <a href="/projects/neighborhood-archetypes/" class="project-link" aria-label="View Neighborhood Archetypes project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/neighborhood-archetypes.jpg" alt="Neighborhood Archetypes Project">
      </div>
      <div class="project-title">Automated Neighborhood Archetype</div>
      <div class="project-subtitle">Integrating Morphology and Topology for Urban Building Energy Modeling</div>
      <div class="project-excerpt">
        This research develops a graph-based representation enriched with metadata, mapping cities into a spectrum of representative neighborhoods to capture both morphological characteristics of buildings and their topological relationships...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('machine-learning')">Machine Learning</span>
        <span class="project-tag" onclick="filterByTag('deep-learning')">Deep Learning</span>
        <span class="project-tag" onclick="filterByTag('data-science')">Data Science</span>
        <span class="project-tag" onclick="filterByTag('urban-analytics')">Urban Analytics</span>
        <span class="project-tag" onclick="filterByTag('computer-science')">Computer Science</span>
      </div>
    </div>
    
    <!-- CS Project: Fragmented Network Topology -->
    <div class="project-box" data-tags="machine-learning,deep-learning,computer-science,data-science" data-date="2025-03-12">
      <a href="/projects/fragmented-network-topology/" class="project-link" aria-label="View Fragmented Network Topology project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/network-topology.jpg" alt="Fragmented Network Topology Project">
      </div>
      <div class="project-title">Automating Topology Corrections for Fragmented Networks</div>
      <div class="project-subtitle">An LLM-based interpretable model for network structure correction</div>
      <div class="project-excerpt">
        This research develops an automated system for correcting fragmented network structures by integrating graph-based diffusion models, large language model (LLM) reasoning, and multi-modal data validation...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('machine-learning')">Machine Learning</span>
        <span class="project-tag" onclick="filterByTag('deep-learning')">Deep Learning</span>
        <span class="project-tag" onclick="filterByTag('computer-science')">Computer Science</span>
        <span class="project-tag" onclick="filterByTag('data-science')">Data Science</span>
      </div>
    </div>
  
    <!-- CS Project: Sparse Matrix Imputation -->
    <div class="project-box" data-tags="machine-learning,deep-learning,computer-science,data-science" data-date="2024-12-10">
      <a href="/projects/sparse-matrix-imputation/" class="project-link" aria-label="View Sparse Matrix Imputation project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/sparse-matrix.jpg" alt="Sparse Matrix Imputation Project">
      </div>
      <div class="project-title">Sparse Matrix Imputation Using Multi-Objective Loss Function Balancing</div>
      <div class="project-subtitle">Deep learning approach for processing sparse matrices directly without low-rank approximations</div>
      <div class="project-excerpt">
        This project develops a novel method for processing sparse matrices directly without low-rank approximations, using a multi-objective loss function that balances learning from both data-dense and sparse regions...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('machine-learning')">Machine Learning</span>
        <span class="project-tag" onclick="filterByTag('deep-learning')">Deep Learning</span>
        <span class="project-tag" onclick="filterByTag('data-science')">Data Science</span>
        <span class="project-tag" onclick="filterByTag('computer-science')">Computer Science</span>
      </div>
    </div>
  </div>
</div>

<div id="design-projects" class="category-section" style="display: none;">
  <div class="projects-grid">
    <!-- Design Project: WHERE TO RETURN -->
    <div class="project-box" data-tags="urban-design,public-space,infrastructure,community" data-date="2023-05-10">
      <a href="/projects/where-to-return/" class="project-link" aria-label="View WHERE TO RETURN project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/cemetery-design.jpg" alt="Cemetery Design Project">
      </div>
      <div class="project-title">WHERE TO RETURN</div>
      <div class="project-subtitle">Cemetery as Infrastructure, Public Space and Culture Identity</div>
      <div class="project-excerpt">
        This design project reimagines cemeteries as multifunctional spaces serving as infrastructure, public space, and cultural landmarks that preserve community identity...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('urban-design')">Urban Design</span>
        <span class="project-tag" onclick="filterByTag('public-space')">Public Space</span>
        <span class="project-tag" onclick="filterByTag('infrastructure')">Infrastructure</span>
        <span class="project-tag" onclick="filterByTag('community')">Community</span>
      </div>
    </div>
    
    <!-- Design Project: Thorns & Blossom -->
    <div class="project-box" data-tags="urban-design,economic-development,community,social-impact" data-date="2022-07-20">
      <a href="/projects/thorns-blossom/" class="project-link" aria-label="View Thorns & Blossom project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/flowers-industry.jpg" alt="Flowers Industry Project">
      </div>
      <div class="project-title">Thorns & Blossom</div>
      <div class="project-subtitle">Public Power Strengthened by Re-introducing Flowers Industry to Richmond</div>
      <div class="project-excerpt">
        This project explores the revitalization of Richmond's economy and community through the reintroduction of the flower industry, connecting history with future sustainability...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('urban-design')">Urban Design</span>
        <span class="project-tag" onclick="filterByTag('economic-development')">Economic Development</span>
        <span class="project-tag" onclick="filterByTag('community')">Community</span>
        <span class="project-tag" onclick="filterByTag('social-impact')">Social Impact</span>
      </div>
    </div>
    
    <!-- Design Project: Design for Children of Migrant -->
    <div class="project-box" data-tags="urban-design,public-space,social-impact,community" data-date="2021-08-15">
      <a href="/projects/migrant-children/" class="project-link" aria-label="View Design for Children of Migrant project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/migrant-children.jpg" alt="Design for Children of Migrant Project">
      </div>
      <div class="project-title">Design for Children of Migrant</div>
      <div class="project-subtitle">Transformations of Public Spaces of Urban Village</div>
      <div class="project-excerpt">
        This design initiative focuses on transforming public spaces in urban villages to better serve the needs of migrant children, creating inclusive and educational environments...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('urban-design')">Urban Design</span>
        <span class="project-tag" onclick="filterByTag('public-space')">Public Space</span>
        <span class="project-tag" onclick="filterByTag('social-impact')">Social Impact</span>
        <span class="project-tag" onclick="filterByTag('community')">Community</span>
      </div>
    </div>
    
    <!-- Design Project: Reimagining Salinas Valley -->
    <div class="project-box" data-tags="urban-design,ecological-design,education-design,public-space,community,social-impact" data-date="2022-12-10">
      <a href="/projects/reimagining-salinas-valley/" class="project-link" aria-label="View Reimagining Salinas Valley project details"></a>
      <div class="project-image">
        <img src="/assets/images/projects/salinas-valley.jpg" alt="Reimagining Salinas Valley Project">
      </div>
      <div class="project-title">Reimaging Education, Rewilding Valley</div>
      <div class="project-subtitle">A new knowledge-Production envision for Salinas Valley</div>
      <div class="project-excerpt">
        This project addresses emerging challenges to Salinas Valley's resources, such as soil fertility loss, water scarcity, and biodiversity decline, by rebuilding the relationship between humans and the land through education...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('urban-design')">Urban Design</span>
        <span class="project-tag" onclick="filterByTag('ecological-design')">Ecological Design</span>
        <span class="project-tag" onclick="filterByTag('education-design')">Education Design</span>
        <span class="project-tag" onclick="filterByTag('public-space')">Public Space</span>
        <span class="project-tag" onclick="filterByTag('community')">Community</span>
        <span class="project-tag" onclick="filterByTag('social-impact')">Social Impact</span>
      </div>
    </div>
  </div>
</div>

<script>
  // On page load, ensure the default category is shown
  document.addEventListener('DOMContentLoaded', function() {
    // Show urban by default
    showCategory('urban');
    
    // Attach click handlers to tabs to ensure sorting happens on tab change
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        showCategory(category);
      });
    });
    
    // Log all project dates to check if they're properly set
    console.log("========== ALL PROJECT DATES ==========");
    document.querySelectorAll('.project-box').forEach(project => {
      const title = project.querySelector('.project-title').textContent;
      const date = project.getAttribute('data-date');
      console.log(`${title}: ${date}`);
    });
  });

  function showCategory(category) {
    console.log(`Showing category: ${category}`);
    // Hide all category sections
    document.querySelectorAll('.category-section').forEach(section => {
      section.style.display = 'none';
    });
    
    // Hide all tag filters
    document.querySelectorAll('.all-tags').forEach(tagSection => {
      tagSection.style.display = 'none';
    });
    
    // Deactivate all tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.classList.remove('active');
    });
    
    // Show the selected category and its tags
    document.getElementById(category + '-projects').style.display = 'block';
    document.getElementById(category + '-tags').style.display = 'flex';
    
    // Activate the clicked tab
    document.querySelector('.nav-tab[data-category="' + category + '"]').classList.add('active');
    
    // Reset all filters
    clearFilters();
    
    // Sort projects by date
    sortProjectsByDate(category);
  }
  
  // Function to sort projects by date (newest first)
  function sortProjectsByDate(category) {
    console.log(`\n========== SORTING ${category.toUpperCase()} PROJECTS ==========`);
    const projectsContainer = document.querySelector(`#${category}-projects .projects-grid`);
    const projects = Array.from(projectsContainer.children);
    
    console.log(`Found ${projects.length} projects to sort`);
    
    // Log all projects before sorting
    console.log("BEFORE SORTING:");
    projects.forEach(project => {
      const title = project.querySelector('.project-title').textContent;
      const date = project.getAttribute('data-date');
      console.log(`${title}: ${date}`);
    });
    
    // Sort projects based on date attribute
    projects.sort((a, b) => {
      const dateA = new Date(a.getAttribute('data-date') || '2000-01-01');
      const dateB = new Date(b.getAttribute('data-date') || '2000-01-01');
      
      // Debug logging
      console.log(`Comparing ${a.querySelector('.project-title').textContent} (${a.getAttribute('data-date')}) with ${b.querySelector('.project-title').textContent} (${b.getAttribute('data-date')})`);
      
      return dateB - dateA; // Sort in descending order (newest first)
    });
    
    // Log the sorted order
    console.log("\nAFTER SORTING:");
    projects.forEach(project => {
      console.log(`${project.querySelector('.project-title').textContent} - ${project.getAttribute('data-date')}`);
    });
    
    // Remove all existing projects from the DOM
    while (projectsContainer.firstChild) {
      projectsContainer.removeChild(projectsContainer.firstChild);
    }
    
    // Add sorted projects back to container
    projects.forEach(project => {
      projectsContainer.appendChild(project);
    });
    
    console.log(`Finished sorting for ${category}`);
  }
  
  function filterByTag(tag) {
    const currentCategory = document.querySelector('.nav-tab.active').getAttribute('data-category');
    const tagFilters = document.querySelectorAll(`#${currentCategory}-tags .tag-filter`);
    const clearBtn = document.querySelector(`#${currentCategory}-tags .clear-filters`);
    const activeFilter = document.querySelector(`#${currentCategory}-tags .tag-filter[data-tag="${tag}"]`);
    
    // Toggle active state of clicked filter
    if (activeFilter.classList.contains('active')) {
      activeFilter.classList.remove('active');
    } else {
      // Remove active state from all filters
      tagFilters.forEach(filter => filter.classList.remove('active'));
      // Set active state on clicked filter
      activeFilter.classList.add('active');
    }
    
    // Check if any filter is active
    const hasActiveFilter = [...tagFilters].some(filter => filter.classList.contains('active'));
    
    // Show/hide clear filters button
    clearBtn.style.display = hasActiveFilter ? 'inline-block' : 'none';
    
    // Get all project boxes in current category
    const projectBoxes = document.querySelectorAll(`#${currentCategory}-projects .project-box`);
    
    if (!hasActiveFilter) {
      // If no filter is active, show all projects
      projectBoxes.forEach(box => box.classList.remove('hidden'));
    } else {
      // Filter projects based on active tag
      projectBoxes.forEach(box => {
        const projectTags = box.getAttribute('data-tags').split(',');
        if (projectTags.includes(tag)) {
          box.classList.remove('hidden');
        } else {
          box.classList.add('hidden');
        }
      });
    }
  }
  
  function clearFilters() {
    const currentCategory = document.querySelector('.nav-tab.active').getAttribute('data-category');
    const tagFilters = document.querySelectorAll(`#${currentCategory}-tags .tag-filter`);
    const clearBtn = document.querySelector(`#${currentCategory}-tags .clear-filters`);
    const projectBoxes = document.querySelectorAll(`#${currentCategory}-projects .project-box`);
    
    // Remove active state from all filters
    tagFilters.forEach(filter => filter.classList.remove('active'));
    
    // Hide clear filters button
    clearBtn.style.display = 'none';
    
    // Show all projects
    projectBoxes.forEach(box => box.classList.remove('hidden'));
  }
  
  // Initialize tag filters
  document.querySelectorAll('.tag-filter').forEach(filter => {
    filter.setAttribute('data-tag', filter.getAttribute('data-tag'));
    filter.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent event bubbling
      filterByTag(this.getAttribute('data-tag'));
    });
  });
  
  // Initialize clear filters buttons
  document.querySelectorAll('.clear-filters').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent event bubbling
      clearFilters();
    });
  });
</script> 