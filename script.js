let menuBtn =document.getElementById('menu-btn');
let navbarNav =document.querySelector('.navbar-nav');


menuBtn.addEventListener('click' ,()=>{
    navbarNav.classList.toggle('open');
});

let navbarLinks = document.querySelectorAll('.navbar-link');
let homeLink = document.querySelector('.navbar-link.active'); 

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        
        if (homeLink) {
            homeLink.classList.remove('active');
        }
        navbarNav.classList.remove('open');
    });
});