---
title: "News"
permalink: /news/
author_profile: true
layout: single
classes: wide
---

<style>
  .page__title {
    font-size: 2em;
    color: #0033A0;
    margin-bottom: 0.7em;
    text-align: left;
    padding-bottom: 0.3em;
    border-bottom: 1px solid #f2f3f3;
  }
  
  .page__content {
    font-size: 0.9em;
  }
  
  .news-container {
    margin-bottom: 3em;
    max-width: 100%;
    margin-left: 0;
  }
  
  .news-item {
    margin-bottom: 3em;
    padding-bottom: 2em;
    border-bottom: 1px solid #f2f3f3;
  }
  
  .news-item:last-child {
    border-bottom: none;
  }
  
  .news-date {
    font-size: 0.9em;
    font-style: italic;
    margin-bottom: 0.5em;
    color: #666;
  }
  
  .news-title {
    font-size: 1.4em;
    font-weight: bold;
    margin-bottom: 0.8em;
    color: #0033A0;
  }
  
  .news-title a {
    color: #0033A0;
    text-decoration: none;
  }
  
  .news-title a:hover {
    text-decoration: underline;
  }
  
  .news-content {
    font-size: 0.9em;
    line-height: 1.65;
    margin-top: 1em;
  }
  
  .news-content p {
    margin-bottom: 1.2em;
  }
  
  .news-content h2 {
    font-size: 1.3em;
    margin-top: 1.5em;
    margin-bottom: 0.8em;
    color: #0033A0;
  }
</style>

<div class="news-container">
  {% assign news_items = site.news | sort: 'date' | reverse %}
  {% for news in news_items %}
    <div class="news-item">
      <div class="news-date">{{ news.date | date: "%B %d, %Y" }}</div>
      <div class="news-title"><a href="{{ news.url | relative_url }}">{{ news.title }}</a></div>
      <div class="news-content">
        {% if news.excerpt %}
          <p>{{ news.excerpt }}</p>
          <p><a href="{{ news.url | relative_url }}">Read more →</a></p>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div> 