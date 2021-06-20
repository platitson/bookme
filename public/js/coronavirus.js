const arrow = document.querySelector('.coronavirus-wrapper img');
const contentCoronavirus = document.querySelector('.coronavirus-hidden');

window.addEventListener('load', () => {
    contentCoronavirus.style.display = 'none';
});

function popupWindow() {
    if (contentCoronavirus.style.display === 'none'){
        contentCoronavirus.style.display = 'block';
        arrow.style.transform = "rotate(180deg)";
    } else {
        contentCoronavirus.style.display = 'none';
        arrow.style.transform = 'none';
    }
}

arrow.addEventListener('click', popupWindow);