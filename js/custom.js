// Insert custom javascript here.
document.addEventListener('DOMContentLoaded', function() {
  // Create overlay div
  var overlay = document.createElement('div');
  overlay.className = 'image-overlay';
  document.body.appendChild(overlay);

  // Add an image element inside the overlay
  var img = document.createElement('img');
  overlay.appendChild(img);

  // Function to show the overlay with the clicked image
  function showOverlay(event) {
    img.src = event.target.src; // Set the src of the img element to the clicked image's src
    overlay.style.display = 'flex';
  }

  // Function to hide the overlay
  function hideOverlay() {
    overlay.style.display = 'none';
  }

  // Add click event listener to all images
  document.querySelectorAll('img').forEach(function(image) {
    image.addEventListener('click', showOverlay);
  });

  // Hide overlay when clicked
  overlay.addEventListener('click', hideOverlay);
});
