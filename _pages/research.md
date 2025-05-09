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
    border: none;
    border-radius: 8px;
    padding: 15px;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
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
    font-size: 1.1em;
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
    font-size: 0.9em;
    color: #555;
    flex-grow: 1;
    line-height: 1.3;
  }

  .project-tags {
    font-size: 0.85em;
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
</style>

<div class="nav-tabs">
  <div class="nav-tab active" onclick="showCategory('research')">Research Projects</div>
  <div class="nav-tab" onclick="showCategory('design')">Design Projects</div>
</div>

<div id="research-tags" class="all-tags">
  <div class="tag-filter" data-tag="urban-analytics">Urban Analytics</div>
  <div class="tag-filter" data-tag="computer-vision">Computer Vision</div>
  <div class="tag-filter" data-tag="energy">Energy</div>
  <div class="tag-filter" data-tag="transportation">Transportation</div>
  <div class="tag-filter" data-tag="social-equity">Social Equity</div>
  <div class="tag-filter" data-tag="simulation">Simulation</div>
  <div class="tag-filter" data-tag="walkability">Walkability</div>
  <div class="tag-filter" data-tag="urban-planning">Urban Planning</div>
  <div class="clear-filters">Clear filters</div>
</div>

<div id="design-tags" class="all-tags" style="display: none;">
  <div class="tag-filter" data-tag="urban-design">Urban Design</div>
  <div class="tag-filter" data-tag="public-space">Public Space</div>
  <div class="tag-filter" data-tag="infrastructure">Infrastructure</div>
  <div class="tag-filter" data-tag="economic-development">Economic Development</div>
  <div class="tag-filter" data-tag="social-impact">Social Impact</div>
  <div class="tag-filter" data-tag="community">Community</div>
  <div class="clear-filters">Clear filters</div>
</div>

<div id="research-projects" class="category-section">
  <div class="projects-grid">
    <!-- Research Project 1 -->
    <div class="project-box" data-tags="urban-analytics,computer-vision,social-equity,urban-planning">
      <div class="project-image">
        <img src="/assets/images/projects/sidewalk-ballet.jpg" alt="SideWalk Ballet Project">
      </div>
      <div class="project-title">SideWalk Ballet</div>
      <div class="project-subtitle">Detecting Social Activities through geo-tagged Urban Visual Contents</div>
      <div class="project-excerpt">
        This project originated from my thesis, which involved the collection of millions of photos from 26 cities. The objective was to utilize deep learning to analyze urban social activities through visual content...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('urban-analytics')">Urban Analytics</span>
        <span class="project-tag" onclick="filterByTag('computer-vision')">Computer Vision</span>
        <span class="project-tag" onclick="filterByTag('social-equity')">Social Equity</span>
        <span class="project-tag" onclick="filterByTag('urban-planning')">Urban Planning</span>
      </div>
    </div>
    
    <!-- Research Project 2 -->
    <div class="project-box" data-tags="energy,urban-planning,simulation">
      <div class="project-image">
        <img src="/assets/images/projects/neighborhood-archetype.jpg" alt="Neighborhood Archetype Project">
      </div>
      <div class="project-title">Automated Neighborhood Archetype</div>
      <div class="project-subtitle">Integrating Morphology and Topology for Urban Building Energy Modeling</div>
      <div class="project-excerpt">
        This research focuses on creating automated neighborhood archetypes by integrating urban morphology and topology to improve building energy modeling performance...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('energy')">Energy</span>
        <span class="project-tag" onclick="filterByTag('urban-planning')">Urban Planning</span>
        <span class="project-tag" onclick="filterByTag('simulation')">Simulation</span>
      </div>
    </div>
    
    <!-- Research Project 3 -->
    <div class="project-box" data-tags="transportation,social-equity,urban-planning">
      <div class="project-image">
        <img src="/assets/images/projects/ev-charging.jpg" alt="EV Charging Project">
      </div>
      <div class="project-title">Electric Vehicle Charging Gap</div>
      <div class="project-subtitle">Evaluating EV Infrastructure Accessibility in Disadvantaged Communities</div>
      <div class="project-excerpt">
        This project evaluates the accessibility of electric vehicle charging infrastructure in disadvantaged communities to identify gaps and propose equitable solutions...
      </div>
      <div class="project-tags">
        <span class="project-tag" onclick="filterByTag('transportation')">Transportation</span>
        <span class="project-tag" onclick="filterByTag('social-equity')">Social Equity</span>
        <span class="project-tag" onclick="filterByTag('urban-planning')">Urban Planning</span>
      </div>
    </div>
    
    <!-- Research Project 4 -->
    <div class="project-box" data-tags="transportation,walkability,urban-planning,urban-analytics">
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
    
    <!-- Research Project 5 -->
    <div class="project-box" data-tags="transportation,simulation,urban-planning">
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

<div id="design-projects" class="category-section" style="display: none;">
  <div class="projects-grid">
    <!-- Design Project 1 -->
    <div class="project-box" data-tags="urban-design,public-space,infrastructure,community">
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
    
    <!-- Design Project 2 -->
    <div class="project-box" data-tags="urban-design,economic-development,community,social-impact">
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
    
    <!-- Design Project 3 -->
    <div class="project-box" data-tags="urban-design,public-space,social-impact,community">
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
  </div>
</div>

<script>
  function showCategory(category) {
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
    document.querySelector('.nav-tab[onclick="showCategory(\'' + category + '\')"]').classList.add('active');
    
    // Reset all filters
    clearFilters();
  }
  
  function filterByTag(tag) {
    const currentCategory = document.querySelector('.nav-tab.active').innerText.toLowerCase().split(' ')[0];
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
    const currentCategory = document.querySelector('.nav-tab.active').innerText.toLowerCase().split(' ')[0];
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
  
  // Initialize event listeners for clear filters buttons
  document.querySelectorAll('.clear-filters').forEach(btn => {
    btn.addEventListener('click', clearFilters);
  });
  
  // Initialize tag filters
  document.querySelectorAll('.tag-filter').forEach(filter => {
    filter.addEventListener('click', function() {
      filterByTag(this.getAttribute('data-tag'));
    });
  });
</script> 