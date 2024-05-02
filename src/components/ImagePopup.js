function ImagePopup(props) {
  const { card, isClose } = props;
  return (
    <div
      className={`popup popup_type_opened-image ${card ? "popup_opened" : ""}`}
    >
      <div className="popup__container-image">
        <img className="popup__image" src={card.link} alt={card.name} />
        <p className="popup__text">{card.name}</p>
        <button
          onClick={isClose}
          className="popup__close popup__close_type_opened-image"
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
