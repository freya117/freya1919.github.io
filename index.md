---
layout: wide
author_profile: false
---

<style>
  body {
    font-size: 90%; 
  }
  
  /* Set consistent max-width for all sections to match masthead */
  .bio-section,
  .research-section,
  .feature__wrapper,
  .footer-section,
  .content-wrapper {
    max-width: 1024px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 100% !important;
  }
  
  .bio-section {
    margin-bottom: 2em;
    padding-bottom: 1.5em;
    border-bottom: 1px solid #f2f3f3;
    margin-top: 1.5em;
    padding-top: 0.5em;
  }
  
  .bio-heading {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 0.5em;
    color: #0033A0;
  }
  
  .bio-content {
    font-size: 1em;
    line-height: 1.6;
    margin-bottom: 1em;
  }
  
  /* Mobile screen styles */
  @media screen and (max-width: 768px) {
    /* Reorganize bio section for mobile */
    .bio-section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* Hide the regular bio heading on mobile */
    .bio-section > .bio-heading {
      display: none !important;
    }

    /* Stack content vertically with image first */
    .content-wrapper {
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      width: 100% !important;
    }

    /* Image above everything on mobile - smaller size and centered */
    .content-wrapper > div:last-child {
      order: -3 !important;
      flex: none !important;
      margin-bottom: 2em !important;
    }

    .content-wrapper > div:last-child img {
      max-width: 48% !important;
      height: auto !important;
      display: block !important;
      margin-left: auto !important;
      margin-right: auto !important;
    }

    /* Create mobile title that appears after image */
    .content-wrapper::before {
      content: "Freya Tan";
      order: -2 !important;
      font-size: 2em !important;
      font-weight: bold !important;
      color: #0033A0 !important;
      text-align: center !important;
      margin-bottom: 0.5em !important;
      margin-top: 0 !important;
      display: block !important;
      width: 100% !important;
    }

    /* Create mobile email that appears after title */
    .content-wrapper::after {
      content: "freya117@mit.edu";
      order: -1 !important;
      font-size: 0.9em !important;
      color: #666 !important;
      text-align: center !important;
      margin-bottom: 1.5em !important;
      display: block !important;
      width: 100% !important;
    }

    /* Adjust text block width for screens */
    .text-content {
      width: 90% !important;
      padding: 10px !important;
      order: 1 !important;
    }
  }

  /* Desktop screen styles */
  .content-wrapper {
    display: flex;
    align-items: center;
    padding-top: 2vh;
  }

  .text-content {
    flex: 2;
    padding-right: 40px;
  }

  .content-wrapper img {
    flex: 1;
    max-width: 350px;
    height: auto;
    display: block;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .research-highlights {
    margin-top: 3em;
    margin-bottom: 3em;
    padding: 2em 0;
    background-color: #f8f9fa;
    border-radius: 10px;
  }
  
  .research-highlights-heading {
    font-size: 1.4em;
    font-weight: bold;
    margin-bottom: 0.8em;
    padding-bottom: 0.3em;
    border-bottom: 2px solid #f2f3f3;
    color: #0033A0;
  }
  
  .research-highlights h2 {
    font-size: 1.4em;
    font-weight: bold;
    margin-bottom: 1.5em;
    text-align: center;
    color: #0033A0;
  }
  
  .research-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5em;
    padding: 0 1em;
  }
  
  .research-card {
    background: white;
    padding: 1.5em;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    text-align: center;
  }
  
  .research-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  }
  
  .research-icon {
    font-size: 2.5em;
    color: #0033A0;
    margin-bottom: 0.5em;
  }
  
  .research-card h3 {
    font-size: 1.1em;
    font-weight: bold;
    margin-bottom: 0.5em;
    color: #333;
  }
  
  .research-card p {
    font-size: 0.9em;
    line-height: 1.5;
    color: #666;
  }
  
  @media screen and (max-width: 768px) {
    .research-grid {
      grid-template-columns: 1fr;
      gap: 1em;
    }
    
    .research-highlights {
      margin-top: 2em;
      margin-bottom: 2em;
      padding: 1.5em 0;
    }
    
    .research-card {
      padding: 1.2em;
    }
  }
  
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .research-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  .research-section {
    margin-top: 3em;
  }
  
  .research-heading {
    font-size: 1.4em;
    font-weight: bold;
    margin-bottom: 0.8em;
    padding-bottom: 0.3em;
    border-bottom: 2px solid #f2f3f3;
    color: #0033A0;
  }
  
  .research-description {
    font-size: 0.95em;
    line-height: 1.6;
    margin-bottom: 2em;
  }
  
  /* Project grid layout - inherit styles from research page */
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
    margin-top: 10px;
  }
  
  .project-tag {
    background: #eef2f7;
    color: #4a6785;
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 0.65em;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
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
  
  /* News section styling */
  .news-section {
    margin-top: 3em;
    margin-bottom: 3em;
  }
  
  .news-heading {
    font-size: 1.4em;
    font-weight: bold;
    margin-bottom: 0.8em;
    padding-bottom: 0.3em;
    border-bottom: 2px solid #f2f3f3;
    color: #0033A0;
  }
  
  .news-description {
    font-size: 0.95em;
    line-height: 1.6;
    margin-bottom: 2em;
  }
  
  .news-list {
    margin-bottom: 30px;
  }
  
  .news-item {
    margin-bottom: 1.8em;
    padding-bottom: 1.8em;
    border-bottom: 1px solid #f2f3f3;
  }
  
  .news-item:last-child {
    border-bottom: none;
    margin-bottom: 0.8em;
  }
  
  .news-date {
    font-size: 0.8em;
    font-style: italic;
    margin-bottom: 0.4em;
    color: #666;
  }
  
  .news-title {
    font-size: 1.1em;
    font-weight: bold;
    margin-bottom: 0.5em;
  }
  
  .news-title a {
    color: #0033A0;
    text-decoration: none;
  }
  
  .news-title a:hover {
    text-decoration: underline;
  }
  
  .news-excerpt {
    font-size: 0.85em;
    color: #555;
    line-height: 1.5;
  }
  
  .news-more {
    margin-top: 1.5em;
    text-align: right;
  }
  
  .news-more a {
    font-size: 0.9em;
    color: #0033A0;
    text-decoration: none;
  }
  
  .news-more a:hover {
    text-decoration: underline;
  }
  
  /* Additional top spacing for page content */
  .page__content {
    margin-top: 1em !important;
  }
</style>

<!-- Add vertical spacing at the top -->
<div style="height: 1em;"></div>

<!-- Bio Section -->
<div class="bio-section">
  <div class="bio-heading">Freya Tan</div>
  
  <!-- Page content section -->
  <div class="content-wrapper">
    <!-- Left text content -->
    <div class="text-content bio-content">
      <p>
        <strong>Hi, I'm Freya</strong>, a dual-degree graduate student in <a href="https://www.eecs.mit.edu/">Electrical Engineering & Computer Science (EECS)</a> and <a href="https://dusp.mit.edu/">City Planning (DUSP)</a> at MIT. My work sits at the intersection of artificial intelligence, machine learning, and urban systems, with a focus on applying computational methods to real-world challenges in infrastructure, mobility, and environmental resilience.
      </p>
      
      <p>
        At the <a href="https://cityform.mit.edu/">City Form Lab</a>, I lead spatial modeling projects that apply graph-based network analysis and geospatial indexing techniques to estimate pedestrian activity across Maine. I also contribute to a research using vision-language models to detect and analyze social behavior from large-scale street view imagery datasets. My technical work includes building scalable data pipelines and applying spatial indexing and trajectory modeling to extract insights from multi-source urban data.
      </p>
      
      <p>
        Previously, I worked as a Machine Learning Engineer Intern at Symmons Evolution, where I designed predictive ML systems and LLM-powered diagnostic tools for real-time building energy management. My work focused on developing generative AI solutions that integrated structured sensor data, enhancing LLM reliability through prompt engineering.
      </p>
      
      <p>
        With a strong background in computer vision, spatial analytics, and systems modeling, I'm passionate about advancing AI-driven approaches that bridge machine learning and LLMs with real-world challenges to design more intelligent, resilient, and inclusive systems.
      </p>
    </div>
    
    <!-- Right image content - larger headshot -->
    <div style="flex: 1.2; display: flex; justify-content: center;">
      <img src="/assets/images/freya_2024.png" alt="Freya's photo" style="max-width: 100%; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    </div>
  </div>
</div>

<!-- Research Highlights Section -->
<div class="research-highlights-heading">Research Highlights</div>

<section class="research-highlights">
  <div class="content-wrapper">
    <div class="research-grid">
      <div class="research-card">
        <div class="research-icon">
          <i class="fas fa-walking"></i>
        </div>
        <h3>Human Mobility</h3>
        <p>Analyzing human movement patterns and pedestrian behavior using spatial modeling, graph-based network analysis, and large-scale trajectory data to understand urban mobility dynamics.</p>
      </div>
      <div class="research-card">
        <div class="research-icon">
          <i class="fas fa-eye"></i>
        </div>
        <h3>Spatial AI & Computer Vision</h3>
        <p>Applying computer vision and multimodal AI models to urban imagery for detecting social interactions, analyzing built environments, and extracting spatial insights from visual data.</p>
      </div>
      <div class="research-card">
        <div class="research-icon">
          <i class="fas fa-brain"></i>
        </div>
        <h3>Urban Intelligence with Large Language Models (LLMs)</h3>
        <p>Developing LLM-powered systems for urban analytics, integrating structured sensor data with generative AI to create intelligent diagnostic and predictive urban systems.</p>
      </div>
      <div class="research-card">
        <div class="research-icon">
          <i class="fas fa-city"></i>
        </div>
        <h3>Urban Computing</h3>
        <p>Building computational frameworks for smart cities, focusing on energy management, climate resilience, and infrastructure optimization using machine learning and data-driven approaches.</p>
      </div>
    </div>
  </div>
</section>

<!-- Research and Projects Section -->
<div class="research-section">
  <div class="research-heading">Research and Projects</div>
  
  <div class="research-description">
    The world is changing because of the innovative methods of AI, and so am I. Much of my recent work is still in the peer review process or in draft form, but I will post as much as I can here.
  </div>
  
  <p class="highlights" style="margin-bottom: 1.5em; font-size: 0.9em;">
    Here are some highlights from my research portfolio. For a complete list of projects, please visit my <a href="/research/">Research & Projects</a> page or check out my <a href="/publications/">Publications</a>.
  </p>
  
  {% include projects-section.html limit=3 %}
</div>

<!-- News Section -->
<div class="news-section">
  <div class="news-heading">News</div>
  
  <div class="news-description">
    Stay updated with the latest news and developments in my research and projects.
  </div>
  
  {% include news-section.html limit=3 %}
</div>
