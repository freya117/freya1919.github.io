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
  /* Base styles for contact page */
  .page__content {
    font-size: 0.85em;
    padding-top: 0 !important;
    margin-top: 0 !important;
  }
  
  /* Hide the default page title that appears in the content area */
  .page__content .page__title {
    display: none !important;
  }
  
  /* Style the main header title */
  .page__hero .page__title,
  .page__hero-overlay .page__title {
    display: inline-block !important;
    color: #0033A0 !important;
    text-shadow: none !important;
    font-size: 1.4em !important;
    font-weight: bold !important;
    border-bottom: 3px solid #0033A0 !important;
    padding-bottom: 0.3em !important;
    margin-bottom: 0 !important;
  }
  
  /* Make the header area compact */
  .page__hero {
    padding: 0.8em 0 !important;
    min-height: auto !important;
    text-align: left !important;
    margin-bottom: 0 !important;
  }
  
  .page__hero-caption {
    text-align: left !important;
    margin: 0 !important;
  }

  /* Contact form styling */
  .form-container {
    max-width: 600px;
    margin: 1.5em 0;
  }
  
  .form-group {
    margin-bottom: 0.8em;
  }
  
  label {
    display: block;
    margin-bottom: 0.4em;
    font-weight: bold;
    font-size: 0.9em;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.5em;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9em;
  }
  
  button {
    background-color: #0033A0;
    color: white;
    border: none;
    padding: 0.75em 1.5em;
    cursor: pointer;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.9em;
  }
  
  button:hover {
    background-color: #002680;
  }
</style>

If you'd like to get in touch, please feel free to reach out via email or connect with me on social media. I'm always open to discussing new ideas, collaborations, and opportunities.

### Contact Form
You can fill out this form and I'll get back to you as soon as possible:

<div class="form-container">
  <form action="https://formspree.io/f/your-formspree-endpoint" method="POST">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="_replyto" required>
    </div>
    <div class="form-group">
      <label for="subject">Subject:</label>
      <input type="text" id="subject" name="subject" required>
    </div>
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    <button type="submit">Send Message</button>
  </form>
</div> 