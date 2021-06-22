const feedbacksPage = document.querySelectorAll('.page-5')[1];
const feedbacksPageButton = document.querySelectorAll('.page-5')[0];

function showFeedbacksPageButton() {
    if (localStorage.getItem('role') === 'admin') {
        feedbacksPageButton.style.display = 'inline-block';
    }; // после регистрации админу нужно обновить страницу, чтобы появилось
};

showFeedbacksPageButton();

const feedbacks = [];

function Feedbacks() {};

Feedbacks.prototype.init = function() {
    for (let i = 0; i <= localStorage.length; i++){
        if (localStorage.getItem(`feedback-${i}`)){
           let feedback = JSON.parse(localStorage.getItem(`feedback-${i}`));
            feedbacks.push(feedback);
        }
    }
    const feedbacksWrapper = document.createElement('div');
    feedbacksWrapper.classList.add('container');
    feedbacksWrapper.classList.add('feedbacks-wrapper');
    
    feedbacks.map(el => {
        const feedbackOnPage = document.createElement('div');
        feedbackOnPage.classList.add('feedbacks-items');
        const feedbackName = document.createElement('p');
        feedbackName.textContent = `Name: ${el.feedbackName} ${el.feedbackSurname}`;
        const feedbackEmail = document.createElement('p');
        feedbackEmail.textContent = `E-mail: ${el.feedbackEmail}`;
        const feedbackMessage = document.createElement('p');
        feedbackMessage.textContent = `Comment: ${el.feedbackMessage}`;
        feedbackOnPage.appendChild(feedbackName);
        feedbackOnPage.appendChild(feedbackEmail);
        feedbackOnPage.appendChild(feedbackMessage);
        feedbacksWrapper.appendChild( feedbackOnPage);
        feedbacksPage.appendChild(feedbacksWrapper);
        return feedbacksPage;
    })
}

Feedbacks.prototype.init();