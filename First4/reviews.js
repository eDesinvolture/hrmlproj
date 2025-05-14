document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = style.textContent = `
     #toggleForm {
        display: block;
        margin: 20px 0 30px 120px;
        color: #5D58F4;
        font-size: 18px;
        font-weight: 700;
        text-decoration: none;
        transition: opacity 0.3s;
    }
    #toggleForm:hover {
        opacity: 0.8;
        text-decoration: underline;
    }
    .input-container {
        width: 100%;
        border: 2px solid #5D58F4;
        border-radius: 10px;
        padding: 15px;
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        text-align: center;
    }
    .input-field {
        border: none;
        outline: none;
        font-size: 16px;
        width: 100%;
        background: transparent;
        color: #333;
        padding: 15px 20px;
    }
    .input-large {
        height: 150px;
        margin-top: 10px;
    }
    .review-button {
        background-color: #5D58F4;
        color: white;
        font-size: 20px;
        font-weight: bold;
        border: none;
        border-radius: 25px;
        padding: 12px 30px;
        width: 250px;
        margin: 20px auto;
        cursor: pointer;
        transition: background-color 0.3s;
        text-align: center;
    }
    .review-button:hover {
        background-color: #4A48D4;
    }
`;
document.head.appendChild(style);

const reviewSection = document.querySelector('.review-section');
const API_URL = 'https://jsonplaceholder.typicode.com/comments';

const toggleLink = document.createElement('a');
toggleLink.id = 'toggleForm';
toggleLink.href = '#';
toggleLink.textContent = '▼ Показать форму отзыва';

const emailContainer = document.createElement('div');
emailContainer.className = 'input-container';
const emailInput = document.createElement('input');
emailInput.className = 'input-field';
emailInput.type = 'email';
emailInput.placeholder = 'Ваш email';
emailContainer.appendChild(emailInput);

const nameContainer = document.createElement('div');
nameContainer.className = 'input-container';
const nameInput = document.createElement('input');
nameInput.className = 'input-field';
nameInput.placeholder = 'Ваше имя';
nameContainer.appendChild(nameInput);

const textContainer = document.createElement('div');
textContainer.className = 'input-container input-large';
const textarea = document.createElement('textarea');
textarea.className = 'input-field';
textarea.placeholder = 'Отзыв';
textContainer.appendChild(textarea);

const submitButton = document.createElement('button');
submitButton.className = 'review-button';
submitButton.textContent = 'Оставить отзыв';

reviewSection.prepend(toggleLink, emailContainer, nameContainer, textContainer, submitButton);

const init = () => {
    [emailContainer, nameContainer, textContainer, submitButton].forEach(el => el.style.display = 'none');

    toggleLink.addEventListener('click', function(e) {
        e.preventDefault();
        const isHidden = this.textContent.includes('Показать');
        [emailContainer, nameContainer, textContainer, submitButton].forEach(el =>
            el.style.display = isHidden ? 'flex' : 'none'
        );
        this.textContent = isHidden ? '▲ Скрыть форму отзыва' : '▼ Показать форму отзыва';
    });

    const loadReviews = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${API_URL}?_limit=1`);
        xhr.onload = () => {
            if(xhr.status === 200) {
                const reviews = JSON.parse(xhr.responseText);
                const reviewsColumn = document.querySelector('.reviews-column');
                reviewsColumn.querySelectorAll('.server-review').forEach(el => el.remove());
                reviews.forEach(review => {
                    const reviewElement = document.createElement('div');
                    reviewElement.className = 'review-item server-review';
                    reviewElement.innerHTML = `
                        <div class="review-name">${review.name}</div>
                        <div class="review-text">${review.body}</div>
                        <div class="review-email">${review.email}</div>
                    `;
                    reviewsColumn.appendChild(reviewElement);
                });
            }
        };
        xhr.send();
    };

    submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailPattern.test(emailInput.value)) {
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        name: nameInput.value,
                        body: textarea.value,
                        email: emailInput.value
                    })
                });
                const newReview = await response.json();
                const reviewElement = document.createElement('div');
                reviewElement.className = 'review-item server-review';
                reviewElement.innerHTML = `
                    <div class="review-name">${newReview.name}</div>
                    <div class="review-text">${newReview.body}</div>
                    <div class="review-email">${newReview.email}</div>
                `;
                document.querySelector('.reviews-column').prepend(reviewElement);
                nameInput.value = '';
                textarea.value = '';
                emailInput.value = '';
                alert('Отзыв успешно отправлен!');
            } catch(error) {
                console.error('Ошибка:', error);
                alert('Ошибка при отправке отзыва');
            }
        } else {
            alert('Пожалуйста, введите корректный email!');
            emailInput.focus();
        }
    });

    loadReviews();
};

init();
});