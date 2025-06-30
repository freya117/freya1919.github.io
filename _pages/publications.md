---
title: "Publications"
permalink: /publications/
layout: single
author_profile: true
header:
  overlay_color: "#0033A0"
  overlay_filter: "0.2"
---

<style>
  /* Make all content smaller */
  .page__content {
    font-size: 0.7em;
    padding-top: 1em; /* Add top spacing to replace the removed title */
  }
  
  /* Hide the page title */
  .page__title {
    display: none;
  }
  
  .publication-item {
    display: flex;
    margin-bottom: 1.5em;
    padding-bottom: 0.7em;
    border-bottom: 1px solid #f2f3f3;
    gap: 1em;
  }
  
  .publication-image {
    flex: 0 0 140px;
    width: 140px;
    height: 105px;
    
    a {
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
        transition: transform 0.2s ease, opacity 0.2s ease;
      }
      
      &:hover {
        img {
          transform: scale(1.02); // Very subtle zoom on hover
          opacity: 0.9;
        }
      }
    }
  }
  
  .publication-content {
    flex: 1;
    
    h4 {
      font-size: 0.9em;
      font-weight: bold;
      margin-bottom: 0.3em;
      margin-top: 0;
      
      a {
        color: #2c3e50 !important; // Same color as before
        text-decoration: none !important;
        font-size: 1em !important; // Same size as before
        font-weight: 600 !important; // Same weight as before
        line-height: 1.3 !important; // Same line height as before
        display: block; // Make entire heading clickable
        
        &:hover {
          color: #1a252f !important; // Slightly darker on hover
          text-decoration: none !important; // No underline on hover
        }
        
        &:visited {
          color: #2c3e50 !important; // Same color even after visited
        }
        
        &:focus {
          color: #2c3e50 !important; // Same color on focus
          outline: none;
        }
      }
    }
  }
  
  .publication-authors {
    font-size: 0.8em;
    margin-bottom: 0.3em;
  }
  
  .publication-venue {
    font-style: italic;
    font-size: 0.8em;
    margin-bottom: 0.4em;
  }
  
  .publication-links {
    margin-top: 0.4em;
    font-size: 0.7em;
  }
  
  .publication-links a {
    margin-right: 1em;
    text-decoration: none;
    color: #0033A0;
  }
  
  .publication-links a:hover {
    text-decoration: underline;
  }
  
  .publication-abstract {
    font-size: 0.75em;
    margin-top: 0.4em;
    color: #555;
    line-height: 1.3;
  }
  
  .publication-year {
    font-weight: bold;
    font-size: 1em;
    margin-top: 1.3em;
    margin-bottom: 0.7em;
    padding-bottom: 0.3em;
    border-bottom: 2px solid #f2f3f3;
  }
  
  // Mobile responsive adjustments for clickable elements
  @media (max-width: 768px) {
    .publication-item {
      flex-direction: column;
      gap: 0.5em;
      
      .publication-image {
        flex: none;
        width: 100%;
        height: 175px;
        
        a {
          &:hover {
            img {
              transform: none; // No zoom on mobile to avoid touch issues
              opacity: 1;
            }
          }
        }
      }
      
      .publication-content {
        h4 {
          a {
            &:hover {
              color: #2c3e50 !important; // No hover effect on mobile
            }
          }
        }
      }
    }
  }
</style>

<div class="publication-year">2025</div>

<div class="publication-item">
  <div class="publication-image">
    <a href="/projects/gist-blur-attention/" target="_blank">
      <img src="/assets/images/publications/sidewalk-moments-placeholder.jpg" alt="SIDEWALK MOMENTS publication">
    </a>
  </div>
  <div class="publication-content">
    <h4>
      <a href="/projects/gist-blur-attention/" target="_blank">
        Sidewalk Moments: Exploring the Impact of Built Environment on Attraction via Continuous Visual Experiences
      </a>
    </h4>
    <div class="publication-authors">
      Liu Liu, <strong>Freya Tan</strong>, Fábio Duarte, and Carlo Ratti
    </div>
    <div class="publication-venue">
      (In preparation)
    </div>
    <div class="publication-links">
      <a href="/projects/gist-blur-attention/" target="_blank">[Project Page]</a>
    </div>
  </div>
</div>

<div class="publication-item">
  <div class="publication-image">
    <a href="/projects/neighborhood-archetypes/" target="_blank">
      <img src="/assets/images/publications/neighborhood-archetype-placeholder.jpg" alt="Automated Neighborhood Archetype publication">
    </a>
  </div>
  <div class="publication-content">
    <h4>
      <a href="/projects/neighborhood-archetypes/" target="_blank">
        Automated Neighborhood Archetype: Integrating Morphology and Topology for Urban Building Energy Modeling
      </a>
    </h4>
    <div class="publication-authors">
      Xinwei Zhuang, <strong>Freya Tan</strong>, Luisa Caldas
    </div>
    <div class="publication-venue">
      (In preparation)
    </div>
    <div class="publication-links">
      <a href="/projects/neighborhood-archetypes/" target="_blank">[Project Page]</a>
    </div>
  </div>
</div>

<div class="publication-item">
  <div class="publication-image">
    <a href="/projects/sidewalk-ballet/" target="_blank">
      <img src="/assets/images/publications/sidewalk-ballet.jpg" alt="Seeing HAI publication">
    </a>
  </div>
  <div class="publication-content">
    <h4>
      <a href="/projects/sidewalk-ballet/" target="_blank">
        Seeing "HAI": Human Activities and Interactions Detection from Streetviews through LLMs
      </a>
    </h4>
    <div class="publication-authors">
      Liu Liu, Marco Cipriano, <strong>Freya Tan</strong>, Aleksandra Kudaeva, Andres Sevtsuk
    </div>
    <div class="publication-venue">
      2025 ACSP 65th Annual Conference
    </div>
    <div class="publication-links">
      <a href="/projects/sidewalk-ballet/" target="_blank">[Project Page]</a>
    </div>
  </div>
</div>

<div class="publication-year">2023</div>

<div class="publication-item">
  <div class="publication-image">
    <a href="/projects/reimagining-salinas-valley/" target="_blank">
      <img src="/assets/images/publications/salinas-valley-placeholder.jpg" alt="Reimagining Salinas Valley publication">
    </a>
  </div>
  <div class="publication-content">
    <h4>
      <a href="/projects/reimagining-salinas-valley/" target="_blank">
        Chapter 4: Reimagining Education, Rewinding Valley: A New Knowledge-Production Vision for Salinas Valley
      </a>
    </h4>
    <div class="publication-authors">
      <strong>Tan, F.</strong>, Yu, M., Gogri, Y.
    </div>
    <div class="publication-venue">
      In Ettore Santi (Auth.), Margaret Crawford (ed.), Designing the Rural. Urban Design in Rural California, UC Berkeley
    </div>
    <div class="publication-links">
      <a href="/projects/reimagining-salinas-valley/" target="_blank">[Project Page]</a>
    </div>
  </div>
</div> 