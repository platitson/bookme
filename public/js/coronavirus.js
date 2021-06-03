const arrow = document.querySelector('.coronavirus-wrapper img');
const contentCoronavirus = document.querySelector('.coronavirus-hidden');

function popupWindow() {
    contentCoronavirus.style.display = 'block';
}

arrow.addEventListener('click', popupWindow);

// Пока что добавила возможность открыть, осталось добавить закрыть :)