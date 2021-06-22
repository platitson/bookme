const pages = ['page-1', 'page-2', 'page-3', 'page-4', 'page-5'];

const hidePages = () => {
    pages.forEach(item => {
        document.querySelector(`main div.${item}`).style.display = 'none';
    });
};

window.addEventListener('load', () => {
    hidePages();
    document.querySelector('main div.page-1').style.display = 'block';
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