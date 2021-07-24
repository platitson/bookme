const feedbackForm = document.querySelector('form.feedback-form');
const feedbackFields = Array.from(feedbackForm.querySelectorAll('.feedback-field'));
const thankMessage = document.querySelector('.thank-message');
const thankMessageButton = document.querySelector('.thank-message button');
const errorMessages = Array.from(document.querySelectorAll('.feedback-error-message'));

function checkFieldsPresence() {
    for (let i = 0; i < feedbackFields.length; i++) {
        if (!feedbackFields[i].value) {
            errorMessages[i].style.display = 'block';
        };
    };
};

function removeErrorMessages() {
    for (let i = 0; i < feedbackFields.length; i++) {
        errorMessages[i].style.display = 'none';
    }
};

function showThankMessage() {
    thankMessage.style.display = 'block';
    feedbackForm.classList.add('blur');
};

function hideThankMessage() {
    feedbackForm.classList.remove('blur');
    thankMessage.style.display = 'none';
};

function clearField(el) {
    el.value = '';
};

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

feedbackForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    removeErrorMessages();
    if (document.querySelector('.feedback-form .email').value && !validateEmail(document.querySelector('.feedback-form .email').value)) {
        errorMessages[2].style.display = 'block';
    };
    if (feedbackFields.every(el => el.value) && validateEmail(document.querySelector('.feedback-form .email').value)) {
        showThankMessage();
        thankMessage.addEventListener('click', (event) => {
            let target = event.target;
            if (target.tagName != 'BUTTON') return;
            hideThankMessage();
        });

        const feedbackNumber = Number(localStorage.length) + 1;
        localStorage.setItem(`feedback-${feedbackNumber}`, JSON.stringify({ 'feedbackName': `${feedbackFields[0].value}`, 'feedbackSurname': `${feedbackFields[1].value}`, 'feedbackEmail': `${feedbackFields[2].value}`, 'feedbackMessage': `${feedbackFields[3].value}` }));
        feedbackFields.forEach(el => clearField(el));
    } else {
        checkFieldsPresence();
    }
});

feedbackFields.forEach(el => el.addEventListener('keyup', (evt) => {
    let i = feedbackFields.indexOf(evt.currentTarget);
    errorMessages[i].style.display = 'none';
}));