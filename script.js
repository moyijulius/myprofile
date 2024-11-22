
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

    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });
});
