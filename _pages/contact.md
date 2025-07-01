---
title: "Contact"
permalink: /contact/
layout: single
author_profile: true
header:
  overlay_color: "#ffffff"
  overlay_filter: "0.1"
---

<style>
  /* Make all text smaller on the contact page */
  .page__content {
    font-size: 0.75em;
    padding-top: 0 !important;
    margin-top: 0 !important;
  }
  
  /* Make headings slightly smaller too and blue */
  .page__content h2 {
    font-size: 1.25em;
    color: #0033A0;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  
  .page__content h3 {
    font-size: 1.05em;
    color: #0033A0;
    margin-top: 1.2em;
    margin-bottom: 0.5em;
  }
  
  /* Adjust list items */
  .page__content ul li {
    font-size: 0.85em;
    margin-bottom: 0.4em;
  }
  
  /* Hide the regular page title and remove all space */
  .page__content .page__title {
    display: none !important;
    margin: 0 !important;
    padding: 0 !important;
    height: 0 !important;
  }
  
  /* Remove any extra spacing from page header area */
  .page__header {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
  }
  
  /* Ensure header title is styled elegantly and aligned left */
  .page__hero .page__title,
  .page__hero-overlay .page__title {
    display: inline-block !important;
    color: #0033A0 !important;
    text-shadow: none !important;
    font-size: 1.2em !important;
    font-weight: bold !important;
    border-bottom: 3px solid #0033A0 !important;
    padding-bottom: 0.3em !important;
    margin: 0 !important;
  }
  
  /* Make header much more compact and remove all extra spacing */
  .page__hero-caption {
    text-align: left !important;
  }

  /* Style for contact links */
  .contact-info {
    margin-bottom: 1.5em;
    font-size: 0.9em;
  }
  
  .contact-info a {
    color: #0033A0;
    text-decoration: none;
  }
  
  .contact-info a:hover {
    text-decoration: underline;
  }
  
  /* Style for professional address */
  .address {
    font-size: 0.7em;
    line-height: 1.2;
    margin-bottom: 1.5em;
  }
</style>

## Get in Touch

I'm always interested in research collaborations, speaking opportunities, or discussions. Feel free to reach out through any of the following methods:

### Email

- [freya117@mit.edu](mailto:freya117@mit.edu)  
- [freyatan117@gmail.com](mailto:freyatan117@gmail.com)

### Professional Address

<div class="address">
Massachusetts Institute of Technology<br>
77 Massachusetts Ave<br>
Cambridge, MA 02139<br>
United States
</div>

### Contact Form

<div class="form-container">
  <div class="form-intro">
    <p>I'd love to hear from you! Whether you're interested in collaboration, have questions about my research, or just want to connect, feel free to reach out using the form below.</p>
  </div>
  
  <form action="https://formspree.io/f/your-formspree-endpoint" method="POST" class="elegant-form">
    <div class="form-row">
      <div class="form-group half-width">
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" required placeholder="Your full name">
      </div>
      
      <div class="form-group half-width">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="_replyto" required placeholder="your.email@example.com">
      </div>
    </div>
    
    <div class="form-group">
      <label for="subject">Subject</label>
      <input type="text" id="subject" name="subject" required placeholder="What would you like to discuss?">
    </div>
    
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="6" required placeholder="Tell me more about your inquiry..."></textarea>
    </div>
    
    <div class="form-submit">
      <button type="submit" class="submit-btn">
        <i class="fas fa-paper-plane"></i> Send Message
      </button>
    </div>
  </form>
</div>

<style>
  .form-container {
    max-width: 700px;
    margin: 2.5em 0;
    background: #f8f9fa;
    padding: 2.5em;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  
  .form-intro {
    margin-bottom: 2em;
    text-align: center;
  }
  
  .form-intro p {
    color: #555;
    font-size: 1em;
    line-height: 1.6;
    margin: 0;
  }
  
  .elegant-form {
    background: white;
    padding: 2em;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
  
  .form-row {
    display: flex;
    gap: 1.5em;
    margin-bottom: 1.2em;
  }
  
  .form-group {
    margin-bottom: 1.5em;
  }
  
  .form-group.half-width {
    flex: 1;
    margin-bottom: 0;
  }
  
  label {
    display: block;
    margin-bottom: 0.6em;
    font-weight: 600;
    font-size: 0.95em;
    color: #333;
    letter-spacing: 0.3px;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.8em 1em;
    border: 2px solid #e9ecef;
    border-radius: 6px;
    font-size: 0.95em;
    font-family: inherit;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }
  
  input:focus, textarea:focus {
    outline: none;
    border-color: #0033A0;
    box-shadow: 0 0 0 3px rgba(0, 51, 160, 0.1);
  }
  
  input::placeholder, textarea::placeholder {
    color: #adb5bd;
    font-style: italic;
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
  
  .form-submit {
    text-align: center;
    margin-top: 2em;
  }
  
  .submit-btn {
    background: linear-gradient(135deg, #0033A0 0%, #002680 100%);
    color: white;
    border: none;
    padding: 1em 2.5em;
    cursor: pointer;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1em;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 51, 160, 0.2);
    letter-spacing: 0.5px;
  }
  
  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 51, 160, 0.3);
    background: linear-gradient(135deg, #002680 0%, #001a5a 100%);
  }
  
  .submit-btn:active {
    transform: translateY(0);
  }
  
  .submit-btn i {
    margin-right: 0.5em;
  }
  
  /* Mobile responsive */
  @media (max-width: 768px) {
    .form-container {
      margin: 2em 0;
      padding: 1.5em;
    }
    
    .elegant-form {
      padding: 1.5em;
    }
    
    .form-row {
      flex-direction: column;
      gap: 0;
    }
    
    .form-group.half-width {
      margin-bottom: 1.5em;
    }
    
    .submit-btn {
      padding: 0.9em 2em;
      font-size: 0.95em;
    }
  }
</style> 