// Scripts for Kobamelo College Hugo Site

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update URL hash without scrolling
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Expandable content functionality
    document.querySelectorAll('.expand-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            const targetElement = document.getElementById(target);
            const chevron = this.querySelector('.expand-chevron');
            
            if (targetElement) {
                targetElement.classList.toggle('active');
                
                if (chevron) {
                    chevron.classList.toggle('rotated');
                }
                
                this.classList.toggle('text-skyblue');
                this.classList.toggle('text-darkblue');
                
                // Scroll to expanded content if it's not fully visible
                if (targetElement.classList.contains('active')) {
                    setTimeout(() => {
                        const rect = this.getBoundingClientRect();
                        if (rect.top < 0 || rect.bottom > window.innerHeight) {
                            window.scrollTo({
                                top: window.scrollY + rect.top - 100,
                                behavior: 'smooth'
                            });
                        }
                    }, 300);
                }
            }
        });
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Animation on scroll functionality
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.animate__animated');
        
        animatedElements.forEach(element => {
            const position = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // If element is in viewport
            if (position.top < windowHeight - 100) {
                // Extract animation class from the class list
                const classList = element.className.split(' ');
                let animationClass = '';
                
                for (const className of classList) {
                    if (className.startsWith('animate__') && className !== 'animate__animated') {
                        animationClass = className.replace('animate__', '');
                        break;
                    }
                }
                
                if (animationClass) {
                    element.classList.add('animate__' + animationClass);
                }
            }
        });
    }
    
    // Run animation check on page load
    animateOnScroll();
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Initialize Lightbox for Gallery images if any
    if (typeof GLightbox !== 'undefined') {
        const lightbox = GLightbox({
            selector: '.gallery-lightbox',
            touchNavigation: true,
            loop: true
        });
    }
});
