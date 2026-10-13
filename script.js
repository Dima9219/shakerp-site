// ⚠️ ИЗМЕНИ ДАТУ РЕЛИЗА ЗДЕСЬ
const RELEASE_DATE = new Date('2026-12-31T00:00:00').getTime();

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function pad(num) {
    return String(num).padStart(2, '0');
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = RELEASE_DATE - now;

    if (distance < 0) {
        // Релиз уже случился
        document.querySelector('.countdown-label').textContent = '🎉 РЕЛИЗ СОСТОЯЛСЯ! 🎉';
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);