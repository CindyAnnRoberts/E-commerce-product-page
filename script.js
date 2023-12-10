function toggleNav() {
    // Get the hamburgerIcon, iconClose, and topNavLinks elements
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const iconClose = document.getElementById('iconClose');
    const topNavLinks = document.getElementById('topNavLinks');

    // Toggle a class (e.g., 'show-links') to control visibility
    topNavLinks.classList.toggle('show-links');

    // Toggle visibility of icons based on the 'show-links' class
    hamburgerIcon.style.display = topNavLinks.classList.contains('show-links') ? 'none' : 'block';
    iconClose.style.display = topNavLinks.classList.contains('show-links') ? 'block' : 'none';
}

// Add this to your existing JavaScript

function toggleThumbnailsVisibility() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const isMobile = window.innerWidth <= 767;

    thumbnails.forEach(thumbnail => {
        thumbnail.style.display = isMobile ? 'none' : 'block';
    });
}

// Call the function initially and attach it to the window resize event
toggleThumbnailsVisibility();
window.addEventListener('resize', toggleThumbnailsVisibility);




function openLightbox(imageSrc, thumbnailSrc, element) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightboxImage');

    lightboxImage.src = imageSrc;
    lightboxImage.alt = thumbnailSrc;

    // Dimensions (height and width) for the lightbox image
    lightboxImage.style.height = '445px';
    lightboxImage.style.width = 'auto';  

    lightbox.style.display = 'flex';

    // Remove the "selected" class from all thumbnails
    var thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(function (thumbnail) {
        thumbnail.classList.remove('selected', 'initial-selected');
    });

    // Add the "selected" class to the clicked thumbnail
    element.classList.add('selected');
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}


function incrementQuantity() {
    var quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decrementQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value);
    if (currentValue > 0) {
        quantityInput.value = currentValue - 1;
    }
}





