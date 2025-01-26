function updateCountdown() {
    const today = new Date();
    const birthday = new Date('2025-01-29T00:00:00');
    const timeDifference = birthday - today;

    if (timeDifference <= 0) {
        document.getElementById('countdown').innerText = "Happy Birthday Abiodunmi!";
        document.getElementById('bdayW').classList.remove('hidden');
        document.getElementById('birthdayMessage').classList.remove('hidden');
        document.getElementById('bday-end').classList.remove('hidden');
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s <span style='font-weight: bolder; 
        color: white; 
        font-size: 1.5rem;
        display: block;'
        >until my baby's birthday</span>`;
    }
}



const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentIndex = 0;

function showSlide(index) {
            // Wrap around the slides
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

        // Event listeners for navigation
prev.addEventListener('click', () => showSlide(currentIndex - 1));
next.addEventListener('click', () => showSlide(currentIndex + 1));


// Auto slide every 3 seconds
setInterval(() => showSlide(currentIndex + 1), 3000);

// Update countdown every second
setInterval(updateCountdown, 1000);

// Run the initial update
updateCountdown();
