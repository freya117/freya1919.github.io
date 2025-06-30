---
permalink: /about/
title: "About Me"
layout: single
author_profile: true
header:
  overlay_color: "#0033A0"
  overlay_filter: "0.3"
---

<style>
  /* Make all text smaller on the about page */
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
  
  /* Remove the custom author avatar size for About page */
  
  /* Hide the page title */
  .page__title {
    display: none;
  }

  /* Style for education section */
  .education-item {
    margin-bottom: 1.8em;
    }
  
  .degree {
    font-weight: bold;
    margin-bottom: 0.2em;
    font-size: 0.95em;
    color: #2c3e50;
    }
  
  .degree:not(:first-child) {
    margin-top: 0.1em;
    }
  
  .university {
    font-style: italic;
    margin-bottom: 0.5em;
    margin-top: 0.4em;
    font-size: 0.9em;
    color: #666;
  }
  
  .courses {
    color: #555;
    margin-top: 0.5em;
    font-size: 0.85em;
    }
  
  /* Style for work experience subtitles */
  .page__content ul li em {
    color: #666;
    font-size: 0.9em;
    display: block;
    margin-bottom: 0.3em;
    font-style: italic;
    }
  
  /* Research Highlights Section */
  .research-highlights {
    margin: 2em 0;
    }
  
  .research-highlights h2 {
    font-size: 1.3em;
    margin-bottom: 1em;
    color: #2c3e50;
    }
  
  .research-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.2em;
    margin-top: 1em;
    }
  
  .research-card {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 1.2em;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
  
  .research-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 51, 160, 0.1);
    }
  
  .research-icon {
    color: #0033A0;
    font-size: 2em;
    margin-bottom: 0.5em;
    }
  
  .research-card h3 {
    font-size: 1em;
    color: #0033A0;
    margin: 0.5em 0 0.3em 0;
    font-weight: 600;
    }
  
  .research-card p {
    font-size: 0.85em;
    color: #555;
    line-height: 1.4;
    margin: 0;
    }
  
  @media (max-width: 768px) {
    .research-grid {
      grid-template-columns: 1fr;
      gap: 1em;
      }
    
    .research-card {
      padding: 1em;
      }
    }
</style>
  
## Bio

Hi, I'm Freya, a dual-degree graduate student in <a href="https://www.eecs.mit.edu/">Electrical Engineering & Computer Science (EECS)</a> and <a href="https://dusp.mit.edu/">City Planning (DUSP)</a> at MIT. My work sits at the intersection of artificial intelligence, machine learning, and urban systems, with a focus on applying computational methods to real-world challenges in infrastructure, mobility, and environmental resilience.

<!-- Research Highlights -->
<section class="research-highlights">
  <h2>Research Highlights</h2>
  <div class="research-grid">
    <div class="research-card">
      <div class="research-icon">
        <i class="fas fa-route"></i>
      </div>
      <h3>Human Mobility</h3>
      <p>Analyzing large-scale mobility patterns and pedestrian behavior using advanced computational models, with applications in urban planning and transportation infrastructure optimization.</p>
    </div>
    <div class="research-card">
      <div class="research-icon">
        <i class="fas fa-eye"></i>
      </div>
      <h3>Spatial AI & Computer Vision</h3>
      <p>Developing computer vision systems for urban environment analysis, integrating multimodal models to extract insights from street-view imagery and spatial data.</p>
    </div>
    <div class="research-card">
      <div class="research-icon">
        <i class="fas fa-brain"></i>
      </div>
      <h3>Urban Intelligence with LLMs</h3>
      <p>Leveraging large language models and vision-language models to understand urban dynamics, social interactions, and built environment impacts on human behavior.</p>
    </div>
    <div class="research-card">
      <div class="research-icon">
        <i class="fas fa-city"></i>
      </div>
      <h3>Urban Computing</h3>
      <p>Applying computational methods to urban challenges including energy efficiency, climate resilience, and infrastructure optimization through data-driven approaches.</p>
    </div>
  </div>
</section>

## Education

<div class="education-item">
  <div class="degree">Master of Science in Electrical Engineering and Computer Science (EECS)</div>
  <div class="degree">Master in City Planning</div>
  <div class="university">Massachusetts Institute of Technology (MIT)</div>
</div>
     
<div class="education-item">
  <div class="degree">Master of Urban Design, Urban Science Concentration</div>
  <div class="university">University of California, Berkeley</div>
</div>

* **Certificates**:
  * Machine Learning: Machine Learning Specialization Certificate
  * Software Engineering: Meta Full-Stack Engineer Certificate
  * Data Science: UC Berkeley Graduate Certificate in Applied Data Science / Geographic Information Science and Tech
  * Design: Google UI/UX Design Specialization Certificate

## Selected Awards

* **Avalon Scholarship (Full Scholarship)**, Massachusetts Institute of Technology, 2024-2026
* **[Freedom Summer Fellowship](https://freedomsummerfellowship.com/)**, 2025

## Work Experience

* **Machine Learning Engineer Intern**, Symmons Evolution (Sep 2024 - Present)  
  *Building Energy Management Solutions - ML and GenerativeAI Group*
  * Developing real-time anomaly detection and predictive ML models for multi-sensor building energy management time-series data, enhancing system reliability
  * Developed a GenAI-driven diagnostic system integrating multi-sensor data, predictive ML outputs, and equipment metadata for automated issue detection and troubleshooting
  * Optimized LLM-driven analytical workflows, enhanced LLM accuracy through prompt engineering, integrating structured domain-specific data
  * Developed efficient tokenization strategies for LLMs using PELT for segmentation, Transformer-based encoding for compression, and LSTM-AE for anomaly preservation

* **Data Science Fellow**, City of Newark - Freedom Summer Fellowship (Jun 2025 - Present)  
  *City of Newark – Office of Sustainability & Emerald Cities Collaborative*
  * Collaborating with the Office of Sustainability and Emerald Cities Collaborative to co-design and evaluate climate adaptation programs with a focus on environmental justice and equitable infrastructure
  * Conduct landscape analysis of existing urban heat mitigation strategies and identify opportunities for program expansion
  * Develop site recommendations for resilient transit shelters (RESTS) and cooling infrastructure using environmental and transit data
  * Co-design a monitoring and evaluation framework with key performance indicators to assess long-term program impact
  * Draft strategic guidance for scaling Newark's Cool Roof Program and structuring a citywide Heat Resilience Coalition

* **Spatial Modeling Assistant**, City Form Lab at MIT - Maine Department of Transportation (May 2025 - Present)
  * Development and calibration of spatial pedestrian flow models, focusing on estimating street-level foot traffic across 140 Maine municipalities
  * Conducted geospatial and sensor-based feature engineering, integrating diverse urban form and network data to enhance model accuracy and interpretability
  * Built automated data processing pipelines in Python and GIS to transform raw spatial datasets into structured, high-resolution model inputs for urban mobility analysis

* **Teaching Assistant**, MIT (Jan 2025 - May 2025)  
  *Course: Modeling Pedestrian Activity in Cities | Supervisor: Andres Sevtsuk*
  * Supported student teams in spatial analysis, pedestrian modeling, and proposal development to enhance walkability and public realm design in Kendall Square, in collaboration with the Cambridge Redevelopment Authority and community partners.
  * Guided hands-on training in GIS, network-based pedestrian analysis, and spatial modeling using Python, enabling students to assess pedestrian accessibility, simulate urban design impacts, and develop data-driven urban planning proposals.

## Research Experience

* **Research Assistant**, MIT City Form Lab, Prof. Andres Sevtsuk (Sep 2024 - Present)
    * Applied Multimodal Model (LLaVA, Qwen2-VL) to detect and analyze social behavior and group from labeled 80k street view images with time stamps in NYC
    * Building and developing scalable data pipelines to process and integrate 150k+ pedestrian trajectories with 169k road network segments, optimizing graph-based pedestrian route choice model
  
* **System Research Assistant**, UC Berkeley HuMNet Lab & eCAL Lab (Sep 2023 - Aug 2024)
  * Built a large-scale mobility analytics pipeline using TimeGeo model to identify mobility 
  patterns from 1.3 Million cell phone trajectories in the San Francisco Bay Area
  * Designed optimization algorithms for Electric Vehicle (EV) infrastructure placement, 
  balancing accessibility, energy demand and cost factors

* **Quantitative Researcher**, DCRP, UC Berkeley (Jun 2023 - Dec 2023)
    * Climate Equity for Residents of California's Mobile Home Parks, sponsored by Hellman Fellows Fund
    * Led a detailed analysis of a vast dataset encompassing over 5,000 mobile home parks, establishing a structural network to analyze existing patterns, contributing to a deeper understanding of spatial and social dynamics.
    * Employed the Secretary of State dataset to meticulously track ownership transitions across 20,000 instances, contributing to the classification and understanding of Mobile Home Park ownership patterns.
    * Conducted advanced simulations to assess the impact of climate change factors, such as temperature variations.

* **Graduate Student Researcher**, Soga Research Group, Systems Engineering Department, UC Berkeley (Sep 2023 - Feb 2024)
    * Berkeley wildfire evacuation Simulation, collaboration with the City of Berkeley
    * Conducted wildfire behavior simulations under various conditions, including day/night and wind patterns.
    * Ran wildfire evacuation traffic simulations in Berkeley accounting for high-risk scenarios and time variations.
    * Improved accuracy by incorporating driver behavior, contraflow operations, and rerouting in evacuation models.

## Skills

* **Programming Languages**: Python, JS, SQL, R, Julia, C, C++
* **Frameworks and Tools**: PyTorch, Spark, DGL, AWS, LSTM, Hive, Node.js, BERT
* **Data Analysis**: Machine Learning, Statistical Modeling, Causal Inference
* **Visualization**: Graph Design Suite (from Adobe Ps/Ai/Pr/Id/Ar to Node.js, HTML)

## Contact

Feel free to [get in touch](/contact/) if you're interested in collaborating or have questions about my work.


