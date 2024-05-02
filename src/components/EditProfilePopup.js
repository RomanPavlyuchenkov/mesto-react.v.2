import PopupWithForm from "./PopupWithForm";
function EditProfilePopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      isClose={props.isClose}
      title="Редактировать профиль"
      name="edit-profile"
    >
      <input
        className="popup__input"
        id="input-name"
        name="name"
        type="text"
        required
        minLength="2"
        maxLength="40"
      />
      <span className="popup__span-error input-name-error"></span>
      <input
        className="popup__input"
        id="input-job"
        name="about"
        type="text"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="popup__span-error input-job-error"></span>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
