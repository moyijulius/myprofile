const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    },
    { threshold: 0.2 }
);

sections.forEach((section) => observer.observe(section));

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const menuItems = document.querySelectorAll('.mobile-nav li a');

    // Toggle the navigation menu
    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    // Close the navigation menu when a menu item is clicked
    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });
});
