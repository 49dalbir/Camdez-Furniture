document.addEventListener('DOMContentLoaded', () => {
    // Sidebar menu functionality
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

    // Hover effect on product images
    const productGrid = document.getElementById('products-grid');
    if (productGrid) {
        const productFigures = productGrid.querySelectorAll('figure');

        productFigures.forEach(figure => {
            figure.addEventListener('mouseenter', (event) => {
                const img = event.currentTarget.querySelector('img');
                const caption = event.currentTarget.querySelector('figcaption');
                img.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                caption.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                img.style.transform = 'scale(1.08)';
                caption.style.transform = 'scale(1.08)';
            });

            figure.addEventListener('mouseleave', (event) => {
                const img = event.currentTarget.querySelector('img');
                const caption = event.currentTarget.querySelector('figcaption');
                img.style.transform = 'scale(1)';
                caption.style.transform = 'scale(1)';
            });
        });
    }

    // Add to Cart functionality
    const addToCartButton = document.getElementById('add-to-cart-btn');

    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            // Create the "Processing..." message
            const processingMessage = document.createElement('div');
            processingMessage.innerText = 'Processing...';
            Object.assign(processingMessage.style, {
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#333',
                color: '#fff',
                padding: '20px 40px',
                borderRadius: '10px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                fontSize: '24px',
                opacity: '0',
                transition: 'opacity 0.5s ease',
                zIndex: '1000',
            });
            document.body.appendChild(processingMessage);

            // Fade in the "Processing..." message
            setTimeout(() => {
                processingMessage.style.opacity = '1';
            }, 50);

            // Fade out the "Processing..." message and show the "Item added to cart" message
            setTimeout(() => {
                processingMessage.style.opacity = '0';

                setTimeout(() => {
                    processingMessage.remove();

                    // Create the "Item added to cart" message
                    const cartMessage = document.createElement('div');
                    cartMessage.innerText = 'Item added to cart';
                    Object.assign(cartMessage.style, {
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: '#333',
                        color: '#fff',
                        padding: '20px 40px',
                        borderRadius: '10px',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                        fontSize: '24px',
                        opacity: '0',
                        transition: 'opacity 0.5s ease, transform 0.5s ease',
                        zIndex: '1000',
                    });
                    document.body.appendChild(cartMessage);

                    // Fade in the "Item added to cart" message
                    setTimeout(() => {
                        cartMessage.style.opacity = '1';
                        cartMessage.style.transform = 'translate(-50%, -50%) scale(1.1)';
                    }, 50);

                    // Fade out and remove the "Item added to cart" message after a short delay
                    setTimeout(() => {
                        cartMessage.style.opacity = '0';
                        cartMessage.style.transform = 'translate(-50%, -50%) scale(1)';
                        setTimeout(() => {
                            cartMessage.remove();
                        }, 500);
                    }, 3000);
                }, 500);
            }, 1500);
        });
    }
});
