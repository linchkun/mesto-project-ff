function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  popup.classList.remove("popup_is-animated");
  document.addEventListener("keydown", escPopupClose);
  popup.addEventListener("mousedown", overlayPopupClose);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  popup.classList.add("popup_is-animated");
  document.removeEventListener("keydown", escPopupClose);
  popup.removeEventListener("mousedown", overlayPopupClose);
}

function overlayPopupClose(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.currentTarget);
  }
}

function escPopupClose(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_is-opened"));
  }
}

export { openPopup, closePopup };
