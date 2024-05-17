function PopupWithForm(props) {
  const { isOpen, isClose, containerType, onSubmit } = props;
  return (
    <div
      className={`popup popup_type_${props.name} ${
        isOpen ? "popup_opened" : ""
      }`}
    >
      <div className={`popup__container ${containerType}`}>
        <h2 className="popup__title">{props.title}</h2>
        <form
          className={`popup__form popup__form_type_${props.name}`}
          noValidate
          onSubmit={onSubmit}
        >
          {props.children}
          <button type="submit" className="popup__button">
            Сохранить
          </button>
        </form>
        <button
          onClick={isClose}
          className={`popup__close popup__close_type_${props.name}`}
          type="button"
        ></button>
      </div>
    </div>
  );
}
export default PopupWithForm;
