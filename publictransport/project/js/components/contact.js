// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

function handleContactSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: event.target.name.value,
        email: event.target.email.value,
        subject: event.target.subject.value,
        message: event.target.message.value
    };

    // Store message in localStorage
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    messages.push({
        ...formData,
        messageId: Date.now(),
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('contactMessages', JSON.stringify(messages));

    alert('Message sent successfully!');
    event.target.reset();
}

export { initializeContactForm };