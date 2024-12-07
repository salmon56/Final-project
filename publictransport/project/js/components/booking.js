// Booking form functionality
function initializeBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
}

function handleBookingSubmit(event) {
    event.preventDefault();
    
    const formData = {
        pickupLocation: document.getElementById('pickup-location').value,
        dropoffLocation: document.getElementById('drop-off-location').value,
        pickupDate: document.getElementById('pickup-date').value,
        dropoffDate: document.getElementById('drop-off-date').value,
        pickupTime: document.getElementById('pickup-time').value
    };

    // Store booking in localStorage
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({
        ...formData,
        bookingId: Date.now(),
        userId: JSON.parse(localStorage.getItem('currentUser')).username
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));

    alert('Booking submitted successfully!');
    event.target.reset();
}

export { initializeBookingForm };