/**
 * Smart Image Fallback
 * 
 * This script enables images to be displayed correctly regardless of their file extension.
 * It looks for images with the data-image-base attribute and tries different extensions
 * until it finds one that works.
 */

function smartImageFallback(img) {
  const extensions = ['jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG', 'gif', 'GIF', 'webp', 'WEBP'];
  const basePath = img.getAttribute('data-image-base');
  let currentExtIndex = 0;
  
  const tryNextExtension = () => {
    if (currentExtIndex >= extensions.length) {
      // All extensions tried, show placeholder or error message
      img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23f0f0f0"/%3E%3Ctext x="50" y="50" font-family="sans-serif" font-size="12" text-anchor="middle" alignment-baseline="middle"%3EImage not found%3C/text%3E%3C/svg%3E';
      return;
    }
    
    const newSrc = `${basePath}.${extensions[currentExtIndex]}`;
    const testImg = new Image();
    
    testImg.onload = () => {
      img.src = newSrc;
    };
    
    testImg.onerror = () => {
      currentExtIndex++;
      tryNextExtension();
    };
    
    testImg.src = newSrc;
  };
  
  tryNextExtension();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Process any images that already have the data-image-base attribute
  document.querySelectorAll('img[data-image-base]').forEach(function(img) {
    if (img.complete && img.naturalWidth === 0) {
      smartImageFallback(img);
    }
  });
}); 