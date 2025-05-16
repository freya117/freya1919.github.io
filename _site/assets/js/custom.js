// Custom JavaScript for site-wide functionality

document.addEventListener('DOMContentLoaded', function() {
  // Apply consistent styling to project boxes
  const projectBoxes = document.querySelectorAll('.archive__item, .project-box');
  
  projectBoxes.forEach(box => {
    // Apply same styling to all project boxes
    box.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    box.style.transition = 'transform 0.2s, box-shadow 0.2s';
    
    // Add hover effect
    box.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
    });
    
    box.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    });
    
    // Make titles consistent color
    const titles = box.querySelectorAll('.archive__item-title, .project-title');
    titles.forEach(title => {
      title.style.color = '#0033A0';
      title.style.fontSize = '0.95em';
    });
    
    // Make excerpts consistent size
    const excerpts = box.querySelectorAll('.archive__item-excerpt, .project-excerpt');
    excerpts.forEach(excerpt => {
      excerpt.style.fontSize = '0.8em';
      excerpt.style.lineHeight = '1.4';
    });
    
    // Add click handler to the entire box for better usability
    box.addEventListener('click', function(e) {
      // Only handle click if not on a tag
      if (!e.target.closest('.project-tag')) {
        const link = this.querySelector('.project-link');
        if (link && link.getAttribute('href')) {
          window.location.href = link.getAttribute('href');
        }
      }
    });
  });
  
  // Ensure project links work properly with z-index by adding explicit handlers
  const projectLinks = document.querySelectorAll('.project-link');
  projectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevent default behavior and stop propagation
      e.preventDefault();
      e.stopPropagation();
      
      // Navigate directly to the href
      const href = this.getAttribute('href');
      if (href) {
        window.location.href = href;
      }
    });
  });
  
  // Make project tags not interfere with project links
  const projectTags = document.querySelectorAll('.project-tag');
  projectTags.forEach(tag => {
    tag.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent click from triggering parent link
      e.preventDefault(); // Prevent any default behavior
      
      // Extract the tag name from the onclick attribute or element text
      const tagName = this.getAttribute('data-tag') || 
                      this.onclick.toString().match(/filterByTag\(['"]([^'"]+)['"]\)/)?.[1] ||
                      this.textContent.trim().toLowerCase().replace(/\s+/g, '-');
      
      // Call filterByTag function if it exists
      if (typeof filterByTag === 'function') {
        filterByTag(tagName);
      } else if (window.filterByTag) {
        window.filterByTag(tagName);
      }
    });
  });
  
  // Fix navigation tabs if they exist
  const navTabs = document.querySelectorAll('.nav-tab');
  if (navTabs.length > 0) {
    navTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const categoryName = this.getAttribute('data-category') || 
                            this.onclick.toString().match(/showCategory\(['"]([^'"]+)['"]\)/)?.[1];
        showCategoryIfExists(categoryName);
      });
    });
  }
  
  // Helper function to show category if the function exists
  function showCategoryIfExists(category) {
    if (typeof showCategory === 'function') {
      showCategory(category);
    } else if (window.showCategory) {
      window.showCategory(category);
    }
  }
}); 