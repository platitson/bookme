const arrow = document.querySelector('.coronavirus-wrapper img');
const contentCoronavirusHidden = document.querySelector('.coronavirus-hidden');
const contentCoronavirusVisible = document.querySelector('.coronavirus-wrapper');

window.addEventListener('load', () => {
    contentCoronavirusHidden.style.display = 'none';
});

function showWindow() {
    if (contentCoronavirusHidden.style.display === 'none'){
        contentCoronavirusHidden.style.display = 'block';
        arrow.style.transform = "rotate(180deg)";
    } else {
        contentCoronavirusHidden.style.display = 'none';
        arrow.style.transform = 'none';
    }
}

contentCoronavirusVisible.addEventListener('click', showWindow);