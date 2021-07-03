const form = document.querySelector('.sign-in-form');
const content = document.querySelector('.content');
const continueButton = document.querySelector('.sign-in-form button');
const username = document.querySelector('input.username');
const password = document.querySelector('input.password');
const signInButton = document.querySelector('.sign-in-button');
const signInErrorMessage = document.querySelector('.sign-in-error');
const closeFormButton = document.querySelector('.close-form');
const personalAccountButton = document.querySelector('.personal-page');
const nameForWelcomeOnPersonalPage = document.querySelector('.personal-page-username');
const feedbacksPageButton = document.querySelectorAll('.feedbacks')[0];

// Sign-in form
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

function hideErrorMessage() {
    signInErrorMessage.style.display = 'none';
}

username.addEventListener('keyup', hideErrorMessage);
password.addEventListener('keyup', hideErrorMessage);

// Sign-in process
const users = [
    {
        username: '123',
        password: '123',
        data: {
            role: 'admin',
            name: 'Pavel',
            surname: 'Novak'
        }
    },
    {
        username: 'user',
        password: 'user',
        data: {
            role: 'user',
            name: 'Jan',
            surname: 'Svoboda'
        }
    },
];

window.addEventListener('load', () => {
    personalAccountButton.style.display = 'none';
    nameDisplayCheckAfterReload();
    showFeedbacksPageButton();
});

function onContinueButtonClick() {
    users.forEach((user) => {
        let loggedUserData;
        if (user.username === username.value && user.password === password.value) {
            loggedUserData = user.data;
        }
        if (loggedUserData) {
            form.style.display = 'none';
            content.classList.remove('blur');
            localStorage.setItem('username', username.value);
            localStorage.setItem('password', password.value);
            localStorage.setItem('name', loggedUserData.name);
            localStorage.setItem('role', loggedUserData.role);
            signInButton.style.display = 'none';
            personalAccountButton.style.display = 'inline-block';
            personalAccountButton.innerHTML = loggedUserData.name;
            welcomeBack();
            showFeedbacksPageButton();
        } else {
            signInErrorMessage.style.display = 'block';
        }
    });
}

continueButton.addEventListener('click', onContinueButtonClick);

function nameDisplayCheckAfterReload() {
    if (localStorage.getItem('username') && localStorage.getItem('password') && localStorage.getItem('name')) {
        signInButton.style.display = 'none';
        personalAccountButton.style.display = 'inline-block';
        personalAccountButton.innerHTML = localStorage.getItem('name');
        welcomeBack();
    }
}

function welcomeBack() {
    if (localStorage.getItem('name')) {
        nameForWelcomeOnPersonalPage.innerHTML = localStorage.getItem('name');
    }
}

function showFeedbacksPageButton() {
    if (localStorage.getItem('role') === 'admin') {
        feedbacksPageButton.style.display = 'inline-block';
    };
};