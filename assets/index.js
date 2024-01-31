  // Vanilla JavaScript code to show/hide loading overlay
  window.addEventListener('load', function() {
    // Hide loading overlay after the entire page has loaded with smooth fade-out
    var loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.transition = 'opacity 0.5s ease-in-out';
    loadingOverlay.style.opacity = 0;

    // Optionally, you can remove the loading overlay from the DOM after the fade-out
    setTimeout(function() {
      loadingOverlay.style.display = 'none';
    }, 1500); // Adjust the duration (in milliseconds) for a smoother transition
  });

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('img');
    images.forEach(function(image) {
        image.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });
    });
});