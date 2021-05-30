const form = document.querySelector('.sign-in-form');
const content = document.querySelector('.content');
const continueButton = document.querySelector('.sign-in-form button');
const username = document.querySelector('input.username');
const password = document.querySelector('input.password');
const signInButton = document.querySelector('.sign-in-button');
const signInErrorMessage = document.querySelector('.sign-in-error');
const closeFormButton = document.querySelector('.close-form');

const users = [
    {
        username: '123',
        password: '123',
        data: {
            name: 'Pavel',
            surname: 'Novak'
        }
    },
    {
        username: 'user',
        password: 'user',
        data: {
            name: 'Jan',
            surname: 'Svoboda'
        }
    },
];

function showSignInForm() {
    form.style.display = 'block';
    content.classList.add('blur');
}

signInButton.addEventListener('click', showSignInForm);

function closeForm() {
    form.style.display = 'none';
    content.classList.remove('blur');
}

closeFormButton.addEventListener('click', closeForm);

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
})

function onContinueButtonClick() {
    users.forEach((user) => {
        let currentUsername = username.value;
        let currentPassword = password.value;
        let loggedUserData;
        if (user.username === currentUsername && user.password === currentPassword) {
            loggedUserData = user.data;
        }

        if (loggedUserData) {
            form.style.display = 'none';
            content.classList.remove('blur');
            localStorage.setItem('username', currentUsername);
            localStorage.setItem('password', currentPassword);
            localStorage.setItem('name', loggedUserData.name);
            signInButton.innerHTML = loggedUserData.name;
            signInButton.removeEventListener('click', showSignInForm);
            signInButton.addEventListener('click', redirect);
        } else {
            signInErrorMessage.style.display = 'block';
        }
    });
}

function redirect() {
    location.href = './page-3/index.html'; // как записать ссылку так, чтобы заходя с любой страницы путь был найден? От корня / не понимает. Пока что войти в ЛК можно только с главной страницы.
}

continueButton.addEventListener('click', onContinueButtonClick);

function hideErrorMessage() {
    signInErrorMessage.style.display = 'none';
}

username.addEventListener('keyup', hideErrorMessage);
password.addEventListener('keyup', hideErrorMessage);

function nameDisplayCheck() {
    if (localStorage.getItem('username') && localStorage.getItem('password') && localStorage.getItem('name')) {
        signInButton.innerHTML = localStorage.getItem('name');
        signInButton.removeEventListener('click', showSignInForm);
        signInButton.addEventListener('click', redirect);
    }
}

document.body.onload = nameDisplayCheck;






// export;
// см. описание проблемы экспорта в main.js