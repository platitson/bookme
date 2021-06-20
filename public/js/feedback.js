const feedbackForm = document.querySelector('form.feedback-form');
const feedbackFields = Array.from(feedbackForm.querySelectorAll('.feedback-field'));
const thankMessage = document.querySelector('.thank-message');
const thankMessageButton = document.querySelector('.thank-message button');
const feedbacksPage = document.querySelector('.page-5');

function removeErrorMessages() {
    const errorMessages = document.querySelectorAll('.errorMessage');
    for (let i = 0; i < errorMessages.length; i++){
        errorMessages[i].remove();
    };
};

function checkFieldsPresence(){
    for (let i = 0; i < feedbackFields.length; i++){
        if (!feedbackFields[i].value){
        const errorMessage = document.createElement('p');
        errorMessage.innerHTML = 'Please, fill in this field';
        errorMessage.className = 'errorMessage';
        errorMessage.style.color = 'red';
        feedbackFields[i].after(errorMessage);
        };
    };
};

function clearField(el) {
    el.value = '';
};

function showThankMessage() {
    thankMessage.style.display = 'block';
    feedbackForm.classList.add('blur');
};

function hideThankMessage() {
    feedbackForm.classList.remove('blur');
    thankMessage.style.display = 'none';
}

let localStorageFeedbackNumber = 0;

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

        localStorageFeedbackNumber++;
        localStorage.setItem(`feedback-${localStorageFeedbackNumber}`, JSON.stringify({'feedbackName': `${feedbackFields[0].value}`, 'feedback-surname': `${feedbackFields[1].value}`, 'feedback-email': `${feedbackFields[2].value}`, 'feedback-message': `${feedbackFields[3].value}`}));
        feedbackFields.forEach(el => clearField(el));
        return localStorageFeedbackNumber;

    } else {
        checkFieldsPresence();
    }
});

function showFeedbacksPage() {
    if (localStorage.getItem('role') === 'admin') {
        feedbacksPage.style.display = 'inline-block';
    }; // после регистрации админу нужно обновить страницу, чтобы появилось
};

showFeedbacksPage();