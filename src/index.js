import "./pages/index.css";
import { initialCards } from "./scripts/cards.js";
import { openPopup, closePopup } from "./components/modal.js";
import { createCard, deleteCallback, toggleLike } from "./components/card.js";

// переменные
const placesList = document.querySelector(".places__list");
const addCard = document.querySelector(".popup_type_new-card");
const profileAddButton = document.querySelector(".profile__add-button");
const popupImg = document.querySelector(".popup__image");
const popupTypeImg = document.querySelector(".popup_type_image");
const popupCaption = document.querySelector(".popup__caption");
const closePopupButton = document.querySelectorAll(".popup__close");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const profileTitle = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__description");
const profileEditButton = document.querySelector(".profile__edit-button");
const editFormProfile = document.querySelector('form[name="edit-profile"]');
const popupInuptName = editFormProfile.querySelector(".popup__input_type_name");
const popupDesc = editFormProfile.querySelector(".popup__input_type_description");
const formNewPlace = document.querySelector('form[name="new-place"]');
const cardNameInput = formNewPlace.querySelector(".popup__input_type_card-name");
const cardLinkInput = formNewPlace.querySelector(".popup__input_type_url");

initialCards.forEach(function (element) {
  const cardElement = createCard(
    element.name,
    element.link,
    deleteCallback,
    showImg,
    toggleLike
  );
  placesList.append(cardElement);
});

function showImg(link, name) {
  popupImg.src = link;
  popupImg.alt = name;
  popupCaption.textContent = name;
  openPopup(popupTypeImg);
}

function handleProfileSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = popupInuptName.value;
  profileDesc.textContent = popupDesc.value;
  closePopup(popupTypeEdit);
}
editFormProfile.addEventListener("submit", handleProfileSubmit);

profileEditButton.addEventListener("click", function () {
  popupInuptName.value = profileTitle.textContent;
  popupDesc.value = profileDesc.textContent;
  openPopup(popupTypeEdit);
});

profileAddButton.addEventListener("click", function () {
  openPopup(addCard);
});

function handleCardSubmit(event) {
  event.preventDefault();
  const cardName = cardNameInput.value;
  const cardLink = cardLinkInput.value;
  const cardElement = createCard(
    cardName,
    cardLink,
    deleteCallback,
    showImg,
    toggleLike
  );
  placesList.prepend(cardElement);
  closePopup(addCard);
  formNewPlace.reset();
}

formNewPlace.addEventListener("submit", handleCardSubmit);

closePopupButton.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => {
    closePopup(popup);
  });
});
