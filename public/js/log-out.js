const logOutButton = document.querySelector('.log-out');

function logOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
    location.href = 'index.html';
}

logOutButton.addEventListener('click', logOut);