document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer
    const targetDate = new Date('2025-3-1T00:00:00');
    const daysElem = document.getElementById('days');
    const hoursElem = document.getElementById('hours');
    const minutesElem = document.getElementById('minutes');
    const secondsElem = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date();
        const difference = targetDate - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        daysElem.textContent = String(days).padStart(2, '0');
        hoursElem.textContent = String(hours).padStart(2, '0');
        minutesElem.textContent = String(minutes).padStart(2, '0');
        secondsElem.textContent = String(seconds).padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Subscription Form
    const form = document.getElementById('subscription-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value.trim();
        alert(`Thank you for subscribing, ${email}!`);
    });
});
