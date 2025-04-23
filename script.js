// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar .nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top button functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

// Show button when scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Example of dynamic visitor count functionality (this could be improved or customized further)
function getVisitorCount() {
    let count = localStorage.getItem('visitorCount') || 0;
    return parseInt(count);
}

function incrementVisitorCount() {
    let count = getVisitorCount() + 1;
    localStorage.setItem('visitorCount', count);
    return count;
}

function updateVisitorCountDisplay() {
    const visitorCountDisplay = document.querySelector('.visitor-count-display');
    visitorCountDisplay.textContent = `Visitors: ${incrementVisitorCount()}`;
}

document.addEventListener('DOMContentLoaded', updateVisitorCountDisplay);

