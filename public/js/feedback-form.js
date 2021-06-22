const feedbackForm = document.querySelector('form.feedback-form');
const feedbackFields = Array.from(feedbackForm.querySelectorAll('.feedback-field'));
const thankMessage = document.querySelector('.thank-message');
const thankMessageButton = document.querySelector('.thank-message button');

function removeErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].remove();
    };
};

feedbackFields.forEach(el => el.addEventListener('keyup', removeErrorMessages));

function checkFieldsPresence() {
    for (let i = 0; i < feedbackFields.length; i++) {
        if (!feedbackFields[i].value) {
            const errorMessage = document.createElement('p');
            errorMessage.innerHTML = 'Please, fill in this field';
            errorMessage.className = 'error-message';
            errorMessage.style.color = 'red';
            feedbackFields[i].after(errorMessage);
        };
    };
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

feedbackForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    removeErrorMessages();
    if (feedbackFields.every(el => el.value)) {

        // 18.1
        // alert('Thank you for your feedback');

        //18.2
        // showThankMessage();
        // thankMessageButton.addEventListener('click', hideThankMessage);

        //18.3
        showThankMessage();
        setTimeout(hideThankMessage, 2000);

        const feedbackNumber = Number(localStorage.length) + 1;
        localStorage.setItem(`feedback-${feedbackNumber}`, JSON.stringify({'feedbackName': `${feedbackFields[0].value}`, 'feedbackSurname': `${feedbackFields[1].value}`, 'feedbackEmail': `${feedbackFields[2].value}`, 'feedbackMessage': `${feedbackFields[3].value}`}));
        feedbackFields.forEach(el => clearField(el));
    } else {
        checkFieldsPresence();
    }
});