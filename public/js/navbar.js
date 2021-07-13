const navIcon = document.querySelector('.user-bar-icon');
const nav = document.querySelector('.user-bar');

function showNav() {
    if (window.innerWidth <= 800) {
        if (nav.style.display === 'none'){
            nav.style.display = 'flex';
            navIcon.firstElementChild.className = 'fas fa-times';
        } else {
            nav.style.display = 'none';
            navIcon.firstElementChild.className = 'fa fa-bars';
        }
    }
}

navIcon.addEventListener('click', showNav);

nav.addEventListener('click', (event) => {
    let target = event.target;
    if (target.className === 'leave-your-feedback' || target.className === 'sign-in-button' || target.className === 'personal-page') {
        nav.style.display = 'none';
        navIcon.firstElementChild.className = 'fa fa-bars';
    }
})