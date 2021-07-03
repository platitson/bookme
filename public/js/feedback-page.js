const feedbacksWrapper = document.querySelector('.feedbacks-wrapper');

const feedbacks = [];


const noFeedbacksMessage = () => {
    if (feedbacks.length === 0) {
        const message = document.createElement('h1');
        message.innerHTML = 'So far no one has written anything for you...';
        feedbacksWrapper.appendChild(message);
        return message;
    }
}
function Feedbacks() {};

Feedbacks.prototype.init = function() {
    for (let i = 0; i <= localStorage.length; i++){
        if (localStorage.getItem(`feedback-${i}`)){
           let feedback = JSON.parse(localStorage.getItem(`feedback-${i}`));
            feedbacks.push(feedback);
        }
    }

    noFeedbacksMessage();
    
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
        feedbacksWrapper.appendChild(feedbackOnPage);
        return feedbacksWrapper;
    })
}

Feedbacks.prototype.init();