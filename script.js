



// script.js

document.addEventListener('DOMContentLoaded', function () {

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Toggle visibility of the contact section
    const contactSection = document.getElementById('contact');
    const toggleContactButton = document.getElementById('toggleContactButton');

    if (toggleContactButton && contactSection) {
        toggleContactButton.addEventListener('click', function () {
            contactSection.classList.toggle('hidden');
        });

        // Form validation in the contact section
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function (e) {
                const nameInput = document.getElementById('name');
                const emailInput = document.getElementById('email');
                const messageInput = document.getElementById('message');

                if (!nameInput.value || !emailInput.value || !messageInput.value) {
                    e.preventDefault();
                    alert('Please fill out all fields in the contact form.');
                }
            });
        }
    }

    // Dynamic year in the footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Project detail links
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project-id');
            const projectDetailUrl = getProjectDetailUrl(projectId);
            window.open(projectDetailUrl, '_blank');
        });
    });

    // Function to get project detail URL based on project ID
    function getProjectDetailUrl(projectId) {
        // Add logic to determine the project detail URL for each project
        switch (projectId) {
            case 'marriage-hall':
                return 'https://example.com/marriage-hall-details';
            case 'japa-with-me':
                return 'https://example.com/japa-with-me-details';
            // Add more cases for additional projects
            default:
                return '#'; // Default URL, modify as needed
        }
    }

});
