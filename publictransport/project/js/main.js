import { initializeBookingForm } from './components/booking.js';
import { initializeContactForm } from './components/contact.js';

// Main application initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize transport options
    loadTransportOptions();

    // Initialize forms
    initializeBookingForm();
    initializeContactForm();

    // Handle smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});