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

