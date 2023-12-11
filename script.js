function toggleNav() {
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const iconClose = document.getElementById('iconClose');
    const topNavLinks = document.getElementById('topNavLinks');

    // Toggle the visibility of hamburgerIcon and iconClose
    iconClose.addEventListener('click', toggleNav);
    topNavLinks.classList.toggle('show-links');
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

 // Function to clear the entire cart
function clearCart() {
    // Reset cart count and update the display
    cartCount = 0;
    document.getElementById('cart-count').innerText = cartCount;

    // Update the empty cart message
    updateEmptyCartMessage();
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
// Function to update the empty cart message
function updateEmptyCartMessage() {
    const emptyCartMessage = document.getElementById('empty-cart-message');
    emptyCartMessage.innerText = cartCount === 0 ? 'Your cart is empty.' : '';
}

 // Function to update the quantity display
 function updateQuantityDisplay() {
     document.getElementById('quantity').innerText = quantity;
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

function updateCartCountDisplay() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCount === 0) {
        cartCountElement.style.display = 'none';
    } else {
        cartCountElement.innerText = cartCount;
        cartCountElement.style.display = 'block'; 
    }
}
// Function to show the cart
function showCart() {
    const cartElement = document.getElementById('cart');
    cartElement.style.display = 'block';
}
// Function to hide the cart (you may want to customize this based on your requirements)
function hideCart() {
    const cartElement = document.getElementById('cart');
    cartElement.style.display = 'none';
}


// Function to clear the entire cart
function clearCart() {
    // Reset cart count and update the display
    cartCount = 0;
    updateCartCountDisplay();

    // document.getElementById('cart-count').innerText = cartCount;

    // Update the empty cart message
    updateEmptyCartMessage();
}

// Function to add items to the cart
function addToCart() {
    // Update the cart count based on the current quantity
    cartCount += quantity;

    // Update the cart icon or count display
    updateCartCountDisplay();
    document.getElementById('cart-count').innerText = cartCount;

    // Reset the quantity to 1 for the next product
    quantity = 1;
    updateQuantityDisplay();
  }

// Call toggleThumbnailsVisibility on window resize
window.addEventListener('resize', toggleThumbnailsVisibility);

// Initial call to toggleThumbnailsVisibility
toggleThumbnailsVisibility();