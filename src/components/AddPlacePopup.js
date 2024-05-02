import PopupWithForm from "./PopupWithForm";
function AddPlacePopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      isClose={props.isClose}
      title="Новое место"
      name="add-place"
    >
      <input
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
