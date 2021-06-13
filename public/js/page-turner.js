import { nameDisplayCheck } from './sign-in.js';

const staysPage = document.body.querySelector('.page-1');
const inspirationPage = document.body.querySelector('.page-2');
const personalAccountPage = document.body.querySelector('.page-3');
const staysButton = document.body.querySelector('.stays-link');
const inspirationButton = document.body.querySelector('.inspiration-link');
const contentCoronavirus = document.querySelector('.coronavirus-hidden');
const regionsButton = document.body.querySelector('.regions');

document.body.onload = () => {
    inspirationPage.style.display = 'none';
    personalAccountPage.style.display = 'none';
    contentCoronavirus.style.display = 'none';
    regionsButton.style.backgroundColor = '#0071c2';
    regionsButton.style.color = 'white';
    nameDisplayCheck();
}

inspirationButton.onclick = () => {
    staysPage.style.display = 'none';
    personalAccountPage.style.display = 'none';
    inspirationPage.style.display = 'block';
}

staysButton.onclick = () => {
    inspirationPage.style.display = 'none';
    personalAccountPage.style.display = 'none';
    staysPage.style.display = 'block';
}

function redirectToPersonalAccount() {
    staysPage.style.display = 'none';
    inspirationPage.style.display = 'none';
    personalAccountPage.style.display = 'block'; 
}

export { redirectToPersonalAccount };