import PopupWithForm from "./PopupWithForm";
import React from "react";
function AddPlacePopup(props) {
  const inputName = React.useRef("");
  const inputLink = React.useRef("");
  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: inputName.current.value,
      link: inputLink.current.value,
    });
  }
  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      isClose={props.isClose}
      title="Новое место"
      name="add-place"
    >
      <input
        ref={inputName}
        className="popup__input"
        id="input-name-place"
        type="text"
        name="name"
        placeholder="Название"
        required
        minLength="2"
        maxLength="30"
      />
      <span className="popup__span-error input-name-place-error"></span>
      <input
        ref={inputLink}
        className="popup__input"
        id="input-url"
        name="link"
        type="url"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__span-error input-url-error"></span>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
