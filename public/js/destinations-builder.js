const regionsWrapper = document.querySelector('.destinations div.regions');
const citiesWrapper = document.querySelector('.destinations div.cities');
const placesWrapper = document.querySelector('.destinations div.places');

const regions = [
    {
        title: 'Bora Bora',
        href: '#'
    },
    {
        title: 'Cornwall',
        href: '#'
    },
    {
        title: 'Bali',
        href: '#'
    },
    {
        title: 'Isle of Wight',
        href: '#'
    },
    {
        title: 'Texel',
        href: '#'
    },
    {
        title: 'Santorini',
        href: '#'
    },
    {
        title: 'Mykonos',
        href: '#'
    },
    {
        title: 'England',
        href: '#'
    },
    {
        title: 'Bihar',
        href: '#'
    },
    {
        title: 'Guernsey',
        href: '#'
    },
    {
        title: 'Ras Al Khaimah',
        href: '#'
    },
    {
        title: 'Phuket Province',
        href: '#'
    },
    {
        title: 'Tenerife',
        href: '#'
    },
    {
        title: 'Ibiza',
        href: '#'
    },
    {
        title: 'Jersey',
        href: '#'
    },
    {
        title: 'Hawaii',
        href: '#'
    },
    {
        title: 'Lake District',
        href: '#'
    },
    {
        title: 'Uttar Pradesh',
        href: '#'
    },
    {
        title: 'Zanzibar',
        href: '#'
    },
    {
        title: 'Dublin',
        href: '#'
    }
];

const cities = [
    {
        title: 'Bangkok',
        href: '#'
    },
    {
        title: 'York',
        href: '#'
    },
    {
        title: 'Newcastle upon Tyne',
        href: '#'
    },
    {
        title: 'Manchester',
        href: '#'
    },
    {
        title: 'London',
        href: '#'
    },
    {
        title: 'Liverpool',
        href: '#'
    },
    {
        title: 'Leeds',
        href: '#'
    },
    {
        title: 'Glasgow',
        href: '#'
    },
    {
        title: 'Edinburgh',
        href: '#'
    },
    {
        title: 'Carbis Bay',
        href: '#'
    },
    {
        title: 'Brighton & Hove',
        href: '#'
    },
    {
        title: 'Bournemouth',
        href: '#'
    },
    {
        title: 'Blackpool',
        href: '#'
    },
    {
        title: 'Birmingham',
        href: '#'
    },
    {
        title: 'Stockholm',
        href: '#'
    },
    {
        title: 'Manila',
        href: '#'
    },
    {
        title: 'Kuala Lumpur',
        href: '#'
    },
    {
        title: 'Amsterdam',
        href: '#'
    },
    {
        title: 'New Delhi',
        href: '#'
    },
    {
        title: 'Mumbai',
        href: '#'
    },
    {
        title: 'Berlin',
        href: '#'
    },
    {
        title: 'Sydney',
        href: '#'
    },
    {
        title: 'Perth',
        href: '#'
    },
    {
        title: 'Melbourne',
        href: '#'
    },
    {
        title: 'Gold Coast',
        href: '#'
    }
];

const places = [
    {
        title: 'Portmeirion',
        href: '#'
    },
    {
        title: 'Niagara Falls State Park',
        href: '#'
    },
    {
        title: 'Heathrow Terminal 5',
        href: '#'
    },
    {
        title: 'Kalahari Waterpark Resort',
        href: '#'
    },
    {
        title: 'River Walk',
        href: '#'
    },
    {
        title: 'The Shard',
        href: '#'
    },
    {
        title: 'Disneyland',
        href: '#'
    },
    {
        title: 'Comal River Tubing',
        href: '#'
    },
    {
        title: 'Ocean City Boardwalk',
        href: '#'
    },
    {
        title: 'Universal Studios Orlando',
        href: '#'
    },
    {
        title: 'Heathrow Terminal 2',
        href: '#'
    }
];

function Destinations() {};

Destinations.prototype.init = function(array, wrapper) {
    array.map(el => {
        const link = document.createElement('a');
        link.textContent = el.title;
        link.href = el.href;

        return link;
    })
    .forEach(el => {
        wrapper.appendChild(el);
    })
}

new Destinations().init(regions, regionsWrapper);
new Destinations().init(cities, citiesWrapper);
new Destinations().init(places, placesWrapper);