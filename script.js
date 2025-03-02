// document.addEventListener("DOMContentLoaded", () => {
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector(".data-scroll-container"),
//         smooth: true,
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    // Initialize hamburger menu after a small delay to ensure proper DOM loading
    setTimeout(() => {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const navLinks = document.querySelector('.nav-links');

        if (hamburgerMenu && navLinks) {
            hamburgerMenu.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
            `;

            hamburgerMenu.addEventListener('click', () => {
                hamburgerMenu.classList.toggle('open');
                navLinks.classList.toggle('show');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!hamburgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
                    hamburgerMenu.classList.remove('open');
                    navLinks.classList.remove('show');
                }
            });

            // Close menu when clicking on a nav link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburgerMenu.classList.remove('open');
                    navLinks.classList.remove('show');
                });
            });
        }
    }, 100);

    // Loading Screen
    window.addEventListener('load', () => {
        const loaderWrapper = document.querySelector('.loader-wrapper');
        const mainContent = document.querySelector('.main-content');
        
        // Ensure content is loaded before starting transition
        setTimeout(() => {
            // First fade in the main content
            mainContent.style.opacity = '1';
            
            // Then start the loader exit animation
            setTimeout(() => {
                loaderWrapper.style.opacity = '1';
                loaderWrapper.style.transform = 'translateY(-100%) scale(1)';
                
                // Remove the loader from DOM after animation completes
                setTimeout(() => {
                    loaderWrapper.style.display = 'none';
                }, 1000);
            }, 200);
        }, 2000);
    });

    // Portfolio Slider
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    // Initialize slider position
    updateSlider();

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        // For now, we'll just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
