import PopupWithForm from "./PopupWithForm";
import React from "react";
function EditAvatarPopup(props) {
  const inputEl = React.useRef("");
  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: inputEl.current.value,
    });
  }
  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      isClose={props.isClose}
      containerType="popup__container_type_update-avatar"
      title="Обновить аватар"
      name="update-avatar"
    >
      <input
        ref={inputEl}
        className="popup__input popup__input_type_update-avatar"
        id="input-url"
        name="avatar"
        type="url"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__span-error input-url-error"></span>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
