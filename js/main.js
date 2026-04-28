const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}

const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.16 }
);

reveals.forEach((item) => revealObserver.observe(item));

const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    if (!header) return;
    if (window.scrollY > 16) {
        header.style.boxShadow = '0 12px 25px rgba(20, 39, 64, 0.08)';
    } else {
        header.style.boxShadow = 'none';
    }
});
