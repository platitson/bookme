const pages = ['stays', 'inspiration', 'personal-page', 'leave-your-feedback', 'feedbacks'];
const searchResultPage = document.querySelectorAll('.search-results')[1];

const hidePages = () => {
    pages.forEach(item => {
        document.querySelector(`main div.${item}`).style.display = 'none';
        searchResultPage.style.display = 'none';
    });
};

const showPage = (className) => {
    document.querySelector(`main div.${className}`).style.display = 'block';
    location.href = `#page=${className}`;
};

window.addEventListener('load', () => {
    hidePages();
    if (location.hash === '#page=feedbacks' && localStorage.getItem('role') === 'admin') {
        showPage('feedbacks');
    } else if (location.hash && location.hash !== '#page=feedbacks') {
        const linkEnd = location.href.split('#page=')[1];
        showPage(linkEnd);
    } else {
        showPage('stays');
    }
});

const onLinkClick = (evt) => {
    hidePages();
    showPage(evt.currentTarget.className);
};

pages.forEach(item => {
       document.querySelector(`header .${item}`).addEventListener('click', onLinkClick); 
});