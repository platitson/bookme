const arrow = document.querySelector('.coronavirus-wrapper img');
const contentCoronavirus = document.querySelector('.coronavirus-hidden');
const readMoreLink = document.querySelector('.coronavirus-hidden a');

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

readMoreLink.onclick = () => {
    location.href = 'https://www.google.com/search?q=coronavirus';
} // блокирует target="_blank"?