const buttons = ['regions', 'cities', 'places'];
const blocks = ['regions', 'cities', 'places'];

const hideBlocks = () => {
    blocks.forEach(item => {
        document.querySelector(`.destinations div.${item}`).style.display = 'none';
    });
};

const inactivateButtons = () => {
    buttons.forEach(item => {
        document.querySelector(`.destinations li.${item}`).classList.add('destinations-inactive');
    });
};

window.addEventListener('load', () => {
    hideBlocks();
    inactivateButtons();
    document.querySelector('.destinations div.regions').style.display = 'flex';
    document.querySelector('.destinations li.regions').classList.remove('destinations-inactive');
    document.querySelector('.destinations li.regions').classList.add('destinations-active');
});

const showBlock = (className) => {
    document.querySelector(`.destinations div.${className}`).style.display = 'flex';
    inactivateButtons();
    document.querySelector(`.destinations li.${className}`).classList.remove('destinations-inactive');
    document.querySelector(`.destinations li.${className}`).classList.add('destinations-active');
};

const onLinkClick = (evt) => {
    hideBlocks();
    evt.currentTarget.classList.remove('destinations-active');
    evt.currentTarget.classList.remove('destinations-inactive');
    showBlock(evt.currentTarget.className);
};

buttons.forEach(item => {
    document.querySelector(`.destinations li.${item}`).addEventListener('click', onLinkClick);
});