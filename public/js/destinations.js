const regionsButton = document.body.querySelector('.regions');
const citiesButton = document.body.querySelector('.cities');
const placesButton = document.body.querySelector('.places');
const regionsBlock = document.body.querySelector('.regions-wrapper');
const citiesBlock = document.body.querySelector('.cities-wrapper');
const placesBlock = document.body.querySelector('.places-wrapper');
const inspirationPage = document.body.querySelector('.page-2');

citiesButton.onclick = () => {
    regionsBlock.style.display = 'none';
    placesBlock.style.display = 'none';
    citiesBlock.style.display = 'flex';
    citiesButton.style.backgroundColor = '#0071c2';
    placesButton.style.backgroundColor = 'white';
    regionsButton.style.backgroundColor = 'white';
    citiesButton.style.color = 'white';
    placesButton.style.color = 'gray';
    regionsButton.style.color = 'gray';
}

placesButton.onclick = () => {
    regionsBlock.style.display = 'none';
    citiesBlock.style.display = 'none';
    placesBlock.style.display = 'flex';
    placesButton.style.backgroundColor = '#0071c2';
    regionsButton.style.backgroundColor = 'white';
    citiesButton.style.backgroundColor = 'white';
    placesButton.style.color = 'white';
    regionsButton.style.color = 'gray';
    citiesButton.style.color = 'gray';
}

regionsButton.onclick = () => {
    placesBlock.style.display = 'none';
    citiesBlock.style.display = 'none';
    regionsBlock.style.display = 'flex';
    regionsButton.style.backgroundColor = '#0071c2';
    citiesButton.style.backgroundColor = 'white';
    placesButton.style.backgroundColor = 'white';
    regionsButton.style.color = 'white';
    citiesButton.style.color = 'gray';
    placesButton.style.color = 'gray';
}