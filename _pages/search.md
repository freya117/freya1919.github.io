---
title: Search
permalink: /search/
layout: search
author_profile: false
---

<style>
  /* Center the search form and results */
  .archive {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
  }
  
  /* Hide original page title and replace with custom one */
  .page__title {
    display: none;
  }
  
  .search-title {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    text-align: center;
    color: #333;
    font-weight: 300;
    letter-spacing: 0.5px;
  }

  /* Make the search input more compact and centered */
  .search-input {
    font-size: 0.8rem !important; /* Smaller text size */
    max-width: 400px;
    width: 100%;
    padding: 0.4rem 1rem !important;
    border: 1px solid #e0e0e0 !important;
    border-radius: 50px;
    background-color: #f9f9f9 !important;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.05);
    margin: 0 auto 1.5rem !important;
    text-align: center;
    display: block;
    transition: all 0.2s ease;
  }
  
  .search-input:focus {
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    border-color: #ccc !important;
    outline: none;
  }

  /* Style search results */
  .results {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }

  .results__found {
    font-size: 0.7rem !important;
    color: #777;
    margin-bottom: 1rem;
    text-align: center;
    font-style: italic;
  }

  .results .list__item {
    padding: 0.6rem 0.8rem;
    margin-bottom: 0.6rem;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    transition: all 0.2s ease;
    text-align: left;
    border-left: 3px solid transparent;
  }

  .results .list__item:hover {
    box-shadow: 0 2px 5px rgba(0,0,0,0.08);
    border-left-color: #0033A0;
  }

  .results .archive__item-title {
    font-size: 0.85rem !important;
    margin: 0 0 0.3rem;
    font-weight: 500;
    color: #0033A0;
  }

  .results .archive__item-title a {
    text-decoration: none;
  }

  .results .archive__item-excerpt {
    font-size: 0.7rem !important;
    margin: 0;
    color: #666;
    line-height: 1.4;
  }
  
  /* Make the entire content area centered */
  #main {
    max-width: 100%;
    margin: 0 auto;
    float: none;
    width: 100%;
    padding-right: 0;
    clear: both;
    padding-left: 0;
  }
  
  /* Override global sidebar positioning */
  .sidebar {
    display: none !important;
  }
  
  /* Force single column layout */
  .layout--search .page {
    width: 100% !important;
    float: none !important;
    padding-right: 0 !important;
  }
  
  /* Adjust the overall page layout */
  .page__content {
    padding-top: 1.5rem;
    background-color: #fafafa;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.02);
  }
  
  /* Remove unnecessary elements */
  .page__footer {
    margin-top: 1rem;
  }
  
  @media (max-width: 768px) {
    .archive {
      padding: 0.5rem;
    }
    
    .page__content {
      padding: 1rem;
    }
    
    .search-input {
      max-width: 90%;
    }
    
    .results {
      max-width: 90%;
    }
  }
</style>

<div class="search-title">Search the site</div> 