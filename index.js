const hamburgerButton = document.querySelector('.hamburger');
const navbar = document.querySelector('nav ul')
hamburgerButton.addEventListener('click', function(){
    navbar.classList.toggle('show');
})