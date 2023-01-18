const hamburgerButton = document.querySelector('.hamburger');
const navbar = document.querySelector('nav ul');
const timeContainer = document.querySelector('.time-container');
// const timeOnSite = timeContainer.querySelector('p');
hamburgerButton.addEventListener('click', function(){
    navbar.classList.toggle('show');
})
// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (++timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// // Example usage:
// var startTime = 0;

// document.addEventListener("DOMContentLoaded", startTimer(startTime, timeOnSite));