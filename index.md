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
    /* Stack content vertically */
    .content-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* Center images and make responsive */
    .content-wrapper img {
      max-width: 100%;
      height: auto;
    }

    /* Adjust text block width for screens */
    .text-content {
      width: 90%;
      padding: 10px;
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
  
  /* Center footer content */
  .footer-section {
    text-align: center;
    padding-top: 3vh;
    padding-bottom: 2vh;
    font-size: 0.9em;
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
        <strong>Hi, I'm Freya</strong>, a graduate student at <a href="http://dusp.mit.edu">DUSP</a> and <a href="https://www.eecs.mit.edu/">EECS</a> at MIT. My research focuses on the intersection of urban science, human mobility, and computational methods. I use machine learning and data science approaches to tackle complex urban planning challenges.
      </p>
      
      <p>
        Currently, I'm a researcher at the <a href="https://cityform.mit.edu/">City Form Lab</a> at MIT, where my work focuses on pedestrian activity modeling and social behavior detection. My projects include analyzing social activities through urban visual content, developing neighborhood archetypes for energy modeling, and assessing transportation equity.
      </p>
      
      <p>
        Prior to MIT, I was at UC Berkeley, where I developed a strong foundation in urban systems and human mobility research. I've worked on multiple interdisciplinary projects combining architecture, urban planning, and computational analysis.
      </p>
      
      <p>
        I'm passionate about integrating urban planning with spatial analytics and mobility research, aiming to create more sustainable, equitable, and livable urban environments through data-driven approaches and human-centered design.
      </p>
    </div>
    
    <!-- Right image content - larger headshot -->
    <div style="flex: 1.2; display: flex; justify-content: center;">
      <img src="/assets/images/freya_2024.png" alt="Freya's photo" style="max-width: 100%; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    </div>
  </div>
</div>

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

<!-- Footer section -->
<div class="footer-section">
  <p class="highlights" style="font-size: 0.85em;">
    <a href="https://dusp.mit.edu/people/freya-tan">DUSP Profile</a> | 
    <a href="https://cityform.mit.edu/">City Form Lab</a> | 
    <a href="https://www.linkedin.com/in/freya-tan-888145258/">LinkedIn</a> | 
    <a href="https://www.researchgate.net/profile/Freya-Tan">ResearchGate</a> | 
    <a href="https://github.com/freya1919">GitHub</a>
  </p>
  <img src="https://visitor-badge.laobi.icu/badge?page_id=freya1919/freya1919.github.io" alt="Visitor Count" style="margin-top: 10px;">
</div>
