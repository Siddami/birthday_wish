# Happy Birthday Countdown

This project is a simple yet beautiful birthday countdown webpage created with HTML, CSS, and JavaScript. The page displays a countdown timer to a specified birthday and shows a heartfelt birthday message when the time arrives.

## Table of Contents

- [Happy Birthday Countdown](#happy-birthday-countdown)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Features](#features)
  - [Usage](#usage)
  - [Code Overview](#code-overview)
    - [HTML](#html)
    - [CSS](#css)
    - [JavaScript](#javascript)
  - [License](#license)

## Demo

Check out the live demo of the project [here](https://birthdaybiodun.netlify.app/).

## Features

- Responsive design that adapts to different screen sizes
- Animated bubbles background
- Countdown timer that updates every second
- Displays a birthday message when the countdown ends

## Usage

To use this project, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/happy-birthday-countdown.git
    cd happy-birthday-countdown
    ```

2. Open `index.html` in your favorite web browser.

## Code Overview

### HTML

The HTML structure includes a title, a container for the countdown timer, and the birthday message.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Happy Birthday Papi</title>
</head>
<body>
    <div class="full--container">
        <div class="bubbles">
            <!-- Bubble elements here -->
        </div>
        <div class="container">
            <h3 id="bdayW" class="hidden">It's Birthday Time!</h3>
            <p id="countdown"></p>
            <p id="birthdayMessage" class="hidden">
                <!-- Birthday poem here -->
            </p>
            <h3 id="bday-end" class="hidden">Happy Birthday Abiodunmi, I love you more than words can express</h3>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### CSS

The CSS styles provide the layout and animation for the bubbles and make the page responsive.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Libre Baskerville', serif;
    min-height: 100vh;
    background: #00040f;
    color: antiquewhite;
}

.full--container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.bubbles {
    position: relative;
    display: flex;
}

.bubbles span {
    position: relative;
    width: 25px;
    height: 25px;
    background: #3fd9ffab;
    margin: 0 4px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #03293fab, 0 0 50px #3fd9ffab, 0 0 100px #3fd9ffab;
    animation: animate 15s linear infinite;
    animation-duration: calc(115s / var(--i));
}

.bubbles span:nth-child(even) {
    background: #fc0442;
    box-shadow: 0 0 0 10px #3a0210ab, 0 0 50px #fc0442, 0 0 100px #fc0442;
}

.bubbles .down {
    animation: down 15s linear infinite;
    animation-duration: calc(115s / var(--i));
}

@keyframes animate {
    0% {
        transform: translateY(100vh) scale(0);
    }
    100% {
        transform: translateY(-10vh) scale(1);
    }
}

@keyframes down {
    100% {
        transform: translateY(100vh) scale(1);
    }
    0% {
        transform: translateY(-10vh) scale(0);
    }
}

.container {
    padding: 20px;
    background: rgb(13, 13, 14);
    background: linear-gradient(90deg, rgba(13, 13, 14, 0.891) 99%, rgb(1, 1, 22) 100%, rgba(0, 212, 255, 1) 100%);
    width: 80%;
    text-align: center;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

#birthdayMessage {
    color: #00d9ff;
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.5;
}

.hidden {
    display: none;
}

#countdown {
    font-size: 5rem;
    color: #3fd9ffab;
    font-weight: bolder;
}

@media screen and (min-width: 320px) and (max-width: 728px) {
    .bubbles span {
        width: 18px;
        height: 18px;
        margin: 0 2px;
    }

    .container {
        width: 90%;
        padding: 5px;
        margin: 10px auto;
    }

    #countdown {
        font-size: 2.5rem;
    }

    #birthdayMessage {
        font-size: 1.2rem;
        line-height: 1.5;
    }

    #bday-end {
        font-size: 1.5rem;
    }
}
```

### JavaScript

The JavaScript code updates the countdown timer every second and displays the birthday message when the countdown ends.

```javascript
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

// Update countdown every second
setInterval(updateCountdown, 1000);

// Run the initial update
updateCountdown();
```

## License

This project is open source and available under the [MIT License](LICENSE).