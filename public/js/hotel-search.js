import { hotels } from './hotels.js';

const place = document.querySelector('.place-input input[type="text"]');
const searchButton = document.querySelector('.search-box button');
const errorMessage = document.querySelector('.search-box-error-message');
const searchResultPage = document.querySelectorAll('.search-results')[1];

const showErrorMessage = () => {
        errorMessage.style.display = 'block';
};

const hideErrorMessage = () => {
    errorMessage.style.display = 'none';
}

place.addEventListener('keyup', hideErrorMessage);

function SearchResults() {};

SearchResults.prototype.init = function() {
    const foundHotels = hotels.filter((element) => {
        if (place.value && element.city.toLowerCase().includes(place.value.toLowerCase())) {
            return element;
        }
    });
    if (foundHotels.length === 0) {
        const nothingFoundMessage = document.createElement('h1');
        nothingFoundMessage.innerHTML = 'No results were found for your search.';
        searchResultPage.appendChild(nothingFoundMessage);
    } else {
        const hotelsAmount = document.createElement('h1');
        hotelsAmount.innerHTML = `${foundHotels.length} results were found for your search`;
        searchResultPage.appendChild(hotelsAmount);
    }
    foundHotels.map(el => {
        const hotelDivWrapper = document.createElement('div');
        const hotelDivItemDescription = document.createElement('div');
        const hotelDivItemPrice = document.createElement('div');
        const hotelImage = document.createElement('img');
        const hotelName = document.createElement('a');
        const hotelCity = document.createElement('p');
        const hotelDescriprion = document.createElement('p');
        const bookButton = document.createElement('button');
        const priceDivText = document.createElement('p');
        const price = document.createElement('p');

        hotelImage.src = el.image;
        hotelName.innerHTML = el.name;
        hotelName.href = el.href;
        hotelCity.innerHTML = el.city;
        hotelDescriprion.innerHTML = el.description;
        bookButton.innerHTML = 'Book';
        priceDivText.innerHTML = 'Price per night';
        price.innerHTML = `${el.pricePerNight} €`;

        hotelDivItemDescription.appendChild(hotelName);
        hotelDivItemDescription.appendChild(hotelCity);
        hotelDivItemDescription.appendChild(hotelDescriprion);
        hotelDivItemDescription.appendChild(bookButton);

        hotelDivItemPrice.appendChild(priceDivText);
        hotelDivItemPrice.appendChild(price);

        hotelDivWrapper.appendChild(hotelImage);
        hotelDivWrapper.appendChild(hotelDivItemDescription);
        hotelDivWrapper.appendChild(hotelDivItemPrice);
        return hotelDivWrapper;
    })
    .forEach(el => {
        searchResultPage.appendChild(el);
        return searchResultPage;
    });
};

const showResuts = (evt) => {
    evt.preventDefault();
    if (place.value) {
        let searchResults = new SearchResults;
        searchResults.init();
        document.querySelector('main div.stays').style.display = 'none';
        searchResultPage.style.display = 'block';
        location.href = '#page=results';
    } else {
        showErrorMessage();
    }
    
};

searchButton.addEventListener('click', showResuts);