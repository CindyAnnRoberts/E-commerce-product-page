function toggleNav() {
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const iconClose = document.getElementById('iconClose');
    const topNavLinks = document.getElementById('topNavLinks');

    iconClose.addEventListener('click', toggleNav);

    topNavLinks.classList.toggle('show-links');
    hamburgerIcon.style.display = topNavLinks.classList.contains('show-links') ? 'none' : 'block';
    iconClose.style.display = topNavLinks.classList.contains('show-links') ? 'block' : 'none';
}

function toggleThumbnailsVisibility() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const isMobile = window.innerWidth <= 767;

    thumbnails.forEach(thumbnail => {
        thumbnail.style.display = isMobile ? 'none' : 'block';
    });
}

function openLightbox(imageSrc, thumbnailSrc, element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    lightboxImage.src = imageSrc;
    lightboxImage.alt = thumbnailSrc;

    lightboxImage.style.height = '445px';
    lightboxImage.style.width = 'auto';

    lightbox.style.display = 'flex';

    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove('selected', 'initial-selected');
    });

    element.classList.add('selected');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}


 // Initial cart count and quantity
 let cartCount = 0;
 let quantity = 1;

 // Function to increase the quantity
 function incrementQuantity() {
     quantity++;
     updateQuantityDisplay( );
 }

 // Function to decrease the quantity (with a minimum quantity of 1)
 function decrementQuantity() {
     if (quantity > 1) {
         quantity--;
         updateQuantityDisplay( );
     }
 }

 // Function to update the quantity display
 function updateQuantityDisplay() {
     document.getElementById('quantity').innerText = quantity;
 }

 
 function addToCart() {
  
    // Update the cart count based on the current quantity
    cartCount += quantity;

    // Update the cart icon or count display
    document.getElementById('cart-count').innerText = cartCount;

    // Update the cart icon 
    document.getElementById('cart-icon').style.color = 'red';

    // Reset the quantity to 1 for the next product
    quantity = 1;
    updateQuantityDisplay();
  }
