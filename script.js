function updateCountdown() {
    const today = new Date();
    const birthday = new Date('2024-01-28T00:00:00');
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

// Update countdown every second
setInterval(updateCountdown, 1000);

// Run the initial update
updateCountdown();
