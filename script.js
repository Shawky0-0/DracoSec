// ===================================
// SCROLL TO TOP ON PAGE LOAD/REFRESH
// ===================================
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;
let ticking = false;

function updateNavbar() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
    }
});

// ===================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
    '.diff-card, .feature-card, .pricing-card, .platform-module, .contact-grid'
);

animateElements.forEach(el => {
    observer.observe(el);
});

// ===================================
// CONTACT FORM HANDLING
// ===================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show success message (in production, this would send to a server)
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
        
        // In production, you would send the data to your backend:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Sorry, there was an error sending your message. Please try again.');
        });
        */
    });
}

// ===================================
// DYNAMIC STATS COUNTER
// ===================================
function animateValue(element, start, end, duration, suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('×')) {
                    animateValue(stat, 0, 30, 1500, '×');
                } else if (text.includes('/')) {
                    stat.textContent = '24/7';
                } else if (text.includes('%')) {
                    animateValue(stat, 0, 100, 1500, '%');
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===================================
// TYPING EFFECT FOR CODE WINDOWS
// ===================================
function typeCode() {
    const codeWindows = document.querySelectorAll('.window-content');
    
    codeWindows.forEach(window => {
        const lines = window.querySelectorAll('.code-line');
        
        lines.forEach((line, index) => {
            line.style.opacity = '0';
            line.style.transform = 'translateX(-10px)';
            
            setTimeout(() => {
                line.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                line.style.opacity = '1';
                line.style.transform = 'translateX(0)';
            }, index * 200);
        });
    });
}

// Trigger typing effect when code windows are in view
const codeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeCode();
            codeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const platformSection = document.querySelector('.platform');
if (platformSection) {
    codeObserver.observe(platformSection);
}

// ===================================
// ===================================
// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Lazy load images if any are added
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// FAQ ACCORDION
// ===================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});



// ===================================
// DEMO BOOKING MODAL
// ===================================
const demoModal = document.getElementById('demoModal');
const closeModal = document.getElementById('closeModal');
const demoForm = document.getElementById('demoForm');

// Get all buttons that should trigger the modal
const demoButtons = document.querySelectorAll('a[href="#demo"], a[href="#contact"], .btn-primary, .btn-primary-nav, .btn-secondary, .btn-plan');

// Open modal when clicking any demo/CTA button
demoButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        demoModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
});

// Close modal when clicking X button
closeModal.addEventListener('click', () => {
    demoModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
});

// Close modal when clicking outside the modal content
demoModal.addEventListener('click', (e) => {
    if (e.target === demoModal) {
        demoModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && demoModal.classList.contains('active')) {
        demoModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Set minimum date to today
const dateInput = document.getElementById('preferredDate');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// Handle form submission
demoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(demoForm);
    const data = Object.fromEntries(formData);
    
    console.log('Demo booking submitted:', data);
    
    // Show success message
    alert('Thank you! Your demo has been scheduled. We will contact you shortly to confirm.');
    
    // Close modal and reset form
    demoModal.classList.remove('active');
    document.body.style.overflow = '';
    demoForm.reset();
    
    // Here you would typically send the data to your backend
    // Example: fetch('/api/book-demo', { method: 'POST', body: JSON.stringify(data) })
});

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log('%c🐉 DracoSec', 'font-size: 24px; font-weight: bold; color: #6366F1;');
console.log('%cThe Unified Cybersecurity Platform', 'font-size: 14px; color: #94A3B8;');
console.log('%c100% On-Premise • 100% Privacy-First', 'font-size: 12px; color: #64748B;');
console.log(' ');
console.log('%cInterested in joining our team? Contact us at contact@dracosec.com', 'font-size: 12px; color: #8B5CF6;');
