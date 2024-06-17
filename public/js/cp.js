
// script.js

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to animate the score numbers when in viewport
function animateScoreNumbers() {
    const scoreNumbers = document.querySelectorAll('.score-number');
    scoreNumbers.forEach(scoreNumber => {
        const target = +scoreNumber.getAttribute('data-target');
        const increment = target / 100; // Adjust the increment for animation speed

        let current = 0;

        const updateScore = () => {
            scoreNumber.innerText = Math.round(current);
            if (current < target) {
                current += increment;
                setTimeout(updateScore, 20); // Adjust timeout for smoother animation
            } else {
                scoreNumber.innerText = target;
            }
        }

        updateScore();
    });
}

// Check if the section is in viewport and trigger animation
function checkViewport() {
    const section = document.getElementById('competitive-programming');
    if (isInViewport(section)) {
        animateScoreNumbers();
        window.removeEventListener('scroll', checkViewport); // Remove listener once animated
    }
}

// Listen for scroll events to check if the section is in viewport
window.addEventListener('scroll', checkViewport);

