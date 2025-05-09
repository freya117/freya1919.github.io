---
layout: wide
author_profile: false
feature_row:
  - image_path: /assets/images/projects/sidewalk-ballet.jpg
    alt: "Sidewalk Ballet Project"
    title: "Sidewalk Ballet"
    excerpt: "Detecting social activities through urban visual content analysis using machine learning techniques."
    url: "/portfolio/sidewalk-ballet/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/images/projects/boston-walker.jpg
    alt: "Walkability Analytics"
    title: "Walkability Analytics"
    excerpt: "Measuring pedestrian infrastructure quality in Boston using computer vision and multi-source data."
    url: "/portfolio/walkability-analytics/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/images/projects/neighborhood-archetype.jpg
    alt: "Neighborhood Energy Modeling"
    title: "Neighborhood Archetypes"
    excerpt: "Creating neighborhood archetypes for better urban energy modeling and simulation."
    url: "/portfolio/neighborhood-archetypes/"
    btn_label: "Read More"
    btn_class: "btn--primary"
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
    font-size: 1.8em;
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
  
  /* Smaller feature row text */
  .feature__wrapper .archive__item-title {
    font-size: 0.95em;
    margin-bottom: 0.4em;
  }
  
  .feature__wrapper .archive__item-excerpt {
    font-size: 0.8em;
    line-height: 1.4;
  }
  
  .feature__wrapper .btn {
    font-size: 0.7em;
    padding: 0.5em 1em;
  }
  
  /* Center footer content */
  .footer-section {
    text-align: center;
    padding-top: 3vh;
    padding-bottom: 2vh;
    font-size: 0.9em;
  }
  
  /* Fix feature row alignment */
  .feature__wrapper {
    padding-left: 0 !important;
    padding-right: 0 !important;
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
  
  {% include feature_row %}
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
