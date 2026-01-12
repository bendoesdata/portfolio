/**
 * Image Modal - Click any image to view in a fullscreen modal
 * 
 * Usage:
 * 1. Import this file in your HTML: <script src="path/to/image-modal.js"></script>
 * 2. Add the 'clickable-image' class to any img elements you want to be clickable
 * 3. Make sure projects.css is loaded for modal styling
 * 
 * Example:
 * <img src="photo.jpg" alt="Description" class="clickable-image">
 */

function initializeImageModal() {
  // Create modal HTML structure
  const modal = document.createElement('div');
  modal.id = 'image-modal';
  modal.className = 'image-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="modal-close">&times;</span>
      <img class="modal-image" src="" alt="">
    </div>
  `;
  document.body.appendChild(modal);

  // Get references to modal elements
  const modalElement = document.getElementById('image-modal');
  const modalImage = modalElement.querySelector('.modal-image');
  const closeButton = modalElement.querySelector('.modal-close');

  // Add event listeners to all clickable images
  const clickableImages = document.querySelectorAll('.clickable-image');
  
  clickableImages.forEach(img => {
    img.addEventListener('click', function() {
      modalImage.src = this.src;
      modalImage.alt = this.alt;
      modalElement.classList.add('active');
    });
  });

  // Close modal when clicking the X button
  closeButton.addEventListener('click', function() {
    modalElement.classList.remove('active');
  });

  // Close modal when clicking outside the image
  modalElement.addEventListener('click', function(e) {
    if (e.target === modalElement) {
      modalElement.classList.remove('active');
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalElement.classList.contains('active')) {
      modalElement.classList.remove('active');
    }
  });
}

// Initialize modal when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeImageModal);
} else {
  initializeImageModal();
}
