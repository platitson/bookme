const pages = ['stays', 'inspiration', 'personal-page', 'leave-your-feedback', 'feedbacks'];

const hidePages = () => {
    pages.forEach(item => {
        document.querySelector(`main div.${item}`).style.display = 'none';
    });
};

window.addEventListener('load', () => {
    hidePages();
    if (location.href != 'http://127.0.0.1:5500/public/index.html') {
        const linkEnd = location.href.split('#page=')[1];
        showPage(linkEnd);
    } else {
        document.querySelector('main div.stays').style.display = 'block';
    }
});

const showPage = (className) => {
    document.querySelector(`main div.${className}`).style.display = 'block';
    location.href = `http://127.0.0.1:5500/public/index.html#page=${className}`;
};

const onLinkClick = (evt) => {
    hidePages();
    showPage(evt.currentTarget.className);
};

pages.forEach(item => {
    document.querySelector(`header .${item}`).addEventListener('click', onLinkClick);
});

function showFeedbacksPageForAdminOnly() {
    if (localStorage.getItem('role') === 'admin') {
        document.querySelector('main div.page-5').style.display = 'block';
    } else {
        location.href = 'http://127.0.0.1:5500/public/index.html';
    }
};