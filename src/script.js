const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileSidebar = document.getElementById('mobile-sidebar');
const overlay = document.getElementById('overlay');

// Open the sidebar
menuBtn.addEventListener('click', () => {
    mobileSidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
});

// Close the sidebar
closeBtn.addEventListener('click', () => {
    mobileSidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
});

// Close sidebar by clicking the overlay
overlay.addEventListener('click', () => {
    mobileSidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
});

// Select the product grid container
const productGrid = document.getElementById('products-grid');

// Ensure we only select figure elements inside the product grid
const productFigures = productGrid.querySelectorAll('figure');

// Function to handle hover effect
function addHoverEffect(event) {
    const img = event.currentTarget.querySelector('img');
    const caption = event.currentTarget.querySelector('figcaption');
    
    img.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    caption.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    
    img.style.transform = 'scale(1.08)';
    caption.style.transform = 'scale(1.08)';
}

// Function to remove hover effect
function removeHoverEffect(event) {
    const img = event.currentTarget.querySelector('img');
    const caption = event.currentTarget.querySelector('figcaption');
    
    img.style.transform = 'scale(1)';
    caption.style.transform = 'scale(1)';
}

// Add hover and click event listeners to each figure within the product grid
productFigures.forEach(figure => {
    figure.addEventListener('mouseenter', addHoverEffect);
    figure.addEventListener('mouseleave', removeHoverEffect);

    figure.addEventListener('click', () => {
        // Create a larger and centered popup message
        const cartMessage = document.createElement('div');
        cartMessage.innerText = 'Item added to cart';
        cartMessage.style.position = 'fixed';
        cartMessage.style.top = '50%';
        cartMessage.style.left = '50%';
        cartMessage.style.transform = 'translate(-50%, -50%)';
        cartMessage.style.backgroundColor = '#333';
        cartMessage.style.color = '#fff';
        cartMessage.style.padding = '20px 40px';
        cartMessage.style.borderRadius = '10px';
        cartMessage.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
        cartMessage.style.fontSize = '24px';
        cartMessage.style.opacity = '0';
        cartMessage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        document.body.appendChild(cartMessage);

        // Fade in the popup message
        setTimeout(() => {
            cartMessage.style.opacity = '1';
            cartMessage.style.transform = 'translate(-50%, -50%) scale(1.1)';
        }, 50);

        // Fade out and remove the message after 3 seconds
        setTimeout(() => {
            cartMessage.style.opacity = '0';
            cartMessage.style.transform = 'translate(-50%, -50%) scale(1)';
            setTimeout(() => {
                cartMessage.remove();
            }, 500);
        }, 3000);
    });
});
