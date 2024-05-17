import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
function EditProfilePopup(props) {
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  //Обработчики измения инпутов
  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      onSubmit={handleSubmit}
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
        onChange={handleChangeName}
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
        onChange={handleChangeDescription}
      />
      <span className="popup__span-error input-job-error"></span>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
