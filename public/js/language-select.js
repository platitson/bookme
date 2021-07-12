const languageSelectForm = document.querySelector('.select-language');
const languageFormButtons = Array.from(document.querySelectorAll('.select-language-button'));
const headerLanguageButton = document.querySelectorAll('.lang-button')[0];
const closeLanguageSelectFormButton = document.querySelector('.close-language-form');

function showLanguageSelectForm() {
    languageSelectForm.style.display = 'block';
};

headerLanguageButton.addEventListener('click', showLanguageSelectForm);

function closeLanguageSelectForm() {
    languageSelectForm.style.display = 'none';
};

closeLanguageSelectFormButton.addEventListener('click', closeLanguageSelectForm);

function changeLanguageImage() {
    let langImage = headerLanguageButton.querySelector('img');
    if (localStorage.getItem('language') === 'CZ') {
       langImage.src = './images/languages/czech.png'; 
    } else {
        langImage.src = './images/languages/english.png'; 
    } 
}

window.addEventListener('load', changeLanguageImage);

function translatePlaceholders() {
    if (localStorage.getItem('language') === 'CZ') {
        document.querySelector('.place-input input').placeholder = 'Kam se chystáte?';
        document.querySelector('footer input').placeholder = 'Váš e-mail';
        document.querySelector('.first-name').placeholder = 'Jméno';
        document.querySelector('.last-name').placeholder = 'Příjmení';
        document.querySelector('.email').placeholder = 'Váš e-mail';
        document.querySelector('#feedback-message').placeholder = 'Zanechte svou zprávu zde...';
    } else {
        document.querySelector('.place-input input').placeholder = 'Where are you going?';
        document.querySelector('footer input').placeholder = 'Your e-mail';
        document.querySelector('.first-name').placeholder = 'First name';
        document.querySelector('.last-name').placeholder = 'Last name';
        document.querySelector('.email').placeholder = 'Your e-mail';
        document.querySelector('#feedback-message').placeholder = 'Leave your message here...';
    }
}

function LanguageMenu() {
    languageFormButtons.forEach(item => {
        item.addEventListener('click', function (evt) {
            evt.preventDefault();
            const event = new CustomEvent('passTranslation', { detail: this.dataset["languageKey"] });
            window.dispatchEvent(event);
            closeLanguageSelectForm();
            changeLanguageImage();
            translatePlaceholders();
        });
    });
};

export { LanguageMenu };