const careers = ["Learner", "Programmer", "Web Developer", "Tech Enthusiast", "Web Designer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 200;
const deleteSpeed = 75;
const pauseBetween = 1000; // Pause between different careers in milliseconds
const careerElement = document.getElementById('career');
const descriptionElement = document.getElementById('career-description');
let typeSpeed = typingSpeed; // Initial typing speed

function typeCareer() {
    const career = careers[index];

    // Typing effect
    if (!isDeleting && charIndex <= career.length) {
        careerElement.textContent = career.substring(0, charIndex++);
        typeSpeed = typingSpeed;
    }

    // Deleting effect
    else if (isDeleting && charIndex >= 0) {
        careerElement.textContent = career.substring(0, charIndex--);
        typeSpeed = deleteSpeed;
    }

    // Transition to the next career
    if (charIndex > career.length) {
        isDeleting = true;
        typeSpeed = pauseBetween;
    }

    // Transition to the next career
    else if (charIndex < 0) {
        isDeleting = false;
        index = (index + 1) % careers.length;
        typeSpeed = typingSpeed;
    }

    setTimeout(typeCareer, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    typeCareer();
});
