import PopupWithForm from "./PopupWithForm";
function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      isClose={props.isClose}
      containerType="popup__container_type_update-avatar"
      title="Обновить аватар"
      name="update-avatar"
    >
      <input
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
