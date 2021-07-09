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
    if (localStorage.getItem('language') === 'CZ') {
       headerLanguageButton.innerHTML = '<img src="images/languages/czech.png" alt="">'; 
    } else {
        headerLanguageButton.innerHTML = '<img src="images/languages/english.png" alt="">'; 
    } 
}

window.addEventListener('load', changeLanguageImage);

function LanguageMenu() {
    languageFormButtons.forEach(item => {
        item.addEventListener('click', function (evt) {
            evt.preventDefault();
            const event = new CustomEvent('passTranslation', { detail: this.dataset["languageKey"] });
            window.dispatchEvent(event);
            closeLanguageSelectForm();
            changeLanguageImage();
        });
    });
};

export { LanguageMenu };