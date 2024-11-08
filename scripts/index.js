// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки

function createCard (cardData, removeCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    cardElement.querySelector(".card__title").textContent = cardData.name;
    cardImage.src = cardData.link;

    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener('click', () => removeCard(cardElement));

    return cardElement;

}

// @todo: Функция удаления карточки

function removeCard(cardElement) {
    cardElement.remove();
}

// @todo: Вывести карточки на страницу

function showCards() {
    initialCards.forEach((cardData) => {
        const cardElement = createCard(cardData, removeCard);
        placesList.append(cardElement);
    });
}

showCards();

