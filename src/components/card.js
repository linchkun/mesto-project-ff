function createCard(name, link, deleteCallback, showImg, toggleLike) {
  const cardTemplate = document.querySelector("#card-template");
  const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  deleteButton.addEventListener("click", () => deleteCallback(cardElement));
  likeButton.addEventListener("click", () => toggleLike(likeButton));
  cardImage.addEventListener("click", () => showImg(link, name));

  return cardElement;
}

function deleteCallback(cardElement) {
  cardElement.remove();
}

function toggleLike(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}

export { createCard, toggleLike, deleteCallback };
